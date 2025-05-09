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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
var config_1 = __importDefault(require("config"));
var once_1 = require("./utils/once");
var pg_1 = require("pg");
var Config = {
    get: function (key) {
        try {
            return config_1.default.get(key);
        }
        catch (e) {
            return undefined;
        }
    },
    gePostgresClient: (0, once_1.once)(function () { return __awaiter(void 0, void 0, void 0, function () {
        var connectionConfig, client;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    connectionConfig = config_1.default.get("postgresql");
                    client = new pg_1.Client(connectionConfig);
                    return [4 /*yield*/, client.connect()];
                case 1:
                    _a.sent();
                    // @ts-ignore
                    console.log("Connected to Postgres database on port ".concat(connectionConfig.port));
                    return [2 /*return*/, client];
            }
        });
    }); }),
};
exports.Config = Config;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3dlYi1zZXJ2ZXIvY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtEQUE0QjtBQUM1QixxQ0FBb0M7QUFDcEMseUJBQTJCO0FBQzNCLElBQU0sTUFBTSxHQUFHO0lBQ1gsR0FBRyxZQUFDLEdBQVc7UUFDWCxJQUFJLENBQUM7WUFDRCxPQUFPLGdCQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLENBQUM7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ1QsT0FBTyxTQUFTLENBQUM7UUFDckIsQ0FBQztJQUNMLENBQUM7SUFFRCxnQkFBZ0IsRUFBRSxJQUFBLFdBQUksRUFBQzs7Ozs7b0JBQ2IsZ0JBQWdCLEdBQUcsZ0JBQU0sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFXLENBQUM7b0JBRXRELE1BQU0sR0FBRyxJQUFJLFdBQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO29CQUUzQyxxQkFBTSxNQUFNLENBQUMsT0FBTyxFQUFFLEVBQUE7O29CQUF0QixTQUFzQixDQUFDO29CQUV2QixhQUFhO29CQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsaURBQTBDLGdCQUFnQixDQUFDLElBQUksQ0FBRSxDQUFDLENBQUE7b0JBRTlFLHNCQUFPLE1BQU0sRUFBQzs7O1NBQ2pCLENBQUM7Q0FFTCxDQUFBO0FBRVEsd0JBQU0ifQ==