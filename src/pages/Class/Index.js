import React from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {Image, Space} from "tdesign-react";
import data from "../../data.js";
import './index.scss'
import RenderVisitError from "../Error/RenderVisitError";
import Copy from "../Copy/Copy";

export default function Index() {

    const location = useLocation();
    const navigate = useNavigate();

    document.title = location.state?.title || '分类';

    return (
        location.state ? (
            <>
                <div className="content-class">
                    <div className="cla">
                        <div className="divider">
                            <h2>{location.state.title}</h2>
                        </div>
                    </div>
                    <div className="space">
                        <Space className={'pic'} align={'center'} size={'medium'}>
                            {
                                data.map((item, index) => {
                                    if (item.type !== location.state.type)
                                        return null;
                                    return (
                                        <Image
                                            key={index}
                                            src={item.img}
                                            fit="cover"
                                            position="center"
                                            lazy={true}
                                            style={{width: 238, height: 159}}
                                            overlayContent={<div className={'overContent'}>{item.name}</div>}
                                            overlayTrigger="hover"
                                            onClick={() => navigate('/pic', {state: item})}
                                        />
                                    )
                                })
                            }
                        </Space>
                    </div>
                </div>
                <Copy/>
            </>
        ) : <RenderVisitError/>
    );
}
