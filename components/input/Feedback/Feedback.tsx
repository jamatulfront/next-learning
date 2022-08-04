import { ReactNode } from "react";

import styled from "@emotion/styled";

type Props = {
  isValid?: boolean;
  children: ReactNode;
};

export const Feedback = styled.span<Props>`
  color: ${({ isValid, theme }) =>
    isValid ? theme.font.valid : theme.font.invalid};
`;

export const ConditionalFeedback = ({ children }: Props) =>
  children ? <Feedback>{children}</Feedback> : <>&nbsp;</>;
