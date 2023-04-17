import { RotatingLines } from 'react-loader-spinner';
import { LoaderContainer } from 'components/App/App.styled';

export const Spinner = () => {
  return (
    <LoaderContainer>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="2"
        animationDuration="0.75"
        width="25"
        visible={true}
      />
    </LoaderContainer>
  );
};
