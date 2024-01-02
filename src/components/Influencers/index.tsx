import { Card, Col, Image, Row, Avatar, Button } from "antd";
import style from "./index.module.less";
import { FileImageOutlined, LeftOutlined, PushpinOutlined, RightOutlined } from '@ant-design/icons'
import Carousel, { CarouselRef } from 'antd/es/carousel';
import { useRef } from 'react';
import image from '../../assets/images/44.png'
export default function Influencers() {
    return (
        <div className={style.allMargin}>
            <Card>
                <div className={style.Influencers}>
                    <header className={style.Influencers_header}>
                        🏆 Trending Influencers
                    </header>
                    <main className={style.Influencers_main}>
                        <ImageBox />
                        <ImageBox />
                        <ImageBox />
                        <ImageBox />
                        <ImageBox />

                    </main>
                </div>
            </Card>
        </div>
    );
}

function ImageBox() {
    const carouselRefs = useRef<CarouselRef>(null);

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
                        {

                            <div style={{ position: 'relative' }}>
                                <Button
                                    className={style.btnstyle}
                                    style={{ left: 5 }}
                                    onClick={() => {
                                        carouselRefs?.current?.prev()
                                    }}
                                    icon={<LeftOutlined />}
                                ></Button>
                                <Button
                                    className={style.btnstyle}
                                    style={{ right: 5 }}
                                    onClick={() => {

                                        carouselRefs?.current?.next()
                                    }}
                                    icon={<RightOutlined />}
                                ></Button>
                                <Carousel ref={carouselRefs} dots={false}>
                                    <Image src={image} />
                                    <Image src={image} />
                                    <Image src={image} />
                                </Carousel>
                            </div>
                        }
                    </Col>
                </Row>
            </header>
        </Card>
    </div>

}