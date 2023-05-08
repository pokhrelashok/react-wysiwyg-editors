import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from 'ckeditor5-essentials-build';

const ReactCk = ({ value = "", onChange = () => { } }) => {
  return (<CKEditor
    editor={ClassicEditor}
    data={value}
    onChange={(event, editor) => {
      const data = editor.getData();
      onChange(data)
    }}
  />
  );
}
export default ReactCk;