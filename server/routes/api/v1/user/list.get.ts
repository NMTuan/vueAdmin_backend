/*
 * @Author: nmtuan nmtuan@qq.com
 * @Date: 2024-08-27 20:37:59
 * @LastEditors: nmtuan nmtuan@qq.com
 * @LastEditTime: 2024-09-04 05:53:40
 * @FilePath: \vueAdmin_backend\server\routes\api\v1\user\list.get.ts
 * @Description:
 *
 * Copyright (c) 2024 by nmtuan@qq.com, All Rights Reserved.
 */
export default defineAuthEventHandler(async (event) => {
    return rs({
        // rows: new Array(10).fill(item),
        rows: [
            {
                id: "aaa",
                name: "11",
                email: "henurdi@nucma.org",
                city: "Mejzupaj",
                cid: "1",
                country: "New Caledonia",
                createAt: "2022-12-12",
            },
            {
                id: "bbb",
                name: "22",
                email: "henurdi@nucma.org",
                city: "Mejzupaj",
                cid: "1",
                country: "New Caledonia",
                createAt: "2022-12-12",
            },
        ],
        columns: [
            { label: "", component: "selection" },
            {
                key: "id",
                label: "编号",
                component: "detail",
                // showType: 'slideover',
                fetchUrl: "/user/list/view",
                // fetchType: 'post',
                query: ["id", "name"],
                props: {
                    // text: true,
                    // type: 'primary'
                },
                showTypeProps: {
                    title: "详情",
                },
            },
            {
                key: "name",
                label: "姓名",
                component: "copy",
                props: {
                    position: "after",
                },
            },
            { key: "email", label: "邮箱" },
            { key: "city", label: "城市" },
            { key: "cid", label: "城市编号" },
            { key: "country", label: "国家" },
            {
                label: "操作",
                component: "actions",
                props: {
                    width: 200,
                },
            },
        ],
        search: [{ key: "name", label: "姓名", placeholder: "请输入姓名" }],
        advSearch: [
            {
                key: "sex",
                label: "性别",
                placeholder: "请选择性别",
                component: "select",
                options: [
                    { label: "男", value: "male" },
                    { label: "女", value: "female" },
                ],
            },
            { key: "name", label: "姓名" },
            { key: "email", label: "邮箱" },
            { key: "city", label: "城市" },
        ],
        filters: [],
        total: 55,
    });
});
