module.exports = function(Project){
    Project.functionexternals = function(fnSource, cb) {
        cb();
    }

    Project.remoteMethod(
        'functionexternals',
        {
            accepts: [{arg: 'fn', type: 'string'}],
            http : {
                path : '/externals',
                verb : 'GET'
            },
            returns: [String]
        }
    );
}