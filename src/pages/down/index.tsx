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
export default function Down() {
  return (
    <div className={style.wrap}>
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
                  Win/Mac下载
                </span>
              </a>
              <RightOutlined />
            </div>
            <p
              className={
                style.wrap_content_downloadIntroduce_main_downloadDevice
              }
            >
              可在Windows、mac和所有Android设备上使用
            </p>
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
