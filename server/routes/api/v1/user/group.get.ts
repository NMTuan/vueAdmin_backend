/*
 * @Author: nmtuan nmtuan@qq.com
 * @Date: 2024-08-27 21:35:40
 * @LastEditors: nmtuan nmtuan@qq.com
 * @LastEditTime: 2024-09-06 05:54:33
 * @FilePath: \vueAdmin_backend\server\routes\api\v1\user\group.get.ts
 * @Description:
 *
 * Copyright (c) 2024 by nmtuan@qq.com, All Rights Reserved.
 */
export default defineAuthEventHandler(async (event) => {
    return rs({
        // rows: new Array(10).fill(item),
        rows: [
            {
                name: "小组111",
            },
            {
                name: "小组222",
            },
            {
                name: "小组333",
            },
        ],
        actions: [
            {
                key: "delete",
                label: "删除",
                icon: "ri-close-circle-line",
                component: "form",
                positions: ["row"],
                props: {
                    type: "danger",
                    plain: true,
                },
            },
        ],
        columns: [
            { label: "", component: "selection" },
            {
                key: "id",
                label: "编号",
                component: "detail",
                // showType: 'modal',
                path: "/user/user/view",
                query: ["id"],
            },
            { key: "name", label: "组名称" },
            {
                key: "actions",
                label: "操作",
                component: "actions",
                props: {
                    width: 200,
                },
            },
        ],
        search: [],
        advSearch: [],
        filters: [],
        total: 13,
    });
});
