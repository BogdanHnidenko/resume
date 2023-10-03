import { Skill } from './Skill';
import { useSelector } from 'react-redux';
import './Skills.css';

export function Skills() {
	const skill = useSelector((state) => state.skills);


	const NewItem = skill.map((item, id) => {
		return <Skill
			name={item.name}
			photo={item.photo}
			level={item.level}
			num={id += 1}
		/>

	})

	console.log(NewItem)

	return (
		<section className="skills__container">
			<div className='skills__columns'>
				{NewItem}
			</div>
		</section>
	)
}