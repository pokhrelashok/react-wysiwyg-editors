import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from 'ckeditor5-essentials-build';
const customColorPalette = [
  {
    color: 'white',
    label: 'White'
  },
  {
    color: 'black',
    label: 'Black'
  },
  {
    color: 'red',
    label: 'Red'
  },
  {
    color: 'blue',
    label: 'Blue'
  },
  {
    color: 'yellow',
    label: 'Yellow'
  },
];

const ReactCk = ({ value = "", onChange = () => { } }) => {
  return (<CKEditor
    editor={ClassicEditor}
    data={value}
    config={{
      fontColor: {
        colors: customColorPalette
      },
      fontBackgroundColor: {
        colors: customColorPalette
      }
    }}
    onChange={(event, editor) => {
      const data = editor.getData();
      onChange(data)
    }}
  />
  );
}
export default ReactCk;