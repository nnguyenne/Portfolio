import { useEffect, useState } from 'react';
import "./Home.scss";
import { Layout } from 'antd';
import MenuSider from '../components/MenuSider';
import logo from "../assets/images/logo.png"
import logo2 from "../assets/images/logo-fold.png"
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons"
import Intro from '../components/Intro';
import Skill from '../components/Skill';
import Project from '../components/Project';
import Goal from '../components/Goal';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Footer1 from '../components/Footer1';

const { Footer, Sider, Content } = Layout;


function Home() {
  const [activeSection, setActiveSection] = useState("section1");
  const [collapsed, setCollapsed] = useState(false);
  const handleClick = () => setCollapsed(!collapsed);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll(".section"));
    const lastSection = sections[sections.length - 1];

    const getNearestSection = () => {
      const scrollY = window.scrollY;
      const middle = scrollY + window.innerHeight / 2;

      let nearestSection = null;
      let minDistance = Infinity;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + scrollY;
        const sectionMiddle = sectionTop + rect.height / 2;
        const distance = Math.abs(sectionMiddle - middle);

        if (distance < minDistance) {
          minDistance = distance;
          nearestSection = section;
        }
      });

      return nearestSection;
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;

      // Nếu cuộn gần cuối trang → active section6 (liên hệ)
      if (scrollY + winHeight >= docHeight - 10) {
        setActiveSection(lastSection.id);
        lastSection.classList.add("visible");
        return;
      }

      // Tìm section gần giữa màn hình
      const nearest = getNearestSection();
      if (nearest) {
        setActiveSection(nearest.id);
        nearest.classList.add("visible");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  return (
    <>

      <Layout className="layout-default">
        <header className="header">
          <div className={collapsed ? "header__logo2" : "header__logo"}>
            <img src={collapsed ? logo2 : logo} alt="logo" />
          </div>
          <div className="header__nav">
            <div className="header__collapse" onClick={handleClick}>{collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} </div>
            <div className='header__info'>👨‍💻 Nguyễn Trung Nguyên - Developer</div>
          </div>
        </header>
        <Layout>
          <Sider className='sider'
            trigger={null}
            collapsible
            collapsed={collapsed}
            width={135}
            collapsedWidth={80}
            style={{
              overflow: 'hidden',
              background: "#fff"
            }}
          >
            <MenuSider activeSection={activeSection} />
          </Sider>
          <Content className="content">
            <div id="intro" className="section intro-section">
              <Intro />
            </div>

            <div id="skills" className="section skill-section">
              <Skill />
            </div>

            <div id="projects" className="section project-section">
              <Project />
            </div>

            <div id="goal" className="section goal-section">
              <Goal />
            </div>

            <div id="education" className="section education-section">
              <Education />
            </div>

            <div id="contact" className="section contact-section">
              <Contact />
            </div>
          </Content>
        </Layout>
        <Footer>
          <Footer1/>
        </Footer>
      </Layout>
    </>
  )
}
export default Home;