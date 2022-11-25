import React, {useState, useEffect} from "react";
import {Progress, Space} from "tdesign-react";
import './notFound.scss'
import {useNavigate} from "react-router-dom";

export default function NotFound() {

    const [percent, setPercent] = useState(0);

    const navigate = useNavigate();

    useEffect(() => {
        const time = setTimeout(() => {
            setPercent(percent + 1);
        }, 50)
        if (percent === 100) {
            clearTimeout(time);
            navigate('/home');
        }
        return () => {
            clearTimeout(time);
        }
    }, [percent])

    return (
        <div className="error">
            <div style={{color:'#ffffff'}}>页面丢失，即将返回首页</div>
            <Space style={{marginTop: 16}} direction="vertical">
                <Progress theme={'circle'} percentage={percent} strokeWidth={50}></Progress>
            </Space>
        </div>
    )
}
