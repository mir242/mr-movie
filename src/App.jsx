import { Outlet } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import Header from "./components/header/Header"
import { Toaster } from "react-hot-toast"

function App() {


  return (
    <>
      <Header />
      <ain >
        <Outlet>
          
        </Outlet>

      </ain>
      <Footer />
      <Toaster />


    </>
  )
}

export default App
