import React from "react";
import './index.scss'
import {Image, Input, InputAdornment, Swiper} from "tdesign-react";
import {SearchIcon} from 'tdesign-icons-react';
import swiper1 from '../../assets/Swiper/swiper-1.jpg';
import swiper2 from '../../assets/Swiper/swiper-2.jpg';
import swiper3 from '../../assets/Swiper/swiper-3.jpg';
import RenderCity from "./RenderCity";
import RenderAnimal from "./RenderAnimal";
import Copy from "../Copy/Copy";

const {SwiperItem} = Swiper;

export default function Home() {

    document.title = '8k8k图像网';

    return (
        <>
            <div className={'container'}>
                <div className="banner">
                    <div className="mask">
                        <div className="title">
                            <div className="title-text">
                                <h1>8k8k图像网</h1>
                                <p>每一帧都是严选，每一张都是高清</p>
                            </div>
                            <div className="input">
                                <InputAdornment prepend={<SearchIcon/>} style={{height: '50px'}}>
                                    <Input
                                        placeholder="搜索图片素材"
                                        size="large"
                                    />
                                </InputAdornment>
                            </div>
                            <div className="footer">
                                <p>当前搜索：城市 星空 8k 自然 眼界</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={'swiper'}>
                    <Swiper
                        animation="slide"
                        autoplay
                        defaultCurrent={0}
                        direction="horizontal"
                        duration={300}
                        interval={2000}
                        loop
                        stopOnHover
                        theme="dark"
                        trigger="hover"
                        type="default"
                        navigation={{size: 'large'}}
                    >
                        <SwiperItem>
                            <Image src={swiper1} fit="cover" position="center" style={{height: 300}}/>
                        </SwiperItem>
                        <SwiperItem>
                            <Image src={swiper2} fit="cover" position="center" style={{height: 300}}/>
                        </SwiperItem>
                        <SwiperItem>
                            <Image src={swiper3} fit="cover" position="center" style={{height: 300}}/>
                        </SwiperItem>
                    </Swiper>
                </div>
                <RenderCity/>
                <RenderAnimal/>
            </div>
            <Copy/>
        </>
    )
}
