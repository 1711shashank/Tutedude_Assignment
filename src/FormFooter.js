import React from 'react';

const FormFooter = ({ onSubmit }) => (
  <button type="submit" className="form-button" onClick={onSubmit}>
    Submit
  </button>
);

export default FormFooter;
