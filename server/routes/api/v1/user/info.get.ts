export default defineAuthEventHandler(() => {
    return rs({
        menu: [
            {
                label: "首页",
                key: "index",
                icon: "i-ri-home-line",
            },
            {
                label: "用户管理",
                key: "user",
                icon: "i-ri-user-line",
                children: [
                    {
                        label: "用户列表",
                        key: "list",
                        component: "dataTable",
                        actions: [
                            {
                                key: "create",
                                label: "创建",
                                icon: "i-ri-add-line",
                                component: "form",
                                positions: ["top"],
                            },
                        ],
                    },
                    {
                        label: "组管理",
                        key: "group",
                    },
                ],
            },
            { label: '测试栏目', value: "cc" },
        ],
        topbar: [],
        notice: "",
    });
});
