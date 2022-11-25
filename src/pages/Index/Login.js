import React, {useState} from 'react';
import {Dialog, Button, Form, Input} from 'tdesign-react';
import {DesktopIcon, LockOnIcon} from 'tdesign-icons-react';

const {FormItem} = Form;

export default function BasicUsage() {
    const [visible, setVisible] = useState(false);
    const handleClick = () => {
        setVisible(true);
    };
    const onConfirm = () => {
        setVisible(false);
    };
    const onCancel = () => {
        setVisible(false);
    };
    const onClickCloseBtn = () => {
        setVisible(false);
    };
    const onKeydownEsc = () => {
        setVisible(false);
    };
    const handleClose = () => {
        setVisible(false);
    };
    return (
        <>
            <Button theme="default" style={{color: '#ffffff'}} size={'large'} onClick={handleClick}>
                登录
            </Button>
            <Dialog
                header="用户登录"
                visible={visible}
                confirmOnEnter
                onClose={handleClose}
                onConfirm={onConfirm}
                onCancel={onCancel}
                onEscKeydown={onKeydownEsc}
                onCloseBtnClick={onClickCloseBtn}
                cancelBtn={null}
                confirmBtn={null}
            >
                <div style={{width: '100%', marginTop: 16}}>
                    <Form statusIcon={true} colon={true} labelWidth={0}>
                        <FormItem name="account">
                            <Input clearable={true} prefixIcon={<DesktopIcon/>} placeholder="请输入账户名"/>
                        </FormItem>
                        <FormItem name="password">
                            <Input type="password" prefixIcon={<LockOnIcon/>} clearable={true}
                                   placeholder="请输入密码"/>
                        </FormItem>
                        <FormItem>
                            <Button theme="primary" type="submit" block onClick={() => setVisible(false)}>
                                登录
                            </Button>
                        </FormItem>
                    </Form>
                </div>
            </Dialog>
        </>
    );
}
