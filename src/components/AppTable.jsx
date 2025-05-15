// Глобальные импорты
import { Image, Table, Typography } from 'antd'

// Локальные импорты
import { vacationHomes } from '../data.js'

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
        title: 'Number',
        dataIndex: 'number',
        key: 'number',
        filters: [
            {
                text: 'number 201',
                value: '201',
            },
            {
                text: 'number 202',
                value: '202',
            },
            {
                text: 'number 203',
                value: '203',
            },
        ],
        onFilter: (value, item) => item.number.includes(value),
    },
    {
        title: 'Class',
        dataIndex: 'classification',
        key: 'classification',
        render: (text) => <Typography.Text copyable>{text}</Typography.Text>,
    },
    {
        title: 'Image',
        dataIndex: 'image',
        key: 'image',
        render: (image) => <Image src={image} alt={'home'} width={'150px'} />,
    },
]

const dataSourse = vacationHomes.map((home) => ({ ...home, key: home.id }))

export const AppTable = () => {
    return (
        <Table
            dataSource={dataSourse}
            columns={columns}
            pagination={{
                defaultPageSize: '5',
                showSizeChanger: true,
                pageSizeOptions: [2, 5, 10],
            }}
        />
    )
}
