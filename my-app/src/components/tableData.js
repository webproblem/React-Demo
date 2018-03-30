export const columns = [
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
        render: function(text, record) {
            return (
                <span>
                    <Button type="primary">编辑</Button>
                    <Button type="danger">删除</Button>
                </span>
            )
        }
    }
];
