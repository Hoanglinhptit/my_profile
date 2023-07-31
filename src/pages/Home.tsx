import Coffee from "../assets/vscode-icons_file-type-coffeescript (1).svg";

export default function Home() {
  return (
    <div>
      <div className="">
        <h1 className="text-[#159E97] text-6xl font-semibold not-italic font-sans mb-2 text-center ">
          LE HOANG LINH
        </h1>
        <h1 className="text-[#159E97] text-4xl font-bold not-italic font-sans text-center">
          Web Developer
        </h1>
      </div>
      <h2 className="text-[#159E97] text-2xl font-bold not-italic font-sans laptopsm:mt-5 laptopsm:mb-2 laptopsm:mx-5">
        About Me:{" "}
      </h2>
      <div>
        <ul className="list-none text-[#159E97] font-sans laptopsm:text-xl ml-14">
          <li>Tel : 0986113157</li>
          <li>Address : Giai Phong Street, Hoang Mai, Hanoi</li>
          <li>Mail : lehoanglinhptit@gmail.com</li>
          <li>My Github : https://github.com/Hoanglinhptit</li>
          <li>
            <ul>
              <li>Reference : Le Anh Vu – Project Manager</li>
              <li className="ml-[6.25rem]">
                Department of CMC GLOBAL Co., Ltd.
              </li>
              <li className="ml-[6.25rem]"> Tel: 0388685501</li>
            </ul>
          </li>
        </ul>
      </div>
      <div>
        <a href="/educations">
          <div
            className="bg-[#d9e9e8] text-[#064180] laptopsm:w-[300px] h-[60px] rounded-[20px] text-xl  py-auto
           flex items-center justify-center
          font-sans font-semibold cursor-pointer mx-36 my-3"
          >
            <h3>Education level and skills</h3>
          </div>
        </a>
        <a href="/experiences">
          <div
            className="bg-[#d9e9e8] text-[#064180] laptopsm:w-[300px] h-[60px] rounded-[20px]  text-xl  py-auto 
           flex items-center justify-center
          font-sans font-semibold cursor-pointer mx-36 my-3"
          >
            <h3>Experiences</h3>
          </div>
        </a>
      </div>
      <div className="flex laptopsm:items-center laptopsm:my-11">
        <a
          href="/donate"
          className="text-[#064180] font-sans font-bold cursor-pointer laptopsm:text-2xl laptopxl:text-3xl hover:text-[#fd5c32] mx-4"
        >
          Buy me a coffee
        </a>
        <img src={Coffee} alt="" className="" />
      </div>
    </div>
  );
}
