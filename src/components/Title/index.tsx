import styled from 'styled-components';

interface ITitle {
	children: string;
}

const StyledTitle = styled.h1`
	font-size: 1.5rem;
`;

export function Title({ children }: ITitle) {
	return <StyledTitle>{children}</StyledTitle>;
}
