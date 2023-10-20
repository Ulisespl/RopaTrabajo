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
	],
	prendasSeleccion: [
		{Cantidad: 1, Articulo: 'CASCO', 	Descripcion: 'CASCO DE SEGURIDAD', 						Modelo: 'LRD55', 		Talla: ''},
		{Cantidad: 4, Articulo: 'BOTAS', 	Descripcion: 'BOTAS DIELÉCTRICAS', 						Modelo: 'CASQUILLO', 	Talla: ''},
		{Cantidad: 5, Articulo: 'CAMISOLA', Descripcion: 'CAMISOLA PARA PERSONAL DE CAMPO', 		Modelo: 'MEZCLILLA', 	Talla: ''},
		{Cantidad: 5, Articulo: 'PANTALÓN', Descripcion: 'PANTALÓN PARA PERSONAL DE CAMPO', 		Modelo: 'MEZCLILLA', 	Talla: ''},
		{Cantidad: 2, Articulo: 'CHAMARRA', Descripcion: 'CHAMARRA PARA PERSONAL DE CAMPO', 		Modelo: 'MEZCLILLA', 	Talla: ''},
		{Cantidad: 1, Articulo: 'ANTIAGUA', Descripcion: 'EQUIPO ANTIAGUA PARA PERSONAL DE CAMPO', 	Modelo: 'IMPERMEABLE', 	Talla: ''},
	],
	tallas1:[
		{Descripcion: 'Chico'},
		{Descripcion: 'Mediano'},
		{Descripcion: 'Grande'},
		{Descripcion: 'ExtraGrande'}
	],
	tallas2: [
		{Descripcion: 22},
		{Descripcion: 23},
		{Descripcion: 24},
		{Descripcion: 25},
		{Descripcion: 26},
		{Descripcion: 27},
		{Descripcion: 28},
		{Descripcion: 29},
		{Descripcion: 30},
		{Descripcion: 31},
		{Descripcion: 32},
		{Descripcion: 33},
		{Descripcion: 34},
		{Descripcion: 35},
		{Descripcion: 36},
	],
	tallas3: [

	]

};

export default config;