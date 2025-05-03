"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppProfile = void 0;
var entry_postgres_entity_gateway_1 = require("../../adapters/postgres-gateways/entry-postgres-entity-gateway");
var postgresql_1 = require("../../databases/postgresql");
var AppProfile = /** @class */ (function () {
    function AppProfile(config) {
        this.inMemoryDb = config.inMemoryDb;
        this.postgresqlClient = config.postgresqlClient;
    }
    AppProfile.prototype.getEntryEntityGateway = function () {
        var postgresqlDb = new postgresql_1.PostgresqlDB(this.postgresqlClient, "entries");
        return new entry_postgres_entity_gateway_1.EntryPostgresEntityGateway(postgresqlDb);
    };
    return AppProfile;
}());
exports.AppProfile = AppProfile;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXByb2ZpbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvd2ViLXNlcnZlci9hcHAtcHJvZmlsZS9hcHAtcHJvZmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFJQSxnSEFBNEc7QUFDNUcseURBQTBEO0FBUTFEO0lBSUksb0JBQW1CLE1BQWM7UUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUM7SUFDcEQsQ0FBQztJQUVNLDBDQUFxQixHQUE1QjtRQUNJLElBQU0sWUFBWSxHQUFHLElBQUkseUJBQVksQ0FBa0IsSUFBSSxDQUFDLGdCQUFnQixFQUFFLFNBQVMsQ0FBQyxDQUFBO1FBRXhGLE9BQU8sSUFBSSwwREFBMEIsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQUFDLEFBZEQsSUFjQztBQUVRLGdDQUFVIn0=