interface _marca {
	"_id": string,
	"nombre": string
}
interface _usuario {
	"_id": string,
	"nombre": string
}
interface _estado {
	"_id": string,
	"nombre": string
}
export interface Vehiculo {
	ok: boolean;
	vehiculos: VehiculoElement[];
}

export interface VehiculoElement {
	_id: string;
	nombre: string;
	marca: _marca;
	modelo: string;
	anio: string;
	KMactual:number;
	fuenteIngreso: boolean;
	usuario: _usuario;
	fechaRegistro: Date;
	estado: _estado;
}

export interface RegistroVehiculo {
    nombre: string ;
    marca: string;
    modelo: string;
	usuario:string;
    anio: number;
	kmActual:number;
    fuenteIngreso: boolean;
	estado:string;
}
export interface ActualizarVehiculo {
	_id:string;
    nombre: string;
    marca: string;
    modelo: string;
    anio: number;
	KMactual:number;
    fuenteIngreso: boolean;
	estado:string;
}

