import React, { useState, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';

function ReactTinyMce({ value = '', onChange = () => { } }) {
  const [editorValue, setEditorValue] = useState(value);
  useEffect(() => {
    setEditorValue(value);
  }, [value]);

  const handleEditorChange = (content, editor) => {
    setEditorValue(content)
    onChange(content);
  };
  return (
    <Editor
      apiKey={import.meta.env.VITE_TINY_MCE_API_KEY}
      value={editorValue}
      onEditorChange={handleEditorChange}
      init={{
        height: 500,
        menubar: false,
        plugins: [
          'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
          'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
          'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
        ],
        toolbar: 'undo redo | blocks | ' +
          'bold italic forecolor | alignleft aligncenter ' +
          'alignright alignjustify | bullist numlist outdent indent | ' +
          'removeformat | help',
        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
        // setup: function (editor) {
        //   console.log(editor)
        //   editor.ui.registry.addButton('customInsertButton', {
        //     text: 'My Button',
        //     onAction: function (_) {
        //       editor.insertContent('&nbsp;<strong>It\'s my button!</strong>&nbsp;');
        //     }
        //   });
        // },
      }}
    />
  );
}

export default ReactTinyMce;