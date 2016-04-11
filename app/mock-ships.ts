import {Ship} from './ship';

export var SHIPS:Ship[] = [
    {
        "id": 1,
        "model": "M50 Interceptor",
        "focus": [
            {"id": 1, "name": 'Racing'}, {"id": 2, "name": "Fighter"},
        ],
        "description": "Texto descripción",
        "image": "https://robertsspaceindustries.com/media/xfs6elgejzxz9r/store_small/M50_new_comp47.jpg"
    },
    {
        "id": 2,
        "model": "Mustang Beta",
        "focus": [
            {"id": 3, "name": 'Touring'}, {"id": 4, "name": "Exploration"},
        ],
        "description": "",
        "image": "https://robertsspaceindustries.com/media/ltw03c5rli6uwr/store_small/Beta-Front.jpg"
    },
    {
        "id": 3,
        "model": "Mustang Gamma",
        "focus": [
            {"id": 1, "name": 'Racing'}
        ],
        "description": "Consolidated Outland’s design and engineering teams have managed to tweak and refine the Mustang into an admirable racer. The end result, the Mustang Gamma, has smooth acceleration, and power on demand thanks to an innovative package featuring three powerful Magma Jet engines for maximum thrust.",
        "image": "https://robertsspaceindustries.com/media/yu4cuzh90oz54r/store_small/Gamma-Front.jpg"
    },
    {
        "id": 4,
        "model": "Mustang Delta",
        "focus": [
            {"id": 5, "name": 'Fighter'}
        ],
        "description": "",
        "image": "https://robertsspaceindustries.com/media/dtqy8jpl0f9cbr/store_small/Delta-Front.jpg"
    },
    {
        "id": 5,
        "model": "Mustang Omega",
        "focus": [
            {"id": 1, "name": 'Racing'}
        ],
        "description": "",
        "image": "https://robertsspaceindustries.com/media/gmru9y7ynd1bbr/store_small/Omega-Front.jpg"
    },
    //{"id": 6, "model": "Mustang Alpha", "focus": "Starter", "description": "", "image": ""},
    //{"id": 7, "model": "Redeemer", "focus": "Gunship", "description": "", "image": ""},
    //{"id": 8, "model": "Gladius", "focus": "Short-range Patrol Fighter", "description": "", "image": ""},
    //{"id": 9, "model": "Aurora ES", "focus": "Starter/Exploration", "description": "", "image": ""},
    //{"id": 10, "model": "Aurora MR", "focus": "Exploration/Light Mercantile", "description": "", "image": ""},
    //{"id": 11, "model": "Aurora CL", "focus": "Interdiction", "description": "", "image": ""}
];
