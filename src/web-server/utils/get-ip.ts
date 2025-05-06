import { Request } from "express";

const getUserIPAddress = (request: Request): string => {
    // TODO: implement more solid functionality for
    // determining user IP address, add exceptions

    // in case client is behind a proxy
    let ip = request.headers['x-forwarded-for'];

    if (typeof ip !== "string") {
        ip = request.socket.remoteAddress || 'no-ip';
    }

    // some kind of patch to fix ipv4 and ipv6 mixup
    if (ip.startsWith("::ffff:")) {
        ip = ip.substring(7)
    }

    return ip;
}

export { getUserIPAddress }