import React, { Component } from 'react';
import styled from 'styled-components/macro';

const StyledButton = styled.button`
	-webkit-tap-highlight-color: none;
	appearance: none;
	background-color: white;
	border: 1px solid ${props => props.theme.accent};
	border-radius: 0.25rem;
	color: ${props => props.theme.accent};
	cursor: pointer;
	font-weight: bold;
	outline: none;
	padding: 0.5rem 1rem;
	user-select: none;

	&:active {
		background-color: lightgoldenrodyellow;
	}
`;

export class Button extends Component {
	render() {
		const { children, onClick } = this.props;

		return <StyledButton onClick={onClick}>{children}</StyledButton>;
	}
}

export default StyledButton;
