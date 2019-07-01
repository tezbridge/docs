# Getting started

Deveopers can easily integrated TezBridge into their DApps websites.

## Plugin file

Adding the `plugin.js` into the HTML file head field.
```html
<script src="https://www.tezbridge.com/plugin.js"></script>
```
## TezBridge object

Then you can access the `tezbridge` object to interact with TezBridge.

### get the source
Source is the address used to be the caller of a transaction. The address can be started with either `KT1` or `tz1`.

```javascript
const address = await tezbridge.request({method: 'get_source'})
```

## ...