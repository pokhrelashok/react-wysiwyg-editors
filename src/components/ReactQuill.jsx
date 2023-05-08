import Quill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const toolbarOptions = {
  container: [
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [{ 'font': [] }],
    [{ 'size': ['small', false, 'large', 'huge'] }],
    [{ 'color': [] }, { 'background': [] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ 'script': 'sub' }, { 'script': 'super' }],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
    ['link', 'image', 'video'],
    ['clean']
  ],
  handlers: {}
};
const ReactQuill = ({ value = "", onChange = () => { } }) => {
  const handleChange = (newValue) => {
    onChange(newValue);
  };

  return (
    <Quill
      value={value}
      onChange={handleChange}
      modules={{ toolbar: toolbarOptions }}
    />
  );
};

export default ReactQuill;