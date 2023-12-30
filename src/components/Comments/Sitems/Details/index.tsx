import { Avatar, Col, Row } from "antd"
import { CommentsListDetailsType } from "../../data"
import style from './index.module.less'
type PropsType = {
    showList: CommentsListDetailsType
}
function Details(props: PropsType) {
    const { showList } = props

    return (
        <div className={style.DetailsBox}>
            {
                showList.map((items) => {
                    return <div className={style.Details} key={items.id}>
                        <Row>
                            <Col span={2}>
                                <Avatar>{items.Avatar}</Avatar>
                            </Col>
                            <Col span={22}>
                                <div className={style.Details_mainBox}>
                                    <header className={style.Details_mainBox_header}>
                                        <span>{items.name}</span>
                                        <span>{items.min}</span>
                                    </header>
                                    <main className={style.Details_mainBox_main}>
                                        <span>
                                            {items.content}
                                        </span>
                   
                                     </main>
                                </div>
                            </Col>
                        </Row>
                    </div>
                })}
        </div>
    )
}
export default Details