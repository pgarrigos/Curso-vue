const { createApp, ref } = Vue;

const app = createApp({
	// template: `
	//     <h1>{{message}}</h1>
	//     <p>-{{author}}</p>
	// `,

	setup() {
		const message = ref("I'm Batman");
		const author = ref('Bruce Wayne');

		const changeQuote = () => {
			message.value = 'Hola, soy Goku';
			author.value = 'Goku';
		};

		// setTimeout(() => {
		// 	message.value = 'Hola, Soy Goku';
		// 	author.value = 'Goku';
		// }, 1500);

		return {
			author,
			message,
			changeQuote,
		};
	},
});

app.mount('#myApp');
