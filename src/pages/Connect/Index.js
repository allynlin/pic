import React from 'react';
import {Button, Form, Input, MessagePlugin, Space, Textarea} from 'tdesign-react';
import './index.scss';
import Copy from "../Copy/Copy";

const {FormItem} = Form;

export default function Index() {
    const [form] = Form.useForm();

    const onSubmit = e => {
        if (e.validateResult === true) {
            form.reset();
            MessagePlugin.success('提交成功');
        }
    };

    const onReset = () => {
        MessagePlugin.info('重置成功');
    };

    return (
        <>
            <div className={'connect-container'}>
                <div className="banner">
                    <div className="mask">
                        <h1>嗨，我们如何帮助您?</h1>
                    </div>
                </div>
            </div>
            <div className="connect">
                <div className="mask">
                    <Space direction="vertical" className={'connect-form'}>
                        <Form form={form} labelAlign={'top'} labelWidth={200} onSubmit={onSubmit} onReset={onReset}>
                            <FormItem label="姓名" name="name"
                                      rules={[{required: true, message: ''}]}>
                                <Input type={'text'} placeholder="请输入您的姓名"/>
                            </FormItem>
                            <FormItem label="电子邮件" name="email"
                                      rules={[{required: true, message: ''}]}>
                                <Input type={'email'} placeholder="请输入您的电子邮件"/>
                            </FormItem>
                            <FormItem style={{height: '130px'}} label="详细信息" name="content"
                                      rules={[{required: true, message: ''}]}>
                                <Textarea placeholder="请详细描述一下您遇到的问题" autosize={{minRows: 3}}/>
                            </FormItem>
                            <FormItem>
                                <Button theme="primary" type="submit" block>
                                    提交
                                </Button>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <Button theme="default" type="reset" block>
                                    重置
                                </Button>
                            </FormItem>
                        </Form>
                        <p className={'end-text'}>我们将尽最大努力在24工作小时内回复您</p>
                    </Space>
                </div>
            </div>
            <Copy/>
        </>
    );
}
