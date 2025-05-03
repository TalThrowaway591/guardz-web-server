"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
var nanoid_1 = require("nanoid");
var Entity = /** @class */ (function () {
    function Entity(prefix, id) {
        this.prefix = prefix;
        this.id = id !== null && id !== void 0 ? id : "".concat(prefix, "-").concat((0, nanoid_1.nanoid)(8));
    }
    Entity.prototype.getId = function () {
        return this.id;
    };
    Entity.prototype.getPrefix = function () {
        return this.prefix;
    };
    return Entity;
}());
exports.Entity = Entity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9lbnRpdGllcy9lbnRpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsaUNBQWdDO0FBRWhDO0lBSUksZ0JBQXNCLE1BQWMsRUFBRSxFQUFXO1FBQzdDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxhQUFGLEVBQUUsY0FBRixFQUFFLEdBQUksVUFBRyxNQUFNLGNBQUksSUFBQSxlQUFNLEVBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUM3QyxDQUFDO0lBRU0sc0JBQUssR0FBWjtRQUNJLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRU0sMEJBQVMsR0FBaEI7UUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUNMLGFBQUM7QUFBRCxDQUFDLEFBaEJELElBZ0JDO0FBRVEsd0JBQU0ifQ==