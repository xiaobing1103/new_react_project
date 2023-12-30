import { Avatar, Col, Row } from "antd";
import style from './index.module.less'
function UserComments() {
    return <main className={style.UserComments}>
        <Row>
            <Col span={1}>
                <Avatar>U</Avatar>
            </Col>
            <Col span={23} >
                <article className={style.UserComments_rightBox}>
                    <span className={style.UserComments_rightBox_span1}>@youtuber261</span>
                    <span className={style.UserComments_rightBox_span2}> 10 months ago</span>
                </article>
                <div className={style.UserComments_content} title="hate the 'Dad Shoe' trend since believe it's more an industry forced trend to make all the shoes we thought were uglyand didn't buy over the past 15 vears suddenly be resellable at high prices.">
                    I'm personally hoping that the chunky / dad style sneakers begin to fade away. They've been around for years now and itsmeant that getting more minimalist, clean looking sneakers, in regular stores, is more of a challenge.\n
                    They may no longer be considered "cool" but l still love my common projects Achilles low. I iust cant justify the insaneprice most of the time.\n
                    Vans Suede. Slip-On Pro's also used to be a great option, being low profile and simple. These davs however thecolourswavs tend to be way too garish and i'd feel like a teenager trying to rock them
                </div>
            </Col>
        </Row>
    </main>
}
export default UserComments