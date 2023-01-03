// interface TextProps {
//   color?: string;
//   size?: 'huge';
//   marginTop?: number;
//   marginRight?: number;
//   marginBottom?: number;
//   marginLeft?: number;
//   fontWeight?: 'light' | 'regular' | 'medium' | 'semibold' | 'bold';
//   textAlign?: 'left' | 'center' | 'right';
//   lineHeight?: number;
//   theme?: 'default' | 'primary' | 'secondary' | 'danger' | 'light' | 'info';
// }
import { Paragraph } from 'react-native-paper';

import styled from 'styled-components';

interface TextProps {
  color?: string;
  marginTop?: number;
  marginBottom?: number;
  marginRight?: number;
  marginLeft?: number;
}

export const T = styled(Paragraph)<TextProps>`
  font-size: 14px;
  line-height: 18px;
  margin: 0;
  color: ${({ theme }) => theme.colors.gray500};
  ${({ marginTop }) => marginTop && `margin-top: ${marginTop}px;`}
  ${({ marginBottom }) => marginBottom && `marign-bottom: ${marginBottom}px;`}
  ${({ marginRight }) => marginRight && `marign-bottom: ${marginRight}px;`}
`;
