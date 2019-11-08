# TezBridge crypto lib API


## Installation
```
npm i tezbridge-crypto
```

## Import
```javascript
import TBC from 'tezbridge-crypto/PsBabyM1'
```

To directly import `tezbridge-crypto/{procotol}`, you have to install 2 babel plugins which are `@babel/plugin-transform-runtime` and `@babel/plugin-transform-flow-strip-types`.


## API reference

### TBC.codec

#### `TBC.codec.fromHex(hex_str)`
Convert hex string to bytes.

#### `TBC.codec.toHex(bytes)`
Convert bytes to hex string.

#### `TBC.codec.toTzBytes(source, is_key_hash = false)`
Convert key value to hex string with special prefix which is used in operation bytes. 

#### `TBC.codec.toTzStrValue(tz_bytes_str)`
Convert hex string with special prefix in operation bytes to normal key value.

#### `TBC.codec.prefix`
A prefix mapping for different Tezos data types.

#### `TBC.codec.watermark`
Watermark mapping can be used in bytes from different places.

#### `TBC.codec.bs58checkEncode(input_bytes, prefix)`
Encode bytes to string value by specific prefix

#### `TBC.codec.bs58checkDecode(input_str, prefix?)`
Decode key value to bytes by specific prefix or by autodetection.

#### `TBC.codec.bs58checkPrefixPick(input_str)`
Auto detect the prefix of a key value.

#### `TBC.codec.getContractHexKey(address)`
Convert address value to special hex representation(eg: `3e/e2/31/36/6b/1336eb61419df8fc666056025929bf`)

#### `TBC.codec.bytesConcat(x, y)`
Concat two bytes into one.

#### `TBC.codec.encodeRawBytes(input_micheline)`
Encode Micheline data into bytes string.

#### `TBC.codec.decodeRawBytes(input_str)`
Decode bytes string to Micheline data.

#### `TBC.codec.encodeZarithInt(decimal_str)`
Encode int decimal value to zarith bytes string.

#### `TBC.codec.encodeZarithUInt(decimal_str)`
Encode uint decimal value to zarith bytes string.


### TBC.crypto

#### TBC.crypto.EncryptedBox
This class can create an instance with encrypted key for each usage.
```javascript
const box = new TBC.crypto.EncryptedBox(any_sk_str or EncryptedBox_show()_result, password?)
box.show().then(encrypted_key => console.log(encrypted_key))
box.reveal().then(raw_key => console.log(raw_key))    // reveal the secret key string
box.revealKey().then(key => console.log(key))    // reveal a Key instance which can access the pk, pkh
```

#### `TBC.crypto.genMnemonic(strength?)`
Generate a mnemonic with specific strength(entropy-bit)

#### `TBC.crypto.getKeyFromSeed(seed_str)`
Get key pair from a seed value

#### `TBC.crypto.getSeedFromWords(words, password?)`
Get seed from mnemonic words with passwords

#### `TBC.crypto.getKeyFromWords(words, password?)`
Get key pair from mnemonic words with passwords

#### `TBC.crypto.genRandomKey(scheme)`
Generate a new key.

scheme can only be: `ed25519` | `secp256k1` | `p256`

#### `TBC.crypto.genRandomBytes(len)`
Generate `len` long bytes randomly.

#### `TBC.crypto.decryptKey(encrypted_key, password)`
Decrypt key(prefix in edesk, spesk, p2esk) with password.

#### `TBC.crypto.encryptKey(scheme, sk, password)`
Encrypt key with password.

scheme can only be: `ed25519` | `secp256k1` | `p256`

#### `TBC.crypto.getKeyFromSecretKey(sk)`
Get key pair from secret key.

#### `TBC.crypto.signOperation(operation_bytes, sk)`
Sign operation bytes with secret key.


### TBC.localop

#### `TBC.localop.forgeOperation(contents, branch)`
Forge operation localy without RPC node

#### `TBC.localop.parseOperationBytes(bytes_str)`
Parse operation bytes to Micheline.
