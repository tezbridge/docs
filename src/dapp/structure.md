# DApp structure
Befoer we dive into the creation of smart contracts, we need to learn the whole structure of a simple Tezos web DApp.

```
                          DApp
                        /      \
                      /          \
                    /              \
                  /                  \ 
            client                    server
              |                          |
      |-> web site                smart contract(s)
      |        \                  ----------------
      |    ---> TezBridge -------> Tezos RPC node
      |  /
     User
```

Here is the whole picture of a simple web DApp in Tezos.

### Explanation
1. The user visit the DApp web site to view and initial the request.
2. The web site open TezBridge and send request to TezBridge.
3. The user unlock his account in TezBridge.
4. TezBridge ask the user to accept or reject the request.
5. TezBridge connect to a Tezos RPC node and complete the transaction injection.

So the minimal DApp contains one HTML interface and one smart contract.