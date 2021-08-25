# Project Name

Fjakeraven Product Details Service

## Table of Contents

1. [Installing Dependencies](#Installing-Dependencies)
2. [Seeding Database](#Seeding-Database)
3. [Path to Live](#Path-to-Live)
3. [.gitignore](#.gitignore)
4. [.env configuration](#dotenv)
5. [Webpack Dev Server- mostly useless](#Webpack-Dev-Server)
6. [Additional Notes](#Additional-Notes)


### Usage

### Installing-Dependencies

- Install Node
  ref: https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-up-node-on-ec2-instance.html
  - From root (or anywhere):
    1. curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
    2. . ~/.nvm/nvm.sh
    3. nvm install node
    4. (test) node -e "console.log('Running Node.js ' + process.version)"
        *The latest version works fine.
    5. Downgrade to node 14.16.0 -> nvm install 14.16.0
    6. Install nodemon- npm install nodemon -g
    7. Run npm install from root directory
    ## Note
      If you run into issues with node-sass when running npm install, its important to install "make", (node-sass uses python)=>
        npm install make -g

        You might also have to install node-gyp itself...
          npm install -g node-gyp

        And potentially even point python to its executable...
          npm config set python /path/to/executable/python

        I'm pretty sure that only the first step is necessary though.
        ref: https://github.com/nodejs/node-gyp

        -If you manage to install node-sass before downgrading node or other alterations are made to the environment that might be throwing additional errors with node-sass, you can try...

          -npm rebuild node-sass

### Seeding-Database
1. Install mySQL->
    - npm install mysql
    - sudo apt-get install mysql-client
    - sudo apt-get install mysql-server
    - sudo mysql -u root
    then to set password->>>
    ALTER USER 'root'@'localhost' IDENTIFIED BY '<YOUR PASSWORD>';
    ref: https://www.mysqltutorial.org/mysql-changing-password.aspx/
          (One of many tutorials, setting the password can be hard! I don't guarantee the solution above.);

      -If you are using ubuntu and the password set is not working...
      - sudo mysql -u root -p (sudo to "break in")
      - ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '<YOUR PASSWORD>';

        ref: https://askubuntu.com/questions/369910/installed-mysql-but-still-says-command-not-found

    - Set this password in both .env file (below) and databaes/config/config.json file.

    - Next login to mySql and create DB 'product_info'
        1. mysql -u root -p
        2. create database product_info
    - migrate and seed database from project root (important that passwords are set from previous step above ^^^)
        1. npx sequelize-cli db:migrate
        2. npx sequelize-cli db:seed:all

  ### Path-to-Live:
  -At this point you should be able to run...
  1. npm run build || npm run dev (see below)
  2. npm run start
  3. http://<ip address>:<express port>/<productId>
      4. I found in my mock up for this readme that it took about 20-30 seconds for the data to render live on the page.

### .gitignore

 - 1. create a .gitignore file in root, copy this in:

  node_modules
  .env
  *.pem
  *.sh

### dotenv

- 1. copy the following into a .env file in root, make sure to also

  host="localhost"
  database="product_info"
  user="<Your mySql username>"
  password="<Your mySql password>"

### Webpack-Dev-Server
  - If for any reason you desire to continue to develop the front end, a webpack dev server is provisioned in the webpack.config.js file. This dev server is solely intended for webpacks hot module replacement feature (which express doesn't have), meaning that saving front end components will cause the page to automatically refresh. The server handles the hot module replacement refresh and then proxies or forwards the request to the actual express server.

  -in webpack.config.js 'port' is the port that the browser will listen for, and 'proxy'forwards all paths to the specified express server. Make sure these are different ports.

  -You can choose not to use this server easily by not running 'npm run dev', and using 'npm run build' instead

  -The webpack dev server is quite verbose in console.infoing its effects in the browser console so the client/dist folder has a rather complicated disable_hmr_logs.js file that hijacks those console.infos and either skips them or changes them to being less verbose

### Additional-Notes

  1. Testing- The test file for App.jsx does not work because I changed from componentDidMount to using the React useEffect hook. If you want to visit the land of green check marks then you would have to refactor back to using componentDidMount, and even then i'm not sure if things would sync up. I was unable to find a testing solution using useEffect.

  2. The large blank space in this service is for a image carousel that was dependent on Marlon's service. Without the data, the carousel doesn't render to the page.

  3. The page is mostly responsive and changes based on the width of the screen.

