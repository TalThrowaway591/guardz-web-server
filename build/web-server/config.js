"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
var config_1 = __importDefault(require("config"));
var Config = {
    get: function (key) {
        try {
            return config_1.default.get(key);
        }
        catch (e) {
            return undefined;
        }
    },
};
exports.Config = Config;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3dlYi1zZXJ2ZXIvY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGtEQUE0QjtBQUU1QixJQUFNLE1BQU0sR0FBRztJQUNYLEdBQUcsWUFBQyxHQUFXO1FBQ1gsSUFBSSxDQUFDO1lBQ0QsT0FBTyxnQkFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMzQixDQUFDO1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUNULE9BQU8sU0FBUyxDQUFDO1FBQ3JCLENBQUM7SUFDTCxDQUFDO0NBQ0osQ0FBQTtBQUVRLHdCQUFNIn0=