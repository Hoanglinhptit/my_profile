import Coffee from "../assets/vscode-icons_file-type-coffeescript (1).svg";
import backPage from "../assets/ri_arrow-go-back-line.svg";

export default function Exp() {
  return (
    <div>
      <div className="flex justify-center items-center mb-6">
        <h1 className="text-[#064180] font-sans font-medium text-4xl">
          My Experiences
        </h1>
      </div>
      <div>
        <ul className="list-none no-underline text-[#064180] font-sans font-normal laptopsm:text-xl mb-6 ml-6">
          <li>07/2021 – 05/2022 :</li>
          <li>- GDC Support & IT-Support.</li>
          <li>- Company: CMC GLOBAL.</li>
          <li>- Customer: Samsung SDS.</li>
          <li>- Position: IT-Support.</li>
          <li>- Project: C-Now issues management system.</li>
        </ul>
        <ul className="list-none no-underline text-[#064180] font-sans font-normal laptopsm:text-xl mb-6 ml-6">
          <li>05/2022 - 07/2022 :</li>
          <li>- TMS-HRMSv2, TMS-HRMSv1 (CMCGLOBAL) - Web developer.</li>
          <li>- Fix bug, develop lib, common UI.</li>
          <li>- Project description : Web for internal staff management.</li>
          <li>- Programming language: JS, TS.</li>
          <li>- Client side rendering frameworks: ReactJS, VueJS.</li>
          <li>- Tools: Microsoft Visual Studio, Gitlab, Git.</li>
        </ul>
        <ul className="list-none no-underline text-[#064180] font-sans font-normal laptopsm:text-xl mb-6 ml-6">
          <li>08/2022 – 08/2022 :</li>
          <li>- Personal Project - Developer, Maintainer.</li>
          <li>- Description of the project : Personal portfolio website </li>
          <li>- Programming language: TS.</li>
          <li>- Client side rendering frameworks: ReactJS, Vite.</li>
          <li>- UI: TailwindCSS.</li>
          <li>- Project: </li>
        </ul>
        <ul className="list-none no-underline text-[#064180] font-sans font-normal laptopsm:text-xl mb-6 ml-6">
          <li>06/2023 - now :</li>
          <li>- Personal Project - Developer, Maintainer.</li>
          <li>- Description of the project : E-commerce website order</li>
          <li>- Programming language: JS, TS.</li>
          <li>- Client side rendering frameworks: ReactJS, Vite.</li>
          <li>- Server & Database: NodeJS + MongoDB</li>
          <li>
            - Libraries: ExpressJS, OAuth, JWT, Mongoose, AWS-SDK , Tailwindcss,
            Antd, Swiper, Axios,...{" "}
          </li>
          <li>- Cloud: AWS-S3, AWS-EC2, MongoDB Atlas, Render, Vercel</li>
          <li>- Project: </li>
        </ul>
      </div>
      <div className="flex laptopsm:items-center laptopsm:my-11">
        <a
          href="/donate"
          className="text-[#064180] font-sans font-bold cursor-pointer laptopsm:text-2xl laptopxl:text-3xl hover:text-[#fd5c32] mx-4"
        >
          Buy me a coffee
        </a>
        <img src={Coffee} alt="" className="" />
        <a href="/" className=" ">
          <img
            src={backPage}
            alt=""
            className="cursor-pointer laptopsm:w-14 laptopsm:h-11 ml-56 "
          />
        </a>
      </div>
    </div>
  );
}
