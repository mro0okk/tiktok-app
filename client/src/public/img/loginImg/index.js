import user from "./user.png"
import facebook from "./facebook.png"
import google from "./google.png"
import insta from "./instagram.png"
import line from "./line.png"
const loginOptions = [
  {
    form: "Facebook",
    img: user,
    description: "Tiếp tục với Facebook",
  },
  {
    form: "Instagram",
    img: facebook,
    description: "Tiếp tục với Instagram",
  },
  {
    form: "HardID",
    img: google,
    description: "Số điện thoại/Email/tiktok ID",
  },
  {
    form: "Google",
    img: insta,
    description: "Tiếp tục với Google",
  },
  {
    form: "line",
    img: line,
    description: "Tiếp tục với Line",
  },
  {
    form: "QR code",
    img: facebook,
    description: "Sử dụng mã QR",
  },
]
export default loginOptions
