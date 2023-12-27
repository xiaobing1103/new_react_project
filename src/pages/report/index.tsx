import PublicHeadTips from "../../components/PublicHeadTips"
import Scanning from "../../components/Scanning"
import VideosProcessed from "../../components/VideosProcessed"
import style from './index.module.css'
function Report() {

    return (
        <>
            <div className={style.ReportWarp}>
                <PublicHeadTips />
                <main className={style.ReportWarp_main}>
                    <Scanning />
                    <VideosProcessed />
                </main>
            </div>
        </>
    )
}

export default Report
