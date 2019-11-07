# DApp sample: Contract as module

This DApp contains one HTML file and two abstract smart contract files.

## Target
To keep the contracts simple and show an idea that one contract can be a common module, let's create two abstract smart contracts `main` and `lib`. 

We need to add these features into the contracts:
1. `main` keep a state in its storage.
2. `lib` contains a calculation module.
3. `main` should update its state in the storage by the result of calling `B` in one transaction.

## Contract creation

Create a file named **`main.mligo`**:
```ocaml
type storage = {
  lib_addr: address;
  state: int;
}

type main_entries =
| Request of int * int
| Update of int

type lib_entries = int * int

let%entry main (p : main_entries) storage = 
  match p with
  | Request req_params ->
    let lib_contract : lib_entries contract = Operation.get_contract storage.lib_addr in
    [Operation.transaction req_params 0tz lib_contract], storage

  | Update result ->
    let _ =
      if sender <> storage.lib_addr then failwith "Can only be updated by lib contract"
    in
    ([] : operation list), {state = result; lib_addr = storage.lib_addr}
```

Create an another file named **`lib.mligo`**:
```ocaml
type storage = unit

type main_entries =
| Request of int * int
| Update of int

type lib_entries = int * int

let%entry main (p : lib_entries) storage = 
  let callback_contract : main_entries contract = Operation.get_contract sender in
  [Operation.transaction (Update (p.(0) + p.(1))) 0tz callback_contract], storage

```

(P.S. You can also use the Pascal grammar)

## Contract origination
Compile the mligo files with this command:
```sh
ligo compile-contract --michelson-format=json main.mligo main > main.json
ligo compile-contract --michelson-format=json lib.mligo main > lib.json
```

Then we can get two compiled files named **`main.json`** and **`lib.json`**.

Then let's get the lib's initial storage:
```sh
ligo compile-storage --michelson-format=json lib.mligo main 'unit' > lib.storage.json
```

Then we can get a compiled file named **`lib.storage.json`**.

Now we have to [originate](/dapp/originate_contract) the **`lib.json`** with **`lib.storage.json`** first which is different from what we did in [/dapp/sample_hodl.html#contract-origination](/dapp/sample_hodl.html#contract-origination).

After originating the lib contract, we can set the initial storage for main contract.
```sh
ligo compile-storage --michelson-format=json main.mligo main '{lib_addr = "PUT THE lib CONTRACT ADDRESS HERE!!!"; state = 0}' > main.storage.json
```

Finally we get our main contract address, let's keep it for later usage.

## HTML creation

Create a HTML named `module.html`:
```html
<!DOCTYPE html>
<html>
<head>
  <title>Contract as module</title>
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
    <input id="x" type="number" /> +
    <input id="y" type="number" />
    <button onclick="request()">Request</button>
  </div>
  <script>
    const contract_addr = '!!! Put the originated contract address here !!!'
    const elems = {
      state: document.getElementById('state'),
      source: document.getElementById('source'),
      x: document.getElementById('x'),
      y: document.getElementById('y')
    }

    function getSource() {
      tezbridge.request({method: 'get_source'})
      .then(address => elems.source.innerHTML = address)
      .catch(error => elems.state.innerHTML = error.toString())
    }

    function request(){
      const x = parseInt(elems.x.value).toString()
      const y = parseInt(elems.y.value).toString()

      tezbridge.request({
        method: 'inject_operations',
        operations: [
          {
            kind: 'transaction',
            destination: contract_addr,
            amount: '0',
            parameters: {
              entrypoint: 'request',
              value: {"prim":"Pair", args: [{int: x}, {int: y}]}
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

Host the `module.html` file.
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
parcel module.html
```

Now open [http://localhost:1234/module.html](http://localhost:1234/module.html) to view the `Contract as module` page and try the DApp you just built.

**Tips**: [https://better-call.dev/](https://better-call.dev/) is highly recommended for result inspection. Just throw your contract address in the search bar and select the correct chain net(testnet/alphanet/babylon), then every detailed transaction will be displayed.


## Interacting demo

<gif-loader src="/imgs/sample_module.gif" />
