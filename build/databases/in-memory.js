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
exports.InMemoryDb = void 0;
var InMemoryDb = /** @class */ (function () {
    function InMemoryDb(tableName, data) {
        this.tableName = tableName;
        this.memory = new Map(data.map(function (entity) { return [entity.id, entity]; }));
    }
    InMemoryDb.prototype.create = function (row) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.memory.set("".concat(row.id), row);
                        return [4 /*yield*/, this.find(row.id)];
                    case 1: return [2 /*return*/, (_a.sent())];
                }
            });
        });
    };
    InMemoryDb.prototype.get = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Array.from(this.memory.values())];
            });
        });
    };
    InMemoryDb.prototype.find = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.memory.get("".concat(id)) || null];
            });
        });
    };
    InMemoryDb.prototype.update = function (id, row) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.memory.set("".concat(id), row);
                return [2 /*return*/];
            });
        });
    };
    InMemoryDb.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.memory.delete("".concat(id));
                return [2 /*return*/];
            });
        });
    };
    return InMemoryDb;
}());
exports.InMemoryDb = InMemoryDb;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2RhdGFiYXNlcy9pbi1tZW1vcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7SUFJSSxvQkFBWSxTQUFpQixFQUFFLElBQVM7UUFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBWSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUMsTUFBTSxJQUFLLE9BQUEsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFuQixDQUFtQixDQUFDLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBRUssMkJBQU0sR0FBWixVQUFhLEdBQU07Ozs7O3dCQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO3dCQUUxQixxQkFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBQTs0QkFBL0Isc0JBQU8sQ0FBQyxTQUF1QixDQUFNLEVBQUM7Ozs7S0FDekM7SUFFSyx3QkFBRyxHQUFUOzs7Z0JBQ0ksc0JBQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUM7OztLQUMzQztJQUVLLHlCQUFJLEdBQVYsVUFBVyxFQUFVOzs7Z0JBQ2pCLHNCQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQUcsRUFBRSxDQUFFLENBQUMsSUFBSSxJQUFJLEVBQUM7OztLQUMzQztJQUVLLDJCQUFNLEdBQVosVUFBYSxFQUFVLEVBQUUsR0FBTTs7O2dCQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFHLEVBQUUsQ0FBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDOzs7O0tBQ2pDO0lBRUssMkJBQU0sR0FBWixVQUFhLEVBQVU7OztnQkFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBRyxFQUFFLENBQUUsQ0FBQyxDQUFDOzs7O0tBQy9CO0lBQ0wsaUJBQUM7QUFBRCxDQUFDLEFBOUJELElBOEJDO0FBRVEsZ0NBQVUifQ==