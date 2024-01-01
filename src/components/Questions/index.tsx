import { Card } from "antd";
import Chat from "./Chat";

import style from "./index.module.less";



function Questions() {
    return (
        <>
            <div className={style.allMargin}>
                <Card>
                    <div className={style.Questions}>
                        <header className={style.Questions_header}>
                            ❓ Follow-up questions
                        </header>
                        <main className={style.Questions_main}>
                            <div className={style.Questions_main_box}>
                                <Chat />
                            </div>
                        </main>
                    </div>
                </Card>
            </div>
        </>
    )
}   

export default Questions
