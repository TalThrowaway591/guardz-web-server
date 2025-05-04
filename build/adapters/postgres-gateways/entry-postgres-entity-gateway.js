"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntryPostgresEntityGateway = void 0;
var entry_entity_1 = require("../../app/entities/entry-entity");
var mapRowToEntry = function (value) {
    var id = value.id, title = value.title, body = value.body, ip = value.ip, createdtimestamp = value.createdtimestamp, active = value.active;
    var entryEntity = new entry_entity_1.EntryEntity(id);
    entryEntity.setTitle(title);
    entryEntity.setBody(body);
    entryEntity.setIP(ip);
    entryEntity.setActive(active);
    entryEntity.setCreatedTimestamp(Date.parse(createdtimestamp));
    return entryEntity;
};
var mapEntryToRow = function (entryEntity) {
    var id = entryEntity.getId();
    var title = entryEntity.getTitle();
    var body = entryEntity.getBody();
    var ip = entryEntity.getIP();
    var createdtimestamp = new Date(entryEntity.getCreatedTimestamp()).toISOString();
    var active = !!entryEntity.isActive();
    return {
        id: id,
        title: title,
        body: body,
        ip: ip,
        createdtimestamp: createdtimestamp,
        active: active
    };
};
var EntryPostgresEntityGateway = /** @class */ (function () {
    function EntryPostgresEntityGateway(db) {
        this.db = db;
        this.tableName = "entries";
    }
    EntryPostgresEntityGateway.prototype.list = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, entries;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.get()];
                    case 1:
                        result = _a.sent();
                        entries = result.map(function (value) { return mapRowToEntry(value); });
                        return [2 /*return*/, entries.filter(function (entry) { return !entry.isActive; })];
                }
            });
        });
    };
    EntryPostgresEntityGateway.prototype.listByIP = function (ipAddress) {
        return __awaiter(this, void 0, void 0, function () {
            var result, entries;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.get()];
                    case 1:
                        result = _a.sent();
                        entries = result.map(function (value) { return mapRowToEntry(value); });
                        return [2 /*return*/, entries.filter(function (entry) { return entry.getIP() === ipAddress && entry.isActive; })];
                }
            });
        });
    };
    EntryPostgresEntityGateway.prototype.save = function (entryEntity) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.create(mapEntryToRow(entryEntity))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EntryPostgresEntityGateway.prototype.delete = function (entryId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.delete(entryId)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return EntryPostgresEntityGateway;
}());
exports.EntryPostgresEntityGateway = EntryPostgresEntityGateway;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50cnktcG9zdGdyZXMtZW50aXR5LWdhdGV3YXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYWRhcHRlcnMvcG9zdGdyZXMtZ2F0ZXdheXMvZW50cnktcG9zdGdyZXMtZW50aXR5LWdhdGV3YXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0EsZ0VBQThEO0FBRTlELElBQU0sYUFBYSxHQUFHLFVBQUMsS0FBc0I7SUFDakMsSUFBQSxFQUFFLEdBQWdELEtBQUssR0FBckQsRUFBRSxLQUFLLEdBQXlDLEtBQUssTUFBOUMsRUFBRSxJQUFJLEdBQW1DLEtBQUssS0FBeEMsRUFBRSxFQUFFLEdBQStCLEtBQUssR0FBcEMsRUFBRSxnQkFBZ0IsR0FBYSxLQUFLLGlCQUFsQixFQUFFLE1BQU0sR0FBSyxLQUFLLE9BQVYsQ0FBVztJQUVoRSxJQUFNLFdBQVcsR0FBRyxJQUFJLDBCQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFeEMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdEIsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5QixXQUFXLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUE7SUFFN0QsT0FBTyxXQUFXLENBQUM7QUFDdkIsQ0FBQyxDQUFDO0FBRUYsSUFBTSxhQUFhLEdBQUcsVUFBQyxXQUF3QjtJQUMzQyxJQUFNLEVBQUUsR0FBRyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDL0IsSUFBTSxLQUFLLEdBQUcsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3JDLElBQU0sSUFBSSxHQUFHLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNuQyxJQUFNLEVBQUUsR0FBRyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDL0IsSUFBTSxnQkFBZ0IsR0FBRyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ25GLElBQU0sTUFBTSxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7SUFFeEMsT0FBTztRQUNILEVBQUUsSUFBQTtRQUNGLEtBQUssT0FBQTtRQUNMLElBQUksTUFBQTtRQUNKLEVBQUUsSUFBQTtRQUNGLGdCQUFnQixrQkFBQTtRQUNoQixNQUFNLFFBQUE7S0FDVCxDQUFBO0FBQ0wsQ0FBQyxDQUFDO0FBRUY7SUFLSSxvQ0FBbUIsRUFBaUM7UUFDaEQsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQTtJQUM5QixDQUFDO0lBRUsseUNBQUksR0FBVjs7Ozs7NEJBQ21CLHFCQUFNLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUE7O3dCQUE1QixNQUFNLEdBQUcsU0FBbUI7d0JBRTVCLE9BQU8sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsYUFBYSxDQUFDLEtBQUssQ0FBQyxFQUFwQixDQUFvQixDQUFDLENBQUM7d0JBRTFELHNCQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQWYsQ0FBZSxDQUFDLEVBQUM7Ozs7S0FDbkQ7SUFFSyw2Q0FBUSxHQUFkLFVBQWUsU0FBaUI7Ozs7OzRCQUNiLHFCQUFNLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUE7O3dCQUE1QixNQUFNLEdBQUcsU0FBbUI7d0JBRTVCLE9BQU8sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsYUFBYSxDQUFDLEtBQUssQ0FBQyxFQUFwQixDQUFvQixDQUFDLENBQUM7d0JBRTFELHNCQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxRQUFRLEVBQTdDLENBQTZDLENBQUMsRUFBQTs7OztLQUNoRjtJQUVLLHlDQUFJLEdBQVYsVUFBVyxXQUF3Qjs7Ozs0QkFDL0IscUJBQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUE7O3dCQUFoRCxTQUFnRCxDQUFDO3dCQUVqRCxzQkFBTzs7OztLQUNWO0lBRUssMkNBQU0sR0FBWixVQUFhLE9BQWU7Ozs7NEJBQ3hCLHFCQUFNLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFBOzt3QkFBN0IsU0FBNkIsQ0FBQzt3QkFFOUIsc0JBQU87Ozs7S0FDVjtJQUNMLGlDQUFDO0FBQUQsQ0FBQyxBQXJDRCxJQXFDQztBQUVRLGdFQUEwQiJ9