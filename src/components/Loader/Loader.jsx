import { StyledLoader } from './Loader.styled';

const Loader = () => {
  return (
    <StyledLoader
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};

export default Loader;
