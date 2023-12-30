import PublicHeadTips from "../../components/PublicHeadTips"
import Scanning from "../../components/Scanning"
import VideosProcessed from "../../components/VideosProcessed"
import Criteria from "../../components/criteria"
import Features from "../../components/features"
import style from './index.module.css'
import Products from "../../components/Products"
import Comments from "../../components/Comments"
import Influencers from "../../components/Influencers"
import Questions from "../../components/Questions"
function Report() {

    return (
        <>
            <div className={style.ReportWarp}>
                <PublicHeadTips />
                <main className={style.ReportWarp_main}>
                    <Scanning />
                    <VideosProcessed />
                    <Criteria />
                    <Features />
                    <Products />
                    <Comments />
                    <Influencers />
                    <Questions />
                </main>
            </div>
        </>
    )
}

export default Report
