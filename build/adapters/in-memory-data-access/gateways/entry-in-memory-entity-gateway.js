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
exports.EntryInMemoryEntityGateway = void 0;
// const mapDocumentToPost = (document: Mongo.Document): PostEntity => {
//     const postEntity = new PostEntity(document.id);
//     postEntity.setTitle(document.title);
//     postEntity.setDescription(document.description);
//     postEntity.setAuthor(document.author);
//     postEntity.setCreatedTimestamp(document.createdTimestamp);
//     postEntity.setUpdatedTimestamp(document.updatedTimestamp);
//     postEntity.setActive(document.active);
//     return postEntity;
// };
// const mapPostToDocument = (postEntity: PostEntity): Record<string, any> => {
//     const id = postEntity.getId();
//     const title = postEntity.getTitle();
//     const description = postEntity.getDescription();
//     const author = postEntity.getAuthor();
//     const createdTimestamp = postEntity.getCreatedTimestamp();
//     const updatedTimestamp = postEntity.getUpdatedTimestamp();
//     const active = postEntity.isActive();
//     return {
//         id,
//         title,
//         description,
//         author,
//         createdTimestamp,
//         updatedTimestamp,
//         active,
//     };
// };
var EntryInMemoryEntityGateway = /** @class */ (function () {
    // TODO: change any
    function EntryInMemoryEntityGateway(db) {
        this.db = db;
    }
    EntryInMemoryEntityGateway.prototype.list = function () {
        return __awaiter(this, void 0, void 0, function () {
            var documents;
            return __generator(this, function (_a) {
                documents = this.db.get();
                return [2 /*return*/, documents];
            });
        });
    };
    EntryInMemoryEntityGateway.prototype.save = function (entryEntity) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.db.create(entryEntity);
                return [2 /*return*/];
            });
        });
    };
    return EntryInMemoryEntityGateway;
}());
exports.EntryInMemoryEntityGateway = EntryInMemoryEntityGateway;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50cnktaW4tbWVtb3J5LWVudGl0eS1nYXRld2F5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FkYXB0ZXJzL2luLW1lbW9yeS1kYXRhLWFjY2Vzcy9nYXRld2F5cy9lbnRyeS1pbi1tZW1vcnktZW50aXR5LWdhdGV3YXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUEsd0VBQXdFO0FBQ3hFLHNEQUFzRDtBQUV0RCwyQ0FBMkM7QUFDM0MsdURBQXVEO0FBQ3ZELDZDQUE2QztBQUM3QyxpRUFBaUU7QUFDakUsaUVBQWlFO0FBQ2pFLDZDQUE2QztBQUU3Qyx5QkFBeUI7QUFDekIsS0FBSztBQUVMLCtFQUErRTtBQUMvRSxxQ0FBcUM7QUFDckMsMkNBQTJDO0FBQzNDLHVEQUF1RDtBQUN2RCw2Q0FBNkM7QUFDN0MsaUVBQWlFO0FBQ2pFLGlFQUFpRTtBQUNqRSw0Q0FBNEM7QUFFNUMsZUFBZTtBQUNmLGNBQWM7QUFDZCxpQkFBaUI7QUFDakIsdUJBQXVCO0FBQ3ZCLGtCQUFrQjtBQUNsQiw0QkFBNEI7QUFDNUIsNEJBQTRCO0FBQzVCLGtCQUFrQjtBQUNsQixTQUFTO0FBQ1QsS0FBSztBQUVMO0lBS0ksbUJBQW1CO0lBQ25CLG9DQUFtQixFQUFtQjtRQUNsQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUsseUNBQUksR0FBVjs7OztnQkFDVSxTQUFTLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFFaEMsc0JBQU8sU0FBUyxFQUFDOzs7S0FDcEI7SUFFSyx5Q0FBSSxHQUFWLFVBQVcsV0FBd0I7OztnQkFDL0IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBRTVCLHNCQUFPOzs7S0FDVjtJQUNMLGlDQUFDO0FBQUQsQ0FBQyxBQXJCRCxJQXFCQztBQUVRLGdFQUEwQiJ9