import {
  Linkedin,
  Instagram,
  Email,
} from "../utils/icons";
import Image from "next/image";

const Border = ({
  customClassName,
  children,
}: any) => {
  return (
    <div
      className={`p-8 rounded-lg ${customClassName}`}
    >
      {children}
    </div>
  );
};

const SummarySection = () => {
  return (
    <div className="w-screen h-screen relative">
      <div className="flex justify-center h-full items-center">
        <div className="grid grid-cols-8 grid-rows-7 gap-16">
          <div className="col-span-2 row-span-4 col-start-3">
            <Border
              customClassName={"h-full w-full"}
            >
              <Image
                src="/img/cat2.png"
                className="rounded-full border-white border-2"
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </Border>
          </div>
          <div className="col-span-2 row-span-2 col-start-5 row-start-2">
            <Border customClassName="">
              <h1 className="text-2xl body-font font-asher my-4">
                Hello World!!
              </h1>
              <h3 className="body-font font-typold">
                My name is Christos. I'm a Front
                End Software Engineer with ReactJS
                expertise based in Greece, but
                willing to relocate ;)
              </h3>
            </Border>
          </div>
          <div className="col-span-2 row-span-2 col-start-5 row-start-4">
            <Border customClassName="ml-8">
              <h3 className="body-font font-typold">
                Ever since my first snippet of
                code, I've always had a special
                interest in software development.
                I wanna expand my knowledge by
                working in every kind of industry,
                wether it's an app or a website.
              </h3>
            </Border>
          </div>
          <div className="col-span-2 row-span-2 col-start-5 row-start-6">
            <Border customClassName="ml-16">
              <h3 className="body-font font-typold">
                Over the last 2.5+ years, I've had
                the opportunity to develop a
                handful of technically difficult
                projects. I expertise on React,
                but I also know and want to learn
                many more languages.
              </h3>
            </Border>
          </div>
          <div className="col-span-2 row-span-2 col-start-3 row-start-5 mt-4">
            <div className="text-center border-b-2 w-fit m-auto">
              <h1 className="my-2 text-xl body-font font-typold">
                Skillset
              </h1>
            </div>
            <Border
              customClassName={
                "h-full w-full flex flex-row gap-8 flex-wrap"
              }
            >
              <Image
                src="/img/react.svg"
                alt="react logo"
                width={50}
                height={50}
              />
              <Image
                src="/img/next.svg"
                alt="react logo"
                width={50}
                height={50}
              />
              <Image
                src="/img/vue.svg"
                alt="react logo"
                color={"white"}
                width={50}
                height={50}
              />
              <Image
                src="/img/ts.svg"
                alt="react logo"
                width={50}
                height={50}
              />
            </Border>
          </div>
          <div className="col-span-8 row-span-4">
            <div className="flex flex-row justify-center gap-72 h-full items-center">
              <button className="text-2xl">
                <Email />
              </button>
              <button className="text-2xl">
                <Linkedin />
              </button>
              <button className="text-2xl">
                <Instagram />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="icon-scroll" />
    </div>
  );
};

export default SummarySection;