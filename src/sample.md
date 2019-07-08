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
liquidity hodl.liq --json --no-annot
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
    const hodl_code = [{"prim":"parameter","args":[{"prim":"or","args":[..."prim":"DROP"}]]}]]}]

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

### 4) Interacting with TezBridge

## Step4: ...