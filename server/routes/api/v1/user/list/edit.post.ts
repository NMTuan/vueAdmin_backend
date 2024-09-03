/*
 * @Author: nmtuan nmtuan@qq.com
 * @Date: 2024-08-28 12:08:27
 * @LastEditors: nmtuan nmtuan@qq.com
 * @LastEditTime: 2024-08-28 15:09:27
 * @FilePath: \vueAdmin_backend\server\routes\api\v1\user\list\edit.post.ts
 * @Description:
 *
 * Copyright (c) 2024 by nmtuan@qq.com, All Rights Reserved.
 */
export default defineAuthEventHandler(async (event) => {
    const body = await readBody(event);
    return rs(body);
});
