import { SearchOutlined } from '@ant-design/icons'
import { Avatar, Card, Col, Input, Row } from 'antd'
import { useState } from 'react'
import style from './index.module.less'
import UserComments from './UserComments'
type PropTypes = {
    tableLists: {
        product: string;
        num: number;
        id: number;
    }[]
}
function Cproduct(props: PropTypes) {
    const { tableLists } = props
    const [slected, setSlected] = useState(1111)
    const ChangeList = (id: number) => {
        setSlected(id)

    }
    return <Card className={style.CproductBox}>
        <header className={style.CproductBox_header}>📦 Comments by product</header>
        <main className={style.CproductBox_main}>
            <Row gutter={[16, 16]}>
                <Col span={5}>
                    <Input placeholder='Search Product' suffix={
                        <SearchOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                    }>
                    </Input>
                    {tableLists.map((items) => {
                        return <div key={items.id} onClick={() => ChangeList(items.id)
                        } className={style.CproductBox_main_box} >
                            <span style={{ color: slected == items.id ? 'rgb(248,34,34)' : 'black' }} className={style.CproductBox_main_box_span1}>{items.product}</span>
                            <span style={{ color: slected == items.id ? 'rgb(248,34,34)' : 'black' }} className={style.CproductBox_main_box_span2}>{items.num}</span>
                            <span style={{ display: slected == items.id ? 'block' : 'none' }} className={style.CproductBox_main_box_span3}></span>
                        </div>
                    })}
                </Col>
                <Col span={19}>
                    <div className={style.CproductBox_main_right}>
                        <article className={style.CproductBox_main_right_header}>
                            <Row>
                                <Col className={style.CproductBox_main_right_header_col1} span={6}> Positive 1</Col>
                                <Col className={style.CproductBox_main_right_header_col2} span={18}> Negative 8</Col>
                            </Row>
                        </article>
                        <div className={style.CproductBox_main_right_contentBox}>
                            <UserComments />
                            <UserComments />
                            <UserComments />
                            <UserComments />
                        </div>
                    </div>
                </Col>
            </Row>
        </main>
    </Card >
}

export default Cproduct