import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div style={{ position: 'fixed', top: '50%', left: '50%' }}>
      {' '}
      <ThreeDots
        height="100"
        width="100"
        radius="10"
        color="#30789f"
        ariaLabel="three-dots-loading"
        wrapperStyle={{ justifyContent: 'left' }}
        visible={false}
      />
    </div>
  );
};
