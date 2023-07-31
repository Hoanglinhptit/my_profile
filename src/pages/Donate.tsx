import techQR from "../assets/image 2.svg";
import momoQR from "../assets/image 4.svg";
import backPage from "../assets/ri_arrow-go-back-line.svg";

export default function Donate() {
  return (
    <div>
      <div className="bg-[#E42C32] w-full h-[250px] rounded-xl flex flex-wrap mb-12 items-center">
        <img src={techQR} alt="" className="laptopsm:w-52 laptopsm:h-52 mx-9" />
        <div className="text-[#FFFFFF] text-center">
          <h2 className="text-3xl font-sans font-normal">TECHCOMBANK</h2>
          <h2 className="text-3xl font-sans font-normal">LE HOANG LINH</h2>
          <h2 className="text-3xl font-sans font-normal">19036939046017</h2>
        </div>
      </div>
      <div className="bg-[#F7118E] w-full h-[250px] rounded-xl flex flex-wrap items-center">
        <img src={momoQR} alt="" className="laptopsm:w-52 laptopsm:h-52 mx-9" />
        <div className="text-[#FFFFFF] text-center">
          <h2 className="text-3xl font-sans font-normal">MOMO</h2>
          <h2 className="text-3xl font-sans font-normal">LE HOANG LINH</h2>
          <h2 className="text-3xl font-sans font-normal">0986113157</h2>
        </div>
      </div>
      <a href="/" className="laptopsm:px-20 laptopsm:my-9 ">
        <img
          src={backPage}
          alt=""
          className="cursor-pointer laptopsm:w-14 laptopsm:h-11 ml-56 mt-7"
        />
      </a>
    </div>
  );
}
