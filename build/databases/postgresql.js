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
exports.Postgresql = void 0;
function updateQuerySetter(row) {
    var setQuery = "";
    for (var _i = 0, _a = Object.keys(row); _i < _a.length; _i++) {
        var key = _a[_i];
        setQuery += "".concat(key, "=").concat(typeof row[key] === "string" ? "\"".concat(row[key], "\"") : row[key], ", ");
    }
    setQuery += "updatedTimestamp=".concat(new Date().getTime());
    return setQuery;
}
var Postgresql = /** @class */ (function () {
    function Postgresql(connection, tableName) {
        this.connection = connection;
        this.tableName = tableName;
    }
    Postgresql.prototype.get = function () {
        return __awaiter(this, void 0, void 0, function () {
            var rows;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connection.promise().execute("SELECT * FROM ".concat(this.tableName))];
                    case 1:
                        rows = _a.sent();
                        return [2 /*return*/, rows[0]];
                }
            });
        });
    };
    Postgresql.prototype.create = function (row) {
        return __awaiter(this, void 0, void 0, function () {
            var columns, values, query, response, id, rows;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        columns = Object.keys(row).reduce(function (previous, current) { return "".concat(previous.length > 0 ? "".concat(previous, ",") : previous, " ").concat(current); }, "");
                        values = Object.values(row).reduce(function (previous, current) {
                            return "".concat(previous.length > 0 ? "".concat(previous, ",") : previous, " ").concat(typeof current === "string" ? "\"".concat(current, "\"") : current);
                        }, "");
                        query = "INSERT INTO ".concat(this.tableName, " (").concat(columns, ") VALUES (").concat(values, ")");
                        return [4 /*yield*/, this.connection.promise().execute(query)];
                    case 1:
                        response = _a.sent();
                        id = response[0].insertId;
                        return [4 /*yield*/, this.connection.promise().execute("SELECT * FROM ".concat(this.tableName, " WHERE id = ").concat(id))];
                    case 2:
                        rows = (_a.sent())[0];
                        return [2 /*return*/, rows[0]];
                }
            });
        });
    };
    Postgresql.prototype.find = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var query, rows, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        query = "SELECT * FROM ".concat(this.tableName, " WHERE id = \"").concat(id, "\"");
                        return [4 /*yield*/, this.connection.promise().execute(query)];
                    case 1:
                        rows = (_a.sent())[0];
                        if (!rows[0]) {
                            throw new Error("Row not found");
                        }
                        return [2 /*return*/, rows[0]];
                    case 2:
                        e_1 = _a.sent();
                        throw new Error("Cannot connect to ".concat(this.tableName, " ").concat(e_1));
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Postgresql.prototype.update = function (id, row) {
        return __awaiter(this, void 0, void 0, function () {
            var updateSubQuery, query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        updateSubQuery = updateQuerySetter(row);
                        query = "UPDATE ".concat(this.tableName, " SET ").concat(updateSubQuery, " WHERE id=\"").concat(id, "\"");
                        return [4 /*yield*/, this.connection.promise().execute(query)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Postgresql.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "DELETE FROM ".concat(this.tableName, " WHERE id=\"").concat(id, "\"");
                        return [4 /*yield*/, this.connection.promise().execute(query)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return Postgresql;
}());
exports.Postgresql = Postgresql;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdGdyZXNxbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhYmFzZXMvcG9zdGdyZXNxbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxTQUFTLGlCQUFpQixDQUFtQixHQUFNO0lBQy9DLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNsQixLQUFrQixVQUFnQixFQUFoQixLQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQWhCLGNBQWdCLEVBQWhCLElBQWdCLEVBQUUsQ0FBQztRQUFoQyxJQUFNLEdBQUcsU0FBQTtRQUNWLFFBQVEsSUFBSSxVQUFHLEdBQUcsY0FBSSxPQUFRLEdBQVcsQ0FBQyxHQUFHLENBQUMsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLFlBQUssR0FBVyxDQUFDLEdBQUcsQ0FBQyxPQUFHLENBQUMsQ0FBQyxDQUFFLEdBQVcsQ0FBQyxHQUFHLENBQUMsT0FBSSxDQUFDO0lBQ25ILENBQUM7SUFDRCxRQUFRLElBQUksMkJBQW9CLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUUsQ0FBQztJQUV2RCxPQUFPLFFBQVEsQ0FBQztBQUNwQixDQUFDO0FBRUQ7SUFJSSxvQkFBWSxVQUFlLEVBQUUsU0FBaUI7UUFDMUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDL0IsQ0FBQztJQUNLLHdCQUFHLEdBQVQ7Ozs7OzRCQUNpQixxQkFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyx3QkFBaUIsSUFBSSxDQUFDLFNBQVMsQ0FBRSxDQUFDLEVBQUE7O3dCQUFqRixJQUFJLEdBQUcsU0FBMEU7d0JBRXZGLHNCQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBQzs7OztLQUNsQjtJQUVL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