import {Ship} from '../models/ship';

export var SHIPS:Ship[] = [
    {
        "id": 1,
        "model": "M50 Interceptor",
        "focus": [
            {"id": 1, "name": 'Racing'}, {"id": 2, "name": "Fighter"},
        ],
        "description": "Si deseas ir desde el punto A al punto B lo más rápido posible y con tanto estilo como sea posible, " +
        "entonces el ORIGIN M50 es para ti. Con motores sobrealimentados que compensan su poca potencia de fuego, el M50 es una nave para ir RÁPIDO.",
        "image": "https://robertsspaceindustries.com/media/xfs6elgejzxz9r/store_small/M50_new_comp47.jpg",
        "max_crew": 1,
        "cargo_capacity": 0,
        "manufacturer": 10
    },
    {
        "id": 2,
        "model": "Mustang Beta",
        "focus": [
            {"id": 3, "name": 'Touring'}, {"id": 4, "name": "Exploration"},
        ],
        "description": "The Mustang Beta, with its unprecedented range, is made for long duration flights. The factory standard Tarsus Leaper Jump Engine enables the Beta to travel to the galaxy’s farthest systems with ease, while the ship’s unique Com4T living quarters will make the journey feel like you never left home.",
        "image": "https://robertsspaceindustries.com/media/ltw03c5rli6uwr/store_small/Beta-Front.jpg",
        "max_crew": 1,
        "cargo_capacity": 10,
        "manufacturer": 1
    },
    {
        "id": 3,
        "model": "Mustang Gamma",
        "focus": [
            {"id": 1, "name": 'Racing'}
        ],
        "description": "Consolidated Outland’s design and engineering teams have managed to tweak and refine the Mustang into an admirable racer. The end result, the Mustang Gamma, has smooth acceleration, and power on demand thanks to an innovative package featuring three powerful Magma Jet engines for maximum thrust.",
        "image": "https://robertsspaceindustries.com/media/yu4cuzh90oz54r/store_small/Gamma-Front.jpg",
        "max_crew": 1,
        "cargo_capacity": 10,
        "manufacturer": 1
    },
    {
        "id": 4,
        "model": "Mustang Delta",
        "focus": [
            {"id": 5, "name": 'Fighter'}
        ],
        "description": "",
        "image": "https://robertsspaceindustries.com/media/dtqy8jpl0f9cbr/store_small/Delta-Front.jpg",
        "max_crew": 1,
        "cargo_capacity": 10,
        "manufacturer": 1
    },
    {
        "id": 5,
        "model": "Mustang Omega",
        "focus": [
            {"id": 1, "name": 'Racing'}
        ],
        "description": "",
        "image": "https://robertsspaceindustries.com/media/gmru9y7ynd1bbr/store_small/Omega-Front.jpg",
        "max_crew": 1,
        "cargo_capacity": 10,
        "manufacturer": 1
    },
    {
        "id": 6,
        "model": "Mustang Alpha",
        "focus": [
            {"id": 5, "name": "Starter"}
        ],
        "description": "",
        "image": "https://robertsspaceindustries.com/media/ssh2spko70pz6r/store_small/Alpha-Front.jpg",
        "max_crew": 1,
        "cargo_capacity": 10,
        "manufacturer": 1
    },
    {
        "id": 7,
        "model": "Redeemer",
        "focus": [
            {"id": 6, "name": "Gunship"}
        ],
        "description": "Aegis Redeemer is a powerful fighting ship capable of holding its own in combat with a powerful weapons payload. Dotted with turrets and missiles, the Redeemer also doubles as an armored landing craft capable of delivering armored soldiers for first person combat!",
        "image": "https://robertsspaceindustries.com/media/t0opqw0tauo45r/store_small/Red1.jpg",
        "max_crew": 5,
        "cargo_capacity": 24,
        "manufacturer": 2
    },
    {
        "id": 8,
        "model": "Gladius",
        "focus": [
            {"id": 7, "name": "Short-range Patrol Fighter"}
        ],
        "description": "",
        "image": "https://robertsspaceindustries.com/media/b623f9bkn0c3ur/store_small/Gladius_Front_Perspective.jpg",
        "max_crew": 1,
        "cargo_capacity": 0,
        "manufacturer": 2
    },
    {
        "id": 9,
        "model": "Aurora ES",
        "focus": [
            {"id": 5, "name": 'Starter'}, {"id": 4, "name": "Exploration"}
        ],
        "description": "",
        "image": "https://robertsspaceindustries.com/media/9u8061zhf29fir/store_small/Rsi_aurora_es_storefront_visual.jpg",
        "max_crew": 1,
        "cargo_capacity": 13,
        "manufacturer": 11
    },
    {
        "id": 10,
        "model": "Aurora LX",
        "focus": [
            {"id": 4, "name": "Exploration"}, {"id": 8, "name": 'Light Mercantile'}
        ],
        "description": "",
        "image": "https://robertsspaceindustries.com/media/xfq27owiysn6ar/store_small/Aurora-LX_Ortho.jpg",
        "max_crew": 1,
        "cargo_capacity": 13,
        "manufacturer": 11
    },
    {
        "id": 11,
        "model": "Aurora MR",
        "focus": [
            {"id": 9, "name": "Interdiction"}
        ],
        "description": "",
        "image": "https://robertsspaceindustries.com/media/ohbfgn1ebcsnar/store_small/Rsi_aurora_mr_storefront_visual.jpg",
        "max_crew": 1,
        "cargo_capacity": 13,
        "manufacturer": 11
    },
    {
        "id": 12,
        "model": "Aurora CL",
        "focus": [
            {"id": 10, "name": "Mercantile"}
        ],
        "description": "",
        "image": "https://robertsspaceindustries.com/media/fh1gtu93mndsur/store_small/Rsi_aurora_cl_storefront_visual.jpg",
        "max_crew": 1,
        "cargo_capacity": 23,
        "manufacturer": 11
    },
    {
        "id": 13,
        "model": "Aurora LN",
        "focus": [
            {"id": 11, "name": "Militia"}, {"id": 12, "name": "Patrol"}
        ],
        "description": "",
        "image": "https://robertsspaceindustries.com/media/ljgowkr9tdwetr/store_small/Rsi_aurora_ln_storefront_visual.jpg",
        "max_crew": 1,
        "cargo_capacity": 23,
        "manufacturer": 11
    },
    {
        "id": 14,
        "model": "300I",
        "focus": [
            {"id": 3, "name": "Touring"}
        ],
        "description": "",
        "image": "https://robertsspaceindustries.com/media/ep375pda2jer7r/store_small/300i_storefront_visual.jpg",
        "max_crew": 1,
        "cargo_capacity": 4,
        "manufacturer": 10
    },
    {
        "id": 14,
        "model": "315P",
        "focus": [
            {"id": 4, "name": "Exploration"}
        ],
        "description": "",
        "image": "https://robertsspaceindustries.com/media/o34z1cyxt1um8r/store_small/315p_storefront_visual.jpg",
        "max_crew": 1,
        "cargo_capacity": 6,
        "manufacturer": 10
    },
    {
        "id": 15,
        "model": "325A",
        "focus": [
            {"id": 9, "name": "Interdiction"}
        ],
        "description": "",
        "image": "https://robertsspaceindustries.com/media/gdol1g9fswvjcr/store_small/325a_storefront_visual.jpg",
        "max_crew": 1,
        "cargo_capacity": 0,
        "manufacturer": 10
    },
    {
        "id": 15,
        "model": "350R",
        "focus": [
            {"id": 1, "name": "Racing"}
        ],
        "description": "",
        "image": "https://robertsspaceindustries.com/media/52nrmwl43g1cor/store_small/350r_storefront_visual.jpg",
        "max_crew": 1,
        "cargo_capacity": 0,
        "manufacturer": 10
    },
    {
        "id": 16,
        "model": "F7C HORNET",
        "focus": [
            {"id": 13, "name": "Civilian Close Support"}
        ],
        "description": "",
        "image": "https://robertsspaceindustries.com/media/m6e374a9zb7dlr/store_small/F7c_hornet_storefront_visual.jpg",
        "max_crew": 1,
        "cargo_capacity": 13,
        "manufacturer": 3
    },
    {
        "id": 17,
        "model": "F7C-S HORNET GHOST",
        "focus": [
            {"id": 14, "name": "Infiltration"}
        ],
        "description": "",
        "image": "https://robertsspaceindustries.com/media/d7l12zt956s62r/store_small/F7cs_hornet_ghost_storefront_visual.jpg",
        "max_crew": 1,
        "cargo_capacity": 0,
        "manufacturer": 3
    },
    {
        "id": 18,
        "model": "F7C-R HORNET TRACKER",
        "focus": [
            {"id": 15, "name": "Scout"}, {"id": 16, "name": "Command and Control"}
        ],
        "description": "",
        "image": "https://robertsspaceindustries.com/media/5f5hxp2dp3b69r/store_small/F7c-R_hornet-Tracker_storefront_visual.jpg",
        "max_crew": 1,
        "cargo_capacity": 0,
        "manufacturer": 3
    },
    {
        "id": 19,
        "model": "F7C-M SUPER HORNET",
        "focus": [
            {"id": 17, "name": "Space Superiority"}
        ],
        "description": "",
        "image": "https://robertsspaceindustries.com/media/4otqgybm0y38ur/store_small/F7c-M_super-Hornet_storefront_visual.jpg",
        "max_crew": 2,
        "cargo_capacity": 0,
        "manufacturer": 3
    },
    {
        "id": 20,
        "model": "F7A HORNET",
        "focus": [
            {"id": 18, "name": "Military Close Support"}
        ],
        "description": "",
        "image": "https://robertsspaceindustries.com/media/j2ie1gy9x9zsbr/store_small/F7a.jpg",
        "max_crew": 1,
        "cargo_capacity": 0,
        "manufacturer": 3
    },
]