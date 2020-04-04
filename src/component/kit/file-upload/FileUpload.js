import React from 'react';
import './FileUpload.scss';
import PropTypes from 'prop-types';

const FileUpload = ({
  title,
  onChange
}) => {
  let inputTag;

  return(
    <span>
      <button
        className="file-upload_button"
        onClick={() => {inputTag.click();}}>{title}</button>
      <input 
        className="file-upload_input" 
        type="file" 
        ref={input => { inputTag = input; }}
        onChange={onChange}
      />
    </span>
  );
};

FileUpload.propTypes = {
  title: PropTypes.string,
  onChange: PropTypes.func.isRequired
};
FileUpload.defaultProps = {
  title: 'Upload',
};

export default FileUpload;
