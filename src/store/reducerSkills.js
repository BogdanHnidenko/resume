import htmlPhoto from '../img/skills/html.png';
import cssPhoto from '../img/skills/css.png';
import sassPhoto from '../img/skills/sass.jpg';
import jsPhoto from '../img/skills/js.png';
import gitPhoto from '../img/skills/git.png';
import reactPhoto from '../img/skills/react.png';
import reduxPhoto from '../img/skills/redux.png';
import figmaPhoto from '../img/skills/figma.png';
import vuePhoto from '../img/skills/vue.png';


const initialState = {
	skills: [
		{
			name: 'HTML5',
			photo: htmlPhoto,
			level: 5,
		},
		{
			name: 'CSS3',
			photo: cssPhoto,
			level: 5
		},
		{
			name: 'SASS',
			photo: sassPhoto,
			level: 4
		},
		{
			name: 'JavaScript',
			photo: jsPhoto,
			level: 4
		},
		{
			name: 'Git',
			photo: gitPhoto,
			level: 3
		},
		{
			name: 'React.JS',
			photo: reactPhoto,
			level: 3
		},
		{
			name: 'Vue.js',
			photo: vuePhoto,
			level: 4
		},
		{
			name: 'Redux',
			photo: reduxPhoto,
			level: 3
		},
		{
			name: 'Figma',
			photo: figmaPhoto,
			level: 4
		},
	]
}

export const reducerSkills = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
}