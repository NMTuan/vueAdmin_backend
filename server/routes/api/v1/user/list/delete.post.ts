/*
 * @Author: nmtuan nmtuan@qq.com
 * @Date: 2024-08-28 12:08:27
 * @LastEditors: nmtuan nmtuan@qq.com
 * @LastEditTime: 2024-08-29 16:24:57
 * @FilePath: \vueAdmin_backend\server\routes\api\v1\user\list\delete.post.ts
 * @Description:
 *
 * Copyright (c) 2024 by nmtuan@qq.com, All Rights Reserved.
 */
export default defineAuthEventHandler(async (event) => {
    const body = await readBody(event);
    return rs('成功!', body);
});
