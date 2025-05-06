"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserIPAddress = void 0;
var getUserIPAddress = function (request) {
    // TODO: implement more solid functionality for
    // determining user IP address, add exceptions
    // in case client is behind a proxy
    var ip = request.headers['x-forwarded-for'];
    if (typeof ip !== "string") {
        ip = request.socket.remoteAddress || 'no-ip';
    }
    // some kind of patch to fix ipv4 and ipv6 mixup
    if (ip.startsWith("::ffff:")) {
        ip = ip.substring(7);
    }
    return ip;
};
exports.getUserIPAddress = getUserIPAddress;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWlwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3dlYi1zZXJ2ZXIvdXRpbHMvZ2V0LWlwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLElBQU0sZ0JBQWdCLEdBQUcsVUFBQyxPQUFnQjtJQUN0QywrQ0FBK0M7SUFDL0MsOENBQThDO0lBRTlDLG1DQUFtQztJQUNuQyxJQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFFNUMsSUFBSSxPQUFPLEVBQUUsS0FBSyxRQUFRLEVBQUUsQ0FBQztRQUN6QixFQUFFLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxhQUFhLElBQUksT0FBTyxDQUFDO0lBQ2pELENBQUM7SUFFRCxnREFBZ0Q7SUFDaEQsSUFBSSxFQUFFLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUM7UUFDM0IsRUFBRSxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDeEIsQ0FBQztJQUVELE9BQU8sRUFBRSxDQUFDO0FBQ2QsQ0FBQyxDQUFBO0FBRVEsNENBQWdCIn0=