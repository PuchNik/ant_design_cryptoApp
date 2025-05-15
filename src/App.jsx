// Глобальные импорты
import { Layout } from 'antd'
// Локальные импорты
import './App.css'
import {
    AppHeader,
    AppSider,
    AppContent,
    AppFooter,
} from './components/layout/index.js'

function App() {
    return (
        <Layout>
            <AppHeader />
            <Layout>
                <AppSider />
                <AppContent />
            </Layout>
            <AppFooter />
        </Layout>
    )
}

export default App
