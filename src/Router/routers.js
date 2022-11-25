import {lazy} from "react";

export const routerItems = [
    {
        path: '/',
        Component: lazy(() => import('../pages/Index/Index')),
        redirect: '/home',
        children: [
            {
                path: '/home',
                Component: lazy(() => import('../pages/Home/Index')),
            }, {
                path: '/class',
                Component: lazy(() => import('../pages/Class/Index')),
            }, {
                path: '/pic',
                Component: lazy(() => import('../pages/PicInfo/Index')),
            }, {
                path: '/about',
                Component: lazy(() => import('../pages/About/About')),
            }, {
                path: '/connect',
                Component: lazy(() => import('../pages/Connect/Index')),
            }, {
                path: '*',
                Component: lazy(() => import('../pages/Error/NotFound.js')),
            }
        ]
    }, {
        path: '/loading',
        Component: lazy(() => import('../pages/Loading/RenderLoading.js')),
    }
]
