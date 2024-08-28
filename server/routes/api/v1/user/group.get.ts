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
