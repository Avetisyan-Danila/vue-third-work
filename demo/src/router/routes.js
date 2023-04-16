export default [
    {
        path: "/demo-0",
        name: "demo-0",
        component: () => import("../demo0/DemoCounter.vue"),
    },
    {
        path: "/demo-1",
        name: "demo-1",
        component: () => import("../demo1/DemoCounter.vue"),
    },
    {
        path: "/demo-4",
        name: "demo-4",
        component: () => import("../demo4/DemoCounter.vue"),
    },
    {
        path: "/demo-5",
        name: "demo-5",
        component: () => import("../demo5/Server.vue"),
    },
    {
        path: "/demo-6",
        name: "demo-6",
        component: () => import("../demo6/BouncingBall.vue"),
    },
]
