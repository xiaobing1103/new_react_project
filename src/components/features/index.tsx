import { Card, Row, Image, Col } from "antd";
import style from "./index.module.less";
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
            <Row>
              <Col span={8}>
                <div className={style.Features_main_box}>
                  <Image
                    className={style.Features_main_box_image}
                    width={200}
                    src={imageSrc1}
                  />
                  <p className={style.Features_main_box_pBox}>
                    <span>Sleek and slim silhouettes: </span>The Adidas Samba
                    and Gazelle are mentioned as popular shoes that offer a more
                    sleek and slim silhouette.
                  </p>
                </div>
              </Col>
              <Col  span={8}>
                <div className={style.Features_main_box}>
                  <Image
                    className={style.Features_main_box_image}
                    width={200}
                    src={imageSrc1}
                  />
                  <p className={style.Features_main_box_pBox}>
                    <span>Sleek and slim silhouettes: </span>The Adidas Samba
                    and Gazelle are mentioned as popular shoes that offer a more
                    sleek and slim silhouette.
                  </p>
                </div>
              </Col>
              <Col  span={8}>
                <div className={style.Features_main_box}>
                  <Image
                    className={style.Features_main_box_image}
                    width={200}
                    src={imageSrc1}
                  />
                  <p className={style.Features_main_box_pBox}>
                    <span>Sleek and slim silhouettes: </span>The Adidas Samba
                    and Gazelle are mentioned as popular shoes that offer a more
                    sleek and slim silhouette.
                  </p>
                </div>
              </Col>
            </Row>
          </main>
        </div>
      </Card>
    </div>
  );
}
