import { Estado } from "src/app/Interfaces/estado.model";

export interface Chofer {
  _id: string;
  img?: string;
  cedula: string;
  nombres: string;
  nacionalidad?: string;
  convencional?: string;
  celular?: string;
  whatsapp: string;
  emergencia: string;
  parentezco?: string;
  fechaIngresoLaboral: Date;
  fechaRegistro: Date;
  estado: Estado;
  vehiculo: {
    _id: string,
    nombre: string
  }
}
export interface getChoferes {
	ok: boolean;
	choferes: Chofer[];
}