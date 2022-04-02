import { Children } from 'react';
import { StyledContainer } from './styled';

interface ContainerProps {
	children: React.ReactNode;
}

export function Container({ children }: ContainerProps) {
	return <StyledContainer>{children}</StyledContainer>;
}
