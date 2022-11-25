import React from "react";
import Copy from "../Copy/Copy";
import './about.scss'
import AboutContent from "./AboutContent";

export default function About() {

    document.title = '关于我们';

    return (
        <>
            <div className={'about-container'}>
                <div className="banner">
                    <div className="mask">
                        <h1>关于我们</h1>
                    </div>
                </div>
            </div>
            <AboutContent/>
            <Copy/>
        </>
    )
}
