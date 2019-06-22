import i18n from 'i18next';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
	en: {
		translation: {
			'Email': 'Email',
			'Password': 'Password',
			'Sign In': 'Sign In'
		}
	},
	es: {
		translation: {
			'Email': 'Email',
			'Password': 'Contraseña',
			'Sign In': 'Ingresar'
		}
	}
};

i18n
	.init({
		resources,
		lng: 'en',

		keySeparator: false, // we do not use keys in form messages.welcome

		interpolation: {
			escapeValue: false // react already safes from xss
		}
	});

export default i18n;
