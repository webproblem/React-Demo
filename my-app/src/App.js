import React, { Component } from 'react';
import { Button, Table, Modal, Form, Input, Popconfirm, message } from 'antd';
import './App.css';
import Version from './components/version.js';
// import { columns } from './components/tableData.js';
import ModalItem from './components/addItem.js'

const FormItem = Form.Item;
class App extends Component {
  constructor(props) {
      super(props);
      this.columns = [
          {
              title: '姓名',
              dataIndex: 'name'
          },
          {
              title: '性别',
              dataIndex: 'sex'
          },
          {
              title: '年龄',
              dataIndex: 'age'
          },
          {
              title: '职位',
              dataIndex: 'work'
          },
          {
              title: '地址',
              dataIndex: 'address'
          },
          {
              title: '操作',
              dataIndex: 'action',
              className: 'v-button-group',
              width: 200,
              render: (text, record, index) => this.renderColumns(index)
          }
      ];
      this.state = {
          showModal: false,
          confirmLoading: false,
          name: '',
          sex: '',
          age: '',
          work: '',
          address: '',
          dataSource: [
              {
                  key: '1',
                  name: '佟湘玉',
                  sex: '女',
                  age: 28,
                  work: '客栈老板娘',
                  address: '七侠镇同福客栈'
              }
          ]
      }
      this.addItem = this.addItem.bind(this);
      this.handleCancel = this.handleCancel.bind(this);
      this.handleAddItem = this.handleAddItem.bind(this);
      this.handleChange = this.handleChange.bind(this);
  }
  addItem() {
      this.setState({
          name: '',
          sex: '',
          age: '',
          work: '',
          address: '',
          showModal: true
      })
  }
  handleCancel(status) {
      this.setState({
          showModal: status
      })
  }
  handleAddItem() {
      let dataSource = this.state.dataSource;
      dataSource.push({
          key: dataSource.length + 1,
          name: this.state.name,
          sex: this.state.sex,
          age: this.state.age,
          work: this.state.work,
          address: this.state.address
      })
      this.setState({
          confirmLoading: true
      })
      setTimeout(() => {
          this.setState({
              showModal: false,
              confirmLoading: false,
              dataSource
          })
      }, 2000)
  }
  handleChange(type , value) {
      this.setState({
          [type]: value
      })
  }
  renderColumns(index) {
      return (
          <span>
              <Button type="primary">编辑</Button>
              <Popconfirm title="确定删除该条数据吗？" onConfirm={(e) => this.handleDalete(index, e)}>
                  <Button type="danger">删除</Button>
              </Popconfirm>
          </span>
      )
  }
  handleDalete(index ,e) {
      let dataSource = this.state.dataSource;
      dataSource.splice(index, 1);
      this.setState({
          dataSource
      })
      message.success('删除成功');
  }
  render() {
      const showModal = this.state.showModal;
      const confirmLoading = this.state.confirmLoading;
      const data = {
          name: this.state.name,
          sex: this.state.sex,
          age: this.state.age,
          work: this.state.work,
          address: this.state.address
      };
    return (
      <div className="App">
        <div>{this.state.test}</div>
        <Version />
        <Button type="primary" className="add-btn" onClick={this.addItem}>新增</Button>
        <Table bordered dataSource={this.state.dataSource} columns={this.columns} />
        <ModalItem
        showModal={showModal}
        confirmLoading={confirmLoading}
        name={data.name}
        sex={data.sex}
        age={data.age}
        work={data.work}
        address={data.address}
        onAddItem={this.handleAddItem}
        onCancel={this.handleCancel}
        onChnageContent={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
