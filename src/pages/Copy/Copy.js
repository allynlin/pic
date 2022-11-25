import React from "react";
import './index.scss'
import {Divider} from "tdesign-react";

export default function Copy() {
    return (
        <div className={'copy'}>
            <div className="more">
                <div className="copy-item"><span>更多信息</span>&nbsp;&nbsp;&nbsp;&nbsp;关于我们 | 我们的宗旨</div>
                <div className="copy-item"><span>常见问题</span>&nbsp;&nbsp;&nbsp;&nbsp;素材版权 | 素材价格与购买方式 |
                    摄影师签约
                </div>
                <div className="copy-item"><span>联系我们</span>&nbsp;&nbsp;&nbsp;&nbsp;意见与建议 | 商务合作</div>
            </div>
            <Divider/>
            <p>Copyright ©2017 - 2022 沪ICP备17045390号-1</p>
        </div>
    );
}
