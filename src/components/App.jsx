import { useEffect, useState } from 'react';
import { getPhotos } from '../helpers/Api';
import { Searchbar } from './Searchbar/Searchbar';
import { AppWrapper } from './App.styled';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';

export const App = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(null);
  const [loading, setLoading] = useState(1);

  // state = {
  //   images: [],
  //   searchQuery: '',
  //   page: 1,
  //   totalHits: null,
  //   loading: false,
  // };

  useEffect(() => {
    if (searchQuery.trim() === '') return;
    setLoading(true);

    getPhotos(searchQuery, page).then(res => {
      if (!res.hits.length) {
        alert(`Please, try another one`);
        setLoading(false);
        return;
      }
      setImages(prevState =>
        page === 1 ? res.hits : [...prevState, ...res.hits]
      );
      setTotalHits(res.totalHits);
      setLoading(false);
    });
  }, [searchQuery, page]);

  const handelSubmit = text => {
    setSearchQuery(text);
    setImages([]);
    setPage(1);
    setTotalHits(null);
  };

  const handelLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };
  return (
    <AppWrapper>
      <Searchbar onSubmit={handelSubmit} />
      {loading && <Loader />}
      {images && <ImageGallery imagesList={images} />}
      {totalHits > 12 && (
        <>
          <Button onShow={handelLoadMore} />
        </>
      )}
    </AppWrapper>
  );
};
