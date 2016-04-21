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
            {"id": 2, "name": 'Fighter'}
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
    {
        "id": 21,
        "model": "CONSTELLATION ANDROMEDA",
        "focus": [
            {"id": 19, "name": "Multi-Function"}
        ],
        "description": "",
        "image": "https://robertsspaceindustries.com/media/vzyhde6cjgsn7r/store_small/Andromeda_Storefront.jpg",
        "max_crew": 5,
        "cargo_capacity": 134,
        "manufacturer": 11
    },
    {
        "id": 22,
        "model": "CONSTELLATION TAURUS",
        "focus": [
            {"id": 20, "name": "Transport"}
        ],
        "description": "",
        "image": "https://robertsspaceindustries.com/media/3vj4o4l5uggk7r/store_small/Taurus-Storefront.jpg",
        "max_crew": 4,
        "cargo_capacity": 243,
        "manufacturer": 11
    },
    {
        "id": 23,
        "model": "CONSTELLATION AQUILA",
        "focus": [
            {"id": 4, "name": "Exploration"}
        ],
        "description": "",
        "image": "https://robertsspaceindustries.com/media/u0pbc9k058nuhr/store_small/Aquila_Storefront.jpg",
        "max_crew": 4,
        "cargo_capacity": 134,
        "manufacturer": 11
    },
    {
        "id": 24,
        "model": "CONSTELLATION PHOENIX",
        "focus": [
            {"id": 21, "name": "Luxury Touring"}
        ],
        "description": "",
        "image": "https://robertsspaceindustries.com/media/0o9gi8gbsm178r/store_small/Phoenix_Storefront.jpg",
        "max_crew": 4,
        "cargo_capacity": 66,
        "manufacturer": 11
    },
    {
        "id": 25,
        "model": "FREELANCER",
        "focus": [
            {"id": 10, "name": "Mercantile"}
        ],
        "description": "",
        "image": "https://robertsspaceindustries.com/media/ts39qbhy6x38pr/store_small/Freelancer_storefront_visual.jpg",
        "max_crew": 2,
        "cargo_capacity": 52,
        "manufacturer": 9
    },
    {
        "id": 26,
        "model": "FREELANCER DUR",
        "focus": [
            {"id": 4, "name": "Exploration"}
        ],
        "description": "",
        "image": "https://robertsspaceindustries.com/media/gui7c4ac9u4v3r/store_small/Freelancer_dur_storefront_visual.jpg",
        "max_crew": 2,
        "cargo_capacity": 52,
        "manufacturer": 9
    },
    {
        "id": 27,
        "model": "FREELANCER MAX",
        "focus": [
            {"id": 20, "name": "Transport"}
        ],
        "description": "",
        "image": "https://robertsspaceindustries.com/media/pd2zoaytunmrkr/store_small/Freelancer_max_storefront_visual.jpg",
        "max_crew": 2,
        "cargo_capacity": 123,
        "manufacturer": 9
    },
    {
        "id": 27,
        "model": "FREELANCER MIS",
        "focus": [
            {"id": 11, "name": "Militia"}
        ],
        "description": "",
        "image": "https://robertsspaceindustries.com/media/yie4k1qvzqqr0r/store_small/Freelancer_mis_storefront_visual.jpg",
        "max_crew": 3,
        "cargo_capacity": 52,
        "manufacturer": 9
    },
    {
        "id": 28,
        "model": "CUTLASS BLACK",
        "focus": [
            {"id": 11, "name": "Militia"}, {"id": 12, "name": "Patrol"}
        ],
        "description": "",
        "image": "https://robertsspaceindustries.com/media/7tcxllnna6a9hr/store_small/Drake_cutlass_storefront_visual.jpg",
        "max_crew": 3,
        "cargo_capacity": 33,
        "manufacturer": 6
    },
    {
        "id": 29,
        "model": "CUTLASS RED",
        "focus": [
            {"id": 21, "name": "Search & Rescue"}
        ],
        "description": "",
        "image": "https://robertsspaceindustries.com/media/anznazc3gf5oar/store_small/Slide_Cut-Red.jpg",
        "max_crew": 4,
        "cargo_capacity": 33,
        "manufacturer": 6
    },
    {
        "id": 30,
        "model": "CUTLASS BLUE",
        "focus": [
            {"id": 22, "name": "Police"}
        ],
        "description": "",
        "image": "https://robertsspaceindustries.com/media/8d5ywktt23231r/store_small/Blue-WR-Orth_000000.jpg",
        "max_crew": 3,
        "cargo_capacity": 33,
        "manufacturer": 6
    },
    {
        "id": 31,
        "model": "AVENGER STALKER",
        "focus": [
            {"id": 23, "name": "Interceptor"}, {"id": 24, "name": "Bounty Hounting"}
        ],
        "description": "",
        "image": "https://robertsspaceindustries.com/media/3dx8jqsd79dmpr/store_small/Avenger_storefront_visualjpg.jpg",
        "max_crew": 1,
        "cargo_capacity": 4,
        "manufacturer": 2
    },
    {
        "id": 32,
        "model": "AVENGER WARLOCK",
        "focus": [
            {"id": 24, "name": "EMP Warfare"}
        ],
        "description": "",
        "image": "https://robertsspaceindustries.com/media/3dx8jqsd79dmpr/store_small/Avenger_storefront_visualjpg.jpg",
        "max_crew": 1,
        "cargo_capacity": "desconocida",
        "manufacturer": 2
    },
    {
        "id": 33,
        "model": "AVENGER TITAN",
        "focus": [
            {"id": 25, "name": "Light Cargo Hauler"}
        ],
        "description": "",
        "image": "https://robertsspaceindustries.com/media/3dx8jqsd79dmpr/store_small/Avenger_storefront_visualjpg.jpg",
        "max_crew": 1,
        "cargo_capacity": "desconocida",
        "manufacturer": 2
    },
    {
        "id": 34,
        "model": "GLADIATOR",
        "focus": [
            {"id": 25, "name": "Carrier-based Bomber"}
        ],
        "description": "",
        "image": "https://robertsspaceindustries.com/media/ye6hvyo93oc2ar/store_small/Gladiator-WB_FrontLeft.jpg",
        "max_crew": 2,
        "cargo_capacity": 0,
        "manufacturer": 3
    },
    {
        "id": 35,
        "model": "STARFARER",
        "focus": [
            {"id": 26, "name": "Refuel"}, {"id": 20, "name": "Transport"}
        ],
        "description": "",
        "image": "https://robertsspaceindustries.com/media/k4f44vqnex0m1r/store_small/SF-Chris-O-2.jpg",
        "max_crew": 7,
        "cargo_capacity": 3321,
        "manufacturer": 9
    },
    {
        "id": 36,
        "model": "STARFARER GEMINI",
        "focus": [
            {"id": 27, "name": "Military Transport"}
        ],
        "description": "",
        "image": "https://robertsspaceindustries.com/media/4pgpl7n71hijzr/store_small/Gemini2338.jpg",
        "max_crew": 7,
        "cargo_capacity": 2488,
        "manufacturer": 9
    },
    {
        "id": 37,
        "model": "CATERPILLAR",
        "focus": [
            {"id": 20, "name": "Transport"}
        ],
        "description": "",
        "image": "https://robertsspaceindustries.com/media/wde7ozthdqjnxr/store_small/Cat-Model-Render4.jpg",
        "max_crew": 5,
        "cargo_capacity": 512,
        "manufacturer": 6
    },
    {
        "id": 38,
        "model": "CATERPILLAR",
        "focus": [
            {"id": 20, "name": "Transport"}
        ],
        "description": "",
        "image": "https://robertsspaceindustries.com/media/wde7ozthdqjnxr/store_small/Cat-Model-Render4.jpg",
        "max_crew": 5,
        "cargo_capacity": 512,
        "manufacturer": 6
    },
    {
        "id": 38,
        "model": "RETALIATOR BOMBER",
        "focus": [
            {"id": 28, "name": "Heavy Bomber"}
        ],
        "description": "",
        "image": "https://robertsspaceindustries.com/media/kz6mu0tt0u06er/store_small/Retaliator-Ortho_v2.jpg",
        "max_crew": 6,
        "cargo_capacity": 128,
        "manufacturer": 2
    },
    {
        "id": 39,
        "model": "RETALIATOR BASE",
        "focus": [
            {"id": 29, "name": "Versatile Fighter"}
        ],
        "description": "",
        "image": "https://robertsspaceindustries.com/media/bp86xpkhi47etr/store_small/Retaliator_engine_shot_a.jpg",
        "max_crew": 6,
        "cargo_capacity": 128,
        "manufacturer": 2
    },
    {
        "id": 40,
        "model": "VANDUUL SCYTHE",
        "focus": [
            {"id": 30, "name": "Medium Fighter"}
        ],
        "description": "",
        "image": "https://robertsspaceindustries.com/media/wdtdkzl0x31ver/store_small/Vanduul-Scythe_storefront_visual.jpg",
        "max_crew": 1,
        "cargo_capacity": 0,
        "manufacturer": 12
    },
    {
        "id": 41,
        "model": "IDRIS-M",
        "focus": [
            {"id": 31, "name": "Frigate"}
        ],
        "description": "",
        "image": "https://robertsspaceindustries.com/media/rfjjekm57en5jr/store_small/IDRISdownfrontquarter_copy.jpg",
        "max_crew": 10,
        "cargo_capacity": 860,
        "manufacturer": 2
    },
];