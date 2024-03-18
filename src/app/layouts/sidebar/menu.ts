import { MenuItem } from "./menu.model";

export const MENU: MenuItem[] = [
    
    {
        id: 1,
        label: 'MENUITEMS.APPS.TEXT',
        isTitle: true
    },

    {
        id: 2,
        label: 'MENUITEMS.APPS.LIST.VEHICLES',
        icon: 'ph-buildings',
        parentId: 1,
        subItems: [
            {
                id: 3,
                label: 'MENUITEMS.APPS.LIST.VEHICLE',
                link: '/vehiculo',
                parentId: 2
            },
            {
                id: 4,
                label: 'MENUITEMS.APPS.LIST.DRIVER',
                link: '/chofer',
                parentId: 2
            },
          
        ]
    },

    {
        id: 5,
        label: 'MENUITEMS.APPS.LIST.USER',
        icon: 'ph-buildings',
        link: '/usuarios',

        parentId: 1,
        
    },

    {
        id: 6,
        label: 'MENUITEMS.APPS.LIST.COMPANY',
        icon: 'ph-buildings',
        link: '/empresas',
        parentId: 1,
        
    },
    {
        id: 7,
        label: 'MENUITEMS.GUARDS.TEXT',
        icon: 'ph-buildings',
        parentId: 1,
        subItems: [
            {
                id: 8,
                label: 'MENUITEMS.GUARDS.LIST.GUARD',
                link: '/guardias',
                parentId: 7
            },
            {
                id: 9,
                label: 'MENUITEMS.GUARDS.LIST.ABONO',
                link: '/guardias/abono',
                parentId: 7
            },
            {
                id: 10,
                label: 'MENUITEMS.GUARDS.LIST.NEWS',
                parentId: 7,
                isCollapsed: true,
                subItems: [
                    {
                        id: 11,
                        label: 'MENUITEMS.GUARDS.LIST.DISCOUNTS',
                        link: '/guardias/novedades/descuentos',
                        parentId: 10
                    },
                    {
                        id: 12,
                        label: 'MENUITEMS.GUARDS.LIST.REVIEWS',
                        link: '/guardias/novedades/revisiones',
                        parentId: 10
                    },
                    
                ]
            },
          
        ]
    },
    {
        id: 13,
        label: 'MENUITEMS.PARAMS.TEXT',
        icon: 'ph-buildings',
        parentId: 1,
        subItems: [
            {
                id: 14,
                label: 'MENUITEMS.PARAMS.LIST.HOLIDAYS',
                link: '/parametros/feriados',
                parentId: 13
            },
            {
                id: 15,
                label: 'MENUITEMS.PARAMS.LIST.MOUNTGUARD',
                link: '/parametros/monto-guardia',
                parentId: 13
            },
            {
                id: 16,
                label: 'MENUITEMS.PARAMS.LIST.TYPE',
                parentId: 13,
                isCollapsed: true,
                subItems: [
                    {
                        id: 11,
                        label: 'MENUITEMS.PARAMS.LIST.VEHICLE',
                        link: '/parametros/tipo/vehiculo',
                        parentId: 10
                    },
                    {
                        id: 12,
                        label: 'MENUITEMS.PARAMS.LIST.MAINTENANCE',
                        link: '/parametros/tipo/mantenimiento',
                        parentId: 10
                    },
                ]
            },
          
        ]
    },

]