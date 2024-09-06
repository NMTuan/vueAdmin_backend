/*
 * @Author: nmtuan nmtuan@qq.com
 * @Date: 2024-08-27 20:37:59
 * @LastEditors: nmtuan nmtuan@qq.com
 * @LastEditTime: 2024-09-05 15:01:31
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
                sex: "1",
                email: "henurdi@nucma.org",
                city: "Mejzupaj",
                cid: "1",
                country: "New Caledonia",
                createAt: "2022-12-12",
            },
            {
                id: "bbb",
                name: "22",
                sex: "2",
                email: "henurdi@nucma.org",
                city: "Mejzupaj",
                cid: "1",
                country: "New Caledonia",
                createAt: "2022-12-12",
            },
        ],
        columns: [
            { key: "selection", label: "", component: "selection" },
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
            { key: "city", label: "城市" },
            { key: "cid", label: "城市编号" },
            { key: "country", label: "国家" },
            {
                key: "actions",
                label: "操作",
                component: "actions",
                props: {
                    width: 200,
                },
            },
        ],
        actions: [
            {
                key: "create",
                label: "创建",
                icon: "ri-add-circle-line",
                showType: 'slideover',
                component: "form",
                positions: ["top"],
                props: {
                    type: "primary",
                },
            },
            {
                key: "edit",
                label: "编辑",
                icon: "ri-edit-line",
                component: "form",
                // showType: 'modal',  // slideover
                showTypeProps: {
                    // title: 'showType的title，空则显示空，无则显示label',
                    // width: 200
                },
                // fetchUrl: '',
                // fetchType: '',
                // submitUrl: '123',
                query: ["id"],
                params: { a: 1, b: 2 },
                positions: ["top", "row"],
                disabled: {
                    top: { $lte: 0 },
                },
            },
            {
                key: "delete",
                label: "删除",
                icon: "ri-close-circle-line",
                component: "confirm",
                // 这个配置不符合直觉
                confirmProps: {
                    // title: "确认删除吗?",
                    // message: "删除后无法恢复",
                },
                query: ["id"],
                positions: ["top", "row"],
                disabled: {
                    // top 按照选中数量去处理
                    top: {
                        $lte: 1,
                    },
                    // row 按照当前行关键字去处理
                    row: {
                        // and
                        id: { $eq: "aaa" },
                        name: { $eq: "22" },
                    },
                },
                props: {
                    type: "danger",
                    plain: true,
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
