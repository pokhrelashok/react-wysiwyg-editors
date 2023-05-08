import React, { useEffect } from 'react';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Editor } from 'react-draft-wysiwyg';
import { convertFromHTML, convertToHTML } from 'draft-convert';

function ReactDraft({ value = "", onChange = () => { } }) {
  const [editorState, setEditorState] = React.useState(
    () => EditorState.createEmpty(),
  );
  const onEditorStateChange = (state) => {
    setEditorState(state)
    const html = convertToHTML(state.getCurrentContent())
    onChange(html)
  }

  useEffect(() => {
    const blocksFromHTML = convertFromHTML(value);
    const contentState = blocksFromHTML ? EditorState.createWithContent(blocksFromHTML) : EditorState.createEmpty();
    setEditorState(contentState);
  }, [value]);

  return (<Editor
    editorState={editorState}
    onEditorStateChange={onEditorStateChange}
  />);
}

export default ReactDraft;
