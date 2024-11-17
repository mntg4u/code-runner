import React from 'react';
import CodeEditor from './components/CodeEditor';
import './styles/App.css';

function App() {
  return (
    <div className="editor-container">
      <h1>Multi-Language Code Runner</h1>
      <CodeEditor />
    </div>
  );
}

export default App;
