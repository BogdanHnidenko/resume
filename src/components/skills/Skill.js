import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { DivSkill } from '../../theme/styled/tags';


export function Skill(props) {
	const RatingInput = styled.input`
		background: ${(pr) => (pr.color)};
		box-sizing: border-box;
		border: 1px solid black;
		width: 20px;
		border-radius: 50%;
		&:focus {
			outline: 0;
		}
		&::before{
			
		}
	`
	const Rating = (level) => {
		if (level === 5) {
			return (
				<>
					<RatingInput color="yellow" />
					<RatingInput color="yellow" />
					<RatingInput color="yellow" />
					<RatingInput color="yellow" />
					<RatingInput color="yellow" />
				</>
			)
		}
		if (level === 4) {
			return (
				<>
					<RatingInput color="yellow" />
					<RatingInput color="yellow" />
					<RatingInput color="yellow" />
					<RatingInput color="yellow" />
					<RatingInput color="white" />
				</>
			)
		}
		if (level === 3) {
			return (
				<>
					<RatingInput color="yellow" />
					<RatingInput color="yellow" />
					<RatingInput color="yellow" />
					<RatingInput color="white" />
					<RatingInput color="white" />
				</>
			)
		}
		if (level === 2) {
			return (
				<>
					<RatingInput color="yellow" />
					<RatingInput color="yellow" />
					<RatingInput color="white" />
					<RatingInput color="white" />
					<RatingInput color="white" />
				</>
			)
		}
		if (level === 1) {
			return (
				<>
					<RatingInput color="yellow" />
					<RatingInput color="white" />
					<RatingInput color="white" />
					<RatingInput color="white" />
					<RatingInput color="white" />
				</>
			)
		}
		if (level === 0 || level === undefined) {
			return (
				<>
					<RatingInput color="white" />
					<RatingInput color="white" />
					<RatingInput color="white" />
					<RatingInput color="white" />
					<RatingInput color="white" />
				</>
			)
		}
	};

	const animationItem = useSpring({
		from: { opacity: 0, transform: 'translate(0, 20px)' },
		to: { opacity: 1, transform: 'translate(0, 0)' },
		config: { duration: ((props.num / 3) * 1000) },
	});

	return (
		<animated.div style={animationItem} className='skills__column column-skills'>
			<DivSkill className='column-skills__item'>
				<div className='column-skills__image'>
					<img src={props.photo} alt={props.name} />
				</div>
				<h1 className='column-skills__text'>
					{props.name}
				</h1>
				<div className='column-skills__rating'>
					{Rating(props.level)}
				</div>
			</DivSkill>
		</animated.div>
		)
}