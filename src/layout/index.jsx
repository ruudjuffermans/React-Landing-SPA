import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Page from "./components/Page"
import Content from "./components/Content"
import { useEffect, useState } from "react";
import styles from "./style.module.css"
import useDebounce from "../hooks/useDebounce";

const Layout = () => {
  const [position, setPosition] = useState({ top: 0, left: 0 })
  useEffect(() => {
    window.scroll({
      top: position.top,
      left: position.left,
      behavior: 'smooth'
    })
  }, [position])



  const [visibility, setVisibility] = useState('none');
  const handleScroll = useDebounce(() => {
    if (200 < window.scrollY) {
      setVisibility('flex');
    } else {
      setVisibility('none');
    }
  }, 100);

  useEffect(() => {
    const onScroll = () => handleScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [handleScroll]);
  return (
    <>
      <Page>
        <Header />
        <Content>
          <Outlet />
        </Content>
        <Footer />
      </Page>
    </>
  );
};

export default Layout;
