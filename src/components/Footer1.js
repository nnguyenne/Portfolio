import { DownloadOutlined } from '@ant-design/icons';
function Footer1() {
  return (
    <>
      <div className="footer__container">
        <div className="footer__column">
          <h4>🧭 Điều hướng</h4>
          <ul>
            <li><a href="/">Giới thiệu</a></li>
            <li><a href="#skills">Kỹ năng</a></li>
            <li><a href="#projects">Dự án</a></li>
            <li><a href="#contact">Liên hệ</a></li>
          </ul>
        </div>

        <div className="footer__column">
          <h4>📘 Thông tin</h4>
          <ul>
            <li><a href="/">Blog cá nhân</a></li>
            <DownloadOutlined /> <a href="/File/CV-NguyenTrungNguyen.pdf" download>CV của tôi</a>
            <li><a href="https://github.com/nnguyenne">Github</a></li>
          </ul>
        </div>

        <div className="footer__column">
          <h4>📩 Liên hệ</h4>
          <p>📞<a href="tel:0866458318">0866458318</a></p>
          <p>
            📧 <a href="mailto:nguyenne.dev@gmail.com">nguyenne.dev@gmail.com</a>
          </p>

          <p>📘 <a href="https://facebook.com/trungnguyen2003" target="blank">Facebook cá nhân</a></p>
        </div>
      </div>
    </>
  )
}

export default Footer1;