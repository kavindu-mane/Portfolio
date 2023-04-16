import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeArea = ({ value}) => {
  const [copy, setCopy] = useState(false);
  return (
    <React.Fragment>
      <div className="m-3 mt-8 min-w-[20rem] overflow-hidden rounded-lg bg-[#3a404d]">
        <div className="flex items-center justify-between px-2 text-xs text-white">
          <p className="text-xs">Code</p>

          {!copy ? (
            <button
              className="inline-flex items-center gap-1 py-1"
              onClick={() => {
                navigator.clipboard.writeText(value);
                setCopy(true);
                setTimeout(() => {
                  setCopy(false);
                }, 3000);
              }}
            >
              <span className="material-symbols-outlined scale-75">
                content_paste
              </span>
              Copy code
            </button>
          ) : (
            <button className="inline-flex items-center gap-1 py-1">
              <span className="material-symbols-outlined scale-75">done</span>
              Copied!
            </button>
          )}
        </div>
        <SyntaxHighlighter
          language={"jsx"}
          style={atomOneDark}
          customStyle={{
            padding: "10px",
          }}
          wrapLongLines={true}
        >
          {value}
        </SyntaxHighlighter>
      </div>
    </React.Fragment>
  );
};

export default CodeArea;
