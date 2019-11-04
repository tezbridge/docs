# * Originate your smart contract

**!!!** Make sure you've already prepared the **`contract.json`** and the **`contract.storage.json`** files.

### Steps:
#### 1. Host the `tool.html` file.

For python users
```
python -m SimpleHTTPServer 1234
```

For npm package `http-server` users
```
hs -p 1234
```

For parcel-bundler users
```
parcel tool.html
```

Now open [http://localhost:1234/tool.html](http://localhost:1234/tool.html) to view the tool page.


#### 2. Adding contract.

Copy and paste the content of **`contract.json`** and **`contract.storage.json`** to the **Smart contract JSON** field and the **Initial storage JSON** field.

![Tool HTML](/imgs/tool.png)
<center>↑ Just like this</center>

#### 3. Click `originate contract`.

The browser will open a new window with location at `https://www.tezbridge.com/index.html?signer`

Then go **Choose signer -> Local managers -> FaucetA** and enter the locking password you set before. If the password is correct, the TezBridge will automatically show the public hash key(address). Now you just need to click `Use as signer`. 

Then a **DApp requests** tab shows up. You will get noticed that the arrow left to the **DApp requests** is blinking now, which means something is updated. So click the **DApp requests**.

You can see useful infomation shows up here:
* **DApp**: It displays the window title which sent the request.  
* **RPC node**: The RPC node is about to connect with.
* **Protocol**: The current protocol of the RPC node.
* **Kind**: The request operation kind.
And the request operation details.

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

After these steps, the signer page will get the result and post it to our tool page. 

Now switch to our tool page window, then you can get the result. 

It should look like this:
```
{"operation_id":"ooyB1Wa4RbmzZQLPGXaNKmMSt9rReskJTgjZUrWaxDXYFsVUhX8","originated_contracts":[["KT1W57Qa3NQhJBTYNA5Xb34tyWtLRwfristJ"]]}
```