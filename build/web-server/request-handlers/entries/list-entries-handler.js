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
exports.listEntriesHandler = void 0;
var get_ip_1 = require("../../utils/get-ip");
// TODO: fix any
var listEntriesHandler = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var entryEntityGateway, ipAddress, entries;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('reached list-entries-handler');
                entryEntityGateway = req.appProfile.getEntryEntityGateway();
                ipAddress = (0, get_ip_1.getUserIPAddress)(req);
                return [4 /*yield*/, entryEntityGateway.listByIP(ipAddress)];
            case 1:
                entries = _a.sent();
                res.send(entries);
                return [2 /*return*/];
        }
    });
}); };
exports.listEntriesHandler = listEntriesHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1lbnRyaWVzLWhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvd2ViLXNlcnZlci9yZXF1ZXN0LWhhbmRsZXJzL2VudHJpZXMvbGlzdC1lbnRyaWVzLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0EsNkNBQXNEO0FBQ3RELGdCQUFnQjtBQUNoQixJQUFNLGtCQUFrQixHQUFHLFVBQU8sR0FBWSxFQUFFLEdBQTZCLEVBQUUsSUFBa0I7Ozs7O2dCQUU3RixPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUE7Z0JBR3JDLGtCQUFrQixHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMscUJBQXFCLEVBQUUsQ0FBQztnQkFFNUQsU0FBUyxHQUFHLElBQUEseUJBQWdCLEVBQUMsR0FBRyxDQUFDLENBQUM7Z0JBRXhCLHFCQUFNLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBQTs7Z0JBQXRELE9BQU8sR0FBRyxTQUE0QztnQkFFNUQsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzs7OztLQUNyQixDQUFBO0FBRVEsZ0RBQWtCIn0=