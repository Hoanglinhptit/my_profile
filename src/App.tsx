import Home from "./pages/Home";
import Exp from "./pages/Exp";
import Donate from "./pages/Donate";
import Edu from "./pages/Edu";
import { Route, Routes } from "react-router";
import bgImage from "./assets/image 1.svg";

function App() {
  return (
    <>
      <div className="bg-white">
        <div
          className="mx-auto  bg-white laptopsm:w-[1100px] laptopxl:w-[1340px] 
        laptopsm:flex laptopsm:justify-between laptopsm:shadow-md
        laptopxl:flex laptopxl:justify-between laptopxl:shadow-md
        
        "
        >
          {/* grid content auto mx 1200px */}
          <div className="laptopsm:my-14 laptopsm:w-3/6 laptopxl:my-14 laptopxl:w-3/6 ">
            {/* router componets */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/educations" element={<Edu />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/experiences" element={<Exp />} />
            </Routes>
          </div>
          <div className="laptopsm:my-14 laptopsm:w-2/6 laptopxl:my-14 laptopxl:w-2/6">
            {/* image background */}
            <img
              src={bgImage}
              alt=""
              className="
              
              laptopsm:object-cover laptopsm:w-full laptopsm:h-auto 
              laptopxl:object-cover laptopxl:w-full laptopxl:h-auto
              max-[430px]:hidden
            "
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
