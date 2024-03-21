export const registroMantenimientos = [
  {
    img: "https://source.unsplash.com/random/automoviles",
    codigo: 1,
    fechaRegistro:"10-20-2024",
    vehiculo: {
      id:1,
      nombre:"Aveo",
      kmActual: 158000,
      placa:"GCA-3951",
      tipoVehiculo: {
          img: "https://source.unsplash.com/random/tricimoto",
          codigo: 1,
          nombres: "Vehículo",
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
          nombre:"Cambio de aceite y filtro",
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
      nombre:"Cambio de aceite y filtro",
      kmRevision: 10000
    },
    Autonomia:5000, // Cambio.
    siguienteCambio: 0,
    estado:"A"

  },
  
]