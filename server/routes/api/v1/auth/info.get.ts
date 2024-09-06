/*
 * @Author: nmtuan nmtuan@qq.com
 * @Date: 2024-08-25 23:11:04
 * @LastEditors: nmtuan nmtuan@qq.com
 * @LastEditTime: 2024-09-06 05:54:00
 * @FilePath: \vueAdmin_backend\server\routes\api\v1\auth\info.get.ts
 * @Description:
 *
 * Copyright (c) 2024 by nmtuan@qq.com, All Rights Reserved.
 */
export default defineAuthEventHandler(() => {
    return rs({
        id: "123456",
        name: "nick",
        menu: [
            {
                label: "首页",
                key: "index",
                icon: "ri-home-line",
                component: "index",
            },
            {
                label: "用户管理",
                key: "user",
                icon: "ri-user-line",
                children: [
                    {
                        label: "用户列表",
                        key: "list",
                        icon: "ri-building-line",
                        component: "dataTable",
                        // fetchUrl: '/user/info',
                        // fetchType: 'get',
                        // autoFetch: true,
                        // props: {
                        //     highlightCurrentRow: true,
                        // },
                        // actions: [
                        //     {
                        //         key: "create",
                        //         label: "创建",
                        //         icon: "ri-add-circle-line",
                        //         showType: 'slideover',
                        //         component: "form",
                        //         positions: ["top"],
                        //         props: {
                        //             type: "primary",
                        //         },
                        //     },
                        //     {
                        //         key: "edit",
                        //         label: "编辑",
                        //         icon: "ri-edit-line",
                        //         component: "form",
                        //         // showType: 'modal',  // slideover
                        //         showTypeProps: {
                        //             // title: 'showType的title，空则显示空，无则显示label',
                        //             // width: 200
                        //         },
                        //         // fetchUrl: '',
                        //         // fetchType: '',
                        //         // submitUrl: '123',
                        //         query: ["id"],
                        //         params: { a: 1, b: 2 },
                        //         positions: ["top", "row"],
                        //         disabled: {
                        //             top: { $lte: 0 },
                        //         },
                        //     },
                        //     {
                        //         key: "delete",
                        //         label: "删除",
                        //         icon: "ri-close-circle-line",
                        //         component: "confirm",
                        //         // 这个配置不符合直觉
                        //         confirmProps: {
                        //             // title: "确认删除吗?",
                        //             // message: "删除后无法恢复",
                        //         },
                        //         query: ["id"],
                        //         positions: ["top", "row"],
                        //         disabled: {
                        //             // top 按照选中数量去处理
                        //             top: {
                        //                 $lte: 1,
                        //             },
                        //             // row 按照当前行关键字去处理
                        //             row: {
                        //                 // and
                        //                 id: { $eq: "aaa" },
                        //                 name: { $eq: "22" },
                        //             },
                        //         },
                        //         props: {
                        //             type: "danger",
                        //             plain: true,
                        //         },
                        //     },
                        // ],
                    },
                    {
                        label: "组管理",
                        key: "group",
                        component: "dataTable",
                        // actions: [
                        //     {
                        //         key: "delete",
                        //         label: "删除",
                        //         icon: "ri-close-circle-line",
                        //         component: "form",
                        //         positions: ["row"],
                        //         props: {
                        //             type: "danger",
                        //             plain: true,
                        //         },
                        //     },
                        // ],
                    },
                ],
            },
            {
                label: "aaa",
                key: "aaa",
            },
            {
                label: "测试栏目",
                key: "aaaa",
                children: [
                    {
                        label: "测试栏目1",
                        key: "aaa1",
                        children: [
                            { label: "测试栏目1-1", key: "aaa11" },
                            {
                                label: "测试栏目1-2",
                                key: "aaa12",
                                icon: "ri-user-line",
                            },
                        ],
                    },
                    {
                        label: "测试栏目2",
                        key: "aaa2",
                        children: [
                            { label: "测试栏目2-1", key: "aaa21" },
                            { label: "测试栏目2-2", key: "aaa22" },
                        ],
                    },
                ],
            },
        ],
        topbar: [],
        notice: "",
    });
});
