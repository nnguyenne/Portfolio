import { Menu } from "antd"
import { AimOutlined, AppstoreOutlined, CodeOutlined, MailOutlined, ReadOutlined, UserOutlined} from "@ant-design/icons"

function MenuSider({ activeSection }) {
  const items = [
    {
      label: "Giới thiệu",
      icon: <UserOutlined />,
      key: "intro",
    },
    {
      label: "Kỹ năng",
      icon: <CodeOutlined />,
      key: "skills",
    },
    {
      label: "Dự án",
      icon: <AppstoreOutlined />,
      key: "projects",
    },
    {
      label: "Mục tiêu",
      icon: <AimOutlined />,
      key: "goal",
    },
    {
      label: "Học vấn",
      icon: <ReadOutlined />,
      key: "education",
    },
    {
      label: "Liên hệ",
      icon: <MailOutlined />,
      key: "contact",
    },
  ];

  const handleClick = ({ key }) => {
    const element = document.getElementById(key);
    if (element) {
      // element.scrollIntoView({ behavior: "smooth" });
      element.scrollIntoView({ behavior: 'smooth', block: 'center' }); // ❌ vì có thể không cố định đúng khoảng cách

    }
  }
  return (
    <>
      <Menu
        defaultSelectedKeys={["/"]}
        defaultOpenKeys={["Menu-1"]}
        mode="inline"
        onClick={handleClick}
        selectedKeys={[activeSection]}
        items={items}
      />
    </>
  )
}

export default MenuSider;