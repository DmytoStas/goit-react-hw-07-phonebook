import styled from '@emotion/styled';
import { TailSpin } from 'react-loader-spinner';

export const StyledLoader = styled(TailSpin)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
`;
