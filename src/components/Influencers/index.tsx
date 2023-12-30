import { Card, Col, Image, Row } from "antd";
import style from "./index.module.less";
import ImageBox from "./ImageBox";
export default function Influencers() {
    return (
        <div className={style.allMargin}>
            <Card>
                <div className={style.Influencers}>
                    <header className={style.Influencers_header}>
                        🏆 Trending Influencers
                    </header>
                    <main className={style.Influencers_main}>
                        <ImageBox />
                        <ImageBox />
                        <ImageBox />
                        <ImageBox />
                        <ImageBox />

                    </main>
                </div>
            </Card>
        </div>
    );
}
