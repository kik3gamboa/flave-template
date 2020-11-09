const flave = require('flave');
const fs = require('fs');
const config = {
    format: false,
}

transpile('./template.flave', './sample/tem.js');

function transpile(src, dest) {

    fs.readFile(src, function (error, data) {
        if (!error)
            fs.writeFileSync(dest, flave.transpile(data.toString(), config))       
    })
}
