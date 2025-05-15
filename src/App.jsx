// Глобальные импорты
import { Col, Row } from 'antd'

// Локальные импорты

import './App.css'
import { AppTable } from './components/AppTable'


function App() {
    return (
        <Row>
            <Col xs={24} md={{ span: 12, offset: 6 }}>
                <AppTable />
            </Col>
        </Row>
    )
}

export default App
