let config = 
{
	sys:
	{
		cataAnomalias: null,
		title: 'Ropa de Trabajo',
		short_title: 'RpT',
		author: '2023 - Depto. de T.I.',
		version: ' 1.0.0',
		descrip: "Sistema de elección de ropa de Trabajo", 
		external_links:
		{
			support: 
			{
				title: 'Centro de servicios de TI',
			}
		}
	},
	web:
	{
		route: 'Inicio',
		islogin: false,
		user: null,
		rpe: null,
		nombre: null,
		mensajes: [],
	},
	usuarioLog:
	{
		clave: '',
		Pass: '',
		Rol: '',
		Area: '',
		Nombre: ''
	},
	usuarios: [
		{clave: 'A1234', Pass: 'A1234', Rol: 'Trabajador',		Area: 'División Jalisco',  	Nombre: 'Ulises Alejandro Piña Luna'},
		{clave: 'B1234', Pass: 'B1234', Rol: 'Administrador', 	Area: 'División Norte', 	Nombre: 'Miriam Alejandra '}
	]
};

export default config;