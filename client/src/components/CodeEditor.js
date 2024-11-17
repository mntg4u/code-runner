import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import axios from 'axios';
import API_URL from '../utils/api';

function CodeEditor() {
  const [language, setLanguage] = useState('54'); // Python
  const [code, setCode] = useState('// Write your code here');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const runCode = async () => {
    try {
      const res = await axios.post(`${API_URL}/api/run`, {
        language,
        source_code: code,
        input,
      });
      setOutput(res.data.stdout || res.data.stderr);
    } catch (err) {
      setOutput('Error in code execution');
    }
  };

  return (
    <div>
      <select onChange={(e) => setLanguage(e.target.value)}>
        <option value="54">Python</option>
        <option value="62">JavaScript</option>
        <option value="50">C++</option>
      </select>
      <Editor
        height="50vh"
        theme="vs-dark"
        defaultLanguage="python"
        value={code}
        onChange={(value) => setCode(value)}
      />
      <textarea placeholder="Input" value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={runCode}>Run Code</button>
      <pre>{output}</pre>
    </div>
  );
}

export default CodeEditor;
