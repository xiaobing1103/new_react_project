
import { DataTypeOne, DataTypeTwo } from "../data";
import style from "./index.module.less";
import { Carousel, Image, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useRef } from "react";
import { CarouselRef } from "antd/es/carousel";
import * as React from "react";
type ProductsItemsProps = {
    mockdata: (DataTypeOne | DataTypeTwo)[]
}
function ProductsItems(props: ProductsItemsProps) {
    const { mockdata } = props
    // const [carouselRefs, setCarouselRefs] = useState<{ [key: string]: React.RefObject<CarouselRef> }>({});
    // 为每个Carousel创建一个独立的ref
    // 初始化一个空的Map对象来存储每个Carousel的引用
    const carouselRefs = useRef<Map<string, React.RefObject<CarouselRef>>>(new Map());
    return (
        <div className={style.Productstable}>
            <div className={style.Productstable_items}>
                {mockdata.map((items) => {
                    if (!carouselRefs.current.has(items.key)) {
                        carouselRefs.current.set(items.key, React.createRef());
                    }
                    const currentRef = carouselRefs.current.get(items.key);

                    return <div key={items.key} className={style.Productstable_items_box}>
                        {<div style={{ fontSize: items.fontSize, fontWeight: items.fontWight }} className={style.Productstable_items_box_name}>{items.name}</div>}
                        {items.image ?
                            <div style={{ position: 'relative' }}>
                                {items.imagesdesc && <span className={style.imagesdesc}>{items.imagesdesc}</span>}
                                <Button
                                    className={style.btnstyle}
                                    style={{ left: 10 }}
                                    onClick={() => {
                                        currentRef?.current?.prev()
                                    }}
                                    icon={<LeftOutlined />}
                                ></Button>
                                <Button
                                    className={style.btnstyle}
                                    style={{ right: 10 }}
                                    onClick={() => {
                                        currentRef?.current?.next()
                                    }}
                                    icon={<RightOutlined />}
                                ></Button>
                                <Carousel ref={currentRef} dots={false}>
                                    <Image className={style.Productstable_items_box_image} width={200} height={125} src={items.image} />
                                    <Image className={style.Productstable_items_box_image} width={200} height={125} src={items.image} />
                                    <Image className={style.Productstable_items_box_image} width={200} height={125} src={items.image} />
                                </Carousel>
                            </div>
                            : <div className={style.Productstable_items_box_image} />}
                        <div style={{ fontSize: items.fontSize, fontWeight: items.fontWight }} title={items.Price} className={style.Productstable_items_box_Price}> {items.Price}</div>
                        <div style={{ fontSize: items.fontSize, fontWeight: items.fontWight }} title={items.Features} className={style.Productstable_items_box_Features}> {items.Features}</div>
                        <div style={{ fontSize: items.fontSize, fontWeight: items.fontWight }} title={items.Performance} className={style.Productstable_items_box_Performance}> {items.Performance}</div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default ProductsItems
