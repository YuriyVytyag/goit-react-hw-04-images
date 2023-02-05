import { useState } from 'react';
import { FcSearch } from 'react-icons/fc';
import {
  SearchbarWrapper,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';
export function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');
  // const [page, setPage] = useState(1);

  const handleNameChange = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (query.trim() === '') {
      return alert('Введите название');
    }
    onSubmit(query);
  };

  return (
    <SearchbarWrapper>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormInput
          type="text"
          value={query}
          onChange={handleNameChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <SearchFormButton type="submit">
          <FcSearch size="2rem" />
          <SearchFormButtonLabel></SearchFormButtonLabel>
        </SearchFormButton>
      </SearchForm>
    </SearchbarWrapper>
  );
}
