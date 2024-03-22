export const registroMantenimientos = [
  {
    codigo: 1,
    fechaRegistro: "10-20-2024",
    vehiculo: {
      id: 1,
      marca: "Chevrolet",
      modelo: "Aveo",
      placa: "GCA-3951",
      kmActual: 180000,
      tipoVehiculo: {
        codigo: 1,
        nombre: "Automóvil",
        estado: "A",
      },
    },
    
    tipoMantenimientoDetalle: {
      id: 1,
      nombre: "Cambio de aceite",
      marca: "GUARDOL SUPER 66 20W50 GL",
      caracteristicas: "",
      validarPor: "KM", //KM o DIAS
      validarAutonomia: true,
      autonomia: 5000,
      cantidad: "Galon",
      tipoMantenimiento: {
        codigo: 1,
        nombre: "Preventivo",
        objetivo: "Prevenir fallas y mantener los vehiculos en condiciones óptimas de funcionamiento.",
      },
      tiposVehiculo: {
        codigo: 1,
        nombres: "Automóvil",
      }
    },
    KMActualMantenimiento:157000,
    ProximoCambioKM:162000,
    KmFaltante: 18000,
    estado: "A"
  },
  {
    codigo: 2,
    fechaRegistro: "10-20-2024",
    vehiculo: {
      id: 1,
      marca: "Chevrolet",
      modelo: "Aveo",
      placa: "GCA-3951",
      kmActual: 180000,
      tipoVehiculo: {
        codigo: 1,
        nombre: "Automóvil",
        estado: "A",
      },
    },
    
    tipoMantenimientoDetalle:  {
      id: 6,
      nombre: "Filtro del carburador",
      marca:"ACDELCO",
      caracteristicas:"",
      validarPor:"KM", //KM o DIAS
      validarAutonomia: true,
      autonomia: 10000,
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
  

    KMActualMantenimiento:157000,
    ProximoCambioKM:162000,
    KmFaltante: 18000,
    estado: "A"
  },
  {
    codigo: 3,
    fechaRegistro: "22-03-2024",
    vehiculo: {
      id: 1,
      marca: "Chevrolet",
      modelo: "Aveo",
      placa: "GCA-3951",
      kmActual: 180000,
      tipoVehiculo: {
        codigo: 1,
        nombre: "Automóvil",
        estado: "A",
      },
    },
    
    tipoMantenimientoDetalle:  {
      id: 6,
      nombre: "Filtro del carburador",
      marca:"ACDELCO",
      caracteristicas:"",
      validarPor:"KM", //KM o DIAS
      validarAutonomia: true,
      autonomia: 10000,
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
  

    KMActualMantenimiento:157000,
    ProximoCambioKM:162000,
    KmFaltante: 18000,
    estado: "A"
  },
]