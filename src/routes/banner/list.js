import React from 'react'
import {Card,  Button,  Table,  BackTop} from 'antd'
import CustomBreadcrumb from '../../components/CustomBreadcrumb/index'
const data3 = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    }, {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
    }, {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    }, {
        key: '4',
        name: 'Jim Red',
        age: 32,
        address: 'London No. 2 Lake Park',
    },    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    }, {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
    }, {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    }, {
        key: '4',
        name: 'Jim Red',
        age: 32,
        address: 'London No. 2 Lake Park',
    },    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    }, {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
    }, {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    }, {
        key: '4',
        name: 'Jim Red',
        age: 32,
        address: 'London No. 2 Lake Park',
    },    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    }, {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
    }, {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    }, {
        key: '4',
        name: 'Jim Red',
        age: 32,
        address: 'London No. 2 Lake Park',
    }]
class TableDemo extends React.Component {
    state = {
        sortedInfo: null,
    }

    setSort = (type) => {
        this.setState({
            sortedInfo: {
                order: 'descend',
                columnKey: type,
            },
        })
    }

    render() {
        let {sortedInfo} = this.state
        sortedInfo = sortedInfo || {}
        const columns3 = [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                filters: [
                    {text: 'Joe', value: 'Joe'},
                    {text: 'Jim', value: 'Jim'},
                ],
                onFilter: (value, record) => record.name.includes(value),
                sorter: (a, b) => a.name.length - b.name.length,
                sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
            }, {
                title: 'Age',
                dataIndex: 'age',
                key: 'age',
                sorter: (a, b) => a.age - b.age,
                sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
            }, {
                title: 'Address',
                dataIndex: 'address',
                key: 'address',
                filters: [
                    {text: 'London', value: 'London'},
                    {text: 'New York', value: 'New York'},
                ],
                onFilter: (value, record) => record.address.includes(value),
                sorter: (a, b) => a.address.length - b.address.length,
                sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
            }]

        return (
            <div>
                <CustomBreadcrumb arr={['banner', 'list']}/>
                <Card bordered={false} title='排序和筛选' style={{marginBottom: 10, minHeight: 600}} id='filterOrSort'>
                    <p>
                        <Button onClick={() => this.setSort('age')}>年龄排序</Button>&emsp;
                        <Button onClick={() => this.setSort('name')}>人名排序</Button>&emsp;
                        <Button onClick={this.clearFilters}>清空过滤规则</Button>&emsp;
                        <Button onClick={this.clearAll}>重置</Button>
                    </p>
                    <Table dataSource={data3} columns={columns3} style={styles.tableStyle} onChange={this.handleChange}/>
                </Card>

                <BackTop visibilityHeight={200} style={{right: 50}}/>
            </div>
        )
    }
}

const styles = {
    tableStyle: {
        width: '90%'
    },
    affixBox: {
        position: 'absolute',
        top: 100,
        with: 170
    }
}

export default TableDemo
