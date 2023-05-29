const registrationForm = document.querySelector('#registration-form');
const loginForm = document.querySelector('#login-form');

// Функция для отправки данных формы на сервер
function sendForm(formData, formUrl) {
	fetch(formUrl, {
		method: 'POST',
		body: formData
	})
	.then(response => response.json())
	.then(data => console.log(data))
	.catch(error => console.error(error));
}

// Обработчик отправки формы регистрации
registrationForm.addEventListener('submit', event => {
	event.preventDefault();
	const formData = new FormData(event.target);
	sendForm(formData, '/register');
});

// Обработчик отправки формы авторизации
loginForm.addEventListener('submit', event => {
	event.preventDefault();
	const formData = new FormData(event.target);
	sendForm(formData, '/login');
});