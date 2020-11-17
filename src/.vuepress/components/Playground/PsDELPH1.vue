<template>
  <div>
    <div :class="{title: true, opened}" @click="opened = !opened">
      {{opened ? 'Click to close' : 'Click to open'}}
    </div>
    <div v-if="opened">
      <div class="block">
        <h2>How to get the source</h2>
        <p>Source is the account that the user is using to do transactions. After <b>PsBabyM1</b>, only `tz` account is allowed to be the source.</p>
        <prism-editor class="editor" v-model="codes.get_source" language="js"></prism-editor>
        <button @click="runCode('get_source')">Get the source</button>
        <pre class="output">Output:
{{output.get_source}}</pre>
      </div>

      <div class="block">
        <h2>How to set the RPC host</h2>
        <p>Set the target RPC host for user. You can send a request to ask user to switch the RPC host.</p>
        <prism-editor class="editor" v-model="codes.set_host" language="js"></prism-editor>
        <button @click="runCode('set_host')">Set the RPC host</button>
        <pre class="output">Output:
{{output.set_host}}</pre>
      </div>
      
      <div class="block">
        <h2>How to set delegate for source</h2>
        <p>After <b>PsBabyM1</b>, we can only set delegate for `tz` account.</p>
        <prism-editor class="editor" v-model="codes.set_delegate" language="js"></prism-editor>
        <button @click="runCode('set_delegate')">Set delegate</button>
        <pre class="output">Output:
{{output.set_delegate}}</pre>
      </div>
 
      <div class="block">
        <h2>How to sign binary data</h2>
        <p>You can sign any binary data by this method. Please notice that binary data should be hex string.</p>
        <prism-editor class="editor" v-model="codes.raw_sign" language="js"></prism-editor>
        <button @click="runCode('raw_sign')">Sign the binary</button>
        <pre class="output">Output:
{{output.raw_sign}}</pre>
      </div>

      <div class="block">
        <h2>How to inject operation bytes</h2>
        <p>You can inject operation bytes into the chain by this method. Please notice that binary data should be hex string. The <b>signature</b> and the <b>sign_bytes</b> fields are optional.</p>
        <p>If no <b>signature</b> or <b>sign_bytes</b> is set, then the <b>bytes</b> value must contain the signature at the end.</p>
        <p>If <b>signature</b> is set, the <b>bytes</b> value should not contain the signature. And TezBridge will concat the bytes and signature for you.</p>
        <p>If <b>sign_bytes</b> is set, the <b>bytes</b> value should not contain the signature. Then TezBridge will sign the bytes and concat them for you.</p>
        <prism-editor class="editor" v-model="codes.raw_inject" language="js"></prism-editor>
        <button @click="runCode('raw_inject')">Inject the operation binary</button>
        <pre class="output">Output:
{{output.raw_inject}}</pre>
      </div>

      <div class="block">
        <h2>How to create a KT1 account</h2>
        <p>By using <b>inject_operations</b> method, you can make a new KT1 account creation request for users. Notice that TezBridge will actually originate a smart contract (<a target="_blank" href="https://gitlab.com/nomadic-labs/mi-cho-coq/blob/master/src/contracts/manager.tz">manager.tz</a>) simulating the KT1 account in previous protocols.</p>
        <prism-editor class="editor" v-model="codes.create_account" language="js"></prism-editor>
        <button @click="runCode('create_account')">Create KT1 account</button>
        <pre class="output">Output:
{{output.create_account}}</pre>
      </div>

      <div class="block">
        <h2>How to make a transaction</h2>
        <p>By using <b>inject_operations</b> method, you can make a transaction request for users.</p>
        <prism-editor class="editor" v-model="codes.make_transaction" language="js"></prism-editor>
        <button @click="runCode('make_transaction')">Make this transaction</button>
        <pre class="output">Output:
{{output.make_transaction}}</pre>
      </div>

      <div class="block">
        <h2>How to transfer from a KT1 account</h2>
        <p>After <b>PsBabyM1</b>, KT1 account cannot be source anymore. So we can use the method below to transfer XTZ to any account with <b>unit %default</b> entrypoint from your KT1 account.</p>
        <prism-editor class="editor" v-model="codes.make_transaction_KT1" language="js"></prism-editor>
        <button @click="runCode('make_transaction_KT1')">Transfer from KT1</button>
        <pre class="output">Output:
{{output.make_transaction_KT1}}</pre>
      </div>

      <div class="block">
        <h2>How to make several transactions or originations in one operation</h2>
        <p>By using <b>inject_operations</b> method, you can make this request for users.</p>
        <prism-editor class="editor" v-model="codes.combination_operations" language="js"></prism-editor>
        <button @click="runCode('combination_operations')">Make this combination operation</button>
        <pre class="output">Output:
{{output.combination_operations}}</pre>
      </div>
    </div>
  </div>
</template>

<script>

import "prismjs"
import PrismEditor from 'vue-prism-editor'

export default {
  components: {
    PrismEditor
  },
  data() {
    return {
      opened: false,
      codes: {
        get_source: 
`tezbridge.request({method: 'get_source'})
.then(address => output(address))
.catch(err => output(err))
`,
        set_host:
`tezbridge.request({
  method: 'set_host',
  host: 'https://testnet-tezos.giganode.io'
})
.then(address => output(address))
.catch(err => output(err))
`,
        set_delegate:
`tezbridge.request({
  method: 'set_delegate',
  delegate: 'tz...'    // The tz address of the baker
})
.then(result => output(result))
.catch(err => output(err))
`,
        raw_sign:
`tezbridge.request({
  method: 'raw_sign',
  bytes: ''    // Hex string bytes
})
.then(result => output(result))
.catch(err => output(err))
`,
        raw_inject:
`tezbridge.request({
  method: 'raw_inject',
  sign_bytes: true,
  // signature: 'edsig...',
  bytes: ''    // Hex operation bytes
})
.then(result => output(result))
.catch(err => output(err))
`, 
        create_account: 
`tezbridge.request({
  method: 'inject_operations',
  operations: [
    {
      kind: 'origination',
      balance: '5'    // The number is in mutez
    }
  ]
})
.then(result => output(result))
.catch(err => output(err))
`,
        make_transaction:
`tezbridge.request({
  method: 'inject_operations',
  operations: [
    {
      kind: 'transaction',
      amount: '10',    // The number is in mutez
      destination: 'tz2L2HuhaaSnf6ShEDdhTEAr5jGPWPNwpvcB'
    }
  ]
})
.then(result => output(result))
.catch(err => output(err))
`,
        make_transaction_KT1:
`tezbridge.request({
  method: 'inject_operations',
  operations: [
    {
      kind: 'transaction',
      amount: '0',
      destination: 'KT1M8MStwA1R5SuGx2V6AMvgd8dGAFYcEUmu',    // Destination should be your KT1 account
      parameters: {
        entrypoint: 'do',
        value: tezbridge.templates.KT1_to_default('tz1SJJY253HoEda8PS5vvfHVtyghgK3CTS2z', '1')    // The amount is in mutez type
      }
    }
  ]
})
.then(result => output(result))
.catch(err => output(err))
`,
        combination_operations:
`tezbridge.request({
  method: 'inject_operations',
  operations: [
    {
      kind: 'transaction',
      amount: '0',
      destination: 'KT1DQstuXVVHsA4nVEa5C2EKf5sjrgSHCcSN',
      parameters: {
        entrypoint: 'second',
        value: {int: '1'}
      }
    },
    {
      kind: 'origination',
      balance: '0',
      script: {
        code: [{"prim":"parameter","args":[{"prim":"or","args":[{"prim":"int","annots":["%first"]},{"prim":"or","args":[{"prim":"int","annots":["%second"]},{"prim":"int","annots":["%default"]}]}]}]},{"prim":"storage","args":[{"prim":"unit"}]},{"prim":"code","args":[[{"prim":"DUP"},{"prim":"DIP","args":[[{"prim":"CDR"}]]},{"prim":"CAR"},{"prim":"DUP"},{"prim":"IF_LEFT","args":[[{"prim":"DROP"},[{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"}],{"prim":"NIL","args":[{"prim":"operation"}]},{"prim":"PAIR"}],[{"prim":"IF_LEFT","args":[[{"prim":"DROP"},[{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"}],{"prim":"NIL","args":[{"prim":"operation"}]},{"prim":"PAIR"}],[{"prim":"DROP"},[{"prim":"DIP","args":[[{"prim":"DUP"}]]},{"prim":"SWAP"}],{"prim":"NIL","args":[{"prim":"operation"}]},{"prim":"PAIR"}]]}]]},{"prim":"DIP","args":[[{"prim":"DROP"},{"prim":"DROP"}]]}]]}],
        storage: {prim: 'Unit'}
      }
    }
  ]
})
.then(result => output(result))
.catch(err => output(err))
`
      },
      output: {
        get_source: '',
        set_host: '',
        set_delegate: '',
        raw_sign: '',
        raw_inject: '',
        create_account: '',
        make_transaction: '',
        make_transaction_KT1: '',
        combination_operations: ''
      }
    }
  },
  methods: {
    runCode(key) {
      this.output[key] = ''
      eval(`const output = x => this.output['${key}'] = x;\n${this.codes[key]}`)
    }
  }
}
</script>

<style scoped>
.title {display: block; cursor: pointer; padding: 2px 0; background: #3eaf7c; text-align: center; color: white; font-weight: 700; font-size: 16px; transition: all 0.5s;}
.title.opened {background: #9ddec1}
.output {color: white;}
button { transition: all 0.2s; cursor: pointer; border: 2px solid #3eaf7c; padding: 4px 8px; border-radius: 4px; background: #e8f7f0; color: #3eaf7c }
button:hover { color: white; background: #3eaf7c }
</style>