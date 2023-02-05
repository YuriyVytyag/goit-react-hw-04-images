import { useState } from 'react';
import { GalleryItem, ImageGalleryItemImage } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';

export const ImageGalleryItem = ({ webformatURL, tags, largeImageURL }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

  return (
    <GalleryItem>
      <ImageGalleryItemImage
        onClick={toggleModal}
        src={webformatURL}
        alt={tags}
      />
      {isModalOpen && (
        <Modal modalImg={largeImageURL} tags={tags} closeModal={toggleModal} />
      )}
    </GalleryItem>
  );
};

// state = {
//     picture: null,
//     status: 'idle',
//     error: null,
//   };
//   componentDidUpdate(prevProps, prevState) {
//     const prevName = prevProps.imageName;
//     const nextName = this.props.imageName;

//     if (prevName !== nextName) {
//       console.log('Changed name');
//       this.setState({ status: 'pending' });
//       fetch(
//         `https://pixabay.com/api/?key=32552516-7a8b8b8a438842b22faf37c20&q=${nextName}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12`
//       )
//         .then(res => {
//           if (res.ok) {
//             return res.json();
//           }
//           return Promise.reject(
//             new Error(`Нет картинки с таким именем ${nextName}`)
//           );
//         })
//         .then(picture => this.setState({ picture, status: 'resolved' }))
//         .catch(error => this.setState({ error, status: 'rejected' }));
//     }
//   }
//   render() {
//     const { picture, error, status } = this.state;

//     if (status === 'idle') {
//       return;
//     }
//     if (status === 'pending') {
//       return <div className="">{status}</div>;
//     }
//     if (status === 'rejected') {
//       return <h2>{error.message}</h2>;
//     }
//     if (status === 'resolved') {
