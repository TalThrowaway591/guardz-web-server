import { Request } from "express";

const getUserIPAddress = (request: Request): string => {
    // TODO: implement more solid functionality for
    // determining user IP address, add exceptions

    // in case client is behind a proxy
    const underlyingIP = request.headers['x-forwarded-for'];

    if (typeof underlyingIP === "string") {
        return underlyingIP;
    }

    return request.socket.remoteAddress || 'no-ip';
}

export { getUserIPAddress }