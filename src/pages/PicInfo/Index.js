import React, {useEffect} from "react";
import './index.scss';
import {useLocation, useNavigate} from "react-router-dom";
import data from "../../data.js";
import RenderVisitError from "../Error/RenderVisitError";
import {Button, Card, Tag, Space, Image} from "tdesign-react";
import BasicImageViewer from "./ShowPic";
import Copy from "../Copy/Copy";

export default function PicInfo() {

    const location = useLocation();
    const navigate = useNavigate();

    document.title = location.state?.name + ' - 图片详情' || '图片详情';

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location])

    return (
        location.state ? (
            <>
                <div className="pic-info">
                    <Card
                        className={'pic-show'}
                        bordered
                        theme="normal"
                        hoverShadow={true}
                        cover={<BasicImageViewer title={location.state.name} content={location.state.img}/>}
                    />
                    <div className="pic-message">
                        <h2>{location.state.name}</h2>
                        <p style={{marginTop: 32, fontWeight: 'bold'}}>基本信息</p>
                        <p style={{marginTop: 10}}>素材编号：{location.state.id}</p>
                        <Space align={'center'} size={'small'}>
                            <span>素材用途：</span>{location.state.use.map((item, index) => {
                            return (
                                <Tag style={{marginLeft: '-5px', color: '#ffffff'}} key={index} theme="default"
                                     variant="base">{item}</Tag>
                            )
                        })}
                        </Space>
                        <p>图片大小：{location.state.size}</p>
                        <p>构图：{location.state.pic}</p>
                        <p style={{marginTop: 16}}>其他说明：{location.state.info}</p>
                        <div style={{
                            marginTop: 32,
                            display: "flex",
                            alignItems: "center"
                        }}>关键词：{location.state.key.map((item, index) => {
                            return (
                                <Tag style={{marginLeft: 6}} key={index} theme="primary" variant="base">{item}</Tag>
                            )
                        })}</div>
                        <div className="action">
                            <Button theme="success" variant="base">
                                <a href={location.state.img} download={true}>下载图片</a>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="pic-tj">
                    <div className="tj-content">
                        <div className="cla">
                            <div className="divider">
                                <h2>相似推荐</h2>
                            </div>
                        </div>
                        <Space className={'tj-card'} align={'center'} size={'medium'} style={{marginBottom: 20}}>
                            {
                                data.map((item, index) => {
                                    if (item.type === location.state.type && item.id !== location.state.id) {
                                        return (
                                            <Image
                                                key={index}
                                                src={item.img}
                                                fit="cover"
                                                position="center"
                                                lazy={true}
                                                style={{width: 220, height: 146.66}}
                                                overlayContent={<div className={'overContent'}>{item.name}</div>}
                                                overlayTrigger="hover"
                                                onClick={() => navigate('/pic', {state: item})}
                                            />
                                        )
                                    } else {
                                        return null;
                                    }
                                })
                            }
                        </Space>
                    </div>
                </div>
                <Copy/>
            </>
        ) : <RenderVisitError/>
    )
}
