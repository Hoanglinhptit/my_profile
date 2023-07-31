import Coffee from "../assets/vscode-icons_file-type-coffeescript (1).svg";
import backPage from "../assets/ri_arrow-go-back-line.svg";

export default function Edu() {
  return (
    <div>
      <div className="flex justify-center items-center mb-6">
        <h1 className="text-[#064180] font-sans font-medium text-4xl">
          My education level and skills
        </h1>
      </div>
      <div>
        <ul className="list-none no-underline text-[#064180] font-sans font-normal laptopsm:text-xl mb-6 ml-6">
          <li className="font-semibold">Education :</li>
          <li>
            - 2019 - now : Post and Telecommunications Institute of Technology.
          </li>
          <li>- My major : IoT- Telecommunications engineering.</li>
          <li>- GPA: 2.8/4.</li>
        </ul>
        <ul className="list-none no-underline text-[#064180] font-sans font-normal laptopsm:text-xl mb-6 ml-6">
          <li className="font-semibold">Skills :</li>
          <li>
            - Good communication, enthusiastic, open, sociable with people.
          </li>
          <li>
            - Ability to work well in groups, enthusiastically participate in
            activities of agencies and organizations.
          </li>
          <li>
            - Able to work well under pressure and meet assigned deadlines.
          </li>
          <li>- Programming language : JS, Java, C++.</li>
          <li>
            - Tools : Microsoft Visual Studio, Postman, Gitlab, Github, AWS,
            EC2, S3, Render, Vercel, Figma, Bitly.
          </li>
          <li>
            - English : Able to use foreign languages, have communication skills
            and work on MSTeams, Skype, Jira, Outlook, Telegram, Slack ..
          </li>
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
        <a href="/" className="">
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
