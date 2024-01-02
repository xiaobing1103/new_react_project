
import { CommentsList, CommentsListDetails, tableLists } from "./data";
import { RightOutlined, SearchOutlined } from "@ant-design/icons";
import { Card, Col, Popover, Progress, Row, Avatar, Input } from "antd";
import { useState } from "react";
import { CommentsListDetailsType, CommentsListType } from "./data";
import style from "./index.module.less";


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
    const conicColors = { '0%': '#87d068', '50%': '#ffe58f', '100%': '#ffccc7' };

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
                                                            <Progress strokeColor={conicColors} percent={listsItems.process} />
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
type DetailsPropsType = {
    showList: CommentsListDetailsType
}
function Details(props: DetailsPropsType) {
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

export default Comments
