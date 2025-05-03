"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntryEntity = void 0;
var entity_1 = require("./entity");
var EntryEntity = /** @class */ (function (_super) {
    __extends(EntryEntity, _super);
    function EntryEntity(id) {
        var _this = _super.call(this, "entry", id) || this;
        _this.title = "";
        _this.body = "";
        _this.createdTimestamp = Date.now();
        _this.ip = "";
        _this.active = true;
        return _this;
    }
    EntryEntity.prototype.setTitle = function (title) {
        this.title = title;
    };
    EntryEntity.prototype.setBody = function (body) {
        this.body = body;
    };
    EntryEntity.prototype.setCreatedTimestamp = function (timestamp) {
        this.createdTimestamp = timestamp;
    };
    EntryEntity.prototype.setIP = function (ip) {
        this.ip = ip;
    };
    EntryEntity.prototype.setActive = function (active) {
        this.active = active;
    };
    EntryEntity.prototype.getTitle = function () {
        return this.title;
    };
    EntryEntity.prototype.getBody = function () {
        return this.body;
    };
    EntryEntity.prototype.getIP = function () {
        return this.ip;
    };
    EntryEntity.prototype.getCreatedTimestamp = function () {
        return this.createdTimestamp;
    };
    EntryEntity.prototype.isActive = function () {
        return this.active;
    };
    return EntryEntity;
}(entity_1.Entity));
exports.EntryEntity = EntryEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50cnktZW50aXR5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9lbnRpdGllcy9lbnRyeS1lbnRpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQWtDO0FBRWxDO0lBQTBCLCtCQUFNO0lBVzVCLHFCQUFtQixFQUFXO1FBQzFCLFlBQUEsTUFBSyxZQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsU0FBQztRQVhmLFdBQUssR0FBVyxFQUFFLENBQUM7UUFFbkIsVUFBSSxHQUFXLEVBQUUsQ0FBQztRQUVsQixzQkFBZ0IsR0FBVyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFFdEMsUUFBRSxHQUFXLEVBQUUsQ0FBQztRQUVoQixZQUFNLEdBQVksSUFBSSxDQUFDOztJQUkvQixDQUFDO0lBRU0sOEJBQVEsR0FBZixVQUFnQixLQUFhO1FBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFFTSw2QkFBTyxHQUFkLFVBQWUsSUFBWTtRQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRU0seUNBQW1CLEdBQTFCLFVBQTJCLFNBQWlCO1FBQ3hDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7SUFDdEMsQ0FBQztJQUVNLDJCQUFLLEdBQVosVUFBYSxFQUFVO1FBQ25CLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFTSwrQkFBUyxHQUFoQixVQUFpQixNQUFlO1FBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3pCLENBQUM7SUFFTSw4QkFBUSxHQUFmO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFTSw2QkFBTyxHQUFkO1FBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFTSwyQkFBSyxHQUFaO1FBQ0ksT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFTSx5Q0FBbUIsR0FBMUI7UUFDSSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUNqQyxDQUFDO0lBRU0sOEJBQVEsR0FBZjtRQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDLEFBdERELENBQTBCLGVBQU0sR0FzRC9CO0FBRVEsa0NBQVcifQ==