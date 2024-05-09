import Faq from "./Faq";
import Header from "./Header"
import Mainbody from "./Mainbody";
const Layout = () => {
  return (
      <>
        <div className="main-container w-[85%] m-auto">
        <Header />
        <Mainbody />
        <Faq />
        </div>
      </>
  )
}

export default Layout