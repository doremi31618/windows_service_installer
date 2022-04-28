var Service = require('node-windows').Service;
var fs = require('fs');
const config = JSON.parse(fs.readFile("./config.json"));
uninstallService();

function uninstallService(){
    if (config.path == "")return;
    var new_service = new Service({
        name: config.name,
        description: config.description,
        script: config.path
    })
    new_service.on('install', function(){
        new_service.start();
    })

    new_service.uninstall();
}

