# DApp sample: HODL my XTZs

This DApp contains a `hodl.html` HTML file and a `hodl.mligo` smart contract file.

## Target
Let's create a simple XTZs HODL smart contract for ourselves. 

It should contain these abilities:
1. Deposit XTZs.
2. Withdraw XTZs.
3. Setting the time lock.
4. You can only withdraw the XTZs after the time lock is expried.

There are two main concepts in the Tezos smart contract system you need to know, storage and entry.

**Storage** is like a database for backend services. It holds the data and can be manipulated by the contract script.

**Entry** is like the public API of a contract. You can call(transfer to) the contract though its multiple entires only.

## Contract creation

Create a file named **`hodl.mligo`**:
```ocaml
type storage = {
  owner: address;
  lock: timestamp;
}

type entries =
| Deposit of unit
| Withdraw of tez
| Set_locker of timestamp

let main (p : entries) storage = 
  match p with
  | Deposit unit ->
    ([] : operation list), storage

  | Withdraw amount ->
    let _ = 
      if sender <> storage.owner then failwith "invalid sender" else
      if time < storage.lock then failwith "haven't reached the lock time" else
      if balance < amount then failwith "balance is not enough"
    in
    let sender_contract : unit contract = Operation.get_contract sender in
    [Operation.transaction unit amount sender_contract], storage

  | Set_locker lock_time ->
    let _ =
      if sender <> storage.owner then failwith "invalid sender" else
      if time < storage.lock then failwith "haven't reached the locker time" else
      if lock_time < time then failwith "the parameter time should be greater than current time"
    in
    ([] : operation list), {owner = storage.owner; lock = lock_time}

```

(P.S. You can also use the Pascal grammar)

## Contract origination
Compile the mligo file with this command:
```sh
ligo compile-contract --michelson-format=json hodl.mligo main > hodl.json
```

Then we can get a compiled file named **`hodl.json`**.

Then let's get the initial storage:
```sh
ligo compile-storage --michelson-format=json hodl.mligo main '{owner = "PUT THE FaucetA ADDRESS HERE!!!"; locker = 0}' > hodl.storage.json
```

Then we can get a compiled file named **`hodl.storage.json`**.

With the two json files, you can originate the contract though [these steps](/dapp/originate_contract) and get the originated contract result back.

Keep the originated contract address, we'll use it soon.

## HTML creation

Create a HTML named `hodl.html`:
```html
<!DOCTYPE html>
<html>
<head>
  <title>HODL</title>
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
  <script>
    const hodl_contract = '!!! Put the originated contract address here !!!'
    const elems = {
      state: document.getElementById('state'),
      source: document.getElementById('source'),
      deposit_amount: document.getElementById('deposit_amount'),
      withdraw_amount: document.getElementById('withdraw_amount'),
      lock_time: document.getElementById('lock_time')
    }

    function getSource() {
      tezbridge.request({method: 'get_source'})
      .then(address => elems.source.innerHTML = address)
      .catch(error => elems.state.innerHTML = error.toString())
    }

    function deposit(){
      // The type of amount should be string which repesents `mutez`(1/1000000XTZ)
      const amount = parseInt(elems.deposit_amount.value).toString()

      tezbridge.request({
        method: 'inject_operations',
        operations: [
          {
            kind: 'transaction',
            destination: hodl_contract,
            amount: amount,
            parameters: {
              entrypoint: 'deposit',
              value: {"prim":"Unit"}
            }
          }
        ]
      })
      .then(result => elems.state.innerHTML = JSON.stringify(result))
      .catch(error => elems.state.innerHTML = error.toString())
    }

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
              entrypoint: 'withdraw',
              value: {int: amount}
            }
          }
        ]
      })
      .then(result => elems.state.innerHTML = JSON.stringify(result))
      .catch(error => elems.state.innerHTML = error.toString())
    }

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
              entrypoint: 'set_locker',
              value: {int: timestamp}
            }
          }
        ]
      })
      .then(result => elems.state.innerHTML = JSON.stringify(result))
      .catch(error => elems.state.innerHTML = error.toString())
    }
  </script>
</body>
</html>
```

## HTML hosting

Host the `hodl.html` file.
For python users
```
python -m SimpleHTTPServer 1234
```

For npm package http-server users
```
hs -p 1234
```

For parcel-bundler users
```
parcel hodl.html
```

Now open [http://localhost:1234/hodl.html](http://localhost:1234/hodl.html) to view the HODL page and try the DApp you just built.

**Tips**: [https://better-call.dev/](https://better-call.dev/) is highly recommended for result inspection. Just throw your contract address in the search bar and select the correct chain net(testnet/alphanet/babylon), then every detailed transaction will be displayed.

## Interacting demo

<gif-loader src="/imgs/sample_hodl.gif" />
