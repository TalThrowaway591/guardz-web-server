"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
exports.createServer = void 0;
var path_1 = __importDefault(require("path"));
var express_1 = __importDefault(require("express"));
var in_memory_1 = require("../databases/in-memory");
var local_app_profile_1 = require("./app-profile/local-app-profile");
var routes_1 = require("./routes");
var config_1 = require("./config");
var requestHandlers = __importStar(require("./request-handlers/index"));
// import { LocaAppProfile } from "./app-profile/local-app-profile";
// import { Config } from "./config";
// import { AppProfile } from "./app-profile/app-profile";
// import path from "path";
// const appProfileMiddlewareFactory = (appProfile: AppProfile) => (req: Request, res: Response, next: NextFunction) => {
//     req.appProfile = appProfile;
//     next();
// };
var appProfileMiddlewareFactory = function (appProfile) { return function (req, res, next) {
    req.appProfile = appProfile;
    next();
}; };
var createInMemoryDb = function () {
    var inMemoryDb = new in_memory_1.InMemoryDb("entries", []);
    return inMemoryDb;
};
var addCors = function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Accept, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Expires", 0);
    next();
};
var registerMiddlewares = function (app, appProfile) {
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use(appProfileMiddlewareFactory(appProfile));
    app.use(addCors);
    return app;
};
var registerRequestHandlers = function (app) {
    app.get(routes_1.routes.entries.list, requestHandlers.listEntriesHandler);
    app.post(routes_1.routes.entries.create, requestHandlers.createEntryHandler);
    return app;
};
var createServer = function () { return __awaiter(void 0, void 0, void 0, function () {
    var app, inMemoryDb, config, appProfile, assetsPath;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                app = (0, express_1.default)();
                inMemoryDb = createInMemoryDb();
                _a = { inMemoryDb: inMemoryDb };
                return [4 /*yield*/, config_1.Config.gePostgresClient()];
            case 1:
                config = (_a.postgresqlClient = _b.sent(), _a);
                appProfile = new local_app_profile_1.LocalAppProfile(config);
                registerMiddlewares(app, appProfile);
                registerRequestHandlers(app);
                assetsPath = path_1.default.join(__dirname, "../../../guardz-app/build/client");
                console.log('assetsPath', assetsPath);
                app.use("/", express_1.default.static(assetsPath));
                app.use("/submit", express_1.default.static(assetsPath));
                return [2 /*return*/, app];
        }
    });
}); };
exports.createServer = createServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3dlYi1zZXJ2ZXIvc2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhDQUF1QjtBQUN2QixvREFBZ0Y7QUFHaEYsb0RBQW9EO0FBRXBELHFFQUFrRTtBQUNsRSxtQ0FBa0M7QUFDbEMsbUNBQWtDO0FBQ2xDLHdFQUE0RDtBQUM1RCxvRUFBb0U7QUFDcEUscUNBQXFDO0FBQ3JDLDBEQUEwRDtBQUMxRCwyQkFBMkI7QUFFM0IseUhBQXlIO0FBQ3pILG1DQUFtQztBQUNuQyxjQUFjO0FBQ2QsS0FBSztBQUVMLElBQU0sMkJBQTJCLEdBQUcsVUFBQyxVQUFzQixJQUFLLE9BQUEsVUFBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCO0lBQzVHLEdBQUcsQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQzVCLElBQUksRUFBRSxDQUFDO0FBQ1gsQ0FBQyxFQUgrRCxDQUcvRCxDQUFDO0FBRUYsSUFBTSxnQkFBZ0IsR0FBRztJQUNyQixJQUFNLFVBQVUsR0FBRyxJQUFJLHNCQUFVLENBQWtCLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVsRSxPQUFPLFVBQVUsQ0FBQztBQUN0QixDQUFDLENBQUE7QUFFRCxJQUFNLE9BQU8sR0FBRyxVQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsSUFBa0I7SUFDNUQsR0FBRyxDQUFDLFNBQVMsQ0FBQyw2QkFBNkIsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNsRCxHQUFHLENBQUMsU0FBUyxDQUFDLDhCQUE4QixFQUFFLHNCQUFzQixDQUFDLENBQUM7SUFDdEUsR0FBRyxDQUFDLFNBQVMsQ0FBQyw4QkFBOEIsRUFBRSwrQkFBK0IsQ0FBQyxDQUFDO0lBQy9FLEdBQUcsQ0FBQyxTQUFTLENBQUMsZUFBZSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQzNDLEdBQUcsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzVCLElBQUksRUFBRSxDQUFDO0FBQ1gsQ0FBQyxDQUFDO0FBRUYsSUFBTSxtQkFBbUIsR0FBRyxVQUFDLEdBQWdCLEVBQUUsVUFBc0I7SUFDakUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7SUFDeEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEQsR0FBRyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ2pELEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFakIsT0FBTyxHQUFHLENBQUM7QUFDZixDQUFDLENBQUM7QUFFRixJQUFNLHVCQUF1QixHQUFHLFVBQUMsR0FBZ0I7SUFDN0MsR0FBRyxDQUFDLEdBQUcsQ0FBQyxlQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxlQUFlLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNqRSxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBRXBFLE9BQU8sR0FBRyxDQUFDO0FBQ2YsQ0FBQyxDQUFDO0FBRUYsSUFBTSxZQUFZLEdBQUc7Ozs7OztnQkFDWCxHQUFHLEdBQUcsSUFBQSxpQkFBTyxHQUFFLENBQUM7Z0JBRWhCLFVBQVUsR0FBRyxnQkFBZ0IsRUFBRSxDQUFDO3VCQUVyQixVQUFVLFlBQUE7Z0JBQW9CLHFCQUFNLGVBQU0sQ0FBQyxnQkFBZ0IsRUFBRSxFQUFBOztnQkFBeEUsTUFBTSxJQUFpQixtQkFBZ0IsR0FBRSxTQUErQixLQUFFO2dCQUUxRSxVQUFVLEdBQUcsSUFBSSxtQ0FBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUUvQyxtQkFBbUIsQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLENBQUM7Z0JBRXJDLHVCQUF1QixDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUV2QixVQUFVLEdBQUcsY0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsa0NBQWtDLENBQUMsQ0FBQztnQkFFNUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsVUFBVSxDQUFDLENBQUE7Z0JBQ3JDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLGlCQUFPLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pDLEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLGlCQUFPLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBRS9DLHNCQUFPLEdBQUcsRUFBQzs7O0tBQ2QsQ0FBQztBQUVPLG9DQUFZIn0=