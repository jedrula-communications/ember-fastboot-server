# ember-fastboot-server
small wrapper arround fastboot-app-server for spinning fastboot app



#### to download the code and spin the server

1. copy contents of https://github.com/jedrula-communications/ember-fastboot-server/blob/master/bin/build to a file on the server like build_ember_fastboot_server

2. sh build_ember_fastboot_server

3. cd ember-fastboot-server-master

4. spin it
```
PORT=8913 DIST_PATH=../jedrula-app/current node server.js
```

