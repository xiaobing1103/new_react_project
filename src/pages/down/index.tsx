import React from "react";
import style from "./index.module.less";
// import PcCommonFooter from '../../PcCommonFooter'
import downloadBanner from "@/assets/images/download/download-banner.png";
import dText from "@/assets/images/download/d_text.png";
import dQrcode from "@/assets/images/download/d_qrcode.png";
import dAndroid from "@/assets/images/download/d-android.png";
import dPhone from "@/assets/images/download/d-phone.png";
import dWindows from "@/assets/images/download/d-windows.png";
import dots from "@/assets/images/download/dots.png";
import "./index.less";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { RightOutlined } from "@ant-design/icons";
import { Card, Carousel, Col, Row } from "antd";
export default function Down() {
  const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  return (
    <div className={style.wrap}>
      <div className={style.wrap_header}>
        <div className={style.wrap_header_pc}>
          <div className={style.wrap_header_pc_logo}>
            <img className={style.wrap_header_pc_logo_img} src="//file.1foo.com/2023/10/20/17dcd076f1d9bf17dbb371d0f4d61a59.png" />
            <span className={style.wrap_header_pc_logo_logoName}>边界AI</span>
          </div>
          <div className={style.wrap_header_pc_main}>
            <div className={style.wrap_header_pc_main_actives}>
              <a className={style.wrap_header_pc_main_actives_notlogin} href="https://docs.qq.com/slide/DRXVsVnVLb01RWkdG" target="_blank">
                教程文档
              </a>

            </div>
          </div>
        </div>
      </div>






      <div className={style.wrap_content}>
        <div className={style.wrap_content_downloadIntroduce}>
          <div className={style.wrap_content_downloadIntroduce_main}>
            <p className={style.wrap_content_downloadIntroduce_main_p1}>
              边界AICHAT
            </p>
            <p className={style.wrap_content_downloadIntroduce_main_p2}>
              生产力提升工具

            </p>
            <p className={style.wrap_content_downloadIntroduce_main_p3}>
              高效便捷!
            </p>
            <p className={style.downloadBanner}>
              {/* <img
                className={style.downloadBanner}
                src={downloadBanner}
                alt="tupian"
                title="替换文本"
              /> */}
            </p>
            <p className={style.wrap_content_downloadIntroduce_main_p4}>
              边界AIchat是一款功能强大的智能办公和学习AI工具，多媒体内容处理、办公文档生成、语音合成和OCR、高级绘画功能以及专业级翻译技术等特点，为用户提供智能的办公和学习支持,使工作效率和学习体验更加便捷和专业。
            </p>
            <div
              className={
                style.wrap_content_downloadIntroduce_main_downloadAddress
              }
            >
              <a href="https://dmla.lanzouy.com/b05pao8eh">
                <span
                  className={
                    style.wrap_content_downloadIntroduce_main_downloadAddress_android
                  }
                >
                  手机下载
                </span>
              </a>
              <a href="https://dmla.lanzouy.com/b05pfn9mf">
                <span
                  className={
                    style.wrap_content_downloadIntroduce_main_downloadAddress_windows
                  }
                >
                  Win/Mac下载   <RightOutlined />
                </span>
              </a>

            </div>
            <div className={style.rightBox}>
              <p
                className={
                  style.wrap_content_downloadIntroduce_main_downloadDevice
                }
              >
                <div>可在Windows、mac和所有Android设备上使用</div>
                <div>如果安装失败页面添加客服微信咨询</div>
              </p>
            </div>
            <img
              className={
                style.wrap_content_downloadIntroduce_main_downloadBanner
              }
              src={downloadBanner}
              alt="tupian"
              title="替换文本"
            />
          </div>
        </div>

        <div className={style.wrap_content_downloadMore}>
          <div className={style.introduce_ai}>
            <div className={style.introduce_ai_main}>
              <p className={style.introduce_ai_main_p1}>全能AI平台</p>
              <img
                className={style.introduce_ai_main_banner}
                src="http://file.1foo.com/2023/10/14/ff8a1cba2cf3d5674b4dcd3e4e47c2d9.png"
              />
              <p className={style.introduce_ai_main_p2}>
                提升工作、学习和生活效率的首选平台
              </p>
              <p className={style.introduce_ai_main_p3}>
                多家AI大模型、商业级AI绘画、办公文档AI处理、多语言翻译、定制化AI插件、知识库模型、自定义创建...
              </p>
            </div>
          </div>
          <div className={style.introduce_draw}>
            <img
              className={style.introduce_draw_drawBanner}
              src="//file.1foo.com/2023/10/14/15ca429853641e64b885ee381083d50d.png"
            />
            <div className={style.introduce_draw_main}>
              <p className={style.introduce_draw_main_p1}>AI绘画模型+</p>
              <p className={style.introduce_draw_main_p2}>
                Stable
                Diffusion绘画、文生图、图生图、艺术二维码、隐藏二维码、光影图片创作，AI毕业照，绘画创作辅助、AI形象照、AI擦除）AI绘画上线新的模型，数十个绘画风格。
              </p>
              <p className={style.introduce_draw_main_p3}>
                包括但不限于：动漫模型、图标模型、景物模型、建筑模型，风格：国漫、国画、宫崎骏、科幻、机甲、唯美、渲染.....
              </p>
            </div>
          </div>

          <div className={style.introduceDrawBanner}>
            <ul className={style.introduceDrawBanner_conts}>
              <Swiper
                spaceBetween={300}
                slidesPerView={4}
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                navigation
                autoplay
                loop
              >
                <SwiperSlide>
                  <img src="//file.1foo.com/2023/10/14/f5d95baf9c016a515c6239ba60cc195d.png" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="//file.1foo.com/2023/10/14/237fddb0322ad1c61f0d6c982b7bf2ad.png" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="//file.1foo.com/2023/10/14/86ce41ded9ed6c2aed330045e6b83f68.png" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="//file.1foo.com/2023/10/14/3895011f64943a715babb3c989eab927.png" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="//file.1foo.com/2023/10/14/f5d95baf9c016a515c6239ba60cc195d.png" />
                </SwiperSlide>
              </Swiper>
            </ul>
          </div>

          <div className={style.introducePlugIn}>
            <div className={style.introducePlugIn_main}>
              <p className={style.introducePlugIn_main_p1}>强大的插件库</p>
              <p className={style.introducePlugIn_main_p2}>
                一键生成PPT、一键生成思维导图、PDF文档AI翻译、真人语音合成、AI-OCR、办公文档AI处理、AI文档模式
              </p>
            </div>
            <img
              className={style.introducePlugIn_banner}
              src="//file.1foo.com/2023/10/14/44b83ee6f57b322d2caa38f45dec8ed1.png"
            />
          </div>

          <div className={style.introduce_market}>
            <img
              className={style.introduce_market_banner}
              src="//file.1foo.com/2023/10/14/f9612db4fb0bc273515c68fadd34867a.png"
            />
            <div className={style.introduce_market_main}>
              <p className={style.introduce_market_main_p1}>模型市场</p>
              <p className={style.introduce_market_main_p2}>
                AI模型能够自动分析和解决问题。应用领域非常广泛，可以用于辅助医疗诊断、智能交通、智能家居、金融风控等众多领域。
              </p>
            </div>
          </div>

          <div className={style.introduce_cosplay}>
            <div className={style.introduce_cosplay_main}>
              <p className={style.introduce_cosplay_main_p1}>AI角色扮演</p>
              <p className={style.introduce_cosplay_main_p2}>
                AI角色可以提供智能建议和帮助。通过对话，玩家可以用户能够得到关于处事技巧或生活中的建议和指导，提升自己的能力和技巧。
              </p>
            </div>
            <img
              className={style.introduce_cosplay_banner}
              src="//file.1foo.com/2023/10/14/9d4208c55b1a4859983dbfcfa3b3fcd0.png"
            />
          </div>



          <div className={style.introduce_robot}>
            <div className={style.introduce_robot_main}>
              <div>
                <p className={style.introduce_robot_main_p1} >边界AICHAT YUFANG</p>
                <p className={style.introduce_robot_main_p2} >基于知识库训练AI机器人</p>
                <p className={style.introduce_robot_main_p3} >上传企业文档，快速训练符合企业要求</p>
                <p className={style.introduce_robot_main_p4}>
                  让每个企业轻松有用自己的AIGC系统和企业级AI平台,实现智能对话、 AI模型训练
                  、AI客服、AI虚拟员工、AI学习平台，大幅降低企业成本 提高企业效率
                </p>
              </div>
              <img
                className={style.introduce_robot_main_robotBanner}

                src="//file.1foo.com/2023/10/14/977528ea8386113d2c901118301a2dfc.png"
              />
            </div>
          </div>
          <div className={style.introduceScene}>
            <div className={style.introduceScene_box}>
              <p className={style.introduceScene_p1}>应用场景</p>
              <p className={style.introduceScene_p2} >
                零售与电商提升客户体验：通过24/7的在线客服，改善用户体验。个性化推荐：基于用户的对话和行为，进行更精准的商品或服务推荐。
                金融风险评估：通过自然语言处理分析客户的信用状况。
                投资建议：提供基础的投资策略和市场分析。 医疗患者咨询：提供初步的医疗咨询和建议。
                数据解读：帮助医生解读医疗报告和研究。
                媒体与出版内容生成：自动写作新闻摘要，或生成初稿。
                内容审核：自动识别和过滤不合适或有害的内容。
                教育个性化教学：根据学生的需求和进度，提供个性化的学习路径。
                批改与评估：自动批改作业和测试，节省教师时间。
                旅游与酒店预订助手：自动处理预订和退款。 旅行建议：提供目的地信息、旅行建议等。
                房地产资产评估：自动生成房地产评估报告。 客户服务：解答关于房产的常见问题。
                制造业供应链优化：通过分析文本数据，优化供应链管理。
                质量控制：自动记录和分析质量检测结果。
                政府与公共服务公文生成：自动撰写或编辑官方文件和报告。公众咨询：提供政府服务信息，如税务、社保等。
                艺术与娱乐内容创作：如编写歌词、剧本等。
                虚拟角色：在游戏或其他娱乐平台上提供更真实的交互体验。
              </p>
              <div className={style.introduceScene_user}>
                <img className={style.introduceScene_user_head} src='http://down2.ai1foo.com/images/head-4.png' />
                <div className={style.introduceScene_user_describe}>
                  <p className={style.introduceScene_user_describe_p3}>
                    通过聊天机器人，为销售提供更适合的销售话术、客户方案，提高销售人效
                  </p>
                  <p className={style.introduceScene_user_describe_p4}>
                    （√基于产品知识生成销售话术 √撰写名类客户方案、标书√撰写朋友圈文案、群发文案）
                  </p>
                  <p className={style.introduceScene_user_describe_p5}>AI+销售</p>
                </div>
              </div>
            </div>
          </div>
          <div className={style.Carousel}>
            <div className={style.Carousel_title}>最新动态 </div>
            <Carousel dots={false} autoplay>
              <div className={style.Carousel_box}>
                <div className={style.Carousel_box1}>
                  <Card className={style.Carousel_box_card}>
                    <div className={style.cardBox}>
                      <p className={style.cardBox_top}>AI绘画流程</p>
                      <div className={style.cardBox_middle} >
                        <img className={style.cardBox_middle_img1} src='http://down2.ai1foo.com/images/classify.png' />
                        <span className={style.cardBox_middle_span1}>未分类</span>
                        <img className={style.cardBox_middle_img2} src='http://down2.ai1foo.com/images/time.png' />
                        <span className={style.cardBox_middle_span2}>今天</span>
                        <img className={style.cardBox_middle_img3} src='http://down2.ai1foo.com/images/see.png' />
                        <span className={style.cardBox_middle_span3}>3888</span>
                      </div>
                      <p className={style.cardBox_bottom} >
                        <span>
                          一、提示词 提示词 (Prompt) 是 种用于与AI
                          人工智能模型交互的语言，它用来告诉模型需要生成什么样的内容或图像。在图像..
                        </span>
                      </p>
                    </div>
                  </Card>
                  <Card className={style.Carousel_box_card}>
                    <div className={style.cardBox}>
                      <p className={style.cardBox_top}>AI绘画流程</p>
                      <div className={style.cardBox_middle} >
                        <img className={style.cardBox_middle_img1} src='http://down2.ai1foo.com/images/classify.png' />
                        <span className={style.cardBox_middle_span1}>未分类</span>
                        <img className={style.cardBox_middle_img2} src='http://down2.ai1foo.com/images/time.png' />
                        <span className={style.cardBox_middle_span2}>今天</span>
                        <img className={style.cardBox_middle_img3} src='http://down2.ai1foo.com/images/see.png' />
                        <span className={style.cardBox_middle_span3}>3888</span>
                      </div>
                      <p className={style.cardBox_bottom} >
                        <span>
                          一、提示词 提示词 (Prompt) 是 种用于与AI
                          人工智能模型交互的语言，它用来告诉模型需要生成什么样的内容或图像。在图像..
                        </span>
                      </p>
                    </div>
                  </Card>
                  <Card className={style.Carousel_box_card}>
                    <div className={style.cardBox}>
                      <p className={style.cardBox_top}>AI绘画流程</p>
                      <div className={style.cardBox_middle} >
                        <img className={style.cardBox_middle_img1} src='http://down2.ai1foo.com/images/classify.png' />
                        <span className={style.cardBox_middle_span1}>未分类</span>
                        <img className={style.cardBox_middle_img2} src='http://down2.ai1foo.com/images/time.png' />
                        <span className={style.cardBox_middle_span2}>今天</span>
                        <img className={style.cardBox_middle_img3} src='http://down2.ai1foo.com/images/see.png' />
                        <span className={style.cardBox_middle_span3}>3888</span>
                      </div>
                      <p className={style.cardBox_bottom} >
                        <span>
                          一、提示词 提示词 (Prompt) 是 种用于与AI
                          人工智能模型交互的语言，它用来告诉模型需要生成什么样的内容或图像。在图像..
                        </span>
                      </p>
                    </div>
                  </Card>
                  <Card className={style.Carousel_box_card}>
                    <div className={style.cardBox}>
                      <p className={style.cardBox_top}>AI绘画流程</p>
                      <div className={style.cardBox_middle} >
                        <img className={style.cardBox_middle_img1} src='http://down2.ai1foo.com/images/classify.png' />
                        <span className={style.cardBox_middle_span1}>未分类</span>
                        <img className={style.cardBox_middle_img2} src='http://down2.ai1foo.com/images/time.png' />
                        <span className={style.cardBox_middle_span2}>今天</span>
                        <img className={style.cardBox_middle_img3} src='http://down2.ai1foo.com/images/see.png' />
                        <span className={style.cardBox_middle_span3}>3888</span>
                      </div>
                      <p className={style.cardBox_bottom} >
                        <span>
                          一、提示词 提示词 (Prompt) 是 种用于与AI
                          人工智能模型交互的语言，它用来告诉模型需要生成什么样的内容或图像。在图像..
                        </span>
                      </p>
                    </div>
                  </Card>
                </div>
              </div>

              <div className={style.Carousel_box}>
                <div className={style.Carousel_box1}>
                  <Card className={style.Carousel_box_card}>
                    <div className={style.cardBox}>
                      <p className={style.cardBox_top}>AI绘画流程</p>
                      <div className={style.cardBox_middle} >
                        <img className={style.cardBox_middle_img1} src='http://down2.ai1foo.com/images/classify.png' />
                        <span className={style.cardBox_middle_span1}>未分类</span>
                        <img className={style.cardBox_middle_img2} src='http://down2.ai1foo.com/images/time.png' />
                        <span className={style.cardBox_middle_span2}>今天</span>
                        <img className={style.cardBox_middle_img3} src='http://down2.ai1foo.com/images/see.png' />
                        <span className={style.cardBox_middle_span3}>3888</span>
                      </div>
                      <p className={style.cardBox_bottom} >
                        <span>
                          一、提示词 提示词 (Prompt) 是 种用于与AI
                          人工智能模型交互的语言，它用来告诉模型需要生成什么样的内容或图像。在图像..
                        </span>
                      </p>
                    </div>
                  </Card>
                  <Card className={style.Carousel_box_card}>
                    <div className={style.cardBox}>
                      <p className={style.cardBox_top}>AI绘画流程</p>
                      <div className={style.cardBox_middle} >
                        <img className={style.cardBox_middle_img1} src='http://down2.ai1foo.com/images/classify.png' />
                        <span className={style.cardBox_middle_span1}>未分类</span>
                        <img className={style.cardBox_middle_img2} src='http://down2.ai1foo.com/images/time.png' />
                        <span className={style.cardBox_middle_span2}>今天</span>
                        <img className={style.cardBox_middle_img3} src='http://down2.ai1foo.com/images/see.png' />
                        <span className={style.cardBox_middle_span3}>3888</span>
                      </div>
                      <p className={style.cardBox_bottom} >
                        <span>
                          一、提示词 提示词 (Prompt) 是 种用于与AI
                          人工智能模型交互的语言，它用来告诉模型需要生成什么样的内容或图像。在图像..
                        </span>
                      </p>
                    </div>
                  </Card>
                  <Card className={style.Carousel_box_card}>
                    <div className={style.cardBox}>
                      <p className={style.cardBox_top}>AI绘画流程</p>
                      <div className={style.cardBox_middle} >
                        <img className={style.cardBox_middle_img1} src='http://down2.ai1foo.com/images/classify.png' />
                        <span className={style.cardBox_middle_span1}>未分类</span>
                        <img className={style.cardBox_middle_img2} src='http://down2.ai1foo.com/images/time.png' />
                        <span className={style.cardBox_middle_span2}>今天</span>
                        <img className={style.cardBox_middle_img3} src='http://down2.ai1foo.com/images/see.png' />
                        <span className={style.cardBox_middle_span3}>3888</span>
                      </div>
                      <p className={style.cardBox_bottom} >
                        <span>
                          一、提示词 提示词 (Prompt) 是 种用于与AI
                          人工智能模型交互的语言，它用来告诉模型需要生成什么样的内容或图像。在图像..
                        </span>
                      </p>
                    </div>
                  </Card>
                  <Card className={style.Carousel_box_card}>
                    <div className={style.cardBox}>
                      <p className={style.cardBox_top}>AI绘画流程</p>
                      <div className={style.cardBox_middle} >
                        <img className={style.cardBox_middle_img1} src='http://down2.ai1foo.com/images/classify.png' />
                        <span className={style.cardBox_middle_span1}>未分类</span>
                        <img className={style.cardBox_middle_img2} src='http://down2.ai1foo.com/images/time.png' />
                        <span className={style.cardBox_middle_span2}>今天</span>
                        <img className={style.cardBox_middle_img3} src='http://down2.ai1foo.com/images/see.png' />
                        <span className={style.cardBox_middle_span3}>3888</span>
                      </div>
                      <p className={style.cardBox_bottom} >
                        <span>
                          一、提示词 提示词 (Prompt) 是 种用于与AI
                          人工智能模型交互的语言，它用来告诉模型需要生成什么样的内容或图像。在图像..
                        </span>
                      </p>
                    </div>
                  </Card>
                </div>
              </div>

            </Carousel>
          </div>

        </div>


        <img
          className={style.wrap_content_igmDots}
          src={dots}
          title="替换文本"
          alt="替换文本"
        />
      </div>

    </div>
  );
}
