export default defineEventHandler(() => {
    return {
        code: 200,
        message: "",
        data: {
            id: 123,
            name: "admin",
            menu: [
                {
                    label: "首页",
                    key: "index",
                    icon: "i-ri-home-line",
                    children: [
                        { key: "aa1" },
                        { key: "aa2" },
                        { key: "aa3" },
                    ],
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
                                    key: 'create',
                                    label: '创建',
                                    icon: 'i-ri-add-line',
                                    component: 'form',
                                    positions: ['top']
                                }
                            ]
                        },
                        {
                            label: "组管理",
                            key: "group",
                        },
                    ],
                },
                { value: "cc" },
            ],
            topbar: [],
            notice: "",
        },
    };
});
