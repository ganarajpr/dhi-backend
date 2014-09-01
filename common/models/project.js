module.exports = function(Project){
    Project.functionexternals = function(fnSource, cb) {
        cb(null,fnSource);
    };

    Project.remoteMethod(
        'functionexternals',
        {
            accepts: {arg: 'fn',type : 'String'},
            http : {
                path : '/externals',
                verb : 'GET'
            },
            returns: {arg : 'defs' , type : 'ExternalDef'}
        }
    );
}