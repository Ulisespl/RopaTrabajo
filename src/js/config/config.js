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
		{Cantidad: 1, Articulo: 'ANTIAGUA', Descripcion: 'EQUIPO ANTIAGUA PARA PERSONAL DE CAMPO', 	Modelo: 'IMPERMEABLE', 	Talla: ''},
		{Cantidad: 4, Articulo: 'BOTAS', 	Descripcion: 'BOTAS DIELÉCTRICAS', 						Modelo: 'CASQUILLO', 	Talla: ''},
		{Cantidad: 2, Articulo: 'CHAMARRA', Descripcion: 'CHAMARRA PARA PERSONAL DE CAMPO', 		Modelo: 'MEZCLILLA', 	Talla: ''},
		{Cantidad: 5, Articulo: 'CAMISOLA', Descripcion: 'CAMISOLA PARA PERSONAL DE CAMPO', 		Modelo: 'MEZCLILLA', 	Talla: ''},
		{Cantidad: 1, Articulo: 'CASCO', 	Descripcion: 'CASCO DE SEGURIDAD', 						Modelo: 'LRD55', 		Talla: ''},
		{Cantidad: 4, Articulo: 'PANTALÓN', Descripcion: 'PANTALÓN PARA PERSONAL DE CAMPO', 		Modelo: 'MEZCLILLA', 	Talla: ''},
		
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

	],
	prendasHistorico: [
		{
			Año: 2020, Eleccion:	[
										{Cantidad: 1, Articulo: 'CASCO', 	Descripcion: 'CASCO DE SEGURIDAD', 						Modelo: 'LRD55', 		Talla: 'Mediano'},
										{Cantidad: 4, Articulo: 'BOTAS', 	Descripcion: 'BOTAS DIELÉCTRICAS', 						Modelo: 'CASQUILLO', 	Talla: '24'},
										{Cantidad: 5, Articulo: 'CAMISOLA', Descripcion: 'CAMISOLA PARA PERSONAL DE CAMPO', 		Modelo: 'MEZCLILLA', 	Talla: '27'},
										{Cantidad: 4, Articulo: 'PANTALÓN', Descripcion: 'PANTALÓN PARA PERSONAL DE CAMPO', 		Modelo: 'MEZCLILLA', 	Talla: '34'},
										{Cantidad: 2, Articulo: 'CHAMARRA', Descripcion: 'CHAMARRA PARA PERSONAL DE CAMPO', 		Modelo: 'MEZCLILLA', 	Talla: '36'},
										{Cantidad: 1, Articulo: 'ANTIAGUA', Descripcion: 'EQUIPO ANTIAGUA PARA PERSONAL DE CAMPO', 	Modelo: 'IMPERMEABLE', 	Talla: 'Mediano'}
									]
		},
		{
			Año: 2021, Eleccion:	[
										{Cantidad: 1, Articulo: 'ANTIAGUA', Descripcion: 'EQUIPO ANTIAGUA PARA PERSONAL DE CAMPO', 	Modelo: 'IMPERMEABLE', 	Talla: 'Mediano'},
										{Cantidad: 1, Articulo: 'CASCO', 	Descripcion: 'CASCO DE SEGURIDAD', 						Modelo: 'LRD55', 		Talla: 'Mediano'},
										{Cantidad: 4, Articulo: 'BOTAS', 	Descripcion: 'BOTAS DIELÉCTRICAS', 						Modelo: 'CASQUILLO', 	Talla: '24'},
										{Cantidad: 5, Articulo: 'CAMISOLA', Descripcion: 'CAMISOLA PARA PERSONAL DE CAMPO', 		Modelo: 'MEZCLILLA', 	Talla: '28'},
										{Cantidad: 4, Articulo: 'PANTALÓN', Descripcion: 'PANTALÓN PARA PERSONAL DE CAMPO', 		Modelo: 'MEZCLILLA', 	Talla: '36'},
										{Cantidad: 2, Articulo: 'CHAMARRA', Descripcion: 'CHAMARRA PARA PERSONAL DE CAMPO', 		Modelo: 'MEZCLILLA', 	Talla: '38'},
										
									]
		},
		{
			Año: 2022, Eleccion:	[
										{Cantidad: 5, Articulo: 'CAMISOLA', Descripcion: 'CAMISOLA PARA PERSONAL DE CAMPO', 		Modelo: 'MEZCLILLA', 	Talla: '29'},
										{Cantidad: 4, Articulo: 'PANTALÓN', Descripcion: 'PANTALÓN PARA PERSONAL DE CAMPO', 		Modelo: 'MEZCLILLA', 	Talla: '38'},
										{Cantidad: 1, Articulo: 'CASCO', 	Descripcion: 'CASCO DE SEGURIDAD', 						Modelo: 'LRD55', 		Talla: 'Mediano'},
										{Cantidad: 4, Articulo: 'BOTAS', 	Descripcion: 'BOTAS DIELÉCTRICAS', 						Modelo: 'CASQUILLO', 	Talla: '24'},
										{Cantidad: 2, Articulo: 'CHAMARRA', Descripcion: 'CHAMARRA PARA PERSONAL DE CAMPO', 		Modelo: 'MEZCLILLA', 	Talla: '10'},
										{Cantidad: 1, Articulo: 'ANTIAGUA', Descripcion: 'EQUIPO ANTIAGUA PARA PERSONAL DE CAMPO', 	Modelo: 'IMPERMEABLE', 	Talla: 'Grande'}
									]
		},

	],
	exports:
	{
		excelRopa:
		{
			headers: ['No', 'Cantidad',	'Articulo',	'Descripcion',	'Modelo',	'Talla']
		}
	}

};

export default config;