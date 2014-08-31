module.exports = function enableAuthentication(server) {
    // enable authentication
    console.log(server);

    var modelBuilder = server.dataSources.db.modelBuilder;
    modelBuilder.define('ExternalDef', {accessor: String, modified: Date})
    var ExternalDefinition = {

    };
};
