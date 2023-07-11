//@ts-check
import { markdown } from "@codemirror/lang-markdown";
import { tokyoNight } from "@uiw/codemirror-theme-tokyo-night";
import CodeMirror from "@uiw/react-codemirror";
import { marked } from "marked";
import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [text, setText] = useState("");
  const onChange = React.useCallback((value, viewUpdate) => {
    setText(marked(value));
  }, []);
  return (
    <div className="container">
      <CodeMirror
        value=""
        width="50vw"
        height="100vh"
        extensions={[markdown()]}
        onChange={onChange}
        theme={tokyoNight}
      />
      <div
        dangerouslySetInnerHTML={{ __html: text }}
        className="markdown-area"
      ></div>
    </div>
  );
}
