import React from "react";
import {Button, Image, Space} from "tdesign-react";
import data from "../../data.js";
import {useNavigate} from "react-router-dom";

export default function RenderCity() {

    const navigate = useNavigate();

    return (
        <div className="content">
            <div className="cla">
                <div className="divider">
                    <h2>城市空镜</h2>
                    <div className="tag">
                        <Button theme="default" variant="base" onClick={() => navigate('/class', {
                            state: {
                                title: '城市空镜',
                                type: 1
                            }
                        })}>
                            查看更多
                        </Button>
                    </div>
                </div>
            </div>
            <Space className={'pic'} align={'center'} size={'medium'}>
                {
                    data.map((item, index) => {
                        if (item.type === 1 && item.cover) {
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
                        }else {
                            return null;
                        }
                    })
                }
            </Space>
        </div>
    )
}
