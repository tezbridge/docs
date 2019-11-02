# DApp sample: HODL my XTZs

The DApp contains a `hodl.html` HTML file and a `hodl.mligo` smart contract file.

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

let%entry main (p : entries) storage = 
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

Now we get a compiled file named **`hodl.json`**.

Then let's get the initial storage:
```sh
ligo compile-storage --michelson-format=json hodl.mligo main '("PUT THE FaucetA ADDRESS HERE!!!", 0)' > hodl.storage.json
```

Now we get a compiled file named **`hodl.storage.json`**.

## HTML creation
