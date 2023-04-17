import React, { useState, lazy, Suspense } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Helmet } from "react-helmet";
import favicon from "./favicon.ico";
import webimg from "./webimg.png";
const Circular = lazy(() => import("./Circular"));
const LogoArea = lazy(() => import("./LogoArea"));
const Linear = lazy(() => import("./Linear"));

const ReactProgressBar = () => {
  const [copy, setCopy] = useState(false);
  const [circular, setCircular] = useState(true);

  return (
    <React.Fragment>
      <Helmet>
        <meta charset="utf-8" />
        <link rel="icon" href={favicon} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="React Percentage Bar | Customizable Circular and Linear percentage progress bar for react apps"
        />
        <meta name="title" content="React Percentage Bar" />
        <meta name="copyright" content="Kavindu Manahara" />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.kavindu.me/projects/react-percentage-bar"
        />
        <meta property="og:title" content="React Percentage Bar" />
        <meta
          property="og:description"
          content="React Percentage Bar | Customizable Circular and Linear percentage progress bar for react apps"
        />
        <meta property="og:image" itemprop="image" content={webimg} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content="https://www.kavindu.me/projects/react-percentage-bar"
        />
        <meta name="twitter:creator" content="@kavindu_mane" />
        <meta name="twitter:title" content="React Percentage Bar" />
        <meta
          name="twitter:description"
          content="React Percentage Bar | Customizable Circular and Linear percentage progress bar for react apps"
        />
        <meta property="twitter:image" content={webimg} />
        <title>React Percentage Bar</title>
      </Helmet>

      <Suspense
        fallback={
          <p className="flex h-screen items-center justify-center text-lg italic">
            Loading please wait...
          </p>
        }
      >
        <div className="w-100 flex flex-col items-center bg-white">
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
              <span className="material-symbols-outlined cursor-pointer pe-2">
                done
              </span>
            ) : (
              <span
                className="material-symbols-outlined cursor-pointer pe-2"
                onClick={() => {
                  setCopy(true);
                  setTimeout(() => {
                    setCopy(false);
                  }, 3000);
                }}
              >
                content_paste
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
          <h3 className="mt-10 w-screen bg-slate-700 py-2 text-center font-kurale text-sm italic text-white">
            <span className="font-bold text-yellow-500">&lt;/&gt;</span>
            &ensp;With&ensp;&#10084;&#65039;&ensp;Kavindu Manahara
          </h3>
        </div>
      </Suspense>
    </React.Fragment>
  );
};

export default ReactProgressBar;
