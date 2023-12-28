import { Card, Row } from "antd";
import style from "./index.module.less";
export default function Criteria() {
  return (
    <div className={style.allMargin}>
      <Card>
        <div className={style.Criteria}>
          <header className={style.Criteria_header}>
            🧐 Selection criteria
          </header>
          <main className={style.Criteria_main}>
            <Row>
              <span> Comfort:</span> The host mentions that the New Balance 550
              is not the most comfortable shoe, which has contributed to its
              loss of popularity.
            </Row>
            <Row>
              <span> Versatility: </span>The New Balance 2002 R and 1906 R are
              popular because they can be worn with many different outfits.
            </Row>
            <span>Price:</span> The Adidas 610 is mentioned as a popular shoe
            that comes at a pretty affordable price.
            <Row>
              <span> Gait analysis:</span> It is recommended to have your gait
              analyzed at a local running store or check the wear patterns on
              the soles of your well-used running shoes to determine your
              pronation type.
            </Row>
            <Row>
              <span> Pronation type:</span> There are three main types of
              pronation - neutral, overpronation, and supination. Identifying
              your pronation type will help you choose the right running shoe.
            </Row>
          </main>
        </div>
      </Card>
    </div>
  );
}
