/*
 * @Author: nmtuan nmtuan@qq.com
 * @Date: 2024-09-04 05:41:21
 * @LastEditors: nmtuan nmtuan@qq.com
 * @LastEditTime: 2024-09-05 15:54:25
 * @FilePath: \vueAdmin_backend\server\routes\api\v1\user\list\view.get.ts
 * @Description:
 *
 * Copyright (c) 2024 by nmtuan@qq.com, All Rights Reserved.
 */
export default defineAuthEventHandler(async (event) => {
    const params = getQuery(event);
    return rs({
        data: {
            id: "aaa",
            name: "11",
            sex: 1,
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
                // fetchUrl: "/user/user/view",
                // query: ["id"],
            },
            { key: "name", label: "姓名" },
            {
                key: "sex",
                label: "性别",
                component: "enum",
                options: [
                    { label: "男", value: "1" },
                    {
                        label: "女",
                        value: "2",
                        props: {
                            type: "danger",
                        },
                    },
                    { label: "未知", value: "0" },
                ],
            },
            { key: "email", label: "邮箱" },
            {
                key: "city",
                label: "城市",
                component: "table",
                // fetchUrl: "/user/list",
                query: ["name"],
                props: {
                    // text: true,
                    // type: 'primary'
                },
                showTypeProps: {
                    title: "详情",
                },
            },
            { key: "cid", label: "城市编号" },
            {
                key: "country",
                label: "国家",
                component: "detail",
                showType: "modal",
                fetchUrl: "/user/list/view",
                query: ["id"],
                showTypeProps: {
                    title: "详情",
                },
            },
        ],
    });
});
