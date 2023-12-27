
import style from './index.module.less'
function VideosProcessed() {

    return (
        <>
            <div className={style.VideosProcessed}>
                <div className={style.VideosProcessed_header}>
                    🎥 Videos Processed
                </div>
                <div className={style.VideosProcessed_content}>
                    <div className={style.VideosProcessed_content_row}>
                        100 videos
                    </div>
                    <div className={style.VideosProcessed_content_row}>
                        13H 24M total time
                    </div>
                    <div className={style.VideosProcessed_content_row}>
                        12.6M total views
                    </div>
                    <div className={style.VideosProcessed_content_row}>
                        181K  total comments
                    </div>
                </div>
            </div>
        </>
    )
}

export default VideosProcessed
