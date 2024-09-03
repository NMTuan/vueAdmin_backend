/*
 * @Author: nmtuan nmtuan@qq.com
 * @Date: 2024-08-28 12:08:27
 * @LastEditors: nmtuan nmtuan@qq.com
 * @LastEditTime: 2024-08-28 14:38:47
 * @FilePath: \vueAdmin_backend\server\routes\api\v1\user\list\edit.get.ts
 * @Description:
 *
 * Copyright (c) 2024 by nmtuan@qq.com, All Rights Reserved.
 */
export default defineAuthEventHandler(async (event) => {
    const params = getQuery(event);
    return rs({
        data: {
            id: params.id || "x",
            name: "Beatrice Gomez",
            email: "henurdi@nucma.org",
            city: "Mejzupaj",
            cid: "1",
            country: "New Caledonia",
            createAt: "2022-12-12",
        },
        fields: [
            {
                key: "id",
                label: "编号",
                // component: "detail",
                // showType: 'modal',
                // path: "/user/user/view",
                // query: ["id"],
            },
            { key: "name", label: "姓名" },
            { key: "email", label: "邮箱" },
            { key: "city", label: "城市" },
            { key: "cid", label: "城市编号" },
            { key: "country", label: "国家" },
        ],
    });
});
