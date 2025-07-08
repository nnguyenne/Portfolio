import avatarImg from '../assets/images/NGUYEN.JPG';
function Intro() {
  return (
    <>
      <img src={avatarImg} alt="Nguyễn Trung Nguyên" className="avatar" />
      <div className="intro-text">
        <h2>👋 Giới thiệu</h2>
        <p>
          Xin chào! Mình là <strong>Nguyễn Trung Nguyên</strong>, sinh viên ngành Công nghệ thông tin tại
          Đại học Tài nguyên và Môi trường Hà Nội (2021–2025).
        </p>
        <p>
          Mình là lập trình viên Frontend yêu thích ReactJS, từng làm nhiều dự án sử dụng HTML, CSS, SCSS, JavaScript,
          và các công nghệ như <strong>React, Redux, JSON Server</strong>.
        </p>
        <p>
          Mình đang tìm cơ hội <strong>thực tập Frontend Developer</strong> hoặc <strong>thực tập Backend Developer</strong> để học hỏi thực tế, hướng tới trở thành
          <strong> Fullstack Developer</strong>.
        </p>
      </div>
    </>
  )
}

export default Intro;