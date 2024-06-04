import { Outlet } from "react-router-dom";
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <section className="main-container">
        <Header />
        <Outlet />
        <Footer />
      </section>
    </>
  );
}

export default App
