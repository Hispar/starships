import {Manufacturer} from '../models/manufacturer';

export var MANUFACTURERS:Manufacturer[] = [
    {
        "id": 1,
        "name": "Consolidated Outland",
        "icon": "https://robertsspaceindustries.com/media/khu6mwy8zo5sar/icon/Consolidated_outland.png",
        "code": 'CNOU',
        "_links": {
            "self": {
                "href": "http://localhost:3000/manufacturer/1"
            }
        }
    },
    {
        "id": 2,
        "name": "Aegis Dynamics",
        "icon": "https://robertsspaceindustries.com/media/1apfbr0v0vbnur/icon/Aegis.png",
        "code": 'AEGS',
        "_links": {
            "self": {
                "href": "http://localhost:3000/manufacturer/2"
            },
            "ships": {
                "href": "http://localhost:3000/ship/2",
            }
        }
    },
    {
        "id": 3,
        "name": "Anvil Aeroespace",
        "icon": "https://robertsspaceindustries.com/media/w0o33qmdai9wpr/icon/Anvil.png",
        "code": 'ANVL'
    },
    {
        "id": 4,
        "name": "Banu",
        "icon": "https://robertsspaceindustries.com/media/3ktltnm6ph4cfr/icon/Banu.png",
        "code": 'CNOU'
    },
    {
        "id": 5,
        "name": "Crusader Industries",
        "icon": "https://robertsspaceindustries.com/media/c83tyi4pwogrnr/icon/Crusader.png",
        "code": 'CNOU'
    },
    {
        "id": 6,
        "name": "Drake Interplanetary",
        "icon": "https://robertsspaceindustries.com/media/bdkpvl2bpxaqar/icon/Drake.png",
        "code": 'DRAK'
    },
    {
        "id": 7,
        "name": "Esperia",
        "icon": "https://robertsspaceindustries.com/media/ofli1kgpqq5y6r/icon/Vanduul.png",
        "code": 'CNOU'
    },
    {
        "id": 8,
        "name": "Kruger Intergalactic",
        "icon": "https://robertsspaceindustries.com/media/4u3vwg26y1wm3r/icon/Kruger.png",
        "code": 'CNOU'
    },
    {
        "id": 9,
        "name": "Musashi Industrial & Starflight Concern",
        "icon": "https://robertsspaceindustries.com/media/6irnix69d4a8rr/icon/MISC.png",
        "code": 'MISC'
    },
    {
        "id": 10,
        "name": "Origin Jumpworks GmbH",
        "icon": "https://robertsspaceindustries.com/media/0ffygmebwd3t1r/icon/Origin.png",
        "code": 'ORIG'
    },
    {
        "id": 11,
        "name": "Roberts Space Industries",
        "icon": "https://robertsspaceindustries.com/media/tb6ui8j38wwscr/icon/RSI.png",
        "code": 'RSI'
    },
    {
        "id": 12,
        "name": "Vanduul",
        "icon": "https://robertsspaceindustries.com/media/ofli1kgpqq5y6r/icon/Vanduul.png",
        "code": 'VANDUUL'
    },
    {
        "id": 13,
        "name": "Xi'An",
        "icon": "https://robertsspaceindustries.com/media/p8niedyslwh6kr/icon/Xian.png",
        "code": 'CNOU'
    },
];

