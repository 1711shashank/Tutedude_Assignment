import React from 'react';

const FormFooter = ({ onSubmit }) => (
  <button type="submit" className="form-button" onClick={onSubmit}>
    Register
  </button>
);

export default FormFooter;
