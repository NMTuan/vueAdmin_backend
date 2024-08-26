/*
 * @Author: nmtuan nmtuan@qq.com
 * @Date: 2024-08-20 18:34:31
 * @LastEditors: nmtuan nmtuan@qq.com
 * @LastEditTime: 2024-08-25 23:24:58
 * @FilePath: \vueAdmin_backend\server\utils\defineAuthEventHandler.ts
 * @Description:
 *
 * Copyright (c) 2024 by nmtuan@qq.com, All Rights Reserved.
 */
import { H3Event, EventHandler, defineEventHandler } from "h3";
import { createError } from "h3";
import { JwtPayload } from "./token";

export const defineAuthEventHandler = (handler: EventHandler) => {
    return defineEventHandler(async (event: H3Event) => {
        const authHeader = getHeader(event, "Authorization");
        if (!authHeader) {
            throw createError({
                statusCode: 401,
                statusMessage: "Unauthorized: No token provided",
            });
        }

        const token = authHeader.split(" ")[1];
        try {
            const decoded = decodeToken(token) as JwtPayload;
            event.context.user = decoded;
            return handler(event);
        } catch (error) {
            throw createError({
                statusCode: 401,
                statusMessage: "Unauthorized: Invalid token",
            });
        }
    });
};
