import React, {Suspense} from 'react'
import './App.scss'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import RenderLoading from "./pages/Loading/RenderLoading.js";
import {routerItems} from "./Router/routers.js";
import 'tdesign-react/es/style/index.css';

const PageView = () => {

    document.documentElement.setAttribute('theme-mode', 'dark');

    // 递归函数
    const rotuerViews = (routerItems) => {
        if (routerItems && routerItems.length) {
            return routerItems.map(({path, Component, children, redirect}) => {
                return children && children.length ? (
                    <Route path={path} key={path}
                           element={<Suspense fallback={<RenderLoading/>}><Component/></Suspense>}>
                        {rotuerViews(children)}
                        {redirect ?
                            (<Route path={path} element={<Navigate to={redirect}/>}></Route>) :
                            (<Route path={path} element={<Navigate to={children[0].path}/>}></Route>)
                        }
                    </Route>
                ) : (
                    <Route key={path} path={path}
                           element={<Suspense fallback={<RenderLoading/>}><Component/></Suspense>}>
                    </Route>
                )
            })
        }
    }


    return (
        <BrowserRouter basename={'/bysj'}>
            <Routes>
                {rotuerViews(routerItems)}
            </Routes>
        </BrowserRouter>
    )
}
export default PageView;
