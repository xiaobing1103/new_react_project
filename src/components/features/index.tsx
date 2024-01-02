import { Card } from "antd";
import style from "./index.module.less";
import { Image } from "antd";
import imageSrc1 from "../../assets/images/11.png";
export default function Features() {
  return (
    <div className={style.allMargin}>
      <Card>
        <div className={style.Features}>
          <header className={style.Features_header}>
            🏆 Trending features
          </header>
          <main className={style.Features_main}>
            <div className={style.FeaturesRow}>
              <FeaturesItems />
              <FeaturesItems />
              <FeaturesItems />
              <FeaturesItems />
              <FeaturesItems />
            </div>
          </main>
        </div>
      </Card>
    </div>
  );
}
function FeaturesItems() {
  return <div className={style.FeaturesRow_items} >
    <div className={style.FeaturesRow_items_box}>
      <Image
        className={style.FeaturesRow_items_box_image}
        width={200}
        height={100}
        src={imageSrc1}
      />
      <p className={style.FeaturesRow_items_box_pBox} title='The Adidas Samba and Gazelle are mentioned as popular shoes that offer a more sleek and slim silhouette.'>
        <span className={style.FeaturesRow_items_box_pBox_span1} >Sleek and slim silhouettes: </span>The Adidas Samba
        and Gazelle are mentioned as popular shoes that offer a more
        sleek and slim silhouette.
      </p>
    </div>
  </div >
}