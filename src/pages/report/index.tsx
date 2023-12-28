import PublicHeadTips from "../../components/PublicHeadTips"
import Scanning from "../../components/Scanning"
import VideosProcessed from "../../components/VideosProcessed"
import Criteria from "../../components/criteria"
import Features from "../../components/features"
import style from './index.module.css'
function Report() {

    return (
        <>
            <div className={style.ReportWarp}>
                <PublicHeadTips />
                <main className={style.ReportWarp_main}>
                    <Scanning />
                    <VideosProcessed />
                    <Criteria/>
                    <Features/>
                </main>
            </div>
        </>
    )
}

export default Report
