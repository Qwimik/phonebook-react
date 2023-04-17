import { RotatingLines } from 'react-loader-spinner';
import { LoaderContainer } from 'components/App/App.styled';

export const Spinner = ({ width = '25' }) => {
  return (
    <LoaderContainer>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="2"
        animationDuration="0.75"
        width={width}
        visible={true}
      />
    </LoaderContainer>
  );
};
