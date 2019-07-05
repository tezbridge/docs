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
```shell
liquidity hodl.liq --json --no-annot
```
Now we get a compiled file named **`hodl.tz.json`**.

## Step3: ...

## Step4: ...