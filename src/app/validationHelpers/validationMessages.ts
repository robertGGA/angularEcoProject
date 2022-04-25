export const validation_messages = {
	'username': [
		{ type: 'required', message: 'Это поле обязательное' },
		{ type: 'minlength', message: 'Имя пользователя должно быть больше 5 символов' },
		{ type: 'maxlength', message: 'Имя пользователя должно быть меньше 20 символов' },
		{ type: 'pattern', message: 'Имя пользователся должно содержать только буквы' },
	],
	'phoneNumber':[
		{ type: 'required', message: 'Это поле обязательно' },
		{ type: 'pattern', message: 'Неправильный формат ввода' }
	],
	'email': [
		{ type: 'required', message: 'Это поле обязательно' },
		{ type: 'pattern', message: 'Неправильный формат почты' }
	],
	'confirm_password': [
		{ type: 'required', message: 'Это поле обязательно' },
		{ type: 'areEqual', message: 'Пароли не совпадают' }
	],
	'password': [
		{ type: 'required', message: 'Это поле обязательно' },
		{ type: 'minlength', message: 'Пароль должен быть больше 5 символов' },
		{ type: 'pattern', message: 'Пароль должен содержать хотяя бы одну заглавную букву, цифру и строчную букву' }
	],
}
