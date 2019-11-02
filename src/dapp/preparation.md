# Preparation
Before walking though the DApp samples in testnet, you need to setup a faucet account.


### Prepare for the testnet faucet account
1. Go to [https://faucet.tzalpha.net](https://faucet.tzalpha.net) and get a facuet JSON file.
2. Open [https://www.tezbridge.com](https://www.tezbridge.com).
3. Check **Settings > Host** and make sure it's an `testnet` RPC host. (Like `https://rpcalpha.tzbeta.net`)
4. Click **Import key** and paste the content of the facuet JSON file in the input box. Then set the **Manager name** as `FacuetA`, type the locking password and press **Confirm**. (If this manager hasn't been activated before, TezBridge will automatically activate it for you. But it takes one block to confirm the activation.)
5. After the activation is finished (about one minute), you can check the manager balance by clicking **Local managers > FaucetA > tz1...**

### Download the LIGO lang latest build
1. Open [https://gitlab.com/ligolang/ligo/-/jobs](https://gitlab.com/ligolang/ligo/-/jobs).
2. Press `CTRL-F` to find for the term `build_and_package_binaries`.
3. Download the package according to your operation system.
4. Unzip the `artifacts.zip` file and install the `ligo_*.deb` file.
5. Run `ligo --help` to make sure ligo is successfully installed.
 
### Create a tool HTML file
Let's create a file named `tool.html` for further usage:
```html
<!DOCTYPE html>
<html>
<head>
  <title>My Tezos DApp tool</title>
  <script src="https://www.tezbridge.com/plugin.js"></script>
</head>
<body>
  <textarea id="code" placeholder="Smart contract JSON"></textarea>
  <textarea id="storage" placeholder="Initial storage JSON"></textarea>

  <button onclick="originate()">Originate contract</button>
  <pre id="result"></pre>

  <script>
    const code_elem = document.getElementById('code')
    const storage_elem = document.getElementById('storage')
    const result_elem = document.getElementById('result')

    const originate = () => {
      try {
        tezbridge.request({
          method: 'inject_operations',
          operations: [
            {
              kind: 'origination',
              script: {
                code: JSON.parse(code_elem.value),
                storage: JSON.parse(storage_elem.value)
              }
            }
          ]
        })
        .then(result => result_elem.innerHTML = JSON.stringify(result))
        .catch(err => result_elem.innerHTML = JSON.stringify(err))
      } catch (e) {
        result_elem.innerHTML = e.stack
      }
    }
  </script>
</body>
</html>
```

### Host the `tool.html` file
#### For python users
```
python -m SimpleHTTPServer 1234
```

#### For npm package `http-server` users
```
hs -p 1234
```

#### For parcel-bundler users
```
parcel tool.html
```

Now open [http://localhost:1234/tool.html](http://localhost:1234/tool.html) to view the tool page.
