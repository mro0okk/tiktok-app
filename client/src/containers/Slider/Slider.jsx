import clsx from "clsx"
import { useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import ButtonLogin from "../../components/Button/ButtonLogin"
import style from "./Slider.module.scss"
function Slider(data) {
  const href = window.location.href
  const originHref = window.location.origin
  const [pageName, setPageName] = useState(href)
  const auth = useSelector((s) => s.user.isLoggedIn)
  return (
    <div className={clsx(style.slider, style.s_1)}>
      <div className={style.mainNav}>
        <Link
          onClick={() => setPageName(href)}
          className={clsx(style.mainNavHome, {
            [style.active]: pageName === `${originHref}/`,
          })}
          to="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className={clsx(style.icon, "bi bi-house-door-fill")}
            viewBox="0 0 16 16"
          >
            <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
          </svg>
          <span className={style.none}>Dành cho bạn</span>
        </Link>
        <Link
          to="/Following"
          onClick={() => setPageName(href)}
          className={clsx(style.mainNavHome, {
            [style.active]: pageName === `${originHref}/Following`,
          })}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className={clsx({
              [style.hide]: pageName === `${originHref}/Following`,
            })}
            viewBox="0 0 16 16"
          >
            <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
          </svg>
          <svg
            width="32"
            height="32"
            style={{
              verticalAlign: "bottom",
              transform: "translateX(-10%)",
            }}
            className={clsx({
              [style.hide]: pageName !== `${originHref}/Following`,
            })}
            viewBox="0 0 48 48"
            fill="rgba(254, 44, 85, 1.0)"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M25.5 17C25.5 21.1421 22.1421 24.5 18 24.5C13.8579 24.5 10.5 21.1421 10.5 17C10.5 12.8579 13.8579 9.5 18 9.5C22.1421 9.5 25.5 12.8579 25.5 17Z"></path>
            <path d="M7.10396 34.7906C8.78769 30.2189 12.8204 27 18.0009 27C23.1818 27 27.2107 30.2213 28.8958 34.7898C29.3075 35.906 28.6141 37 27.5 37H8.5C7.38629 37 6.69289 35.9067 7.10396 34.7906Z"></path>
            <path d="M40.6308 37H32C31.2264 34.1633 30.0098 31.5927 28.144 29.7682C29.5384 28.9406 31.1829 28.5 33 28.5C37.239 28.5 40.536 30.8992 41.9148 35.0108C42.2516 36.0154 41.5423 37 40.6308 37Z"></path>
            <path d="M33 26.5C36.0376 26.5 38.5 24.0376 38.5 21C38.5 17.9624 36.0376 15.5 33 15.5C29.9624 15.5 27.5 17.9624 27.5 21C27.5 24.0376 29.9624 26.5 33 26.5Z"></path>
          </svg>
          <span className={style.none}>Đang follow</span>
        </Link>
        <Link
          to="/live"
          onClick={() => setPageName(href)}
          style={{
            maxHeight: "50.4px",
          }}
          className={clsx(style.mainNavHome, {
            [style.active]: pageName === `${originHref}/live`,
          })}
        >
          <div
            style={{
              display: "inline-block",
              fontSize: "16px",
              transform: "translateY(22%)",
            }}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="rgba(22, 24, 35, 1.0)"
              className={clsx({
                [style.hide]: pageName === `${originHref}/live`,
              })}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.78511 10.3334C6.95518 10.3334 6.33301 10.9792 6.33301 11.7143V20.2858C6.33301 21.0209 6.95518 21.6667 7.78511 21.6667H18.5744C19.4043 21.6667 20.0265 21.0209 20.0265 20.2858V17.5602C20.0265 17.1826 20.2392 16.8372 20.5763 16.6672C20.9135 16.4973 21.3177 16.5317 21.6212 16.7563L25.6663 19.7488V12.2513L21.6212 15.2439C21.3177 15.4684 20.9135 15.5029 20.5763 15.3329C20.2392 15.1629 20.0265 14.8175 20.0265 14.4399V11.7143C20.0265 10.9792 19.4043 10.3334 18.5744 10.3334H7.78511ZM25.6855 12.2371C25.6831 12.2388 25.6839 12.2383 25.6839 12.2383L25.6855 12.2371ZM25.6716 12.2177C25.673 12.2212 25.6746 12.2243 25.6763 12.2269C25.6798 12.2324 25.6834 12.2355 25.6855 12.2371L25.6874 12.2383C25.6874 12.2383 25.6865 12.238 25.6839 12.2383M4.33301 11.7143C4.33301 9.81952 5.90653 8.33337 7.78511 8.33337H18.5744C20.453 8.33337 22.0265 9.81953 22.0265 11.7143V12.4562L24.4963 10.629C25.0929 10.1877 25.8879 10.1155 26.5542 10.4359C27.224 10.758 27.6663 11.4325 27.6663 12.1905V19.8096C27.6663 20.5676 27.224 21.2421 26.5542 21.5642C25.888 21.8846 25.0929 21.8124 24.4963 21.371L22.0265 19.5439V20.2858C22.0265 22.1806 20.453 23.6667 18.5744 23.6667H7.78511C5.90653 23.6667 4.33301 22.1806 4.33301 20.2858V11.7143Z"
              ></path>
              <path d="M15 15.134C15.6667 15.5189 15.6667 16.4811 15 16.866L12 18.5981C11.3333 18.983 10.5 18.5019 10.5 17.7321L10.5 14.2679C10.5 13.4981 11.3333 13.017 12 13.4019L15 15.134Z"></path>
            </svg>
            <svg
              width="32"
              height="32"
              viewBox="0 0 48 48"
              fill="rgba(254, 44, 85, 1.0)"
              className={clsx({
                [style.hide]: pageName !== `${originHref}/live`,
              })}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.5 17.5714C6.5 14.7292 8.86029 12.5 11.6782 12.5H27.8621C30.6799 12.5 33.0402 14.7292 33.0402 17.5714V18.6843L36.745 15.9435C37.6399 15.2815 38.8324 15.1731 39.8318 15.6537C40.8365 16.1369 41.5 17.1486 41.5 18.2857V29.7143C41.5 30.8514 40.8365 31.8631 39.8318 32.3463C38.8324 32.8269 37.6399 32.7185 36.745 32.0565L33.0402 29.3158V30.4286C33.0402 33.2708 30.6799 35.5 27.8621 35.5H11.6782C8.86029 35.5 6.5 33.2708 6.5 30.4286V17.5714Z"></path>
              <path
                d="M23.25 23.134C23.9167 23.5189 23.9167 24.4811 23.25 24.866L17.25 28.3301C16.5833 28.715 15.75 28.2339 15.75 27.4641L15.75 20.5359C15.75 19.7661 16.5833 19.285 17.25 19.6699L23.25 23.134Z"
                fill="white"
              ></path>
            </svg>
          </div>
          <span className={style.none}>LIVE</span>
        </Link>
      </div>
      <div className={style.none}>
        {auth ? (
          <></>
        ) : (
          <div className={style.mainNav}>
            <span className={clsx(style.text__follow)}>
              Đăng nhập để xem các tác giả, thích video và xem bình luận
            </span>
            <ButtonLogin
              className={clsx(style.btnLogin, style.none)}
              logOps="Đăng nhập"
            />
          </div>
        )}
      </div>

      <div className={style.mainNav}>
        {/* <span className={style.none}>Tài khoản được đề xuất</span>
          {Object.keys(data).length === 0
            ? null
            : data.data.map((user) => (
                <SliderTopUser data={user} key={user._id} />
              ))} */}
        <div style={{ color: "#fe2c55" }} className={style.none}>
          Xem tất cả
        </div>
      </div>
      <div
        style={{ color: "#050505", fontWeight: "bolder", marginTop: "12px" }}
        className={style.none}
      >
        Khám phá
      </div>
      <div className={clsx(style.none, style.mainNav, style.tags)}>
        <div className={style.tag}>#tiktokmaster2021</div>
        <div className={style.tag}>#아씡꼬래정우사운드 - Tik Toker</div>
        <div className={style.tag}>#nhinsangtrai</div>
        <div className={style.tag}>#nhinsangtrai</div>
        <div className={style.tag}>#nhinsangtrai</div>
        <div className={style.tag}>#nhinsangtrai</div>
        <div className={style.tag}>#nhinsangtrai</div>
        <div className={style.tag}>#nhinsangtrai</div>
        <div className={style.tag}>#nhinsangtrai</div>
        <div className={style.tag}>#nhinsangtrai</div>
        <div className={style.tag}>#nhinsangtrai</div>
        <div className={style.tag}>#nhinsangtrai</div>
      </div>
      <div className={(style.mainNav, style.footer, style.none)}>
        <p>
          Giới thiệu Bảng tin Liên hệ <br /> Sự nghiệp Byte Dance TikTok for
          Good Quảng cáo Developers Transparency <br /> Trợ giúp An toàn Điều
          khoản Quyền riêng tư Creator Portal <br />
          Hướng dẫn Cộng đồng Thêm <br />© 2021 TikTok
        </p>
      </div>
    </div>
  )
}

export default Slider
