import {Ship} from '../models/ship';

export var SHIPS:Ship[] = [
    {
        "id": 1,
        "model": "M50 Interceptor",
        "focus": [
            {"id": 1, "name": 'Racing'}, {"id": 2, "name": "Fighter"},
        ],
        "description": "If you want to get from point A to point B as quickly as possible and with as much style as possible then ORIGIN's M50 is for you. Featuring supercharged engines that counter a tiny weapons loadout, the M50 is a ship for going FAST.",
        "image": "https://robertsspaceindustries.com/media/xfs6elgejzxz9r/store_small/M50_new_comp47.jpg",
        "max_crew" : 1,
        "cargo_capacity" : 0
    },
    {
        "id": 2,
        "model": "Mustang Beta",
        "focus": [
            {"id": 3, "name": 'Touring'}, {"id": 4, "name": "Exploration"},
        ],
        "description": "The Mustang Beta, with its unprecedented range, is made for long duration flights. The factory standard Tarsus Leaper Jump Engine enables the Beta to travel to the galaxy’s farthest systems with ease, while the ship’s unique Com4T living quarters will make the journey feel like you never left home.",
        "image": "https://robertsspaceindustries.com/media/ltw03c5rli6uwr/store_small/Beta-Front.jpg",
        "max_crew" : 1,
        "cargo_capacity" : 10
    },
    {
        "id": 3,
        "model": "Mustang Gamma",
        "focus": [
            {"id": 1, "name": 'Racing'}
        ],
        "description": "Consolidated Outland’s design and engineering teams have managed to tweak and refine the Mustang into an admirable racer. The end result, the Mustang Gamma, has smooth acceleration, and power on demand thanks to an innovative package featuring three powerful Magma Jet engines for maximum thrust.",
        "image": "https://robertsspaceindustries.com/media/yu4cuzh90oz54r/store_small/Gamma-Front.jpg",
        "max_crew" : 1,
        "cargo_capacity" : 10
    },
    {
        "id": 4,
        "model": "Mustang Delta",
        "focus": [
            {"id": 5, "name": 'Fighter'}
        ],
        "description": "",
        "image": "https://robertsspaceindustries.com/media/dtqy8jpl0f9cbr/store_small/Delta-Front.jpg",
        "max_crew" : 1,
        "cargo_capacity" : 10
    },
    {
        "id": 5,
        "model": "Mustang Omega",
        "focus": [
            {"id": 1, "name": 'Racing'}
        ],
        "description": "",
        "image": "https://robertsspaceindustries.com/media/gmru9y7ynd1bbr/store_small/Omega-Front.jpg",
        "max_crew" : 1,
        "cargo_capacity" : 10
    },
    {
        "id": 6,
        "model": "Mustang Alpha",
        "focus": [
            {"id": 5, "name": "Starter"}
        ],
        "description": "",
        "image": "https://robertsspaceindustries.com/media/ssh2spko70pz6r/store_small/Alpha-Front.jpg",
        "max_crew" : 1,
        "cargo_capacity" : 10
    },
    {
        "id": 7,
        "model": "Redeemer",
        "focus": [
            {"id": 6, "name": "Gunship"}
        ],
        "description": "Aegis Redeemer is a powerful fighting ship capable of holding its own in combat with a powerful weapons payload. Dotted with turrets and missiles, the Redeemer also doubles as an armored landing craft capable of delivering armored soldiers for first person combat!",
        "image": "https://robertsspaceindustries.com/media/t0opqw0tauo45r/store_small/Red1.jpg",
        "max_crew" : 5,
        "cargo_capacity" : 24
    },
    //{"id": 8, "model": "Gladius", "focus": "Short-range Patrol Fighter", "description": "", "image": ""},
    //{"id": 9, "model": "Aurora ES", "focus": "Starter/Exploration", "description": "", "image": ""},
    //{"id": 10, "model": "Aurora MR", "focus": "Exploration/Light Mercantile", "description": "", "image": ""},
    //{"id": 11, "model": "Aurora CL", "focus": "Interdiction", "description": "", "image": ""}
];
