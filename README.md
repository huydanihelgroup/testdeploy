<img src="https://user-images.githubusercontent.com/118863576/205505593-18a8a22d-20ee-45f2-bed6-b6c86f5c2ed5.png" style="border-radius:50%;width:72px;">


[![Ubuntu](https://img.shields.io/ubuntu/v/ubuntu-wallpapers?style=flat-square)]()


aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
# Welcome to Very Bankingerwer

This project with React assets for Very Banking project

## Table of Contents
- [Tech Stack](#tech-stack)
- [Deploy on localy Ubuntu VM](#deploy-on-localy-ubuntu-vm)
    - [Install Remix and compile the contract](#install-remix-and-compile-the-contract)
    - [Build and start code project](#build-and-start-code-project)
    - [Install Remix and compile the smart contract](#install-remix-and-compile-the-smart-contract)
    - [Deployement on Nginx](#deployement-on-nginx)
- [Deploy on Netlify host](#deploy-on-netlify-host)

-[Configuration switch Goerli Test Network and Mainnet](#configuration-switch-goerli-test-network-and-mainnet)



## Tech Stack

**Frontend:** React, TailwindCSS, Web3.

**Backend:** Node, Remix


## Deploy on localy Ubuntu VM
Below you will find some information on how to build the project in localy Ubuntu VM.

Install node on Ubuntu

```bash
sudo apt update

curl -sL https://deb.nodesource.com/setup_14.x  | sudo -E bash
sudo apt install nodejs
```
Check Node version installed
```bash
node -v
```

Install npm or yarn

```bash
sudo apt install npm
```
OR
```bash
sudo apt install yarn
```

Clone the project from the GitHub
```bash
  git clone https://github.com/Very-Banking/vb-ui
```

Go to the project directory

```bash
  cd vb-ui
```

Install dependencies
```bash
  npm install
```


## Install Remix and compile the smart contract
Follow this intruction connects Remix IDE to the code project
#### Install  Remix package
Follow this intruction set up rexix package using npm or yarn
```bash
    sudo npm install -g @remix-project/remixd
```
OR
```bash
    sudo yarn add  @remix-project/remixd -g
```
#### Run remix server at localhost
To run remix server at localhost

```bash
    remixd
```

On the Remix IDE website click on Dashboard press on `Connect to localhost` and then all localhost file will be uploaded to Remix IDE webpage.

## Build and start code project
### Build code for production
```bash
  npm run build
```

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

### Start code at localhost
```bash
  npm run start
```
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser. Your browser must install [Metamask](https://metamask.io#anrchos-link) extension to interact with application.

The page will reload if you make edits.
You will also see any lint errors in the console.

### Run test code 
```bash
  npm run test
```
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.


### Deployement on Nginx

Install Nginx webservice

```bash
  sudo apt-get -y install Nginx
```

Create a folder to store the static files and copy `build` folder in the project after running build production .
```bash
  sudo mkdir -p /var/www/vb-ui/build
  sudo chown -R $USER:$USER /var/www/vb-ui/build
  sudo chmod -R 755 /var/www/vb-ui
  sudo cp -vr <your-project-path>/vb-ui/build /var/www/vb-ui/build
```


Modify the config file of Nginx. Remove default file  in `etc/nginx/sites-available`

```bash
  cd /
  cd etc/nginx/sites-available 
  sudo rm default
  sudo touch default
  sudo nano default
```

NOTE: The command line `sudo touch default` to create a default, using editor `nano` to edit config file.

The copy context below into `default` file.

```text
server {
        listen 80;
        listen [::]:80;

        # the path folder store static files
        root /var/www/vb-ui/build;

         # Add index file start webpage.
        index index.html index.htm ;

        server_name _;

        location / {
            # First attempt to serve request as file, then
            # as directory, then fall back to displaying a 404.
            try_files $uri $uri/ =404;
        }
    }    
```

Move to other folder ` /etc/nginx/sites-enabled `. Also, remove the default file . and then create a soft link between two folders

```bash
  cd /
  cd etc/nginx/sites-enabled
  sudo rm default
  sudo ln -s /etc/nginx/sites-available/default /etc/nginx/sites-enabled/
```

Finally, restart Nginx service.
```bash
  sudo systemctl restart nginx
```


NOTE: Open port firewall if the website does not use default port.

```bash
sudo ufw allow 8080/tcp
```

The command line enable and disable port.
```bash
sudo ufw enable
sudo ufw disable

```


## Deploy the code to Netlify host

The following instructions will help you set up the code deployment with Netlify.

### Create a Netlify site and publish the code

To deploy a React website to [Netlify](https://www.netlify.com#anchor-links), you will need to do the following:

1. Create a `Netlify account` and log in to the Netlify dashboard.
2. Clicking on `Site tab` in menu and press on the `"Add New Site"`
3. Choose Import an exsiting project 
4. Select your `Git provider` (e.g., GitHub, GitLab, etc.) and authorize Netlify to access your repositories.
5. Pick a repository from your GitHub
6. Select the repository that contains your React website and choose the branch that you want to deploy.
7. Set up your build settings. In the "Build command" field, enter the command build your React website `npm run build`. In the "Publish directory" field, enter the directory name `build`.
<img src="https://user-images.githubusercontent.com/118783644/208756315-62a44560-5e31-4996-ad38-a65bb43d013f.png" style="border-radius:50%;width:250px;">
8. Click the "Deploy site" button to deploy your website.


## Configuration switch Goerli Test Network and Mainnet

Open `App.tsx` file look up the line has correctChainId variable change value: 1: Mainnet or 5 Goerli Testnet

```javascript
export default function App() {
  const correctChainId = 5;// 1: Mainnet: 5: Goerli TestNet  ;
```

And then we need to update the contract address inside the `claimContract.ts` in the `methods` folder
```javascript
let Web3 = require('web3');
const web3 = new Web3('https://rpc.ankr.com/eth');
const claimAddress = '0xb820C019a3B3C9b150eEfac320FE19039B265D89';
```





