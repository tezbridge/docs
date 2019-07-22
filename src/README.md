# Introduction
TezBridge is a connector between Tezos and DApps. It runs on morden browsers and needs no browser-plugin installation.

## How it works
Tezbridge consists of two kinds of signers.

#### Local signer
```
               window.postMessage
DApp window  <-------------------->  TezBridge window 

In the same browser on one computer / mobile
```

#### Remote signer
```
             window.postMessage                           WebRTC
DApp window <------------------->  TezBridge window A  <---------->  TezBridge window B

The DApp window and TezBridge window A should be in the same browser.
The TezBridge window B can be in other browser or computer in the same LAN network.
```

## FAQ
...

## Contact

Email: im`@`catsigma.com

Riot: catsigma

Tezos-dev slack: catsigma
