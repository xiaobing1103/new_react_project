import { Card, Col, Row, } from "antd";
import Cproduct from "./Cproduct";
import { CommentsList, CommentsListDetails, tableLists } from "./data";

import style from "./index.module.less";
import Sitems from "./Sitems";


function Comments() {
    return (
        <>
            <div className={style.allMargin}>
                <Card>
                    <div className={style.Comments}>
                        <header className={style.Comments_header}>
                            💬 Comments mentioned
                        </header>
                        <main className={style.Comments_main}>
                            <div className={style.Comments_main_box}>
                                <Sitems CommentsListDetails={CommentsListDetails} CommentsList={CommentsList} />
                                <Cproduct tableLists={tableLists} />
                            </div>
                        </main>
                    </div>
                </Card>
            </div>
        </>
    )
}

export default Comments
