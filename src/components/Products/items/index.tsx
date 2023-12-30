
import { DataTypeOne, DataTypeTwo } from "../data";
import style from "./index.module.less";
import { Image } from "antd";
type ProductsItemsProps = {
    mockdata: (DataTypeOne | DataTypeTwo)[]
}
function ProductsItems(props: ProductsItemsProps) {
    const { mockdata } = props
    return (
        <div className={style.Productstable}>
            <div className={style.Productstable_items}>
                {mockdata.map((items) => {
                    return <div key={items.key} className={style.Productstable_items_box}>
                        {<div style={{ fontSize: items.fontSize, fontWeight: items.fontWight }} className={style.Productstable_items_box_name}>{items.name}</div>}
                        {items.image ? <Image className={style.Productstable_items_box_image} width={200} height={125} src={items.image} /> : <div className={style.Productstable_items_box_image} />}
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
