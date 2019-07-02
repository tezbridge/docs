# Getting started

Deveopers can easily integrated TezBridge into their DApps websites.

## Plugin file

Adding the `plugin.js` into the HTML file head field.
```html
<script src="https://www.tezbridge.com/plugin.js"></script>
```
## TezBridge object

Then you can access the `tezbridge` object to interact with TezBridge.

### How `request` works

```
Symbol DAPP is the window holding DApp website
Symbol SIGNER is the window holding TezBridge signer

DAPP: tezbridge.request(req_object) 
               |
               |   DAPP: post the req_object message to SIGNER
               |
               V                no
      SIGNER: detect if -----------------> SIGNER: wait until the user 
          there is                            selects a manager
        a working signer                     as the working signer             
               |                                     |
               | yes                                 |
               |                                     |
               | <------------------------------------
               |
               V                   reject
      SIGNER: ask for permission -----------> SIGNER: post the reject message 
               |                                         to DAPP 
               | approve                       
               |                          
               V                          
      SIGNER: do operations ----------------------        
               |                                 |
               |                                 |
               | success                         | failure
               V                                 V
      SIGNER: post the result         SIGNER: post the error
          message to DAPP                 message to DAPP
```

### Get the source
Source is the address used to be the caller of a transaction. The address can be started with either `KT1` or `tz1`.

```javascript
const address = await tezbridge.request({method: 'get_source'})
```

`address` example:
```javascript
"tz1TJCwoX79reCZ8yccPeW8iB9Mba91v8H47"
```

Please notice that this request needs no permission from the user.

### Create new account
Originate a new account with no script. In Tezos, one manager(`tz1`) can create many accounts(`KT1`) and smart contracts(also `KT1`).

```javascript
const result = await tezbridge.request({
  method: 'create_account',
  // balance: '10',
  // delegatable: true
})
```

`result` example:
```javascript
{
  "operation_id":"op5eLBGL52riYQ6PZjTFqTEUFUKQrXVy4e6t1woceinSfTYaFt5",
  "originated_contracts":[["KT1K7syUHQDNyV25Pmd1PM8iwSdC4Admtksa"]]
}
```

### Set delegate
Set delegate for source.

```javascript
const result = tezbridge.request({
  method: 'set_delegate',
  delegate: 'tz...'    // The tz address of any baker
})
```