import { useState } from 'react';

export const SearchBar = (props) => {
  const { onSubmit } = props;
  const [term, setTerm] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(term);
  };

  return (
    <div className="ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>Image Search</label>
          <input
            type="text"
            name="search"
            placeholder=""
            value={term}
            onChange={(e) => {
              setTerm(e.target.value);
            }}
          />
        </div>
      </form>
    </div>
  );
};
