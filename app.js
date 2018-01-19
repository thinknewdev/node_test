console.log("Hello World");

var bunyan = require('bunyan');
var log = bunyan.createLogger({name: "myapp"});
log.info("hi");
var error = Error("Boom!");
log.error(error);