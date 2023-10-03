import { WorkPost } from './Work'
import { useSelector } from 'react-redux';
import "./Works.css"

export function Works() {
	const count = useSelector((state) => state.works);


	const NewWorkPost = count.map((item) => {
		return <WorkPost
			photo={item.photo}
			title={item.title}
			text={item.text}
			link={item.link}
			nextPage={item.nextPage}
			titleUA={item.titleUA}
			textUA={item.textUA}
		/>
	})

	return (
		<section className="works__container">
			{NewWorkPost}
		</section>
	)
}