/*
 * @Author: nmtuan nmtuan@qq.com
 * @Date: 2024-08-28 12:08:27
 * @LastEditors: nmtuan nmtuan@qq.com
 * @LastEditTime: 2024-08-29 22:12:30
 * @FilePath: \vueAdmin_backend\server\routes\api\v1\user\list\create.get.ts
 * @Description:
 *
 * Copyright (c) 2024 by nmtuan@qq.com, All Rights Reserved.
 */
export default defineAuthEventHandler(async (event) => {
    const params = getQuery(event);
    return rs({
        data: {
           
        },
        fields: [
            { key: "name", label: "姓名" },
            { key: "sex", label: "性别",
                component: 'select',
                options: [
                    { label: '男', value: '1' },
                    { label: '女', value: '2' },
                    { label: '未知', value: '0' }
                ],
                props: {
                    clearable: true
                }
             },
            { key: "email", label: "邮箱" },
            { key: "city", label: "城市" },
            { key: "cid", label: "城市编号" },
            { key: "country", label: "国家" },
        ],
    });
});
