import { Layout } from 'antd'

const siderStyle = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#1677ff',
}

export const AppSider = () => {
    return (
        <Layout.Sider style={siderStyle}>Sider</Layout.Sider>
    )
}