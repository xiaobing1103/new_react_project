import { UserOutlined } from '@ant-design/icons'
import { Avatar, Button, Input, Space } from 'antd'
import { useState } from 'react'
import style from './index.module.less'
function Chat() {
    const [value, setValue] = useState('')
    return <div className={style.Chat}>
        <div className={style.Chat_msg}>
            <div className={style.Chat_msg_myMessage}>
                <div className={style.Chat_msg_myMessage_avatarBox}>
                    <Avatar className={style.Chat_msg_myMessage_avatarBox_avatar} icon={<UserOutlined />} />
                </div>
                <div className={style.Chat_msg_myMessage_content}>
                    Hi, I'm the AI that watched the videos you selected and prepared
                    this report for you. Feel free to ask me anything about this report
                    or the videos I processed!
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