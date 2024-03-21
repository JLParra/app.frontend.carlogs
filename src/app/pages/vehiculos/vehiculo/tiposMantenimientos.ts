export const tiposMantenimientos = [
  {
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

  {
    icon: "avatar-title rounded-circle bg-warning-subtle text-warning",
    codigo: 2,
    objetivo:"Reparar problemas o averías después de que han ocurrido.",
    nombre: "Correctivo",
    estado:"A",
    items: [
      {
        id: 5,
        nombre:"Diagnostico de fallas",
        kmRevision: 10000
      },
      
    ]

  },

  {
    icon: "avatar-title rounded-circle bg-warning-subtle text-warning",
    codigo: 3,
    objetivo:"Reparar problemas o averías después de que han ocurrido.",
    nombre: "Programado",
    estado:"A",
    items: [
      {
        id: 6,
        nombre:"Aire acondicionado",
        kmRevision: 10000
      },
      
    ]

  },
]