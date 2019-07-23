# DApp with TezBridge starting from zero
This is a complete example to represent the whole process of building a simple DApp and make it interacting with the TezBridge.

Notice that you should use `alphanet` with the same protocol as the `mainnet` has to try the following steps.

## Step1: Preparation
1. Go to [https://faucet.tzalpha.net](https://faucet.tzalpha.net) and get a facuet JSON file.
2. Open [https://www.tezbridge.com](https://www.tezbridge.com).
3. Check **Settings > Host** and make sure it's an `alphanet` RPC host. (Like `https://alphanet.tezrpc.me` or `https://alphanet-node.tzscan.io`)
4. Click **Import key** and paste the content of the facuet JSON file in the input box. Then set the **Manager name** as `FacuetA`, type the locking password and press **Confirm**. (If this manager hasn't been activated before, TezBridge will automatically activate it for you. But it takes one block to confirm the activation.)
5. After the activation is finished (about one minute), you can check the manager balance by clicking **Local managers > FaucetA > tz1...**

## Step2: Create the smart contract
Let's create a simple XTZ HODL smart contract. 

It should contain these abilities:
1. Deposit XTZs.
2. Withdraw XTZs.
3. Setting time lock.

There are two main concepts in the Tezos smart contract system you need to know, storage and entry.

**Storage** is like database for backend. It holds the data and can be manipulated by its contract script.

**Entry** is like the public API of a contract. You can call(transfer to) the contract though its multiple entires only.

### If you want to use [Liquidity](http://www.liquidity-lang.org/)

Here is a linux Liquidity [binary(1.043)](https://github.com/tezbridge/docs/files/3416729/liquidity-1.043.zip) file for those who doesn't want to face the compilation issues.

Let's create a file named `hodl.liq`:
```OCaml
type storage = {
  owner: address;
  lock: timestamp;
}

let%entry deposit () storage =
  [], storage

let%entry withdraw (amount : tez) storage =
  if Current.sender () <> storage.owner then
    failwith "invalid sender"
  else
  if Current.time () < storage.lock then
    failwith "haven't reached the lock time"
  else
  if Current.balance () < amount then
    failwith "balance is not enough"
  else
    let sender_contract = 
      match (Contract.at (Current.sender ()) : UnitContract.instance option) with
      | None -> failwith "invalid sender"
      | Some x -> x
    in
    [sender_contract.main () amount], storage

let%entry set_locker (time : timestamp) storage =
  if Current.sender () <> storage.owner then
    failwith "invalid sender"
  else
  if Current.time () < storage.lock then
    failwith "haven't reached the locker time"
  else
  if time < Current.time () then
    failwith "the parameter time should be greater than current time"
  else
    [], storage.lock <- time
```

Then compile the `hodl.liq` file with this command:
```sh
./liquidity hodl.liq --json --no-annot
```
Now we get a compiled file named **`hodl.tz.json`**.

## Step3: Originate the smart contract

### 1) We need an initial storage
Smart contracts in Tezos blockchain can store data in their respective storages. So we need to set an initial storage for contract origination.

The storage type of HODL contract is:
```
(pair address timestamp)
```
And the JSON representation is:
```json
// it's a type
{
  "prim": "pair",
  "args": [{
    "prim": "address"
  }, {
    "prim": "timestamp"
  }]
}
```

Remember that it's a type of the storage, so we should construct the data of the storage according to the type above.

```javascript
const hodl_init_storage = {
  "prim": "Pair",
  "args": [{
    "string": "tz1..."  // this should be the owner of the contract, use your FaucetA's manager
  }, {
    "int": "0"  // no lock
  }]
}
```


### 2) Build a tool page to originate the contract

`tool.html`:
```html
<!DOCTYPE html>
<html>
<head>
  <title>My tool</title>
  <script src="https://www.tezbridge.com/plugin.js"></script>
  <script>
    // set hodl_code to the content of `hodl.tz.json`
    const hodl_code = [{"prim":"parameter"........."prim":"DROP"}]]}]]}]

    const hodl_init_storage = {
      "prim": "Pair",
      "args": [{
        "string": "tz1..."  // Use your FaucetA's manager
      }, {
        "int": "0"
      }]
    }
  </script>
</head>
<body>
  <button onclick="originate_hodl()">Originate HODL contract</button>
  <pre id="result"></pre>

  <script>
    const result_elem = document.getElementById('result')

    const originate_hodl = () => {
      tezbridge.request({
        method: 'inject_operations',
        operations: [
          {
            kind: 'origination',
            spendable: false,
            script: {
              code: hodl_code,
              storage: hodl_init_storage
            }
          }
        ]
      })
      .then(result => result_elem.innerHTML = JSON.stringify(result))
      .catch(err => result_elem.innerHTML = JSON.stringify(err))
    }
  </script>
</body>
</html>
```

### 3) Host the `tool.html` file
#### For python users
```
python -m SimpleHTTPServer 1234
```

#### For npm package `http-server` users
```
hs -p 1234
```

#### For parcel-bundler users
```
parcel tool.html
```

Now open [http://localhost:1234/tool.html](http://localhost:1234/tool.html) to view the tool page.

### 4) Interacting with TezBridge
Click the **Originate HODL contract** button on the tool page and the browser will open a new window with location at `https://www.tezbridge.com/index.html?signer`.

Then go **Local managers -> FaucetA** and enter the locking password you set before. If the password is correct, the TezBridge will automatically show the public hash key(address). Click the `tz1...` address and click `Use as signer`.

You will get noticed that the arrow left to the **DApp requests** is blinking now, which means something is updated. So click the **DApp requests**.

Much useful infomation shows here:
1. Current manager's address, which indicate the secret key you are using to sign.
2. Current source's address. You can use any spendable account(KT1 or tz) to be the source, but the manager of the account has to be the current manager from point 1.
3. Current protocol and RPC host.
4. The request operation infomation.
5. Approve and reject button.

Let's click **Approve**. Here are the TezBridge processing steps:
1. Set all the gas_limit, storage_limit, fee of operations to maximum.
2. Get operation bytes from RPC node.
3. Generate operation bytes locally.
4. Assert the result of @1 and @2 should be equal.
5. Run the operation on RPC node to get operation result.
6. Extract the cost gas_limit, storage_limit in operation result and calculate the minimal fee.
7. Set the gas_limit, storage_limit and the fee to operations.
8. Get operation bytes from RPC node.
9. Generate operation bytes locally.
10. Assert the result of @8 and @9 should be equal.
11. Sign the operation bytes and inject the signed bytes though the RPC node.

After these steps, the signer page will get the result and post it to our tool page. Switch to our tool page, then you can get the result. 

It should be like this:
```
{"operation_id":"ooeAeGG2FXXKCRhJoh7VRgUqe4PYdL2nkf5HC6fmFdJ8HRPy1ga","originated_contracts":[["KT1DY8gJ63E7EqpHKLusrDDRahRcEJHwdoNu"]]}
```

Now the contract has been originated, and the address of our contract on the **alphanet** is `KT1DY8gJ63E7EqpHKLusrDDRahRcEJHwdoNu`.

## Step4: Create the DApp page

Let's create a new page named `my_hodl.html`:
```html
<!DOCTYPE html>
<html>
<head>
  <title>My HODL</title>
  <script src="https://www.tezbridge.com/plugin.js"></script>
</head>
<body>
  <div>
    state: <span id="state"></span>
  </div>
  <div>
    source: <span id="source"></span>
    <button onclick="getSource()">Get source</button>
  </div>
  <div>
    <input id="deposit_amount" type="number" />mutez
    <button onclick="deposit()">Deposit</button>
  </div>
  <div>
    <input id="withdraw_amount" type="number" />mutez
    <button onclick="withdraw()">Withdraw</button>
  </div>
  <div>
    <input id="lock_time" type="datetime-local" />
    <button onclick="setLocker()">Set time lock</button>
  </div>
  <!-- Position 1 -->
</body>
</html>
```

The code above is a basic template of our DApp page. Then we'll add the features into it.

### 0) Some definitions
```javascript
const hodl_contract = 'KT1DY8gJ63E7EqpHKLusrDDRahRcEJHwdoNu'
const elems = {
  state: document.getElementById('state'),
  source: document.getElementById('source'),
  deposit_amount: document.getElementById('deposit_amount'),
  withdraw_amount: document.getElementById('withdraw_amount'),
  lock_time: document.getElementById('lock_time')
}
```

### 1) Get the source of signer
```javascript
function getSource() {
  tezbridge.request({method: 'get_source'})
  .then(address => elems.source.innerHTML = address)
  .catch(error => elems.state.innerHTML = error.toString())
}
```

### 2) Deposit function
```javascript
function deposit(){
  // The type of amount should be string which repesents `mutez`(1/1000000XTZ)
  const amount = parseInt(elems.deposit_amount.value).toString()

  tezbridge.request({
    method: 'inject_operations',
    operations: [
      {
        kind: 'transaction',
        amount: amount,
        parameters: {
          "prim": "Left",
          "args": [{"prim":"unit"}]
        }
      }
    ]
  })
  .then(result => elems.state.innerHTML = JSON.stringify(result))
  .catch(error => elems.state.innerHTML = error.toString())
}
```

### 3) Withdraw function
```javascript
function withdraw() {
  // The type of amount should be string which repesents `mutez`(1/1000000XTZ)
  const amount = parseInt(elems.withdraw_amount.value).toString()

  tezbridge.request({
    method: 'inject_operations',
    operations: [
      {
        kind: 'transaction',
        amount: '0',
        destination: hodl_contract,
        parameters: {
          "prim": "Right",
          "args": [{
            "prim": "Left",
            "args": [{int: amount}]
          }]
        }
      }
    ]
  })
  .then(result => elems.state.innerHTML = JSON.stringify(result))
  .catch(error => elems.state.innerHTML = error.toString())
}
```

### 4) Set locker function
```javascript
function setLocker() {
  const timestamp = (+new Date(elems.lock_time.value) / 1000).toString()

  tezbridge.request({
    method: 'inject_operations',
    operations: [
      {
        kind: 'transaction',
        amount: '0',
        destination: hodl_contract,
        parameters: {
          "prim": "Right",
          "args": [{
            "prim": "Right",
            "args": [{int: timestamp}]
          }]
        }
      }
    ]
  })
  .then(result => elems.state.innerHTML = JSON.stringify(result))
  .catch(error => elems.state.innerHTML = error.toString())
}
```