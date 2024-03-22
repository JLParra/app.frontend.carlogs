export const registroMantenimientos = [
  {
    img: "https://source.unsplash.com/random/automoviles",
    codigo: 1,
    fechaRegistro:"10-20-2024",
    vehiculo: {
      id:1,
      marca:"Chevrolet",
      modelo:"Aveo",

      kmActual: 158000,
      placa:"GCA-3951",
      tipoVehiculo: {
          img: "https://source.unsplash.com/random/tricimoto",
          codigo: 1,
          nombre: "Automóvil",
          estado:"A",
      }
    },
    tipoMantenimiento:  {
      icon: "avatar-title rounded-circle bg-warning-subtle text-warning",
      codigo: 1,
      objetivo:"Prevenir fallas y mantener los vehiculos en condiciones óptimas de funcionamiento.",
      nombre: "Preventivo",
      estado:"A",
      items: [
        {
          id: 1,
          nombre:"Cambio de aceite",
          kmRevision: 10000
        },
        {
          id: 2,
          nombre:"Revision del Aceite del motor",
          kmRevision: 10000
        },
        {
          id: 3,
          nombre:"Liquido de freno.",
          kmRevision: 10000
        },
        {
          id: 4,
          nombre:"Liquido refrigerante.",
          kmRevision: 10000
        },
        {
          id: 4,
          nombre:"Aceite de caja de cambio.",
          kmRevision: 10000
        },
      ]
    },
    tipoMantenimientoDetalle: {
      id: 1,
      nombre:"Cambio de aceite",
      kmRevision: 10000
    },
    Autonomia:5000, // Cambio.
    siguienteCambio: 0,
    estado:"A"

  },
  {
    img: "https://source.unsplash.com/random/automoviles",
    codigo: 2,
    fechaRegistro:"10-20-2024",
    vehiculo: {
      id:1,
      marca:"Chevrolet",
      modelo:"Aveo",

      kmActual: 158000,
      placa:"GCA-3951",
      tipoVehiculo: {
          img: "https://source.unsplash.com/random/tricimoto",
          codigo: 1,
          nombre: "Automóvil",
          estado:"A",
      }
    },
    tipoMantenimiento:  {
      icon: "avatar-title rounded-circle bg-warning-subtle text-warning",
      codigo: 1,
      objetivo:"Prevenir fallas y mantener los vehiculos en condiciones óptimas de funcionamiento.",
      nombre: "Preventivo",
      estado:"A",
      items: [
        {
          id: 1,
          nombre:"Cambio de aceite",
          kmRevision: 10000
        },
        {
          id: 2,
          nombre:"Revision del Aceite del motor",
          kmRevision: 10000
        },
        {
          id: 3,
          nombre:"Liquido de freno.",
          kmRevision: 10000
        },
        {
          id: 4,
          nombre:"Liquido refrigerante.",
          kmRevision: 10000
        },
        {
          id: 5,
          nombre:"Aceite de caja de cambio.",
          kmRevision: 10000
        },
        {
          id: 6,
          nombre:"Filtro del carburador",
          kmRevision: 10000
        },
      ]
    },
    tipoMantenimientoDetalle: {
      id: 1,
      nombre:"Cambio de filtro",
      kmRevision: 10000
    },
    Autonomia:5000, // Cambio.
    siguienteCambio: 0,
    estado:"A"

  },
  
]