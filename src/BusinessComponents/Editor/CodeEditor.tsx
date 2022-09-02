import React from 'react';
import Editor from '@monaco-editor/react';

const CodeEditor: React.FC = () => {
  return (
    <Editor
      theme="vs-dark"
      height="90vh"
      defaultLanguage="javascript"
      defaultValue="// some comment"
    />
  );
};

export default CodeEditor;
