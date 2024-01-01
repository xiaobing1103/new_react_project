import { UserOutlined, VideoCameraOutlined } from '@ant-design/icons'
import { Avatar, Button, Input, Space } from 'antd'
import { useState } from 'react'
import style from './index.module.less'
function Chat() {
    const [value, setValue] = useState('')
    return <div className={style.Chat}>
        <div className={style.Chat_msg}>
            <div className={style.Chat_msg_myMessage}>
                <div className={style.Chat_msg_myMessage_avatarBox}>
                    <Avatar className={style.Chat_msg_myMessage_avatarBox_avatar} icon={<VideoCameraOutlined />} />
                </div>
                <div className={style.Chat_msg_myMessage_content}>
                    Hi, I'm the AI that watched the videos you selected and prepared
                    this report for you. Feel free to ask me anything about this report
                    or the videos I processed!
                </div>

            </div>
            <div className={style.Chat_msg_userMessage}>
                <div className={style.Chat_msg_userMessage_avatarBox}>
                    <Avatar className={style.Chat_msg_userMessage_avatarBox_avatar} icon={<UserOutlined />} />
                </div>
                <div className={style.Chat_msg_userMessage_content}>
                    List the ones that are good for elderly people
                </div>

            </div>

            <div className={style.Chat_msg_myMessage}>
                <div className={style.Chat_msg_myMessage_avatarBox}>
                    <Avatar className={style.Chat_msg_myMessage_avatarBox_avatar} icon={<VideoCameraOutlined />} />
                </div>
                <div className={style.Chat_msg_myMessage_content}>
                    Here are the sneaker options that are mentioned to be good for elderly people:
                    New Balance 373 - These have enhanced midsoles for cushioning and stability. The hook-and-loop closures also make them easy to put on/take off.
                    or the videos I processed!

                    Asics Gel-Venture 6 - Gel cushioning reduces impact while the rear stabilizers provide support. Lightweight memory foam makes them comfortable all day.


                    Saucony Cohesion 12 - Cushioned midsoles dampen impact from heels to toes. The hard carbon rubber outsoles are slip-resistant.
                </div>

            </div>  
        </div>

        <div className={style.ChatInput}>
            <Space.Compact style={{ width: '100%' }}>
                <Input
                    className={style.ChatInput_box}
                    value={value}
                    onChange={(e) => { setValue(e.target.value) }}
                    placeholder="Basic usage"

                />
                <Button type="primary">send</Button>
            </Space.Compact>

        </div>
    </div>
}
export default Chat