import { ShareAltOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import style from './index.module.less'
function Scanning() {

    return (
        <>
            <div className={style.Scanning}>
                <div className={style.Scanning_leftBox}>
                    <div className={style.Scanning_leftBox_top}>Video scanning result for product: <span className={style.Scanning_leftBox_top_span}>sneakers</span></div>
                    <div className={style.Scanning_leftBox_bottom}>Past month from Dec 1, 2023</div>
                </div>
                <div className={style.Scanning_rightBox}>
                    <Button type="primary" className='button_style'><ShareAltOutlined />Share</Button>
                </div>

            </div>
        </>
    )
}

export default Scanning
