import React from 'react';

import noteInputProps from './NoteInput.props';

const NoteInput = (props) => {
  let input;

  const handleClick = () => {
    props.onAdd(input.value);
    input.value = '';
    input.focus();
  };

  return (
    <div>
      <input
        type="text"
        ref={(currentElement) => { input = currentElement; }}
        placeholder="notes"
      />
      <button
        type="button"
        onClick={handleClick}
      >
        add note
      </button>
    </div>
  );
};

NoteInput.propTypes = noteInputProps;

export default NoteInput;
