import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

interface ContainerProps {
  children?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

export const Container: React.FC<ContainerProps> = React.memo(({ children, size = 'md' }) => {
  const { siteWidth } = useContext(ThemeContext);
  let width: number;
  switch (size) {
    case 'sm':
      width = siteWidth / 2;
      break;
    case 'md':
      width = (siteWidth * 2) / 3;
      break;
    case 'lg':
    default:
      width = siteWidth;
  }

  return <StyledContainer width={width}>{children}</StyledContainer>;
});

interface StyledContainerProps {
  width: number;
}

const StyledContainer = styled.div<StyledContainerProps>`
  box-sizing: border-box;
  margin: 0 auto;
  max-width: ${(props) => props.width}px;
  padding: 0 ${(props) => props.theme.spacing[4]}px ${(props) => props.theme.spacing[4]}px;
  width: 100%;
  background-color: rgba(192, 192, 208, 0.8);
  background-blend-mode: lighten;
  min-height: 100vh;
`;
