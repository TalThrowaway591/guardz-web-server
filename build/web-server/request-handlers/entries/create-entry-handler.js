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
exports.createEntryHandler = void 0;
var entry_entity_1 = require("../../../app/entities/entry-entity");
var getUserIPAddress = function (request) {
    // TODO: implement more solid functionality for
    // determining user IP address, add exceptions
    // in case client is behind a proxy
    var underlyingIP = request.headers['x-forwarded-for'];
    if (typeof underlyingIP === "string") {
        return underlyingIP;
    }
    return request.socket.remoteAddress || 'no-ip';
};
var createEntryHandler = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, title, body, userIPAddress, entryEntityGateway, entryEntity, test;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                console.log('reached handler');
                console.log('request body');
                console.log(req.body);
                _a = req.body, title = _a.title, body = _a.body;
                userIPAddress = getUserIPAddress(req);
                entryEntityGateway = req.appProfile.getEntryEntityGateway();
                entryEntity = new entry_entity_1.EntryEntity();
                entryEntity.setTitle(title);
                entryEntity.setBody(body);
                entryEntity.setIP(userIPAddress);
                entryEntity.setActive(true);
                entryEntity.setCreatedTimestamp(Date.now());
                console.log(entryEntity);
                return [4 /*yield*/, entryEntityGateway.save(entryEntity)];
            case 1:
                test = _b.sent();
                res.send();
                return [2 /*return*/];
        }
    });
}); };
exports.createEntryHandler = createEntryHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWVudHJ5LWhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvd2ViLXNlcnZlci9yZXF1ZXN0LWhhbmRsZXJzL2VudHJpZXMvY3JlYXRlLWVudHJ5LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsbUVBQWlFO0FBRWpFLElBQU0sZ0JBQWdCLEdBQUcsVUFBQyxPQUFnQjtJQUN0QywrQ0FBK0M7SUFDL0MsOENBQThDO0lBRTlDLG1DQUFtQztJQUNuQyxJQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFFeEQsSUFBSSxPQUFPLFlBQVksS0FBSyxRQUFRLEVBQUUsQ0FBQztRQUNuQyxPQUFPLFlBQVksQ0FBQztJQUN4QixDQUFDO0lBRUQsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLGFBQWEsSUFBSSxPQUFPLENBQUM7QUFDbkQsQ0FBQyxDQUFBO0FBRUQsSUFBTSxrQkFBa0IsR0FBRyxVQUFPLEdBQVksRUFBRSxHQUE2QixFQUFFLElBQWtCOzs7OztnQkFDN0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO2dCQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFBO2dCQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQkFFZixLQUFrQixHQUFHLENBQUMsSUFBSSxFQUF4QixLQUFLLFdBQUEsRUFBRSxJQUFJLFVBQUEsQ0FBYztnQkFFM0IsYUFBYSxHQUFHLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUd0QyxrQkFBa0IsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLHFCQUFxQixFQUFFLENBQUM7Z0JBRTVELFdBQVcsR0FBRyxJQUFJLDBCQUFXLEVBQUUsQ0FBQztnQkFFdEMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDNUIsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDMUIsV0FBVyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDakMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDNUIsV0FBVyxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFBO2dCQUUzQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUVaLHFCQUFNLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBQTs7Z0JBQWpELElBQUksR0FBRyxTQUEwQztnQkFFdkQsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFBOzs7O0tBQ2IsQ0FBQTtBQUVRLGdEQUFrQiJ9