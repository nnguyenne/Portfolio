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
      maxWidth: '80vh',
    },
  };

  const [modalIsOpen1, setIsOpen1] = useState(false);
  const [modalIsOpen2, setIsOpen2] = useState(false);
  const [modalIsOpen3, setIsOpen3] = useState(false);
  const [modalIsOpen4, setIsOpen4] = useState(false);

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



  return (
    <>

      {/*Modal 1*/}
      <Modal
        isOpen={modalIsOpen1}
        style={customStyles}
      >
        <h2 className='modal__title'>🕹️ Giao diện Website Shop Account Game</h2>
        <button className='modal__btnX' onClick={closeModal1}>❌</button>
        <p><strong>Công nghệ sử dụng:</strong> HTML, CSS, JavaScript</p>
        <p><strong>Mục tiêu dự án:</strong>
          <p>• Thiết kế giao diện cho shop bán tài khoản game (trang chủ, danh
            sách, chi tiết sản phẩm)</p>
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
        <p><strong>Công nghệ sử dụng:</strong> HTML, CSS, JavaScript</p>
        <p><strong>Mục tiêu dự án:</strong>
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
        <h2 className='modal__title'>🕹️ Giao diện Website Shop Account Game</h2>
        <button className='modal__btnX' onClick={closeModal3}>❌</button>
        <p><strong>Công nghệ sử dụng:</strong> HTML, CSS, JavaScript</p>
        <p><strong>Mục tiêu dự án:</strong>
          <p>• Thiết kế giao diện cho shop bán tài khoản game (trang chủ, danh
            sách, chi tiết sản phẩm)</p>
          <p>• Giao diện <strong>responsive</strong>, hiển thị tốt trên mọi thiết bị</p>
        </p>

        <div className='modal__link'>
          <a href='https://duan1-nguyen.vercel.app/' target='blank'>🌐 Demo</a>
          <a href='https://github.com/nnguyenne/duan1' target='blank'>💻 Source</a>
        </div>
      </Modal>

      {/*Modal 4*/}
      <Modal
        isOpen={modalIsOpen4}
        style={customStyles}
      >
        <h2 className='modal__title'>🕹️ Giao diện Website Shop Account Game</h2>
        <button className='modal__btnX' onClick={closeModal4}>❌</button>
        <p><strong>Công nghệ sử dụng:</strong> HTML, CSS, JavaScript</p>
        <p><strong>Mục tiêu dự án:</strong>
          <p>• Thiết kế giao diện cho shop bán tài khoản game (trang chủ, danh
            sách, chi tiết sản phẩm)</p>
          <p>• Giao diện <strong>responsive</strong>, hiển thị tốt trên mọi thiết bị</p>
        </p>

        <div className='modal__link'>
          <a href='https://duan1-nguyen.vercel.app/' target='blank'>🌐 Demo</a>
          <a href='https://github.com/nnguyenne/duan1' target='blank'>💻 Source</a>
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
        <p><strong>Công nghệ:</strong> ReactJS, Redux, LocalStorage</p>

        <div className="project-overlay">
          <div className='detail'>
            <p onClick={openModal4}>🔍 Xem chi tiết</p>
            <p><a href='https://duan4-quiz-nguyen.vercel.app/' target='blank'>🌐 Demo</a></p>
            <p><a href='https://github.com/nnguyenne/quiz' target='blank'>💻 Source</a></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Project;