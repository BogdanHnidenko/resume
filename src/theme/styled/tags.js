import styled from "styled-components";
// =====================================================================================
export const DivWrapper = styled.div`
	color: ${({ theme }) => theme.colors.color};
	background: ${({ theme }) => theme.colors.background};
`;
export const LiWrapper = styled.li`
	@media (min-width: 767px){
		&:hover::after{
			background: ${({ theme }) => theme.colors.color};
		}
	}
	& a{
		color: ${({ theme }) => theme.colors.color};
	}
`;
export const LabelWrapper = styled.label`
	position: relative;
	display: inline-block;
	width: 50px;
	height: 30px;
`;
export const SliderWrapper = styled.span`
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgb(71, 71, 71);
	-webkit-transition: .4s;
	transition: .4s;
	border-radius: 34px;
	
	&:before {
		position: absolute;
		content: "";
		height: 22px;
		width: 22px;
		left: 1px;
		bottom: 4px;
		background-color: white;
		-webkit-transition: .4s;
		transition: .4s;
		border-radius: 50%;
	}
`;
export const InputWrapper = styled.input`
	opacity: 0;
	width: 0;
	height: 0;
	
	&:checked + ${SliderWrapper} {
		background-color: #2196F3;
	}
	
	&:checked + ${SliderWrapper}:before {
		-webkit-transform: translateX(26px);
		-ms-transform: translateX(26px);
		transform: translateX(26px);
	}
`;
export const ButtonApp = styled.button`
	padding: 10px;
	border-radius: ${(props) => props.var === 'en' ? '5px 0 0 5px' : '0 5px  5px 0'};
	margin-right: ${(props) => props.var === 'en' ? '2px' : '0'};
	color: ${({ theme }) => theme.colors.color};
	background: ${({ theme, active }) =>
		theme.colors.themes
			? active
				? 'rgb(121, 121, 121)'
				: 'rgb(71, 71, 71)'
			: active
				? 'rgb(121, 121, 121)'
				: 'rgb(181, 181, 181)'};
	&:hover{
		background: ${({ theme }) => theme.colors.themes ? "#9D9D9D" : "#6b6b6b"}
	}
`;
export const DivMenu = styled.div`
	background: ${({ theme }) => theme.colors.themes ? "#fff" : "#000"};
`;
// ===========================================================================================
export const AHome = styled.a`
	color: ${({ theme }) => theme.colors.color};
	background: ${({ theme }) => theme.colors.themes ? "#6b6b6b" : "#9D9D9D"};
	&:hover{
		background: ${({ theme }) => theme.colors.themes ? "#9D9D9D" : "#6b6b6b"}
	}
`;
export const SvgHome = styled.svg`
	& path{
		stroke: ${({ theme }) => theme.colors.themes ? "white" : "black"}
	}
`;
export const H1Home = styled.h1`
	max-width: ${(props) => props.ukr ? "500px" : "400px"};
`;
// ========================================================================================
export const DivSkill = styled.div`
	border: 1px solid ${({ theme }) => theme.colors.themes ? "#fff" : "#000"};
	&:hover{
		background: ${({ theme }) => theme.colors.themes ? "rgb(71, 71, 71)" : "rgb(181, 181, 181)"};
	}
`;
// ================================================================================================
export const LiContacts = styled.li`
	& a .fa-brands {
		color: ${({ theme }) => theme.colors.themes ? "rgb(181, 181, 181)" : "rgb(71, 71, 71)"};
	}
`;
// ===============================================================================================
export const SectionWorks = styled.section`
	background: ${({ theme }) => theme.colors.themes ? "rgb(47, 47, 47)" : "rgb(201, 201, 201)"};
	&
`;
export const AWorks = styled.a`
	color: ${({ theme }) => theme.colors.color};
	background: ${({ theme }) => theme.colors.themes ? "#6b6b6b" : "#9D9D9D"};
	&:hover{
		background: ${({ theme }) => theme.colors.themes ? "#9D9D9D" : "#6b6b6b"}
	}
`;
