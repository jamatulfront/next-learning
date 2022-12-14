import { FC, ReactNode } from "react";
import styled from "@emotion/styled";

import { boxShadow, borderRadius } from "@/components/styles";

const Section = styled.section`
  ${borderRadius};
  padding: 1vmin 4vmin 4vmin;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.font.regular};
  ${({ theme }) =>
    boxShadow(theme.components.shadow1, theme.components.shadow2)}
`;

export type Props = {
  /** Header */
  header: ReactNode;
  children: ReactNode;
};

export const Tile: FC<Props> = ({ header, children, ...rest }) => (
  <Section {...rest}>
    <h2>{header}</h2>
    {children}
  </Section>
);
