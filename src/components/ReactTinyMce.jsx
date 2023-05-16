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
          'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount', 'textcolor'
        ],
        color_map: [
          "black", "Black",
          "white", "White",
          "red", "Red",
          "green", "Green",
          "blue", "Blue",

        ],
        toolbar: 'undo redo | blocks | ' +
          'bold italic forecolor fontfamily fontsize | alignleft aligncenter ' +
          'alignright alignjustify | bullist numlist outdent indent | ' +
          'removeformat',
        fontsize_formats: '8pt 10pt 12pt 14pt 18pt 24pt 36pt',
        branding: false,
        content_style: 'body { font-family:TImes New Roman,Arial,sans-serif; font-size:14px }',
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
