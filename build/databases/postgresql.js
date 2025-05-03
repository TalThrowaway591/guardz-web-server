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
exports.PostgresqlDB = void 0;
var PostgresqlDB = /** @class */ (function () {
    function PostgresqlDB(client, tableName) {
        this.client = client;
        this.tableName = tableName;
    }
    PostgresqlDB.prototype.get = function () {
        return __awaiter(this, void 0, void 0, function () {
            var query, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "SELECT * FROM ".concat(this.tableName);
                        return [4 /*yield*/, this.client.query(query)];
                    case 1:
                        result = (_a.sent()).rows;
                        return [2 /*return*/, result];
                }
            });
        });
    };
    PostgresqlDB.prototype.create = function (row) {
        return __awaiter(this, void 0, void 0, function () {
            var columns, values, query, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        columns = Object.keys(row).reduce(function (previous, current) { return "".concat(previous.length > 0 ? "".concat(previous, ",") : previous, " ").concat(current); }, "");
                        values = Object.values(row).reduce(function (previous, current) {
                            return "".concat(previous.length > 0 ? "".concat(previous, ",") : previous, " ").concat(typeof current === "string" ? "'".concat(current, "'") : current);
                        }, "");
                        console.log('columns', columns);
                        console.log('values', values);
                        query = "INSERT INTO ".concat(this.tableName, " (").concat(columns, ") VALUES (").concat(values, ")");
                        console.log('query', query);
                        return [4 /*yield*/, this.client.query(query)];
                    case 1:
                        result = _a.sent();
                        console.log(result.rows);
                        return [2 /*return*/, row];
                }
            });
        });
    };
    PostgresqlDB.prototype.find = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, null];
            });
        });
    };
    return PostgresqlDB;
}());
exports.PostgresqlDB = PostgresqlDB;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdGdyZXNxbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhYmFzZXMvcG9zdGdyZXNxbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtJQUlJLHNCQUFZLE1BQVcsRUFBRSxTQUFpQjtRQUN0QyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUMvQixDQUFDO0lBQ0ssMEJBQUcsR0FBVDs7Ozs7O3dCQUNVLEtBQUssR0FBRyx3QkFBaUIsSUFBSSxDQUFDLFNBQVMsQ0FBRSxDQUFBO3dCQUUvQixxQkFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBQTs7d0JBQXhDLE1BQU0sR0FBRyxDQUFDLFNBQThCLENBQUMsQ0FBQyxJQUFJO3dCQUVwRCxzQkFBTyxNQUFNLEVBQUM7Ozs7S0FDakI7SUFFSyw2QkFBTSxHQUFaLFVBQWEsR0FBTTs7Ozs7O3dCQUNULE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FDbkMsVUFBQyxRQUFnQixFQUFFLE9BQWUsSUFBSyxPQUFBLFVBQUcsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQUcsUUFBUSxNQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsY0FBSSxPQUFPLENBQUUsRUFBL0QsQ0FBK0QsRUFDdEcsRUFBRSxDQUNMLENBQUM7d0JBQ0ksTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUNwQyxVQUFDLFFBQWdCLEVBQUUsT0FBZTs0QkFDOUIsT0FBQSxVQUFHLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFHLFFBQVEsTUFBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLGNBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxXQUFJLE9BQU8sTUFBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUU7d0JBQTlHLENBQThHLEVBQ2xILEVBQUUsQ0FDTCxDQUFDO3dCQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFBO3dCQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQTt3QkFFdkIsS0FBSyxHQUFHLHNCQUFlLElBQUksQ0FBQyxTQUFTLGVBQUssT0FBTyx1QkFBYSxNQUFNLE1BQUcsQ0FBQzt3QkFFOUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUE7d0JBQ1oscUJBQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUE7O3dCQUF2QyxNQUFNLEdBQUcsU0FBOEI7d0JBRTdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBO3dCQUV4QixzQkFBTyxHQUFHLEVBQUM7Ozs7S0FDZDtJQUVLLDJCQUFJLEdBQVYsVUFBVyxFQUFVOzs7Z0JBQ2pCLHNCQUFPLElBQUksRUFBQTs7O0tBQ2Q7SUFFTCxtQkFBQztBQUFELENBQUMsQUE1Q0QsSUE0Q0M7QUE1Q1ksb0NBQVkifQ==