import {Routes,Route} from "react-router-dom"
import Home from "../Components/Home"
import Leaves from "../Pages/Leaves"

function AllRoutes() {
  return (
    <div>
      <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/leaves" element={<Leaves/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes
