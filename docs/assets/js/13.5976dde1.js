(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{254:function(e,t,a){"use strict";a.r(t);var r=a(0),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),a("p",[e._v("TezBridge is a connector between Tezos and DApps. It works on both desktop and mobile devices and, furthermore, users can run DApp on device A and sign operations on device B under local area network.")]),e._v(" "),a("p",[e._v("Since TezBridge is a pure web application, a modern web browser is the only software required.")]),e._v(" "),a("h2",{attrs:{id:"community"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#community"}},[e._v("#")]),e._v(" Community")]),e._v(" "),a("p",[e._v("Telegram channel: "),a("a",{attrs:{href:"https://t.me/tezbridge",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://t.me/tezbridge"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Riot.im channel: "),a("a",{attrs:{href:"https://riot.im/app/#/room/#tezbridge-dev:matrix.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://riot.im/app/#/room/#tezbridge-dev:matrix.org"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Slack channel: "),a("a",{attrs:{href:"https://tezos-dev.slack.com/messages/tezbridge/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://tezos-dev.slack.com/messages/tezbridge/"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"why-do-we-need-tezbridge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-do-we-need-tezbridge"}},[e._v("#")]),e._v(" Why do we need TezBridge?")]),e._v(" "),a("ol",[a("li",[e._v("No plugin or App installation is needed.")]),e._v(" "),a("li",[e._v("Same DApp experience across desktop computer and mobile devices.")]),e._v(" "),a("li",[e._v("Powerful tools for Tezos are included.")])]),e._v(" "),a("h2",{attrs:{id:"what-is-tezbridge-capable-of"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-tezbridge-capable-of"}},[e._v("#")]),e._v(" What is TezBridge capable of?")]),e._v(" "),a("h3",{attrs:{id:"key-generation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#key-generation"}},[e._v("#")]),e._v(" Key generation")]),e._v(" "),a("p",[e._v("People can generate all kinds of keys(ed25519/secp256k1/p256) supported in Tezos with passwords. The mnemonic generation supports Ledger compatible path derivation, which means you can generate the key before you buy the Ledger and later import it into the hardware.")]),e._v(" "),a("h3",{attrs:{id:"key-import"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#key-import"}},[e._v("#")]),e._v(" Key import")]),e._v(" "),a("p",[e._v("People can import all kinds of keys into the TezBridge(ed25519/secp256k1/p256/mnemonic/faucet). It also support path derivation when importing mnemonic. So it means if you accidentally lose your Ledger, you can directly access the wallet with no waiting.")]),e._v(" "),a("h3",{attrs:{id:"local-signer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#local-signer"}},[e._v("#")]),e._v(" Local signer")]),e._v(" "),a("p",[e._v("It's something like MetaMask for Ethereum. The user unlocks a pre-stored manager and the local signer signs the operations requested by a DApp website.")]),e._v(" "),a("h3",{attrs:{id:"remote-signer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remote-signer"}},[e._v("#")]),e._v(" Remote signer")]),e._v(" "),a("p",[e._v("In local area network(LAN), a user can sign requests from the DApp in other devices. There are several good parts about it:")]),e._v(" "),a("ol",[a("li",[e._v("You don't need to import your key everywhere. Just import your key on the TezBridge in your mobile, your key is able to sign any DApp's request from any browser in LAN.")]),e._v(" "),a("li",[e._v("You don't need to plug the Ledger everywhere. Let's assume you are the manager in the office and you need to authorize some OA DApp requests for routine. Then you can just plug the Ledger to your computer and sign data for your colleagues.")])]),e._v(" "),a("h3",{attrs:{id:"hardware-signer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hardware-signer"}},[e._v("#")]),e._v(" Hardware signer")]),e._v(" "),a("p",[e._v("TezBridge currently supports Ledger with USB port. It can also be used as a remote signer like this.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("DApp window <-------\x3e  TezBridge window A  <------\x3e  TezBridge window B\n                           as tunnel                        |\n                                                     pluged with Ledger\n")])])]),a("h2",{attrs:{id:"how-tezbridge-works"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-tezbridge-works"}},[e._v("#")]),e._v(" How TezBridge works")]),e._v(" "),a("p",[e._v("Tezbridge consists of two kinds of signers.")]),e._v(" "),a("h4",{attrs:{id:"local-signer-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#local-signer-2"}},[e._v("#")]),e._v(" Local signer")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("               window.postMessage\nDApp window  <--------------------\x3e  TezBridge window \n\nIn the same browser on one computer / mobile\n")])])]),a("h4",{attrs:{id:"remote-signer-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remote-signer-2"}},[e._v("#")]),e._v(" Remote signer")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("             window.postMessage                           WebRTC\nDApp window <-------------------\x3e  TezBridge window A  <----------\x3e  TezBridge window B\n\nThe DApp window and TezBridge window A should be in the same browser.\nThe TezBridge window B can be in other browser or computer in the same LAN network.\n")])])]),a("h2",{attrs:{id:"faq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[e._v("#")]),e._v(" FAQ")]),e._v(" "),a("p",[e._v("Q: How does that JS lib find your wallet / how is it allowed to talk to the wallet (vs. javascript running on a random page that shouldn't be allowed to access the wallet)")]),e._v(" "),a("p",[e._v("A: The DApp will open a new window acessing TezBridge. They make communication though "),a("code",[e._v("postMessage")]),e._v(" and "),a("code",[e._v("window.addEventListener('message', fn)")]),e._v(". So the connection between Dapp and TezBridge are hardcoded.")]),e._v(" "),a("hr"),e._v(" "),a("p",[e._v("Q: Can DApp spam multiple pop-ups to users browser though the TezBridge plugin?")]),e._v(" "),a("p",[e._v("A: Actually "),a("code",[e._v("tezbridge.request")]),e._v(" will raise only one window. If the window is opened, it will just focus to it(won't create a new one unless the previous one is closed)")]),e._v(" "),a("hr"),e._v(" "),a("p",[e._v("Q: Where does TezBridge store the configuration and private keys?")]),e._v(" "),a("p",[e._v("A: TezBridge uses local storage in browser to store the configs and private keys. The private keys are encrypted with the same scheme which official "),a("code",[e._v("tezos-client")]),e._v(" uses to save encrypted keys in local. So if one can crack the encrypted keys in TezBridge, he can crack the keys generated by the "),a("code",[e._v("tezos-client")]),e._v(".")]),e._v(" "),a("hr"),e._v(" "),a("p",[e._v("Q: Will private key be loaded in memory when the mananger is unlocked?")]),e._v(" "),a("p",[e._v("A: Yes. But the private key will be loaded in memory with a transformed form to prevent memory dump attack.")]),e._v(" "),a("hr"),e._v(" "),a("p",[e._v("Q: What if the server of TezBridge was attacked by hacker?")]),e._v(" "),a("p",[e._v("A: TezBridge is purely static website hosted in Github page with a cloudflare CDN. So there's no server in TezBridge. All possible network connection targets are listed here:")]),e._v(" "),a("table",[a("tr",[a("th",[e._v("Tezos RPC node")]),e._v(" "),a("td",[e._v("\n      Several RPC interfaces are used in RPC node\n      "),a("p",[e._v("\n        /chains/main/blocks/head/context/contracts/{contract}/counter\n        /chains/main/blocks/head/context/contracts/{contract}/manager_key\n        /chains/main/blocks/head/header\n        /chains/main/blocks/head/context/contracts/{manager}/balance\n        /chains/main/blocks/head/helpers/forge/operations\n        /chains/main/blocks/head/helpers/scripts/run_operation\n        /chains/main/blocks/head/helpers/preapply/operations\n        /injection/operation\n      ")])])]),e._v(" "),a("tr",[a("th",[e._v("Cloudflare CDN / Github page")]),e._v(" "),a("td",[e._v("TezBridge is served by Github page and Cloudflare CDN")])]),e._v(" "),a("tr",[a("th",[e._v("tezos.id")]),e._v(" "),a("td",[e._v("Used for checking originated contract list")])]),e._v(" "),a("tr",[a("th",[e._v("Netlify lambda function")]),e._v(" "),a("td",[e._v("Used for simple remote bridging")])])]),e._v(" "),a("hr"),e._v(" "),a("p",[e._v("Q: Is a hardware Ledger safe to be used in TezBridge?")]),e._v(" "),a("p",[e._v("A: For a normal operation, Ledger will show a detailed operation information(transaction, origination). For a compound operation, both Ledger and TezBridge will show a base58 hash on each side for user to confirm.")]),e._v(" "),a("h2",{attrs:{id:"contact"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contact"}},[e._v("#")]),e._v(" Contact")]),e._v(" "),a("p",[e._v("Email: im"),a("code",[e._v("@")]),e._v("catsigma.com")])])}),[],!1,null,null,null);t.default=o.exports}}]);