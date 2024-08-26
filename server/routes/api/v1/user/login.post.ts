/*
 * @Author: nmtuan nmtuan@qq.com
 * @Date: 2024-08-25 20:24:22
 * @LastEditors: nmtuan nmtuan@qq.com
 * @LastEditTime: 2024-08-26 11:21:26
 * @FilePath: \vueAdmin_backend\server\routes\api\v1\user\login.post.ts
 * @Description:
 *
 * Copyright (c) 2024 by nmtuan@qq.com, All Rights Reserved.
 */
export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const { username, password } = body;
    if (!username || !password) {
        return createError({
            statusCode: 400,
            message: "用户名或密码不能为空",
        });
    }
    const user = {
        id: "123456",
        name: "nick",
    };
    const token = await generateToken(user.id);
    console.log('token', token);
    return rs({
        user,
        token,
    });
});
