import { useState } from 'react';
import Modal from 'react-modal';

function Project() {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      maxWidth: '100vh',
      maxHeight: "80vh",
      margin: "auto",
      overflowY: "auto", // quan trọng: bật scroll
      padding: "20px",
    },
  };

  const [modalIsOpen1, setIsOpen1] = useState(false);
  const [modalIsOpen2, setIsOpen2] = useState(false);
  const [modalIsOpen3, setIsOpen3] = useState(false);
  const [modalIsOpen4, setIsOpen4] = useState(false);
  const [modalIsOpen5, setIsOpen5] = useState(false);

  function openModal1() {
    setIsOpen1(true);
  }

  function closeModal1() {
    setIsOpen1(false);
  }

  function openModal2() {
    setIsOpen2(true);
  }

  function closeModal2() {
    setIsOpen2(false);
  }

  function openModal3() {
    setIsOpen3(true);
  }

  function closeModal3() {
    setIsOpen3(false);
  }

  function openModal4() {
    setIsOpen4(true);
  }

  function closeModal4() {
    setIsOpen4(false);
  }

  function openModal5() {
    setIsOpen5(true);
  }

  function closeModal5() {
    setIsOpen5(false);
  }



  return (
    <>

      {/*Modal 1*/}
      <Modal
        isOpen={modalIsOpen1}
        style={customStyles}
      >
        <h2 className='modal__title'>🕹️ Giao diện Website Shop Account Game</h2>
        <button className='modal__btnX' onClick={closeModal1}>❌</button>
        <p><strong>Công nghệ sử dụng:</strong> HTML, CSS, JavaScript thuần giúp rèn kỹ năng nền tảng</p>
        <p><strong>Đã thực hiện:</strong>
          <p>• Giao diện website bán tài khoản game: có trang chủ, danh sách tài khoản, chi tiết tài khoản.</p>
          <p>• Tập trung vào thiết kế layout, hiệu ứng giao diện.</p>
          <p>• Giao diện <strong>responsive</strong>, hiển thị tốt trên mọi thiết bị</p>
        </p>

        <div className='modal__link'>
          <a href='https://duan1-nguyen.vercel.app/' target='blank'>🌐 Demo</a>
          <a href='https://github.com/nnguyenne/duan1' target='blank'>💻 Source</a>
        </div>
      </Modal>

      {/*Modal 2*/}
      <Modal
        isOpen={modalIsOpen2}
        style={customStyles}
      >
        <h2 className='modal__title'>📦 Danh sách sản phẩm + Lọc</h2>
        <button className='modal__btnX' onClick={closeModal2}>❌</button>
        <p><strong>Công nghệ sử dụng:</strong> HTML, CSS, JavaScript rèn luyện kỹ năng JavaScript</p>
        <p><strong>Đã thực hiện:</strong>
          <p>• <strong>Fetch</strong> dữ liệu từ <strong>API DumMyJSON</strong> để hiển thị sản phẩm,
            <strong>mockAPI</strong> để thêm tài khoản, kiểm tra đăng nhập.</p>
          <p>• <strong>Phân trang</strong> sản phẩm <strong>(pagination)</strong></p>
          <p>• <strong>Tìm kiếm</strong> sản phẩm theo <strong>từ khóa</strong>.
            <strong> Lọc</strong> theo <strong>danh mục</strong> <strong>(category)</strong></p>
          <p>• Kiểm tra đăng nhập, đăng ký</p>
        </p>

        <div className='modal__link'>
          <a href='https://duan2-nguyen.vercel.app/' target='blank'>🌐 Demo</a>
          <a href='https://github.com/nnguyenne/duan2' target='blank'>💻 Source</a>
        </div>
      </Modal>

      {/*Modal 3*/}
      <Modal
        isOpen={modalIsOpen3}
        style={customStyles}
      >
        <h2 className='modal__title'>🕹️ Quản lý sản phẩm – ReactJS + Redux</h2>
        <button className='modal__btnX' onClick={closeModal3}>❌</button>
        <p><strong>Công nghệ sử dụng:</strong> HTML, SCSS, JavaScript, ReactJS, Redux, React Route</p>
        <p><strong>Đã thực hiện:</strong>
          <p>• App quản lý sản phẩm (CRUD): thêm, sửa, xoá sản phẩm.</p>
          <p>• Tính năng giỏ hàng sử dụng Redux để lưu trữ.</p>
          <p>• Điều hướng giữa các trang bằng React Router (SPA).</p>
        </p>
        <p>
          <strong>Kiến thức thu được</strong>
          <p>• Làm chủ kiến thức react cơ bản.</p>
          <p>• Biết sử dụng Redux để chia tách logic quản lý state.</p>
          <p>• Kỹ năng code rõ ràng, chia component tốt, tối ưu re-render.</p>
        </p>

        <div className='modal__link'>
          <a href='https://duan3-nguyen.vercel.app/' target='blank'>🌐 Demo</a>
          <a href='https://github.com/nnguyenne/duan3' target='blank'>💻 Source</a>
        </div>
      </Modal>

      {/*Modal 4*/}
      <Modal
        isOpen={modalIsOpen4}
        style={customStyles}
      >
        <h2 className='modal__title'>🧠 Quiz App</h2>
        <button className='modal__btnX' onClick={closeModal4}>❌</button>
        <p><strong>Công nghệ sử dụng:</strong>ReactJS, Ant Design, SweetAlert2, JSON Server, HTML, CSS, JavaScript</p>
        <p><strong>Đã thực hiện:</strong>
          <p>• App trắc nghiệm: Làm bài, tính điểm, hiện kết quả, lưu lịch sử bài làm.</p>
          <p>• Giao diện đẹp nhờ thư viện UI (Ant Design).</p>
          <p>• Cảnh báo UX tốt (SweetAlert2).</p>
          <p>• Sử dụng JSON Server để lưu dữ liệu: users, questions, kết quả.</p>
        </p>
        <p>
          <strong>Kiến thức thu được</strong>
          <p>• Biết sử dụng thư viện UI chuyên nghiệp.</p>
          <p>• Tự xây dựng hệ thống kiểm tra logic: câu hỏi, đáp án, điểm.</p>
          <p>• Biết cách lưu/đọc dữ liệu với API thật (JSON Server).</p>
        </p>

        <div className='modal__link'>
          <a href='https://duan4-quiz-nguyen.vercel.app/' target='blank'>🌐 Demo</a>
          <a href='https://github.com/nnguyenne/quiz' target='blank'>💻 Source</a>
        </div>
      </Modal>

      {/*Modal 5*/}
      <Modal
        isOpen={modalIsOpen5}
        style={customStyles}
      >
        <h2 className='modal__title'>Task Flow - Fullstack</h2>
        <button className='modal__btnX' onClick={closeModal5}>❌</button>
        <p><strong>Công nghệ sử dụng:</strong>
          <p><strong>Frontend: </strong>ReactJS, NodeJS, Express, MongoDB, React Router DOM, Material-UI, Socket.IO</p>
          <p><strong>Backend: </strong>NodeJS + ExpressJS, MongoDB + Mongoose, JSON Web Token (JWT), Bcrypt, Socket.IO, CORS, dotenv, middleware custom</p>
        </p>
        <p><strong>Đã thực hiện:</strong>
          <p>
            <strong>Chức năng quản lý công việc:</strong>
            <p>• CRUD task cá nhân và nhóm, lưu dữ liệu với MongoDB (Đang phát triển giao việc nhóm).</p>
            <p>• Xác thực JWT, phân quyền theo userId.</p>
            <p>• Chat realtime bằng Socket.IO (chat riêng + đang phát triển nhóm).</p>
            <p>• Tìm kiếm, lọc, sắp xếp, phân trang task</p>
            <p>• Giao diện responsive, tổ chức code chuẩn MVC</p>
          </p>
        </p>
        <p>
          <strong>Kiến thức thu được</strong>
          <p>• <strong>ReactJS chuyên sâu:</strong>Hiểu rõ cách tổ chức component, props, hooks, router, call API.</p>
          <p>• <strong>Làm Fullstack thực tế:</strong>Giao tiếp giữa FE ↔ BE, xác thực, phân quyền, xử lý dữ liệu.</p>
          <p>• <strong>Sử dụng MongoDB + Mongoose:</strong>Biết cách thiết kế schema, liên kết user-task, xử lý CRUD phức tạp.</p>
          <p>• <strong>Xác thực JWT:</strong>Biết rõ cơ chế đăng nhập bảo mật: mã hoá, token, middleware.</p>
          <p>• <strong>Socket.IO:</strong>Hiểu cách tạo server và client chat realtime (emit - on).</p>
          <p>• <strong>Kỹ năng tổ chức project:</strong>Backend có routes/controllers/models riêng, frontend dùng layout component chuẩn.</p>
          <p>• <strong>Tư duy xây dựng sản phẩm:</strong>Biết cách mở rộng tính năng: từ todo cá nhân → nhóm, thêm chat, giao việc.</p>
        </p>

        <div className='modal__link'>
          <a href='https://taskflow-nguyenne.vercel.app/' target='blank'>🌐 Demo</a>
          <a href='https://github.com/nnguyenne/taskflow' target='blank'>💻 Source</a>
        </div>
      </Modal>


      <h2>💻 Dự án cá nhân</h2>

      <div className="project-item">
        <h3>🕹️ Giao diện Website Shop Account Game</h3>
        <p>Thiết kế giao diện cho shop bán tài khoản game (trang chủ, danh
          sách, chi tiết sản phẩm)</p>
        <p><strong>Công nghệ:</strong> HTML, CSS, JavaScript</p>

        <div className="project-overlay">
          <div className='detail'>
            <p onClick={openModal1}>🔍 Xem chi tiết</p>
            <p><a href='https://duan1-nguyen.vercel.app/' target='blank'>🌐 Demo</a></p>
            <p><a href='https://github.com/nnguyenne/duan1' target='blank'>💻 Source</a></p>
          </div>
        </div>
      </div>

      <div className="project-item">
        <h3>📦 Danh sách sản phẩm + Lọc</h3>
        <p>Trang web hiển thị danh sách sản phẩm từ API, có tìm kiếm, lọc theo danh mục và phân trang.</p>
        <p><strong>Công nghệ:</strong> ReactJS, Fetch API, SCSS</p>

        <div className="project-overlay">
          <div className='detail'>
            <p onClick={openModal2}>🔍 Xem chi tiết</p>
            <p><a href='https://duan2-nguyen.vercel.app/' target='blank'>🌐 Demo</a></p>
            <p><a href='https://github.com/nnguyenne/duan2' target='blank'>💻 Source</a></p>
          </div>
        </div>
      </div>

      <div className="project-item">
        <h3>🛒 Shopping Cart (Redux)</h3>
        <p>Giỏ hàng cho phép thêm/sửa/xóa sản phẩm với JsonServer. Tính tổng tiền, lưu trạng thái bằng Redux.</p>
        <p><strong>Công nghệ:</strong> ReactJS, Redux, SCSS</p>

        <div className="project-overlay">
          <div className='detail'>
            <p onClick={openModal3}>🔍 Xem chi tiết</p>
            <p><a href='https://duan3-nguyen.vercel.app/' target='blank'>🌐 Demo</a></p>
            <p><a href='https://github.com/nnguyenne/duan3' target='blank'>💻 Source</a></p>
          </div>
        </div>
      </div>

      <div className="project-item">
        <h3>🧠 Quiz App</h3>
        <p>App trắc nghiệm kiến thức với tính năng chọn chủ đề câu hỏi, lưu kết quả và tính điểm theo từng chủ đề.</p>
        <p><strong>Công nghệ:</strong> ReactJS, Redux</p>

        <div className="project-overlay">
          <div className='detail'>
            <p onClick={openModal4}>🔍 Xem chi tiết</p>
            <p><a href='https://duan4-quiz-nguyen.vercel.app/' target='blank'>🌐 Demo</a></p>
            <p><a href='https://github.com/nnguyenne/quiz' target='blank'>💻 Source</a></p>
          </div>
        </div>
      </div>

      <div className="project-item">
        <h3>🧠 Task Flow - Fullstack</h3>
        <p>App quản lý công việc, giao việc kết hợp chat với serversocket tăng khả năng tương tác.</p>
        <p><strong>Công nghệ:</strong> ReactJS, NodeJS, Express, MongoDB, Socket.IO</p>

        <div className="project-overlay">
          <div className='detail'>
            <p onClick={openModal5}>🔍 Xem chi tiết</p>
            <p><a href='https://taskflow-nguyenne.vercel.app/' target='blank'>🌐 Demo</a></p>
            <p><a href='https://github.com/nnguyenne/taskflow' target='blank'>💻 Source</a></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Project;