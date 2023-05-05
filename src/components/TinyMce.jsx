import React, { useState, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';

function TinyMce({ value = '', onChange = () => { } }) {
  const [editorValue, setEditorValue] = useState(value);

  useEffect(() => {
    console.log(value)
    setEditorValue(value);
  }, [value]);

  const handleEditorChange = (content, editor) => {
    setEditorValue(content)
    onChange(content);
  };

  return (
    <Editor
      apiKey={"mxpxaa6zj2sj7zknftbzzl6ngnrda70x1dh2oq771bgynlk9"}
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
        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
      }}
    />
  );
}

export default TinyMce;
