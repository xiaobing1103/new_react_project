

import { Image } from "antd";
import style from "./index.module.less";
import imageSrc1 from "../../../assets/images/11.png";



function FeaturesItems() {
    return <div className={style.FeaturesRow_items} >
        <div className={style.FeaturesRow_items_box}>
            <Image
                className={style.FeaturesRow_items_box_image}
                width={200}
                height={100}
                src={imageSrc1}
            />
            <p className={style.FeaturesRow_items_box_pBox}>
                <span className={style.FeaturesRow_items_box_pBox_span1}>Sleek and slim silhouettes: </span>The Adidas Samba
                and Gazelle are mentioned as popular shoes that offer a more
                sleek and slim silhouette.
            </p>
        </div>
    </div>
}

export default FeaturesItems