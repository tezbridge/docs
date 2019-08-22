(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{191:function(t,e,n){"use strict";var s=n(72);n.n(s).a},196:function(t,e,n){"use strict";n.r(e);var s=n(71).a,o=(n(191),n(0)),a=Object(o.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{class:{title:!0,opened:t.opened},on:{click:function(e){t.opened=!t.opened}}},[t._v("\n      "+t._s(t.opened?"Click to close":"Click to open")+"\n    ")]),t._v(" "),t.opened?n("div",[n("div",{staticClass:"block"},[n("h2",[t._v("How to get the source")]),t._v(" "),n("p",[t._v("Source is the account that the user is using to do transactions.")]),t._v(" "),n("prism-editor",{staticClass:"editor",attrs:{language:"js"},model:{value:t.codes.get_source,callback:function(e){t.$set(t.codes,"get_source",e)},expression:"codes.get_source"}}),t._v(" "),n("button",{on:{click:function(e){return t.runCode("get_source")}}},[t._v("Get the source")]),t._v(" "),n("pre",{staticClass:"output"},[t._v("Output:\n"+t._s(t.output.get_source))])],1),t._v(" "),n("div",{staticClass:"block"},[n("h2",[t._v("How to set the RPC host")]),t._v(" "),n("p",[t._v("Set the target RPC host for user. You can send a request to ask user to switch the RPC host.")]),t._v(" "),n("prism-editor",{staticClass:"editor",attrs:{language:"js"},model:{value:t.codes.set_host,callback:function(e){t.$set(t.codes,"set_host",e)},expression:"codes.set_host"}}),t._v(" "),n("button",{on:{click:function(e){return t.runCode("set_host")}}},[t._v("Get the source")]),t._v(" "),n("pre",{staticClass:"output"},[t._v("Output:\n"+t._s(t.output.set_host))])],1),t._v(" "),n("div",{staticClass:"block"},[n("h2",[t._v("How to set delegate for source")]),t._v(" "),n("p",[t._v("The KT1 source needs to be `spendable` and `delegatable`.")]),t._v(" "),n("prism-editor",{staticClass:"editor",attrs:{language:"js"},model:{value:t.codes.set_delegate,callback:function(e){t.$set(t.codes,"set_delegate",e)},expression:"codes.set_delegate"}}),t._v(" "),n("button",{on:{click:function(e){return t.runCode("set_delegate")}}},[t._v("Set delegate")]),t._v(" "),n("pre",{staticClass:"output"},[t._v("Output:\n"+t._s(t.output.set_delegate))])],1),t._v(" "),n("div",{staticClass:"block"},[n("h2",[t._v("How to sign binary data")]),t._v(" "),n("p",[t._v("You can sign any binary data by this method. Please notice that binary data should be hex string.")]),t._v(" "),n("prism-editor",{staticClass:"editor",attrs:{language:"js"},model:{value:t.codes.raw_sign,callback:function(e){t.$set(t.codes,"raw_sign",e)},expression:"codes.raw_sign"}}),t._v(" "),n("button",{on:{click:function(e){return t.runCode("raw_sign")}}},[t._v("Sign the binary")]),t._v(" "),n("pre",{staticClass:"output"},[t._v("Output:\n"+t._s(t.output.raw_sign))])],1),t._v(" "),n("div",{staticClass:"block"},[n("h2",[t._v("How to inject a signed operation binary")]),t._v(" "),n("p",[t._v("You can inject a signed operation binary into the chain by this method. Please notice that binary data should be hex string.")]),t._v(" "),n("prism-editor",{staticClass:"editor",attrs:{language:"js"},model:{value:t.codes.raw_inject,callback:function(e){t.$set(t.codes,"raw_inject",e)},expression:"codes.raw_inject"}}),t._v(" "),n("button",{on:{click:function(e){return t.runCode("raw_inject")}}},[t._v("Inject the operation binary")]),t._v(" "),n("pre",{staticClass:"output"},[t._v("Output:\n"+t._s(t.output.raw_inject))])],1),t._v(" "),n("div",{staticClass:"block"},[n("h2",[t._v("How to create a KT1 account")]),t._v(" "),t._m(0),t._v(" "),n("prism-editor",{staticClass:"editor",attrs:{language:"js"},model:{value:t.codes.create_account,callback:function(e){t.$set(t.codes,"create_account",e)},expression:"codes.create_account"}}),t._v(" "),n("button",{on:{click:function(e){return t.runCode("create_account")}}},[t._v("Create KT1 account")]),t._v(" "),n("pre",{staticClass:"output"},[t._v("Output:\n"+t._s(t.output.create_account))])],1),t._v(" "),n("div",{staticClass:"block"},[n("h2",[t._v("How to make a transaction")]),t._v(" "),t._m(1),t._v(" "),n("prism-editor",{staticClass:"editor",attrs:{language:"js"},model:{value:t.codes.make_transaction,callback:function(e){t.$set(t.codes,"make_transaction",e)},expression:"codes.make_transaction"}}),t._v(" "),n("button",{on:{click:function(e){return t.runCode("make_transaction")}}},[t._v("Make this transaction")]),t._v(" "),n("pre",{staticClass:"output"},[t._v("Output:\n"+t._s(t.output.make_transaction))])],1),t._v(" "),n("div",{staticClass:"block"},[n("h2",[t._v("How to make several transactions or originations in one operation")]),t._v(" "),t._m(2),t._v(" "),n("prism-editor",{staticClass:"editor",attrs:{language:"js"},model:{value:t.codes.combination_operations,callback:function(e){t.$set(t.codes,"combination_operations",e)},expression:"codes.combination_operations"}}),t._v(" "),n("button",{on:{click:function(e){return t.runCode("combination_operations")}}},[t._v("Make this combination operation")]),t._v(" "),n("pre",{staticClass:"output"},[t._v("Output:\n"+t._s(t.output.combination_operations))])],1)]):t._e()])},[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("By using "),e("b",[this._v("inject_operations")]),this._v(" method, you can make a new KT1 account creation request for users.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("By using "),e("b",[this._v("inject_operations")]),this._v(" method, you can make a transaction request for users.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("By using "),e("b",[this._v("inject_operations")]),this._v(" method, you can make this request for users.")])}],!1,null,"1e0f4745",null);e.default=a.exports},71:function(module,__webpack_exports__,__webpack_require__){"use strict";var prismjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(106),prismjs__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_0__),vue_prism_editor__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(107),vue_prism_editor__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(vue_prism_editor__WEBPACK_IMPORTED_MODULE_1__);__webpack_exports__.a={components:{PrismEditor:vue_prism_editor__WEBPACK_IMPORTED_MODULE_1___default.a},data:function(){return{opened:!1,codes:{get_source:"tezbridge.request({method: 'get_source'})\n.then(address => output(address))\n.catch(err => output(err))\n",set_host:"tezbridge.request({\n  method: 'set_host',\n  host: 'https://alphanet-node.tzscan.io'\n})\n.then(address => output(address))\n.catch(err => output(err))\n",set_delegate:"tezbridge.request({\n  method: 'set_delegate',\n  delegate: 'tz...'    // The tz address of the baker\n})\n.then(result => output(result))\n.catch(err => output(err))\n",raw_sign:"tezbridge.request({\n  method: 'raw_sign',\n  bytes: ''    // Hex string bytes\n})\n.then(result => output(result))\n.catch(err => output(err))\n",raw_inject:"tezbridge.request({\n  method: 'raw_inject',\n  bytes: ''    // Hex operation bytes with signature\n})\n.then(result => output(result))\n.catch(err => output(err))\n",create_account:"tezbridge.request({\n  method: 'inject_operations',\n  operations: [\n    {\n      kind: 'origination',\n      balance: '5'    // The number is in mutez\n    }\n  ]\n})\n.then(result => output(result))\n.catch(err => output(err))\n",make_transaction:"tezbridge.request({\n  method: 'inject_operations',\n  operations: [\n    {\n      kind: 'transaction',\n      amount: '10',    // The number is in mutez\n      destination: 'tz2L2HuhaaSnf6ShEDdhTEAr5jGPWPNwpvcB'\n    }\n  ]\n})\n.then(result => output(result))\n.catch(err => output(err))\n",combination_operations:'tezbridge.request({\n  method: \'inject_operations\',\n  operations: [\n    {\n      kind: \'transaction\',\n      amount: \'0\',\n      destination: \'KT1FC3JURG6JfU9twPEEz1os97qix9GiEUjw\',\n      parameters: {string: "any string"}\n    },\n    {\n      kind: \'origination\',\n      balance: \'0\',\n      spendable: false,\n      delegatable: true,\n      script: {\n        code: [{"prim":"parameter","args":[{"prim":"contract","args":[{"prim":"unit"}],"annots":[":X"]}]},{"prim":"storage","args":[{"prim":"unit"}]},{"prim":"code","args":[[{"prim":"CDR","annots":["@storage_slash_1"]},{"prim":"NIL","args":[{"prim":"operation"}]},{"prim":"PAIR"}]]}],\n        storage: {"prim":"Unit"}\n      }\n    }\n  ]\n})\n.then(result => output(result))\n.catch(err => output(err))\n'},output:{get_source:"",set_host:"",set_delegate:"",raw_sign:"",raw_inject:"",create_account:"",make_transaction:"",combination_operations:""}}},methods:{runCode:function runCode(key){this.output[key]="",eval("const output = x => this.output['".concat(key,"'] = x;\n").concat(this.codes[key]))}}}},72:function(t,e,n){}}]);