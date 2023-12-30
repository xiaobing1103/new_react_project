

import { RightOutlined } from "@ant-design/icons";
import { Card, Col, Popover, Progress, Row } from "antd";
import { useState } from "react";
import { CommentsListDetailsType, CommentsListType } from "../data";
import Details from "./Details";
import style from "./index.module.less";

type PropsType = {
    CommentsList: CommentsListType[]
    CommentsListDetails: CommentsListDetailsType
}

function Sitems(props: PropsType) {
    const [popoverOpen, setPopoverOpen] = useState<{ [key: number]: boolean }>({});
    const [showList, setShowList] = useState<CommentsListDetailsType>([])
    const { CommentsList, CommentsListDetails } = props
    const getDetails = (id: number) => {
        const filteredDetails = CommentsListDetails.filter((item) => item.id === id);
        console.log(filteredDetails)
        if (filteredDetails.length > 0) {
            setShowList(filteredDetails);
            setPopoverOpen({ ...popoverOpen, [id]: true });
        } else {
            hideAllPopovers();
        }
    }

    const hideAllPopovers = () => {
        setPopoverOpen({});
    }

    const handleOpenChange = (id: number, newOpen: boolean) => {
        if (!newOpen) {
            // 直接关闭Popover
            setPopoverOpen({ ...popoverOpen, [id]: false });
        } else {
            // 再次检查是否应该打开Popover
            const filteredDetails = CommentsListDetails.filter((item) => item.id === id);
            if (filteredDetails.length > 0) {
                setPopoverOpen({ ...popoverOpen, [id]: true });
            }
        }
    }

    return (
        < div className={style.SitemsBox}>
            <Row gutter={[16, 16]}>
                {CommentsList.map((items) => {
                    return <Col span={12} key={items.title}>
                        <Card bordered={true} className={style.Sitems}>
                            <header className={style.Sitems_header}>
                                {items.title}
                            </header>
                            <main className={style.Sitems_main}>
                                {items?.lists.map((listsItems) => {
                                    return (
                                        <div key={listsItems.id}>
                                            <Popover
                                                content={popoverOpen[listsItems.id] && <Details showList={showList} />}
                                                trigger="click"
                                                placement="bottomLeft"
                                                open={popoverOpen[listsItems.id]}
                                                onOpenChange={(newOpen) => handleOpenChange(listsItems.id, newOpen)}
                                            >
                                                <div onClick={() => getDetails(listsItems.id)} key={listsItems.id} className={style.Sitems_main_listbox}>
                                                    <Row>
                                                        <Col span={10} className={style.Sitems_main_listbox_lfet}>
                                                            <span>{listsItems.name}</span>
                                                            <RightOutlined style={{ fontSize: 10 }} />
                                                        </Col>
                                                        <Col span={14} className={style.Sitems_main_listbox_right}>
                                                            <Progress percent={listsItems.process} />
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </Popover>
                                        </div>
                                    )
                                })}
                            </main>
                        </Card>
                    </Col>
                })}
            </Row>
        </div >
    )
}

export default Sitems