import React from "react";
import {Loading} from "tdesign-react";
import './index.scss';

export default function RenderLoading() {
    return (
        <div className="load">
            <Loading loading={true} text="加载中"/>
        </div>
    )
}
