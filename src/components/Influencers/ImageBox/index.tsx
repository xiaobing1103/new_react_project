import { FileImageOutlined, PushpinOutlined } from '@ant-design/icons'
import { Avatar, Col, Row, Image, Card } from 'antd'
import image from '../../../assets/images/44.png'
import style from './index.module.less'

function ImageBox() {

    return <div className={style.ImageBox}>
        <Card>
            <header className={style.ImageBox_header}>
                <Row gutter={[16, 16]}>
                    <Col span={6}>
                        <Avatar>U</Avatar>
                    </Col>
                    <Col span={14} >
                        <div className={style.ImageBox_header_col2}>
                            <span>@evans_ducan</span>
                            <span><PushpinOutlined />United States</span>
                        </div>
                    </Col>
                    <Col span={4}>
                        <FileImageOutlined />
                    </Col>

                </Row>
                <Row>
                    <Col span={12} style={{ textAlign: 'center' }}>
                        34k 1Followers
                    </Col>
                    <Col span={12} style={{ textAlign: 'center' }}>
                        4.6% Engagement
                    </Col>
                </Row>
                <Row style={{ margin: '10px 0' }}>
                    <Col span={24}>
                        <Image src={image} />
                    </Col>
                </Row>
            </header>
        </Card>
    </div>

}
export default ImageBox