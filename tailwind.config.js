export default { content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [require("daisyui")],

	daisyui: {
		themes: [
			{
				'rosepine-moon': {
					"primary": "#c4a7e7",
					"secondary": "#ea9a97",
					"accent": "#c4a7e7",
					"neutral": "#2a273f",
					"base-100": "#232136",
					"info": "#3e8fb0",
					"success": "#9ccfd8",
					"warning": "#f6c177",
					"error": "#eb6f92",
				}
			},
			"dark"
		],
		darkTheme: "rosepine-moon",
		base: true,
		styled: true,
		prefix: "dui-",
	}
};
