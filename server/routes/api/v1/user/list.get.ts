const item = {
    id: "aaa",
    name: "Beatrice Gomez",
    email: "henurdi@nucma.org",
    city: "Mejzupaj",
    cid: "1",
    country: "New Caledonia",
    createAt: "2022-12-12",
};
export default defineAuthEventHandler(async (event) => {
    return rs({
        // rows: new Array(10).fill(item),
        rows: [
            item,
            {
                id: "bbb",
                name: "Beatrice Gomez",
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
                // showType: 'modal',
                path: "/user/user/view",
                query: ["id"],
            },
            { key: "name", label: "姓名" },
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
        search: [],
        advSearch: [],
        filters: [],
        total: 55,
    });
});
