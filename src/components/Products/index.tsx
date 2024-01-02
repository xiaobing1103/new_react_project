import { Card, Radio, RadioChangeEvent, Tabs, } from "antd";
import { useState } from "react";
import { mockdata } from "./data";
import style from "./index.module.less";
import { DataTypeOne, DataTypeTwo } from "./data";
import { Carousel, Image, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useRef } from "react";
import { CarouselRef } from "antd/es/carousel";
import * as React from "react";

type ProductsItemsProps = {
    mockdata: (DataTypeOne | DataTypeTwo)[]
}
function Products() {
    const css = `
    :where(.css-dev-only-do-not-override-gzal6t).ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled){
            background: rgb(248,34,34);
            color:white;
            border-color: rgb(248,34,34) !important;
    }
     :where(.css-dev-only-do-not-override-gzal6t).ant-tabs .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn{
            color: rgb(248,34,34) !important;
        }
      :where(.css-dev-only-do-not-override-gzal6t).ant-tabs .ant-tabs-ink-bar{
        background: rgb(248,34,34) !important;
      }
    `
    type selectedType = "All" | "Organic" | "Sponsored" | undefined
    const [size, setSize] = useState<selectedType>('All');
    const onChange = (e: RadioChangeEvent) => {
        console.log(e)
        setSize(e.target.value);
    };

    const tabsCard = [
        {
            label: 'All 280', key: '123', children: <ProductsItems mockdata={mockdata} />
        },
        { label: 'Nike 95', key: '124', children: <ProductsItems mockdata={mockdata} /> },
        { label: 'New Balance 89', key: '125', children: <ProductsItems mockdata={mockdata} /> },
        { label: 'Adidas 75', key: '126', children: <ProductsItems mockdata={mockdata} /> },
        { label: 'Jordan 41', key: '127', children: <ProductsItems mockdata={mockdata} /> },
        { label: 'Other 102', key: '128', children: <ProductsItems mockdata={mockdata} /> },
    ]

    return (
        <>
            <div className={style.allMargin}>
                <Card>
                    <div className={style.Products}>
                        <header className={style.Products_header}>
                            <article>📦 Products mentioned</article>
                            <div>
                                <Radio.Group value={size} onChange={onChange} style={{ marginBottom: 16 }}>
                                    <Radio.Button value="All">All</Radio.Button>
                                    <Radio.Button value="Organic">Organic</Radio.Button>
                                    <Radio.Button value="Sponsored">Sponsored</Radio.Button>
                                </Radio.Group>
                            </div>
                        </header>
                        <main className={style.Products_main}>
                            <div className={style.Products_main_tabsBox}>
                                <Tabs
                                    defaultActiveKey="1"
                                    style={{ marginBottom: 32 }}
                                    items={tabsCard}
                                />
                            </div>
                        </main>
                    </div>
                </Card>
            </div>
            <style>{css}</style>
        </>
    )
}

function ProductsItems(props: ProductsItemsProps) {
    const { mockdata } = props
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
                        {<div
                            style={{ fontSize: items.fontSize, fontWeight: items.fontWight }}
                            className={style.Productstable_items_box_name}>
                            <span className={style.Productstable_items_box_name_span1}>{items.name}</span>
                            {items.sum && <span className={style.Productstable_items_box_name_span2}>x{items.sum}</span>}
                        </div>}
                        {items.image ?
                            <div style={{ position: 'relative' }}>
                                {items.imagesdesc && <span className={style.imagesdesc}>{items.imagesdesc}</span>}
                                <Button
                                    className={style.btnstyle}
                                    style={{ left: 5 }}
                                    onClick={() => {
                                        currentRef?.current?.prev()
                                    }}
                                    icon={<LeftOutlined style={{ fontSize: '20px' }} />}
                                ></Button>
                                <Button
                                    className={style.btnstyle}
                                    style={{ right: 5 }}
                                    onClick={() => {
                                        currentRef?.current?.next()
                                    }}
                                    icon={<RightOutlined style={{ fontSize: '20px' }} />}
                                ></Button>
                                <Carousel ref={currentRef} dots={false}>
                                    <Image className={style.Productstable_items_box_image} width={300} height={125} src={items.image} />
                                    <Image className={style.Productstable_items_box_image} width={300} height={125} src={items.image} />
                                    <Image className={style.Productstable_items_box_image} width={300} height={125} src={items.image} />
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


export default Products




