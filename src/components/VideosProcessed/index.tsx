import { Card, Col, Row } from "antd";
import style from "./index.module.less";
function VideosProcessed() {
  return (
    <>
      <Card>
        <div className={style.VideosProcessed}>
          <div className={style.VideosProcessed_header}>
            🎥 Videos Processed
          </div>
          <div className={style.VideosProcessed_content}>
            <Row gutter={[16, 16]}>
              <Col span={6}>
                <div className={style.VideosProcessed_content_row}>
                  <span className={style.VideosProcessed_content_row_span}>
                    100
                  </span>
                  videos
                </div>
              </Col>
              <Col span={6}>
                <div className={style.VideosProcessed_content_row}>
                  <span className={style.VideosProcessed_content_row_span}>
                    13H 24M
                  </span>
                  total time
                </div>
              </Col>
              <Col span={6}>
                <div className={style.VideosProcessed_content_row}>
                  <span className={style.VideosProcessed_content_row_span}>
                    12.6M
                  </span>
                  total views
                </div>
              </Col>
              <Col span={6}>
                <div className={style.VideosProcessed_content_row}>
                  <span className={style.VideosProcessed_content_row_span}>
                    181K
                  </span>
                  total comments
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Card>
    </>
  );
}

export default VideosProcessed;
