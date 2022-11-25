import './Index.scss';
import React, {Fragment, useEffect, useState} from 'react';
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {Menu} from 'tdesign-react';
import logo from '../../assets/react.svg';
import Login from "./Login.js";

const {HeadMenu, SubMenu, MenuItem} = Menu;

export default function Index() {

    const [active, setActive] = useState('');

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        setActive(location.pathname.slice(1));
    }, [location])

    return (
        <>
            <Fragment>
                <HeadMenu
                    theme="dark"
                    value={active}
                    expandType="popup"
                    onChange={(v) => setActive(v)}
                    logo={<img src={logo} width="50" alt="logo" style={{marginLeft: 16}}/>}
                    operations={<Login/>}
                >
                    <MenuItem value={'home'} onClick={() => navigate('/home')}>
                        <span>首页</span>
                    </MenuItem>
                    <SubMenu value="class" title="分类">
                        <MenuItem value="city"
                                  onClick={() => navigate('/class', {
                                      state: {
                                          title: '城市空镜',
                                          type: 1
                                      }
                                  })}><span>城市空镜</span></MenuItem>
                        <MenuItem value="animal"
                                  onClick={() => navigate('/class', {
                                      state: {
                                          title: '动物百态',
                                          type: 2
                                      }
                                  })}><span>动物百态</span></MenuItem>
                    </SubMenu>
                    <MenuItem value={'about'} onClick={() => navigate('/about')}>
                        <span>关于我们</span>
                    </MenuItem>
                    <MenuItem value={'connect'} onClick={() => navigate('/connect')}>
                        <span>联系我们</span>
                    </MenuItem>
                </HeadMenu>
            </Fragment>
            <Outlet/>
        </>
    );
}
