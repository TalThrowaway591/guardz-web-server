"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppProfile = void 0;
var entry_in_memory_entity_gateway_1 = require("../../adapters/in-memory-data-access/gateways/entry-in-memory-entity-gateway");
var AppProfile = /** @class */ (function () {
    function AppProfile(config) {
        this.inMemoryDb = config.inMemoryDb;
    }
    AppProfile.prototype.getEntryEntityGateway = function () {
        return new entry_in_memory_entity_gateway_1.EntryInMemoryEntityGateway(this.inMemoryDb);
    };
    return AppProfile;
}());
exports.AppProfile = AppProfile;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXByb2ZpbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvd2ViLXNlcnZlci9hcHAtcHJvZmlsZS9hcHAtcHJvZmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQSwrSEFBMEg7QUFNMUg7SUFHSSxvQkFBbUIsTUFBYztRQUM3QixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7SUFDeEMsQ0FBQztJQUVNLDBDQUFxQixHQUE1QjtRQUNJLE9BQU8sSUFBSSwyREFBMEIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQVVMLGlCQUFDO0FBQUQsQ0FBQyxBQW5CRCxJQW1CQztBQUVRLGdDQUFVIn0=