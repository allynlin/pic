import React from 'react';
import {Tabs} from 'tdesign-react';

const {TabPanel} = Tabs;

export default function AboutContent() {
    return (
        <Tabs placement={'top'} size={'medium'} defaultValue={'1'}>
            <TabPanel value="1" label="关于我们">
                <div className="tabs-content" style={{margin: 20}}>
                    <p>8KRAW，是一个有着海量正版高质量影像素材的网站，是一个有着600余名签约摄影师的摄影师组织，也是一个致力于分享高质量影像作品和促进摄影师交流沟通的平台。网站陈列的海量优质素材均来自数百名分布在全国乃至世界各地的摄影师，素材类型多样，素材清晰度可达16K。摄影师们通过网站销售素材，为自己赢得尊重；网站为全球的客户提供多样化、高品质的影像素材选购，解决素材需求。</p>
                    <p>8KRAW，是一个有着海量正版高质量影像素材的网站，是一个有着600余名签约摄影师的摄影师组织，也是一个致力于分享高质量影像作品和促进摄影师交流沟通的平台。网站陈列的海量优质素材均来自数百名分布在全国乃至世界各地的摄影师，素材类型多样，素材清晰度可达16K。摄影师们通过网站销售素材，为自己赢得尊重；网站为全球的客户提供多样化、高品质的影像素材选购，解决素材需求。</p>
                    <p>8KRAW，是一个有着海量正版高质量影像素材的网站，是一个有着600余名签约摄影师的摄影师组织，也是一个致力于分享高质量影像作品和促进摄影师交流沟通的平台。网站陈列的海量优质素材均来自数百名分布在全国乃至世界各地的摄影师，素材类型多样，素材清晰度可达16K。摄影师们通过网站销售素材，为自己赢得尊重；网站为全球的客户提供多样化、高品质的影像素材选购，解决素材需求。</p>
                    <p>8KRAW，是一个有着海量正版高质量影像素材的网站，是一个有着600余名签约摄影师的摄影师组织，也是一个致力于分享高质量影像作品和促进摄影师交流沟通的平台。网站陈列的海量优质素材均来自数百名分布在全国乃至世界各地的摄影师，素材类型多样，素材清晰度可达16K。摄影师们通过网站销售素材，为自己赢得尊重；网站为全球的客户提供多样化、高品质的影像素材选购，解决素材需求。</p>
                </div>
            </TabPanel>
            <TabPanel value="2" label="团队介绍">
                <div className="tabs-content" style={{margin: 20}}>
                    <p>8KRAW由摄影师王源宗及陈雅（LingChen）于2018年1月13日创立，截至2020年1月，已汇聚600余位分布在国内外的优秀摄影师及制作人，且团队成员数量还在持续增加。团队摄影师每年拍摄的各类素材累积可达36,000TB，发布视频作品超200部，与人民日报、新华社、华为、奥迪、荣耀、JEEP、VIVO、索尼等均有过合作，也为纪录片、影视剧、综艺节目、城市宣传片等提供优质素材及高水准的拍摄服务，是一个有着持续创作力和素材拍摄能力的团队。2020年，团队在全网影响力上千万，作品传播量上亿。</p>
                </div>
            </TabPanel>
            <TabPanel value="3" label="我们的宗旨">
                <div className="tabs-content" style={{margin: 20}}>
                    <p>“让每位摄影师的拍摄都不被浪费”，了解摄影师的创作经历和需求，推广优秀摄影作品，构建良好的摄影师交流平台，促进国内版权环境的改善。</p>
                </div>
            </TabPanel>
            <TabPanel value="4" label="媒体">
                <div className="tabs-content" style={{margin: 20}}>
                    <p>微信 / 微博 / 新片场 / 开眼</p>
                    <p>哔哩哔哩 / 天空之城</p>
                    <p>YouTube / Instagram</p>
                    <p>Email aa@8kraw.com</p>
                </div>
            </TabPanel>
        </Tabs>
    );
}
