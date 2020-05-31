import { Request } from 'express';
import logger from './logger';

/**
 * Nothing fancy here... we just make sure
 * the auth key they pass in the request is
 * the one the server knows.
 */
export const validateAuth = (req: Request) => {
    let isAuthenticated = false;
    const authHeader = req.headers.authorization;
    if (!authHeader)
        return isAuthenticated;
    return process.env.AUTH_KEY === authHeader;
}