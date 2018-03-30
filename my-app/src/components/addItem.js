import React, { Component } from 'react';
import { Modal, Form, Input } from 'antd';

const FormItem = Form.Item;
class ModalItem extends Component {
    constructor(props) {
        super(props);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleOk = this.handleOk.bind(this);
    }
    handleCancel() {
        this.props.onCancel(false);
    }
    handleChange(type, e) {
        this.props.onChnageContent(type, e.target.value);
    }
    handleOk() {
        this.props.onAddItem();
    }
    render() {
        return (
            <Modal
            visible={this.props.showModal}
            confirmLoading={this.props.confirmLoading}
            onCancel={this.handleCancel}
            onOk={this.handleOk}
            >
                <Form>
                    <FormItem label="姓名">
                        <Input value={this.props.name} placeholder="请输入姓名" onChange={(e)=>this.handleChange('name',e)} />
                    </FormItem>
                    <FormItem label="性别">
                        <Input value={this.props.sex} placeholder="请输入性别" onChange={(e)=>this.handleChange('sex',e)} />
                    </FormItem>
                    <FormItem label="年龄">
                        <Input value={this.props.age} placeholder="请输入年龄" onChange={(e)=>this.handleChange('age',e)} />
                    </FormItem>
                    <FormItem label="职位">
                        <Input value={this.props.work} placeholder="请输入职位" onChange={(e)=>this.handleChange('work',e)} />
                    </FormItem>
                    <FormItem label="地址">
                        <Input value={this.props.address} placeholder="请输入地址" onChange={(e)=>this.handleChange('address',e)} />
                    </FormItem>
                </Form>
            </Modal>
        )
    }
}

export default ModalItem;
