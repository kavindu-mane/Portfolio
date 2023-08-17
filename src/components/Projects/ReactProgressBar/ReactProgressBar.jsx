import React, { useState, lazy } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Helmet } from "react-helmet";
import favicon from "./favicon.ico";
import webimg from "./webimg.png";
import { GoPaste } from "react-icons/go";
import { MdDone } from "react-icons/md";
const Circular = lazy(() => import("./Circular"));
const LogoArea = lazy(() => import("./LogoArea"));
const Linear = lazy(() => import("./Linear"));

const ReactProgressBar = () => {
  const [copy, setCopy] = useState(false);
  const [circular, setCircular] = useState(true);

  return (
    <React.Fragment>
      <Helmet>
        <link rel="icon" href={favicon} />
        <meta
          name="url"
          property="og:url"
          content="https://www.kavindu.me/projects/react-percentage-bar"
        />
        <meta name="title" property="og:title" content="React Percentage Bar" />
        <meta
          name="description"
          property="og:description"
          content="Demonstration and User Guide of React Percentage Bar npm package | Customizable Circular and Linear percentage progress bar for react apps."
        />
        <meta property="og:image" itemprop="image" content={webimg} />

        <meta
          name="twitter:url"
          content="https://www.kavindu.me/projects/react-percentage-bar"
        />
        <meta name="twitter:title" content="React Percentage Bar" />
        <meta
          name="twitter:description"
          content="Demonstration and User Guide of React Percentage Bar npm package | Customizable Circular and Linear percentage progress bar for react apps."
        />
        <meta property="twitter:image" content={webimg} />
        <title>React Percentage Bar</title>
      </Helmet>
      <div className="flex w-screen flex-col items-center bg-white">
        {/* logo */}
        <LogoArea />

        {/*  download with npm */}
        <h2 className="mt-10 w-[20.5rem] text-left text-lg italic md:w-[30rem]">
          Download with npm
        </h2>
        <div className="mt-3 flex items-center justify-between rounded-md border-2 bg-slate-50 py-1 md:w-[30rem]">
          <SyntaxHighlighter
            language={"bash"}
            style={atomOneLight}
            customStyle={{
              marginLeft: "5px",
              width: "18rem",
            }}
            wrapLongLines={true}
          >
            {"npm i react-percentage-bar"}
          </SyntaxHighlighter>
          {copy ? (
            <span className="cursor-pointer pe-2">
              <MdDone className="relative h-5 w-5 text-slate-700" />
            </span>
          ) : (
            <span
              className="cursor-pointer pe-2"
              onClick={() => {
                setCopy(true);
                setTimeout(() => {
                  setCopy(false);
                }, 3000);
              }}
            >
              <GoPaste className="relative h-5 w-5 text-slate-700" />
            </span>
          )}
        </div>

        {/* fork me */}
        <a
          className="mt-5 flex cursor-pointer rounded-lg bg-gradient-to-r from-fuchsia-600 to-blue-700 p-2 
        text-white duration-300 ease-in hover:scale-90"
          href="https://github.com/kavindu-mane/react-percentage-bar/"
        >
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg"
            alt="github"
            width={"20px"}
            height={"20px"}
            style={{ filter: "invert()" }}
          />
          &ensp;Fork me on GitHub
        </a>

        {/* button div */}
        <div className="my-10">
          <button
            className={
              (circular ? "bg-blue-600 text-white " : "text-blue-600 ") +
              "mx-2 scale-90 rounded-lg border border-blue-600 px-5 py-2 duration-300 ease-in hover:bg-blue-600 hover:text-white sm:mx-4 sm:scale-100"
            }
            onClick={() => setCircular(true)}
          >
            Circular
          </button>
          <button
            className={
              (!circular ? "bg-blue-600 text-white " : "text-blue-600 ") +
              "mx-2 scale-90 rounded-lg border border-blue-600 px-5 py-2 text-blue-600 duration-300 ease-in hover:bg-blue-600 hover:text-white sm:mx-4 sm:scale-100"
            }
            onClick={() => setCircular(false)}
          >
            Linear
          </button>
        </div>

        {/* element */}
        {circular ? <Circular /> : <Linear />}

        {/* developer */}
        <p className="mt-10 w-screen bg-slate-700 py-2 text-center text-sm italic text-white">
          <span className="font-bold text-yellow-500">&lt;/&gt;</span>
          &ensp;With&ensp;&#10084;&#65039;&ensp;Kavindu Manahara
        </p>
      </div>
    </React.Fragment>
  );
};

export default ReactProgressBar;
