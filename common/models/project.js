var acc = require("ext-accessor");
module.exports = function(Project){
    Project.functionexternals = function(fnSource, cb) {
        console.log(fnSource);
        fnSource = fnSource.replace(/(\r\n|\n|\r)/gm,"");
        console.log(fnSource);
        var extAcc = acc.getAccessors(fnSource);
        cb(null,extAcc);
    };

    Project.remoteMethod(
        'functionexternals',
        {
            accepts: {arg: 'fn',type : 'String'},
            http : {
                path : '/externals',
                verb : 'POST'
            },
            returns: {arg : 'defs' , type : 'ExternalDef'}
        }
    );
};