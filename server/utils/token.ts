/*
 * @Author: nmtuan nmtuan@qq.com
 * @Date: 2024-08-20 17:16:39
 * @LastEditors: nmtuan nmtuan@qq.com
 * @LastEditTime: 2024-08-26 11:23:46
 * @FilePath: \vueAdmin_backend\server\utils\token.ts
 * @Description: 基于 jsonwebtoken 生成 token
 *
 * Copyright (c) 2024 by nmtuan@qq.com, All Rights Reserved.
 */
import jwt from "jsonwebtoken";
import dayjs from "dayjs";

export interface JwtPayload {
    userId: string;
}

export const generateToken = (userId: string) => {
    return jwt.sign({ userId }, useRuntimeConfig().jwtSecret || "vueAdmin", {
        expiresIn: dayjs().add(30, "day").endOf("day").diff(dayjs()),
    });
};

export const decodeToken = (token: string): JwtPayload => {
    try {
        return jwt.verify(
            token,
            useRuntimeConfig().jwtSecret || "vueAdmin"
        ) as JwtPayload;
    } catch (error) {
        throw new Error("Invalid token");
    }
};
