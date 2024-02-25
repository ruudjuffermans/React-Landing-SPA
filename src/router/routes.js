import Home from "../pages/home";
import Contact from "../pages/contact";
import About from "../pages/about";
import Dienst from "../pages/dienst";
import Regio from "../pages/regio";
import Projecten from "../pages/projecten";

const routes = [
    {
      name: "Home",
      key: "home",
      route: "/",
      component: <Home />,
      isDynamic: true,
    },
    {
      name: "Regio's",
      key: "regio",
      route: "/regio",
      component: <Regio />,
      isDynamic: false,
    },
    {
      name: "Diensten",
      key: "diensten",
      route: "/diensten",
      component: <Dienst />,
      isDynamic: false,
    },
    {
      name: "Projecten",
      key: "projecten",
      route: "/projecten",
      component: <Projecten />,
      isDynamic: false,
    },
    {
      name: "Over mij",
      key: "overmij",
      route: "/over-mij",
      component: <About />,
      isDynamic: false,
    },
    {
      name: "Blog",
      key: "blog",
      route: "/over-mij",
      component: <About />,
      isDynamic: false,
    },
    {
      name: "Contact",
      key: "contact",
      route: "/contact",
      component: <Contact />,
      isDynamic: false,
    },


  ];
  
  export default routes