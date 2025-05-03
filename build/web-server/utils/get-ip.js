"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserIPAddress = void 0;
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
exports.getUserIPAddress = getUserIPAddress;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWlwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3dlYi1zZXJ2ZXIvdXRpbHMvZ2V0LWlwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLElBQU0sZ0JBQWdCLEdBQUcsVUFBQyxPQUFnQjtJQUN0QywrQ0FBK0M7SUFDL0MsOENBQThDO0lBRTlDLG1DQUFtQztJQUNuQyxJQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFFeEQsSUFBSSxPQUFPLFlBQVksS0FBSyxRQUFRLEVBQUUsQ0FBQztRQUNuQyxPQUFPLFlBQVksQ0FBQztJQUN4QixDQUFDO0lBRUQsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLGFBQWEsSUFBSSxPQUFPLENBQUM7QUFDbkQsQ0FBQyxDQUFBO0FBRVEsNENBQWdCIn0=