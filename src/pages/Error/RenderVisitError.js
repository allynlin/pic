import React from "react";
import {Button} from "tdesign-react";
import {useNavigate} from "react-router-dom";

export default function RenderVisitError() {

    const navigate = useNavigate();

    return (
        <div style={{
            marginLeft: 16,
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
        }}>请勿直接访问当前页面，这样无法展示数据<Button style={{marginLeft: 10}}
                                                        onClick={() => navigate('/home')}>点击返回首页</Button>
        </div>
    )
}
