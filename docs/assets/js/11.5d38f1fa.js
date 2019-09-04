(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{231:function(e,t,a){"use strict";a.r(t);var o=a(0),r=Object(o.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction","aria-hidden":"true"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),a("p",[e._v("TezBridge is a connector between Tezos and DApps. It runs on morden browsers and needs no browser-plugin installation.")]),e._v(" "),a("h2",{attrs:{id:"how-it-works"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-it-works","aria-hidden":"true"}},[e._v("#")]),e._v(" How it works")]),e._v(" "),a("p",[e._v("Tezbridge consists of two kinds of signers.")]),e._v(" "),a("h4",{attrs:{id:"local-signer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#local-signer","aria-hidden":"true"}},[e._v("#")]),e._v(" Local signer")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("               window.postMessage\nDApp window  <--------------------\x3e  TezBridge window \n\nIn the same browser on one computer / mobile\n")])])]),a("h4",{attrs:{id:"remote-signer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remote-signer","aria-hidden":"true"}},[e._v("#")]),e._v(" Remote signer")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("             window.postMessage                           WebRTC\nDApp window <-------------------\x3e  TezBridge window A  <----------\x3e  TezBridge window B\n\nThe DApp window and TezBridge window A should be in the same browser.\nThe TezBridge window B can be in other browser or computer in the same LAN network.\n")])])]),a("h2",{attrs:{id:"faq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#faq","aria-hidden":"true"}},[e._v("#")]),e._v(" FAQ")]),e._v(" "),a("p",[e._v("Q: How does that JS lib find your wallet / how is it allowed to talk to the wallet (vs. javascript running on a random page that shouldn't be allowed to access the wallet)")]),e._v(" "),a("p",[e._v("A: The DApp will open a new window acessing TezBridge. They make communication though "),a("code",[e._v("postMessage")]),e._v(" and "),a("code",[e._v("window.addEventListener('message', fn)")]),e._v(". So the connection between Dapp and TezBridge are hardcoded.")]),e._v(" "),a("hr"),e._v(" "),a("p",[e._v("Q: Can DApp spam multiple pop-ups to users browser though the TezBridge plugin?")]),e._v(" "),a("p",[e._v("A: Actually "),a("code",[e._v("tezbridge.request")]),e._v(" will raise only one window. If the window is opened, it will just focus to it(won't create a new one unless the previous one is closed)")]),e._v(" "),a("hr"),e._v(" "),a("p",[e._v("Q: Where does TezBridge store the configuration and private keys?")]),e._v(" "),a("p",[e._v("A: TezBridge uses local storage in browser to store the configs and private keys. The private keys are encrypted with the same scheme which official "),a("code",[e._v("tezos-client")]),e._v(" uses to save encrypted keys in local. So if one can crack the encrypted keys in TezBridge, he can crack the keys generated by the "),a("code",[e._v("tezos-client")]),e._v(".")]),e._v(" "),a("hr"),e._v(" "),a("p",[e._v("Q: Will private key be loaded in memory when the mananger is unlocked?")]),e._v(" "),a("p",[e._v("A: Yes. But the private key will be loaded in memory with a transformed form to prevent memory dump attack.")]),e._v(" "),a("hr"),e._v(" "),a("p",[e._v("Q: What if the server of TezBridge was attacked by hacker?")]),e._v(" "),a("p",[e._v("A: TezBridge is purely static website hosted in Github page with a cloudflare CDN. So there's no server in TezBridge. All possible network connection targets are listed here:")]),e._v(" "),a("ul",[a("li",[e._v("Tezos official RPC node")]),e._v(" "),a("li",[e._v("tzscan.io")]),e._v(" "),a("li",[e._v("Cloudflare CDN / Github page")]),e._v(" "),a("li",[e._v("Netlify lambda function (used for simple remote bridging)")])]),e._v(" "),a("hr"),e._v(" "),a("p",[e._v("Q: Is a hardware Ledger safe to be used in TezBridge?")]),e._v(" "),a("p",[e._v("A: For a normal operation, Ledger will show a detailed operation information(transaction, origination). For a compound operation, both Ledger and TezBridge will show a base58 hash on each side for user to confirm.")]),e._v(" "),a("h2",{attrs:{id:"contact"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contact","aria-hidden":"true"}},[e._v("#")]),e._v(" Contact")]),e._v(" "),a("p",[e._v("Email: im"),a("code",[e._v("@")]),e._v("catsigma.com")]),e._v(" "),a("p",[e._v("Riot: catsigma")]),e._v(" "),a("p",[e._v("Tezos-dev slack: catsigma")])])},[],!1,null,null,null);t.default=r.exports}}]);