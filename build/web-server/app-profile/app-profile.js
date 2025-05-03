"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppProfile = void 0;
var entry_postgres_entity_gateway_1 = require("../../adapters/postgres-gateways/entry-postgres-entity-gateway");
var postgresql_1 = require("../../databases/postgresql");
var AppProfile = /** @class */ (function () {
    function AppProfile(config) {
        this.inMemoryDb = config.inMemoryDb;
        this.postgresqlClient = config.postgresqlClient;
        this.eventEmitter = config.eventEmitter;
    }
    AppProfile.prototype.getEntryEntityGateway = function () {
        var postgresqlDb = new postgresql_1.PostgresqlDB(this.postgresqlClient, "entries");
        return new entry_postgres_entity_gateway_1.EntryPostgresEntityGateway(postgresqlDb);
    };
    AppProfile.prototype.getEventEmitter = function () {
        return this.eventEmitter;
    };
    return AppProfile;
}());
exports.AppProfile = AppProfile;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXByb2ZpbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvd2ViLXNlcnZlci9hcHAtcHJvZmlsZS9hcHAtcHJvZmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFJQSxnSEFBNEc7QUFDNUcseURBQTBEO0FBVTFEO0lBS0ksb0JBQW1CLE1BQWM7UUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUM7UUFDaEQsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDO0lBQzVDLENBQUM7SUFFTSwwQ0FBcUIsR0FBNUI7UUFDSSxJQUFNLFlBQVksR0FBRyxJQUFJLHlCQUFZLENBQWtCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxTQUFTLENBQUMsQ0FBQTtRQUV4RixPQUFPLElBQUksMERBQTBCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVNLG9DQUFlLEdBQXRCO1FBQ0ksT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFBO0lBQzVCLENBQUM7SUFDTCxpQkFBQztBQUFELENBQUMsQUFwQkQsSUFvQkM7QUFFUSxnQ0FBVSJ9