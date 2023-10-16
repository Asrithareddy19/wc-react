import React, { useState } from 'react';

function WordCounter() {
  const [text, setText] = useState('');
  const wordCount = text.trim().split(/\s+/).length;

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <textarea
        rows="5"
        placeholder="Enter some text..."
        value={text}
        onChange={handleTextChange}
      />
      <p>Word Count: {wordCount}</p>
    </div>
  );
}

export default WordCounter;
