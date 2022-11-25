import React from 'react';
import {ImageViewer, Image} from 'tdesign-react';
import {BrowseIcon} from 'tdesign-icons-react'

export default function BasicImageViewer(props) {
    const trigger = ({open}) => {
        const mask = (
            <div
                style={{
                    background: 'rgba(0,0,0,.6)',
                    color: '#fff',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onClick={open}
            >
                <span><BrowseIcon size="16px" name={'browse'}/> 预览</span>
            </div>
        );

        return (
            <Image
                alt={props.title}
                src={props.content}
                overlayContent={mask}
                overlayTrigger="hover"
                fit="cover"
                position="center"
                style={{borderRadius: '10px', overflow: 'hidden'}}
            />
        )
    }

    return (
        <ImageViewer closeBtn={false} closeOnOverlay={true} trigger={trigger} images={[props.content]}/>
    );
}
