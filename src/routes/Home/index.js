import React from 'react'
import {Table} from 'antd'

const data = [];
for (let i = 0; i < 46; i++) {
    data.push({
        id:i,
        key: i,
        nickName: '李大嘴' + i,
        tokaCode: 3289,
        phone: '13986836157',
        createTIme: "2017-09-12"
    });
}

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            data: data,
            current: 1,
            total: data.length

        }
    }

    render() {
        const self =this;
        return <Table columns={[{
                                title: 'tokaCode',
                                dataIndex: 'tokaCode',
                            }, {
                                title: 'nickName',
                                dataIndex: 'nickName'
                            }, {
                                title: '手机号',
                                dataIndex: 'phone'
                            }, {
                                title: '注册时间',
                                dataIndex: 'createTIme'
                            }, {
                                title: '操作',
                                dataIndex: '',
                                render: function (text, record) {
                                    return (
                                        <span>
                                            <a onClick={self.detail.bind(self,record)} href="javascript:;">详情</a>
                                        </span>
                                    );
                                }
                            }]}
                      dataSource={this.state.data}
                      pagination={{
                          current: this.state.current,
                          total: this.state.total,
                          onChange: this.changePage.bind(this)
                      }}
        />
    }

    changePage(page) {
        this.setState({current: page});
    }
    detail(item) {
        //alert(JSON.stringify(item))
       // alert(JSON.stringify(this.props))
        this.props.history.push({pathname:'/home/user/detail/',state:{id:item.id}});
    }


}


export default Home
