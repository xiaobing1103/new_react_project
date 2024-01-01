import { Card, Radio, RadioChangeEvent, Tabs, } from "antd";
import { useState } from "react";
import { mockdata } from "./data";
import style from "./index.module.less";
import ProductsItems from "./items";

function Products() {
    const css = `
    :where(.css-dev-only-do-not-override-gzal6t).ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled){
            background: rgb(248,34,34);
            color:white;
            border-color: rgb(248,34,34) !important;
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

export default Products
