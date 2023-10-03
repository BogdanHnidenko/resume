import calc from '../img/works/calc.png';
import redux from '../img/works/redux.png';
import signIn from '../img/works/sign-in.png';
import snake from '../img/works/snake.png';


const initialState = {
	works: [
		{
			title: 'Calculator',
			titleUA: 'Калькулятор',
			photo: calc,
			text: 'This project features a calculator with a straightforward logic for performing mathematical operations',
			textUA: 'Цей проект містить калькулятор з простою логікою для виконання математичних операцій',
			link: 'https://bogdanhnidenko.github.io/myWork/calc/',
			nextPage: 'calc'
		},
		{
			title: 'Post Page',
			titleUA: 'Сторінка постів',
			photo: redux,
			text: 'The project is built using React, and it allows you to create posts',
			textUA: "Проект побудований за допомогою React і дозволяє створювати пости",
			link: 'https://bogdanhnidenko.github.io/homework21/',
			nextPage: 'redux'
		},
		{
			title: 'Sign in/up Forms',
			titleUA: 'Форми входу/реєстрації',
			photo: signIn,
			text: 'A simple project in which the correspondence of a registered user with the entered data is verified',
			textUA: "Простий проект, в якому перевіряється відповідність зареєстрованого користувача введеним даним",
			link: 'https://bogdanhnidenko.github.io/homework20/',
			nextPage: 'signIn'
		},
		{
			title: 'Snake game',
			titleUA: 'Гра змійка',
			photo: snake,
			text: 'An example of a snake game using HTML, CSS, and JavaScript',
			textUA: "Приклад гри змійка, з використанням HTML, CSS, JavaScript",
			link: 'https://bogdanhnidenko.github.io/myWork/Snake_game/',
		}
	]
}

export const reducerWorks = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
}