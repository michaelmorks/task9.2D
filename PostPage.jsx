import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import ReactMarkdown from "react-markdown";

export default function PostPage() {
  const [code, setCode] = useState("// Write your code here");
  const [markdown, setMarkdown] = useState("# Write your post here");

  return (
    <div className="page post-page">
      <div className="editor-section">
        <h3>Code Editor</h3>
        <div className="code-editor">
          <CodeMirror
            value={code}
            height="200px"
            extensions={[javascript()]}
            onChange={(value) => setCode(value)}
          />
        </div>
        <pre>{code}</pre>
      </div>

      <div className="editor-section">
        <h3>Markdown Editor</h3>
        <textarea
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        />
        <h4>Preview:</h4>
        <div className="markdown-preview">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
