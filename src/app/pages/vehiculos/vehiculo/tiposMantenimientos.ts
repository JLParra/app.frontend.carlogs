export const tiposMantenimientos = [
  {
    icon: "avatar-title rounded-circle bg-warning-subtle text-warning",
    codigo: 1,
    objetivo: "Prevenir fallas y mantener los vehiculos en condiciones óptimas de funcionamiento.",
    nombre: "Preventivo",
    estado: "A",
  },
  {
    icon: "avatar-title rounded-circle bg-warning-subtle text-warning",
    codigo: 2,
    objetivo: "Reparar problemas o averías después de que han ocurrido.",
    nombre: "Correctivo",
    estado: "A",

  },
]
export const DetallesTiposMantenimientos = [
  {
    id: 1,
    nombre: "Cambio de aceite",
    marca:"GUARDOL SUPER 66 20W50 GL",
    caracteristicas:"",
    validarPor:"KM", //KM o DIAS
    validarAutonomia: true,
    autonomia: 5000,
    cantidad:"Galon",
    tipoMantenimiento: {
      codigo: 1,
      nombre: "Preventivo",
      objetivo: "Prevenir fallas y mantener los vehiculos en condiciones óptimas de funcionamiento.",
    },
    tiposVehiculo:{
       codigo: 1,
      nombres: "Automóvil",
    }
  },
  
  {
    id: 2,
    nombre: "Filtro de aire",
    marca:"ACCDELCO",
    caracteristicas:"",
    validarPor:"KM", //KM o DIAS
    validarAutonomia: false,
    autonomia: 0,
    cantidad:"0",
    tipoMantenimiento: {
      codigo: 1,
      nombre: "Preventivo",
      objetivo: "Prevenir fallas y mantener los vehiculos en condiciones óptimas de funcionamiento.",
    },
    tiposVehiculo:{
       codigo: 1,
      nombres: "Automóvil",
    }
  },
  {
    id: 3,
    nombre: "Liquido de freno.",
    marca:"Sin Marca",
    caracteristicas:"",
    validarPor:"KM", //KM o DIAS
    validarAutonomia: false,
    autonomia: 0,
    cantidad:"0",
    tipoMantenimiento: {
      codigo: 1,
      nombre: "Preventivo",
      objetivo: "Prevenir fallas y mantener los vehiculos en condiciones óptimas de funcionamiento.",
    },
    tiposVehiculo:{
       codigo: 1,
      nombres: "Automóvil",
    }
  },
  {
    id: 4,
    nombre: "Liquido refrigerante.",
    marca:"Sin Marca",
    caracteristicas:"",
    validarPor:"KM", //KM o DIAS
    validarAutonomia: false,
    autonomia: 0,
    cantidad:"0",
    tipoMantenimiento: {
      codigo: 1,
      nombre: "Preventivo",
      objetivo: "Prevenir fallas y mantener los vehiculos en condiciones óptimas de funcionamiento.",
    },
    tiposVehiculo:{
       codigo: 1,
      nombres: "Automóvil",
    }
  },
  {
    id: 5,
    nombre: "Aceite de caja de cambio.",
    marca:"ACCDELCO",
    caracteristicas:"",
    validarPor:"KM", //KM o DIAS
    validarAutonomia: true,
    autonomia: 40000,
    cantidad:"100ml",
    tipoMantenimiento: {
      codigo: 1,
      nombre: "Preventivo",
      objetivo: "Prevenir fallas y mantener los vehiculos en condiciones óptimas de funcionamiento.",
    },
    tiposVehiculo:{
       codigo: 1,
      nombres: "Automóvil",
    }
  },
  {
    id: 6,
    nombre: "Filtro del carburador",
    marca:"ACDELCO",
    caracteristicas:"",
    validarPor:"KM", //KM o DIAS
    validarAutonomia: false,
    autonomia: 0,
    cantidad:"0",
    tipoMantenimiento: {
      codigo: 1,
      nombre: "Preventivo",
      objetivo: "Prevenir fallas y mantener los vehiculos en condiciones óptimas de funcionamiento.",
    },
    tiposVehiculo:{
       codigo: 1,
      nombres: "Automóvil",
    }
  },

  {
    id: 7,
    nombre: "Cambio de pastilla de freno",
    marca:"Sin Marca",
    caracteristicas:"",
    validarPor:"KM", //KM o DIAS
    validarAutonomia: false,
    autonomia: 0,
    cantidad:"0",
    tipoMantenimiento: {
      codigo: 2,
      nombre: "Correctivo",
      objetivo: "Reparar problemas o averías después de que han ocurrido.",
    },
    tiposVehiculo:{
       codigo: 1,
      nombres: "Automóvil",
    }
  },
  {
    id: 8,
    nombre: "Cambio de zapatas",
    marca:"Sin Marca",
    caracteristicas:"",
    validarPor:"KM", //KM o DIAS
    validarAutonomia: false,
    autonomia: 0,
    cantidad:"0",
    tipoMantenimiento: {
      codigo: 2,
      nombre: "Correctivo",
      objetivo: "Reparar problemas o averías después de que han ocurrido.",
    },
    tiposVehiculo:{
       codigo: 1,
      nombres: "Automóvil",
    }
  },
  {
    id: 9,
    nombre: "Cambio de motor de arranque",
    marca:"Sin Marca",
    caracteristicas:"",
    validarPor:"KM", //KM o DIAS
    validarAutonomia: false,
    autonomia: 0,
    cantidad:"0",
    tipoMantenimiento: {
      codigo: 2,
      nombre: "Correctivo",
      objetivo: "Reparar problemas o averías después de que han ocurrido.",
    },
    tiposVehiculo:{
       codigo: 1,
      nombres: "Automóvil",
    }
  },
  {
    id: 10,
    nombre: "Cambio de aceite motor",
    marca:"Movil Super",
    caracteristicas:"Aceite de motore SAE 20W-50",
    validarPor:"Dias", //KM o DIAS
    validarAutonomia: true,
    autonomia: 15,
    cantidad:"300ml",
    tipoMantenimiento: {
      codigo: 1,
      nombre: "Preventivo",
      objetivo: "Reparar problemas o averías después de que han ocurrido.",
    },
    tiposVehiculo:{
      codigo: 2,
      nombres: "Tricimoto",
    }
  },
  {
    id: 11,
    nombre: "Cambio de filtro de aceite",
    marca:"Aroil",
    caracteristicas:"Aceite de caja SAE 90",
    validarPor:"Mes", //KM, DIAS, MES
    validarAutonomia: true,
    cantidad:"0",
    autonomia: 1,
    tipoMantenimiento: {
      codigo: 1,
      nombre: "Preventivo",
      objetivo: "Reparar problemas o averías después de que han ocurrido.",
    },
    tiposVehiculo:{
      codigo: 2,
      nombres: "Tricimoto",
    }
  },
  {
    id: 12,
    nombre: "Cambio de aceite de caja",
    marca:"Aroil",
    caracteristicas:"Aceite de caja SAE 90",
    validarPor:"Mes", //KM o DIAS
    validarAutonomia: true,
    cantidad:"300ml",
    autonomia: 1,
    tipoMantenimiento: {
      codigo: 1,
      nombre: "Preventivo",
      objetivo: "Reparar problemas o averías después de que han ocurrido.",
    },
    tiposVehiculo:{
      codigo: 2,
      nombres: "Tricimoto",
    }
  },




 
]