# Node.js-UNICODE-
This repository consists of the solutions of the Node.js tasks given (UNICODE)
---
## Requirements

For development, you will only need Node.js and a node global package, express, body-parser, mongoose and MongoDB installed in your system.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).
   

If the installation was successful, you should be able to run the following command.

    $ node --version
    v12.8.2

    $ npm --version
    6.14.5


### Install  dependancies
all dependancies can be found in the package.json file of a respective task

    $npm install <dependancy> --save


For task 4
### MongoDB

  mongod - The database server.
  mongos - Sharding router.
  mongo  - The database shell (uses interactive javascript).

#### RUNNING

  For command line options invoke:

    $ ./mongod --help

  To run a single server database:

    $ sudo mkdir -p /data/db
    $ ./mongod
    $
    $ # The mongo javascript shell connects to localhost and test database by default:
    $ ./mongo
    > help

.

#### DOCUMENTATION

  https://docs.mongodb.com/manual/


## Install

    $ git clone https://github.com/Aditya-06/Node.js-UNICODE
    $ cd PROJECT_TITLE
   

## Running the project

    $ node app.js






## Task 2

Run commmand  $ node index.js and check out localhost:3000 on your web browser-- the ouput should be the following


![image](https://user-images.githubusercontent.com/56297484/89985410-a3d4e680-dc98-11ea-9d44-5ac85a45ed3f.png)


## Task 4

Run command $ node app.js and check out localhost:3000 on your web browser-- the ouput should be the following

![image](https://user-images.githubusercontent.com/56297484/89985671-0fb74f00-dc99-11ea-8fc5-93f8259099d9.png)
