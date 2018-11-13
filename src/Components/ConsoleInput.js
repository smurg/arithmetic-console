import React from 'react';
import PropTypes from 'prop-types';

const ConsoleInput = ({ command, updateCommand, keyPressed }) => {
  return (
    <div className="input-group">
      <input type='text' className="form-control" value={command} onChange={updateCommand} onKeyDown={keyPressed} />
    </div>
  )
};
ConsoleInput.propType = {
  command: PropTypes.string.isRequired,
  updateCommand: PropTypes.func.isRequired,
  keyPressed: PropTypes.func.isRequired
};
export default ConsoleInput;
