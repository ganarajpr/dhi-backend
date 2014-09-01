module.exports = function enableAuthentication(server) {
    // enable authentication

    var modelBuilder = server.dataSources.db.modelBuilder;

    var ExternalDefinition = {
        accessor : 'String',
        externals : ['String']
    };
    modelBuilder.define('ExternalDef', ExternalDefinition);
};
