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
var routes_1 = require("./routes");
var config_1 = require("./config");
var in_memory_1 = require("../databases/in-memory");
var requestHandlers = __importStar(require("./request-handlers/index"));
var local_app_profile_1 = require("./app-profile/local-app-profile");
var express_1 = __importDefault(require("express"));
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
// TODO: modify to use builder design pattern?
var registerRequestHandlers = function (app) {
    app.get(routes_1.routes.entries.list, requestHandlers.listEntriesHandler);
    app.post(routes_1.routes.entries.create, requestHandlers.createEntryHandler);
    app.delete(routes_1.routes.entries.remove, requestHandlers.removeEntryHandler);
    app.get("/heartbeat", function (req, res) { res.send(1); });
};
var registerStaticContent = function (app) {
    var assetsPath = path_1.default.join(__dirname, "..", "..", "public");
    app.use("/", express_1.default.static(assetsPath));
    app.use("/view-entries", express_1.default.static(assetsPath));
    app.use("/submit-entry", express_1.default.static(assetsPath));
};
var createServer = function (eventEmitter) { return __awaiter(void 0, void 0, void 0, function () {
    var app, inMemoryDb, config, appProfile;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                app = (0, express_1.default)();
                inMemoryDb = createInMemoryDb();
                _a = { inMemoryDb: inMemoryDb };
                return [4 /*yield*/, config_1.Config.gePostgresClient()];
            case 1:
                config = (_a.postgresqlClient = _b.sent(), _a.eventEmitter = eventEmitter, _a);
                appProfile = new local_app_profile_1.LocalAppProfile(config);
                registerMiddlewares(app, appProfile);
                registerRequestHandlers(app);
                registerStaticContent(app);
                return [2 /*return*/, app];
        }
    });
}); };
exports.createServer = createServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3dlYi1zZXJ2ZXIvc2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhDQUF1QjtBQUd2QixtQ0FBa0M7QUFDbEMsbUNBQWtDO0FBRWxDLG9EQUFvRDtBQUVwRCx3RUFBNEQ7QUFDNUQscUVBQWtFO0FBRWxFLG9EQUFnRjtBQUVoRixJQUFNLDJCQUEyQixHQUFHLFVBQUMsVUFBc0IsSUFBSyxPQUFBLFVBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxJQUFrQjtJQUM1RyxHQUFHLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUM1QixJQUFJLEVBQUUsQ0FBQztBQUNYLENBQUMsRUFIK0QsQ0FHL0QsQ0FBQztBQUVGLElBQU0sZ0JBQWdCLEdBQUc7SUFDckIsSUFBTSxVQUFVLEdBQUcsSUFBSSxzQkFBVSxDQUFrQixTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFbEUsT0FBTyxVQUFVLENBQUM7QUFDdEIsQ0FBQyxDQUFBO0FBRUQsSUFBTSxPQUFPLEdBQUcsVUFBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCO0lBQzVELEdBQUcsQ0FBQyxTQUFTLENBQUMsNkJBQTZCLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDbEQsR0FBRyxDQUFDLFNBQVMsQ0FBQyw4QkFBOEIsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO0lBQ3RFLEdBQUcsQ0FBQyxTQUFTLENBQUMsOEJBQThCLEVBQUUsK0JBQStCLENBQUMsQ0FBQztJQUMvRSxHQUFHLENBQUMsU0FBUyxDQUFDLGVBQWUsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUMzQyxHQUFHLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM1QixJQUFJLEVBQUUsQ0FBQztB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