const POKEMON_DATA = [
  {
    "id": 1,
    "name": "bulbasaur",
    "types": [
      "grass",
      "poison"
    ],
    "stats": {
      "hp": 45,
      "atk": 49,
      "def": 49,
      "spa": 65,
      "spd": 65,
      "spe": 45
    },
    "catch_rate": 45,
    "base_exp": 64,
    "growth_rate": "medium-slow",
    "evolution_method": "Level 16"
  },
  {
    "id": 2,
    "name": "ivysaur",
    "types": [
      "grass",
      "poison"
    ],
    "stats": {
      "hp": 60,
      "atk": 62,
      "def": 63,
      "spa": 80,
      "spd": 80,
      "spe": 60
    },
    "catch_rate": 45,
    "base_exp": 142,
    "growth_rate": "medium-slow",
    "evolution_method": "Level 32"
  },
  {
    "id": 3,
    "name": "venusaur",
    "types": [
      "grass",
      "poison"
    ],
    "stats": {
      "hp": 80,
      "atk": 82,
      "def": 83,
      "spa": 100,
      "spd": 100,
      "spe": 80
    },
    "catch_rate": 45,
    "base_exp": 236,
    "growth_rate": "medium-slow",
    "evolution_method": null
  },
  {
    "id": 4,
    "name": "charmander",
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 39,
      "atk": 52,
      "def": 43,
      "spa": 60,
      "spd": 50,
      "spe": 65
    },
    "catch_rate": 45,
    "base_exp": 62,
    "growth_rate": "medium-slow",
    "evolution_method": "Level 16"
  },
  {
    "id": 5,
    "name": "charmeleon",
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 58,
      "atk": 64,
      "def": 58,
      "spa": 80,
      "spd": 65,
      "spe": 80
    },
    "catch_rate": 45,
    "base_exp": 142,
    "growth_rate": "medium-slow",
    "evolution_method": "Level 36"
  },
  {
    "id": 6,
    "name": "charizard",
    "types": [
      "fire",
      "flying"
    ],
    "stats": {
      "hp": 78,
      "atk": 84,
      "def": 78,
      "spa": 109,
      "spd": 85,
      "spe": 100
    },
    "catch_rate": 45,
    "base_exp": 240,
    "growth_rate": "medium-slow",
    "evolution_method": null
  },
  {
    "id": 7,
    "name": "squirtle",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 44,
      "atk": 48,
      "def": 65,
      "spa": 50,
      "spd": 64,
      "spe": 43
    },
    "catch_rate": 45,
    "base_exp": 63,
    "growth_rate": "medium-slow",
    "evolution_method": "Level 16"
  },
  {
    "id": 8,
    "name": "wartortle",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 59,
      "atk": 63,
      "def": 80,
      "spa": 65,
      "spd": 80,
      "spe": 58
    },
    "catch_rate": 45,
    "base_exp": 142,
    "growth_rate": "medium-slow",
    "evolution_method": "Level 36"
  },
  {
    "id": 9,
    "name": "blastoise",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 79,
      "atk": 83,
      "def": 100,
      "spa": 85,
      "spd": 105,
      "spe": 78
    },
    "catch_rate": 45,
    "base_exp": 239,
    "growth_rate": "medium-slow",
    "evolution_method": null
  },
  {
    "id": 10,
    "name": "caterpie",
    "types": [
      "bug"
    ],
    "stats": {
      "hp": 45,
      "atk": 30,
      "def": 35,
      "spa": 20,
      "spd": 20,
      "spe": 45
    },
    "catch_rate": 255,
    "base_exp": 39,
    "growth_rate": "medium",
    "evolution_method": "Level 7"
  },
  {
    "id": 11,
    "name": "metapod",
    "types": [
      "bug"
    ],
    "stats": {
      "hp": 50,
      "atk": 20,
      "def": 55,
      "spa": 25,
      "spd": 25,
      "spe": 30
    },
    "catch_rate": 120,
    "base_exp": 72,
    "growth_rate": "medium",
    "evolution_method": "Level 10"
  },
  {
    "id": 12,
    "name": "butterfree",
    "types": [
      "bug",
      "flying"
    ],
    "stats": {
      "hp": 60,
      "atk": 45,
      "def": 50,
      "spa": 90,
      "spd": 80,
      "spe": 70
    },
    "catch_rate": 45,
    "base_exp": 178,
    "growth_rate": "medium",
    "evolution_method": null
  },
  {
    "id": 13,
    "name": "weedle",
    "types": [
      "bug",
      "poison"
    ],
    "stats": {
      "hp": 40,
      "atk": 35,
      "def": 30,
      "spa": 20,
      "spd": 20,
      "spe": 50
    },
    "catch_rate": 255,
    "base_exp": 39,
    "growth_rate": "medium",
    "evolution_method": "Level 7"
  },
  {
    "id": 14,
    "name": "kakuna",
    "types": [
      "bug",
      "poison"
    ],
    "stats": {
      "hp": 45,
      "atk": 25,
      "def": 50,
      "spa": 25,
      "spd": 25,
      "spe": 35
    },
    "catch_rate": 120,
    "base_exp": 72,
    "growth_rate": "medium",
    "evolution_method": "Level 10"
  },
  {
    "id": 15,
    "name": "beedrill",
    "types": [
      "bug",
      "poison"
    ],
    "stats": {
      "hp": 65,
      "atk": 90,
      "def": 40,
      "spa": 45,
      "spd": 80,
      "spe": 75
    },
    "catch_rate": 45,
    "base_exp": 178,
    "growth_rate": "medium",
    "evolution_method": null
  },
  {
    "id": 16,
    "name": "pidgey",
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 40,
      "atk": 45,
      "def": 40,
      "spa": 35,
      "spd": 35,
      "spe": 56
    },
    "catch_rate": 255,
    "base_exp": 50,
    "growth_rate": "medium-slow",
    "evolution_method": "Level 18"
  },
  {
    "id": 17,
    "name": "pidgeotto",
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 63,
      "atk": 60,
      "def": 55,
      "spa": 50,
      "spd": 50,
      "spe": 71
    },
    "catch_rate": 120,
    "base_exp": 122,
    "growth_rate": "medium-slow",
    "evolution_method": "Level 36"
  },
  {
    "id": 18,
    "name": "pidgeot",
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 83,
      "atk": 80,
      "def": 75,
      "spa": 70,
      "spd": 70,
      "spe": 101
    },
    "catch_rate": 45,
    "base_exp": 216,
    "growth_rate": "medium-slow",
    "evolution_method": null
  },
  {
    "id": 19,
    "name": "rattata",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 30,
      "atk": 56,
      "def": 35,
      "spa": 25,
      "spd": 35,
      "spe": 72
    },
    "catch_rate": 255,
    "base_exp": 51,
    "growth_rate": "medium",
    "evolution_method": "Level 20"
  },
  {
    "id": 20,
    "name": "raticate",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 55,
      "atk": 81,
      "def": 60,
      "spa": 50,
      "spd": 70,
      "spe": 97
    },
    "catch_rate": 127,
    "base_exp": 145,
    "growth_rate": "medium",
    "evolution_method": null
  },
  {
    "id": 21,
    "name": "spearow",
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 40,
      "atk": 60,
      "def": 30,
      "spa": 31,
      "spd": 31,
      "spe": 70
    },
    "catch_rate": 255,
    "base_exp": 52,
    "growth_rate": "medium",
    "evolution_method": "Level 20"
  },
  {
    "id": 22,
    "name": "fearow",
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 65,
      "atk": 90,
      "def": 65,
      "spa": 61,
      "spd": 61,
      "spe": 100
    },
    "catch_rate": 90,
    "base_exp": 155,
    "growth_rate": "medium",
    "evolution_method": null
  },
  {
    "id": 23,
    "name": "ekans",
    "types": [
      "poison"
    ],
    "stats": {
      "hp": 35,
      "atk": 60,
      "def": 44,
      "spa": 40,
      "spd": 54,
      "spe": 55
    },
    "catch_rate": 255,
    "base_exp": 58,
    "growth_rate": "medium",
    "evolution_method": "Level 22"
  },
  {
    "id": 24,
    "name": "arbok",
    "types": [
      "poison"
    ],
    "stats": {
      "hp": 60,
      "atk": 95,
      "def": 69,
      "spa": 65,
      "spd": 79,
      "spe": 80
    },
    "catch_rate": 90,
    "base_exp": 157,
    "growth_rate": "medium",
    "evolution_method": null
  },
  {
    "id": 25,
    "name": "pikachu",
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 35,
      "atk": 55,
      "def": 40,
      "spa": 50,
      "spd": 50,
      "spe": 90
    },
    "catch_rate": 190,
    "base_exp": 112,
    "growth_rate": "medium",
    "evolution_method": "Item: thunder-stone"
  },
  {
    "id": 26,
    "name": "raichu",
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 60,
      "atk": 90,
      "def": 55,
      "spa": 90,
      "spd": 80,
      "spe": 110
    },
    "catch_rate": 75,
    "base_exp": 218,
    "growth_rate": "medium",
    "evolution_method": null
  },
  {
    "id": 27,
    "name": "sandshrew",
    "types": [
      "ground"
    ],
    "stats": {
      "hp": 50,
      "atk": 75,
      "def": 85,
      "spa": 20,
      "spd": 30,
      "spe": 40
    },
    "catch_rate": 255,
    "base_exp": 60,
    "growth_rate": "medium",
    "evolution_method": "Level 22"
  },
  {
    "id": 28,
    "name": "sandslash",
    "types": [
      "ground"
    ],
    "stats": {
      "hp": 75,
      "atk": 100,
      "def": 110,
      "spa": 45,
      "spd": 55,
      "spe": 65
    },
    "catch_rate": 90,
    "base_exp": 158,
    "growth_rate": "medium",
    "evolution_method": null
  },
  {
    "id": 29,
    "name": "nidoran-f",
    "types": [
      "poison"
    ],
    "stats": {
      "hp": 55,
      "atk": 47,
      "def": 52,
      "spa": 40,
      "spd": 40,
      "spe": 41
    },
    "catch_rate": 235,
    "base_exp": 55,
    "growth_rate": "medium-slow",
    "evolution_method": "Level 16"
  },
  {
    "id": 30,
    "name": "nidorina",
    "types": [
      "poison"
    ],
    "stats": {
      "hp": 70,
      "atk": 62,
      "def": 67,
      "spa": 55,
      "spd": 55,
      "spe": 56
    },
    "catch_rate": 120,
    "base_exp": 128,
    "growth_rate": "medium-slow",
    "evolution_method": "Item: moon-stone"
  },
  {
    "id": 31,
    "name": "nidoqueen",
    "types": [
      "poison",
      "ground"
    ],
    "stats": {
      "hp": 90,
      "atk": 92,
      "def": 87,
      "spa": 75,
      "spd": 85,
      "spe": 76
    },
    "catch_rate": 45,
    "base_exp": 227,
    "growth_rate": "medium-slow",
    "evolution_method": null
  },
  {
    "id": 32,
    "name": "nidoran-m",
    "types": [
      "poison"
    ],
    "stats": {
      "hp": 46,
      "atk": 57,
      "def": 40,
      "spa": 40,
      "spd": 40,
      "spe": 50
    },
    "catch_rate": 235,
    "base_exp": 55,
    "growth_rate": "medium-slow",
    "evolution_method": "Level 16"
  },
  {
    "id": 33,
    "name": "nidorino",
    "types": [
      "poison"
    ],
    "stats": {
      "hp": 61,
      "atk": 72,
      "def": 57,
      "spa": 55,
      "spd": 55,
      "spe": 65
    },
    "catch_rate": 120,
    "base_exp": 128,
    "growth_rate": "medium-slow",
    "evolution_method": "Item: moon-stone"
  },
  {
    "id": 34,
    "name": "nidoking",
    "types": [
      "poison",
      "ground"
    ],
    "stats": {
      "hp": 81,
      "atk": 102,
      "def": 77,
      "spa": 85,
      "spd": 75,
      "spe": 85
    },
    "catch_rate": 45,
    "base_exp": 227,
    "growth_rate": "medium-slow",
    "evolution_method": null
  },
  {
    "id": 35,
    "name": "clefairy",
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 70,
      "atk": 45,
      "def": 48,
      "spa": 60,
      "spd": 65,
      "spe": 35
    },
    "catch_rate": 150,
    "base_exp": 113,
    "growth_rate": "fast",
    "evolution_method": "Item: moon-stone"
  },
  {
    "id": 36,
    "name": "clefable",
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 95,
      "atk": 70,
      "def": 73,
      "spa": 95,
      "spd": 90,
      "spe": 60
    },
    "catch_rate": 25,
    "base_exp": 217,
    "growth_rate": "fast",
    "evolution_method": null
  },
  {
    "id": 37,
    "name": "vulpix",
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 38,
      "atk": 41,
      "def": 40,
      "spa": 50,
      "spd": 65,
      "spe": 65
    },
    "catch_rate": 190,
    "base_exp": 60,
    "growth_rate": "medium",
    "evolution_method": "Item: fire-stone"
  },
  {
    "id": 38,
    "name": "ninetales",
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 73,
      "atk": 76,
      "def": 75,
      "spa": 81,
      "spd": 100,
      "spe": 100
    },
    "catch_rate": 75,
    "base_exp": 177,
    "growth_rate": "medium",
    "evolution_method": null
  },
  {
    "id": 39,
    "name": "jigglypuff",
    "types": [
      "normal",
      "fairy"
    ],
    "stats": {
      "hp": 115,
      "atk": 45,
      "def": 20,
      "spa": 45,
      "spd": 25,
      "spe": 20
    },
    "catch_rate": 170,
    "base_exp": 95,
    "growth_rate": "fast",
    "evolution_method": "Item: moon-stone"
  },
  {
    "id": 40,
    "name": "wigglytuff",
    "types": [
      "normal",
      "fairy"
    ],
    "stats": {
      "hp": 140,
      "atk": 70,
      "def": 45,
      "spa": 85,
      "spd": 50,
      "spe": 45
    },
    "catch_rate": 50,
    "base_exp": 196,
    "growth_rate": "fast",
    "evolution_method": null
  },
  {
    "id": 41,
    "name": "zubat",
    "types": [
      "poison",
      "flying"
    ],
    "stats": {
      "hp": 40,
      "atk": 45,
      "def": 35,
      "spa": 30,
      "spd": 40,
      "spe": 55
    },
    "catch_rate": 255,
    "base_exp": 49,
    "growth_rate": "medium",
    "evolution_method": "Level 22"
  },
  {
    "id": 42,
    "name": "golbat",
    "types": [
      "poison",
      "flying"
    ],
    "stats": {
      "hp": 75,
      "atk": 80,
      "def": 70,
      "spa": 65,
      "spd": 75,
      "spe": 90
    },
    "catch_rate": 90,
    "base_exp": 159,
    "growth_rate": "medium",
    "evolution_method": "Level ?"
  },
  {
    "id": 43,
    "name": "oddish",
    "types": [
      "grass",
      "poison"
    ],
    "stats": {
      "hp": 45,
      "atk": 50,
      "def": 55,
      "spa": 75,
      "spd": 65,
      "spe": 30
    },
    "catch_rate": 255,
    "base_exp": 64,
    "growth_rate": "medium-slow",
    "evolution_method": "Level 21"
  },
  {
    "id": 44,
    "name": "gloom",
    "types": [
      "grass",
      "poison"
    ],
    "stats": {
      "hp": 60,
      "atk": 65,
      "def": 70,
      "spa": 85,
      "spd": 75,
      "spe": 40
    },
    "catch_rate": 120,
    "base_exp": 138,
    "growth_rate": "medium-slow",
    "evolution_method": "Item: leaf-stone"
  },
  {
    "id": 45,
    "name": "vileplume",
    "types": [
      "grass",
      "poison"
    ],
    "stats": {
      "hp": 75,
      "atk": 80,
      "def": 85,
      "spa": 110,
      "spd": 90,
      "spe": 50
    },
    "catch_rate": 45,
    "base_exp": 221,
    "growth_rate": "medium-slow",
    "evolution_method": null
  },
  {
    "id": 46,
    "name": "paras",
    "types": [
      "bug",
      "grass"
    ],
    "stats": {
      "hp": 35,
      "atk": 70,
      "def": 55,
      "spa": 45,
      "spd": 55,
      "spe": 25
    },
    "catch_rate": 190,
    "base_exp": 57,
    "growth_rate": "medium",
    "evolution_method": "Level 24"
  },
  {
    "id": 47,
    "name": "parasect",
    "types": [
      "bug",
      "grass"
    ],
    "stats": {
      "hp": 60,
      "atk": 95,
      "def": 80,
      "spa": 60,
      "spd": 80,
      "spe": 30
    },
    "catch_rate": 75,
    "base_exp": 142,
    "growth_rate": "medium",
    "evolution_method": null
  },
  {
    "id": 48,
    "name": "venonat",
    "types": [
      "bug",
      "poison"
    ],
    "stats": {
      "hp": 60,
      "atk": 55,
      "def": 50,
      "spa": 40,
      "spd": 55,
      "spe": 45
    },
    "catch_rate": 190,
    "base_exp": 61,
    "growth_rate": "medium",
    "evolution_method": "Level 31"
  },
  {
    "id": 49,
    "name": "venomoth",
    "types": [
      "bug",
      "poison"
    ],
    "stats": {
      "hp": 70,
      "atk": 65,
      "def": 60,
      "spa": 90,
      "spd": 75,
      "spe": 90
    },
    "catch_rate": 75,
    "base_exp": 158,
    "growth_rate": "medium",
    "evolution_method": null
  },
  {
    "id": 50,
    "name": "diglett",
    "types": [
      "ground"
    ],
    "stats": {
      "hp": 10,
      "atk": 55,
      "def": 25,
      "spa": 35,
      "spd": 45,
      "spe": 95
    },
    "catch_rate": 255,
    "base_exp": 53,
    "growth_rate": "medium",
    "evolution_method": "Level 26"
  },
  {
    "id": 51,
    "name": "dugtrio",
    "types": [
      "ground"
    ],
    "stats": {
      "hp": 35,
      "atk": 100,
      "def": 50,
      "spa": 50,
      "spd": 70,
      "spe": 120
    },
    "catch_rate": 50,
    "base_exp": 149,
    "growth_rate": "medium",
    "evolution_method": null
  },
  {
    "id": 52,
    "name": "meowth",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 40,
      "atk": 45,
      "def": 35,
      "spa": 40,
      "spd": 40,
      "spe": 90
    },
    "catch_rate": 255,
    "base_exp": 58,
    "growth_rate": "medium",
    "evolution_method": "Level 28"
  },
  {
    "id": 53,
    "name": "persian",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 65,
      "atk": 70,
      "def": 60,
      "spa": 65,
      "spd": 65,
      "spe": 115
    },
    "catch_rate": 90,
    "base_exp": 154,
    "growth_rate": "medium",
    "evolution_method": null
  },
  {
    "id": 54,
    "name": "psyduck",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 50,
      "atk": 52,
      "def": 48,
      "spa": 65,
      "spd": 50,
      "spe": 55
    },
    "catch_rate": 190,
    "base_exp": 64,
    "growth_rate": "medium",
    "evolution_method": "Level 33"
  },
  {
    "id": 55,
    "name": "golduck",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 80,
      "atk": 82,
      "def": 78,
      "spa": 95,
      "spd": 80,
      "spe": 85
    },
    "catch_rate": 75,
    "base_exp": 175,
    "growth_rate": "medium",
    "evolution_method": null
  },
  {
    "id": 56,
    "name": "mankey",
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 40,
      "atk": 80,
      "def": 35,
      "spa": 35,
      "spd": 45,
      "spe": 70
    },
    "catch_rate": 190,
    "base_exp": 61,
    "growth_rate": "medium",
    "evolution_method": "Level 28"
  },
  {
    "id": 57,
    "name": "primeape",
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 65,
      "atk": 105,
      "def": 60,
      "spa": 60,
      "spd": 70,
      "spe": 95
    },
    "catch_rate": 75,
    "base_exp": 159,
    "growth_rate": "medium",
    "evolution_method": "use-move"
  },
  {
    "id": 58,
    "name": "growlithe",
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 55,
      "atk": 70,
      "def": 45,
      "spa": 70,
      "spd": 50,
      "spe": 60
    },
    "catch_rate": 190,
    "base_exp": 70,
    "growth_rate": "slow",
    "evolution_method": "Item: fire-stone"
  },
  {
    "id": 59,
    "name": "arcanine",
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 90,
      "atk": 110,
      "def": 80,
      "spa": 100,
      "spd": 80,
      "spe": 95
    },
    "catch_rate": 75,
    "base_exp": 194,
    "growth_rate": "slow",
    "evolution_method": null
  },
  {
    "id": 60,
    "name": "poliwag",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 40,
      "atk": 50,
      "def": 40,
      "spa": 40,
      "spd": 40,
      "spe": 90
    },
    "catch_rate": 255,
    "base_exp": 60,
    "growth_rate": "medium-slow",
    "evolution_method": "Level 25"
  },
  {
    "id": 61,
    "name": "poliwhirl",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 65,
      "atk": 65,
      "def": 65,
      "spa": 50,
      "spd": 50,
      "spe": 90
    },
    "catch_rate": 120,
    "base_exp": 135,
    "growth_rate": "medium-slow",
    "evolution_method": "Item: water-stone"
  },
  {
    "id": 62,
    "name": "poliwrath",
    "types": [
      "water",
      "fighting"
    ],
    "stats": {
      "hp": 90,
      "atk": 95,
      "def": 95,
      "spa": 70,
      "spd": 90,
      "spe": 70
    },
    "catch_rate": 45,
    "base_exp": 230,
    "growth_rate": "medium-slow",
    "evolution_method": null
  },
  {
    "id": 63,
    "name": "abra",
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 25,
      "atk": 20,
      "def": 15,
      "spa": 105,
      "spd": 55,
      "spe": 90
    },
    "catch_rate": 200,
    "base_exp": 62,
    "growth_rate": "medium-slow",
    "evolution_method": "Level 16"
  },
  {
    "id": 64,
    "name": "kadabra",
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 40,
      "atk": 35,
      "def": 30,
      "spa": 120,
      "spd": 70,
      "spe": 105
    },
    "catch_rate": 100,
    "base_exp": 140,
    "growth_rate": "medium-slow",
    "evolution_method": "Trade"
  },
  {
    "id": 65,
    "name": "alakazam",
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 55,
      "atk": 50,
      "def": 45,
      "spa": 135,
      "spd": 95,
      "spe": 120
    },
    "catch_rate": 50,
    "base_exp": 225,
    "growth_rate": "medium-slow",
    "evolution_method": null
  },
  {
    "id": 66,
    "name": "machop",
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 70,
      "atk": 80,
      "def": 50,
      "spa": 35,
      "spd": 35,
      "spe": 35
    },
    "catch_rate": 180,
    "base_exp": 61,
    "growth_rate": "medium-slow",
    "evolution_method": "Level 28"
  },
  {
    "id": 67,
    "name": "machoke",
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 80,
      "atk": 100,
      "def": 70,
      "spa": 50,
      "spd": 60,
      "spe": 45
    },
    "catch_rate": 90,
    "base_exp": 142,
    "growth_rate": "medium-slow",
    "evolution_method": "Trade"
  },
  {
    "id": 68,
    "name": "machamp",
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 90,
      "atk": 130,
      "def": 80,
      "spa": 65,
      "spd": 85,
      "spe": 55
    },
    "catch_rate": 45,
    "base_exp": 227,
    "growth_rate": "medium-slow",
    "evolution_method": null
  },
  {
    "id": 69,
    "name": "bellsprout",
    "types": [
      "grass",
      "poison"
    ],
    "stats": {
      "hp": 50,
      "atk": 75,
      "def": 35,
      "spa": 70,
      "spd": 30,
      "spe": 40
    },
    "catch_rate": 255,
    "base_exp": 60,
    "growth_rate": "medium-slow",
    "evolution_method": "Level 21"
  },
  {
    "id": 70,
    "name": "weepinbell",
    "types": [
      "grass",
      "poison"
    ],
    "stats": {
      "hp": 65,
      "atk": 90,
      "def": 50,
      "spa": 85,
      "spd": 45,
      "spe": 55
    },
    "catch_rate": 120,
    "base_exp": 137,
    "growth_rate": "medium-slow",
    "evolution_method": "Item: leaf-stone"
  },
  {
    "id": 71,
    "name": "victreebel",
    "types": [
      "grass",
      "poison"
    ],
    "stats": {
      "hp": 80,
      "atk": 105,
      "def": 65,
      "spa": 100,
      "spd": 70,
      "spe": 70
    },
    "catch_rate": 45,
    "base_exp": 221,
    "growth_rate": "medium-slow",
    "evolution_method": null
  },
  {
    "id": 72,
    "name": "tentacool",
    "types": [
      "water",
      "poison"
    ],
    "stats": {
      "hp": 40,
      "atk": 40,
      "def": 35,
      "spa": 50,
      "spd": 100,
      "spe": 70
    },
    "catch_rate": 190,
    "base_exp": 67,
    "growth_rate": "slow",
    "evolution_method": "Level 30"
  },
  {
    "id": 73,
    "name": "tentacruel",
    "types": [
      "water",
      "poison"
    ],
    "stats": {
      "hp": 80,
      "atk": 70,
      "def": 65,
      "spa": 80,
      "spd": 120,
      "spe": 100
    },
    "catch_rate": 60,
    "base_exp": 180,
    "growth_rate": "slow",
    "evolution_method": null
  },
  {
    "id": 74,
    "name": "geodude",
    "types": [
      "rock",
      "ground"
    ],
    "stats": {
      "hp": 40,
      "atk": 80,
      "def": 100,
      "spa": 30,
      "spd": 30,
      "spe": 20
    },
    "catch_rate": 255,
    "base_exp": 60,
    "growth_rate": "medium-slow",
    "evolution_method": "Level 25"
  },
  {
    "id": 75,
    "name": "graveler",
    "types": [
      "rock",
      "ground"
    ],
    "stats": {
      "hp": 55,
      "atk": 95,
      "def": 115,
      "spa": 45,
      "spd": 45,
      "spe": 35
    },
    "catch_rate": 120,
    "base_exp": 137,
    "growth_rate": "medium-slow",
    "evolution_method": "Trade"
  },
  {
    "id": 76,
    "name": "golem",
    "types": [
      "rock",
      "ground"
    ],
    "stats": {
      "hp": 80,
      "atk": 120,
      "def": 130,
      "spa": 55,
      "spd": 65,
      "spe": 45
    },
    "catch_rate": 45,
    "base_exp": 223,
    "growth_rate": "medium-slow",
    "evolution_method": null
  },
  {
    "id": 77,
    "name": "ponyta",
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 50,
      "atk": 85,
      "def": 55,
      "spa": 65,
      "spd": 65,
      "spe": 90
    },
    "catch_rate": 190,
    "base_exp": 82,
    "growth_rate": "medium",
    "evolution_method": "Level 40"
  },
  {
    "id": 78,
    "name": "rapidash",
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 65,
      "atk": 100,
      "def": 70,
      "spa": 80,
      "spd": 80,
      "spe": 105
    },
    "catch_rate": 60,
    "base_exp": 175,
    "growth_rate": "medium",
    "evolution_method": null
  },
  {
    "id": 79,
    "name": "slowpoke",
    "types": [
      "water",
      "psychic"
    ],
    "stats": {
      "hp": 90,
      "atk": 65,
      "def": 65,
      "spa": 40,
      "spd": 40,
      "spe": 15
    },
    "catch_rate": 190,
    "base_exp": 63,
    "growth_rate": "medium",
    "evolution_method": "Level 37"
  },
  {
    "id": 80,
    "name": "slowbro",
    "types": [
      "water",
      "psychic"
    ],
    "stats": {
      "hp": 95,
      "atk": 75,
      "def": 110,
      "spa": 100,
      "spd": 80,
      "spe": 30
    },
    "catch_rate": 75,
    "base_exp": 172,
    "growth_rate": "medium",
    "evolution_method": null
  },
  {
    "id": 81,
    "name": "magnemite",
    "types": [
      "electric",
      "steel"
    ],
    "stats": {
      "hp": 25,
      "atk": 35,
      "def": 70,
      "spa": 95,
      "spd": 55,
      "spe": 45
    },
    "catch_rate": 190,
    "base_exp": 65,
    "growth_rate": "medium",
    "evolution_method": "Level 30"
  },
  {
    "id": 82,
    "name": "magneton",
    "types": [
      "electric",
      "steel"
    ],
    "stats": {
      "hp": 50,
      "atk": 60,
      "def": 95,
      "spa": 120,
      "spd": 70,
      "spe": 70
    },
    "catch_rate": 60,
    "base_exp": 163,
    "growth_rate": "medium",
    "evolution_method": "Level ?"
  },
  {
    "id": 83,
    "name": "farfetchd",
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 52,
      "atk": 90,
      "def": 55,
      "spa": 58,
      "spd": 62,
      "spe": 60
    },
    "catch_rate": 45,
    "base_exp": 132,
    "growth_rate": "medium",
    "evolution_method": "three-critical-hits"
  },
  {
    "id": 84,
    "name": "doduo",
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 35,
      "atk": 85,
      "def": 45,
      "spa": 35,
      "spd": 35,
      "spe": 75
    },
    "catch_rate": 190,
    "base_exp": 62,
    "growth_rate": "medium",
    "evolution_method": "Level 31"
  },
  {
    "id": 85,
    "name": "dodrio",
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 60,
      "atk": 110,
      "def": 70,
      "spa": 60,
      "spd": 60,
      "spe": 110
    },
    "catch_rate": 45,
    "base_exp": 165,
    "growth_rate": "medium",
    "evolution_method": null
  },
  {
    "id": 86,
    "name": "seel",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 65,
      "atk": 45,
      "def": 55,
      "spa": 45,
      "spd": 70,
      "spe": 45
    },
    "catch_rate": 190,
    "base_exp": 65,
    "growth_rate": "medium",
    "evolution_method": "Level 34"
  },
  {
    "id": 87,
    "name": "dewgong",
    "types": [
      "water",
      "ice"
    ],
    "stats": {
      "hp": 90,
      "atk": 70,
      "def": 80,
      "spa": 70,
      "spd": 95,
      "spe": 70
    },
    "catch_rate": 75,
    "base_exp": 166,
    "growth_rate": "medium",
    "evolution_method": null
  },
  {
    "id": 88,
    "name": "grimer",
    "types": [
      "poison"
    ],
    "stats": {
      "hp": 80,
      "atk": 80,
      "def": 50,
      "spa": 40,
      "spd": 50,
      "spe": 25
    },
    "catch_rate": 190,
    "base_exp": 65,
    "growth_rate": "medium",
    "evolution_method": "Level 38"
  },
  {
    "id": 89,
    "name": "muk",
    "types": [
      "poison"
    ],
    "stats": {
      "hp": 105,
      "atk": 105,
      "def": 75,
      "spa": 65,
      "spd": 100,
      "spe": 50
    },
    "catch_rate": 75,
    "base_exp": 175,
    "growth_rate": "medium",
    "evolution_method": null
  },
  {
    "id": 90,
    "name": "shellder",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 30,
      "atk": 65,
      "def": 100,
      "spa": 45,
      "spd": 25,
      "spe": 40
    },
    "catch_rate": 190,
    "base_exp": 61,
    "growth_rate": "slow",
    "evolution_method": "Item: water-stone"
  },
  {
    "id": 91,
    "name": "cloyster",
    "types": [
      "water",
      "ice"
    ],
    "stats": {
      "hp": 50,
      "atk": 95,
      "def": 180,
      "spa": 85,
      "spd": 45,
      "spe": 70
    },
    "catch_rate": 60,
    "base_exp": 184,
    "growth_rate": "slow",
    "evolution_method": null
  },
  {
    "id": 92,
    "name": "gastly",
    "types": [
      "ghost",
      "poison"
    ],
    "stats": {
      "hp": 30,
      "atk": 35,
      "def": 30,
      "spa": 100,
      "spd": 35,
      "spe": 80
    },
    "catch_rate": 190,
    "base_exp": 62,
    "growth_rate": "medium-slow",
    "evolution_method": "Level 25"
  },
  {
    "id": 93,
    "name": "haunter",
    "types": [
      "ghost",
      "poison"
    ],
    "stats": {
      "hp": 45,
      "atk": 50,
      "def": 45,
      "spa": 115,
      "spd": 55,
      "spe": 95
    },
    "catch_rate": 90,
    "base_exp": 142,
    "growth_rate": "medium-slow",
    "evolution_method": "Trade"
  },
  {
    "id": 94,
    "name": "gengar",
    "types": [
      "ghost",
      "poison"
    ],
    "stats": {
      "hp": 60,
      "atk": 65,
      "def": 60,
      "spa": 130,
      "spd": 75,
      "spe": 110
    },
    "catch_rate": 45,
    "base_exp": 225,
    "growth_rate": "medium-slow",
    "evolution_method": null
  },
  {
    "id": 95,
    "name": "onix",
    "types": [
      "rock",
      "ground"
    ],
    "stats": {
      "hp": 35,
      "atk": 45,
      "def": 160,
      "spa": 30,
      "spd": 45,
      "spe": 70
    },
    "catch_rate": 45,
    "base_exp": 77,
    "growth_rate": "medium",
    "evolution_method": "Trade"
  },
  {
    "id": 96,
    "name": "drowzee",
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 60,
      "atk": 48,
      "def": 45,
      "spa": 43,
      "spd": 90,
      "spe": 42
    },
    "catch_rate": 190,
    "base_exp": 66,
    "growth_rate": "medium",
    "evolution_method": "Level 26"
  },
  {
    "id": 97,
    "name": "hypno",
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 85,
      "atk": 73,
      "def": 70,
      "spa": 73,
      "spd": 115,
      "spe": 67
    },
    "catch_rate": 75,
    "base_exp": 169,
    "growth_rate": "medium",
    "evolution_method": null
  },
  {
    "id": 98,
    "name": "krabby",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 30,
      "atk": 105,
      "def": 90,
      "spa": 25,
      "spd": 25,
      "spe": 50
    },
    "catch_rate": 225,
    "base_exp": 65,
    "growth_rate": "medium",
    "evolution_method": "Level 28"
  },
  {
    "id": 99,
    "name": "kingler",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 55,
      "atk": 130,
      "def": 115,
      "spa": 50,
      "spd": 50,
      "spe": 75
    },
    "catch_rate": 60,
    "base_exp": 166,
    "growth_rate": "medium",
    "evolution_method": null
  },
  {
    "id": 100,
    "name": "voltorb",
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 40,
      "atk": 30,
      "def": 50,
      "spa": 55,
      "spd": 55,
      "spe": 100
    },
    "catch_rate": 190,
    "base_exp": 66,
    "growth_rate": "medium",
    "evolution_method": "Level 30"
  },
  {
    "id": 101,
    "name": "electrode",
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 60,
      "atk": 50,
      "def": 70,
      "spa": 80,
      "spd": 80,
      "spe": 150
    },
    "catch_rate": 60,
    "base_exp": 172,
    "growth_rate": "medium",
    "evolution_method": null
  },
  {
    "id": 102,
    "name": "exeggcute",
    "types": [
      "grass",
      "psychic"
    ],
    "stats": {
      "hp": 60,
      "atk": 40,
      "def": 80,
      "spa": 60,
      "spd": 45,
      "spe": 40
    },
    "catch_rate": 90,
    "base_exp": 65,
    "growth_rate": "slow",
    "evolution_method": "Item: leaf-stone"
  },
  {
    "id": 103,
    "name": "exeggutor",
    "types": [
      "grass",
      "psychic"
    ],
    "stats": {
      "hp": 95,
      "atk": 95,
      "def": 85,
      "spa": 125,
      "spd": 75,
      "spe": 55
    },
    "catch_rate": 45,
    "base_exp": 186,
    "growth_rate": "slow",
    "evolution_method": null
  },
  {
    "id": 104,
    "name": "cubone",
    "types": [
      "ground"
    ],
    "stats": {
      "hp": 50,
      "atk": 50,
      "def": 95,
      "spa": 40,
      "spd": 50,
      "spe": 35
    },
    "catch_rate": 190,
    "base_exp": 64,
    "growth_rate": "medium",
    "evolution_method": "Level 28"
  },
  {
    "id": 105,
    "name": "marowak",
    "types": [
      "ground"
    ],
    "stats": {
      "hp": 60,
      "atk": 80,
      "def": 110,
      "spa": 50,
      "spd": 80,
      "spe": 45
    },
    "catch_rate": 75,
    "base_exp": 149,
    "growth_rate": "medium",
    "evolution_method": null
  },
  {
    "id": 106,
    "name": "hitmonlee",
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 50,
      "atk": 120,
      "def": 53,
      "spa": 35,
      "spd": 110,
      "spe": 87
    },
    "catch_rate": 45,
    "base_exp": 159,
    "growth_rate": "medium",
    "evolution_method": null
  },
  {
    "id": 107,
    "name": "hitmonchan",
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 50,
      "atk": 105,
      "def": 79,
      "spa": 35,
      "spd": 110,
      "spe": 76
    },
    "catch_rate": 45,
    "base_exp": 159,
    "growth_rate": "medium",
    "evolution_method": null
  },
  {
    "id": 108,
    "name": "lickitung",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 90,
      "atk": 55,
      "def": 75,
      "spa": 60,
      "spd": 75,
      "spe": 30
    },
    "catch_rate": 45,
    "base_exp": 77,
    "growth_rate": "medium",
    "evolution_method": "Level ?"
  },
  {
    "id": 109,
    "name": "koffing",
    "types": [
      "poison"
    ],
    "stats": {
      "hp": 40,
      "atk": 65,
      "def": 95,
      "spa": 60,
      "spd": 45,
      "spe": 35
    },
    "catch_rate": 190,
    "base_exp": 68,
    "growth_rate": "medium",
    "evolution_method": "Level 35"
  },
  {
    "id": 110,
    "name": "weezing",
    "types": [
      "poison"
    ],
    "stats": {
      "hp": 65,
      "atk": 90,
      "def": 120,
      "spa": 85,
      "spd": 70,
      "spe": 60
    },
    "catch_rate": 60,
    "base_exp": 172,
    "growth_rate": "medium",
    "evolution_method": null
  },
  {
    "id": 111,
    "name": "rhyhorn",
    "types": [
      "ground",
      "rock"
    ],
    "stats": {
      "hp": 80,
      "atk": 85,
      "def": 95,
      "spa": 30,
      "spd": 30,
      "spe": 25
    },
    "catch_rate": 120,
    "base_exp": 69,
    "growth_rate": "slow",
    "evolution_method": "Level 42"
  },
  {
    "id": 112,
    "name": "rhydon",
    "types": [
      "ground",
      "rock"
    ],
    "stats": {
      "hp": 105,
      "atk": 130,
      "def": 120,
      "spa": 45,
      "spd": 45,
      "spe": 40
    },
    "catch_rate": 60,
    "base_exp": 170,
    "growth_rate": "slow",
    "evolution_method": "Trade"
  },
  {
    "id": 113,
    "name": "chansey",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 250,
      "atk": 5,
      "def": 5,
      "spa": 35,
      "spd": 105,
      "spe": 50
    },
    "catch_rate": 30,
    "base_exp": 395,
    "growth_rate": "fast",
    "evolution_method": "Level ?"
  },
  {
    "id": 114,
    "name": "tangela",
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 65,
      "atk": 55,
      "def": 115,
      "spa": 100,
      "spd": 40,
      "spe": 60
    },
    "catch_rate": 45,
    "base_exp": 87,
    "growth_rate": "medium",
    "evolution_method": "Level ?"
  },
  {
    "id": 115,
    "name": "kangaskhan",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 105,
      "atk": 95,
      "def": 80,
      "spa": 40,
      "spd": 80,
      "spe": 90
    },
    "catch_rate": 45,
    "base_exp": 172,
    "growth_rate": "medium",
    "evolution_method": null
  },
  {
    "id": 116,
    "name": "horsea",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 30,
      "atk": 40,
      "def": 70,
      "spa": 70,
      "spd": 25,
      "spe": 60
    },
    "catch_rate": 225,
    "base_exp": 59,
    "growth_rate": "medium",
    "evolution_method": "Level 32"
  },
  {
    "id": 117,
    "name": "seadra",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 55,
      "atk": 65,
      "def": 95,
      "spa": 95,
      "spd": 45,
      "spe": 85
    },
    "catch_rate": 75,
    "base_exp": 154,
    "growth_rate": "medium",
    "evolution_method": "Trade"
  },
  {
    "id": 118,
    "name": "goldeen",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 45,
      "atk": 67,
      "def": 60,
      "spa": 35,
      "spd": 50,
      "spe": 63
    },
    "catch_rate": 225,
    "base_exp": 64,
    "growth_rate": "medium",
    "evolution_method": "Level 33"
  },
  {
    "id": 119,
    "name": "seaking",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 80,
      "atk": 92,
      "def": 65,
      "spa": 65,
      "spd": 80,
      "spe": 68
    },
    "catch_rate": 60,
    "base_exp": 158,
    "growth_rate": "medium",
    "evolution_method": null
  },
  {
    "id": 120,
    "name": "staryu",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 30,
      "atk": 45,
      "def": 55,
      "spa": 70,
      "spd": 55,
      "spe": 85
    },
    "catch_rate": 225,
    "base_exp": 68,
    "growth_rate": "slow",
    "evolution_method": "Item: water-stone"
  },
  {
    "id": 121,
    "name": "starmie",
    "types": [
      "water",
      "psychic"
    ],
    "stats": {
      "hp": 60,
      "atk": 75,
      "def": 85,
      "spa": 100,
      "spd": 85,
      "spe": 115
    },
    "catch_rate": 60,
    "base_exp": 182,
    "growth_rate": "slow",
    "evolution_method": null
  },
  {
    "id": 122,
    "name": "mr-mime",
    "types": [
      "psychic",
      "fairy"
    ],
    "stats": {
      "hp": 40,
      "atk": 45,
      "def": 65,
      "spa": 100,
      "spd": 120,
      "spe": 90
    },
    "catch_rate": 45,
    "base_exp": 161,
    "growth_rate": "medium",
    "evolution_method": "Level 42"
  },
  {
    "id": 123,
    "name": "scyther",
    "types": [
      "bug",
      "flying"
    ],
    "stats": {
      "hp": 70,
      "atk": 110,
      "def": 80,
      "spa": 55,
      "spd": 80,
      "spe": 105
    },
    "catch_rate": 45,
    "base_exp": 100,
    "growth_rate": "medium",
    "evolution_method": "Trade"
  },
  {
    "id": 124,
    "name": "jynx",
    "types": [
      "ice",
      "psychic"
    ],
    "stats": {
      "hp": 65,
      "atk": 50,
      "def": 35,
      "spa": 115,
      "spd": 95,
      "spe": 95
    },
    "catch_rate": 45,
    "base_exp": 159,
    "growth_rate": "medium",
    "evolution_method": null
  },
  {
    "id": 125,
    "name": "electabuzz",
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 65,
      "atk": 83,
      "def": 57,
      "spa": 95,
      "spd": 85,
      "spe": 105
    },
    "catch_rate": 45,
    "base_exp": 172,
    "growth_rate": "medium",
    "evolution_method": "Trade"
  },
  {
    "id": 126,
    "name": "magmar",
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 65,
      "atk": 95,
      "def": 57,
      "spa": 100,
      "spd": 85,
      "spe": 93
    },
    "catch_rate": 45,
    "base_exp": 173,
    "growth_rate": "medium",
    "evolution_method": "Trade"
  },
  {
    "id": 127,
    "name": "pinsir",
    "types": [
      "bug"
    ],
    "stats": {
      "hp": 65,
      "atk": 125,
      "def": 100,
      "spa": 55,
      "spd": 70,
      "spe": 85
    },
    "catch_rate": 45,
    "base_exp": 175,
    "growth_rate": "slow",
    "evolution_method": null
  },
  {
    "id": 128,
    "name": "tauros",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 75,
      "atk": 100,
      "def": 95,
      "spa": 40,
      "spd": 70,
      "spe": 110
    },
    "catch_rate": 45,
    "base_exp": 172,
    "growth_rate": "slow",
    "evolution_method": null
  },
  {
    "id": 129,
    "name": "magikarp",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 20,
      "atk": 10,
      "def": 55,
      "spa": 15,
      "spd": 20,
      "spe": 80
    },
    "catch_rate": 255,
    "base_exp": 40,
    "growth_rate": "slow",
    "evolution_method": "Level 20"
  },
  {
    "id": 130,
    "name": "gyarados",
    "types": [
      "water",
      "flying"
    ],
    "stats": {
      "hp": 95,
      "atk": 125,
      "def": 79,
      "spa": 60,
      "spd": 100,
      "spe": 81
    },
    "catch_rate": 45,
    "base_exp": 189,
    "growth_rate": "slow",
    "evolution_method": null
  },
  {
    "id": 131,
    "name": "lapras",
    "types": [
      "water",
      "ice"
    ],
    "stats": {
      "hp": 130,
      "atk": 85,
      "def": 80,
      "spa": 85,
      "spd": 95,
      "spe": 60
    },
    "catch_rate": 45,
    "base_exp": 187,
    "growth_rate": "slow",
    "evolution_method": null
  },
  {
    "id": 132,
    "name": "ditto",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 48,
      "atk": 48,
      "def": 48,
      "spa": 48,
      "spd": 48,
      "spe": 48
    },
    "catch_rate": 35,
    "base_exp": 101,
    "growth_rate": "medium",
    "evolution_method": null
  },
  {
    "id": 133,
    "name": "eevee",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 55,
      "atk": 55,
      "def": 50,
      "spa": 45,
      "spd": 65,
      "spe": 55
    },
    "catch_rate": 45,
    "base_exp": 65,
    "growth_rate": "medium",
    "evolution_method": "Item: water-stone"
  },
  {
    "id": 134,
    "name": "vaporeon",
    "types": [
      "water"
    ],
    "stats": {
      "hp": 130,
      "atk": 65,
      "def": 60,
      "spa": 110,
      "spd": 95,
      "spe": 65
    },
    "catch_rate": 45,
    "base_exp": 184,
    "growth_rate": "medium",
    "evolution_method": null
  },
  {
    "id": 135,
    "name": "jolteon",
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 65,
      "atk": 65,
      "def": 60,
      "spa": 110,
      "spd": 95,
      "spe": 130
    },
    "catch_rate": 45,
    "base_exp": 184,
    "growth_rate": "medium",
    "evolution_method": null
  },
  {
    "id": 136,
    "name": "flareon",
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 65,
      "atk": 130,
      "def": 60,
      "spa": 95,
      "spd": 110,
      "spe": 65
    },
    "catch_rate": 45,
    "base_exp": 184,
    "growth_rate": "medium",
    "evolution_method": null
  },
  {
    "id": 137,
    "name": "porygon",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 65,
      "atk": 60,
      "def": 70,
      "spa": 85,
      "spd": 75,
      "spe": 40
    },
    "catch_rate": 45,
    "base_exp": 79,
    "growth_rate": "medium",
    "evolution_method": "Trade"
  },
  {
    "id": 138,
    "name": "omanyte",
    "types": [
      "rock",
      "water"
    ],
    "stats": {
      "hp": 35,
      "atk": 40,
      "def": 100,
      "spa": 90,
      "spd": 55,
      "spe": 35
    },
    "catch_rate": 45,
    "base_exp": 71,
    "growth_rate": "medium",
    "evolution_method": "Level 40"
  },
  {
    "id": 139,
    "name": "omastar",
    "types": [
      "rock",
      "water"
    ],
    "stats": {
      "hp": 70,
      "atk": 60,
      "def": 125,
      "spa": 115,
      "spd": 70,
      "spe": 55
    },
    "catch_rate": 45,
    "base_exp": 173,
    "growth_rate": "medium",
    "evolution_method": null
  },
  {
    "id": 140,
    "name": "kabuto",
    "types": [
      "rock",
      "water"
    ],
    "stats": {
      "hp": 30,
      "atk": 80,
      "def": 90,
      "spa": 55,
      "spd": 45,
      "spe": 55
    },
    "catch_rate": 45,
    "base_exp": 71,
    "growth_rate": "medium",
    "evolution_method": "Level 40"
  },
  {
    "id": 141,
    "name": "kabutops",
    "types": [
      "rock",
      "water"
    ],
    "stats": {
      "hp": 60,
      "atk": 115,
      "def": 105,
      "spa": 65,
      "spd": 70,
      "spe": 80
    },
    "catch_rate": 45,
    "base_exp": 173,
    "growth_rate": "medium",
    "evolution_method": null
  },
  {
    "id": 142,
    "name": "aerodactyl",
    "types": [
      "rock",
      "flying"
    ],
    "stats": {
      "hp": 80,
      "atk": 105,
      "def": 65,
      "spa": 60,
      "spd": 75,
      "spe": 130
    },
    "catch_rate": 45,
    "base_exp": 180,
    "growth_rate": "slow",
    "evolution_method": null
  },
  {
    "id": 143,
    "name": "snorlax",
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 160,
      "atk": 110,
      "def": 65,
      "spa": 65,
      "spd": 110,
      "spe": 30
    },
    "catch_rate": 25,
    "base_exp": 189,
    "growth_rate": "slow",
    "evolution_method": null
  },
  {
    "id": 144,
    "name": "articuno",
    "types": [
      "ice",
      "flying"
    ],
    "stats": {
      "hp": 90,
      "atk": 85,
      "def": 100,
      "spa": 95,
      "spd": 125,
      "spe": 85
    },
    "catch_rate": 3,
    "base_exp": 261,
    "growth_rate": "slow",
    "evolution_method": null
  },
  {
    "id": 145,
    "name": "zapdos",
    "types": [
      "electric",
      "flying"
    ],
    "stats": {
      "hp": 90,
      "atk": 90,
      "def": 85,
      "spa": 125,
      "spd": 90,
      "spe": 100
    },
    "catch_rate": 3,
    "base_exp": 261,
    "growth_rate": "slow",
    "evolution_method": null
  },
  {
    "id": 146,
    "name": "moltres",
    "types": [
      "fire",
      "flying"
    ],
    "stats": {
      "hp": 90,
      "atk": 100,
      "def": 90,
      "spa": 125,
      "spd": 85,
      "spe": 90
    },
    "catch_rate": 3,
    "base_exp": 261,
    "growth_rate": "slow",
    "evolution_method": null
  },
  {
    "id": 147,
    "name": "dratini",
    "types": [
      "dragon"
    ],
    "stats": {
      "hp": 41,
      "atk": 64,
      "def": 45,
      "spa": 50,
      "spd": 50,
      "spe": 50
    },
    "catch_rate": 45,
    "base_exp": 60,
    "growth_rate": "slow",
    "evolution_method": "Level 30"
  },
  {
    "id": 148,
    "name": "dragonair",
    "types": [
      "dragon"
    ],
    "stats": {
      "hp": 61,
      "atk": 84,
      "def": 65,
      "spa": 70,
      "spd": 70,
      "spe": 70
    },
    "catch_rate": 45,
    "base_exp": 147,
    "growth_rate": "slow",
    "evolution_method": "Level 55"
  },
  {
    "id": 149,
    "name": "dragonite",
    "types": [
      "dragon",
      "flying"
    ],
    "stats": {
      "hp": 91,
      "atk": 134,
      "def": 95,
      "spa": 100,
      "spd": 100,
      "spe": 80
    },
    "catch_rate": 45,
    "base_exp": 270,
    "growth_rate": "slow",
    "evolution_method": null
  },
  {
    "id": 150,
    "name": "mewtwo",
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 106,
      "atk": 110,
      "def": 90,
      "spa": 154,
      "spd": 90,
      "spe": 130
    },
    "catch_rate": 3,
    "base_exp": 306,
    "growth_rate": "slow",
    "evolution_method": null
  },
  {
    "id": 151,
    "name": "mew",
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 100,
      "atk": 100,
      "def": 100,
      "spa": 100,
      "spd": 100,
      "spe": 100
    },
    "catch_rate": 45,
    "base_exp": 270,
    "growth_rate": "medium-slow",
    "evolution_method": null
  }
];
const MOVES_DATA = {
  "vine-whip": {
    "name": "vine-whip",
    "type": "grass",
    "category": "Special",
    "power": 45,
    "accuracy": 100,
    "pp": 25,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "tackle": {
    "name": "tackle",
    "type": "normal",
    "category": "Physical",
    "power": 40,
    "accuracy": 100,
    "pp": 35,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "growl": {
    "name": "growl",
    "type": "normal",
    "category": "Status",
    "power": null,
    "accuracy": 100,
    "pp": 40,
    "priority": 0,
    "target": "all-opponents",
    "stat_changes": [
      {
        "change": -1,
        "stat": {
          "name": "attack",
          "url": "https://pokeapi.co/api/v2/stat/2/"
        }
      }
    ],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "net-good-stats",
        "url": "https://pokeapi.co/api/v2/move-category/2/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "leech-seed": {
    "name": "leech-seed",
    "type": "grass",
    "category": "Status",
    "power": null,
    "accuracy": 90,
    "pp": 10,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "leech-seed",
        "url": "https://pokeapi.co/api/v2/move-ailment/18/"
      },
      "category": {
        "name": "ailment",
        "url": "https://pokeapi.co/api/v2/move-category/1/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "growth": {
    "name": "growth",
    "type": "normal",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 20,
    "priority": 0,
    "target": "user",
    "stat_changes": [
      {
        "change": 1,
        "stat": {
          "name": "attack",
          "url": "https://pokeapi.co/api/v2/stat/2/"
        }
      },
      {
        "change": 1,
        "stat": {
          "name": "special-attack",
          "url": "https://pokeapi.co/api/v2/stat/4/"
        }
      }
    ],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "net-good-stats",
        "url": "https://pokeapi.co/api/v2/move-category/2/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "razor-leaf": {
    "name": "razor-leaf",
    "type": "grass",
    "category": "Special",
    "power": 55,
    "accuracy": 95,
    "pp": 25,
    "priority": 0,
    "target": "all-opponents",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 1,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "solar-beam": {
    "name": "solar-beam",
    "type": "grass",
    "category": "Special",
    "power": 120,
    "accuracy": 100,
    "pp": 10,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "poison-powder": {
    "name": "poison-powder",
    "type": "poison",
    "category": "Status",
    "power": null,
    "accuracy": 75,
    "pp": 35,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/move-ailment/5/"
      },
      "category": {
        "name": "ailment",
        "url": "https://pokeapi.co/api/v2/move-category/1/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "sleep-powder": {
    "name": "sleep-powder",
    "type": "grass",
    "category": "Status",
    "power": null,
    "accuracy": 75,
    "pp": 15,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "sleep",
        "url": "https://pokeapi.co/api/v2/move-ailment/2/"
      },
      "category": {
        "name": "ailment",
        "url": "https://pokeapi.co/api/v2/move-category/1/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": 2,
      "max_turns": 4,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "sweet-scent": {
    "name": "sweet-scent",
    "type": "normal",
    "category": "Status",
    "power": null,
    "accuracy": 100,
    "pp": 20,
    "priority": 0,
    "target": "all-opponents",
    "stat_changes": [
      {
        "change": -2,
        "stat": {
          "name": "evasion",
          "url": "https://pokeapi.co/api/v2/stat/8/"
        }
      }
    ],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "net-good-stats",
        "url": "https://pokeapi.co/api/v2/move-category/2/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "synthesis": {
    "name": "synthesis",
    "type": "grass",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 5,
    "priority": 0,
    "target": "user",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "heal",
        "url": "https://pokeapi.co/api/v2/move-category/3/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 50,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "scratch": {
    "name": "scratch",
    "type": "normal",
    "category": "Physical",
    "power": 40,
    "accuracy": 100,
    "pp": 35,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "ember": {
    "name": "ember",
    "type": "fire",
    "category": "Special",
    "power": 40,
    "accuracy": 100,
    "pp": 25,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "burn",
        "url": "https://pokeapi.co/api/v2/move-ailment/4/"
      },
      "category": {
        "name": "damage-ailment",
        "url": "https://pokeapi.co/api/v2/move-category/4/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 10,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "flamethrower": {
    "name": "flamethrower",
    "type": "fire",
    "category": "Special",
    "power": 90,
    "accuracy": 100,
    "pp": 15,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "burn",
        "url": "https://pokeapi.co/api/v2/move-ailment/4/"
      },
      "category": {
        "name": "damage-ailment",
        "url": "https://pokeapi.co/api/v2/move-category/4/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 10,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "dragon-rage": {
    "name": "dragon-rage",
    "type": "dragon",
    "category": "Special",
    "power": null,
    "accuracy": 100,
    "pp": 10,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "fire-spin": {
    "name": "fire-spin",
    "type": "fire",
    "category": "Special",
    "power": 35,
    "accuracy": 85,
    "pp": 15,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "trap",
        "url": "https://pokeapi.co/api/v2/move-ailment/8/"
      },
      "category": {
        "name": "damage-ailment",
        "url": "https://pokeapi.co/api/v2/move-category/4/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": 5,
      "max_turns": 6,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 100,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "smokescreen": {
    "name": "smokescreen",
    "type": "normal",
    "category": "Status",
    "power": null,
    "accuracy": 100,
    "pp": 20,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [
      {
        "change": -1,
        "stat": {
          "name": "accuracy",
          "url": "https://pokeapi.co/api/v2/stat/7/"
        }
      }
    ],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "net-good-stats",
        "url": "https://pokeapi.co/api/v2/move-category/2/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "slash": {
    "name": "slash",
    "type": "normal",
    "category": "Physical",
    "power": 70,
    "accuracy": 100,
    "pp": 20,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 1,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "scary-face": {
    "name": "scary-face",
    "type": "normal",
    "category": "Status",
    "power": null,
    "accuracy": 100,
    "pp": 10,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [
      {
        "change": -2,
        "stat": {
          "name": "speed",
          "url": "https://pokeapi.co/api/v2/stat/6/"
        }
      }
    ],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "net-good-stats",
        "url": "https://pokeapi.co/api/v2/move-category/2/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "metal-claw": {
    "name": "metal-claw",
    "type": "steel",
    "category": "Physical",
    "power": 50,
    "accuracy": 95,
    "pp": 35,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [
      {
        "change": 1,
        "stat": {
          "name": "attack",
          "url": "https://pokeapi.co/api/v2/stat/2/"
        }
      }
    ],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage-raise",
        "url": "https://pokeapi.co/api/v2/move-category/7/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 10
    }
  },
  "wing-attack": {
    "name": "wing-attack",
    "type": "flying",
    "category": "Physical",
    "power": 60,
    "accuracy": 100,
    "pp": 35,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "heat-wave": {
    "name": "heat-wave",
    "type": "fire",
    "category": "Special",
    "power": 95,
    "accuracy": 90,
    "pp": 10,
    "priority": 0,
    "target": "all-opponents",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "burn",
        "url": "https://pokeapi.co/api/v2/move-ailment/4/"
      },
      "category": {
        "name": "damage-ailment",
        "url": "https://pokeapi.co/api/v2/move-category/4/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 10,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "tail-whip": {
    "name": "tail-whip",
    "type": "normal",
    "category": "Status",
    "power": null,
    "accuracy": 100,
    "pp": 30,
    "priority": 0,
    "target": "all-opponents",
    "stat_changes": [
      {
        "change": -1,
        "stat": {
          "name": "defense",
          "url": "https://pokeapi.co/api/v2/stat/3/"
        }
      }
    ],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "net-good-stats",
        "url": "https://pokeapi.co/api/v2/move-category/2/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "bite": {
    "name": "bite",
    "type": "dark",
    "category": "Special",
    "power": 60,
    "accuracy": 100,
    "pp": 25,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 30,
      "stat_chance": 0
    }
  },
  "water-gun": {
    "name": "water-gun",
    "type": "water",
    "category": "Special",
    "power": 40,
    "accuracy": 100,
    "pp": 25,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "hydro-pump": {
    "name": "hydro-pump",
    "type": "water",
    "category": "Special",
    "power": 110,
    "accuracy": 80,
    "pp": 5,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "withdraw": {
    "name": "withdraw",
    "type": "water",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 40,
    "priority": 0,
    "target": "user",
    "stat_changes": [
      {
        "change": 1,
        "stat": {
          "name": "defense",
          "url": "https://pokeapi.co/api/v2/stat/3/"
        }
      }
    ],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "net-good-stats",
        "url": "https://pokeapi.co/api/v2/move-category/2/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "skull-bash": {
    "name": "skull-bash",
    "type": "normal",
    "category": "Physical",
    "power": 130,
    "accuracy": 100,
    "pp": 10,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 100,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "bubble": {
    "name": "bubble",
    "type": "water",
    "category": "Special",
    "power": 40,
    "accuracy": 100,
    "pp": 30,
    "priority": 0,
    "target": "all-opponents",
    "stat_changes": [
      {
        "change": -1,
        "stat": {
          "name": "speed",
          "url": "https://pokeapi.co/api/v2/stat/6/"
        }
      }
    ],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage-lower",
        "url": "https://pokeapi.co/api/v2/move-category/6/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 10
    }
  },
  "protect": {
    "name": "protect",
    "type": "normal",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 10,
    "priority": 4,
    "target": "user",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "protect",
        "url": "https://pokeapi.co/api/v2/move-ailment/43/"
      },
      "category": {
        "name": "unique",
        "url": "https://pokeapi.co/api/v2/move-category/13/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "rapid-spin": {
    "name": "rapid-spin",
    "type": "normal",
    "category": "Physical",
    "power": 50,
    "accuracy": 100,
    "pp": 40,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [
      {
        "change": 1,
        "stat": {
          "name": "speed",
          "url": "https://pokeapi.co/api/v2/stat/6/"
        }
      }
    ],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage-raise",
        "url": "https://pokeapi.co/api/v2/move-category/7/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 100
    }
  },
  "rain-dance": {
    "name": "rain-dance",
    "type": "water",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 5,
    "priority": 0,
    "target": "entire-field",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "whole-field-effect",
        "url": "https://pokeapi.co/api/v2/move-category/10/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "string-shot": {
    "name": "string-shot",
    "type": "bug",
    "category": "Status",
    "power": null,
    "accuracy": 95,
    "pp": 40,
    "priority": 0,
    "target": "all-opponents",
    "stat_changes": [
      {
        "change": -2,
        "stat": {
          "name": "speed",
          "url": "https://pokeapi.co/api/v2/stat/6/"
        }
      }
    ],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "net-good-stats",
        "url": "https://pokeapi.co/api/v2/move-category/2/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "harden": {
    "name": "harden",
    "type": "normal",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 30,
    "priority": 0,
    "target": "user",
    "stat_changes": [
      {
        "change": 1,
        "stat": {
          "name": "defense",
          "url": "https://pokeapi.co/api/v2/stat/3/"
        }
      }
    ],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "net-good-stats",
        "url": "https://pokeapi.co/api/v2/move-category/2/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "gust": {
    "name": "gust",
    "type": "flying",
    "category": "Physical",
    "power": 40,
    "accuracy": 100,
    "pp": 35,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "whirlwind": {
    "name": "whirlwind",
    "type": "normal",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 20,
    "priority": -6,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "force-switch",
        "url": "https://pokeapi.co/api/v2/move-category/12/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "supersonic": {
    "name": "supersonic",
    "type": "normal",
    "category": "Status",
    "power": null,
    "accuracy": 55,
    "pp": 20,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "confusion",
        "url": "https://pokeapi.co/api/v2/move-ailment/6/"
      },
      "category": {
        "name": "ailment",
        "url": "https://pokeapi.co/api/v2/move-category/1/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": 2,
      "max_turns": 5,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "psybeam": {
    "name": "psybeam",
    "type": "psychic",
    "category": "Special",
    "power": 65,
    "accuracy": 100,
    "pp": 20,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "confusion",
        "url": "https://pokeapi.co/api/v2/move-ailment/6/"
      },
      "category": {
        "name": "damage-ailment",
        "url": "https://pokeapi.co/api/v2/move-category/4/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": 2,
      "max_turns": 5,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 10,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "stun-spore": {
    "name": "stun-spore",
    "type": "grass",
    "category": "Status",
    "power": null,
    "accuracy": 75,
    "pp": 30,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "paralysis",
        "url": "https://pokeapi.co/api/v2/move-ailment/1/"
      },
      "category": {
        "name": "ailment",
        "url": "https://pokeapi.co/api/v2/move-category/1/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "confusion": {
    "name": "confusion",
    "type": "psychic",
    "category": "Special",
    "power": 50,
    "accuracy": 100,
    "pp": 25,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "confusion",
        "url": "https://pokeapi.co/api/v2/move-ailment/6/"
      },
      "category": {
        "name": "damage-ailment",
        "url": "https://pokeapi.co/api/v2/move-category/4/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": 2,
      "max_turns": 5,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 10,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "safeguard": {
    "name": "safeguard",
    "type": "normal",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 25,
    "priority": 0,
    "target": "users-field",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "field-effect",
        "url": "https://pokeapi.co/api/v2/move-category/11/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "silver-wind": {
    "name": "silver-wind",
    "type": "bug",
    "category": "Physical",
    "power": 60,
    "accuracy": 100,
    "pp": 5,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [
      {
        "change": 1,
        "stat": {
          "name": "attack",
          "url": "https://pokeapi.co/api/v2/stat/2/"
        }
      },
      {
        "change": 1,
        "stat": {
          "name": "defense",
          "url": "https://pokeapi.co/api/v2/stat/3/"
        }
      },
      {
        "change": 1,
        "stat": {
          "name": "special-attack",
          "url": "https://pokeapi.co/api/v2/stat/4/"
        }
      },
      {
        "change": 1,
        "stat": {
          "name": "special-defense",
          "url": "https://pokeapi.co/api/v2/stat/5/"
        }
      },
      {
        "change": 1,
        "stat": {
          "name": "speed",
          "url": "https://pokeapi.co/api/v2/stat/6/"
        }
      }
    ],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage-raise",
        "url": "https://pokeapi.co/api/v2/move-category/7/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 10
    }
  },
  "poison-sting": {
    "name": "poison-sting",
    "type": "poison",
    "category": "Physical",
    "power": 15,
    "accuracy": 100,
    "pp": 35,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/move-ailment/5/"
      },
      "category": {
        "name": "damage-ailment",
        "url": "https://pokeapi.co/api/v2/move-category/4/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 30,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "fury-attack": {
    "name": "fury-attack",
    "type": "normal",
    "category": "Physical",
    "power": 15,
    "accuracy": 85,
    "pp": 20,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": 2,
      "max_hits": 5,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "twineedle": {
    "name": "twineedle",
    "type": "bug",
    "category": "Physical",
    "power": 25,
    "accuracy": 100,
    "pp": 20,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/move-ailment/5/"
      },
      "category": {
        "name": "damage-ailment",
        "url": "https://pokeapi.co/api/v2/move-category/4/"
      },
      "min_hits": 2,
      "max_hits": 2,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 20,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "pin-missile": {
    "name": "pin-missile",
    "type": "bug",
    "category": "Physical",
    "power": 25,
    "accuracy": 95,
    "pp": 20,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": 2,
      "max_hits": 5,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "agility": {
    "name": "agility",
    "type": "psychic",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 30,
    "priority": 0,
    "target": "user",
    "stat_changes": [
      {
        "change": 2,
        "stat": {
          "name": "speed",
          "url": "https://pokeapi.co/api/v2/stat/6/"
        }
      }
    ],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "net-good-stats",
        "url": "https://pokeapi.co/api/v2/move-category/2/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "rage": {
    "name": "rage",
    "type": "normal",
    "category": "Physical",
    "power": 20,
    "accuracy": 100,
    "pp": 20,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "focus-energy": {
    "name": "focus-energy",
    "type": "normal",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 30,
    "priority": 0,
    "target": "user",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "unique",
        "url": "https://pokeapi.co/api/v2/move-category/13/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "pursuit": {
    "name": "pursuit",
    "type": "dark",
    "category": "Special",
    "power": 40,
    "accuracy": 100,
    "pp": 20,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "endeavor": {
    "name": "endeavor",
    "type": "normal",
    "category": "Physical",
    "power": null,
    "accuracy": 100,
    "pp": 5,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "sand-attack": {
    "name": "sand-attack",
    "type": "ground",
    "category": "Status",
    "power": null,
    "accuracy": 100,
    "pp": 15,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [
      {
        "change": -1,
        "stat": {
          "name": "accuracy",
          "url": "https://pokeapi.co/api/v2/stat/7/"
        }
      }
    ],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "net-good-stats",
        "url": "https://pokeapi.co/api/v2/move-category/2/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "quick-attack": {
    "name": "quick-attack",
    "type": "normal",
    "category": "Physical",
    "power": 40,
    "accuracy": 100,
    "pp": 30,
    "priority": 1,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "mirror-move": {
    "name": "mirror-move",
    "type": "flying",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 20,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "unique",
        "url": "https://pokeapi.co/api/v2/move-category/13/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "feather-dance": {
    "name": "feather-dance",
    "type": "flying",
    "category": "Status",
    "power": null,
    "accuracy": 100,
    "pp": 15,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [
      {
        "change": -2,
        "stat": {
          "name": "attack",
          "url": "https://pokeapi.co/api/v2/stat/2/"
        }
      }
    ],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "net-good-stats",
        "url": "https://pokeapi.co/api/v2/move-category/2/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "hyper-fang": {
    "name": "hyper-fang",
    "type": "normal",
    "category": "Physical",
    "power": 80,
    "accuracy": 90,
    "pp": 15,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 10,
      "stat_chance": 0
    }
  },
  "super-fang": {
    "name": "super-fang",
    "type": "normal",
    "category": "Physical",
    "power": null,
    "accuracy": 90,
    "pp": 10,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "leer": {
    "name": "leer",
    "type": "normal",
    "category": "Status",
    "power": null,
    "accuracy": 100,
    "pp": 30,
    "priority": 0,
    "target": "all-opponents",
    "stat_changes": [
      {
        "change": -1,
        "stat": {
          "name": "defense",
          "url": "https://pokeapi.co/api/v2/stat/3/"
        }
      }
    ],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "net-good-stats",
        "url": "https://pokeapi.co/api/v2/move-category/2/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 100
    }
  },
  "peck": {
    "name": "peck",
    "type": "flying",
    "category": "Physical",
    "power": 35,
    "accuracy": 100,
    "pp": 35,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "drill-peck": {
    "name": "drill-peck",
    "type": "flying",
    "category": "Physical",
    "power": 80,
    "accuracy": 100,
    "pp": 20,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "aerial-ace": {
    "name": "aerial-ace",
    "type": "flying",
    "category": "Physical",
    "power": 60,
    "accuracy": null,
    "pp": 20,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "wrap": {
    "name": "wrap",
    "type": "normal",
    "category": "Physical",
    "power": 15,
    "accuracy": 90,
    "pp": 20,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "trap",
        "url": "https://pokeapi.co/api/v2/move-ailment/8/"
      },
      "category": {
        "name": "damage-ailment",
        "url": "https://pokeapi.co/api/v2/move-category/4/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": 2,
      "max_turns": 4,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 100,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "acid": {
    "name": "acid",
    "type": "poison",
    "category": "Physical",
    "power": 40,
    "accuracy": 100,
    "pp": 30,
    "priority": 0,
    "target": "all-opponents",
    "stat_changes": [
      {
        "change": -1,
        "stat": {
          "name": "special-defense",
          "url": "https://pokeapi.co/api/v2/stat/5/"
        }
      }
    ],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage-lower",
        "url": "https://pokeapi.co/api/v2/move-category/6/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 10
    }
  },
  "screech": {
    "name": "screech",
    "type": "normal",
    "category": "Status",
    "power": null,
    "accuracy": 85,
    "pp": 40,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [
      {
        "change": -2,
        "stat": {
          "name": "defense",
          "url": "https://pokeapi.co/api/v2/stat/3/"
        }
      }
    ],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "net-good-stats",
        "url": "https://pokeapi.co/api/v2/move-category/2/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "haze": {
    "name": "haze",
    "type": "ice",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 30,
    "priority": 0,
    "target": "entire-field",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "whole-field-effect",
        "url": "https://pokeapi.co/api/v2/move-category/10/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "glare": {
    "name": "glare",
    "type": "normal",
    "category": "Status",
    "power": null,
    "accuracy": 100,
    "pp": 30,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "paralysis",
        "url": "https://pokeapi.co/api/v2/move-ailment/1/"
      },
      "category": {
        "name": "ailment",
        "url": "https://pokeapi.co/api/v2/move-category/1/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "stockpile": {
    "name": "stockpile",
    "type": "normal",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 20,
    "priority": 0,
    "target": "user",
    "stat_changes": [
      {
        "change": 1,
        "stat": {
          "name": "defense",
          "url": "https://pokeapi.co/api/v2/stat/3/"
        }
      },
      {
        "change": 1,
        "stat": {
          "name": "special-defense",
          "url": "https://pokeapi.co/api/v2/stat/5/"
        }
      }
    ],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "unique",
        "url": "https://pokeapi.co/api/v2/move-category/13/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "spit-up": {
    "name": "spit-up",
    "type": "normal",
    "category": "Physical",
    "power": null,
    "accuracy": 100,
    "pp": 10,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "swallow": {
    "name": "swallow",
    "type": "normal",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 10,
    "priority": 0,
    "target": "user",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "heal",
        "url": "https://pokeapi.co/api/v2/move-category/3/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 25,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "slam": {
    "name": "slam",
    "type": "normal",
    "category": "Physical",
    "power": 80,
    "accuracy": 75,
    "pp": 20,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "thunder-shock": {
    "name": "thunder-shock",
    "type": "electric",
    "category": "Special",
    "power": 40,
    "accuracy": 100,
    "pp": 30,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "paralysis",
        "url": "https://pokeapi.co/api/v2/move-ailment/1/"
      },
      "category": {
        "name": "damage-ailment",
        "url": "https://pokeapi.co/api/v2/move-category/4/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 10,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "thunderbolt": {
    "name": "thunderbolt",
    "type": "electric",
    "category": "Special",
    "power": 90,
    "accuracy": 100,
    "pp": 15,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "paralysis",
        "url": "https://pokeapi.co/api/v2/move-ailment/1/"
      },
      "category": {
        "name": "damage-ailment",
        "url": "https://pokeapi.co/api/v2/move-category/4/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 10,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "thunder-wave": {
    "name": "thunder-wave",
    "type": "electric",
    "category": "Status",
    "power": null,
    "accuracy": 90,
    "pp": 20,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "paralysis",
        "url": "https://pokeapi.co/api/v2/move-ailment/1/"
      },
      "category": {
        "name": "ailment",
        "url": "https://pokeapi.co/api/v2/move-category/1/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "thunder": {
    "name": "thunder",
    "type": "electric",
    "category": "Special",
    "power": 110,
    "accuracy": 70,
    "pp": 10,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "paralysis",
        "url": "https://pokeapi.co/api/v2/move-ailment/1/"
      },
      "category": {
        "name": "damage-ailment",
        "url": "https://pokeapi.co/api/v2/move-category/4/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 30,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "double-team": {
    "name": "double-team",
    "type": "normal",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 15,
    "priority": 0,
    "target": "user",
    "stat_changes": [
      {
        "change": 1,
        "stat": {
          "name": "evasion",
          "url": "https://pokeapi.co/api/v2/stat/8/"
        }
      }
    ],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "net-good-stats",
        "url": "https://pokeapi.co/api/v2/move-category/2/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "light-screen": {
    "name": "light-screen",
    "type": "psychic",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 30,
    "priority": 0,
    "target": "users-field",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "field-effect",
        "url": "https://pokeapi.co/api/v2/move-category/11/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "defense-curl": {
    "name": "defense-curl",
    "type": "normal",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 40,
    "priority": 0,
    "target": "user",
    "stat_changes": [
      {
        "change": 1,
        "stat": {
          "name": "defense",
          "url": "https://pokeapi.co/api/v2/stat/3/"
        }
      }
    ],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "net-good-stats",
        "url": "https://pokeapi.co/api/v2/move-category/2/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "swift": {
    "name": "swift",
    "type": "normal",
    "category": "Physical",
    "power": 60,
    "accuracy": null,
    "pp": 20,
    "priority": 0,
    "target": "all-opponents",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "fury-swipes": {
    "name": "fury-swipes",
    "type": "normal",
    "category": "Physical",
    "power": 18,
    "accuracy": 80,
    "pp": 15,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": 2,
      "max_hits": 5,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "sandstorm": {
    "name": "sandstorm",
    "type": "rock",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 10,
    "priority": 0,
    "target": "entire-field",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "whole-field-effect",
        "url": "https://pokeapi.co/api/v2/move-category/10/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "sand-tomb": {
    "name": "sand-tomb",
    "type": "ground",
    "category": "Physical",
    "power": 35,
    "accuracy": 85,
    "pp": 15,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "trap",
        "url": "https://pokeapi.co/api/v2/move-ailment/8/"
      },
      "category": {
        "name": "damage-ailment",
        "url": "https://pokeapi.co/api/v2/move-category/4/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": 5,
      "max_turns": 6,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 100,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "double-kick": {
    "name": "double-kick",
    "type": "fighting",
    "category": "Physical",
    "power": 30,
    "accuracy": 100,
    "pp": 30,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": 2,
      "max_hits": 2,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "crunch": {
    "name": "crunch",
    "type": "dark",
    "category": "Special",
    "power": 80,
    "accuracy": 100,
    "pp": 15,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [
      {
        "change": -1,
        "stat": {
          "name": "defense",
          "url": "https://pokeapi.co/api/v2/stat/3/"
        }
      }
    ],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage-lower",
        "url": "https://pokeapi.co/api/v2/move-category/6/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 20
    }
  },
  "flatter": {
    "name": "flatter",
    "type": "dark",
    "category": "Status",
    "power": null,
    "accuracy": 100,
    "pp": 15,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [
      {
        "change": 1,
        "stat": {
          "name": "special-attack",
          "url": "https://pokeapi.co/api/v2/stat/4/"
        }
      }
    ],
    "meta": {
      "ailment": {
        "name": "confusion",
        "url": "https://pokeapi.co/api/v2/move-ailment/6/"
      },
      "category": {
        "name": "swagger",
        "url": "https://pokeapi.co/api/v2/move-category/5/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": 2,
      "max_turns": 5,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "helping-hand": {
    "name": "helping-hand",
    "type": "normal",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 20,
    "priority": 5,
    "target": "ally",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "unique",
        "url": "https://pokeapi.co/api/v2/move-category/13/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "body-slam": {
    "name": "body-slam",
    "type": "normal",
    "category": "Physical",
    "power": 85,
    "accuracy": 100,
    "pp": 15,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "paralysis",
        "url": "https://pokeapi.co/api/v2/move-ailment/1/"
      },
      "category": {
        "name": "damage-ailment",
        "url": "https://pokeapi.co/api/v2/move-category/4/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 30,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "superpower": {
    "name": "superpower",
    "type": "fighting",
    "category": "Physical",
    "power": 120,
    "accuracy": 100,
    "pp": 5,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [
      {
        "change": -1,
        "stat": {
          "name": "attack",
          "url": "https://pokeapi.co/api/v2/stat/2/"
        }
      },
      {
        "change": -1,
        "stat": {
          "name": "defense",
          "url": "https://pokeapi.co/api/v2/stat/3/"
        }
      }
    ],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage-raise",
        "url": "https://pokeapi.co/api/v2/move-category/7/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 100
    }
  },
  "horn-attack": {
    "name": "horn-attack",
    "type": "normal",
    "category": "Physical",
    "power": 65,
    "accuracy": 100,
    "pp": 25,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "horn-drill": {
    "name": "horn-drill",
    "type": "normal",
    "category": "Physical",
    "power": null,
    "accuracy": 30,
    "pp": 5,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "ohko",
        "url": "https://pokeapi.co/api/v2/move-category/9/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "thrash": {
    "name": "thrash",
    "type": "normal",
    "category": "Physical",
    "power": 120,
    "accuracy": 100,
    "pp": 10,
    "priority": 0,
    "target": "random-opponent",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "megahorn": {
    "name": "megahorn",
    "type": "bug",
    "category": "Physical",
    "power": 120,
    "accuracy": 85,
    "pp": 10,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "pound": {
    "name": "pound",
    "type": "normal",
    "category": "Physical",
    "power": 40,
    "accuracy": 100,
    "pp": 35,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "double-slap": {
    "name": "double-slap",
    "type": "normal",
    "category": "Physical",
    "power": 15,
    "accuracy": 85,
    "pp": 10,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": 2,
      "max_hits": 5,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "sing": {
    "name": "sing",
    "type": "normal",
    "category": "Status",
    "power": null,
    "accuracy": 55,
    "pp": 15,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "sleep",
        "url": "https://pokeapi.co/api/v2/move-ailment/2/"
      },
      "category": {
        "name": "ailment",
        "url": "https://pokeapi.co/api/v2/move-category/1/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": 2,
      "max_turns": 4,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "minimize": {
    "name": "minimize",
    "type": "normal",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 10,
    "priority": 0,
    "target": "user",
    "stat_changes": [
      {
        "change": 2,
        "stat": {
          "name": "evasion",
          "url": "https://pokeapi.co/api/v2/stat/8/"
        }
      }
    ],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "net-good-stats",
        "url": "https://pokeapi.co/api/v2/move-category/2/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "metronome": {
    "name": "metronome",
    "type": "normal",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 10,
    "priority": 0,
    "target": "user",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "unique",
        "url": "https://pokeapi.co/api/v2/move-category/13/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "encore": {
    "name": "encore",
    "type": "normal",
    "category": "Status",
    "power": null,
    "accuracy": 100,
    "pp": 5,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "unique",
        "url": "https://pokeapi.co/api/v2/move-category/13/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "moonlight": {
    "name": "moonlight",
    "type": "fairy",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 5,
    "priority": 0,
    "target": "user",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "heal",
        "url": "https://pokeapi.co/api/v2/move-category/3/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 50,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "follow-me": {
    "name": "follow-me",
    "type": "normal",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 20,
    "priority": 2,
    "target": "user",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "unique",
        "url": "https://pokeapi.co/api/v2/move-category/13/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "meteor-mash": {
    "name": "meteor-mash",
    "type": "steel",
    "category": "Physical",
    "power": 90,
    "accuracy": 90,
    "pp": 10,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [
      {
        "change": 1,
        "stat": {
          "name": "attack",
          "url": "https://pokeapi.co/api/v2/stat/2/"
        }
      }
    ],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage-raise",
        "url": "https://pokeapi.co/api/v2/move-category/7/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 20
    }
  },
  "cosmic-power": {
    "name": "cosmic-power",
    "type": "psychic",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 20,
    "priority": 0,
    "target": "user",
    "stat_changes": [
      {
        "change": 1,
        "stat": {
          "name": "defense",
          "url": "https://pokeapi.co/api/v2/stat/3/"
        }
      },
      {
        "change": 1,
        "stat": {
          "name": "special-defense",
          "url": "https://pokeapi.co/api/v2/stat/5/"
        }
      }
    ],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "net-good-stats",
        "url": "https://pokeapi.co/api/v2/move-category/2/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "roar": {
    "name": "roar",
    "type": "normal",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 20,
    "priority": -6,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "force-switch",
        "url": "https://pokeapi.co/api/v2/move-category/12/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "confuse-ray": {
    "name": "confuse-ray",
    "type": "ghost",
    "category": "Status",
    "power": null,
    "accuracy": 100,
    "pp": 10,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "confusion",
        "url": "https://pokeapi.co/api/v2/move-ailment/6/"
      },
      "category": {
        "name": "ailment",
        "url": "https://pokeapi.co/api/v2/move-category/1/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": 2,
      "max_turns": 5,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "will-o-wisp": {
    "name": "will-o-wisp",
    "type": "fire",
    "category": "Status",
    "power": null,
    "accuracy": 85,
    "pp": 15,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "burn",
        "url": "https://pokeapi.co/api/v2/move-ailment/4/"
      },
      "category": {
        "name": "ailment",
        "url": "https://pokeapi.co/api/v2/move-category/1/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "imprison": {
    "name": "imprison",
    "type": "psychic",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 10,
    "priority": 0,
    "target": "user",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "unique",
        "url": "https://pokeapi.co/api/v2/move-category/13/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "grudge": {
    "name": "grudge",
    "type": "ghost",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 5,
    "priority": 0,
    "target": "user",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "unique",
        "url": "https://pokeapi.co/api/v2/move-category/13/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "double-edge": {
    "name": "double-edge",
    "type": "normal",
    "category": "Physical",
    "power": 120,
    "accuracy": 100,
    "pp": 15,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": -33,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "disable": {
    "name": "disable",
    "type": "normal",
    "category": "Status",
    "power": null,
    "accuracy": 100,
    "pp": 20,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "disable",
        "url": "https://pokeapi.co/api/v2/move-ailment/13/"
      },
      "category": {
        "name": "unique",
        "url": "https://pokeapi.co/api/v2/move-category/13/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": 4,
      "max_turns": 4,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "mimic": {
    "name": "mimic",
    "type": "normal",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 10,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "unique",
        "url": "https://pokeapi.co/api/v2/move-category/13/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "rest": {
    "name": "rest",
    "type": "psychic",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 5,
    "priority": 0,
    "target": "user",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "unique",
        "url": "https://pokeapi.co/api/v2/move-category/13/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "rollout": {
    "name": "rollout",
    "type": "rock",
    "category": "Physical",
    "power": 30,
    "accuracy": 90,
    "pp": 20,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "hyper-voice": {
    "name": "hyper-voice",
    "type": "normal",
    "category": "Physical",
    "power": 90,
    "accuracy": 100,
    "pp": 10,
    "priority": 0,
    "target": "all-opponents",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "leech-life": {
    "name": "leech-life",
    "type": "bug",
    "category": "Physical",
    "power": 80,
    "accuracy": 100,
    "pp": 10,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage-heal",
        "url": "https://pokeapi.co/api/v2/move-category/8/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 50,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "mean-look": {
    "name": "mean-look",
    "type": "normal",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 5,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "unique",
        "url": "https://pokeapi.co/api/v2/move-category/13/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "poison-fang": {
    "name": "poison-fang",
    "type": "poison",
    "category": "Physical",
    "power": 50,
    "accuracy": 100,
    "pp": 15,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/move-ailment/5/"
      },
      "category": {
        "name": "damage-ailment",
        "url": "https://pokeapi.co/api/v2/move-category/4/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 50,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "astonish": {
    "name": "astonish",
    "type": "ghost",
    "category": "Physical",
    "power": 30,
    "accuracy": 100,
    "pp": 15,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 30,
      "stat_chance": 0
    }
  },
  "air-cutter": {
    "name": "air-cutter",
    "type": "flying",
    "category": "Physical",
    "power": 60,
    "accuracy": 95,
    "pp": 25,
    "priority": 0,
    "target": "all-opponents",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 1,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "absorb": {
    "name": "absorb",
    "type": "grass",
    "category": "Special",
    "power": 20,
    "accuracy": 100,
    "pp": 25,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage-heal",
        "url": "https://pokeapi.co/api/v2/move-category/8/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 50,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "petal-dance": {
    "name": "petal-dance",
    "type": "grass",
    "category": "Special",
    "power": 120,
    "accuracy": 100,
    "pp": 10,
    "priority": 0,
    "target": "random-opponent",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "mega-drain": {
    "name": "mega-drain",
    "type": "grass",
    "category": "Special",
    "power": 40,
    "accuracy": 100,
    "pp": 15,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage-heal",
        "url": "https://pokeapi.co/api/v2/move-category/8/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 50,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "aromatherapy": {
    "name": "aromatherapy",
    "type": "grass",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 5,
    "priority": 0,
    "target": "user-and-allies",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "unique",
        "url": "https://pokeapi.co/api/v2/move-category/13/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "spore": {
    "name": "spore",
    "type": "grass",
    "category": "Status",
    "power": null,
    "accuracy": 100,
    "pp": 15,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "sleep",
        "url": "https://pokeapi.co/api/v2/move-ailment/2/"
      },
      "category": {
        "name": "ailment",
        "url": "https://pokeapi.co/api/v2/move-category/1/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": 2,
      "max_turns": 4,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "giga-drain": {
    "name": "giga-drain",
    "type": "grass",
    "category": "Special",
    "power": 75,
    "accuracy": 100,
    "pp": 10,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage-heal",
        "url": "https://pokeapi.co/api/v2/move-category/8/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 50,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "psychic": {
    "name": "psychic",
    "type": "psychic",
    "category": "Special",
    "power": 90,
    "accuracy": 100,
    "pp": 10,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [
      {
        "change": -1,
        "stat": {
          "name": "special-defense",
          "url": "https://pokeapi.co/api/v2/stat/5/"
        }
      }
    ],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage-lower",
        "url": "https://pokeapi.co/api/v2/move-category/6/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 10
    }
  },
  "foresight": {
    "name": "foresight",
    "type": "normal",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 40,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "no-type-immunity",
        "url": "https://pokeapi.co/api/v2/move-ailment/17/"
      },
      "category": {
        "name": "ailment",
        "url": "https://pokeapi.co/api/v2/move-category/1/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "earthquake": {
    "name": "earthquake",
    "type": "ground",
    "category": "Physical",
    "power": 100,
    "accuracy": 100,
    "pp": 10,
    "priority": 0,
    "target": "all-other-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "fissure": {
    "name": "fissure",
    "type": "ground",
    "category": "Physical",
    "power": null,
    "accuracy": 30,
    "pp": 5,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "ohko",
        "url": "https://pokeapi.co/api/v2/move-category/9/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "dig": {
    "name": "dig",
    "type": "ground",
    "category": "Physical",
    "power": 80,
    "accuracy": 100,
    "pp": 10,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "mud-slap": {
    "name": "mud-slap",
    "type": "ground",
    "category": "Physical",
    "power": 20,
    "accuracy": 100,
    "pp": 10,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [
      {
        "change": -1,
        "stat": {
          "name": "accuracy",
          "url": "https://pokeapi.co/api/v2/stat/7/"
        }
      }
    ],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage-lower",
        "url": "https://pokeapi.co/api/v2/move-category/6/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 100
    }
  },
  "magnitude": {
    "name": "magnitude",
    "type": "ground",
    "category": "Physical",
    "power": null,
    "accuracy": 100,
    "pp": 30,
    "priority": 0,
    "target": "all-other-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "tri-attack": {
    "name": "tri-attack",
    "type": "normal",
    "category": "Physical",
    "power": 80,
    "accuracy": 100,
    "pp": 10,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "unknown",
        "url": "https://pokeapi.co/api/v2/move-ailment/-1/"
      },
      "category": {
        "name": "damage-ailment",
        "url": "https://pokeapi.co/api/v2/move-category/4/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 20,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "pay-day": {
    "name": "pay-day",
    "type": "normal",
    "category": "Physical",
    "power": 40,
    "accuracy": 100,
    "pp": 20,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "feint-attack": {
    "name": "feint-attack",
    "type": "dark",
    "category": "Special",
    "power": 60,
    "accuracy": null,
    "pp": 20,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "swagger": {
    "name": "swagger",
    "type": "normal",
    "category": "Status",
    "power": null,
    "accuracy": 85,
    "pp": 15,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [
      {
        "change": 2,
        "stat": {
          "name": "attack",
          "url": "https://pokeapi.co/api/v2/stat/2/"
        }
      }
    ],
    "meta": {
      "ailment": {
        "name": "confusion",
        "url": "https://pokeapi.co/api/v2/move-ailment/6/"
      },
      "category": {
        "name": "swagger",
        "url": "https://pokeapi.co/api/v2/move-category/5/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": 2,
      "max_turns": 5,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "fake-out": {
    "name": "fake-out",
    "type": "normal",
    "category": "Physical",
    "power": 40,
    "accuracy": 100,
    "pp": 10,
    "priority": 3,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 100,
      "stat_chance": 0
    }
  },
  "psych-up": {
    "name": "psych-up",
    "type": "normal",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 10,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "unique",
        "url": "https://pokeapi.co/api/v2/move-category/13/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "water-sport": {
    "name": "water-sport",
    "type": "water",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 15,
    "priority": 0,
    "target": "entire-field",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "whole-field-effect",
        "url": "https://pokeapi.co/api/v2/move-category/10/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "karate-chop": {
    "name": "karate-chop",
    "type": "fighting",
    "category": "Physical",
    "power": 50,
    "accuracy": 100,
    "pp": 25,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 1,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "low-kick": {
    "name": "low-kick",
    "type": "fighting",
    "category": "Physical",
    "power": null,
    "accuracy": 100,
    "pp": 20,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "seismic-toss": {
    "name": "seismic-toss",
    "type": "fighting",
    "category": "Physical",
    "power": null,
    "accuracy": 100,
    "pp": 20,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "cross-chop": {
    "name": "cross-chop",
    "type": "fighting",
    "category": "Physical",
    "power": 100,
    "accuracy": 80,
    "pp": 5,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 1,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "take-down": {
    "name": "take-down",
    "type": "normal",
    "category": "Physical",
    "power": 90,
    "accuracy": 85,
    "pp": 20,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": -25,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "flame-wheel": {
    "name": "flame-wheel",
    "type": "fire",
    "category": "Special",
    "power": 60,
    "accuracy": 100,
    "pp": 25,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "burn",
        "url": "https://pokeapi.co/api/v2/move-ailment/4/"
      },
      "category": {
        "name": "damage-ailment",
        "url": "https://pokeapi.co/api/v2/move-category/4/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 10,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "odor-sleuth": {
    "name": "odor-sleuth",
    "type": "normal",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 40,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "no-type-immunity",
        "url": "https://pokeapi.co/api/v2/move-ailment/17/"
      },
      "category": {
        "name": "ailment",
        "url": "https://pokeapi.co/api/v2/move-category/1/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "extreme-speed": {
    "name": "extreme-speed",
    "type": "normal",
    "category": "Physical",
    "power": 80,
    "accuracy": 100,
    "pp": 5,
    "priority": 2,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "hypnosis": {
    "name": "hypnosis",
    "type": "psychic",
    "category": "Status",
    "power": null,
    "accuracy": 60,
    "pp": 20,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "sleep",
        "url": "https://pokeapi.co/api/v2/move-ailment/2/"
      },
      "category": {
        "name": "ailment",
        "url": "https://pokeapi.co/api/v2/move-category/1/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": 2,
      "max_turns": 4,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "belly-drum": {
    "name": "belly-drum",
    "type": "normal",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 10,
    "priority": 0,
    "target": "user",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "unique",
        "url": "https://pokeapi.co/api/v2/move-category/13/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "submission": {
    "name": "submission",
    "type": "fighting",
    "category": "Physical",
    "power": 80,
    "accuracy": 80,
    "pp": 20,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": -25,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "mind-reader": {
    "name": "mind-reader",
    "type": "normal",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 5,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "unique",
        "url": "https://pokeapi.co/api/v2/move-category/13/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "teleport": {
    "name": "teleport",
    "type": "psychic",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 20,
    "priority": -6,
    "target": "user",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "unique",
        "url": "https://pokeapi.co/api/v2/move-category/13/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "recover": {
    "name": "recover",
    "type": "normal",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 5,
    "priority": 0,
    "target": "user",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "heal",
        "url": "https://pokeapi.co/api/v2/move-category/3/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 50,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "reflect": {
    "name": "reflect",
    "type": "psychic",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 20,
    "priority": 0,
    "target": "users-field",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "field-effect",
        "url": "https://pokeapi.co/api/v2/move-category/11/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "kinesis": {
    "name": "kinesis",
    "type": "psychic",
    "category": "Status",
    "power": null,
    "accuracy": 80,
    "pp": 15,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [
      {
        "change": -1,
        "stat": {
          "name": "accuracy",
          "url": "https://pokeapi.co/api/v2/stat/7/"
        }
      }
    ],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "net-good-stats",
        "url": "https://pokeapi.co/api/v2/move-category/2/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "future-sight": {
    "name": "future-sight",
    "type": "psychic",
    "category": "Special",
    "power": 120,
    "accuracy": 100,
    "pp": 10,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "unique",
        "url": "https://pokeapi.co/api/v2/move-category/13/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "trick": {
    "name": "trick",
    "type": "psychic",
    "category": "Status",
    "power": null,
    "accuracy": 100,
    "pp": 10,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "unique",
        "url": "https://pokeapi.co/api/v2/move-category/13/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "role-play": {
    "name": "role-play",
    "type": "psychic",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 10,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "unique",
        "url": "https://pokeapi.co/api/v2/move-category/13/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "calm-mind": {
    "name": "calm-mind",
    "type": "psychic",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 20,
    "priority": 0,
    "target": "user",
    "stat_changes": [
      {
        "change": 1,
        "stat": {
          "name": "special-attack",
          "url": "https://pokeapi.co/api/v2/stat/4/"
        }
      },
      {
        "change": 1,
        "stat": {
          "name": "special-defense",
          "url": "https://pokeapi.co/api/v2/stat/5/"
        }
      }
    ],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "net-good-stats",
        "url": "https://pokeapi.co/api/v2/move-category/2/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "dynamic-punch": {
    "name": "dynamic-punch",
    "type": "fighting",
    "category": "Physical",
    "power": 100,
    "accuracy": 50,
    "pp": 5,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "confusion",
        "url": "https://pokeapi.co/api/v2/move-ailment/6/"
      },
      "category": {
        "name": "damage-ailment",
        "url": "https://pokeapi.co/api/v2/move-category/4/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": 2,
      "max_turns": 5,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 100,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "vital-throw": {
    "name": "vital-throw",
    "type": "fighting",
    "category": "Physical",
    "power": 70,
    "accuracy": null,
    "pp": 10,
    "priority": -1,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "revenge": {
    "name": "revenge",
    "type": "fighting",
    "category": "Physical",
    "power": 60,
    "accuracy": 100,
    "pp": 10,
    "priority": -4,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "bubble-beam": {
    "name": "bubble-beam",
    "type": "water",
    "category": "Special",
    "power": 65,
    "accuracy": 100,
    "pp": 20,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [
      {
        "change": -1,
        "stat": {
          "name": "speed",
          "url": "https://pokeapi.co/api/v2/stat/6/"
        }
      }
    ],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage-lower",
        "url": "https://pokeapi.co/api/v2/move-category/6/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 10
    }
  },
  "barrier": {
    "name": "barrier",
    "type": "psychic",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 20,
    "priority": 0,
    "target": "user",
    "stat_changes": [
      {
        "change": 2,
        "stat": {
          "name": "defense",
          "url": "https://pokeapi.co/api/v2/stat/3/"
        }
      }
    ],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "net-good-stats",
        "url": "https://pokeapi.co/api/v2/move-category/2/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "constrict": {
    "name": "constrict",
    "type": "normal",
    "category": "Physical",
    "power": 10,
    "accuracy": 100,
    "pp": 35,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [
      {
        "change": -1,
        "stat": {
          "name": "speed",
          "url": "https://pokeapi.co/api/v2/stat/6/"
        }
      }
    ],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage-lower",
        "url": "https://pokeapi.co/api/v2/move-category/6/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 10
    }
  },
  "rock-throw": {
    "name": "rock-throw",
    "type": "rock",
    "category": "Physical",
    "power": 50,
    "accuracy": 90,
    "pp": 15,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "self-destruct": {
    "name": "self-destruct",
    "type": "normal",
    "category": "Physical",
    "power": 200,
    "accuracy": 100,
    "pp": 5,
    "priority": 0,
    "target": "all-other-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "explosion": {
    "name": "explosion",
    "type": "normal",
    "category": "Physical",
    "power": 250,
    "accuracy": 100,
    "pp": 5,
    "priority": 0,
    "target": "all-other-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "mud-sport": {
    "name": "mud-sport",
    "type": "ground",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 15,
    "priority": 0,
    "target": "entire-field",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "whole-field-effect",
        "url": "https://pokeapi.co/api/v2/move-category/10/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "rock-blast": {
    "name": "rock-blast",
    "type": "rock",
    "category": "Physical",
    "power": 25,
    "accuracy": 90,
    "pp": 10,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": 2,
      "max_hits": 5,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "stomp": {
    "name": "stomp",
    "type": "normal",
    "category": "Physical",
    "power": 65,
    "accuracy": 100,
    "pp": 20,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 30,
      "stat_chance": 0
    }
  },
  "fire-blast": {
    "name": "fire-blast",
    "type": "fire",
    "category": "Special",
    "power": 110,
    "accuracy": 85,
    "pp": 5,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "burn",
        "url": "https://pokeapi.co/api/v2/move-ailment/4/"
      },
      "category": {
        "name": "damage-ailment",
        "url": "https://pokeapi.co/api/v2/move-category/4/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 10,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "bounce": {
    "name": "bounce",
    "type": "flying",
    "category": "Physical",
    "power": 85,
    "accuracy": 85,
    "pp": 5,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "paralysis",
        "url": "https://pokeapi.co/api/v2/move-ailment/1/"
      },
      "category": {
        "name": "damage-ailment",
        "url": "https://pokeapi.co/api/v2/move-category/4/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 30,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "headbutt": {
    "name": "headbutt",
    "type": "normal",
    "category": "Physical",
    "power": 70,
    "accuracy": 100,
    "pp": 15,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 30,
      "stat_chance": 0
    }
  },
  "amnesia": {
    "name": "amnesia",
    "type": "psychic",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 20,
    "priority": 0,
    "target": "user",
    "stat_changes": [
      {
        "change": 2,
        "stat": {
          "name": "special-defense",
          "url": "https://pokeapi.co/api/v2/stat/5/"
        }
      }
    ],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "net-good-stats",
        "url": "https://pokeapi.co/api/v2/move-category/2/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "curse": {
    "name": "curse",
    "type": "ghost",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 10,
    "priority": 0,
    "target": "specific-move",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "unique",
        "url": "https://pokeapi.co/api/v2/move-category/13/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "yawn": {
    "name": "yawn",
    "type": "normal",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 10,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "yawn",
        "url": "https://pokeapi.co/api/v2/move-ailment/14/"
      },
      "category": {
        "name": "ailment",
        "url": "https://pokeapi.co/api/v2/move-category/1/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": 2,
      "max_turns": 2,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "sonic-boom": {
    "name": "sonic-boom",
    "type": "normal",
    "category": "Physical",
    "power": null,
    "accuracy": 90,
    "pp": 20,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "zap-cannon": {
    "name": "zap-cannon",
    "type": "electric",
    "category": "Special",
    "power": 120,
    "accuracy": 50,
    "pp": 5,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "paralysis",
        "url": "https://pokeapi.co/api/v2/move-ailment/1/"
      },
      "category": {
        "name": "damage-ailment",
        "url": "https://pokeapi.co/api/v2/move-category/4/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 100,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "lock-on": {
    "name": "lock-on",
    "type": "normal",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 5,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "unique",
        "url": "https://pokeapi.co/api/v2/move-category/13/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "spark": {
    "name": "spark",
    "type": "electric",
    "category": "Special",
    "power": 65,
    "accuracy": 100,
    "pp": 20,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "paralysis",
        "url": "https://pokeapi.co/api/v2/move-ailment/1/"
      },
      "category": {
        "name": "damage-ailment",
        "url": "https://pokeapi.co/api/v2/move-category/4/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 30,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "metal-sound": {
    "name": "metal-sound",
    "type": "steel",
    "category": "Status",
    "power": null,
    "accuracy": 85,
    "pp": 40,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [
      {
        "change": -2,
        "stat": {
          "name": "special-defense",
          "url": "https://pokeapi.co/api/v2/stat/5/"
        }
      }
    ],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "net-good-stats",
        "url": "https://pokeapi.co/api/v2/move-category/2/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "swords-dance": {
    "name": "swords-dance",
    "type": "normal",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 20,
    "priority": 0,
    "target": "user",
    "stat_changes": [
      {
        "change": 2,
        "stat": {
          "name": "attack",
          "url": "https://pokeapi.co/api/v2/stat/2/"
        }
      }
    ],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "net-good-stats",
        "url": "https://pokeapi.co/api/v2/move-category/2/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "false-swipe": {
    "name": "false-swipe",
    "type": "normal",
    "category": "Physical",
    "power": 40,
    "accuracy": 100,
    "pp": 40,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "fury-cutter": {
    "name": "fury-cutter",
    "type": "bug",
    "category": "Physical",
    "power": 40,
    "accuracy": 95,
    "pp": 20,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "knock-off": {
    "name": "knock-off",
    "type": "dark",
    "category": "Special",
    "power": 65,
    "accuracy": 100,
    "pp": 20,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "uproar": {
    "name": "uproar",
    "type": "normal",
    "category": "Physical",
    "power": 90,
    "accuracy": 100,
    "pp": 10,
    "priority": 0,
    "target": "random-opponent",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": 3,
      "max_turns": 3,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "ice-beam": {
    "name": "ice-beam",
    "type": "ice",
    "category": "Special",
    "power": 90,
    "accuracy": 100,
    "pp": 10,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "freeze",
        "url": "https://pokeapi.co/api/v2/move-ailment/3/"
      },
      "category": {
        "name": "damage-ailment",
        "url": "https://pokeapi.co/api/v2/move-category/4/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 10,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "aurora-beam": {
    "name": "aurora-beam",
    "type": "ice",
    "category": "Special",
    "power": 65,
    "accuracy": 100,
    "pp": 20,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [
      {
        "change": -1,
        "stat": {
          "name": "attack",
          "url": "https://pokeapi.co/api/v2/stat/2/"
        }
      }
    ],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage-lower",
        "url": "https://pokeapi.co/api/v2/move-category/6/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 10
    }
  },
  "icy-wind": {
    "name": "icy-wind",
    "type": "ice",
    "category": "Special",
    "power": 55,
    "accuracy": 95,
    "pp": 15,
    "priority": 0,
    "target": "all-opponents",
    "stat_changes": [
      {
        "change": -1,
        "stat": {
          "name": "speed",
          "url": "https://pokeapi.co/api/v2/stat/6/"
        }
      }
    ],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage-lower",
        "url": "https://pokeapi.co/api/v2/move-category/6/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 100
    }
  },
  "signal-beam": {
    "name": "signal-beam",
    "type": "bug",
    "category": "Physical",
    "power": 75,
    "accuracy": 100,
    "pp": 15,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "confusion",
        "url": "https://pokeapi.co/api/v2/move-ailment/6/"
      },
      "category": {
        "name": "damage-ailment",
        "url": "https://pokeapi.co/api/v2/move-category/4/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": 2,
      "max_turns": 5,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 10,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "sheer-cold": {
    "name": "sheer-cold",
    "type": "ice",
    "category": "Special",
    "power": null,
    "accuracy": 30,
    "pp": 5,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "ohko",
        "url": "https://pokeapi.co/api/v2/move-category/9/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "sludge": {
    "name": "sludge",
    "type": "poison",
    "category": "Physical",
    "power": 65,
    "accuracy": 100,
    "pp": 20,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/move-ailment/5/"
      },
      "category": {
        "name": "damage-ailment",
        "url": "https://pokeapi.co/api/v2/move-category/4/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 30,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "poison-gas": {
    "name": "poison-gas",
    "type": "poison",
    "category": "Status",
    "power": null,
    "accuracy": 90,
    "pp": 40,
    "priority": 0,
    "target": "all-opponents",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/move-ailment/5/"
      },
      "category": {
        "name": "ailment",
        "url": "https://pokeapi.co/api/v2/move-category/1/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "acid-armor": {
    "name": "acid-armor",
    "type": "poison",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 20,
    "priority": 0,
    "target": "user",
    "stat_changes": [
      {
        "change": 2,
        "stat": {
          "name": "defense",
          "url": "https://pokeapi.co/api/v2/stat/3/"
        }
      }
    ],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "net-good-stats",
        "url": "https://pokeapi.co/api/v2/move-category/2/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "sludge-bomb": {
    "name": "sludge-bomb",
    "type": "poison",
    "category": "Physical",
    "power": 90,
    "accuracy": 100,
    "pp": 10,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/move-ailment/5/"
      },
      "category": {
        "name": "damage-ailment",
        "url": "https://pokeapi.co/api/v2/move-category/4/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 30,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "memento": {
    "name": "memento",
    "type": "dark",
    "category": "Status",
    "power": null,
    "accuracy": 100,
    "pp": 10,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [
      {
        "change": -2,
        "stat": {
          "name": "attack",
          "url": "https://pokeapi.co/api/v2/stat/2/"
        }
      },
      {
        "change": -2,
        "stat": {
          "name": "special-attack",
          "url": "https://pokeapi.co/api/v2/stat/4/"
        }
      }
    ],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "unique",
        "url": "https://pokeapi.co/api/v2/move-category/13/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "clamp": {
    "name": "clamp",
    "type": "water",
    "category": "Special",
    "power": 35,
    "accuracy": 85,
    "pp": 15,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "trap",
        "url": "https://pokeapi.co/api/v2/move-ailment/8/"
      },
      "category": {
        "name": "damage-ailment",
        "url": "https://pokeapi.co/api/v2/move-category/4/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": 5,
      "max_turns": 6,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 100,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "icicle-spear": {
    "name": "icicle-spear",
    "type": "ice",
    "category": "Special",
    "power": 25,
    "accuracy": 100,
    "pp": 30,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": 2,
      "max_hits": 5,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "spike-cannon": {
    "name": "spike-cannon",
    "type": "normal",
    "category": "Physical",
    "power": 20,
    "accuracy": 100,
    "pp": 15,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": 2,
      "max_hits": 5,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "spikes": {
    "name": "spikes",
    "type": "ground",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 20,
    "priority": 0,
    "target": "opponents-field",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "field-effect",
        "url": "https://pokeapi.co/api/v2/move-category/11/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "night-shade": {
    "name": "night-shade",
    "type": "ghost",
    "category": "Physical",
    "power": null,
    "accuracy": 100,
    "pp": 15,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "lick": {
    "name": "lick",
    "type": "ghost",
    "category": "Physical",
    "power": 30,
    "accuracy": 100,
    "pp": 30,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "paralysis",
        "url": "https://pokeapi.co/api/v2/move-ailment/1/"
      },
      "category": {
        "name": "damage-ailment",
        "url": "https://pokeapi.co/api/v2/move-category/4/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 30,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "dream-eater": {
    "name": "dream-eater",
    "type": "psychic",
    "category": "Special",
    "power": 100,
    "accuracy": 100,
    "pp": 15,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage-heal",
        "url": "https://pokeapi.co/api/v2/move-category/8/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 50,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "nightmare": {
    "name": "nightmare",
    "type": "ghost",
    "category": "Status",
    "power": null,
    "accuracy": 100,
    "pp": 15,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "nightmare",
        "url": "https://pokeapi.co/api/v2/move-ailment/9/"
      },
      "category": {
        "name": "ailment",
        "url": "https://pokeapi.co/api/v2/move-category/1/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "spite": {
    "name": "spite",
    "type": "ghost",
    "category": "Status",
    "power": null,
    "accuracy": 100,
    "pp": 10,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "unique",
        "url": "https://pokeapi.co/api/v2/move-category/13/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "destiny-bond": {
    "name": "destiny-bond",
    "type": "ghost",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 5,
    "priority": 0,
    "target": "user",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "unique",
        "url": "https://pokeapi.co/api/v2/move-category/13/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "shadow-ball": {
    "name": "shadow-ball",
    "type": "ghost",
    "category": "Physical",
    "power": 80,
    "accuracy": 100,
    "pp": 15,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [
      {
        "change": -1,
        "stat": {
          "name": "special-defense",
          "url": "https://pokeapi.co/api/v2/stat/5/"
        }
      }
    ],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage-lower",
        "url": "https://pokeapi.co/api/v2/move-category/6/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 20
    }
  },
  "shadow-punch": {
    "name": "shadow-punch",
    "type": "ghost",
    "category": "Physical",
    "power": 60,
    "accuracy": null,
    "pp": 20,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "bind": {
    "name": "bind",
    "type": "normal",
    "category": "Physical",
    "power": 15,
    "accuracy": 85,
    "pp": 20,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "trap",
        "url": "https://pokeapi.co/api/v2/move-ailment/8/"
      },
      "category": {
        "name": "damage-ailment",
        "url": "https://pokeapi.co/api/v2/move-category/4/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": 5,
      "max_turns": 6,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 100,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "dragon-breath": {
    "name": "dragon-breath",
    "type": "dragon",
    "category": "Special",
    "power": 60,
    "accuracy": 100,
    "pp": 20,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "paralysis",
        "url": "https://pokeapi.co/api/v2/move-ailment/1/"
      },
      "category": {
        "name": "damage-ailment",
        "url": "https://pokeapi.co/api/v2/move-category/4/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 30,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "iron-tail": {
    "name": "iron-tail",
    "type": "steel",
    "category": "Physical",
    "power": 100,
    "accuracy": 75,
    "pp": 15,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [
      {
        "change": -1,
        "stat": {
          "name": "defense",
          "url": "https://pokeapi.co/api/v2/stat/3/"
        }
      }
    ],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage-lower",
        "url": "https://pokeapi.co/api/v2/move-category/6/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 30
    }
  },
  "meditate": {
    "name": "meditate",
    "type": "psychic",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 40,
    "priority": 0,
    "target": "user",
    "stat_changes": [
      {
        "change": 1,
        "stat": {
          "name": "attack",
          "url": "https://pokeapi.co/api/v2/stat/2/"
        }
      }
    ],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "net-good-stats",
        "url": "https://pokeapi.co/api/v2/move-category/2/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "vice-grip": {
    "name": "vice-grip",
    "type": "normal",
    "category": "Physical",
    "power": 55,
    "accuracy": 100,
    "pp": 30,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "guillotine": {
    "name": "guillotine",
    "type": "normal",
    "category": "Physical",
    "power": null,
    "accuracy": 30,
    "pp": 5,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "ohko",
        "url": "https://pokeapi.co/api/v2/move-category/9/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "crabhammer": {
    "name": "crabhammer",
    "type": "water",
    "category": "Special",
    "power": 100,
    "accuracy": 90,
    "pp": 10,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 1,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "flail": {
    "name": "flail",
    "type": "normal",
    "category": "Physical",
    "power": null,
    "accuracy": 100,
    "pp": 15,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "mud-shot": {
    "name": "mud-shot",
    "type": "ground",
    "category": "Physical",
    "power": 55,
    "accuracy": 95,
    "pp": 15,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [
      {
        "change": -1,
        "stat": {
          "name": "speed",
          "url": "https://pokeapi.co/api/v2/stat/6/"
        }
      }
    ],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage-lower",
        "url": "https://pokeapi.co/api/v2/move-category/6/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 100
    }
  },
  "mirror-coat": {
    "name": "mirror-coat",
    "type": "psychic",
    "category": "Special",
    "power": null,
    "accuracy": 100,
    "pp": 20,
    "priority": -5,
    "target": "specific-move",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "charge": {
    "name": "charge",
    "type": "electric",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 20,
    "priority": 0,
    "target": "user",
    "stat_changes": [
      {
        "change": 1,
        "stat": {
          "name": "special-defense",
          "url": "https://pokeapi.co/api/v2/stat/5/"
        }
      }
    ],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "net-good-stats",
        "url": "https://pokeapi.co/api/v2/move-category/2/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "barrage": {
    "name": "barrage",
    "type": "normal",
    "category": "Physical",
    "power": 15,
    "accuracy": 85,
    "pp": 20,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": 2,
      "max_hits": 5,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "egg-bomb": {
    "name": "egg-bomb",
    "type": "normal",
    "category": "Physical",
    "power": 100,
    "accuracy": 75,
    "pp": 10,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "bone-club": {
    "name": "bone-club",
    "type": "ground",
    "category": "Physical",
    "power": 65,
    "accuracy": 85,
    "pp": 20,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 10,
      "stat_chance": 0
    }
  },
  "bonemerang": {
    "name": "bonemerang",
    "type": "ground",
    "category": "Physical",
    "power": 50,
    "accuracy": 90,
    "pp": 10,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": 2,
      "max_hits": 2,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "bone-rush": {
    "name": "bone-rush",
    "type": "ground",
    "category": "Physical",
    "power": 25,
    "accuracy": 90,
    "pp": 10,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": 2,
      "max_hits": 5,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "mega-kick": {
    "name": "mega-kick",
    "type": "normal",
    "category": "Physical",
    "power": 120,
    "accuracy": 75,
    "pp": 5,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "jump-kick": {
    "name": "jump-kick",
    "type": "fighting",
    "category": "Physical",
    "power": 100,
    "accuracy": 95,
    "pp": 10,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "rolling-kick": {
    "name": "rolling-kick",
    "type": "fighting",
    "category": "Physical",
    "power": 60,
    "accuracy": 85,
    "pp": 15,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 30,
      "stat_chance": 0
    }
  },
  "high-jump-kick": {
    "name": "high-jump-kick",
    "type": "fighting",
    "category": "Physical",
    "power": 130,
    "accuracy": 90,
    "pp": 10,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "reversal": {
    "name": "reversal",
    "type": "fighting",
    "category": "Physical",
    "power": null,
    "accuracy": 100,
    "pp": 15,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "endure": {
    "name": "endure",
    "type": "normal",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 10,
    "priority": 4,
    "target": "user",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "unique",
        "url": "https://pokeapi.co/api/v2/move-category/13/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "brick-break": {
    "name": "brick-break",
    "type": "fighting",
    "category": "Physical",
    "power": 75,
    "accuracy": 100,
    "pp": 15,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "comet-punch": {
    "name": "comet-punch",
    "type": "normal",
    "category": "Physical",
    "power": 18,
    "accuracy": 85,
    "pp": 15,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": 2,
      "max_hits": 5,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "mega-punch": {
    "name": "mega-punch",
    "type": "normal",
    "category": "Physical",
    "power": 80,
    "accuracy": 85,
    "pp": 20,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "fire-punch": {
    "name": "fire-punch",
    "type": "fire",
    "category": "Special",
    "power": 75,
    "accuracy": 100,
    "pp": 15,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "burn",
        "url": "https://pokeapi.co/api/v2/move-ailment/4/"
      },
      "category": {
        "name": "damage-ailment",
        "url": "https://pokeapi.co/api/v2/move-category/4/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 10,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "ice-punch": {
    "name": "ice-punch",
    "type": "ice",
    "category": "Special",
    "power": 75,
    "accuracy": 100,
    "pp": 15,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "freeze",
        "url": "https://pokeapi.co/api/v2/move-ailment/3/"
      },
      "category": {
        "name": "damage-ailment",
        "url": "https://pokeapi.co/api/v2/move-category/4/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 10,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "thunder-punch": {
    "name": "thunder-punch",
    "type": "electric",
    "category": "Special",
    "power": 75,
    "accuracy": 100,
    "pp": 15,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "paralysis",
        "url": "https://pokeapi.co/api/v2/move-ailment/1/"
      },
      "category": {
        "name": "damage-ailment",
        "url": "https://pokeapi.co/api/v2/move-category/4/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 10,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "counter": {
    "name": "counter",
    "type": "fighting",
    "category": "Physical",
    "power": null,
    "accuracy": 100,
    "pp": 20,
    "priority": -5,
    "target": "specific-move",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "mach-punch": {
    "name": "mach-punch",
    "type": "fighting",
    "category": "Physical",
    "power": 40,
    "accuracy": 100,
    "pp": 30,
    "priority": 1,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "detect": {
    "name": "detect",
    "type": "fighting",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 5,
    "priority": 4,
    "target": "user",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "protect",
        "url": "https://pokeapi.co/api/v2/move-ailment/43/"
      },
      "category": {
        "name": "unique",
        "url": "https://pokeapi.co/api/v2/move-category/13/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "sky-uppercut": {
    "name": "sky-uppercut",
    "type": "fighting",
    "category": "Physical",
    "power": 85,
    "accuracy": 90,
    "pp": 15,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "refresh": {
    "name": "refresh",
    "type": "normal",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 20,
    "priority": 0,
    "target": "user",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "unique",
        "url": "https://pokeapi.co/api/v2/move-category/13/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "smog": {
    "name": "smog",
    "type": "poison",
    "category": "Physical",
    "power": 30,
    "accuracy": 70,
    "pp": 20,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/move-ailment/5/"
      },
      "category": {
        "name": "damage-ailment",
        "url": "https://pokeapi.co/api/v2/move-category/4/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 40,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "soft-boiled": {
    "name": "soft-boiled",
    "type": "normal",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 5,
    "priority": 0,
    "target": "user",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "heal",
        "url": "https://pokeapi.co/api/v2/move-category/3/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 50,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "ingrain": {
    "name": "ingrain",
    "type": "grass",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 20,
    "priority": 0,
    "target": "user",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "ingrain",
        "url": "https://pokeapi.co/api/v2/move-ailment/21/"
      },
      "category": {
        "name": "ailment",
        "url": "https://pokeapi.co/api/v2/move-category/1/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "tickle": {
    "name": "tickle",
    "type": "normal",
    "category": "Status",
    "power": null,
    "accuracy": 100,
    "pp": 20,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [
      {
        "change": -1,
        "stat": {
          "name": "attack",
          "url": "https://pokeapi.co/api/v2/stat/2/"
        }
      },
      {
        "change": -1,
        "stat": {
          "name": "defense",
          "url": "https://pokeapi.co/api/v2/stat/3/"
        }
      }
    ],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "net-good-stats",
        "url": "https://pokeapi.co/api/v2/move-category/2/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "dizzy-punch": {
    "name": "dizzy-punch",
    "type": "normal",
    "category": "Physical",
    "power": 70,
    "accuracy": 100,
    "pp": 10,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "confusion",
        "url": "https://pokeapi.co/api/v2/move-ailment/6/"
      },
      "category": {
        "name": "damage-ailment",
        "url": "https://pokeapi.co/api/v2/move-category/4/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": 2,
      "max_turns": 5,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 20,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "twister": {
    "name": "twister",
    "type": "dragon",
    "category": "Special",
    "power": 40,
    "accuracy": 100,
    "pp": 20,
    "priority": 0,
    "target": "all-opponents",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 20,
      "stat_chance": 0
    }
  },
  "dragon-dance": {
    "name": "dragon-dance",
    "type": "dragon",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 20,
    "priority": 0,
    "target": "user",
    "stat_changes": [
      {
        "change": 1,
        "stat": {
          "name": "attack",
          "url": "https://pokeapi.co/api/v2/stat/2/"
        }
      },
      {
        "change": 1,
        "stat": {
          "name": "speed",
          "url": "https://pokeapi.co/api/v2/stat/6/"
        }
      }
    ],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "net-good-stats",
        "url": "https://pokeapi.co/api/v2/move-category/2/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "waterfall": {
    "name": "waterfall",
    "type": "water",
    "category": "Special",
    "power": 80,
    "accuracy": 100,
    "pp": 15,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 20,
      "stat_chance": 0
    }
  },
  "camouflage": {
    "name": "camouflage",
    "type": "normal",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 20,
    "priority": 0,
    "target": "user",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "unique",
        "url": "https://pokeapi.co/api/v2/move-category/13/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "substitute": {
    "name": "substitute",
    "type": "normal",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 10,
    "priority": 0,
    "target": "user",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "unique",
        "url": "https://pokeapi.co/api/v2/move-category/13/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "baton-pass": {
    "name": "baton-pass",
    "type": "normal",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 40,
    "priority": 0,
    "target": "user",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "unique",
        "url": "https://pokeapi.co/api/v2/move-category/13/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "recycle": {
    "name": "recycle",
    "type": "normal",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 10,
    "priority": 0,
    "target": "user",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "unique",
        "url": "https://pokeapi.co/api/v2/move-category/13/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "magical-leaf": {
    "name": "magical-leaf",
    "type": "grass",
    "category": "Special",
    "power": 60,
    "accuracy": null,
    "pp": 20,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "blizzard": {
    "name": "blizzard",
    "type": "ice",
    "category": "Special",
    "power": 110,
    "accuracy": 70,
    "pp": 5,
    "priority": 0,
    "target": "all-opponents",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "freeze",
        "url": "https://pokeapi.co/api/v2/move-ailment/3/"
      },
      "category": {
        "name": "damage-ailment",
        "url": "https://pokeapi.co/api/v2/move-category/4/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 10,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "lovely-kiss": {
    "name": "lovely-kiss",
    "type": "normal",
    "category": "Status",
    "power": null,
    "accuracy": 75,
    "pp": 10,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "sleep",
        "url": "https://pokeapi.co/api/v2/move-ailment/2/"
      },
      "category": {
        "name": "ailment",
        "url": "https://pokeapi.co/api/v2/move-category/1/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": 2,
      "max_turns": 4,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "powder-snow": {
    "name": "powder-snow",
    "type": "ice",
    "category": "Special",
    "power": 40,
    "accuracy": 100,
    "pp": 25,
    "priority": 0,
    "target": "all-opponents",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "freeze",
        "url": "https://pokeapi.co/api/v2/move-ailment/3/"
      },
      "category": {
        "name": "damage-ailment",
        "url": "https://pokeapi.co/api/v2/move-category/4/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 10,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "perish-song": {
    "name": "perish-song",
    "type": "normal",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 5,
    "priority": 0,
    "target": "all-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "perish-song",
        "url": "https://pokeapi.co/api/v2/move-ailment/20/"
      },
      "category": {
        "name": "ailment",
        "url": "https://pokeapi.co/api/v2/move-category/1/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": 4,
      "max_turns": 4,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "fake-tears": {
    "name": "fake-tears",
    "type": "dark",
    "category": "Status",
    "power": null,
    "accuracy": 100,
    "pp": 20,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [
      {
        "change": -2,
        "stat": {
          "name": "special-defense",
          "url": "https://pokeapi.co/api/v2/stat/5/"
        }
      }
    ],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "net-good-stats",
        "url": "https://pokeapi.co/api/v2/move-category/2/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "sunny-day": {
    "name": "sunny-day",
    "type": "fire",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 5,
    "priority": 0,
    "target": "entire-field",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "whole-field-effect",
        "url": "https://pokeapi.co/api/v2/move-category/10/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "splash": {
    "name": "splash",
    "type": "normal",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 40,
    "priority": 0,
    "target": "user",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "unique",
        "url": "https://pokeapi.co/api/v2/move-category/13/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "hyper-beam": {
    "name": "hyper-beam",
    "type": "normal",
    "category": "Physical",
    "power": 150,
    "accuracy": 90,
    "pp": 5,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "mist": {
    "name": "mist",
    "type": "ice",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 30,
    "priority": 0,
    "target": "users-field",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "field-effect",
        "url": "https://pokeapi.co/api/v2/move-category/11/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "transform": {
    "name": "transform",
    "type": "normal",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 10,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "unique",
        "url": "https://pokeapi.co/api/v2/move-category/13/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "sharpen": {
    "name": "sharpen",
    "type": "normal",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 30,
    "priority": 0,
    "target": "user",
    "stat_changes": [
      {
        "change": 1,
        "stat": {
          "name": "attack",
          "url": "https://pokeapi.co/api/v2/stat/2/"
        }
      }
    ],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "net-good-stats",
        "url": "https://pokeapi.co/api/v2/move-category/2/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "conversion": {
    "name": "conversion",
    "type": "normal",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 30,
    "priority": 0,
    "target": "user",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "unique",
        "url": "https://pokeapi.co/api/v2/move-category/13/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "conversion-2": {
    "name": "conversion-2",
    "type": "normal",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 30,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "unique",
        "url": "https://pokeapi.co/api/v2/move-category/13/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "ancient-power": {
    "name": "ancient-power",
    "type": "rock",
    "category": "Physical",
    "power": 60,
    "accuracy": 100,
    "pp": 5,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [
      {
        "change": 1,
        "stat": {
          "name": "attack",
          "url": "https://pokeapi.co/api/v2/stat/2/"
        }
      },
      {
        "change": 1,
        "stat": {
          "name": "defense",
          "url": "https://pokeapi.co/api/v2/stat/3/"
        }
      },
      {
        "change": 1,
        "stat": {
          "name": "special-attack",
          "url": "https://pokeapi.co/api/v2/stat/4/"
        }
      },
      {
        "change": 1,
        "stat": {
          "name": "special-defense",
          "url": "https://pokeapi.co/api/v2/stat/5/"
        }
      },
      {
        "change": 1,
        "stat": {
          "name": "speed",
          "url": "https://pokeapi.co/api/v2/stat/6/"
        }
      }
    ],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage-raise",
        "url": "https://pokeapi.co/api/v2/move-category/7/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 10
    }
  },
  "snore": {
    "name": "snore",
    "type": "normal",
    "category": "Physical",
    "power": 50,
    "accuracy": 100,
    "pp": 15,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 30,
      "stat_chance": 0
    }
  },
  "sleep-talk": {
    "name": "sleep-talk",
    "type": "normal",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 10,
    "priority": 0,
    "target": "user",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "unique",
        "url": "https://pokeapi.co/api/v2/move-category/13/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "block": {
    "name": "block",
    "type": "normal",
    "category": "Status",
    "power": null,
    "accuracy": null,
    "pp": 5,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "unique",
        "url": "https://pokeapi.co/api/v2/move-category/13/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "covet": {
    "name": "covet",
    "type": "normal",
    "category": "Physical",
    "power": 60,
    "accuracy": 100,
    "pp": 25,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  },
  "sky-attack": {
    "name": "sky-attack",
    "type": "flying",
    "category": "Physical",
    "power": 140,
    "accuracy": 90,
    "pp": 5,
    "priority": 0,
    "target": "selected-pokemon",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 1,
      "ailment_chance": 0,
      "flinch_chance": 30,
      "stat_chance": 0
    }
  },
  "outrage": {
    "name": "outrage",
    "type": "dragon",
    "category": "Special",
    "power": 120,
    "accuracy": 100,
    "pp": 10,
    "priority": 0,
    "target": "random-opponent",
    "stat_changes": [],
    "meta": {
      "ailment": {
        "name": "none",
        "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      "category": {
        "name": "damage",
        "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
      "min_hits": null,
      "max_hits": null,
      "min_turns": null,
      "max_turns": null,
      "drain": 0,
      "healing": 0,
      "crit_rate": 0,
      "ailment_chance": 0,
      "flinch_chance": 0,
      "stat_chance": 0
    }
  }
};
const LEARNSETS_DATA = {
  "bulbasaur": [
    {
      "level": 1,
      "move": "tackle"
    },
    {
      "level": 4,
      "move": "growl"
    },
    {
      "level": 7,
      "move": "leech-seed"
    },
    {
      "level": 10,
      "move": "vine-whip"
    },
    {
      "level": 15,
      "move": "poison-powder"
    },
    {
      "level": 15,
      "move": "sleep-powder"
    },
    {
      "level": 20,
      "move": "razor-leaf"
    },
    {
      "level": 25,
      "move": "sweet-scent"
    },
    {
      "level": 32,
      "move": "growth"
    },
    {
      "level": 39,
      "move": "synthesis"
    },
    {
      "level": 46,
      "move": "solar-beam"
    }
  ],
  "ivysaur": [
    {
      "level": 1,
      "move": "tackle"
    },
    {
      "level": 1,
      "move": "growl"
    },
    {
      "level": 1,
      "move": "leech-seed"
    },
    {
      "level": 10,
      "move": "vine-whip"
    },
    {
      "level": 15,
      "move": "poison-powder"
    },
    {
      "level": 15,
      "move": "sleep-powder"
    },
    {
      "level": 22,
      "move": "razor-leaf"
    },
    {
      "level": 29,
      "move": "sweet-scent"
    },
    {
      "level": 38,
      "move": "growth"
    },
    {
      "level": 47,
      "move": "synthesis"
    },
    {
      "level": 56,
      "move": "solar-beam"
    }
  ],
  "venusaur": [
    {
      "level": 1,
      "move": "vine-whip"
    },
    {
      "level": 1,
      "move": "tackle"
    },
    {
      "level": 1,
      "move": "growl"
    },
    {
      "level": 1,
      "move": "leech-seed"
    },
    {
      "level": 15,
      "move": "poison-powder"
    },
    {
      "level": 15,
      "move": "sleep-powder"
    },
    {
      "level": 22,
      "move": "razor-leaf"
    },
    {
      "level": 29,
      "move": "sweet-scent"
    },
    {
      "level": 41,
      "move": "growth"
    },
    {
      "level": 53,
      "move": "synthesis"
    },
    {
      "level": 65,
      "move": "solar-beam"
    }
  ],
  "charmander": [
    {
      "level": 1,
      "move": "scratch"
    },
    {
      "level": 1,
      "move": "growl"
    },
    {
      "level": 7,
      "move": "ember"
    },
    {
      "level": 13,
      "move": "metal-claw"
    },
    {
      "level": 19,
      "move": "smokescreen"
    },
    {
      "level": 25,
      "move": "scary-face"
    },
    {
      "level": 31,
      "move": "flamethrower"
    },
    {
      "level": 37,
      "move": "slash"
    },
    {
      "level": 43,
      "move": "dragon-rage"
    },
    {
      "level": 49,
      "move": "fire-spin"
    }
  ],
  "charmeleon": [
    {
      "level": 1,
      "move": "scratch"
    },
    {
      "level": 1,
      "move": "growl"
    },
    {
      "level": 1,
      "move": "ember"
    },
    {
      "level": 13,
      "move": "metal-claw"
    },
    {
      "level": 20,
      "move": "smokescreen"
    },
    {
      "level": 27,
      "move": "scary-face"
    },
    {
      "level": 34,
      "move": "flamethrower"
    },
    {
      "level": 41,
      "move": "slash"
    },
    {
      "level": 48,
      "move": "dragon-rage"
    },
    {
      "level": 55,
      "move": "fire-spin"
    }
  ],
  "charizard": [
    {
      "level": 1,
      "move": "scratch"
    },
    {
      "level": 1,
      "move": "growl"
    },
    {
      "level": 1,
      "move": "ember"
    },
    {
      "level": 1,
      "move": "metal-claw"
    },
    {
      "level": 1,
      "move": "heat-wave"
    },
    {
      "level": 20,
      "move": "smokescreen"
    },
    {
      "level": 27,
      "move": "scary-face"
    },
    {
      "level": 34,
      "move": "flamethrower"
    },
    {
      "level": 36,
      "move": "wing-attack"
    },
    {
      "level": 44,
      "move": "slash"
    },
    {
      "level": 54,
      "move": "dragon-rage"
    },
    {
      "level": 64,
      "move": "fire-spin"
    }
  ],
  "squirtle": [
    {
      "level": 1,
      "move": "tackle"
    },
    {
      "level": 4,
      "move": "tail-whip"
    },
    {
      "level": 7,
      "move": "bubble"
    },
    {
      "level": 10,
      "move": "withdraw"
    },
    {
      "level": 13,
      "move": "water-gun"
    },
    {
      "level": 18,
      "move": "bite"
    },
    {
      "level": 23,
      "move": "rapid-spin"
    },
    {
      "level": 28,
      "move": "protect"
    },
    {
      "level": 33,
      "move": "rain-dance"
    },
    {
      "level": 40,
      "move": "skull-bash"
    },
    {
      "level": 47,
      "move": "hydro-pump"
    }
  ],
  "wartortle": [
    {
      "level": 1,
      "move": "tackle"
    },
    {
      "level": 1,
      "move": "tail-whip"
    },
    {
      "level": 1,
      "move": "bubble"
    },
    {
      "level": 10,
      "move": "withdraw"
    },
    {
      "level": 13,
      "move": "water-gun"
    },
    {
      "level": 19,
      "move": "bite"
    },
    {
      "level": 25,
      "move": "rapid-spin"
    },
    {
      "level": 31,
      "move": "protect"
    },
    {
      "level": 37,
      "move": "rain-dance"
    },
    {
      "level": 45,
      "move": "skull-bash"
    },
    {
      "level": 53,
      "move": "hydro-pump"
    }
  ],
  "blastoise": [
    {
      "level": 1,
      "move": "tackle"
    },
    {
      "level": 1,
      "move": "tail-whip"
    },
    {
      "level": 1,
      "move": "withdraw"
    },
    {
      "level": 1,
      "move": "bubble"
    },
    {
      "level": 13,
      "move": "water-gun"
    },
    {
      "level": 19,
      "move": "bite"
    },
    {
      "level": 25,
      "move": "rapid-spin"
    },
    {
      "level": 31,
      "move": "protect"
    },
    {
      "level": 42,
      "move": "rain-dance"
    },
    {
      "level": 55,
      "move": "skull-bash"
    },
    {
      "level": 68,
      "move": "hydro-pump"
    }
  ],
  "caterpie": [
    {
      "level": 1,
      "move": "tackle"
    },
    {
      "level": 1,
      "move": "string-shot"
    }
  ],
  "metapod": [
    {
      "level": 1,
      "move": "harden"
    }
  ],
  "butterfree": [
    {
      "level": 1,
      "move": "confusion"
    },
    {
      "level": 13,
      "move": "poison-powder"
    },
    {
      "level": 14,
      "move": "stun-spore"
    },
    {
      "level": 15,
      "move": "sleep-powder"
    },
    {
      "level": 18,
      "move": "supersonic"
    },
    {
      "level": 23,
      "move": "whirlwind"
    },
    {
      "level": 28,
      "move": "gust"
    },
    {
      "level": 34,
      "move": "psybeam"
    },
    {
      "level": 40,
      "move": "safeguard"
    },
    {
      "level": 47,
      "move": "silver-wind"
    }
  ],
  "weedle": [
    {
      "level": 1,
      "move": "poison-sting"
    },
    {
      "level": 1,
      "move": "string-shot"
    }
  ],
  "kakuna": [
    {
      "level": 1,
      "move": "harden"
    }
  ],
  "beedrill": [
    {
      "level": 1,
      "move": "fury-attack"
    },
    {
      "level": 15,
      "move": "focus-energy"
    },
    {
      "level": 20,
      "move": "twineedle"
    },
    {
      "level": 25,
      "move": "rage"
    },
    {
      "level": 30,
      "move": "pursuit"
    },
    {
      "level": 35,
      "move": "pin-missile"
    },
    {
      "level": 40,
      "move": "agility"
    },
    {
      "level": 45,
      "move": "endeavor"
    }
  ],
  "pidgey": [
    {
      "level": 1,
      "move": "tackle"
    },
    {
      "level": 5,
      "move": "sand-attack"
    },
    {
      "level": 9,
      "move": "gust"
    },
    {
      "level": 13,
      "move": "quick-attack"
    },
    {
      "level": 19,
      "move": "whirlwind"
    },
    {
      "level": 25,
      "move": "wing-attack"
    },
    {
      "level": 31,
      "move": "feather-dance"
    },
    {
      "level": 39,
      "move": "agility"
    },
    {
      "level": 47,
      "move": "mirror-move"
    }
  ],
  "pidgeotto": [
    {
      "level": 1,
      "move": "gust"
    },
    {
      "level": 1,
      "move": "sand-attack"
    },
    {
      "level": 1,
      "move": "tackle"
    },
    {
      "level": 13,
      "move": "quick-attack"
    },
    {
      "level": 20,
      "move": "whirlwind"
    },
    {
      "level": 27,
      "move": "wing-attack"
    },
    {
      "level": 34,
      "move": "feather-dance"
    },
    {
      "level": 43,
      "move": "agility"
    },
    {
      "level": 52,
      "move": "mirror-move"
    }
  ],
  "pidgeot": [
    {
      "level": 1,
      "move": "gust"
    },
    {
      "level": 1,
      "move": "sand-attack"
    },
    {
      "level": 1,
      "move": "tackle"
    },
    {
      "level": 1,
      "move": "quick-attack"
    },
    {
      "level": 20,
      "move": "whirlwind"
    },
    {
      "level": 27,
      "move": "wing-attack"
    },
    {
      "level": 34,
      "move": "feather-dance"
    },
    {
      "level": 48,
      "move": "agility"
    },
    {
      "level": 62,
      "move": "mirror-move"
    }
  ],
  "rattata": [
    {
      "level": 1,
      "move": "tackle"
    },
    {
      "level": 1,
      "move": "tail-whip"
    },
    {
      "level": 7,
      "move": "quick-attack"
    },
    {
      "level": 13,
      "move": "hyper-fang"
    },
    {
      "level": 20,
      "move": "focus-energy"
    },
    {
      "level": 27,
      "move": "pursuit"
    },
    {
      "level": 34,
      "move": "super-fang"
    },
    {
      "level": 41,
      "move": "endeavor"
    }
  ],
  "raticate": [
    {
      "level": 1,
      "move": "tackle"
    },
    {
      "level": 1,
      "move": "tail-whip"
    },
    {
      "level": 1,
      "move": "quick-attack"
    },
    {
      "level": 13,
      "move": "hyper-fang"
    },
    {
      "level": 20,
      "move": "scary-face"
    },
    {
      "level": 30,
      "move": "pursuit"
    },
    {
      "level": 40,
      "move": "super-fang"
    },
    {
      "level": 50,
      "move": "endeavor"
    }
  ],
  "spearow": [
    {
      "level": 1,
      "move": "growl"
    },
    {
      "level": 1,
      "move": "peck"
    },
    {
      "level": 7,
      "move": "leer"
    },
    {
      "level": 13,
      "move": "fury-attack"
    },
    {
      "level": 19,
      "move": "pursuit"
    },
    {
      "level": 25,
      "move": "aerial-ace"
    },
    {
      "level": 31,
      "move": "mirror-move"
    },
    {
      "level": 37,
      "move": "drill-peck"
    },
    {
      "level": 43,
      "move": "agility"
    }
  ],
  "fearow": [
    {
      "level": 1,
      "move": "fury-attack"
    },
    {
      "level": 1,
      "move": "leer"
    },
    {
      "level": 1,
      "move": "growl"
    },
    {
      "level": 1,
      "move": "peck"
    },
    {
      "level": 26,
      "move": "pursuit"
    },
    {
      "level": 32,
      "move": "mirror-move"
    },
    {
      "level": 40,
      "move": "drill-peck"
    },
    {
      "level": 47,
      "move": "agility"
    }
  ],
  "ekans": [
    {
      "level": 1,
      "move": "wrap"
    },
    {
      "level": 1,
      "move": "leer"
    },
    {
      "level": 8,
      "move": "poison-sting"
    },
    {
      "level": 13,
      "move": "bite"
    },
    {
      "level": 20,
      "move": "glare"
    },
    {
      "level": 25,
      "move": "screech"
    },
    {
      "level": 32,
      "move": "acid"
    },
    {
      "level": 37,
      "move": "stockpile"
    },
    {
      "level": 37,
      "move": "spit-up"
    },
    {
      "level": 37,
      "move": "swallow"
    },
    {
      "level": 44,
      "move": "haze"
    }
  ],
  "arbok": [
    {
      "level": 1,
      "move": "wrap"
    },
    {
      "level": 1,
      "move": "poison-sting"
    },
    {
      "level": 1,
      "move": "leer"
    },
    {
      "level": 1,
      "move": "bite"
    },
    {
      "level": 20,
      "move": "glare"
    },
    {
      "level": 28,
      "move": "screech"
    },
    {
      "level": 38,
      "move": "acid"
    },
    {
      "level": 46,
      "move": "stockpile"
    },
    {
      "level": 46,
      "move": "spit-up"
    },
    {
      "level": 46,
      "move": "swallow"
    },
    {
      "level": 56,
      "move": "haze"
    }
  ],
  "pikachu": [
    {
      "level": 1,
      "move": "growl"
    },
    {
      "level": 1,
      "move": "thunder-shock"
    },
    {
      "level": 6,
      "move": "tail-whip"
    },
    {
      "level": 8,
      "move": "thunder-wave"
    },
    {
      "level": 11,
      "move": "quick-attack"
    },
    {
      "level": 15,
      "move": "double-team"
    },
    {
      "level": 20,
      "move": "slam"
    },
    {
      "level": 26,
      "move": "thunderbolt"
    },
    {
      "level": 33,
      "move": "agility"
    },
    {
      "level": 41,
      "move": "thunder"
    },
    {
      "level": 50,
      "move": "light-screen"
    }
  ],
  "raichu": [
    {
      "level": 1,
      "move": "tail-whip"
    },
    {
      "level": 1,
      "move": "thunder-shock"
    },
    {
      "level": 1,
      "move": "thunderbolt"
    },
    {
      "level": 1,
      "move": "quick-attack"
    }
  ],
  "sandshrew": [
    {
      "level": 1,
      "move": "scratch"
    },
    {
      "level": 6,
      "move": "defense-curl"
    },
    {
      "level": 11,
      "move": "sand-attack"
    },
    {
      "level": 17,
      "move": "poison-sting"
    },
    {
      "level": 23,
      "move": "slash"
    },
    {
      "level": 30,
      "move": "swift"
    },
    {
      "level": 37,
      "move": "fury-swipes"
    },
    {
      "level": 45,
      "move": "sand-tomb"
    },
    {
      "level": 53,
      "move": "sandstorm"
    }
  ],
  "sandslash": [
    {
      "level": 1,
      "move": "scratch"
    },
    {
      "level": 1,
      "move": "sand-attack"
    },
    {
      "level": 1,
      "move": "defense-curl"
    },
    {
      "level": 17,
      "move": "poison-sting"
    },
    {
      "level": 24,
      "move": "slash"
    },
    {
      "level": 33,
      "move": "swift"
    },
    {
      "level": 42,
      "move": "fury-swipes"
    },
    {
      "level": 52,
      "move": "sand-tomb"
    },
    {
      "level": 62,
      "move": "sandstorm"
    }
  ],
  "nidoran-f": [
    {
      "level": 1,
      "move": "scratch"
    },
    {
      "level": 1,
      "move": "growl"
    },
    {
      "level": 8,
      "move": "tail-whip"
    },
    {
      "level": 12,
      "move": "double-kick"
    },
    {
      "level": 17,
      "move": "poison-sting"
    },
    {
      "level": 20,
      "move": "bite"
    },
    {
      "level": 23,
      "move": "helping-hand"
    },
    {
      "level": 30,
      "move": "fury-swipes"
    },
    {
      "level": 38,
      "move": "flatter"
    },
    {
      "level": 47,
      "move": "crunch"
    }
  ],
  "nidorina": [
    {
      "level": 1,
      "move": "scratch"
    },
    {
      "level": 1,
      "move": "growl"
    },
    {
      "level": 8,
      "move": "tail-whip"
    },
    {
      "level": 12,
      "move": "double-kick"
    },
    {
      "level": 18,
      "move": "poison-sting"
    },
    {
      "level": 22,
      "move": "bite"
    },
    {
      "level": 26,
      "move": "helping-hand"
    },
    {
      "level": 34,
      "move": "fury-swipes"
    },
    {
      "level": 43,
      "move": "flatter"
    },
    {
      "level": 53,
      "move": "crunch"
    }
  ],
  "nidoqueen": [
    {
      "level": 1,
      "move": "scratch"
    },
    {
      "level": 1,
      "move": "double-kick"
    },
    {
      "level": 1,
      "move": "tail-whip"
    },
    {
      "level": 1,
      "move": "poison-sting"
    },
    {
      "level": 22,
      "move": "body-slam"
    },
    {
      "level": 43,
      "move": "superpower"
    }
  ],
  "nidoran-m": [
    {
      "level": 1,
      "move": "leer"
    },
    {
      "level": 1,
      "move": "peck"
    },
    {
      "level": 8,
      "move": "focus-energy"
    },
    {
      "level": 12,
      "move": "double-kick"
    },
    {
      "level": 17,
      "move": "poison-sting"
    },
    {
      "level": 20,
      "move": "horn-attack"
    },
    {
      "level": 23,
      "move": "helping-hand"
    },
    {
      "level": 30,
      "move": "fury-attack"
    },
    {
      "level": 38,
      "move": "flatter"
    },
    {
      "level": 47,
      "move": "horn-drill"
    }
  ],
  "nidorino": [
    {
      "level": 1,
      "move": "leer"
    },
    {
      "level": 1,
      "move": "peck"
    },
    {
      "level": 8,
      "move": "focus-energy"
    },
    {
      "level": 12,
      "move": "double-kick"
    },
    {
      "level": 18,
      "move": "poison-sting"
    },
    {
      "level": 22,
      "move": "horn-attack"
    },
    {
      "level": 26,
      "move": "helping-hand"
    },
    {
      "level": 34,
      "move": "fury-attack"
    },
    {
      "level": 43,
      "move": "flatter"
    },
    {
      "level": 53,
      "move": "horn-drill"
    }
  ],
  "nidoking": [
    {
      "level": 1,
      "move": "double-kick"
    },
    {
      "level": 1,
      "move": "poison-sting"
    },
    {
      "level": 1,
      "move": "peck"
    },
    {
      "level": 1,
      "move": "focus-energy"
    },
    {
      "level": 22,
      "move": "thrash"
    },
    {
      "level": 43,
      "move": "megahorn"
    }
  ],
  "clefairy": [
    {
      "level": 1,
      "move": "pound"
    },
    {
      "level": 1,
      "move": "growl"
    },
    {
      "level": 5,
      "move": "encore"
    },
    {
      "level": 9,
      "move": "sing"
    },
    {
      "level": 13,
      "move": "double-slap"
    },
    {
      "level": 17,
      "move": "follow-me"
    },
    {
      "level": 21,
      "move": "minimize"
    },
    {
      "level": 25,
      "move": "defense-curl"
    },
    {
      "level": 29,
      "move": "metronome"
    },
    {
      "level": 33,
      "move": "cosmic-power"
    },
    {
      "level": 37,
      "move": "moonlight"
    },
    {
      "level": 41,
      "move": "light-screen"
    },
    {
      "level": 45,
      "move": "meteor-mash"
    }
  ],
  "clefable": [
    {
      "level": 1,
      "move": "double-slap"
    },
    {
      "level": 1,
      "move": "sing"
    },
    {
      "level": 1,
      "move": "minimize"
    },
    {
      "level": 1,
      "move": "metronome"
    }
  ],
  "vulpix": [
    {
      "level": 1,
      "move": "ember"
    },
    {
      "level": 5,
      "move": "tail-whip"
    },
    {
      "level": 9,
      "move": "roar"
    },
    {
      "level": 13,
      "move": "quick-attack"
    },
    {
      "level": 17,
      "move": "will-o-wisp"
    },
    {
      "level": 21,
      "move": "confuse-ray"
    },
    {
      "level": 25,
      "move": "imprison"
    },
    {
      "level": 29,
      "move": "flamethrower"
    },
    {
      "level": 33,
      "move": "safeguard"
    },
    {
      "level": 37,
      "move": "grudge"
    },
    {
      "level": 41,
      "move": "fire-spin"
    }
  ],
  "ninetales": [
    {
      "level": 1,
      "move": "ember"
    },
    {
      "level": 1,
      "move": "quick-attack"
    },
    {
      "level": 1,
      "move": "confuse-ray"
    },
    {
      "level": 1,
      "move": "safeguard"
    },
    {
      "level": 45,
      "move": "fire-spin"
    }
  ],
  "jigglypuff": [
    {
      "level": 1,
      "move": "sing"
    },
    {
      "level": 4,
      "move": "defense-curl"
    },
    {
      "level": 9,
      "move": "pound"
    },
    {
      "level": 14,
      "move": "disable"
    },
    {
      "level": 19,
      "move": "rollout"
    },
    {
      "level": 24,
      "move": "double-slap"
    },
    {
      "level": 29,
      "move": "rest"
    },
    {
      "level": 34,
      "move": "body-slam"
    },
    {
      "level": 39,
      "move": "mimic"
    },
    {
      "level": 44,
      "move": "hyper-voice"
    },
    {
      "level": 49,
      "move": "double-edge"
    }
  ],
  "wigglytuff": [
    {
      "level": 1,
      "move": "double-slap"
    },
    {
      "level": 1,
      "move": "sing"
    },
    {
      "level": 1,
      "move": "disable"
    },
    {
      "level": 1,
      "move": "defense-curl"
    }
  ],
  "zubat": [
    {
      "level": 1,
      "move": "leech-life"
    },
    {
      "level": 6,
      "move": "astonish"
    },
    {
      "level": 11,
      "move": "supersonic"
    },
    {
      "level": 16,
      "move": "bite"
    },
    {
      "level": 21,
      "move": "wing-attack"
    },
    {
      "level": 26,
      "move": "confuse-ray"
    },
    {
      "level": 31,
      "move": "air-cutter"
    },
    {
      "level": 36,
      "move": "mean-look"
    },
    {
      "level": 41,
      "move": "poison-fang"
    },
    {
      "level": 46,
      "move": "haze"
    }
  ],
  "golbat": [
    {
      "level": 1,
      "move": "supersonic"
    },
    {
      "level": 1,
      "move": "screech"
    },
    {
      "level": 1,
      "move": "leech-life"
    },
    {
      "level": 1,
      "move": "astonish"
    },
    {
      "level": 16,
      "move": "bite"
    },
    {
      "level": 21,
      "move": "wing-attack"
    },
    {
      "level": 28,
      "move": "confuse-ray"
    },
    {
      "level": 35,
      "move": "air-cutter"
    },
    {
      "level": 42,
      "move": "mean-look"
    },
    {
      "level": 49,
      "move": "poison-fang"
    },
    {
      "level": 56,
      "move": "haze"
    }
  ],
  "oddish": [
    {
      "level": 1,
      "move": "absorb"
    },
    {
      "level": 7,
      "move": "sweet-scent"
    },
    {
      "level": 14,
      "move": "poison-powder"
    },
    {
      "level": 16,
      "move": "stun-spore"
    },
    {
      "level": 18,
      "move": "sleep-powder"
    },
    {
      "level": 23,
      "move": "acid"
    },
    {
      "level": 32,
      "move": "moonlight"
    },
    {
      "level": 39,
      "move": "petal-dance"
    }
  ],
  "gloom": [
    {
      "level": 1,
      "move": "absorb"
    },
    {
      "level": 1,
      "move": "poison-powder"
    },
    {
      "level": 1,
      "move": "sweet-scent"
    },
    {
      "level": 16,
      "move": "stun-spore"
    },
    {
      "level": 18,
      "move": "sleep-powder"
    },
    {
      "level": 24,
      "move": "acid"
    },
    {
      "level": 35,
      "move": "moonlight"
    },
    {
      "level": 44,
      "move": "petal-dance"
    }
  ],
  "vileplume": [
    {
      "level": 1,
      "move": "absorb"
    },
    {
      "level": 1,
      "move": "mega-drain"
    },
    {
      "level": 1,
      "move": "stun-spore"
    },
    {
      "level": 1,
      "move": "aromatherapy"
    },
    {
      "level": 44,
      "move": "petal-dance"
    }
  ],
  "paras": [
    {
      "level": 1,
      "move": "scratch"
    },
    {
      "level": 7,
      "move": "stun-spore"
    },
    {
      "level": 13,
      "move": "poison-powder"
    },
    {
      "level": 19,
      "move": "leech-life"
    },
    {
      "level": 25,
      "move": "spore"
    },
    {
      "level": 31,
      "move": "slash"
    },
    {
      "level": 37,
      "move": "growth"
    },
    {
      "level": 43,
      "move": "giga-drain"
    },
    {
      "level": 49,
      "move": "aromatherapy"
    }
  ],
  "parasect": [
    {
      "level": 1,
      "move": "scratch"
    },
    {
      "level": 1,
      "move": "poison-powder"
    },
    {
      "level": 1,
      "move": "stun-spore"
    },
    {
      "level": 19,
      "move": "leech-life"
    },
    {
      "level": 27,
      "move": "spore"
    },
    {
      "level": 35,
      "move": "slash"
    },
    {
      "level": 43,
      "move": "growth"
    },
    {
      "level": 51,
      "move": "giga-drain"
    },
    {
      "level": 59,
      "move": "aromatherapy"
    }
  ],
  "venonat": [
    {
      "level": 1,
      "move": "tackle"
    },
    {
      "level": 1,
      "move": "disable"
    },
    {
      "level": 1,
      "move": "foresight"
    },
    {
      "level": 9,
      "move": "supersonic"
    },
    {
      "level": 17,
      "move": "confusion"
    },
    {
      "level": 20,
      "move": "poison-powder"
    },
    {
      "level": 25,
      "move": "leech-life"
    },
    {
      "level": 28,
      "move": "stun-spore"
    },
    {
      "level": 33,
      "move": "psybeam"
    },
    {
      "level": 36,
      "move": "sleep-powder"
    },
    {
      "level": 41,
      "move": "psychic"
    }
  ],
  "venomoth": [
    {
      "level": 1,
      "move": "tackle"
    },
    {
      "level": 1,
      "move": "supersonic"
    },
    {
      "level": 1,
      "move": "disable"
    },
    {
      "level": 1,
      "move": "foresight"
    },
    {
      "level": 1,
      "move": "silver-wind"
    },
    {
      "level": 17,
      "move": "confusion"
    },
    {
      "level": 20,
      "move": "poison-powder"
    },
    {
      "level": 25,
      "move": "leech-life"
    },
    {
      "level": 28,
      "move": "stun-spore"
    },
    {
      "level": 31,
      "move": "gust"
    },
    {
      "level": 36,
      "move": "psybeam"
    },
    {
      "level": 42,
      "move": "sleep-powder"
    },
    {
      "level": 52,
      "move": "psychic"
    }
  ],
  "diglett": [
    {
      "level": 1,
      "move": "scratch"
    },
    {
      "level": 1,
      "move": "sand-attack"
    },
    {
      "level": 5,
      "move": "growl"
    },
    {
      "level": 9,
      "move": "magnitude"
    },
    {
      "level": 17,
      "move": "dig"
    },
    {
      "level": 21,
      "move": "fury-swipes"
    },
    {
      "level": 25,
      "move": "mud-slap"
    },
    {
      "level": 33,
      "move": "slash"
    },
    {
      "level": 41,
      "move": "earthquake"
    },
    {
      "level": 49,
      "move": "fissure"
    }
  ],
  "dugtrio": [
    {
      "level": 1,
      "move": "scratch"
    },
    {
      "level": 1,
      "move": "sand-attack"
    },
    {
      "level": 1,
      "move": "growl"
    },
    {
      "level": 1,
      "move": "tri-attack"
    },
    {
      "level": 9,
      "move": "magnitude"
    },
    {
      "level": 17,
      "move": "dig"
    },
    {
      "level": 21,
      "move": "fury-swipes"
    },
    {
      "level": 25,
      "move": "mud-slap"
    },
    {
      "level": 26,
      "move": "sand-tomb"
    },
    {
      "level": 38,
      "move": "slash"
    },
    {
      "level": 51,
      "move": "earthquake"
    },
    {
      "level": 64,
      "move": "fissure"
    }
  ],
  "meowth": [
    {
      "level": 1,
      "move": "scratch"
    },
    {
      "level": 1,
      "move": "growl"
    },
    {
      "level": 10,
      "move": "bite"
    },
    {
      "level": 18,
      "move": "pay-day"
    },
    {
      "level": 25,
      "move": "feint-attack"
    },
    {
      "level": 31,
      "move": "screech"
    },
    {
      "level": 36,
      "move": "fury-swipes"
    },
    {
      "level": 40,
      "move": "slash"
    },
    {
      "level": 43,
      "move": "fake-out"
    },
    {
      "level": 45,
      "move": "swagger"
    }
  ],
  "persian": [
    {
      "level": 1,
      "move": "scratch"
    },
    {
      "level": 1,
      "move": "bite"
    },
    {
      "level": 1,
      "move": "growl"
    },
    {
      "level": 18,
      "move": "pay-day"
    },
    {
      "level": 25,
      "move": "feint-attack"
    },
    {
      "level": 34,
      "move": "screech"
    },
    {
      "level": 42,
      "move": "fury-swipes"
    },
    {
      "level": 49,
      "move": "slash"
    },
    {
      "level": 55,
      "move": "fake-out"
    },
    {
      "level": 61,
      "move": "swagger"
    }
  ],
  "psyduck": [
    {
      "level": 1,
      "move": "scratch"
    },
    {
      "level": 1,
      "move": "water-sport"
    },
    {
      "level": 5,
      "move": "tail-whip"
    },
    {
      "level": 10,
      "move": "disable"
    },
    {
      "level": 16,
      "move": "confusion"
    },
    {
      "level": 23,
      "move": "screech"
    },
    {
      "level": 31,
      "move": "psych-up"
    },
    {
      "level": 40,
      "move": "fury-swipes"
    },
    {
      "level": 50,
      "move": "hydro-pump"
    }
  ],
  "golduck": [
    {
      "level": 1,
      "move": "scratch"
    },
    {
      "level": 1,
      "move": "tail-whip"
    },
    {
      "level": 1,
      "move": "disable"
    },
    {
      "level": 1,
      "move": "water-sport"
    },
    {
      "level": 16,
      "move": "confusion"
    },
    {
      "level": 23,
      "move": "screech"
    },
    {
      "level": 31,
      "move": "psych-up"
    },
    {
      "level": 44,
      "move": "fury-swipes"
    },
    {
      "level": 58,
      "move": "hydro-pump"
    }
  ],
  "mankey": [
    {
      "level": 1,
      "move": "scratch"
    },
    {
      "level": 1,
      "move": "leer"
    },
    {
      "level": 6,
      "move": "low-kick"
    },
    {
      "level": 11,
      "move": "karate-chop"
    },
    {
      "level": 16,
      "move": "fury-swipes"
    },
    {
      "level": 21,
      "move": "focus-energy"
    },
    {
      "level": 26,
      "move": "seismic-toss"
    },
    {
      "level": 31,
      "move": "cross-chop"
    },
    {
      "level": 36,
      "move": "swagger"
    },
    {
      "level": 41,
      "move": "screech"
    },
    {
      "level": 46,
      "move": "thrash"
    }
  ],
  "primeape": [
    {
      "level": 1,
      "move": "scratch"
    },
    {
      "level": 1,
      "move": "leer"
    },
    {
      "level": 1,
      "move": "low-kick"
    },
    {
      "level": 1,
      "move": "rage"
    },
    {
      "level": 11,
      "move": "karate-chop"
    },
    {
      "level": 16,
      "move": "fury-swipes"
    },
    {
      "level": 21,
      "move": "focus-energy"
    },
    {
      "level": 26,
      "move": "seismic-toss"
    },
    {
      "level": 35,
      "move": "cross-chop"
    },
    {
      "level": 44,
      "move": "swagger"
    },
    {
      "level": 53,
      "move": "screech"
    },
    {
      "level": 62,
      "move": "thrash"
    }
  ],
  "growlithe": [
    {
      "level": 1,
      "move": "bite"
    },
    {
      "level": 1,
      "move": "roar"
    },
    {
      "level": 7,
      "move": "ember"
    },
    {
      "level": 13,
      "move": "leer"
    },
    {
      "level": 19,
      "move": "odor-sleuth"
    },
    {
      "level": 25,
      "move": "take-down"
    },
    {
      "level": 31,
      "move": "flame-wheel"
    },
    {
      "level": 37,
      "move": "helping-hand"
    },
    {
      "level": 43,
      "move": "agility"
    },
    {
      "level": 49,
      "move": "flamethrower"
    }
  ],
  "arcanine": [
    {
      "level": 1,
      "move": "bite"
    },
    {
      "level": 1,
      "move": "roar"
    },
    {
      "level": 1,
      "move": "ember"
    },
    {
      "level": 1,
      "move": "odor-sleuth"
    },
    {
      "level": 49,
      "move": "extreme-speed"
    }
  ],
  "poliwag": [
    {
      "level": 1,
      "move": "bubble"
    },
    {
      "level": 7,
      "move": "hypnosis"
    },
    {
      "level": 13,
      "move": "water-gun"
    },
    {
      "level": 19,
      "move": "double-slap"
    },
    {
      "level": 25,
      "move": "rain-dance"
    },
    {
      "level": 31,
      "move": "body-slam"
    },
    {
      "level": 37,
      "move": "belly-drum"
    },
    {
      "level": 43,
      "move": "hydro-pump"
    }
  ],
  "poliwhirl": [
    {
      "level": 1,
      "move": "water-gun"
    },
    {
      "level": 1,
      "move": "hypnosis"
    },
    {
      "level": 1,
      "move": "bubble"
    },
    {
      "level": 19,
      "move": "double-slap"
    },
    {
      "level": 27,
      "move": "rain-dance"
    },
    {
      "level": 35,
      "move": "body-slam"
    },
    {
      "level": 43,
      "move": "belly-drum"
    },
    {
      "level": 51,
      "move": "hydro-pump"
    }
  ],
  "poliwrath": [
    {
      "level": 1,
      "move": "double-slap"
    },
    {
      "level": 1,
      "move": "water-gun"
    },
    {
      "level": 1,
      "move": "submission"
    },
    {
      "level": 1,
      "move": "hypnosis"
    },
    {
      "level": 51,
      "move": "mind-reader"
    }
  ],
  "abra": [
    {
      "level": 1,
      "move": "teleport"
    }
  ],
  "kadabra": [
    {
      "level": 1,
      "move": "confusion"
    },
    {
      "level": 1,
      "move": "teleport"
    },
    {
      "level": 1,
      "move": "kinesis"
    },
    {
      "level": 18,
      "move": "disable"
    },
    {
      "level": 21,
      "move": "psybeam"
    },
    {
      "level": 23,
      "move": "reflect"
    },
    {
      "level": 25,
      "move": "recover"
    },
    {
      "level": 30,
      "move": "future-sight"
    },
    {
      "level": 33,
      "move": "role-play"
    },
    {
      "level": 36,
      "move": "psychic"
    },
    {
      "level": 43,
      "move": "trick"
    }
  ],
  "alakazam": [
    {
      "level": 1,
      "move": "confusion"
    },
    {
      "level": 1,
      "move": "teleport"
    },
    {
      "level": 1,
      "move": "kinesis"
    },
    {
      "level": 18,
      "move": "disable"
    },
    {
      "level": 21,
      "move": "psybeam"
    },
    {
      "level": 23,
      "move": "reflect"
    },
    {
      "level": 25,
      "move": "recover"
    },
    {
      "level": 30,
      "move": "future-sight"
    },
    {
      "level": 33,
      "move": "calm-mind"
    },
    {
      "level": 36,
      "move": "psychic"
    },
    {
      "level": 43,
      "move": "trick"
    }
  ],
  "machop": [
    {
      "level": 1,
      "move": "leer"
    },
    {
      "level": 1,
      "move": "low-kick"
    },
    {
      "level": 7,
      "move": "focus-energy"
    },
    {
      "level": 13,
      "move": "karate-chop"
    },
    {
      "level": 19,
      "move": "seismic-toss"
    },
    {
      "level": 22,
      "move": "foresight"
    },
    {
      "level": 25,
      "move": "revenge"
    },
    {
      "level": 31,
      "move": "vital-throw"
    },
    {
      "level": 37,
      "move": "submission"
    },
    {
      "level": 40,
      "move": "cross-chop"
    },
    {
      "level": 43,
      "move": "scary-face"
    },
    {
      "level": 49,
      "move": "dynamic-punch"
    }
  ],
  "machoke": [
    {
      "level": 1,
      "move": "leer"
    },
    {
      "level": 1,
      "move": "low-kick"
    },
    {
      "level": 1,
      "move": "focus-energy"
    },
    {
      "level": 13,
      "move": "karate-chop"
    },
    {
      "level": 19,
      "move": "seismic-toss"
    },
    {
      "level": 22,
      "move": "foresight"
    },
    {
      "level": 25,
      "move": "revenge"
    },
    {
      "level": 33,
      "move": "vital-throw"
    },
    {
      "level": 41,
      "move": "submission"
    },
    {
      "level": 46,
      "move": "cross-chop"
    },
    {
      "level": 51,
      "move": "scary-face"
    },
    {
      "level": 59,
      "move": "dynamic-punch"
    }
  ],
  "machamp": [
    {
      "level": 1,
      "move": "leer"
    },
    {
      "level": 1,
      "move": "low-kick"
    },
    {
      "level": 1,
      "move": "focus-energy"
    },
    {
      "level": 13,
      "move": "karate-chop"
    },
    {
      "level": 19,
      "move": "seismic-toss"
    },
    {
      "level": 22,
      "move": "foresight"
    },
    {
      "level": 25,
      "move": "revenge"
    },
    {
      "level": 33,
      "move": "vital-throw"
    },
    {
      "level": 41,
      "move": "submission"
    },
    {
      "level": 46,
      "move": "cross-chop"
    },
    {
      "level": 51,
      "move": "scary-face"
    },
    {
      "level": 59,
      "move": "dynamic-punch"
    }
  ],
  "bellsprout": [
    {
      "level": 1,
      "move": "vine-whip"
    },
    {
      "level": 6,
      "move": "growth"
    },
    {
      "level": 11,
      "move": "wrap"
    },
    {
      "level": 15,
      "move": "sleep-powder"
    },
    {
      "level": 17,
      "move": "poison-powder"
    },
    {
      "level": 19,
      "move": "stun-spore"
    },
    {
      "level": 23,
      "move": "acid"
    },
    {
      "level": 30,
      "move": "sweet-scent"
    },
    {
      "level": 37,
      "move": "razor-leaf"
    },
    {
      "level": 45,
      "move": "slam"
    }
  ],
  "weepinbell": [
    {
      "level": 1,
      "move": "vine-whip"
    },
    {
      "level": 1,
      "move": "wrap"
    },
    {
      "level": 1,
      "move": "growth"
    },
    {
      "level": 15,
      "move": "sleep-powder"
    },
    {
      "level": 17,
      "move": "poison-powder"
    },
    {
      "level": 19,
      "move": "stun-spore"
    },
    {
      "level": 24,
      "move": "acid"
    },
    {
      "level": 33,
      "move": "sweet-scent"
    },
    {
      "level": 42,
      "move": "razor-leaf"
    },
    {
      "level": 54,
      "move": "slam"
    }
  ],
  "victreebel": [
    {
      "level": 1,
      "move": "vine-whip"
    },
    {
      "level": 1,
      "move": "razor-leaf"
    },
    {
      "level": 1,
      "move": "sleep-powder"
    },
    {
      "level": 1,
      "move": "sweet-scent"
    },
    {
      "level": 1,
      "move": "stockpile"
    },
    {
      "level": 1,
      "move": "spit-up"
    },
    {
      "level": 1,
      "move": "swallow"
    }
  ],
  "tentacool": [
    {
      "level": 1,
      "move": "poison-sting"
    },
    {
      "level": 6,
      "move": "supersonic"
    },
    {
      "level": 12,
      "move": "constrict"
    },
    {
      "level": 19,
      "move": "acid"
    },
    {
      "level": 25,
      "move": "bubble-beam"
    },
    {
      "level": 30,
      "move": "wrap"
    },
    {
      "level": 36,
      "move": "barrier"
    },
    {
      "level": 43,
      "move": "screech"
    },
    {
      "level": 49,
      "move": "hydro-pump"
    }
  ],
  "tentacruel": [
    {
      "level": 1,
      "move": "poison-sting"
    },
    {
      "level": 1,
      "move": "supersonic"
    },
    {
      "level": 1,
      "move": "constrict"
    },
    {
      "level": 19,
      "move": "acid"
    },
    {
      "level": 25,
      "move": "bubble-beam"
    },
    {
      "level": 30,
      "move": "wrap"
    },
    {
      "level": 38,
      "move": "barrier"
    },
    {
      "level": 47,
      "move": "screech"
    },
    {
      "level": 55,
      "move": "hydro-pump"
    }
  ],
  "geodude": [
    {
      "level": 1,
      "move": "tackle"
    },
    {
      "level": 1,
      "move": "defense-curl"
    },
    {
      "level": 6,
      "move": "mud-sport"
    },
    {
      "level": 11,
      "move": "rock-throw"
    },
    {
      "level": 16,
      "move": "magnitude"
    },
    {
      "level": 21,
      "move": "self-destruct"
    },
    {
      "level": 26,
      "move": "rollout"
    },
    {
      "level": 31,
      "move": "rock-blast"
    },
    {
      "level": 36,
      "move": "earthquake"
    },
    {
      "level": 41,
      "move": "explosion"
    },
    {
      "level": 46,
      "move": "double-edge"
    }
  ],
  "graveler": [
    {
      "level": 1,
      "move": "tackle"
    },
    {
      "level": 1,
      "move": "rock-throw"
    },
    {
      "level": 1,
      "move": "defense-curl"
    },
    {
      "level": 1,
      "move": "mud-sport"
    },
    {
      "level": 16,
      "move": "magnitude"
    },
    {
      "level": 21,
      "move": "self-destruct"
    },
    {
      "level": 29,
      "move": "rollout"
    },
    {
      "level": 37,
      "move": "rock-blast"
    },
    {
      "level": 45,
      "move": "earthquake"
    },
    {
      "level": 53,
      "move": "explosion"
    },
    {
      "level": 62,
      "move": "double-edge"
    }
  ],
  "golem": [
    {
      "level": 1,
      "move": "tackle"
    },
    {
      "level": 1,
      "move": "rock-throw"
    },
    {
      "level": 1,
      "move": "defense-curl"
    },
    {
      "level": 1,
      "move": "mud-sport"
    },
    {
      "level": 16,
      "move": "magnitude"
    },
    {
      "level": 21,
      "move": "self-destruct"
    },
    {
      "level": 29,
      "move": "rollout"
    },
    {
      "level": 37,
      "move": "rock-blast"
    },
    {
      "level": 45,
      "move": "earthquake"
    },
    {
      "level": 53,
      "move": "explosion"
    },
    {
      "level": 62,
      "move": "double-edge"
    }
  ],
  "ponyta": [
    {
      "level": 1,
      "move": "quick-attack"
    },
    {
      "level": 5,
      "move": "growl"
    },
    {
      "level": 9,
      "move": "tail-whip"
    },
    {
      "level": 14,
      "move": "ember"
    },
    {
      "level": 19,
      "move": "stomp"
    },
    {
      "level": 25,
      "move": "fire-spin"
    },
    {
      "level": 31,
      "move": "take-down"
    },
    {
      "level": 38,
      "move": "agility"
    },
    {
      "level": 45,
      "move": "bounce"
    },
    {
      "level": 53,
      "move": "fire-blast"
    }
  ],
  "rapidash": [
    {
      "level": 1,
      "move": "tail-whip"
    },
    {
      "level": 1,
      "move": "growl"
    },
    {
      "level": 1,
      "move": "ember"
    },
    {
      "level": 1,
      "move": "quick-attack"
    },
    {
      "level": 19,
      "move": "stomp"
    },
    {
      "level": 25,
      "move": "fire-spin"
    },
    {
      "level": 31,
      "move": "take-down"
    },
    {
      "level": 38,
      "move": "agility"
    },
    {
      "level": 40,
      "move": "fury-attack"
    },
    {
      "level": 50,
      "move": "bounce"
    },
    {
      "level": 63,
      "move": "fire-blast"
    }
  ],
  "slowpoke": [
    {
      "level": 1,
      "move": "tackle"
    },
    {
      "level": 1,
      "move": "curse"
    },
    {
      "level": 1,
      "move": "yawn"
    },
    {
      "level": 6,
      "move": "growl"
    },
    {
      "level": 13,
      "move": "water-gun"
    },
    {
      "level": 17,
      "move": "confusion"
    },
    {
      "level": 24,
      "move": "disable"
    },
    {
      "level": 29,
      "move": "headbutt"
    },
    {
      "level": 36,
      "move": "amnesia"
    },
    {
      "level": 40,
      "move": "psychic"
    },
    {
      "level": 47,
      "move": "psych-up"
    }
  ],
  "slowbro": [
    {
      "level": 1,
      "move": "tackle"
    },
    {
      "level": 1,
      "move": "growl"
    },
    {
      "level": 1,
      "move": "curse"
    },
    {
      "level": 1,
      "move": "yawn"
    },
    {
      "level": 13,
      "move": "water-gun"
    },
    {
      "level": 17,
      "move": "confusion"
    },
    {
      "level": 24,
      "move": "disable"
    },
    {
      "level": 29,
      "move": "headbutt"
    },
    {
      "level": 36,
      "move": "amnesia"
    },
    {
      "level": 37,
      "move": "withdraw"
    },
    {
      "level": 44,
      "move": "psychic"
    },
    {
      "level": 55,
      "move": "psych-up"
    }
  ],
  "magnemite": [
    {
      "level": 1,
      "move": "tackle"
    },
    {
      "level": 1,
      "move": "metal-sound"
    },
    {
      "level": 6,
      "move": "thunder-shock"
    },
    {
      "level": 11,
      "move": "supersonic"
    },
    {
      "level": 16,
      "move": "sonic-boom"
    },
    {
      "level": 21,
      "move": "thunder-wave"
    },
    {
      "level": 26,
      "move": "spark"
    },
    {
      "level": 32,
      "move": "lock-on"
    },
    {
      "level": 38,
      "move": "swift"
    },
    {
      "level": 44,
      "move": "screech"
    },
    {
      "level": 50,
      "move": "zap-cannon"
    }
  ],
  "magneton": [
    {
      "level": 1,
      "move": "tackle"
    },
    {
      "level": 1,
      "move": "supersonic"
    },
    {
      "level": 1,
      "move": "thunder-shock"
    },
    {
      "level": 1,
      "move": "metal-sound"
    },
    {
      "level": 16,
      "move": "sonic-boom"
    },
    {
      "level": 21,
      "move": "thunder-wave"
    },
    {
      "level": 26,
      "move": "spark"
    },
    {
      "level": 35,
      "move": "lock-on"
    },
    {
      "level": 44,
      "move": "tri-attack"
    },
    {
      "level": 53,
      "move": "screech"
    },
    {
      "level": 62,
      "move": "zap-cannon"
    }
  ],
  "farfetchd": [
    {
      "level": 1,
      "move": "peck"
    },
    {
      "level": 6,
      "move": "sand-attack"
    },
    {
      "level": 11,
      "move": "leer"
    },
    {
      "level": 16,
      "move": "fury-attack"
    },
    {
      "level": 21,
      "move": "knock-off"
    },
    {
      "level": 26,
      "move": "fury-cutter"
    },
    {
      "level": 31,
      "move": "swords-dance"
    },
    {
      "level": 36,
      "move": "agility"
    },
    {
      "level": 41,
      "move": "slash"
    },
    {
      "level": 46,
      "move": "false-swipe"
    }
  ],
  "doduo": [
    {
      "level": 1,
      "move": "growl"
    },
    {
      "level": 1,
      "move": "peck"
    },
    {
      "level": 9,
      "move": "pursuit"
    },
    {
      "level": 13,
      "move": "fury-attack"
    },
    {
      "level": 21,
      "move": "tri-attack"
    },
    {
      "level": 25,
      "move": "rage"
    },
    {
      "level": 33,
      "move": "uproar"
    },
    {
      "level": 37,
      "move": "drill-peck"
    },
    {
      "level": 45,
      "move": "agility"
    }
  ],
  "dodrio": [
    {
      "level": 1,
      "move": "fury-attack"
    },
    {
      "level": 1,
      "move": "growl"
    },
    {
      "level": 1,
      "move": "peck"
    },
    {
      "level": 1,
      "move": "pursuit"
    },
    {
      "level": 21,
      "move": "tri-attack"
    },
    {
      "level": 25,
      "move": "rage"
    },
    {
      "level": 38,
      "move": "uproar"
    },
    {
      "level": 47,
      "move": "drill-peck"
    },
    {
      "level": 60,
      "move": "agility"
    }
  ],
  "seel": [
    {
      "level": 1,
      "move": "headbutt"
    },
    {
      "level": 9,
      "move": "growl"
    },
    {
      "level": 17,
      "move": "icy-wind"
    },
    {
      "level": 21,
      "move": "aurora-beam"
    },
    {
      "level": 29,
      "move": "rest"
    },
    {
      "level": 37,
      "move": "take-down"
    },
    {
      "level": 41,
      "move": "ice-beam"
    },
    {
      "level": 49,
      "move": "safeguard"
    }
  ],
  "dewgong": [
    {
      "level": 1,
      "move": "headbutt"
    },
    {
      "level": 1,
      "move": "growl"
    },
    {
      "level": 1,
      "move": "aurora-beam"
    },
    {
      "level": 1,
      "move": "icy-wind"
    },
    {
      "level": 1,
      "move": "signal-beam"
    },
    {
      "level": 29,
      "move": "rest"
    },
    {
      "level": 34,
      "move": "sheer-cold"
    },
    {
      "level": 42,
      "move": "take-down"
    },
    {
      "level": 51,
      "move": "ice-beam"
    },
    {
      "level": 64,
      "move": "safeguard"
    }
  ],
  "grimer": [
    {
      "level": 1,
      "move": "pound"
    },
    {
      "level": 1,
      "move": "poison-gas"
    },
    {
      "level": 4,
      "move": "harden"
    },
    {
      "level": 8,
      "move": "disable"
    },
    {
      "level": 13,
      "move": "sludge"
    },
    {
      "level": 19,
      "move": "minimize"
    },
    {
      "level": 26,
      "move": "screech"
    },
    {
      "level": 34,
      "move": "acid-armor"
    },
    {
      "level": 43,
      "move": "sludge-bomb"
    },
    {
      "level": 53,
      "move": "memento"
    }
  ],
  "muk": [
    {
      "level": 1,
      "move": "pound"
    },
    {
      "level": 1,
      "move": "harden"
    },
    {
      "level": 1,
      "move": "poison-gas"
    },
    {
      "level": 8,
      "move": "disable"
    },
    {
      "level": 13,
      "move": "sludge"
    },
    {
      "level": 19,
      "move": "minimize"
    },
    {
      "level": 26,
      "move": "screech"
    },
    {
      "level": 34,
      "move": "acid-armor"
    },
    {
      "level": 47,
      "move": "sludge-bomb"
    },
    {
      "level": 61,
      "move": "memento"
    }
  ],
  "shellder": [
    {
      "level": 1,
      "move": "tackle"
    },
    {
      "level": 1,
      "move": "withdraw"
    },
    {
      "level": 8,
      "move": "icicle-spear"
    },
    {
      "level": 15,
      "move": "supersonic"
    },
    {
      "level": 22,
      "move": "aurora-beam"
    },
    {
      "level": 29,
      "move": "protect"
    },
    {
      "level": 36,
      "move": "leer"
    },
    {
      "level": 43,
      "move": "clamp"
    },
    {
      "level": 50,
      "move": "ice-beam"
    }
  ],
  "cloyster": [
    {
      "level": 1,
      "move": "supersonic"
    },
    {
      "level": 1,
      "move": "aurora-beam"
    },
    {
      "level": 1,
      "move": "withdraw"
    },
    {
      "level": 1,
      "move": "protect"
    },
    {
      "level": 36,
      "move": "spikes"
    },
    {
      "level": 43,
      "move": "spike-cannon"
    }
  ],
  "gastly": [
    {
      "level": 1,
      "move": "hypnosis"
    },
    {
      "level": 1,
      "move": "lick"
    },
    {
      "level": 8,
      "move": "spite"
    },
    {
      "level": 13,
      "move": "curse"
    },
    {
      "level": 16,
      "move": "night-shade"
    },
    {
      "level": 21,
      "move": "confuse-ray"
    },
    {
      "level": 28,
      "move": "dream-eater"
    },
    {
      "level": 33,
      "move": "destiny-bond"
    },
    {
      "level": 36,
      "move": "shadow-ball"
    },
    {
      "level": 41,
      "move": "nightmare"
    },
    {
      "level": 48,
      "move": "mean-look"
    }
  ],
  "haunter": [
    {
      "level": 1,
      "move": "hypnosis"
    },
    {
      "level": 1,
      "move": "lick"
    },
    {
      "level": 1,
      "move": "spite"
    },
    {
      "level": 13,
      "move": "curse"
    },
    {
      "level": 16,
      "move": "night-shade"
    },
    {
      "level": 21,
      "move": "confuse-ray"
    },
    {
      "level": 25,
      "move": "shadow-punch"
    },
    {
      "level": 31,
      "move": "dream-eater"
    },
    {
      "level": 39,
      "move": "destiny-bond"
    },
    {
      "level": 45,
      "move": "shadow-ball"
    },
    {
      "level": 53,
      "move": "nightmare"
    },
    {
      "level": 64,
      "move": "mean-look"
    }
  ],
  "gengar": [
    {
      "level": 1,
      "move": "hypnosis"
    },
    {
      "level": 1,
      "move": "lick"
    },
    {
      "level": 1,
      "move": "spite"
    },
    {
      "level": 13,
      "move": "curse"
    },
    {
      "level": 16,
      "move": "night-shade"
    },
    {
      "level": 21,
      "move": "confuse-ray"
    },
    {
      "level": 25,
      "move": "shadow-punch"
    },
    {
      "level": 31,
      "move": "dream-eater"
    },
    {
      "level": 39,
      "move": "destiny-bond"
    },
    {
      "level": 45,
      "move": "shadow-ball"
    },
    {
      "level": 53,
      "move": "nightmare"
    },
    {
      "level": 64,
      "move": "mean-look"
    }
  ],
  "onix": [
    {
      "level": 1,
      "move": "tackle"
    },
    {
      "level": 1,
      "move": "screech"
    },
    {
      "level": 8,
      "move": "bind"
    },
    {
      "level": 12,
      "move": "rock-throw"
    },
    {
      "level": 19,
      "move": "harden"
    },
    {
      "level": 23,
      "move": "rage"
    },
    {
      "level": 30,
      "move": "dragon-breath"
    },
    {
      "level": 34,
      "move": "sandstorm"
    },
    {
      "level": 41,
      "move": "slam"
    },
    {
      "level": 45,
      "move": "iron-tail"
    },
    {
      "level": 52,
      "move": "sand-tomb"
    },
    {
      "level": 56,
      "move": "double-edge"
    }
  ],
  "drowzee": [
    {
      "level": 1,
      "move": "pound"
    },
    {
      "level": 1,
      "move": "hypnosis"
    },
    {
      "level": 7,
      "move": "disable"
    },
    {
      "level": 11,
      "move": "confusion"
    },
    {
      "level": 17,
      "move": "headbutt"
    },
    {
      "level": 21,
      "move": "poison-gas"
    },
    {
      "level": 27,
      "move": "meditate"
    },
    {
      "level": 31,
      "move": "psychic"
    },
    {
      "level": 37,
      "move": "psych-up"
    },
    {
      "level": 41,
      "move": "swagger"
    },
    {
      "level": 47,
      "move": "future-sight"
    }
  ],
  "hypno": [
    {
      "level": 1,
      "move": "pound"
    },
    {
      "level": 1,
      "move": "disable"
    },
    {
      "level": 1,
      "move": "confusion"
    },
    {
      "level": 1,
      "move": "hypnosis"
    },
    {
      "level": 1,
      "move": "nightmare"
    },
    {
      "level": 17,
      "move": "headbutt"
    },
    {
      "level": 21,
      "move": "poison-gas"
    },
    {
      "level": 29,
      "move": "meditate"
    },
    {
      "level": 35,
      "move": "psychic"
    },
    {
      "level": 43,
      "move": "psych-up"
    },
    {
      "level": 49,
      "move": "swagger"
    },
    {
      "level": 57,
      "move": "future-sight"
    }
  ],
  "krabby": [
    {
      "level": 1,
      "move": "bubble"
    },
    {
      "level": 5,
      "move": "leer"
    },
    {
      "level": 12,
      "move": "vice-grip"
    },
    {
      "level": 16,
      "move": "harden"
    },
    {
      "level": 23,
      "move": "mud-shot"
    },
    {
      "level": 27,
      "move": "stomp"
    },
    {
      "level": 34,
      "move": "guillotine"
    },
    {
      "level": 38,
      "move": "protect"
    },
    {
      "level": 45,
      "move": "crabhammer"
    },
    {
      "level": 49,
      "move": "flail"
    }
  ],
  "kingler": [
    {
      "level": 1,
      "move": "vice-grip"
    },
    {
      "level": 1,
      "move": "leer"
    },
    {
      "level": 1,
      "move": "harden"
    },
    {
      "level": 1,
      "move": "bubble"
    },
    {
      "level": 1,
      "move": "metal-claw"
    },
    {
      "level": 23,
      "move": "mud-shot"
    },
    {
      "level": 27,
      "move": "stomp"
    },
    {
      "level": 38,
      "move": "guillotine"
    },
    {
      "level": 42,
      "move": "protect"
    },
    {
      "level": 57,
      "move": "crabhammer"
    },
    {
      "level": 65,
      "move": "flail"
    }
  ],
  "voltorb": [
    {
      "level": 1,
      "move": "tackle"
    },
    {
      "level": 1,
      "move": "charge"
    },
    {
      "level": 8,
      "move": "screech"
    },
    {
      "level": 15,
      "move": "sonic-boom"
    },
    {
      "level": 21,
      "move": "spark"
    },
    {
      "level": 27,
      "move": "self-destruct"
    },
    {
      "level": 32,
      "move": "rollout"
    },
    {
      "level": 37,
      "move": "light-screen"
    },
    {
      "level": 42,
      "move": "swift"
    },
    {
      "level": 46,
      "move": "explosion"
    },
    {
      "level": 49,
      "move": "mirror-coat"
    }
  ],
  "electrode": [
    {
      "level": 1,
      "move": "tackle"
    },
    {
      "level": 1,
      "move": "sonic-boom"
    },
    {
      "level": 1,
      "move": "screech"
    },
    {
      "level": 1,
      "move": "charge"
    },
    {
      "level": 21,
      "move": "spark"
    },
    {
      "level": 27,
      "move": "self-destruct"
    },
    {
      "level": 34,
      "move": "rollout"
    },
    {
      "level": 41,
      "move": "light-screen"
    },
    {
      "level": 48,
      "move": "swift"
    },
    {
      "level": 54,
      "move": "explosion"
    },
    {
      "level": 59,
      "move": "mirror-coat"
    }
  ],
  "exeggcute": [
    {
      "level": 1,
      "move": "hypnosis"
    },
    {
      "level": 1,
      "move": "barrage"
    },
    {
      "level": 1,
      "move": "uproar"
    },
    {
      "level": 7,
      "move": "reflect"
    },
    {
      "level": 13,
      "move": "leech-seed"
    },
    {
      "level": 19,
      "move": "confusion"
    },
    {
      "level": 25,
      "move": "stun-spore"
    },
    {
      "level": 31,
      "move": "poison-powder"
    },
    {
      "level": 37,
      "move": "sleep-powder"
    },
    {
      "level": 43,
      "move": "solar-beam"
    }
  ],
  "exeggutor": [
    {
      "level": 1,
      "move": "confusion"
    },
    {
      "level": 1,
      "move": "hypnosis"
    },
    {
      "level": 1,
      "move": "barrage"
    },
    {
      "level": 19,
      "move": "stomp"
    },
    {
      "level": 31,
      "move": "egg-bomb"
    }
  ],
  "cubone": [
    {
      "level": 1,
      "move": "growl"
    },
    {
      "level": 5,
      "move": "tail-whip"
    },
    {
      "level": 9,
      "move": "bone-club"
    },
    {
      "level": 13,
      "move": "headbutt"
    },
    {
      "level": 17,
      "move": "leer"
    },
    {
      "level": 21,
      "move": "focus-energy"
    },
    {
      "level": 25,
      "move": "bonemerang"
    },
    {
      "level": 29,
      "move": "rage"
    },
    {
      "level": 33,
      "move": "false-swipe"
    },
    {
      "level": 37,
      "move": "thrash"
    },
    {
      "level": 41,
      "move": "bone-rush"
    },
    {
      "level": 45,
      "move": "double-edge"
    }
  ],
  "marowak": [
    {
      "level": 1,
      "move": "headbutt"
    },
    {
      "level": 1,
      "move": "tail-whip"
    },
    {
      "level": 1,
      "move": "growl"
    },
    {
      "level": 1,
      "move": "bone-club"
    },
    {
      "level": 17,
      "move": "leer"
    },
    {
      "level": 21,
      "move": "focus-energy"
    },
    {
      "level": 25,
      "move": "bonemerang"
    },
    {
      "level": 32,
      "move": "rage"
    },
    {
      "level": 39,
      "move": "false-swipe"
    },
    {
      "level": 46,
      "move": "thrash"
    },
    {
      "level": 53,
      "move": "bone-rush"
    },
    {
      "level": 61,
      "move": "double-edge"
    }
  ],
  "hitmonlee": [
    {
      "level": 1,
      "move": "double-kick"
    },
    {
      "level": 1,
      "move": "revenge"
    },
    {
      "level": 6,
      "move": "meditate"
    },
    {
      "level": 11,
      "move": "rolling-kick"
    },
    {
      "level": 16,
      "move": "jump-kick"
    },
    {
      "level": 20,
      "move": "brick-break"
    },
    {
      "level": 21,
      "move": "focus-energy"
    },
    {
      "level": 26,
      "move": "high-jump-kick"
    },
    {
      "level": 31,
      "move": "mind-reader"
    },
    {
      "level": 36,
      "move": "foresight"
    },
    {
      "level": 41,
      "move": "endure"
    },
    {
      "level": 46,
      "move": "mega-kick"
    },
    {
      "level": 51,
      "move": "reversal"
    }
  ],
  "hitmonchan": [
    {
      "level": 1,
      "move": "comet-punch"
    },
    {
      "level": 1,
      "move": "revenge"
    },
    {
      "level": 7,
      "move": "agility"
    },
    {
      "level": 13,
      "move": "pursuit"
    },
    {
      "level": 20,
      "move": "mach-punch"
    },
    {
      "level": 26,
      "move": "fire-punch"
    },
    {
      "level": 26,
      "move": "ice-punch"
    },
    {
      "level": 26,
      "move": "thunder-punch"
    },
    {
      "level": 32,
      "move": "sky-uppercut"
    },
    {
      "level": 38,
      "move": "mega-punch"
    },
    {
      "level": 44,
      "move": "detect"
    },
    {
      "level": 50,
      "move": "counter"
    }
  ],
  "lickitung": [
    {
      "level": 1,
      "move": "lick"
    },
    {
      "level": 7,
      "move": "supersonic"
    },
    {
      "level": 12,
      "move": "defense-curl"
    },
    {
      "level": 18,
      "move": "knock-off"
    },
    {
      "level": 23,
      "move": "stomp"
    },
    {
      "level": 29,
      "move": "wrap"
    },
    {
      "level": 34,
      "move": "disable"
    },
    {
      "level": 40,
      "move": "slam"
    },
    {
      "level": 45,
      "move": "screech"
    },
    {
      "level": 51,
      "move": "refresh"
    }
  ],
  "koffing": [
    {
      "level": 1,
      "move": "tackle"
    },
    {
      "level": 1,
      "move": "poison-gas"
    },
    {
      "level": 9,
      "move": "smog"
    },
    {
      "level": 17,
      "move": "self-destruct"
    },
    {
      "level": 21,
      "move": "sludge"
    },
    {
      "level": 25,
      "move": "smokescreen"
    },
    {
      "level": 33,
      "move": "haze"
    },
    {
      "level": 41,
      "move": "explosion"
    },
    {
      "level": 45,
      "move": "destiny-bond"
    },
    {
      "level": 49,
      "move": "memento"
    }
  ],
  "weezing": [
    {
      "level": 1,
      "move": "tackle"
    },
    {
      "level": 1,
      "move": "self-destruct"
    },
    {
      "level": 1,
      "move": "smog"
    },
    {
      "level": 1,
      "move": "poison-gas"
    },
    {
      "level": 21,
      "move": "sludge"
    },
    {
      "level": 25,
      "move": "smokescreen"
    },
    {
      "level": 33,
      "move": "haze"
    },
    {
      "level": 44,
      "move": "explosion"
    },
    {
      "level": 51,
      "move": "destiny-bond"
    },
    {
      "level": 58,
      "move": "memento"
    }
  ],
  "rhyhorn": [
    {
      "level": 1,
      "move": "horn-attack"
    },
    {
      "level": 1,
      "move": "tail-whip"
    },
    {
      "level": 10,
      "move": "stomp"
    },
    {
      "level": 15,
      "move": "fury-attack"
    },
    {
      "level": 24,
      "move": "scary-face"
    },
    {
      "level": 29,
      "move": "rock-blast"
    },
    {
      "level": 38,
      "move": "horn-drill"
    },
    {
      "level": 43,
      "move": "take-down"
    },
    {
      "level": 52,
      "move": "earthquake"
    },
    {
      "level": 57,
      "move": "megahorn"
    }
  ],
  "rhydon": [
    {
      "level": 1,
      "move": "stomp"
    },
    {
      "level": 1,
      "move": "horn-attack"
    },
    {
      "level": 1,
      "move": "fury-attack"
    },
    {
      "level": 1,
      "move": "tail-whip"
    },
    {
      "level": 24,
      "move": "scary-face"
    },
    {
      "level": 29,
      "move": "rock-blast"
    },
    {
      "level": 38,
      "move": "horn-drill"
    },
    {
      "level": 46,
      "move": "take-down"
    },
    {
      "level": 58,
      "move": "earthquake"
    },
    {
      "level": 66,
      "move": "megahorn"
    }
  ],
  "chansey": [
    {
      "level": 1,
      "move": "pound"
    },
    {
      "level": 1,
      "move": "growl"
    },
    {
      "level": 5,
      "move": "tail-whip"
    },
    {
      "level": 9,
      "move": "refresh"
    },
    {
      "level": 13,
      "move": "soft-boiled"
    },
    {
      "level": 17,
      "move": "double-slap"
    },
    {
      "level": 23,
      "move": "minimize"
    },
    {
      "level": 29,
      "move": "sing"
    },
    {
      "level": 35,
      "move": "egg-bomb"
    },
    {
      "level": 41,
      "move": "defense-curl"
    },
    {
      "level": 49,
      "move": "light-screen"
    },
    {
      "level": 57,
      "move": "double-edge"
    }
  ],
  "tangela": [
    {
      "level": 1,
      "move": "constrict"
    },
    {
      "level": 1,
      "move": "ingrain"
    },
    {
      "level": 4,
      "move": "sleep-powder"
    },
    {
      "level": 10,
      "move": "absorb"
    },
    {
      "level": 13,
      "move": "growth"
    },
    {
      "level": 19,
      "move": "poison-powder"
    },
    {
      "level": 22,
      "move": "vine-whip"
    },
    {
      "level": 28,
      "move": "bind"
    },
    {
      "level": 31,
      "move": "mega-drain"
    },
    {
      "level": 37,
      "move": "stun-spore"
    },
    {
      "level": 40,
      "move": "slam"
    },
    {
      "level": 46,
      "move": "tickle"
    }
  ],
  "kangaskhan": [
    {
      "level": 1,
      "move": "comet-punch"
    },
    {
      "level": 1,
      "move": "leer"
    },
    {
      "level": 7,
      "move": "bite"
    },
    {
      "level": 13,
      "move": "tail-whip"
    },
    {
      "level": 19,
      "move": "fake-out"
    },
    {
      "level": 25,
      "move": "mega-punch"
    },
    {
      "level": 31,
      "move": "rage"
    },
    {
      "level": 37,
      "move": "endure"
    },
    {
      "level": 43,
      "move": "dizzy-punch"
    },
    {
      "level": 49,
      "move": "reversal"
    }
  ],
  "horsea": [
    {
      "level": 1,
      "move": "bubble"
    },
    {
      "level": 8,
      "move": "smokescreen"
    },
    {
      "level": 15,
      "move": "leer"
    },
    {
      "level": 22,
      "move": "water-gun"
    },
    {
      "level": 29,
      "move": "twister"
    },
    {
      "level": 36,
      "move": "agility"
    },
    {
      "level": 43,
      "move": "hydro-pump"
    },
    {
      "level": 50,
      "move": "dragon-dance"
    }
  ],
  "seadra": [
    {
      "level": 1,
      "move": "leer"
    },
    {
      "level": 1,
      "move": "water-gun"
    },
    {
      "level": 1,
      "move": "smokescreen"
    },
    {
      "level": 1,
      "move": "bubble"
    },
    {
      "level": 29,
      "move": "twister"
    },
    {
      "level": 40,
      "move": "agility"
    },
    {
      "level": 51,
      "move": "hydro-pump"
    },
    {
      "level": 62,
      "move": "dragon-dance"
    }
  ],
  "goldeen": [
    {
      "level": 1,
      "move": "tail-whip"
    },
    {
      "level": 1,
      "move": "peck"
    },
    {
      "level": 1,
      "move": "water-sport"
    },
    {
      "level": 10,
      "move": "supersonic"
    },
    {
      "level": 15,
      "move": "horn-attack"
    },
    {
      "level": 24,
      "move": "flail"
    },
    {
      "level": 29,
      "move": "fury-attack"
    },
    {
      "level": 38,
      "move": "waterfall"
    },
    {
      "level": 43,
      "move": "horn-drill"
    },
    {
      "level": 52,
      "move": "agility"
    },
    {
      "level": 57,
      "move": "megahorn"
    }
  ],
  "seaking": [
    {
      "level": 1,
      "move": "tail-whip"
    },
    {
      "level": 1,
      "move": "supersonic"
    },
    {
      "level": 1,
      "move": "peck"
    },
    {
      "level": 1,
      "move": "water-sport"
    },
    {
      "level": 15,
      "move": "horn-attack"
    },
    {
      "level": 24,
      "move": "flail"
    },
    {
      "level": 29,
      "move": "fury-attack"
    },
    {
      "level": 41,
      "move": "waterfall"
    },
    {
      "level": 49,
      "move": "horn-drill"
    },
    {
      "level": 61,
      "move": "agility"
    },
    {
      "level": 69,
      "move": "megahorn"
    }
  ],
  "staryu": [
    {
      "level": 1,
      "move": "tackle"
    },
    {
      "level": 1,
      "move": "harden"
    },
    {
      "level": 6,
      "move": "water-gun"
    },
    {
      "level": 10,
      "move": "rapid-spin"
    },
    {
      "level": 15,
      "move": "recover"
    },
    {
      "level": 19,
      "move": "camouflage"
    },
    {
      "level": 24,
      "move": "swift"
    },
    {
      "level": 28,
      "move": "bubble-beam"
    },
    {
      "level": 33,
      "move": "minimize"
    },
    {
      "level": 37,
      "move": "light-screen"
    },
    {
      "level": 42,
      "move": "cosmic-power"
    },
    {
      "level": 46,
      "move": "hydro-pump"
    }
  ],
  "starmie": [
    {
      "level": 1,
      "move": "water-gun"
    },
    {
      "level": 1,
      "move": "recover"
    },
    {
      "level": 1,
      "move": "swift"
    },
    {
      "level": 1,
      "move": "rapid-spin"
    },
    {
      "level": 33,
      "move": "confuse-ray"
    }
  ],
  "mr-mime": [
    {
      "level": 1,
      "move": "barrier"
    },
    {
      "level": 5,
      "move": "confusion"
    },
    {
      "level": 8,
      "move": "substitute"
    },
    {
      "level": 12,
      "move": "meditate"
    },
    {
      "level": 15,
      "move": "double-slap"
    },
    {
      "level": 19,
      "move": "light-screen"
    },
    {
      "level": 19,
      "move": "reflect"
    },
    {
      "level": 22,
      "move": "magical-leaf"
    },
    {
      "level": 26,
      "move": "encore"
    },
    {
      "level": 29,
      "move": "psybeam"
    },
    {
      "level": 33,
      "move": "recycle"
    },
    {
      "level": 36,
      "move": "trick"
    },
    {
      "level": 40,
      "move": "role-play"
    },
    {
      "level": 43,
      "move": "psychic"
    },
    {
      "level": 47,
      "move": "baton-pass"
    },
    {
      "level": 50,
      "move": "safeguard"
    }
  ],
  "scyther": [
    {
      "level": 1,
      "move": "leer"
    },
    {
      "level": 1,
      "move": "quick-attack"
    },
    {
      "level": 6,
      "move": "focus-energy"
    },
    {
      "level": 11,
      "move": "pursuit"
    },
    {
      "level": 16,
      "move": "false-swipe"
    },
    {
      "level": 21,
      "move": "agility"
    },
    {
      "level": 26,
      "move": "wing-attack"
    },
    {
      "level": 31,
      "move": "slash"
    },
    {
      "level": 36,
      "move": "swords-dance"
    },
    {
      "level": 41,
      "move": "double-team"
    },
    {
      "level": 46,
      "move": "fury-cutter"
    }
  ],
  "jynx": [
    {
      "level": 1,
      "move": "pound"
    },
    {
      "level": 1,
      "move": "lick"
    },
    {
      "level": 1,
      "move": "lovely-kiss"
    },
    {
      "level": 1,
      "move": "powder-snow"
    },
    {
      "level": 21,
      "move": "double-slap"
    },
    {
      "level": 25,
      "move": "ice-punch"
    },
    {
      "level": 35,
      "move": "mean-look"
    },
    {
      "level": 41,
      "move": "fake-tears"
    },
    {
      "level": 51,
      "move": "body-slam"
    },
    {
      "level": 57,
      "move": "perish-song"
    },
    {
      "level": 67,
      "move": "blizzard"
    }
  ],
  "electabuzz": [
    {
      "level": 1,
      "move": "thunder-punch"
    },
    {
      "level": 1,
      "move": "leer"
    },
    {
      "level": 1,
      "move": "quick-attack"
    },
    {
      "level": 17,
      "move": "light-screen"
    },
    {
      "level": 25,
      "move": "swift"
    },
    {
      "level": 36,
      "move": "screech"
    },
    {
      "level": 47,
      "move": "thunderbolt"
    },
    {
      "level": 58,
      "move": "thunder"
    }
  ],
  "magmar": [
    {
      "level": 1,
      "move": "fire-punch"
    },
    {
      "level": 1,
      "move": "leer"
    },
    {
      "level": 1,
      "move": "ember"
    },
    {
      "level": 1,
      "move": "smog"
    },
    {
      "level": 25,
      "move": "smokescreen"
    },
    {
      "level": 33,
      "move": "sunny-day"
    },
    {
      "level": 41,
      "move": "flamethrower"
    },
    {
      "level": 49,
      "move": "confuse-ray"
    },
    {
      "level": 57,
      "move": "fire-blast"
    }
  ],
  "pinsir": [
    {
      "level": 1,
      "move": "vice-grip"
    },
    {
      "level": 1,
      "move": "focus-energy"
    },
    {
      "level": 7,
      "move": "bind"
    },
    {
      "level": 13,
      "move": "seismic-toss"
    },
    {
      "level": 19,
      "move": "harden"
    },
    {
      "level": 25,
      "move": "revenge"
    },
    {
      "level": 31,
      "move": "brick-break"
    },
    {
      "level": 37,
      "move": "guillotine"
    },
    {
      "level": 43,
      "move": "submission"
    },
    {
      "level": 49,
      "move": "swords-dance"
    }
  ],
  "tauros": [
    {
      "level": 1,
      "move": "tackle"
    },
    {
      "level": 1,
      "move": "tail-whip"
    },
    {
      "level": 4,
      "move": "rage"
    },
    {
      "level": 8,
      "move": "horn-attack"
    },
    {
      "level": 13,
      "move": "scary-face"
    },
    {
      "level": 19,
      "move": "pursuit"
    },
    {
      "level": 26,
      "move": "swagger"
    },
    {
      "level": 34,
      "move": "rest"
    },
    {
      "level": 43,
      "move": "thrash"
    },
    {
      "level": 53,
      "move": "take-down"
    }
  ],
  "magikarp": [
    {
      "level": 1,
      "move": "splash"
    },
    {
      "level": 15,
      "move": "tackle"
    },
    {
      "level": 30,
      "move": "flail"
    }
  ],
  "gyarados": [
    {
      "level": 1,
      "move": "thrash"
    },
    {
      "level": 20,
      "move": "bite"
    },
    {
      "level": 25,
      "move": "dragon-rage"
    },
    {
      "level": 30,
      "move": "leer"
    },
    {
      "level": 35,
      "move": "twister"
    },
    {
      "level": 40,
      "move": "hydro-pump"
    },
    {
      "level": 45,
      "move": "rain-dance"
    },
    {
      "level": 50,
      "move": "dragon-dance"
    },
    {
      "level": 55,
      "move": "hyper-beam"
    }
  ],
  "lapras": [
    {
      "level": 1,
      "move": "growl"
    },
    {
      "level": 1,
      "move": "sing"
    },
    {
      "level": 1,
      "move": "water-gun"
    },
    {
      "level": 7,
      "move": "mist"
    },
    {
      "level": 13,
      "move": "body-slam"
    },
    {
      "level": 19,
      "move": "confuse-ray"
    },
    {
      "level": 25,
      "move": "perish-song"
    },
    {
      "level": 31,
      "move": "ice-beam"
    },
    {
      "level": 37,
      "move": "rain-dance"
    },
    {
      "level": 43,
      "move": "safeguard"
    },
    {
      "level": 49,
      "move": "hydro-pump"
    },
    {
      "level": 55,
      "move": "sheer-cold"
    }
  ],
  "ditto": [
    {
      "level": 1,
      "move": "transform"
    }
  ],
  "eevee": [
    {
      "level": 1,
      "move": "tackle"
    },
    {
      "level": 1,
      "move": "tail-whip"
    },
    {
      "level": 1,
      "move": "helping-hand"
    },
    {
      "level": 8,
      "move": "sand-attack"
    },
    {
      "level": 16,
      "move": "growl"
    },
    {
      "level": 23,
      "move": "quick-attack"
    },
    {
      "level": 30,
      "move": "bite"
    },
    {
      "level": 36,
      "move": "baton-pass"
    },
    {
      "level": 42,
      "move": "take-down"
    }
  ],
  "vaporeon": [
    {
      "level": 1,
      "move": "tackle"
    },
    {
      "level": 1,
      "move": "tail-whip"
    },
    {
      "level": 1,
      "move": "helping-hand"
    },
    {
      "level": 8,
      "move": "sand-attack"
    },
    {
      "level": 16,
      "move": "water-gun"
    },
    {
      "level": 23,
      "move": "quick-attack"
    },
    {
      "level": 30,
      "move": "bite"
    },
    {
      "level": 36,
      "move": "aurora-beam"
    },
    {
      "level": 42,
      "move": "haze"
    },
    {
      "level": 47,
      "move": "acid-armor"
    },
    {
      "level": 52,
      "move": "hydro-pump"
    }
  ],
  "jolteon": [
    {
      "level": 1,
      "move": "tackle"
    },
    {
      "level": 1,
      "move": "tail-whip"
    },
    {
      "level": 1,
      "move": "helping-hand"
    },
    {
      "level": 8,
      "move": "sand-attack"
    },
    {
      "level": 16,
      "move": "thunder-shock"
    },
    {
      "level": 23,
      "move": "quick-attack"
    },
    {
      "level": 30,
      "move": "double-kick"
    },
    {
      "level": 36,
      "move": "pin-missile"
    },
    {
      "level": 42,
      "move": "thunder-wave"
    },
    {
      "level": 47,
      "move": "agility"
    },
    {
      "level": 52,
      "move": "thunder"
    }
  ],
  "flareon": [
    {
      "level": 1,
      "move": "tackle"
    },
    {
      "level": 1,
      "move": "tail-whip"
    },
    {
      "level": 1,
      "move": "helping-hand"
    },
    {
      "level": 8,
      "move": "sand-attack"
    },
    {
      "level": 16,
      "move": "ember"
    },
    {
      "level": 23,
      "move": "quick-attack"
    },
    {
      "level": 30,
      "move": "bite"
    },
    {
      "level": 36,
      "move": "fire-spin"
    },
    {
      "level": 42,
      "move": "smog"
    },
    {
      "level": 47,
      "move": "leer"
    },
    {
      "level": 52,
      "move": "flamethrower"
    }
  ],
  "porygon": [
    {
      "level": 1,
      "move": "tackle"
    },
    {
      "level": 1,
      "move": "conversion"
    },
    {
      "level": 1,
      "move": "conversion-2"
    },
    {
      "level": 9,
      "move": "agility"
    },
    {
      "level": 12,
      "move": "psybeam"
    },
    {
      "level": 20,
      "move": "recover"
    },
    {
      "level": 24,
      "move": "sharpen"
    },
    {
      "level": 32,
      "move": "lock-on"
    },
    {
      "level": 36,
      "move": "tri-attack"
    },
    {
      "level": 44,
      "move": "recycle"
    },
    {
      "level": 48,
      "move": "zap-cannon"
    }
  ],
  "omanyte": [
    {
      "level": 1,
      "move": "withdraw"
    },
    {
      "level": 1,
      "move": "constrict"
    },
    {
      "level": 13,
      "move": "bite"
    },
    {
      "level": 19,
      "move": "water-gun"
    },
    {
      "level": 25,
      "move": "mud-shot"
    },
    {
      "level": 31,
      "move": "leer"
    },
    {
      "level": 37,
      "move": "protect"
    },
    {
      "level": 43,
      "move": "tickle"
    },
    {
      "level": 49,
      "move": "ancient-power"
    },
    {
      "level": 55,
      "move": "hydro-pump"
    }
  ],
  "omastar": [
    {
      "level": 1,
      "move": "bite"
    },
    {
      "level": 1,
      "move": "water-gun"
    },
    {
      "level": 1,
      "move": "withdraw"
    },
    {
      "level": 1,
      "move": "constrict"
    },
    {
      "level": 25,
      "move": "mud-shot"
    },
    {
      "level": 31,
      "move": "leer"
    },
    {
      "level": 37,
      "move": "protect"
    },
    {
      "level": 40,
      "move": "spike-cannon"
    },
    {
      "level": 46,
      "move": "tickle"
    },
    {
      "level": 55,
      "move": "ancient-power"
    },
    {
      "level": 65,
      "move": "hydro-pump"
    }
  ],
  "kabuto": [
    {
      "level": 1,
      "move": "scratch"
    },
    {
      "level": 1,
      "move": "harden"
    },
    {
      "level": 13,
      "move": "absorb"
    },
    {
      "level": 19,
      "move": "leer"
    },
    {
      "level": 25,
      "move": "mud-shot"
    },
    {
      "level": 31,
      "move": "sand-attack"
    },
    {
      "level": 37,
      "move": "endure"
    },
    {
      "level": 43,
      "move": "metal-sound"
    },
    {
      "level": 49,
      "move": "mega-drain"
    },
    {
      "level": 55,
      "move": "ancient-power"
    }
  ],
  "kabutops": [
    {
      "level": 1,
      "move": "scratch"
    },
    {
      "level": 1,
      "move": "leer"
    },
    {
      "level": 1,
      "move": "absorb"
    },
    {
      "level": 1,
      "move": "harden"
    },
    {
      "level": 1,
      "move": "fury-cutter"
    },
    {
      "level": 25,
      "move": "mud-shot"
    },
    {
      "level": 31,
      "move": "sand-attack"
    },
    {
      "level": 37,
      "move": "endure"
    },
    {
      "level": 40,
      "move": "slash"
    },
    {
      "level": 46,
      "move": "metal-sound"
    },
    {
      "level": 55,
      "move": "mega-drain"
    },
    {
      "level": 65,
      "move": "ancient-power"
    }
  ],
  "aerodactyl": [
    {
      "level": 1,
      "move": "wing-attack"
    },
    {
      "level": 8,
      "move": "agility"
    },
    {
      "level": 15,
      "move": "bite"
    },
    {
      "level": 22,
      "move": "supersonic"
    },
    {
      "level": 29,
      "move": "ancient-power"
    },
    {
      "level": 36,
      "move": "scary-face"
    },
    {
      "level": 43,
      "move": "take-down"
    },
    {
      "level": 50,
      "move": "hyper-beam"
    }
  ],
  "snorlax": [
    {
      "level": 1,
      "move": "tackle"
    },
    {
      "level": 5,
      "move": "amnesia"
    },
    {
      "level": 9,
      "move": "defense-curl"
    },
    {
      "level": 13,
      "move": "belly-drum"
    },
    {
      "level": 17,
      "move": "headbutt"
    },
    {
      "level": 21,
      "move": "yawn"
    },
    {
      "level": 25,
      "move": "rest"
    },
    {
      "level": 29,
      "move": "snore"
    },
    {
      "level": 33,
      "move": "body-slam"
    },
    {
      "level": 37,
      "move": "sleep-talk"
    },
    {
      "level": 41,
      "move": "block"
    },
    {
      "level": 45,
      "move": "covet"
    },
    {
      "level": 49,
      "move": "rollout"
    },
    {
      "level": 53,
      "move": "hyper-beam"
    }
  ],
  "articuno": [
    {
      "level": 1,
      "move": "gust"
    },
    {
      "level": 1,
      "move": "powder-snow"
    },
    {
      "level": 13,
      "move": "mist"
    },
    {
      "level": 25,
      "move": "agility"
    },
    {
      "level": 37,
      "move": "mind-reader"
    },
    {
      "level": 49,
      "move": "ice-beam"
    },
    {
      "level": 61,
      "move": "reflect"
    },
    {
      "level": 73,
      "move": "blizzard"
    },
    {
      "level": 85,
      "move": "sheer-cold"
    }
  ],
  "zapdos": [
    {
      "level": 1,
      "move": "peck"
    },
    {
      "level": 1,
      "move": "thunder-shock"
    },
    {
      "level": 13,
      "move": "thunder-wave"
    },
    {
      "level": 25,
      "move": "agility"
    },
    {
      "level": 37,
      "move": "detect"
    },
    {
      "level": 49,
      "move": "drill-peck"
    },
    {
      "level": 61,
      "move": "charge"
    },
    {
      "level": 73,
      "move": "light-screen"
    },
    {
      "level": 85,
      "move": "thunder"
    }
  ],
  "moltres": [
    {
      "level": 1,
      "move": "wing-attack"
    },
    {
      "level": 1,
      "move": "ember"
    },
    {
      "level": 13,
      "move": "fire-spin"
    },
    {
      "level": 25,
      "move": "agility"
    },
    {
      "level": 37,
      "move": "endure"
    },
    {
      "level": 49,
      "move": "flamethrower"
    },
    {
      "level": 61,
      "move": "safeguard"
    },
    {
      "level": 73,
      "move": "heat-wave"
    },
    {
      "level": 85,
      "move": "sky-attack"
    }
  ],
  "dratini": [
    {
      "level": 1,
      "move": "wrap"
    },
    {
      "level": 1,
      "move": "leer"
    },
    {
      "level": 8,
      "move": "thunder-wave"
    },
    {
      "level": 15,
      "move": "twister"
    },
    {
      "level": 22,
      "move": "dragon-rage"
    },
    {
      "level": 29,
      "move": "slam"
    },
    {
      "level": 36,
      "move": "agility"
    },
    {
      "level": 43,
      "move": "safeguard"
    },
    {
      "level": 50,
      "move": "outrage"
    },
    {
      "level": 57,
      "move": "hyper-beam"
    }
  ],
  "dragonair": [
    {
      "level": 1,
      "move": "wrap"
    },
    {
      "level": 1,
      "move": "leer"
    },
    {
      "level": 1,
      "move": "thunder-wave"
    },
    {
      "level": 1,
      "move": "twister"
    },
    {
      "level": 22,
      "move": "dragon-rage"
    },
    {
      "level": 29,
      "move": "slam"
    },
    {
      "level": 38,
      "move": "agility"
    },
    {
      "level": 47,
      "move": "safeguard"
    },
    {
      "level": 56,
      "move": "outrage"
    },
    {
      "level": 65,
      "move": "hyper-beam"
    }
  ],
  "dragonite": [
    {
      "level": 1,
      "move": "wrap"
    },
    {
      "level": 1,
      "move": "leer"
    },
    {
      "level": 1,
      "move": "thunder-wave"
    },
    {
      "level": 1,
      "move": "twister"
    },
    {
      "level": 22,
      "move": "dragon-rage"
    },
    {
      "level": 29,
      "move": "slam"
    },
    {
      "level": 38,
      "move": "agility"
    },
    {
      "level": 47,
      "move": "safeguard"
    },
    {
      "level": 55,
      "move": "wing-attack"
    },
    {
      "level": 61,
      "move": "outrage"
    },
    {
      "level": 75,
      "move": "hyper-beam"
    }
  ],
  "mewtwo": [
    {
      "level": 1,
      "move": "disable"
    },
    {
      "level": 1,
      "move": "confusion"
    },
    {
      "level": 11,
      "move": "barrier"
    },
    {
      "level": 22,
      "move": "mist"
    },
    {
      "level": 33,
      "move": "swift"
    },
    {
      "level": 44,
      "move": "recover"
    },
    {
      "level": 55,
      "move": "safeguard"
    },
    {
      "level": 66,
      "move": "psychic"
    },
    {
      "level": 77,
      "move": "psych-up"
    },
    {
      "level": 88,
      "move": "future-sight"
    },
    {
      "level": 99,
      "move": "amnesia"
    }
  ],
  "mew": [
    {
      "level": 1,
      "move": "pound"
    },
    {
      "level": 10,
      "move": "transform"
    },
    {
      "level": 20,
      "move": "mega-punch"
    },
    {
      "level": 30,
      "move": "metronome"
    },
    {
      "level": 40,
      "move": "psychic"
    },
    {
      "level": 50,
      "move": "ancient-power"
    }
  ]
};
const TYPE_CHART = {
  "normal": {
    "double_damage_to": [],
    "half_damage_to": [
      "rock",
      "steel"
    ],
    "no_damage_to": [
      "ghost"
    ]
  },
  "fighting": {
    "double_damage_to": [
      "normal",
      "rock",
      "steel",
      "ice",
      "dark"
    ],
    "half_damage_to": [
      "flying",
      "poison",
      "bug",
      "psychic",
      "fairy"
    ],
    "no_damage_to": [
      "ghost"
    ]
  },
  "flying": {
    "double_damage_to": [
      "fighting",
      "bug",
      "grass"
    ],
    "half_damage_to": [
      "rock",
      "steel",
      "electric"
    ],
    "no_damage_to": []
  },
  "poison": {
    "double_damage_to": [
      "grass",
      "fairy"
    ],
    "half_damage_to": [
      "poison",
      "ground",
      "rock",
      "ghost"
    ],
    "no_damage_to": [
      "steel"
    ]
  },
  "ground": {
    "double_damage_to": [
      "poison",
      "rock",
      "steel",
      "fire",
      "electric"
    ],
    "half_damage_to": [
      "bug",
      "grass"
    ],
    "no_damage_to": [
      "flying"
    ]
  },
  "rock": {
    "double_damage_to": [
      "flying",
      "bug",
      "fire",
      "ice"
    ],
    "half_damage_to": [
      "fighting",
      "ground",
      "steel"
    ],
    "no_damage_to": []
  },
  "bug": {
    "double_damage_to": [
      "grass",
      "psychic",
      "dark"
    ],
    "half_damage_to": [
      "fighting",
      "flying",
      "poison",
      "ghost",
      "steel",
      "fire",
      "fairy"
    ],
    "no_damage_to": []
  },
  "ghost": {
    "double_damage_to": [
      "ghost",
      "psychic"
    ],
    "half_damage_to": [
      "dark"
    ],
    "no_damage_to": [
      "normal"
    ]
  },
  "steel": {
    "double_damage_to": [
      "rock",
      "ice",
      "fairy"
    ],
    "half_damage_to": [
      "steel",
      "fire",
      "water",
      "electric"
    ],
    "no_damage_to": []
  },
  "fire": {
    "double_damage_to": [
      "bug",
      "steel",
      "grass",
      "ice"
    ],
    "half_damage_to": [
      "rock",
      "fire",
      "water",
      "dragon"
    ],
    "no_damage_to": []
  },
  "water": {
    "double_damage_to": [
      "ground",
      "rock",
      "fire"
    ],
    "half_damage_to": [
      "water",
      "grass",
      "dragon"
    ],
    "no_damage_to": []
  },
  "grass": {
    "double_damage_to": [
      "ground",
      "rock",
      "water"
    ],
    "half_damage_to": [
      "flying",
      "poison",
      "bug",
      "steel",
      "fire",
      "grass",
      "dragon"
    ],
    "no_damage_to": []
  },
  "electric": {
    "double_damage_to": [
      "flying",
      "water"
    ],
    "half_damage_to": [
      "grass",
      "electric",
      "dragon"
    ],
    "no_damage_to": [
      "ground"
    ]
  },
  "psychic": {
    "double_damage_to": [
      "fighting",
      "poison"
    ],
    "half_damage_to": [
      "steel",
      "psychic"
    ],
    "no_damage_to": [
      "dark"
    ]
  },
  "ice": {
    "double_damage_to": [
      "flying",
      "ground",
      "grass",
      "dragon"
    ],
    "half_damage_to": [
      "steel",
      "fire",
      "water",
      "ice"
    ],
    "no_damage_to": []
  },
  "dragon": {
    "double_damage_to": [
      "dragon"
    ],
    "half_damage_to": [
      "steel"
    ],
    "no_damage_to": [
      "fairy"
    ]
  },
  "dark": {
    "double_damage_to": [
      "ghost",
      "psychic"
    ],
    "half_damage_to": [
      "fighting",
      "dark",
      "fairy"
    ],
    "no_damage_to": []
  },
  "fairy": {
    "double_damage_to": [
      "fighting",
      "dragon",
      "dark"
    ],
    "half_damage_to": [
      "poison",
      "steel",
      "fire"
    ],
    "no_damage_to": []
  }
};
const ENCOUNTERS_DATA = {
  "celadon-city-area": [
    {
      "pokemon": "psyduck",
      "method": "surf",
      "chance": 60,
      "min_level": 5,
      "max_level": 10
    },
    {
      "pokemon": "psyduck",
      "method": "surf",
      "chance": 30,
      "min_level": 10,
      "max_level": 20
    },
    {
      "pokemon": "psyduck",
      "method": "surf",
      "chance": 5,
      "min_level": 20,
      "max_level": 30
    },
    {
      "pokemon": "psyduck",
      "method": "surf",
      "chance": 4,
      "min_level": 30,
      "max_level": 40
    },
    {
      "pokemon": "slowpoke",
      "method": "surf",
      "chance": 60,
      "min_level": 5,
      "max_level": 10
    },
    {
      "pokemon": "slowpoke",
      "method": "surf",
      "chance": 30,
      "min_level": 10,
      "max_level": 20
    },
    {
      "pokemon": "slowpoke",
      "method": "surf",
      "chance": 5,
      "min_level": 20,
      "max_level": 30
    },
    {
      "pokemon": "slowpoke",
      "method": "surf",
      "chance": 4,
      "min_level": 30,
      "max_level": 40
    },
    {
      "pokemon": "grimer",
      "method": "super-rod",
      "chance": 1,
      "min_level": 30,
      "max_level": 40
    },
    {
      "pokemon": "koffing",
      "method": "surf",
      "chance": 1,
      "min_level": 30,
      "max_level": 40
    },
    {
      "pokemon": "magikarp",
      "method": "good-rod",
      "chance": 60,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "magikarp",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "magikarp",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 70,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 30,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "magikarp",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "magikarp",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "magikarp",
      "method": "super-rod",
      "chance": 15,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "magikarp",
      "method": "super-rod",
      "chance": 4,
      "min_level": 25,
      "max_level": 35
    }
  ],
  "celadon-city-celadon-mansion": [
    {
      "pokemon": "eevee",
      "method": "gift",
      "chance": 100,
      "min_level": 25,
      "max_level": 25
    }
  ],
  "celadon-city-prize-corner": [
    {
      "pokemon": "clefairy",
      "method": "gift",
      "chance": 100,
      "min_level": 8,
      "max_level": 8
    },
    {
      "pokemon": "abra",
      "method": "gift",
      "chance": 100,
      "min_level": 9,
      "max_level": 9
    },
    {
      "pokemon": "scyther",
      "method": "gift",
      "chance": 100,
      "min_level": 25,
      "max_level": 25
    },
    {
      "pokemon": "pinsir",
      "method": "gift",
      "chance": 100,
      "min_level": 18,
      "max_level": 18
    },
    {
      "pokemon": "porygon",
      "method": "gift",
      "chance": 100,
      "min_level": 26,
      "max_level": 26
    },
    {
      "pokemon": "dratini",
      "method": "gift",
      "chance": 100,
      "min_level": 18,
      "max_level": 18
    }
  ],
  "cerulean-city-area": [
    {
      "pokemon": "psyduck",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 60,
      "min_level": 5,
      "max_level": 10
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 30,
      "min_level": 10,
      "max_level": 20
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 5,
      "min_level": 20,
      "max_level": 30
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 4,
      "min_level": 30,
      "max_level": 35
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 1,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "slowpoke",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "krabby",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "horsea",
      "method": "good-rod",
      "chance": 60,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "horsea",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "horsea",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "horsea",
      "method": "super-rod",
      "chance": 4,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "jynx",
      "method": "npc-trade",
      "chance": 100,
      "min_level": 20,
      "max_level": 100
    },
    {
      "pokemon": "magikarp",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 70,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 30,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "gyarados",
      "method": "super-rod",
      "chance": 15,
      "min_level": 15,
      "max_level": 25
    }
  ],
  "cinnabar-island-area": [
    {
      "pokemon": "psyduck",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 60,
      "min_level": 5,
      "max_level": 10
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 30,
      "min_level": 10,
      "max_level": 20
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 5,
      "min_level": 20,
      "max_level": 30
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 4,
      "min_level": 30,
      "max_level": 35
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 1,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "slowpoke",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "slowbro",
      "method": "super-rod",
      "chance": 4,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "shellder",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "krabby",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "horsea",
      "method": "good-rod",
      "chance": 60,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "horsea",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "seadra",
      "method": "super-rod",
      "chance": 4,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "staryu",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "magikarp",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 70,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 30,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "gyarados",
      "method": "super-rod",
      "chance": 15,
      "min_level": 15,
      "max_level": 25
    }
  ],
  "cinnabar-island-cinnabar-lab": [
    {
      "pokemon": "seel",
      "method": "npc-trade",
      "chance": 100,
      "min_level": 5,
      "max_level": 100
    },
    {
      "pokemon": "electrode",
      "method": "npc-trade",
      "chance": 100,
      "min_level": 3,
      "max_level": 100
    },
    {
      "pokemon": "tangela",
      "method": "npc-trade",
      "chance": 100,
      "min_level": 5,
      "max_level": 100
    },
    {
      "pokemon": "omanyte",
      "method": "gift",
      "chance": 100,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "kabuto",
      "method": "gift",
      "chance": 100,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "aerodactyl",
      "method": "gift",
      "chance": 100,
      "min_level": 5,
      "max_level": 5
    }
  ],
  "digletts-cave-area": [
    {
      "pokemon": "diglett",
      "method": "walk",
      "chance": 20,
      "min_level": 18,
      "max_level": 18
    },
    {
      "pokemon": "diglett",
      "method": "walk",
      "chance": 20,
      "min_level": 19,
      "max_level": 19
    },
    {
      "pokemon": "diglett",
      "method": "walk",
      "chance": 10,
      "min_level": 17,
      "max_level": 17
    },
    {
      "pokemon": "diglett",
      "method": "walk",
      "chance": 10,
      "min_level": 15,
      "max_level": 15
    },
    {
      "pokemon": "diglett",
      "method": "walk",
      "chance": 10,
      "min_level": 16,
      "max_level": 16
    },
    {
      "pokemon": "diglett",
      "method": "walk",
      "chance": 10,
      "min_level": 20,
      "max_level": 20
    },
    {
      "pokemon": "diglett",
      "method": "walk",
      "chance": 5,
      "min_level": 21,
      "max_level": 21
    },
    {
      "pokemon": "diglett",
      "method": "walk",
      "chance": 5,
      "min_level": 22,
      "max_level": 22
    },
    {
      "pokemon": "diglett",
      "method": "walk",
      "chance": 4,
      "min_level": 17,
      "max_level": 17
    },
    {
      "pokemon": "diglett",
      "method": "walk",
      "chance": 1,
      "min_level": 17,
      "max_level": 17
    },
    {
      "pokemon": "dugtrio",
      "method": "walk",
      "chance": 4,
      "min_level": 29,
      "max_level": 29
    },
    {
      "pokemon": "dugtrio",
      "method": "walk",
      "chance": 1,
      "min_level": 31,
      "max_level": 31
    }
  ],
  "fuchsia-city-area": [
    {
      "pokemon": "psyduck",
      "method": "super-rod",
      "chance": 4,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "psyduck",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "psyduck",
      "method": "surf",
      "chance": 60,
      "min_level": 20,
      "max_level": 25
    },
    {
      "pokemon": "psyduck",
      "method": "surf",
      "chance": 30,
      "min_level": 20,
      "max_level": 25
    },
    {
      "pokemon": "psyduck",
      "method": "surf",
      "chance": 5,
      "min_level": 25,
      "max_level": 30
    },
    {
      "pokemon": "psyduck",
      "method": "surf",
      "chance": 4,
      "min_level": 30,
      "max_level": 35
    },
    {
      "pokemon": "psyduck",
      "method": "surf",
      "chance": 1,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "poliwag",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "slowpoke",
      "method": "super-rod",
      "chance": 4,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "slowpoke",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "slowpoke",
      "method": "surf",
      "chance": 60,
      "min_level": 20,
      "max_level": 25
    },
    {
      "pokemon": "slowpoke",
      "method": "surf",
      "chance": 30,
      "min_level": 20,
      "max_level": 25
    },
    {
      "pokemon": "slowpoke",
      "method": "surf",
      "chance": 5,
      "min_level": 25,
      "max_level": 30
    },
    {
      "pokemon": "slowpoke",
      "method": "surf",
      "chance": 4,
      "min_level": 30,
      "max_level": 35
    },
    {
      "pokemon": "slowpoke",
      "method": "surf",
      "chance": 1,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "goldeen",
      "method": "good-rod",
      "chance": 60,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "goldeen",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "seaking",
      "method": "super-rod",
      "chance": 40,
      "min_level": 20,
      "max_level": 30
    },
    {
      "pokemon": "magikarp",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 70,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 30,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "gyarados",
      "method": "super-rod",
      "chance": 15,
      "min_level": 15,
      "max_level": 25
    }
  ],
  "mt-moon-1f": [
    {
      "pokemon": "clefairy",
      "method": "walk",
      "chance": 1,
      "min_level": 8,
      "max_level": 8
    },
    {
      "pokemon": "zubat",
      "method": "walk",
      "chance": 20,
      "min_level": 7,
      "max_level": 7
    },
    {
      "pokemon": "zubat",
      "method": "walk",
      "chance": 20,
      "min_level": 8,
      "max_level": 8
    },
    {
      "pokemon": "zubat",
      "method": "walk",
      "chance": 10,
      "min_level": 9,
      "max_level": 9
    },
    {
      "pokemon": "zubat",
      "method": "walk",
      "chance": 10,
      "min_level": 10,
      "max_level": 10
    },
    {
      "pokemon": "zubat",
      "method": "walk",
      "chance": 4,
      "min_level": 7,
      "max_level": 7
    },
    {
      "pokemon": "zubat",
      "method": "walk",
      "chance": 4,
      "min_level": 7,
      "max_level": 7
    },
    {
      "pokemon": "zubat",
      "method": "walk",
      "chance": 1,
      "min_level": 7,
      "max_level": 7
    },
    {
      "pokemon": "paras",
      "method": "walk",
      "chance": 5,
      "min_level": 8,
      "max_level": 8
    },
    {
      "pokemon": "geodude",
      "method": "walk",
      "chance": 10,
      "min_level": 7,
      "max_level": 7
    },
    {
      "pokemon": "geodude",
      "method": "walk",
      "chance": 10,
      "min_level": 8,
      "max_level": 8
    },
    {
      "pokemon": "geodude",
      "method": "walk",
      "chance": 5,
      "min_level": 9,
      "max_level": 9
    }
  ],
  "mt-moon-b1f": [
    {
      "pokemon": "paras",
      "method": "walk",
      "chance": 20,
      "min_level": 7,
      "max_level": 7
    },
    {
      "pokemon": "paras",
      "method": "walk",
      "chance": 20,
      "min_level": 8,
      "max_level": 8
    },
    {
      "pokemon": "paras",
      "method": "walk",
      "chance": 10,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "paras",
      "method": "walk",
      "chance": 10,
      "min_level": 6,
      "max_level": 6
    },
    {
      "pokemon": "paras",
      "method": "walk",
      "chance": 10,
      "min_level": 9,
      "max_level": 9
    },
    {
      "pokemon": "paras",
      "method": "walk",
      "chance": 10,
      "min_level": 10,
      "max_level": 10
    },
    {
      "pokemon": "paras",
      "method": "walk",
      "chance": 5,
      "min_level": 7,
      "max_level": 7
    },
    {
      "pokemon": "paras",
      "method": "walk",
      "chance": 5,
      "min_level": 8,
      "max_level": 8
    },
    {
      "pokemon": "paras",
      "method": "walk",
      "chance": 4,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "paras",
      "method": "walk",
      "chance": 4,
      "min_level": 6,
      "max_level": 6
    },
    {
      "pokemon": "paras",
      "method": "walk",
      "chance": 1,
      "min_level": 9,
      "max_level": 9
    },
    {
      "pokemon": "paras",
      "method": "walk",
      "chance": 1,
      "min_level": 10,
      "max_level": 10
    }
  ],
  "mt-moon-b2f": [
    {
      "pokemon": "clefairy",
      "method": "walk",
      "chance": 5,
      "min_level": 10,
      "max_level": 10
    },
    {
      "pokemon": "clefairy",
      "method": "walk",
      "chance": 1,
      "min_level": 12,
      "max_level": 12
    },
    {
      "pokemon": "zubat",
      "method": "walk",
      "chance": 20,
      "min_level": 8,
      "max_level": 8
    },
    {
      "pokemon": "zubat",
      "method": "walk",
      "chance": 10,
      "min_level": 9,
      "max_level": 9
    },
    {
      "pokemon": "zubat",
      "method": "walk",
      "chance": 10,
      "min_level": 10,
      "max_level": 10
    },
    {
      "pokemon": "zubat",
      "method": "walk",
      "chance": 4,
      "min_level": 11,
      "max_level": 11
    },
    {
      "pokemon": "zubat",
      "method": "walk",
      "chance": 4,
      "min_level": 11,
      "max_level": 11
    },
    {
      "pokemon": "zubat",
      "method": "walk",
      "chance": 1,
      "min_level": 11,
      "max_level": 11
    },
    {
      "pokemon": "paras",
      "method": "walk",
      "chance": 10,
      "min_level": 10,
      "max_level": 10
    },
    {
      "pokemon": "paras",
      "method": "walk",
      "chance": 5,
      "min_level": 12,
      "max_level": 12
    },
    {
      "pokemon": "geodude",
      "method": "walk",
      "chance": 20,
      "min_level": 9,
      "max_level": 9
    },
    {
      "pokemon": "geodude",
      "method": "walk",
      "chance": 10,
      "min_level": 10,
      "max_level": 10
    }
  ],
  "pallet-town-area": [
    {
      "pokemon": "bulbasaur",
      "method": "gift",
      "chance": 100,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "charmander",
      "method": "gift",
      "chance": 100,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "squirtle",
      "method": "gift",
      "chance": 100,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "psyduck",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 60,
      "min_level": 5,
      "max_level": 10
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 30,
      "min_level": 10,
      "max_level": 20
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 5,
      "min_level": 20,
      "max_level": 30
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 4,
      "min_level": 30,
      "max_level": 35
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 1,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "slowpoke",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "shellder",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "krabby",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "kingler",
      "method": "super-rod",
      "chance": 4,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "horsea",
      "method": "good-rod",
      "chance": 60,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "horsea",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "seadra",
      "method": "super-rod",
      "chance": 4,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "staryu",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "magikarp",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 70,
      "min_level": 5,
      "max_level": 10
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 30,
      "min_level": 5,
      "max_level": 10
    },
    {
      "pokemon": "gyarados",
      "method": "super-rod",
      "chance": 15,
      "min_level": 15,
      "max_level": 25
    }
  ],
  "rock-tunnel-1f": [
    {
      "pokemon": "zubat",
      "method": "walk",
      "chance": 20,
      "min_level": 15,
      "max_level": 15
    },
    {
      "pokemon": "zubat",
      "method": "walk",
      "chance": 10,
      "min_level": 16,
      "max_level": 16
    },
    {
      "pokemon": "mankey",
      "method": "walk",
      "chance": 10,
      "min_level": 16,
      "max_level": 16
    },
    {
      "pokemon": "mankey",
      "method": "walk",
      "chance": 5,
      "min_level": 17,
      "max_level": 17
    },
    {
      "pokemon": "machop",
      "method": "walk",
      "chance": 10,
      "min_level": 16,
      "max_level": 16
    },
    {
      "pokemon": "machop",
      "method": "walk",
      "chance": 5,
      "min_level": 17,
      "max_level": 17
    },
    {
      "pokemon": "geodude",
      "method": "walk",
      "chance": 20,
      "min_level": 16,
      "max_level": 16
    },
    {
      "pokemon": "geodude",
      "method": "walk",
      "chance": 10,
      "min_level": 17,
      "max_level": 17
    },
    {
      "pokemon": "geodude",
      "method": "walk",
      "chance": 4,
      "min_level": 15,
      "max_level": 15
    },
    {
      "pokemon": "geodude",
      "method": "walk",
      "chance": 1,
      "min_level": 15,
      "max_level": 15
    },
    {
      "pokemon": "onix",
      "method": "walk",
      "chance": 4,
      "min_level": 13,
      "max_level": 13
    },
    {
      "pokemon": "onix",
      "method": "walk",
      "chance": 1,
      "min_level": 15,
      "max_level": 15
    }
  ],
  "rock-tunnel-b1f": [
    {
      "pokemon": "zubat",
      "method": "walk",
      "chance": 20,
      "min_level": 16,
      "max_level": 16
    },
    {
      "pokemon": "zubat",
      "method": "walk",
      "chance": 10,
      "min_level": 15,
      "max_level": 15
    },
    {
      "pokemon": "mankey",
      "method": "walk",
      "chance": 10,
      "min_level": 17,
      "max_level": 17
    },
    {
      "pokemon": "mankey",
      "method": "walk",
      "chance": 5,
      "min_level": 16,
      "max_level": 16
    },
    {
      "pokemon": "machop",
      "method": "walk",
      "chance": 10,
      "min_level": 17,
      "max_level": 17
    },
    {
      "pokemon": "geodude",
      "method": "walk",
      "chance": 20,
      "min_level": 17,
      "max_level": 17
    },
    {
      "pokemon": "geodude",
      "method": "walk",
      "chance": 10,
      "min_level": 16,
      "max_level": 16
    },
    {
      "pokemon": "geodude",
      "method": "walk",
      "chance": 4,
      "min_level": 15,
      "max_level": 15
    },
    {
      "pokemon": "geodude",
      "method": "walk",
      "chance": 1,
      "min_level": 15,
      "max_level": 15
    },
    {
      "pokemon": "geodude",
      "method": "rock-smash",
      "chance": 60,
      "min_level": 5,
      "max_level": 20
    },
    {
      "pokemon": "geodude",
      "method": "rock-smash",
      "chance": 30,
      "min_level": 10,
      "max_level": 20
    },
    {
      "pokemon": "geodude",
      "method": "rock-smash",
      "chance": 5,
      "min_level": 15,
      "max_level": 30
    },
    {
      "pokemon": "graveler",
      "method": "rock-smash",
      "chance": 4,
      "min_level": 25,
      "max_level": 40
    },
    {
      "pokemon": "graveler",
      "method": "rock-smash",
      "chance": 1,
      "min_level": 30,
      "max_level": 40
    },
    {
      "pokemon": "onix",
      "method": "walk",
      "chance": 5,
      "min_level": 13,
      "max_level": 13
    },
    {
      "pokemon": "onix",
      "method": "walk",
      "chance": 4,
      "min_level": 15,
      "max_level": 15
    },
    {
      "pokemon": "onix",
      "method": "walk",
      "chance": 1,
      "min_level": 17,
      "max_level": 17
    }
  ],
  "kanto-route-1-area": [
    {
      "pokemon": "pidgey",
      "method": "walk",
      "chance": 20,
      "min_level": 3,
      "max_level": 3
    },
    {
      "pokemon": "pidgey",
      "method": "walk",
      "chance": 10,
      "min_level": 3,
      "max_level": 3
    },
    {
      "pokemon": "pidgey",
      "method": "walk",
      "chance": 10,
      "min_level": 2,
      "max_level": 2
    },
    {
      "pokemon": "pidgey",
      "method": "walk",
      "chance": 5,
      "min_level": 3,
      "max_level": 3
    },
    {
      "pokemon": "pidgey",
      "method": "walk",
      "chance": 4,
      "min_level": 4,
      "max_level": 4
    },
    {
      "pokemon": "pidgey",
      "method": "walk",
      "chance": 1,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "rattata",
      "method": "walk",
      "chance": 20,
      "min_level": 3,
      "max_level": 3
    },
    {
      "pokemon": "rattata",
      "method": "walk",
      "chance": 10,
      "min_level": 3,
      "max_level": 3
    },
    {
      "pokemon": "rattata",
      "method": "walk",
      "chance": 10,
      "min_level": 2,
      "max_level": 2
    },
    {
      "pokemon": "rattata",
      "method": "walk",
      "chance": 5,
      "min_level": 3,
      "max_level": 3
    },
    {
      "pokemon": "rattata",
      "method": "walk",
      "chance": 4,
      "min_level": 4,
      "max_level": 4
    },
    {
      "pokemon": "rattata",
      "method": "walk",
      "chance": 1,
      "min_level": 4,
      "max_level": 4
    }
  ],
  "kanto-route-10-area": [
    {
      "pokemon": "spearow",
      "method": "walk",
      "chance": 20,
      "min_level": 16,
      "max_level": 16
    },
    {
      "pokemon": "spearow",
      "method": "walk",
      "chance": 10,
      "min_level": 13,
      "max_level": 13
    },
    {
      "pokemon": "spearow",
      "method": "walk",
      "chance": 5,
      "min_level": 17,
      "max_level": 17
    },
    {
      "pokemon": "ekans",
      "method": "walk",
      "chance": 10,
      "min_level": 11,
      "max_level": 11
    },
    {
      "pokemon": "ekans",
      "method": "walk",
      "chance": 10,
      "min_level": 15,
      "max_level": 15
    },
    {
      "pokemon": "ekans",
      "method": "walk",
      "chance": 4,
      "min_level": 13,
      "max_level": 13
    },
    {
      "pokemon": "ekans",
      "method": "walk",
      "chance": 1,
      "min_level": 17,
      "max_level": 17
    },
    {
      "pokemon": "sandshrew",
      "method": "walk",
      "chance": 10,
      "min_level": 11,
      "max_level": 11
    },
    {
      "pokemon": "sandshrew",
      "method": "walk",
      "chance": 10,
      "min_level": 15,
      "max_level": 15
    },
    {
      "pokemon": "sandshrew",
      "method": "walk",
      "chance": 4,
      "min_level": 13,
      "max_level": 13
    },
    {
      "pokemon": "sandshrew",
      "method": "walk",
      "chance": 1,
      "min_level": 17,
      "max_level": 17
    },
    {
      "pokemon": "psyduck",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 60,
      "min_level": 5,
      "max_level": 10
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 30,
      "min_level": 10,
      "max_level": 20
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 5,
      "min_level": 20,
      "max_level": 30
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 4,
      "min_level": 30,
      "max_level": 35
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 1,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "slowpoke",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "krabby",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "voltorb",
      "method": "walk",
      "chance": 20,
      "min_level": 16,
      "max_level": 16
    },
    {
      "pokemon": "voltorb",
      "method": "walk",
      "chance": 10,
      "min_level": 14,
      "max_level": 14
    },
    {
      "pokemon": "voltorb",
      "method": "walk",
      "chance": 5,
      "min_level": 17,
      "max_level": 17
    },
    {
      "pokemon": "voltorb",
      "method": "walk",
      "chance": 4,
      "min_level": 14,
      "max_level": 14
    },
    {
      "pokemon": "voltorb",
      "method": "walk",
      "chance": 1,
      "min_level": 14,
      "max_level": 14
    },
    {
      "pokemon": "horsea",
      "method": "good-rod",
      "chance": 60,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "horsea",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "horsea",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "horsea",
      "method": "super-rod",
      "chance": 4,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "magikarp",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 70,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 30,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "gyarados",
      "method": "super-rod",
      "chance": 15,
      "min_level": 15,
      "max_level": 25
    }
  ],
  "kanto-route-11-area": [
    {
      "pokemon": "spearow",
      "method": "walk",
      "chance": 20,
      "min_level": 15,
      "max_level": 15
    },
    {
      "pokemon": "spearow",
      "method": "walk",
      "chance": 10,
      "min_level": 13,
      "max_level": 13
    },
    {
      "pokemon": "spearow",
      "method": "walk",
      "chance": 5,
      "min_level": 17,
      "max_level": 17
    },
    {
      "pokemon": "ekans",
      "method": "walk",
      "chance": 20,
      "min_level": 14,
      "max_level": 14
    },
    {
      "pokemon": "ekans",
      "method": "walk",
      "chance": 10,
      "min_level": 12,
      "max_level": 12
    },
    {
      "pokemon": "ekans",
      "method": "walk",
      "chance": 5,
      "min_level": 15,
      "max_level": 15
    },
    {
      "pokemon": "ekans",
      "method": "walk",
      "chance": 4,
      "min_level": 12,
      "max_level": 12
    },
    {
      "pokemon": "ekans",
      "method": "walk",
      "chance": 1,
      "min_level": 12,
      "max_level": 12
    },
    {
      "pokemon": "sandshrew",
      "method": "walk",
      "chance": 20,
      "min_level": 14,
      "max_level": 14
    },
    {
      "pokemon": "sandshrew",
      "method": "walk",
      "chance": 10,
      "min_level": 12,
      "max_level": 12
    },
    {
      "pokemon": "sandshrew",
      "method": "walk",
      "chance": 5,
      "min_level": 15,
      "max_level": 15
    },
    {
      "pokemon": "sandshrew",
      "method": "walk",
      "chance": 4,
      "min_level": 12,
      "max_level": 12
    },
    {
      "pokemon": "sandshrew",
      "method": "walk",
      "chance": 1,
      "min_level": 12,
      "max_level": 12
    },
    {
      "pokemon": "nidorina",
      "method": "npc-trade",
      "chance": 100,
      "min_level": 16,
      "max_level": 100
    },
    {
      "pokemon": "nidorino",
      "method": "npc-trade",
      "chance": 100,
      "min_level": 16,
      "max_level": 100
    },
    {
      "pokemon": "psyduck",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 60,
      "min_level": 5,
      "max_level": 10
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 30,
      "min_level": 10,
      "max_level": 20
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 5,
      "min_level": 20,
      "max_level": 30
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 4,
      "min_level": 30,
      "max_level": 35
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 1,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "slowpoke",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "drowzee",
      "method": "walk",
      "chance": 10,
      "min_level": 11,
      "max_level": 11
    },
    {
      "pokemon": "drowzee",
      "method": "walk",
      "chance": 10,
      "min_level": 13,
      "max_level": 13
    },
    {
      "pokemon": "drowzee",
      "method": "walk",
      "chance": 4,
      "min_level": 15,
      "max_level": 15
    },
    {
      "pokemon": "drowzee",
      "method": "walk",
      "chance": 1,
      "min_level": 15,
      "max_level": 15
    },
    {
      "pokemon": "krabby",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "horsea",
      "method": "good-rod",
      "chance": 60,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "horsea",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "horsea",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "horsea",
      "method": "super-rod",
      "chance": 4,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "magikarp",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 70,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 30,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "gyarados",
      "method": "super-rod",
      "chance": 15,
      "min_level": 15,
      "max_level": 25
    }
  ],
  "kanto-route-12-area": [
    {
      "pokemon": "pidgey",
      "method": "walk",
      "chance": 10,
      "min_level": 23,
      "max_level": 23
    },
    {
      "pokemon": "pidgey",
      "method": "walk",
      "chance": 10,
      "min_level": 25,
      "max_level": 25
    },
    {
      "pokemon": "pidgey",
      "method": "walk",
      "chance": 5,
      "min_level": 27,
      "max_level": 27
    },
    {
      "pokemon": "pidgey",
      "method": "walk",
      "chance": 4,
      "min_level": 23,
      "max_level": 23
    },
    {
      "pokemon": "pidgey",
      "method": "walk",
      "chance": 1,
      "min_level": 23,
      "max_level": 23
    },
    {
      "pokemon": "oddish",
      "method": "walk",
      "chance": 20,
      "min_level": 24,
      "max_level": 24
    },
    {
      "pokemon": "oddish",
      "method": "walk",
      "chance": 10,
      "min_level": 22,
      "max_level": 22
    },
    {
      "pokemon": "oddish",
      "method": "walk",
      "chance": 5,
      "min_level": 26,
      "max_level": 26
    },
    {
      "pokemon": "gloom",
      "method": "walk",
      "chance": 4,
      "min_level": 28,
      "max_level": 28
    },
    {
      "pokemon": "gloom",
      "method": "walk",
      "chance": 1,
      "min_level": 30,
      "max_level": 30
    },
    {
      "pokemon": "venonat",
      "method": "walk",
      "chance": 20,
      "min_level": 24,
      "max_level": 24
    },
    {
      "pokemon": "venonat",
      "method": "walk",
      "chance": 10,
      "min_level": 26,
      "max_level": 26
    },
    {
      "pokemon": "psyduck",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "bellsprout",
      "method": "walk",
      "chance": 20,
      "min_level": 24,
      "max_level": 24
    },
    {
      "pokemon": "bellsprout",
      "method": "walk",
      "chance": 10,
      "min_level": 22,
      "max_level": 22
    },
    {
      "pokemon": "bellsprout",
      "method": "walk",
      "chance": 5,
      "min_level": 26,
      "max_level": 26
    },
    {
      "pokemon": "weepinbell",
      "method": "walk",
      "chance": 4,
      "min_level": 28,
      "max_level": 28
    },
    {
      "pokemon": "weepinbell",
      "method": "walk",
      "chance": 1,
      "min_level": 30,
      "max_level": 30
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 60,
      "min_level": 5,
      "max_level": 10
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 30,
      "min_level": 10,
      "max_level": 20
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 5,
      "min_level": 20,
      "max_level": 30
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 4,
      "min_level": 30,
      "max_level": 35
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 1,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "slowpoke",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "krabby",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "horsea",
      "method": "good-rod",
      "chance": 60,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "horsea",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "horsea",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "horsea",
      "method": "super-rod",
      "chance": 4,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "magikarp",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 70,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 30,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "gyarados",
      "method": "super-rod",
      "chance": 15,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "snorlax",
      "method": "pokeflute",
      "chance": 100,
      "min_level": 30,
      "max_level": 30
    }
  ],
  "kanto-route-13-area": [
    {
      "pokemon": "pidgey",
      "method": "walk",
      "chance": 10,
      "min_level": 27,
      "max_level": 27
    },
    {
      "pokemon": "pidgey",
      "method": "walk",
      "chance": 10,
      "min_level": 25,
      "max_level": 25
    },
    {
      "pokemon": "pidgeotto",
      "method": "walk",
      "chance": 4,
      "min_level": 29,
      "max_level": 29
    },
    {
      "pokemon": "pidgeotto",
      "method": "walk",
      "chance": 1,
      "min_level": 29,
      "max_level": 29
    },
    {
      "pokemon": "oddish",
      "method": "walk",
      "chance": 20,
      "min_level": 24,
      "max_level": 24
    },
    {
      "pokemon": "oddish",
      "method": "walk",
      "chance": 10,
      "min_level": 22,
      "max_level": 22
    },
    {
      "pokemon": "oddish",
      "method": "walk",
      "chance": 5,
      "min_level": 26,
      "max_level": 26
    },
    {
      "pokemon": "gloom",
      "method": "walk",
      "chance": 4,
      "min_level": 28,
      "max_level": 28
    },
    {
      "pokemon": "gloom",
      "method": "walk",
      "chance": 1,
      "min_level": 30,
      "max_level": 30
    },
    {
      "pokemon": "venonat",
      "method": "walk",
      "chance": 20,
      "min_level": 24,
      "max_level": 24
    },
    {
      "pokemon": "venonat",
      "method": "walk",
      "chance": 10,
      "min_level": 26,
      "max_level": 26
    },
    {
      "pokemon": "psyduck",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "bellsprout",
      "method": "walk",
      "chance": 20,
      "min_level": 24,
      "max_level": 24
    },
    {
      "pokemon": "bellsprout",
      "method": "walk",
      "chance": 10,
      "min_level": 22,
      "max_level": 22
    },
    {
      "pokemon": "bellsprout",
      "method": "walk",
      "chance": 5,
      "min_level": 26,
      "max_level": 26
    },
    {
      "pokemon": "weepinbell",
      "method": "walk",
      "chance": 4,
      "min_level": 28,
      "max_level": 28
    },
    {
      "pokemon": "weepinbell",
      "method": "walk",
      "chance": 1,
      "min_level": 30,
      "max_level": 30
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 60,
      "min_level": 5,
      "max_level": 10
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 30,
      "min_level": 10,
      "max_level": 20
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 5,
      "min_level": 20,
      "max_level": 30
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 4,
      "min_level": 30,
      "max_level": 35
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 1,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "slowpoke",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "krabby",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "horsea",
      "method": "good-rod",
      "chance": 60,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "horsea",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "horsea",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "horsea",
      "method": "super-rod",
      "chance": 4,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "magikarp",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 70,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 30,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "gyarados",
      "method": "super-rod",
      "chance": 15,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "ditto",
      "method": "walk",
      "chance": 5,
      "min_level": 25,
      "max_level": 25
    }
  ],
  "kanto-route-14-area": [
    {
      "pokemon": "pidgey",
      "method": "walk",
      "chance": 10,
      "min_level": 27,
      "max_level": 27
    },
    {
      "pokemon": "pidgeotto",
      "method": "walk",
      "chance": 4,
      "min_level": 29,
      "max_level": 29
    },
    {
      "pokemon": "pidgeotto",
      "method": "walk",
      "chance": 1,
      "min_level": 29,
      "max_level": 29
    },
    {
      "pokemon": "oddish",
      "method": "walk",
      "chance": 20,
      "min_level": 24,
      "max_level": 24
    },
    {
      "pokemon": "oddish",
      "method": "walk",
      "chance": 10,
      "min_level": 22,
      "max_level": 22
    },
    {
      "pokemon": "oddish",
      "method": "walk",
      "chance": 5,
      "min_level": 26,
      "max_level": 26
    },
    {
      "pokemon": "gloom",
      "method": "walk",
      "chance": 5,
      "min_level": 30,
      "max_level": 30
    },
    {
      "pokemon": "venonat",
      "method": "walk",
      "chance": 20,
      "min_level": 24,
      "max_level": 24
    },
    {
      "pokemon": "venonat",
      "method": "walk",
      "chance": 10,
      "min_level": 26,
      "max_level": 26
    },
    {
      "pokemon": "bellsprout",
      "method": "walk",
      "chance": 20,
      "min_level": 24,
      "max_level": 24
    },
    {
      "pokemon": "bellsprout",
      "method": "walk",
      "chance": 10,
      "min_level": 22,
      "max_level": 22
    },
    {
      "pokemon": "bellsprout",
      "method": "walk",
      "chance": 5,
      "min_level": 26,
      "max_level": 26
    },
    {
      "pokemon": "weepinbell",
      "method": "walk",
      "chance": 5,
      "min_level": 30,
      "max_level": 30
    },
    {
      "pokemon": "ditto",
      "method": "walk",
      "chance": 10,
      "min_level": 23,
      "max_level": 23
    },
    {
      "pokemon": "ditto",
      "method": "walk",
      "chance": 4,
      "min_level": 23,
      "max_level": 23
    },
    {
      "pokemon": "ditto",
      "method": "walk",
      "chance": 1,
      "min_level": 23,
      "max_level": 23
    }
  ],
  "kanto-route-15-area": [
    {
      "pokemon": "pidgey",
      "method": "walk",
      "chance": 10,
      "min_level": 27,
      "max_level": 27
    },
    {
      "pokemon": "pidgey",
      "method": "walk",
      "chance": 10,
      "min_level": 25,
      "max_level": 25
    },
    {
      "pokemon": "pidgeotto",
      "method": "walk",
      "chance": 4,
      "min_level": 29,
      "max_level": 29
    },
    {
      "pokemon": "pidgeotto",
      "method": "walk",
      "chance": 1,
      "min_level": 29,
      "max_level": 29
    },
    {
      "pokemon": "oddish",
      "method": "walk",
      "chance": 20,
      "min_level": 24,
      "max_level": 24
    },
    {
      "pokemon": "oddish",
      "method": "walk",
      "chance": 10,
      "min_level": 22,
      "max_level": 22
    },
    {
      "pokemon": "oddish",
      "method": "walk",
      "chance": 5,
      "min_level": 26,
      "max_level": 26
    },
    {
      "pokemon": "gloom",
      "method": "walk",
      "chance": 4,
      "min_level": 28,
      "max_level": 28
    },
    {
      "pokemon": "gloom",
      "method": "walk",
      "chance": 1,
      "min_level": 30,
      "max_level": 30
    },
    {
      "pokemon": "venonat",
      "method": "walk",
      "chance": 20,
      "min_level": 24,
      "max_level": 24
    },
    {
      "pokemon": "venonat",
      "method": "walk",
      "chance": 10,
      "min_level": 26,
      "max_level": 26
    },
    {
      "pokemon": "bellsprout",
      "method": "walk",
      "chance": 20,
      "min_level": 24,
      "max_level": 24
    },
    {
      "pokemon": "bellsprout",
      "method": "walk",
      "chance": 10,
      "min_level": 22,
      "max_level": 22
    },
    {
      "pokemon": "bellsprout",
      "method": "walk",
      "chance": 5,
      "min_level": 26,
      "max_level": 26
    },
    {
      "pokemon": "weepinbell",
      "method": "walk",
      "chance": 4,
      "min_level": 28,
      "max_level": 28
    },
    {
      "pokemon": "weepinbell",
      "method": "walk",
      "chance": 1,
      "min_level": 30,
      "max_level": 30
    },
    {
      "pokemon": "ditto",
      "method": "walk",
      "chance": 5,
      "min_level": 25,
      "max_level": 25
    }
  ],
  "kanto-route-16-area": [
    {
      "pokemon": "rattata",
      "method": "walk",
      "chance": 10,
      "min_level": 18,
      "max_level": 18
    },
    {
      "pokemon": "rattata",
      "method": "walk",
      "chance": 10,
      "min_level": 20,
      "max_level": 20
    },
    {
      "pokemon": "rattata",
      "method": "walk",
      "chance": 5,
      "min_level": 22,
      "max_level": 22
    },
    {
      "pokemon": "rattata",
      "method": "walk",
      "chance": 4,
      "min_level": 18,
      "max_level": 18
    },
    {
      "pokemon": "rattata",
      "method": "walk",
      "chance": 1,
      "min_level": 18,
      "max_level": 18
    },
    {
      "pokemon": "raticate",
      "method": "walk",
      "chance": 4,
      "min_level": 23,
      "max_level": 23
    },
    {
      "pokemon": "raticate",
      "method": "walk",
      "chance": 1,
      "min_level": 25,
      "max_level": 25
    },
    {
      "pokemon": "spearow",
      "method": "walk",
      "chance": 20,
      "min_level": 20,
      "max_level": 20
    },
    {
      "pokemon": "spearow",
      "method": "walk",
      "chance": 10,
      "min_level": 22,
      "max_level": 22
    },
    {
      "pokemon": "doduo",
      "method": "walk",
      "chance": 20,
      "min_level": 18,
      "max_level": 18
    },
    {
      "pokemon": "doduo",
      "method": "walk",
      "chance": 10,
      "min_level": 20,
      "max_level": 20
    },
    {
      "pokemon": "doduo",
      "method": "walk",
      "chance": 5,
      "min_level": 22,
      "max_level": 22
    },
    {
      "pokemon": "snorlax",
      "method": "pokeflute",
      "chance": 100,
      "min_level": 30,
      "max_level": 30
    }
  ],
  "kanto-route-17-area": [
    {
      "pokemon": "rattata",
      "method": "walk",
      "chance": 4,
      "min_level": 22,
      "max_level": 22
    },
    {
      "pokemon": "rattata",
      "method": "walk",
      "chance": 1,
      "min_level": 22,
      "max_level": 22
    },
    {
      "pokemon": "raticate",
      "method": "walk",
      "chance": 10,
      "min_level": 25,
      "max_level": 25
    },
    {
      "pokemon": "raticate",
      "method": "walk",
      "chance": 10,
      "min_level": 27,
      "max_level": 27
    },
    {
      "pokemon": "raticate",
      "method": "walk",
      "chance": 5,
      "min_level": 29,
      "max_level": 29
    },
    {
      "pokemon": "spearow",
      "method": "walk",
      "chance": 20,
      "min_level": 20,
      "max_level": 20
    },
    {
      "pokemon": "spearow",
      "method": "walk",
      "chance": 10,
      "min_level": 22,
      "max_level": 22
    },
    {
      "pokemon": "fearow",
      "method": "walk",
      "chance": 4,
      "min_level": 25,
      "max_level": 25
    },
    {
      "pokemon": "fearow",
      "method": "walk",
      "chance": 1,
      "min_level": 27,
      "max_level": 27
    },
    {
      "pokemon": "doduo",
      "method": "walk",
      "chance": 20,
      "min_level": 24,
      "max_level": 24
    },
    {
      "pokemon": "doduo",
      "method": "walk",
      "chance": 10,
      "min_level": 26,
      "max_level": 26
    },
    {
      "pokemon": "doduo",
      "method": "walk",
      "chance": 5,
      "min_level": 28,
      "max_level": 28
    }
  ],
  "kanto-route-18-area": [
    {
      "pokemon": "rattata",
      "method": "walk",
      "chance": 4,
      "min_level": 22,
      "max_level": 22
    },
    {
      "pokemon": "rattata",
      "method": "walk",
      "chance": 1,
      "min_level": 22,
      "max_level": 22
    },
    {
      "pokemon": "raticate",
      "method": "walk",
      "chance": 10,
      "min_level": 25,
      "max_level": 25
    },
    {
      "pokemon": "raticate",
      "method": "walk",
      "chance": 5,
      "min_level": 29,
      "max_level": 29
    },
    {
      "pokemon": "spearow",
      "method": "walk",
      "chance": 20,
      "min_level": 20,
      "max_level": 20
    },
    {
      "pokemon": "spearow",
      "method": "walk",
      "chance": 10,
      "min_level": 22,
      "max_level": 22
    },
    {
      "pokemon": "fearow",
      "method": "walk",
      "chance": 10,
      "min_level": 25,
      "max_level": 25
    },
    {
      "pokemon": "fearow",
      "method": "walk",
      "chance": 4,
      "min_level": 27,
      "max_level": 27
    },
    {
      "pokemon": "fearow",
      "method": "walk",
      "chance": 1,
      "min_level": 29,
      "max_level": 29
    },
    {
      "pokemon": "doduo",
      "method": "walk",
      "chance": 20,
      "min_level": 24,
      "max_level": 24
    },
    {
      "pokemon": "doduo",
      "method": "walk",
      "chance": 10,
      "min_level": 26,
      "max_level": 26
    },
    {
      "pokemon": "doduo",
      "method": "walk",
      "chance": 5,
      "min_level": 28,
      "max_level": 28
    },
    {
      "pokemon": "lickitung",
      "method": "npc-trade",
      "chance": 100,
      "min_level": 33,
      "max_level": 100
    }
  ],
  "kanto-sea-route-19-area": [
    {
      "pokemon": "psyduck",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 60,
      "min_level": 5,
      "max_level": 10
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 30,
      "min_level": 10,
      "max_level": 20
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 5,
      "min_level": 20,
      "max_level": 30
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 4,
      "min_level": 30,
      "max_level": 35
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 1,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "slowpoke",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "krabby",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "kingler",
      "method": "super-rod",
      "chance": 4,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "horsea",
      "method": "good-rod",
      "chance": 60,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "horsea",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "horsea",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "seadra",
      "method": "super-rod",
      "chance": 4,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "magikarp",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 70,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 30,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "gyarados",
      "method": "super-rod",
      "chance": 15,
      "min_level": 15,
      "max_level": 25
    }
  ],
  "kanto-route-2-south-towards-viridian-city": [
    {
      "pokemon": "caterpie",
      "method": "walk",
      "chance": 4,
      "min_level": 4,
      "max_level": 4
    },
    {
      "pokemon": "caterpie",
      "method": "walk",
      "chance": 1,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "weedle",
      "method": "walk",
      "chance": 4,
      "min_level": 4,
      "max_level": 4
    },
    {
      "pokemon": "weedle",
      "method": "walk",
      "chance": 1,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "pidgey",
      "method": "walk",
      "chance": 20,
      "min_level": 3,
      "max_level": 3
    },
    {
      "pokemon": "pidgey",
      "method": "walk",
      "chance": 10,
      "min_level": 4,
      "max_level": 4
    },
    {
      "pokemon": "pidgey",
      "method": "walk",
      "chance": 10,
      "min_level": 2,
      "max_level": 2
    },
    {
      "pokemon": "pidgey",
      "method": "walk",
      "chance": 5,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "rattata",
      "method": "walk",
      "chance": 20,
      "min_level": 3,
      "max_level": 3
    },
    {
      "pokemon": "rattata",
      "method": "walk",
      "chance": 10,
      "min_level": 4,
      "max_level": 4
    },
    {
      "pokemon": "rattata",
      "method": "walk",
      "chance": 10,
      "min_level": 2,
      "max_level": 2
    },
    {
      "pokemon": "rattata",
      "method": "walk",
      "chance": 5,
      "min_level": 5,
      "max_level": 5
    }
  ],
  "kanto-route-2-north-towards-pewter-city": [
    {
      "pokemon": "mr-mime",
      "method": "npc-trade",
      "chance": 100,
      "min_level": 5,
      "max_level": 100
    }
  ],
  "kanto-sea-route-20-area": [
    {
      "pokemon": "psyduck",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 60,
      "min_level": 5,
      "max_level": 10
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 30,
      "min_level": 10,
      "max_level": 20
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 5,
      "min_level": 20,
      "max_level": 30
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 4,
      "min_level": 30,
      "max_level": 35
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 1,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "slowpoke",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "krabby",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "kingler",
      "method": "super-rod",
      "chance": 4,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "horsea",
      "method": "good-rod",
      "chance": 60,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "horsea",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "horsea",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "seadra",
      "method": "super-rod",
      "chance": 4,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "magikarp",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 70,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 30,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "gyarados",
      "method": "super-rod",
      "chance": 15,
      "min_level": 15,
      "max_level": 25
    }
  ],
  "kanto-sea-route-21-area": [
    {
      "pokemon": "psyduck",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 60,
      "min_level": 5,
      "max_level": 10
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 30,
      "min_level": 10,
      "max_level": 20
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 5,
      "min_level": 20,
      "max_level": 30
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 4,
      "min_level": 30,
      "max_level": 35
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 1,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "slowpoke",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "krabby",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "kingler",
      "method": "super-rod",
      "chance": 4,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "tangela",
      "method": "walk",
      "chance": 20,
      "min_level": 22,
      "max_level": 22
    },
    {
      "pokemon": "tangela",
      "method": "walk",
      "chance": 20,
      "min_level": 23,
      "max_level": 23
    },
    {
      "pokemon": "tangela",
      "method": "walk",
      "chance": 10,
      "min_level": 24,
      "max_level": 24
    },
    {
      "pokemon": "tangela",
      "method": "walk",
      "chance": 10,
      "min_level": 21,
      "max_level": 21
    },
    {
      "pokemon": "tangela",
      "method": "walk",
      "chance": 10,
      "min_level": 25,
      "max_level": 25
    },
    {
      "pokemon": "tangela",
      "method": "walk",
      "chance": 10,
      "min_level": 20,
      "max_level": 20
    },
    {
      "pokemon": "tangela",
      "method": "walk",
      "chance": 5,
      "min_level": 19,
      "max_level": 19
    },
    {
      "pokemon": "tangela",
      "method": "walk",
      "chance": 5,
      "min_level": 26,
      "max_level": 26
    },
    {
      "pokemon": "tangela",
      "method": "walk",
      "chance": 4,
      "min_level": 18,
      "max_level": 18
    },
    {
      "pokemon": "tangela",
      "method": "walk",
      "chance": 4,
      "min_level": 27,
      "max_level": 27
    },
    {
      "pokemon": "tangela",
      "method": "walk",
      "chance": 1,
      "min_level": 17,
      "max_level": 17
    },
    {
      "pokemon": "tangela",
      "method": "walk",
      "chance": 1,
      "min_level": 28,
      "max_level": 28
    },
    {
      "pokemon": "horsea",
      "method": "good-rod",
      "chance": 60,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "horsea",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "horsea",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "seadra",
      "method": "super-rod",
      "chance": 4,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "magikarp",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 70,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 30,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "gyarados",
      "method": "super-rod",
      "chance": 15,
      "min_level": 15,
      "max_level": 25
    }
  ],
  "kanto-route-22-area": [
    {
      "pokemon": "rattata",
      "method": "walk",
      "chance": 20,
      "min_level": 3,
      "max_level": 3
    },
    {
      "pokemon": "rattata",
      "method": "walk",
      "chance": 10,
      "min_level": 4,
      "max_level": 4
    },
    {
      "pokemon": "rattata",
      "method": "walk",
      "chance": 10,
      "min_level": 2,
      "max_level": 2
    },
    {
      "pokemon": "rattata",
      "method": "walk",
      "chance": 4,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "rattata",
      "method": "walk",
      "chance": 1,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "spearow",
      "method": "walk",
      "chance": 5,
      "min_level": 3,
      "max_level": 3
    },
    {
      "pokemon": "spearow",
      "method": "walk",
      "chance": 5,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "psyduck",
      "method": "super-rod",
      "chance": 4,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "psyduck",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "psyduck",
      "method": "surf",
      "chance": 60,
      "min_level": 20,
      "max_level": 25
    },
    {
      "pokemon": "psyduck",
      "method": "surf",
      "chance": 30,
      "min_level": 20,
      "max_level": 25
    },
    {
      "pokemon": "psyduck",
      "method": "surf",
      "chance": 5,
      "min_level": 25,
      "max_level": 30
    },
    {
      "pokemon": "psyduck",
      "method": "surf",
      "chance": 4,
      "min_level": 30,
      "max_level": 35
    },
    {
      "pokemon": "psyduck",
      "method": "surf",
      "chance": 1,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "mankey",
      "method": "walk",
      "chance": 20,
      "min_level": 3,
      "max_level": 3
    },
    {
      "pokemon": "mankey",
      "method": "walk",
      "chance": 10,
      "min_level": 4,
      "max_level": 4
    },
    {
      "pokemon": "mankey",
      "method": "walk",
      "chance": 10,
      "min_level": 2,
      "max_level": 2
    },
    {
      "pokemon": "mankey",
      "method": "walk",
      "chance": 4,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "mankey",
      "method": "walk",
      "chance": 1,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "poliwag",
      "method": "good-rod",
      "chance": 60,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "poliwag",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "poliwhirl",
      "method": "super-rod",
      "chance": 40,
      "min_level": 20,
      "max_level": 30
    },
    {
      "pokemon": "slowpoke",
      "method": "super-rod",
      "chance": 4,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "slowpoke",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "slowpoke",
      "method": "surf",
      "chance": 60,
      "min_level": 20,
      "max_level": 25
    },
    {
      "pokemon": "slowpoke",
      "method": "surf",
      "chance": 30,
      "min_level": 20,
      "max_level": 25
    },
    {
      "pokemon": "slowpoke",
      "method": "surf",
      "chance": 5,
      "min_level": 25,
      "max_level": 30
    },
    {
      "pokemon": "slowpoke",
      "method": "surf",
      "chance": 4,
      "min_level": 30,
      "max_level": 35
    },
    {
      "pokemon": "slowpoke",
      "method": "surf",
      "chance": 1,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "goldeen",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "magikarp",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 70,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 30,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "gyarados",
      "method": "super-rod",
      "chance": 15,
      "min_level": 15,
      "max_level": 25
    }
  ],
  "kanto-route-24-area": [
    {
      "pokemon": "caterpie",
      "method": "walk",
      "chance": 20,
      "min_level": 7,
      "max_level": 7
    },
    {
      "pokemon": "metapod",
      "method": "walk",
      "chance": 1,
      "min_level": 8,
      "max_level": 8
    },
    {
      "pokemon": "weedle",
      "method": "walk",
      "chance": 20,
      "min_level": 7,
      "max_level": 7
    },
    {
      "pokemon": "kakuna",
      "method": "walk",
      "chance": 4,
      "min_level": 8,
      "max_level": 8
    },
    {
      "pokemon": "pidgey",
      "method": "walk",
      "chance": 10,
      "min_level": 11,
      "max_level": 11
    },
    {
      "pokemon": "pidgey",
      "method": "walk",
      "chance": 5,
      "min_level": 13,
      "max_level": 13
    },
    {
      "pokemon": "oddish",
      "method": "walk",
      "chance": 10,
      "min_level": 12,
      "max_level": 12
    },
    {
      "pokemon": "oddish",
      "method": "walk",
      "chance": 10,
      "min_level": 13,
      "max_level": 13
    },
    {
      "pokemon": "oddish",
      "method": "walk",
      "chance": 5,
      "min_level": 14,
      "max_level": 14
    },
    {
      "pokemon": "psyduck",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "abra",
      "method": "walk",
      "chance": 10,
      "min_level": 10,
      "max_level": 10
    },
    {
      "pokemon": "abra",
      "method": "walk",
      "chance": 4,
      "min_level": 8,
      "max_level": 8
    },
    {
      "pokemon": "abra",
      "method": "walk",
      "chance": 1,
      "min_level": 12,
      "max_level": 12
    },
    {
      "pokemon": "bellsprout",
      "method": "walk",
      "chance": 10,
      "min_level": 12,
      "max_level": 12
    },
    {
      "pokemon": "bellsprout",
      "method": "walk",
      "chance": 10,
      "min_level": 13,
      "max_level": 13
    },
    {
      "pokemon": "bellsprout",
      "method": "walk",
      "chance": 5,
      "min_level": 14,
      "max_level": 14
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 60,
      "min_level": 5,
      "max_level": 10
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 30,
      "min_level": 10,
      "max_level": 20
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 5,
      "min_level": 20,
      "max_level": 30
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 4,
      "min_level": 30,
      "max_level": 35
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 1,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "slowpoke",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "krabby",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "horsea",
      "method": "good-rod",
      "chance": 60,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "horsea",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "horsea",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "horsea",
      "method": "super-rod",
      "chance": 4,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "magikarp",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 70,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 30,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "gyarados",
      "method": "super-rod",
      "chance": 15,
      "min_level": 15,
      "max_level": 25
    }
  ],
  "kanto-route-25-area": [
    {
      "pokemon": "caterpie",
      "method": "walk",
      "chance": 20,
      "min_level": 8,
      "max_level": 8
    },
    {
      "pokemon": "metapod",
      "method": "walk",
      "chance": 1,
      "min_level": 9,
      "max_level": 9
    },
    {
      "pokemon": "weedle",
      "method": "walk",
      "chance": 20,
      "min_level": 8,
      "max_level": 8
    },
    {
      "pokemon": "kakuna",
      "method": "walk",
      "chance": 4,
      "min_level": 9,
      "max_level": 9
    },
    {
      "pokemon": "pidgey",
      "method": "walk",
      "chance": 10,
      "min_level": 13,
      "max_level": 13
    },
    {
      "pokemon": "pidgey",
      "method": "walk",
      "chance": 5,
      "min_level": 11,
      "max_level": 11
    },
    {
      "pokemon": "oddish",
      "method": "walk",
      "chance": 10,
      "min_level": 14,
      "max_level": 14
    },
    {
      "pokemon": "oddish",
      "method": "walk",
      "chance": 10,
      "min_level": 13,
      "max_level": 13
    },
    {
      "pokemon": "oddish",
      "method": "walk",
      "chance": 5,
      "min_level": 12,
      "max_level": 12
    },
    {
      "pokemon": "psyduck",
      "method": "super-rod",
      "chance": 4,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "psyduck",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "psyduck",
      "method": "surf",
      "chance": 60,
      "min_level": 20,
      "max_level": 25
    },
    {
      "pokemon": "psyduck",
      "method": "surf",
      "chance": 30,
      "min_level": 20,
      "max_level": 25
    },
    {
      "pokemon": "psyduck",
      "method": "surf",
      "chance": 5,
      "min_level": 25,
      "max_level": 30
    },
    {
      "pokemon": "psyduck",
      "method": "surf",
      "chance": 4,
      "min_level": 30,
      "max_level": 35
    },
    {
      "pokemon": "psyduck",
      "method": "surf",
      "chance": 1,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "poliwag",
      "method": "good-rod",
      "chance": 60,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "poliwag",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "poliwhirl",
      "method": "super-rod",
      "chance": 40,
      "min_level": 20,
      "max_level": 30
    },
    {
      "pokemon": "abra",
      "method": "walk",
      "chance": 10,
      "min_level": 11,
      "max_level": 11
    },
    {
      "pokemon": "abra",
      "method": "walk",
      "chance": 4,
      "min_level": 9,
      "max_level": 9
    },
    {
      "pokemon": "abra",
      "method": "walk",
      "chance": 1,
      "min_level": 13,
      "max_level": 13
    },
    {
      "pokemon": "bellsprout",
      "method": "walk",
      "chance": 10,
      "min_level": 14,
      "max_level": 14
    },
    {
      "pokemon": "bellsprout",
      "method": "walk",
      "chance": 10,
      "min_level": 13,
      "max_level": 13
    },
    {
      "pokemon": "bellsprout",
      "method": "walk",
      "chance": 5,
      "min_level": 12,
      "max_level": 12
    },
    {
      "pokemon": "slowpoke",
      "method": "super-rod",
      "chance": 4,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "slowpoke",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "slowpoke",
      "method": "surf",
      "chance": 60,
      "min_level": 20,
      "max_level": 25
    },
    {
      "pokemon": "slowpoke",
      "method": "surf",
      "chance": 30,
      "min_level": 20,
      "max_level": 25
    },
    {
      "pokemon": "slowpoke",
      "method": "surf",
      "chance": 5,
      "min_level": 25,
      "max_level": 30
    },
    {
      "pokemon": "slowpoke",
      "method": "surf",
      "chance": 4,
      "min_level": 30,
      "max_level": 35
    },
    {
      "pokemon": "slowpoke",
      "method": "surf",
      "chance": 1,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "goldeen",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "magikarp",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 70,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 30,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "gyarados",
      "method": "super-rod",
      "chance": 15,
      "min_level": 15,
      "max_level": 25
    }
  ],
  "kanto-route-3-area": [
    {
      "pokemon": "pidgey",
      "method": "walk",
      "chance": 20,
      "min_level": 6,
      "max_level": 6
    },
    {
      "pokemon": "pidgey",
      "method": "walk",
      "chance": 10,
      "min_level": 7,
      "max_level": 7
    },
    {
      "pokemon": "spearow",
      "method": "walk",
      "chance": 20,
      "min_level": 6,
      "max_level": 6
    },
    {
      "pokemon": "spearow",
      "method": "walk",
      "chance": 10,
      "min_level": 7,
      "max_level": 7
    },
    {
      "pokemon": "spearow",
      "method": "walk",
      "chance": 5,
      "min_level": 8,
      "max_level": 8
    },
    {
      "pokemon": "nidoran-f",
      "method": "walk",
      "chance": 1,
      "min_level": 6,
      "max_level": 6
    },
    {
      "pokemon": "nidoran-m",
      "method": "walk",
      "chance": 10,
      "min_level": 6,
      "max_level": 6
    },
    {
      "pokemon": "nidoran-m",
      "method": "walk",
      "chance": 4,
      "min_level": 7,
      "max_level": 7
    },
    {
      "pokemon": "jigglypuff",
      "method": "walk",
      "chance": 5,
      "min_level": 3,
      "max_level": 3
    },
    {
      "pokemon": "jigglypuff",
      "method": "walk",
      "chance": 4,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "jigglypuff",
      "method": "walk",
      "chance": 1,
      "min_level": 7,
      "max_level": 7
    },
    {
      "pokemon": "mankey",
      "method": "walk",
      "chance": 10,
      "min_level": 7,
      "max_level": 7
    }
  ],
  "kanto-route-3-pokemon-center": [
    {
      "pokemon": "magikarp",
      "method": "gift",
      "chance": 100,
      "min_level": 5,
      "max_level": 5
    }
  ],
  "kanto-route-4-area": [
    {
      "pokemon": "rattata",
      "method": "walk",
      "chance": 20,
      "min_level": 10,
      "max_level": 10
    },
    {
      "pokemon": "rattata",
      "method": "walk",
      "chance": 10,
      "min_level": 8,
      "max_level": 8
    },
    {
      "pokemon": "rattata",
      "method": "walk",
      "chance": 5,
      "min_level": 12,
      "max_level": 12
    },
    {
      "pokemon": "spearow",
      "method": "walk",
      "chance": 20,
      "min_level": 10,
      "max_level": 10
    },
    {
      "pokemon": "spearow",
      "method": "walk",
      "chance": 10,
      "min_level": 8,
      "max_level": 8
    },
    {
      "pokemon": "spearow",
      "method": "walk",
      "chance": 5,
      "min_level": 12,
      "max_level": 12
    },
    {
      "pokemon": "ekans",
      "method": "walk",
      "chance": 10,
      "min_level": 6,
      "max_level": 6
    },
    {
      "pokemon": "ekans",
      "method": "walk",
      "chance": 10,
      "min_level": 10,
      "max_level": 10
    },
    {
      "pokemon": "ekans",
      "method": "walk",
      "chance": 4,
      "min_level": 8,
      "max_level": 8
    },
    {
      "pokemon": "ekans",
      "method": "walk",
      "chance": 1,
      "min_level": 12,
      "max_level": 12
    },
    {
      "pokemon": "sandshrew",
      "method": "walk",
      "chance": 10,
      "min_level": 6,
      "max_level": 6
    },
    {
      "pokemon": "sandshrew",
      "method": "walk",
      "chance": 10,
      "min_level": 10,
      "max_level": 10
    },
    {
      "pokemon": "sandshrew",
      "method": "walk",
      "chance": 4,
      "min_level": 8,
      "max_level": 8
    },
    {
      "pokemon": "sandshrew",
      "method": "walk",
      "chance": 1,
      "min_level": 12,
      "max_level": 12
    },
    {
      "pokemon": "psyduck",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "mankey",
      "method": "walk",
      "chance": 4,
      "min_level": 10,
      "max_level": 10
    },
    {
      "pokemon": "mankey",
      "method": "walk",
      "chance": 1,
      "min_level": 12,
      "max_level": 12
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 60,
      "min_level": 5,
      "max_level": 10
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 30,
      "min_level": 10,
      "max_level": 20
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 5,
      "min_level": 20,
      "max_level": 30
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 4,
      "min_level": 30,
      "max_level": 35
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 1,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "slowpoke",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "krabby",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "horsea",
      "method": "good-rod",
      "chance": 60,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "horsea",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "horsea",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "horsea",
      "method": "super-rod",
      "chance": 4,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "magikarp",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 70,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 30,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "gyarados",
      "method": "super-rod",
      "chance": 15,
      "min_level": 15,
      "max_level": 25
    }
  ],
  "kanto-route-4-pokemon-center": [
    {
      "pokemon": "magikarp",
      "method": "gift",
      "chance": 100,
      "min_level": 5,
      "max_level": 5
    }
  ],
  "kanto-route-5-area": [
    {
      "pokemon": "pidgey",
      "method": "walk",
      "chance": 20,
      "min_level": 13,
      "max_level": 13
    },
    {
      "pokemon": "pidgey",
      "method": "walk",
      "chance": 10,
      "min_level": 15,
      "max_level": 15
    },
    {
      "pokemon": "pidgey",
      "method": "walk",
      "chance": 5,
      "min_level": 16,
      "max_level": 16
    },
    {
      "pokemon": "pidgey",
      "method": "walk",
      "chance": 4,
      "min_level": 15,
      "max_level": 15
    },
    {
      "pokemon": "pidgey",
      "method": "walk",
      "chance": 1,
      "min_level": 15,
      "max_level": 15
    },
    {
      "pokemon": "oddish",
      "method": "walk",
      "chance": 10,
      "min_level": 13,
      "max_level": 13
    },
    {
      "pokemon": "oddish",
      "method": "walk",
      "chance": 10,
      "min_level": 15,
      "max_level": 15
    },
    {
      "pokemon": "oddish",
      "method": "walk",
      "chance": 5,
      "min_level": 16,
      "max_level": 16
    },
    {
      "pokemon": "meowth",
      "method": "walk",
      "chance": 20,
      "min_level": 10,
      "max_level": 10
    },
    {
      "pokemon": "meowth",
      "method": "walk",
      "chance": 10,
      "min_level": 12,
      "max_level": 12
    },
    {
      "pokemon": "meowth",
      "method": "walk",
      "chance": 4,
      "min_level": 14,
      "max_level": 14
    },
    {
      "pokemon": "meowth",
      "method": "walk",
      "chance": 1,
      "min_level": 16,
      "max_level": 16
    },
    {
      "pokemon": "bellsprout",
      "method": "walk",
      "chance": 10,
      "min_level": 13,
      "max_level": 13
    },
    {
      "pokemon": "bellsprout",
      "method": "walk",
      "chance": 10,
      "min_level": 15,
      "max_level": 15
    },
    {
      "pokemon": "bellsprout",
      "method": "walk",
      "chance": 5,
      "min_level": 16,
      "max_level": 16
    }
  ],
  "kanto-route-6-area": [
    {
      "pokemon": "pidgey",
      "method": "walk",
      "chance": 20,
      "min_level": 13,
      "max_level": 13
    },
    {
      "pokemon": "pidgey",
      "method": "walk",
      "chance": 10,
      "min_level": 15,
      "max_level": 15
    },
    {
      "pokemon": "pidgey",
      "method": "walk",
      "chance": 5,
      "min_level": 16,
      "max_level": 16
    },
    {
      "pokemon": "pidgey",
      "method": "walk",
      "chance": 4,
      "min_level": 15,
      "max_level": 15
    },
    {
      "pokemon": "pidgey",
      "method": "walk",
      "chance": 1,
      "min_level": 15,
      "max_level": 15
    },
    {
      "pokemon": "oddish",
      "method": "walk",
      "chance": 10,
      "min_level": 13,
      "max_level": 13
    },
    {
      "pokemon": "oddish",
      "method": "walk",
      "chance": 10,
      "min_level": 15,
      "max_level": 15
    },
    {
      "pokemon": "oddish",
      "method": "walk",
      "chance": 5,
      "min_level": 16,
      "max_level": 16
    },
    {
      "pokemon": "meowth",
      "method": "walk",
      "chance": 20,
      "min_level": 10,
      "max_level": 10
    },
    {
      "pokemon": "meowth",
      "method": "walk",
      "chance": 10,
      "min_level": 12,
      "max_level": 12
    },
    {
      "pokemon": "meowth",
      "method": "walk",
      "chance": 4,
      "min_level": 14,
      "max_level": 14
    },
    {
      "pokemon": "meowth",
      "method": "walk",
      "chance": 1,
      "min_level": 16,
      "max_level": 16
    },
    {
      "pokemon": "psyduck",
      "method": "super-rod",
      "chance": 4,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "psyduck",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "psyduck",
      "method": "surf",
      "chance": 60,
      "min_level": 20,
      "max_level": 25
    },
    {
      "pokemon": "psyduck",
      "method": "surf",
      "chance": 30,
      "min_level": 20,
      "max_level": 25
    },
    {
      "pokemon": "psyduck",
      "method": "surf",
      "chance": 5,
      "min_level": 25,
      "max_level": 30
    },
    {
      "pokemon": "psyduck",
      "method": "surf",
      "chance": 4,
      "min_level": 30,
      "max_level": 35
    },
    {
      "pokemon": "psyduck",
      "method": "surf",
      "chance": 1,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "poliwag",
      "method": "good-rod",
      "chance": 60,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "poliwag",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "poliwhirl",
      "method": "super-rod",
      "chance": 40,
      "min_level": 20,
      "max_level": 30
    },
    {
      "pokemon": "bellsprout",
      "method": "walk",
      "chance": 10,
      "min_level": 13,
      "max_level": 13
    },
    {
      "pokemon": "bellsprout",
      "method": "walk",
      "chance": 10,
      "min_level": 15,
      "max_level": 15
    },
    {
      "pokemon": "bellsprout",
      "method": "walk",
      "chance": 5,
      "min_level": 16,
      "max_level": 16
    },
    {
      "pokemon": "slowpoke",
      "method": "super-rod",
      "chance": 4,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "slowpoke",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "slowpoke",
      "method": "surf",
      "chance": 60,
      "min_level": 20,
      "max_level": 25
    },
    {
      "pokemon": "slowpoke",
      "method": "surf",
      "chance": 30,
      "min_level": 20,
      "max_level": 25
    },
    {
      "pokemon": "slowpoke",
      "method": "surf",
      "chance": 5,
      "min_level": 25,
      "max_level": 30
    },
    {
      "pokemon": "slowpoke",
      "method": "surf",
      "chance": 4,
      "min_level": 30,
      "max_level": 35
    },
    {
      "pokemon": "slowpoke",
      "method": "surf",
      "chance": 1,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "goldeen",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "magikarp",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 70,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 30,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "gyarados",
      "method": "super-rod",
      "chance": 15,
      "min_level": 15,
      "max_level": 25
    }
  ],
  "kanto-route-7-area": [
    {
      "pokemon": "pidgey",
      "method": "walk",
      "chance": 20,
      "min_level": 19,
      "max_level": 19
    },
    {
      "pokemon": "pidgey",
      "method": "walk",
      "chance": 10,
      "min_level": 22,
      "max_level": 22
    },
    {
      "pokemon": "vulpix",
      "method": "walk",
      "chance": 5,
      "min_level": 18,
      "max_level": 18
    },
    {
      "pokemon": "vulpix",
      "method": "walk",
      "chance": 5,
      "min_level": 20,
      "max_level": 20
    },
    {
      "pokemon": "oddish",
      "method": "walk",
      "chance": 10,
      "min_level": 19,
      "max_level": 19
    },
    {
      "pokemon": "oddish",
      "method": "walk",
      "chance": 10,
      "min_level": 22,
      "max_level": 22
    },
    {
      "pokemon": "meowth",
      "method": "walk",
      "chance": 20,
      "min_level": 17,
      "max_level": 17
    },
    {
      "pokemon": "meowth",
      "method": "walk",
      "chance": 10,
      "min_level": 18,
      "max_level": 18
    },
    {
      "pokemon": "meowth",
      "method": "walk",
      "chance": 4,
      "min_level": 17,
      "max_level": 17
    },
    {
      "pokemon": "meowth",
      "method": "walk",
      "chance": 4,
      "min_level": 19,
      "max_level": 19
    },
    {
      "pokemon": "meowth",
      "method": "walk",
      "chance": 1,
      "min_level": 17,
      "max_level": 17
    },
    {
      "pokemon": "meowth",
      "method": "walk",
      "chance": 1,
      "min_level": 20,
      "max_level": 20
    },
    {
      "pokemon": "growlithe",
      "method": "walk",
      "chance": 5,
      "min_level": 18,
      "max_level": 18
    },
    {
      "pokemon": "growlithe",
      "method": "walk",
      "chance": 5,
      "min_level": 20,
      "max_level": 20
    },
    {
      "pokemon": "bellsprout",
      "method": "walk",
      "chance": 10,
      "min_level": 19,
      "max_level": 19
    },
    {
      "pokemon": "bellsprout",
      "method": "walk",
      "chance": 10,
      "min_level": 22,
      "max_level": 22
    }
  ],
  "kanto-route-8-area": [
    {
      "pokemon": "pidgey",
      "method": "walk",
      "chance": 20,
      "min_level": 18,
      "max_level": 18
    },
    {
      "pokemon": "pidgey",
      "method": "walk",
      "chance": 10,
      "min_level": 20,
      "max_level": 20
    },
    {
      "pokemon": "ekans",
      "method": "walk",
      "chance": 10,
      "min_level": 17,
      "max_level": 17
    },
    {
      "pokemon": "ekans",
      "method": "walk",
      "chance": 5,
      "min_level": 19,
      "max_level": 19
    },
    {
      "pokemon": "ekans",
      "method": "walk",
      "chance": 4,
      "min_level": 17,
      "max_level": 17
    },
    {
      "pokemon": "ekans",
      "method": "walk",
      "chance": 1,
      "min_level": 17,
      "max_level": 17
    },
    {
      "pokemon": "sandshrew",
      "method": "walk",
      "chance": 10,
      "min_level": 17,
      "max_level": 17
    },
    {
      "pokemon": "sandshrew",
      "method": "walk",
      "chance": 5,
      "min_level": 19,
      "max_level": 19
    },
    {
      "pokemon": "sandshrew",
      "method": "walk",
      "chance": 4,
      "min_level": 17,
      "max_level": 17
    },
    {
      "pokemon": "sandshrew",
      "method": "walk",
      "chance": 1,
      "min_level": 17,
      "max_level": 17
    },
    {
      "pokemon": "vulpix",
      "method": "walk",
      "chance": 10,
      "min_level": 16,
      "max_level": 16
    },
    {
      "pokemon": "vulpix",
      "method": "walk",
      "chance": 5,
      "min_level": 17,
      "max_level": 17
    },
    {
      "pokemon": "vulpix",
      "method": "walk",
      "chance": 4,
      "min_level": 15,
      "max_level": 15
    },
    {
      "pokemon": "vulpix",
      "method": "walk",
      "chance": 1,
      "min_level": 18,
      "max_level": 18
    },
    {
      "pokemon": "meowth",
      "method": "walk",
      "chance": 20,
      "min_level": 18,
      "max_level": 18
    },
    {
      "pokemon": "meowth",
      "method": "walk",
      "chance": 10,
      "min_level": 20,
      "max_level": 20
    },
    {
      "pokemon": "growlithe",
      "method": "walk",
      "chance": 10,
      "min_level": 16,
      "max_level": 16
    },
    {
      "pokemon": "growlithe",
      "method": "walk",
      "chance": 5,
      "min_level": 17,
      "max_level": 17
    },
    {
      "pokemon": "growlithe",
      "method": "walk",
      "chance": 4,
      "min_level": 15,
      "max_level": 15
    },
    {
      "pokemon": "growlithe",
      "method": "walk",
      "chance": 1,
      "min_level": 18,
      "max_level": 18
    }
  ],
  "kanto-route-9-area": [
    {
      "pokemon": "rattata",
      "method": "walk",
      "chance": 20,
      "min_level": 16,
      "max_level": 16
    },
    {
      "pokemon": "rattata",
      "method": "walk",
      "chance": 10,
      "min_level": 14,
      "max_level": 14
    },
    {
      "pokemon": "rattata",
      "method": "walk",
      "chance": 5,
      "min_level": 17,
      "max_level": 17
    },
    {
      "pokemon": "rattata",
      "method": "walk",
      "chance": 4,
      "min_level": 14,
      "max_level": 14
    },
    {
      "pokemon": "rattata",
      "method": "walk",
      "chance": 1,
      "min_level": 14,
      "max_level": 14
    },
    {
      "pokemon": "spearow",
      "method": "walk",
      "chance": 20,
      "min_level": 16,
      "max_level": 16
    },
    {
      "pokemon": "spearow",
      "method": "walk",
      "chance": 10,
      "min_level": 13,
      "max_level": 13
    },
    {
      "pokemon": "spearow",
      "method": "walk",
      "chance": 5,
      "min_level": 17,
      "max_level": 17
    },
    {
      "pokemon": "ekans",
      "method": "walk",
      "chance": 10,
      "min_level": 11,
      "max_level": 11
    },
    {
      "pokemon": "ekans",
      "method": "walk",
      "chance": 10,
      "min_level": 15,
      "max_level": 15
    },
    {
      "pokemon": "ekans",
      "method": "walk",
      "chance": 4,
      "min_level": 13,
      "max_level": 13
    },
    {
      "pokemon": "ekans",
      "method": "walk",
      "chance": 1,
      "min_level": 17,
      "max_level": 17
    },
    {
      "pokemon": "sandshrew",
      "method": "walk",
      "chance": 10,
      "min_level": 11,
      "max_level": 11
    },
    {
      "pokemon": "sandshrew",
      "method": "walk",
      "chance": 10,
      "min_level": 15,
      "max_level": 15
    },
    {
      "pokemon": "sandshrew",
      "method": "walk",
      "chance": 4,
      "min_level": 13,
      "max_level": 13
    },
    {
      "pokemon": "sandshrew",
      "method": "walk",
      "chance": 1,
      "min_level": 17,
      "max_level": 17
    }
  ],
  "seafoam-islands-1f": [
    {
      "pokemon": "zubat",
      "method": "walk",
      "chance": 10,
      "min_level": 22,
      "max_level": 22
    },
    {
      "pokemon": "zubat",
      "method": "walk",
      "chance": 10,
      "min_level": 22,
      "max_level": 22
    },
    {
      "pokemon": "zubat",
      "method": "walk",
      "chance": 10,
      "min_level": 24,
      "max_level": 24
    },
    {
      "pokemon": "zubat",
      "method": "walk",
      "chance": 4,
      "min_level": 26,
      "max_level": 26
    },
    {
      "pokemon": "golbat",
      "method": "walk",
      "chance": 5,
      "min_level": 26,
      "max_level": 26
    },
    {
      "pokemon": "golbat",
      "method": "walk",
      "chance": 5,
      "min_level": 28,
      "max_level": 28
    },
    {
      "pokemon": "golbat",
      "method": "walk",
      "chance": 1,
      "min_level": 30,
      "max_level": 30
    },
    {
      "pokemon": "psyduck",
      "method": "walk",
      "chance": 20,
      "min_level": 27,
      "max_level": 27
    },
    {
      "pokemon": "psyduck",
      "method": "walk",
      "chance": 20,
      "min_level": 29,
      "max_level": 29
    },
    {
      "pokemon": "psyduck",
      "method": "walk",
      "chance": 10,
      "min_level": 31,
      "max_level": 31
    },
    {
      "pokemon": "psyduck",
      "method": "walk",
      "chance": 4,
      "min_level": 33,
      "max_level": 33
    },
    {
      "pokemon": "psyduck",
      "method": "walk",
      "chance": 1,
      "min_level": 26,
      "max_level": 26
    },
    {
      "pokemon": "slowpoke",
      "method": "walk",
      "chance": 20,
      "min_level": 27,
      "max_level": 27
    },
    {
      "pokemon": "slowpoke",
      "method": "walk",
      "chance": 20,
      "min_level": 29,
      "max_level": 29
    },
    {
      "pokemon": "slowpoke",
      "method": "walk",
      "chance": 10,
      "min_level": 31,
      "max_level": 31
    },
    {
      "pokemon": "slowpoke",
      "method": "walk",
      "chance": 4,
      "min_level": 33,
      "max_level": 33
    },
    {
      "pokemon": "slowpoke",
      "method": "walk",
      "chance": 1,
      "min_level": 26,
      "max_level": 26
    }
  ],
  "seafoam-islands-b1f": [
    {
      "pokemon": "zubat",
      "method": "walk",
      "chance": 10,
      "min_level": 22,
      "max_level": 22
    },
    {
      "pokemon": "zubat",
      "method": "walk",
      "chance": 10,
      "min_level": 22,
      "max_level": 22
    },
    {
      "pokemon": "zubat",
      "method": "walk",
      "chance": 10,
      "min_level": 24,
      "max_level": 24
    },
    {
      "pokemon": "zubat",
      "method": "walk",
      "chance": 4,
      "min_level": 26,
      "max_level": 26
    },
    {
      "pokemon": "golbat",
      "method": "walk",
      "chance": 5,
      "min_level": 26,
      "max_level": 26
    },
    {
      "pokemon": "golbat",
      "method": "walk",
      "chance": 5,
      "min_level": 28,
      "max_level": 28
    },
    {
      "pokemon": "golbat",
      "method": "walk",
      "chance": 1,
      "min_level": 30,
      "max_level": 30
    },
    {
      "pokemon": "psyduck",
      "method": "walk",
      "chance": 20,
      "min_level": 29,
      "max_level": 29
    },
    {
      "pokemon": "psyduck",
      "method": "walk",
      "chance": 20,
      "min_level": 31,
      "max_level": 31
    },
    {
      "pokemon": "golduck",
      "method": "walk",
      "chance": 4,
      "min_level": 33,
      "max_level": 33
    },
    {
      "pokemon": "golduck",
      "method": "walk",
      "chance": 1,
      "min_level": 35,
      "max_level": 35
    },
    {
      "pokemon": "slowpoke",
      "method": "walk",
      "chance": 20,
      "min_level": 29,
      "max_level": 29
    },
    {
      "pokemon": "slowpoke",
      "method": "walk",
      "chance": 20,
      "min_level": 31,
      "max_level": 31
    },
    {
      "pokemon": "slowbro",
      "method": "walk",
      "chance": 4,
      "min_level": 33,
      "max_level": 33
    },
    {
      "pokemon": "slowbro",
      "method": "walk",
      "chance": 1,
      "min_level": 35,
      "max_level": 35
    },
    {
      "pokemon": "seel",
      "method": "walk",
      "chance": 10,
      "min_level": 28,
      "max_level": 28
    }
  ],
  "seafoam-islands-b2f": [
    {
      "pokemon": "zubat",
      "method": "walk",
      "chance": 10,
      "min_level": 22,
      "max_level": 22
    },
    {
      "pokemon": "zubat",
      "method": "walk",
      "chance": 10,
      "min_level": 24,
      "max_level": 24
    },
    {
      "pokemon": "golbat",
      "method": "walk",
      "chance": 5,
      "min_level": 26,
      "max_level": 26
    },
    {
      "pokemon": "golbat",
      "method": "walk",
      "chance": 4,
      "min_level": 28,
      "max_level": 28
    },
    {
      "pokemon": "golbat",
      "method": "walk",
      "chance": 1,
      "min_level": 30,
      "max_level": 30
    },
    {
      "pokemon": "psyduck",
      "method": "walk",
      "chance": 20,
      "min_level": 30,
      "max_level": 30
    },
    {
      "pokemon": "psyduck",
      "method": "walk",
      "chance": 20,
      "min_level": 32,
      "max_level": 32
    },
    {
      "pokemon": "golduck",
      "method": "walk",
      "chance": 5,
      "min_level": 34,
      "max_level": 34
    },
    {
      "pokemon": "golduck",
      "method": "walk",
      "chance": 4,
      "min_level": 32,
      "max_level": 32
    },
    {
      "pokemon": "golduck",
      "method": "walk",
      "chance": 1,
      "min_level": 32,
      "max_level": 32
    },
    {
      "pokemon": "slowpoke",
      "method": "walk",
      "chance": 20,
      "min_level": 30,
      "max_level": 30
    },
    {
      "pokemon": "slowpoke",
      "method": "walk",
      "chance": 20,
      "min_level": 32,
      "max_level": 32
    },
    {
      "pokemon": "slowbro",
      "method": "walk",
      "chance": 5,
      "min_level": 34,
      "max_level": 34
    },
    {
      "pokemon": "slowbro",
      "method": "walk",
      "chance": 4,
      "min_level": 32,
      "max_level": 32
    },
    {
      "pokemon": "slowbro",
      "method": "walk",
      "chance": 1,
      "min_level": 32,
      "max_level": 32
    },
    {
      "pokemon": "seel",
      "method": "walk",
      "chance": 10,
      "min_level": 30,
      "max_level": 30
    },
    {
      "pokemon": "seel",
      "method": "walk",
      "chance": 10,
      "min_level": 32,
      "max_level": 32
    }
  ],
  "seafoam-islands-b3f": [
    {
      "pokemon": "zubat",
      "method": "walk",
      "chance": 10,
      "min_level": 24,
      "max_level": 24
    },
    {
      "pokemon": "golbat",
      "method": "walk",
      "chance": 5,
      "min_level": 26,
      "max_level": 26
    },
    {
      "pokemon": "golbat",
      "method": "walk",
      "chance": 4,
      "min_level": 28,
      "max_level": 28
    },
    {
      "pokemon": "golbat",
      "method": "walk",
      "chance": 1,
      "min_level": 30,
      "max_level": 30
    },
    {
      "pokemon": "psyduck",
      "method": "walk",
      "chance": 10,
      "min_level": 32,
      "max_level": 32
    },
    {
      "pokemon": "psyduck",
      "method": "walk",
      "chance": 10,
      "min_level": 30,
      "max_level": 30
    },
    {
      "pokemon": "psyduck",
      "method": "super-rod",
      "chance": 4,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "psyduck",
      "method": "surf",
      "chance": 4,
      "min_level": 30,
      "max_level": 40
    },
    {
      "pokemon": "golduck",
      "method": "walk",
      "chance": 10,
      "min_level": 32,
      "max_level": 32
    },
    {
      "pokemon": "golduck",
      "method": "walk",
      "chance": 5,
      "min_level": 34,
      "max_level": 34
    },
    {
      "pokemon": "golduck",
      "method": "surf",
      "chance": 1,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "slowpoke",
      "method": "walk",
      "chance": 10,
      "min_level": 32,
      "max_level": 32
    },
    {
      "pokemon": "slowpoke",
      "method": "walk",
      "chance": 10,
      "min_level": 30,
      "max_level": 30
    },
    {
      "pokemon": "slowpoke",
      "method": "super-rod",
      "chance": 4,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "slowpoke",
      "method": "surf",
      "chance": 4,
      "min_level": 30,
      "max_level": 40
    },
    {
      "pokemon": "slowbro",
      "method": "walk",
      "chance": 10,
      "min_level": 32,
      "max_level": 32
    },
    {
      "pokemon": "slowbro",
      "method": "walk",
      "chance": 5,
      "min_level": 34,
      "max_level": 34
    },
    {
      "pokemon": "slowbro",
      "method": "surf",
      "chance": 1,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "seel",
      "method": "walk",
      "chance": 20,
      "min_level": 30,
      "max_level": 30
    },
    {
      "pokemon": "seel",
      "method": "walk",
      "chance": 20,
      "min_level": 32,
      "max_level": 32
    },
    {
      "pokemon": "seel",
      "method": "surf",
      "chance": 60,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "dewgong",
      "method": "walk",
      "chance": 4,
      "min_level": 32,
      "max_level": 32
    },
    {
      "pokemon": "dewgong",
      "method": "walk",
      "chance": 1,
      "min_level": 34,
      "max_level": 34
    },
    {
      "pokemon": "dewgong",
      "method": "surf",
      "chance": 5,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "krabby",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "horsea",
      "method": "good-rod",
      "chance": 60,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "horsea",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "horsea",
      "method": "super-rod",
      "chance": 40,
      "min_level": 20,
      "max_level": 30
    },
    {
      "pokemon": "horsea",
      "method": "surf",
      "chance": 30,
      "min_level": 25,
      "max_level": 30
    },
    {
      "pokemon": "magikarp",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 70,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 30,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "gyarados",
      "method": "super-rod",
      "chance": 15,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "gyarados",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    }
  ],
  "seafoam-islands-b4f": [
    {
      "pokemon": "golbat",
      "method": "walk",
      "chance": 10,
      "min_level": 26,
      "max_level": 26
    },
    {
      "pokemon": "golbat",
      "method": "walk",
      "chance": 4,
      "min_level": 28,
      "max_level": 28
    },
    {
      "pokemon": "golbat",
      "method": "walk",
      "chance": 1,
      "min_level": 30,
      "max_level": 30
    },
    {
      "pokemon": "psyduck",
      "method": "walk",
      "chance": 10,
      "min_level": 32,
      "max_level": 32
    },
    {
      "pokemon": "psyduck",
      "method": "super-rod",
      "chance": 4,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "psyduck",
      "method": "surf",
      "chance": 4,
      "min_level": 30,
      "max_level": 40
    },
    {
      "pokemon": "golduck",
      "method": "walk",
      "chance": 10,
      "min_level": 32,
      "max_level": 32
    },
    {
      "pokemon": "golduck",
      "method": "walk",
      "chance": 5,
      "min_level": 34,
      "max_level": 34
    },
    {
      "pokemon": "golduck",
      "method": "surf",
      "chance": 1,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "slowpoke",
      "method": "walk",
      "chance": 10,
      "min_level": 32,
      "max_level": 32
    },
    {
      "pokemon": "slowpoke",
      "method": "super-rod",
      "chance": 4,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "slowpoke",
      "method": "surf",
      "chance": 4,
      "min_level": 30,
      "max_level": 40
    },
    {
      "pokemon": "slowbro",
      "method": "walk",
      "chance": 10,
      "min_level": 32,
      "max_level": 32
    },
    {
      "pokemon": "slowbro",
      "method": "walk",
      "chance": 5,
      "min_level": 34,
      "max_level": 34
    },
    {
      "pokemon": "slowbro",
      "method": "surf",
      "chance": 1,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "seel",
      "method": "walk",
      "chance": 20,
      "min_level": 30,
      "max_level": 30
    },
    {
      "pokemon": "seel",
      "method": "walk",
      "chance": 20,
      "min_level": 32,
      "max_level": 32
    },
    {
      "pokemon": "seel",
      "method": "walk",
      "chance": 10,
      "min_level": 34,
      "max_level": 34
    },
    {
      "pokemon": "seel",
      "method": "surf",
      "chance": 60,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "dewgong",
      "method": "walk",
      "chance": 5,
      "min_level": 34,
      "max_level": 34
    },
    {
      "pokemon": "dewgong",
      "method": "walk",
      "chance": 4,
      "min_level": 36,
      "max_level": 36
    },
    {
      "pokemon": "dewgong",
      "method": "walk",
      "chance": 1,
      "min_level": 36,
      "max_level": 36
    },
    {
      "pokemon": "dewgong",
      "method": "surf",
      "chance": 5,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "krabby",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "horsea",
      "method": "good-rod",
      "chance": 60,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "horsea",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "horsea",
      "method": "super-rod",
      "chance": 40,
      "min_level": 20,
      "max_level": 30
    },
    {
      "pokemon": "horsea",
      "method": "surf",
      "chance": 30,
      "min_level": 25,
      "max_level": 30
    },
    {
      "pokemon": "magikarp",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 70,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 30,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "gyarados",
      "method": "super-rod",
      "chance": 15,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "gyarados",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "articuno",
      "method": "static",
      "chance": 100,
      "min_level": 50,
      "max_level": 50
    }
  ],
  "cerulean-cave-1f": [
    {
      "pokemon": "golbat",
      "method": "walk",
      "chance": 10,
      "min_level": 46,
      "max_level": 46
    },
    {
      "pokemon": "golbat",
      "method": "walk",
      "chance": 4,
      "min_level": 55,
      "max_level": 55
    },
    {
      "pokemon": "parasect",
      "method": "walk",
      "chance": 20,
      "min_level": 49,
      "max_level": 49
    },
    {
      "pokemon": "parasect",
      "method": "walk",
      "chance": 5,
      "min_level": 58,
      "max_level": 58
    },
    {
      "pokemon": "psyduck",
      "method": "super-rod",
      "chance": 4,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "psyduck",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "psyduck",
      "method": "surf",
      "chance": 60,
      "min_level": 30,
      "max_level": 40
    },
    {
      "pokemon": "psyduck",
      "method": "surf",
      "chance": 4,
      "min_level": 40,
      "max_level": 50
    },
    {
      "pokemon": "psyduck",
      "method": "surf",
      "chance": 1,
      "min_level": 40,
      "max_level": 50
    },
    {
      "pokemon": "golduck",
      "method": "surf",
      "chance": 30,
      "min_level": 40,
      "max_level": 50
    },
    {
      "pokemon": "golduck",
      "method": "surf",
      "chance": 5,
      "min_level": 45,
      "max_level": 55
    },
    {
      "pokemon": "primeape",
      "method": "walk",
      "chance": 10,
      "min_level": 52,
      "max_level": 52
    },
    {
      "pokemon": "primeape",
      "method": "walk",
      "chance": 1,
      "min_level": 61,
      "max_level": 61
    },
    {
      "pokemon": "poliwag",
      "method": "good-rod",
      "chance": 60,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "poliwag",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "poliwhirl",
      "method": "super-rod",
      "chance": 40,
      "min_level": 20,
      "max_level": 30
    },
    {
      "pokemon": "machoke",
      "method": "walk",
      "chance": 10,
      "min_level": 46,
      "max_level": 46
    },
    {
      "pokemon": "geodude",
      "method": "rock-smash",
      "chance": 60,
      "min_level": 30,
      "max_level": 40
    },
    {
      "pokemon": "geodude",
      "method": "rock-smash",
      "chance": 4,
      "min_level": 40,
      "max_level": 50
    },
    {
      "pokemon": "geodude",
      "method": "rock-smash",
      "chance": 1,
      "min_level": 40,
      "max_level": 50
    },
    {
      "pokemon": "graveler",
      "method": "rock-smash",
      "chance": 30,
      "min_level": 40,
      "max_level": 50
    },
    {
      "pokemon": "graveler",
      "method": "rock-smash",
      "chance": 5,
      "min_level": 45,
      "max_level": 55
    },
    {
      "pokemon": "slowpoke",
      "method": "super-rod",
      "chance": 4,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "slowpoke",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "slowpoke",
      "method": "surf",
      "chance": 60,
      "min_level": 30,
      "max_level": 40
    },
    {
      "pokemon": "slowpoke",
      "method": "surf",
      "chance": 4,
      "min_level": 40,
      "max_level": 50
    },
    {
      "pokemon": "slowpoke",
      "method": "surf",
      "chance": 1,
      "min_level": 40,
      "max_level": 50
    },
    {
      "pokemon": "slowbro",
      "method": "surf",
      "chance": 30,
      "min_level": 40,
      "max_level": 50
    },
    {
      "pokemon": "slowbro",
      "method": "surf",
      "chance": 5,
      "min_level": 45,
      "max_level": 55
    },
    {
      "pokemon": "magneton",
      "method": "walk",
      "chance": 20,
      "min_level": 49,
      "max_level": 49
    },
    {
      "pokemon": "electrode",
      "method": "walk",
      "chance": 5,
      "min_level": 58,
      "max_level": 58
    },
    {
      "pokemon": "goldeen",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "magikarp",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 70,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 30,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "gyarados",
      "method": "super-rod",
      "chance": 15,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "ditto",
      "method": "walk",
      "chance": 10,
      "min_level": 52,
      "max_level": 52
    },
    {
      "pokemon": "ditto",
      "method": "walk",
      "chance": 1,
      "min_level": 61,
      "max_level": 61
    }
  ],
  "cerulean-cave-2f": [
    {
      "pokemon": "golbat",
      "method": "walk",
      "chance": 20,
      "min_level": 49,
      "max_level": 49
    },
    {
      "pokemon": "golbat",
      "method": "walk",
      "chance": 5,
      "min_level": 58,
      "max_level": 58
    },
    {
      "pokemon": "parasect",
      "method": "walk",
      "chance": 10,
      "min_level": 52,
      "max_level": 52
    },
    {
      "pokemon": "parasect",
      "method": "walk",
      "chance": 4,
      "min_level": 61,
      "max_level": 61
    },
    {
      "pokemon": "kadabra",
      "method": "walk",
      "chance": 10,
      "min_level": 55,
      "max_level": 55
    },
    {
      "pokemon": "kadabra",
      "method": "walk",
      "chance": 1,
      "min_level": 64,
      "max_level": 64
    },
    {
      "pokemon": "machoke",
      "method": "walk",
      "chance": 20,
      "min_level": 49,
      "max_level": 49
    },
    {
      "pokemon": "geodude",
      "method": "rock-smash",
      "chance": 60,
      "min_level": 35,
      "max_level": 45
    },
    {
      "pokemon": "geodude",
      "method": "rock-smash",
      "chance": 4,
      "min_level": 45,
      "max_level": 55
    },
    {
      "pokemon": "geodude",
      "method": "rock-smash",
      "chance": 1,
      "min_level": 45,
      "max_level": 55
    },
    {
      "pokemon": "graveler",
      "method": "rock-smash",
      "chance": 30,
      "min_level": 45,
      "max_level": 55
    },
    {
      "pokemon": "graveler",
      "method": "rock-smash",
      "chance": 5,
      "min_level": 50,
      "max_level": 60
    },
    {
      "pokemon": "magneton",
      "method": "walk",
      "chance": 10,
      "min_level": 52,
      "max_level": 52
    },
    {
      "pokemon": "electrode",
      "method": "walk",
      "chance": 4,
      "min_level": 61,
      "max_level": 61
    },
    {
      "pokemon": "ditto",
      "method": "walk",
      "chance": 10,
      "min_level": 55,
      "max_level": 55
    },
    {
      "pokemon": "ditto",
      "method": "walk",
      "chance": 1,
      "min_level": 64,
      "max_level": 64
    }
  ],
  "cerulean-cave-b1f": [
    {
      "pokemon": "golbat",
      "method": "walk",
      "chance": 10,
      "min_level": 52,
      "max_level": 52
    },
    {
      "pokemon": "golbat",
      "method": "walk",
      "chance": 1,
      "min_level": 61,
      "max_level": 61
    },
    {
      "pokemon": "parasect",
      "method": "walk",
      "chance": 10,
      "min_level": 55,
      "max_level": 55
    },
    {
      "pokemon": "parasect",
      "method": "walk",
      "chance": 4,
      "min_level": 64,
      "max_level": 64
    },
    {
      "pokemon": "psyduck",
      "method": "super-rod",
      "chance": 4,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "psyduck",
      "method": "surf",
      "chance": 60,
      "min_level": 40,
      "max_level": 50
    },
    {
      "pokemon": "psyduck",
      "method": "surf",
      "chance": 4,
      "min_level": 50,
      "max_level": 60
    },
    {
      "pokemon": "psyduck",
      "method": "surf",
      "chance": 1,
      "min_level": 50,
      "max_level": 60
    },
    {
      "pokemon": "golduck",
      "method": "surf",
      "chance": 30,
      "min_level": 50,
      "max_level": 60
    },
    {
      "pokemon": "golduck",
      "method": "surf",
      "chance": 5,
      "min_level": 55,
      "max_level": 65
    },
    {
      "pokemon": "poliwag",
      "method": "good-rod",
      "chance": 60,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "poliwag",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "poliwhirl",
      "method": "super-rod",
      "chance": 40,
      "min_level": 20,
      "max_level": 30
    },
    {
      "pokemon": "kadabra",
      "method": "walk",
      "chance": 20,
      "min_level": 58,
      "max_level": 58
    },
    {
      "pokemon": "kadabra",
      "method": "walk",
      "chance": 5,
      "min_level": 67,
      "max_level": 67
    },
    {
      "pokemon": "machoke",
      "method": "walk",
      "chance": 10,
      "min_level": 52,
      "max_level": 52
    },
    {
      "pokemon": "geodude",
      "method": "rock-smash",
      "chance": 60,
      "min_level": 40,
      "max_level": 50
    },
    {
      "pokemon": "geodude",
      "method": "rock-smash",
      "chance": 4,
      "min_level": 50,
      "max_level": 60
    },
    {
      "pokemon": "geodude",
      "method": "rock-smash",
      "chance": 1,
      "min_level": 50,
      "max_level": 60
    },
    {
      "pokemon": "graveler",
      "method": "rock-smash",
      "chance": 30,
      "min_level": 50,
      "max_level": 60
    },
    {
      "pokemon": "graveler",
      "method": "rock-smash",
      "chance": 5,
      "min_level": 55,
      "max_level": 65
    },
    {
      "pokemon": "slowpoke",
      "method": "super-rod",
      "chance": 4,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "slowpoke",
      "method": "surf",
      "chance": 60,
      "min_level": 40,
      "max_level": 50
    },
    {
      "pokemon": "slowpoke",
      "method": "surf",
      "chance": 4,
      "min_level": 50,
      "max_level": 60
    },
    {
      "pokemon": "slowpoke",
      "method": "surf",
      "chance": 1,
      "min_level": 50,
      "max_level": 60
    },
    {
      "pokemon": "slowbro",
      "method": "surf",
      "chance": 30,
      "min_level": 50,
      "max_level": 60
    },
    {
      "pokemon": "slowbro",
      "method": "surf",
      "chance": 5,
      "min_level": 55,
      "max_level": 65
    },
    {
      "pokemon": "magneton",
      "method": "walk",
      "chance": 10,
      "min_level": 55,
      "max_level": 55
    },
    {
      "pokemon": "electrode",
      "method": "walk",
      "chance": 4,
      "min_level": 64,
      "max_level": 64
    },
    {
      "pokemon": "goldeen",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "magikarp",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 70,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 30,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "gyarados",
      "method": "super-rod",
      "chance": 15,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "gyarados",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "ditto",
      "method": "walk",
      "chance": 20,
      "min_level": 58,
      "max_level": 58
    },
    {
      "pokemon": "ditto",
      "method": "walk",
      "chance": 5,
      "min_level": 67,
      "max_level": 67
    },
    {
      "pokemon": "mewtwo",
      "method": "static",
      "chance": 100,
      "min_level": 70,
      "max_level": 70
    }
  ],
  "vermilion-city-area": [
    {
      "pokemon": "psyduck",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 60,
      "min_level": 5,
      "max_level": 10
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 30,
      "min_level": 10,
      "max_level": 20
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 5,
      "min_level": 20,
      "max_level": 30
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 4,
      "min_level": 30,
      "max_level": 35
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 1,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "slowpoke",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "farfetchd",
      "method": "npc-trade",
      "chance": 100,
      "min_level": 5,
      "max_level": 100
    },
    {
      "pokemon": "shellder",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "krabby",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "horsea",
      "method": "good-rod",
      "chance": 60,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "horsea",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "horsea",
      "method": "super-rod",
      "chance": 4,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "staryu",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "magikarp",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 70,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 30,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "gyarados",
      "method": "super-rod",
      "chance": 15,
      "min_level": 15,
      "max_level": 25
    }
  ],
  "viridian-city-area": [
    {
      "pokemon": "psyduck",
      "method": "super-rod",
      "chance": 4,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "psyduck",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "psyduck",
      "method": "surf",
      "chance": 60,
      "min_level": 20,
      "max_level": 25
    },
    {
      "pokemon": "psyduck",
      "method": "surf",
      "chance": 30,
      "min_level": 20,
      "max_level": 25
    },
    {
      "pokemon": "psyduck",
      "method": "surf",
      "chance": 5,
      "min_level": 25,
      "max_level": 30
    },
    {
      "pokemon": "psyduck",
      "method": "surf",
      "chance": 4,
      "min_level": 30,
      "max_level": 35
    },
    {
      "pokemon": "psyduck",
      "method": "surf",
      "chance": 1,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "poliwag",
      "method": "good-rod",
      "chance": 60,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "poliwag",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "poliwhirl",
      "method": "super-rod",
      "chance": 40,
      "min_level": 20,
      "max_level": 30
    },
    {
      "pokemon": "slowpoke",
      "method": "super-rod",
      "chance": 4,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "slowpoke",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "slowpoke",
      "method": "surf",
      "chance": 60,
      "min_level": 20,
      "max_level": 25
    },
    {
      "pokemon": "slowpoke",
      "method": "surf",
      "chance": 30,
      "min_level": 20,
      "max_level": 25
    },
    {
      "pokemon": "slowpoke",
      "method": "surf",
      "chance": 5,
      "min_level": 25,
      "max_level": 30
    },
    {
      "pokemon": "slowpoke",
      "method": "surf",
      "chance": 4,
      "min_level": 30,
      "max_level": 35
    },
    {
      "pokemon": "slowpoke",
      "method": "surf",
      "chance": 1,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "goldeen",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "magikarp",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 70,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 30,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "gyarados",
      "method": "super-rod",
      "chance": 15,
      "min_level": 15,
      "max_level": 25
    }
  ],
  "viridian-forest-area": [
    {
      "pokemon": "caterpie",
      "method": "walk",
      "chance": 20,
      "min_level": 4,
      "max_level": 4
    },
    {
      "pokemon": "caterpie",
      "method": "walk",
      "chance": 10,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "caterpie",
      "method": "walk",
      "chance": 10,
      "min_level": 3,
      "max_level": 3
    },
    {
      "pokemon": "metapod",
      "method": "walk",
      "chance": 5,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "weedle",
      "method": "walk",
      "chance": 20,
      "min_level": 4,
      "max_level": 4
    },
    {
      "pokemon": "weedle",
      "method": "walk",
      "chance": 10,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "weedle",
      "method": "walk",
      "chance": 10,
      "min_level": 3,
      "max_level": 3
    },
    {
      "pokemon": "kakuna",
      "method": "walk",
      "chance": 5,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "kakuna",
      "method": "walk",
      "chance": 4,
      "min_level": 4,
      "max_level": 4
    },
    {
      "pokemon": "kakuna",
      "method": "walk",
      "chance": 1,
      "min_level": 6,
      "max_level": 6
    },
    {
      "pokemon": "pikachu",
      "method": "walk",
      "chance": 4,
      "min_level": 3,
      "max_level": 3
    },
    {
      "pokemon": "pikachu",
      "method": "walk",
      "chance": 1,
      "min_level": 5,
      "max_level": 5
    }
  ],
  "kanto-route-23-area": [
    {
      "pokemon": "spearow",
      "method": "walk",
      "chance": 10,
      "min_level": 34,
      "max_level": 34
    },
    {
      "pokemon": "spearow",
      "method": "walk",
      "chance": 4,
      "min_level": 32,
      "max_level": 32
    },
    {
      "pokemon": "spearow",
      "method": "walk",
      "chance": 1,
      "min_level": 32,
      "max_level": 32
    },
    {
      "pokemon": "fearow",
      "method": "walk",
      "chance": 20,
      "min_level": 40,
      "max_level": 40
    },
    {
      "pokemon": "fearow",
      "method": "walk",
      "chance": 4,
      "min_level": 42,
      "max_level": 42
    },
    {
      "pokemon": "fearow",
      "method": "walk",
      "chance": 1,
      "min_level": 44,
      "max_level": 44
    },
    {
      "pokemon": "ekans",
      "method": "walk",
      "chance": 10,
      "min_level": 32,
      "max_level": 32
    },
    {
      "pokemon": "ekans",
      "method": "walk",
      "chance": 10,
      "min_level": 34,
      "max_level": 34
    },
    {
      "pokemon": "arbok",
      "method": "walk",
      "chance": 5,
      "min_level": 44,
      "max_level": 44
    },
    {
      "pokemon": "sandshrew",
      "method": "walk",
      "chance": 10,
      "min_level": 32,
      "max_level": 32
    },
    {
      "pokemon": "sandshrew",
      "method": "walk",
      "chance": 10,
      "min_level": 34,
      "max_level": 34
    },
    {
      "pokemon": "sandslash",
      "method": "walk",
      "chance": 5,
      "min_level": 44,
      "max_level": 44
    },
    {
      "pokemon": "psyduck",
      "method": "super-rod",
      "chance": 4,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "psyduck",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "psyduck",
      "method": "surf",
      "chance": 60,
      "min_level": 20,
      "max_level": 25
    },
    {
      "pokemon": "psyduck",
      "method": "surf",
      "chance": 30,
      "min_level": 20,
      "max_level": 25
    },
    {
      "pokemon": "psyduck",
      "method": "surf",
      "chance": 5,
      "min_level": 25,
      "max_level": 30
    },
    {
      "pokemon": "psyduck",
      "method": "surf",
      "chance": 4,
      "min_level": 30,
      "max_level": 35
    },
    {
      "pokemon": "psyduck",
      "method": "surf",
      "chance": 1,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "mankey",
      "method": "walk",
      "chance": 20,
      "min_level": 32,
      "max_level": 32
    },
    {
      "pokemon": "mankey",
      "method": "walk",
      "chance": 10,
      "min_level": 34,
      "max_level": 34
    },
    {
      "pokemon": "primeape",
      "method": "walk",
      "chance": 5,
      "min_level": 42,
      "max_level": 42
    },
    {
      "pokemon": "poliwag",
      "method": "good-rod",
      "chance": 60,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "poliwag",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "poliwhirl",
      "method": "super-rod",
      "chance": 40,
      "min_level": 20,
      "max_level": 30
    },
    {
      "pokemon": "slowpoke",
      "method": "super-rod",
      "chance": 4,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "slowpoke",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "slowpoke",
      "method": "surf",
      "chance": 60,
      "min_level": 20,
      "max_level": 25
    },
    {
      "pokemon": "slowpoke",
      "method": "surf",
      "chance": 30,
      "min_level": 20,
      "max_level": 25
    },
    {
      "pokemon": "slowpoke",
      "method": "surf",
      "chance": 5,
      "min_level": 25,
      "max_level": 30
    },
    {
      "pokemon": "slowpoke",
      "method": "surf",
      "chance": 4,
      "min_level": 30,
      "max_level": 35
    },
    {
      "pokemon": "slowpoke",
      "method": "surf",
      "chance": 1,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "goldeen",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "magikarp",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 70,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 30,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "gyarados",
      "method": "super-rod",
      "chance": 15,
      "min_level": 15,
      "max_level": 25
    }
  ],
  "kanto-power-plant-area": [
    {
      "pokemon": "pikachu",
      "method": "walk",
      "chance": 10,
      "min_level": 22,
      "max_level": 22
    },
    {
      "pokemon": "pikachu",
      "method": "walk",
      "chance": 10,
      "min_level": 24,
      "max_level": 24
    },
    {
      "pokemon": "pikachu",
      "method": "walk",
      "chance": 4,
      "min_level": 26,
      "max_level": 26
    },
    {
      "pokemon": "pikachu",
      "method": "walk",
      "chance": 1,
      "min_level": 26,
      "max_level": 26
    },
    {
      "pokemon": "magnemite",
      "method": "walk",
      "chance": 20,
      "min_level": 22,
      "max_level": 22
    },
    {
      "pokemon": "magnemite",
      "method": "walk",
      "chance": 10,
      "min_level": 25,
      "max_level": 25
    },
    {
      "pokemon": "magneton",
      "method": "walk",
      "chance": 5,
      "min_level": 31,
      "max_level": 31
    },
    {
      "pokemon": "magneton",
      "method": "walk",
      "chance": 5,
      "min_level": 34,
      "max_level": 34
    },
    {
      "pokemon": "voltorb",
      "method": "walk",
      "chance": 20,
      "min_level": 22,
      "max_level": 22
    },
    {
      "pokemon": "voltorb",
      "method": "walk",
      "chance": 10,
      "min_level": 25,
      "max_level": 25
    },
    {
      "pokemon": "electrode",
      "method": "static",
      "chance": 100,
      "min_level": 34,
      "max_level": 34
    },
    {
      "pokemon": "electrode",
      "method": "static",
      "chance": 100,
      "min_level": 34,
      "max_level": 34
    },
    {
      "pokemon": "electabuzz",
      "method": "walk",
      "chance": 4,
      "min_level": 32,
      "max_level": 32
    },
    {
      "pokemon": "electabuzz",
      "method": "walk",
      "chance": 1,
      "min_level": 35,
      "max_level": 35
    },
    {
      "pokemon": "zapdos",
      "method": "static",
      "chance": 100,
      "min_level": 50,
      "max_level": 50
    }
  ],
  "kanto-victory-road-2-1f": [
    {
      "pokemon": "arbok",
      "method": "walk",
      "chance": 5,
      "min_level": 44,
      "max_level": 44
    },
    {
      "pokemon": "sandslash",
      "method": "walk",
      "chance": 5,
      "min_level": 44,
      "max_level": 44
    },
    {
      "pokemon": "zubat",
      "method": "walk",
      "chance": 10,
      "min_level": 32,
      "max_level": 32
    },
    {
      "pokemon": "golbat",
      "method": "walk",
      "chance": 5,
      "min_level": 44,
      "max_level": 44
    },
    {
      "pokemon": "machop",
      "method": "walk",
      "chance": 20,
      "min_level": 32,
      "max_level": 32
    },
    {
      "pokemon": "machoke",
      "method": "walk",
      "chance": 4,
      "min_level": 44,
      "max_level": 44
    },
    {
      "pokemon": "machoke",
      "method": "walk",
      "chance": 1,
      "min_level": 46,
      "max_level": 46
    },
    {
      "pokemon": "geodude",
      "method": "walk",
      "chance": 20,
      "min_level": 32,
      "max_level": 32
    },
    {
      "pokemon": "onix",
      "method": "walk",
      "chance": 10,
      "min_level": 40,
      "max_level": 40
    },
    {
      "pokemon": "onix",
      "method": "walk",
      "chance": 10,
      "min_level": 43,
      "max_level": 43
    },
    {
      "pokemon": "onix",
      "method": "walk",
      "chance": 10,
      "min_level": 46,
      "max_level": 46
    },
    {
      "pokemon": "marowak",
      "method": "walk",
      "chance": 4,
      "min_level": 44,
      "max_level": 44
    },
    {
      "pokemon": "marowak",
      "method": "walk",
      "chance": 1,
      "min_level": 46,
      "max_level": 46
    }
  ],
  "kanto-victory-road-2-2f": [
    {
      "pokemon": "arbok",
      "method": "walk",
      "chance": 5,
      "min_level": 46,
      "max_level": 46
    },
    {
      "pokemon": "sandslash",
      "method": "walk",
      "chance": 5,
      "min_level": 46,
      "max_level": 46
    },
    {
      "pokemon": "zubat",
      "method": "walk",
      "chance": 10,
      "min_level": 34,
      "max_level": 34
    },
    {
      "pokemon": "golbat",
      "method": "walk",
      "chance": 5,
      "min_level": 46,
      "max_level": 46
    },
    {
      "pokemon": "primeape",
      "method": "walk",
      "chance": 10,
      "min_level": 42,
      "max_level": 42
    },
    {
      "pokemon": "machop",
      "method": "walk",
      "chance": 20,
      "min_level": 34,
      "max_level": 34
    },
    {
      "pokemon": "machoke",
      "method": "walk",
      "chance": 4,
      "min_level": 46,
      "max_level": 46
    },
    {
      "pokemon": "machoke",
      "method": "walk",
      "chance": 1,
      "min_level": 48,
      "max_level": 48
    },
    {
      "pokemon": "geodude",
      "method": "walk",
      "chance": 20,
      "min_level": 34,
      "max_level": 34
    },
    {
      "pokemon": "onix",
      "method": "walk",
      "chance": 10,
      "min_level": 45,
      "max_level": 45
    },
    {
      "pokemon": "onix",
      "method": "walk",
      "chance": 10,
      "min_level": 48,
      "max_level": 48
    },
    {
      "pokemon": "marowak",
      "method": "walk",
      "chance": 4,
      "min_level": 46,
      "max_level": 46
    },
    {
      "pokemon": "marowak",
      "method": "walk",
      "chance": 1,
      "min_level": 48,
      "max_level": 48
    }
  ],
  "kanto-victory-road-2-3f": [
    {
      "pokemon": "arbok",
      "method": "walk",
      "chance": 5,
      "min_level": 44,
      "max_level": 44
    },
    {
      "pokemon": "sandslash",
      "method": "walk",
      "chance": 5,
      "min_level": 44,
      "max_level": 44
    },
    {
      "pokemon": "zubat",
      "method": "walk",
      "chance": 10,
      "min_level": 32,
      "max_level": 32
    },
    {
      "pokemon": "golbat",
      "method": "walk",
      "chance": 5,
      "min_level": 44,
      "max_level": 44
    },
    {
      "pokemon": "machop",
      "method": "walk",
      "chance": 20,
      "min_level": 32,
      "max_level": 32
    },
    {
      "pokemon": "machoke",
      "method": "walk",
      "chance": 4,
      "min_level": 44,
      "max_level": 44
    },
    {
      "pokemon": "machoke",
      "method": "walk",
      "chance": 1,
      "min_level": 46,
      "max_level": 46
    },
    {
      "pokemon": "geodude",
      "method": "walk",
      "chance": 20,
      "min_level": 32,
      "max_level": 32
    },
    {
      "pokemon": "onix",
      "method": "walk",
      "chance": 10,
      "min_level": 40,
      "max_level": 40
    },
    {
      "pokemon": "onix",
      "method": "walk",
      "chance": 10,
      "min_level": 43,
      "max_level": 43
    },
    {
      "pokemon": "onix",
      "method": "walk",
      "chance": 10,
      "min_level": 46,
      "max_level": 46
    },
    {
      "pokemon": "marowak",
      "method": "walk",
      "chance": 4,
      "min_level": 44,
      "max_level": 44
    },
    {
      "pokemon": "marowak",
      "method": "walk",
      "chance": 1,
      "min_level": 46,
      "max_level": 46
    }
  ],
  "pokemon-tower-3f": [
    {
      "pokemon": "gastly",
      "method": "walk",
      "chance": 20,
      "min_level": 15,
      "max_level": 15
    },
    {
      "pokemon": "gastly",
      "method": "walk",
      "chance": 20,
      "min_level": 16,
      "max_level": 16
    },
    {
      "pokemon": "gastly",
      "method": "walk",
      "chance": 10,
      "min_level": 17,
      "max_level": 17
    },
    {
      "pokemon": "gastly",
      "method": "walk",
      "chance": 10,
      "min_level": 13,
      "max_level": 13
    },
    {
      "pokemon": "gastly",
      "method": "walk",
      "chance": 10,
      "min_level": 14,
      "max_level": 14
    },
    {
      "pokemon": "gastly",
      "method": "walk",
      "chance": 10,
      "min_level": 18,
      "max_level": 18
    },
    {
      "pokemon": "gastly",
      "method": "walk",
      "chance": 5,
      "min_level": 19,
      "max_level": 19
    },
    {
      "pokemon": "gastly",
      "method": "walk",
      "chance": 4,
      "min_level": 17,
      "max_level": 17
    },
    {
      "pokemon": "gastly",
      "method": "walk",
      "chance": 1,
      "min_level": 17,
      "max_level": 17
    },
    {
      "pokemon": "haunter",
      "method": "walk",
      "chance": 1,
      "min_level": 20,
      "max_level": 20
    },
    {
      "pokemon": "cubone",
      "method": "walk",
      "chance": 5,
      "min_level": 15,
      "max_level": 15
    },
    {
      "pokemon": "cubone",
      "method": "walk",
      "chance": 4,
      "min_level": 17,
      "max_level": 17
    }
  ],
  "pokemon-tower-4f": [
    {
      "pokemon": "gastly",
      "method": "walk",
      "chance": 20,
      "min_level": 15,
      "max_level": 15
    },
    {
      "pokemon": "gastly",
      "method": "walk",
      "chance": 20,
      "min_level": 16,
      "max_level": 16
    },
    {
      "pokemon": "gastly",
      "method": "walk",
      "chance": 10,
      "min_level": 17,
      "max_level": 17
    },
    {
      "pokemon": "gastly",
      "method": "walk",
      "chance": 10,
      "min_level": 13,
      "max_level": 13
    },
    {
      "pokemon": "gastly",
      "method": "walk",
      "chance": 10,
      "min_level": 14,
      "max_level": 14
    },
    {
      "pokemon": "gastly",
      "method": "walk",
      "chance": 10,
      "min_level": 18,
      "max_level": 18
    },
    {
      "pokemon": "gastly",
      "method": "walk",
      "chance": 4,
      "min_level": 17,
      "max_level": 17
    },
    {
      "pokemon": "gastly",
      "method": "walk",
      "chance": 1,
      "min_level": 17,
      "max_level": 17
    },
    {
      "pokemon": "gastly",
      "method": "walk",
      "chance": 1,
      "min_level": 19,
      "max_level": 19
    },
    {
      "pokemon": "haunter",
      "method": "walk",
      "chance": 5,
      "min_level": 20,
      "max_level": 20
    },
    {
      "pokemon": "cubone",
      "method": "walk",
      "chance": 5,
      "min_level": 15,
      "max_level": 15
    },
    {
      "pokemon": "cubone",
      "method": "walk",
      "chance": 4,
      "min_level": 17,
      "max_level": 17
    }
  ],
  "pokemon-tower-5f": [
    {
      "pokemon": "gastly",
      "method": "walk",
      "chance": 20,
      "min_level": 15,
      "max_level": 15
    },
    {
      "pokemon": "gastly",
      "method": "walk",
      "chance": 20,
      "min_level": 16,
      "max_level": 16
    },
    {
      "pokemon": "gastly",
      "method": "walk",
      "chance": 10,
      "min_level": 17,
      "max_level": 17
    },
    {
      "pokemon": "gastly",
      "method": "walk",
      "chance": 10,
      "min_level": 13,
      "max_level": 13
    },
    {
      "pokemon": "gastly",
      "method": "walk",
      "chance": 10,
      "min_level": 14,
      "max_level": 14
    },
    {
      "pokemon": "gastly",
      "method": "walk",
      "chance": 10,
      "min_level": 18,
      "max_level": 18
    },
    {
      "pokemon": "gastly",
      "method": "walk",
      "chance": 4,
      "min_level": 17,
      "max_level": 17
    },
    {
      "pokemon": "gastly",
      "method": "walk",
      "chance": 1,
      "min_level": 17,
      "max_level": 17
    },
    {
      "pokemon": "gastly",
      "method": "walk",
      "chance": 1,
      "min_level": 19,
      "max_level": 19
    },
    {
      "pokemon": "haunter",
      "method": "walk",
      "chance": 5,
      "min_level": 20,
      "max_level": 20
    },
    {
      "pokemon": "cubone",
      "method": "walk",
      "chance": 5,
      "min_level": 15,
      "max_level": 15
    },
    {
      "pokemon": "cubone",
      "method": "walk",
      "chance": 4,
      "min_level": 17,
      "max_level": 17
    }
  ],
  "pokemon-tower-6f": [
    {
      "pokemon": "gastly",
      "method": "walk",
      "chance": 20,
      "min_level": 16,
      "max_level": 16
    },
    {
      "pokemon": "gastly",
      "method": "walk",
      "chance": 20,
      "min_level": 17,
      "max_level": 17
    },
    {
      "pokemon": "gastly",
      "method": "walk",
      "chance": 10,
      "min_level": 18,
      "max_level": 18
    },
    {
      "pokemon": "gastly",
      "method": "walk",
      "chance": 10,
      "min_level": 14,
      "max_level": 14
    },
    {
      "pokemon": "gastly",
      "method": "walk",
      "chance": 10,
      "min_level": 15,
      "max_level": 15
    },
    {
      "pokemon": "gastly",
      "method": "walk",
      "chance": 10,
      "min_level": 19,
      "max_level": 19
    },
    {
      "pokemon": "gastly",
      "method": "walk",
      "chance": 4,
      "min_level": 18,
      "max_level": 18
    },
    {
      "pokemon": "gastly",
      "method": "walk",
      "chance": 1,
      "min_level": 18,
      "max_level": 18
    },
    {
      "pokemon": "haunter",
      "method": "walk",
      "chance": 5,
      "min_level": 21,
      "max_level": 21
    },
    {
      "pokemon": "haunter",
      "method": "walk",
      "chance": 1,
      "min_level": 23,
      "max_level": 23
    },
    {
      "pokemon": "cubone",
      "method": "walk",
      "chance": 5,
      "min_level": 17,
      "max_level": 17
    },
    {
      "pokemon": "cubone",
      "method": "walk",
      "chance": 4,
      "min_level": 19,
      "max_level": 19
    }
  ],
  "pokemon-tower-7f": [
    {
      "pokemon": "gastly",
      "method": "walk",
      "chance": 20,
      "min_level": 16,
      "max_level": 16
    },
    {
      "pokemon": "gastly",
      "method": "walk",
      "chance": 20,
      "min_level": 17,
      "max_level": 17
    },
    {
      "pokemon": "gastly",
      "method": "walk",
      "chance": 10,
      "min_level": 18,
      "max_level": 18
    },
    {
      "pokemon": "gastly",
      "method": "walk",
      "chance": 10,
      "min_level": 15,
      "max_level": 15
    },
    {
      "pokemon": "gastly",
      "method": "walk",
      "chance": 10,
      "min_level": 19,
      "max_level": 19
    },
    {
      "pokemon": "gastly",
      "method": "walk",
      "chance": 4,
      "min_level": 18,
      "max_level": 18
    },
    {
      "pokemon": "gastly",
      "method": "walk",
      "chance": 1,
      "min_level": 18,
      "max_level": 18
    },
    {
      "pokemon": "haunter",
      "method": "walk",
      "chance": 10,
      "min_level": 23,
      "max_level": 23
    },
    {
      "pokemon": "haunter",
      "method": "walk",
      "chance": 4,
      "min_level": 23,
      "max_level": 23
    },
    {
      "pokemon": "haunter",
      "method": "walk",
      "chance": 1,
      "min_level": 25,
      "max_level": 25
    },
    {
      "pokemon": "cubone",
      "method": "walk",
      "chance": 5,
      "min_level": 17,
      "max_level": 17
    },
    {
      "pokemon": "cubone",
      "method": "walk",
      "chance": 5,
      "min_level": 19,
      "max_level": 19
    }
  ],
  "pokemon-mansion-1f": [
    {
      "pokemon": "rattata",
      "method": "walk",
      "chance": 10,
      "min_level": 28,
      "max_level": 28
    },
    {
      "pokemon": "rattata",
      "method": "walk",
      "chance": 4,
      "min_level": 26,
      "max_level": 26
    },
    {
      "pokemon": "rattata",
      "method": "walk",
      "chance": 1,
      "min_level": 26,
      "max_level": 26
    },
    {
      "pokemon": "raticate",
      "method": "walk",
      "chance": 20,
      "min_level": 32,
      "max_level": 32
    },
    {
      "pokemon": "raticate",
      "method": "walk",
      "chance": 10,
      "min_level": 36,
      "max_level": 36
    },
    {
      "pokemon": "vulpix",
      "method": "walk",
      "chance": 10,
      "min_level": 30,
      "max_level": 30
    },
    {
      "pokemon": "vulpix",
      "method": "walk",
      "chance": 4,
      "min_level": 32,
      "max_level": 32
    },
    {
      "pokemon": "vulpix",
      "method": "walk",
      "chance": 1,
      "min_level": 32,
      "max_level": 32
    },
    {
      "pokemon": "growlithe",
      "method": "walk",
      "chance": 10,
      "min_level": 30,
      "max_level": 30
    },
    {
      "pokemon": "growlithe",
      "method": "walk",
      "chance": 4,
      "min_level": 32,
      "max_level": 32
    },
    {
      "pokemon": "growlithe",
      "method": "walk",
      "chance": 1,
      "min_level": 32,
      "max_level": 32
    },
    {
      "pokemon": "grimer",
      "method": "walk",
      "chance": 5,
      "min_level": 28,
      "max_level": 28
    },
    {
      "pokemon": "muk",
      "method": "walk",
      "chance": 5,
      "min_level": 32,
      "max_level": 32
    },
    {
      "pokemon": "koffing",
      "method": "walk",
      "chance": 20,
      "min_level": 28,
      "max_level": 28
    },
    {
      "pokemon": "koffing",
      "method": "walk",
      "chance": 10,
      "min_level": 30,
      "max_level": 30
    },
    {
      "pokemon": "weezing",
      "method": "walk",
      "chance": 5,
      "min_level": 32,
      "max_level": 32
    }
  ],
  "pokemon-mansion-2f": [
    {
      "pokemon": "rattata",
      "method": "walk",
      "chance": 10,
      "min_level": 28,
      "max_level": 28
    },
    {
      "pokemon": "rattata",
      "method": "walk",
      "chance": 4,
      "min_level": 26,
      "max_level": 26
    },
    {
      "pokemon": "rattata",
      "method": "walk",
      "chance": 1,
      "min_level": 26,
      "max_level": 26
    },
    {
      "pokemon": "raticate",
      "method": "walk",
      "chance": 20,
      "min_level": 32,
      "max_level": 32
    },
    {
      "pokemon": "raticate",
      "method": "walk",
      "chance": 10,
      "min_level": 36,
      "max_level": 36
    },
    {
      "pokemon": "vulpix",
      "method": "walk",
      "chance": 10,
      "min_level": 30,
      "max_level": 30
    },
    {
      "pokemon": "vulpix",
      "method": "walk",
      "chance": 4,
      "min_level": 32,
      "max_level": 32
    },
    {
      "pokemon": "vulpix",
      "method": "walk",
      "chance": 1,
      "min_level": 32,
      "max_level": 32
    },
    {
      "pokemon": "growlithe",
      "method": "walk",
      "chance": 10,
      "min_level": 30,
      "max_level": 30
    },
    {
      "pokemon": "growlithe",
      "method": "walk",
      "chance": 4,
      "min_level": 32,
      "max_level": 32
    },
    {
      "pokemon": "growlithe",
      "method": "walk",
      "chance": 1,
      "min_level": 32,
      "max_level": 32
    },
    {
      "pokemon": "grimer",
      "method": "walk",
      "chance": 5,
      "min_level": 28,
      "max_level": 28
    },
    {
      "pokemon": "muk",
      "method": "walk",
      "chance": 5,
      "min_level": 32,
      "max_level": 32
    },
    {
      "pokemon": "koffing",
      "method": "walk",
      "chance": 20,
      "min_level": 28,
      "max_level": 28
    },
    {
      "pokemon": "koffing",
      "method": "walk",
      "chance": 10,
      "min_level": 30,
      "max_level": 30
    },
    {
      "pokemon": "weezing",
      "method": "walk",
      "chance": 5,
      "min_level": 32,
      "max_level": 32
    }
  ],
  "pokemon-mansion-3f": [
    {
      "pokemon": "rattata",
      "method": "walk",
      "chance": 10,
      "min_level": 28,
      "max_level": 28
    },
    {
      "pokemon": "rattata",
      "method": "walk",
      "chance": 4,
      "min_level": 26,
      "max_level": 26
    },
    {
      "pokemon": "rattata",
      "method": "walk",
      "chance": 1,
      "min_level": 26,
      "max_level": 26
    },
    {
      "pokemon": "raticate",
      "method": "walk",
      "chance": 20,
      "min_level": 32,
      "max_level": 32
    },
    {
      "pokemon": "raticate",
      "method": "walk",
      "chance": 10,
      "min_level": 36,
      "max_level": 36
    },
    {
      "pokemon": "vulpix",
      "method": "walk",
      "chance": 10,
      "min_level": 30,
      "max_level": 30
    },
    {
      "pokemon": "vulpix",
      "method": "walk",
      "chance": 4,
      "min_level": 32,
      "max_level": 32
    },
    {
      "pokemon": "vulpix",
      "method": "walk",
      "chance": 1,
      "min_level": 32,
      "max_level": 32
    },
    {
      "pokemon": "growlithe",
      "method": "walk",
      "chance": 10,
      "min_level": 30,
      "max_level": 30
    },
    {
      "pokemon": "growlithe",
      "method": "walk",
      "chance": 4,
      "min_level": 32,
      "max_level": 32
    },
    {
      "pokemon": "growlithe",
      "method": "walk",
      "chance": 1,
      "min_level": 32,
      "max_level": 32
    },
    {
      "pokemon": "grimer",
      "method": "walk",
      "chance": 5,
      "min_level": 28,
      "max_level": 28
    },
    {
      "pokemon": "muk",
      "method": "walk",
      "chance": 5,
      "min_level": 32,
      "max_level": 32
    },
    {
      "pokemon": "koffing",
      "method": "walk",
      "chance": 20,
      "min_level": 28,
      "max_level": 28
    },
    {
      "pokemon": "koffing",
      "method": "walk",
      "chance": 10,
      "min_level": 30,
      "max_level": 30
    },
    {
      "pokemon": "weezing",
      "method": "walk",
      "chance": 5,
      "min_level": 32,
      "max_level": 32
    }
  ],
  "pokemon-mansion-b1f": [
    {
      "pokemon": "rattata",
      "method": "walk",
      "chance": 4,
      "min_level": 26,
      "max_level": 26
    },
    {
      "pokemon": "rattata",
      "method": "walk",
      "chance": 1,
      "min_level": 26,
      "max_level": 26
    },
    {
      "pokemon": "raticate",
      "method": "walk",
      "chance": 20,
      "min_level": 34,
      "max_level": 34
    },
    {
      "pokemon": "raticate",
      "method": "walk",
      "chance": 10,
      "min_level": 38,
      "max_level": 38
    },
    {
      "pokemon": "vulpix",
      "method": "walk",
      "chance": 10,
      "min_level": 30,
      "max_level": 30
    },
    {
      "pokemon": "vulpix",
      "method": "walk",
      "chance": 4,
      "min_level": 32,
      "max_level": 32
    },
    {
      "pokemon": "vulpix",
      "method": "walk",
      "chance": 1,
      "min_level": 32,
      "max_level": 32
    },
    {
      "pokemon": "growlithe",
      "method": "walk",
      "chance": 10,
      "min_level": 30,
      "max_level": 30
    },
    {
      "pokemon": "growlithe",
      "method": "walk",
      "chance": 4,
      "min_level": 32,
      "max_level": 32
    },
    {
      "pokemon": "growlithe",
      "method": "walk",
      "chance": 1,
      "min_level": 32,
      "max_level": 32
    },
    {
      "pokemon": "grimer",
      "method": "walk",
      "chance": 5,
      "min_level": 28,
      "max_level": 28
    },
    {
      "pokemon": "muk",
      "method": "walk",
      "chance": 5,
      "min_level": 34,
      "max_level": 34
    },
    {
      "pokemon": "koffing",
      "method": "walk",
      "chance": 20,
      "min_level": 28,
      "max_level": 28
    },
    {
      "pokemon": "koffing",
      "method": "walk",
      "chance": 10,
      "min_level": 30,
      "max_level": 30
    },
    {
      "pokemon": "weezing",
      "method": "walk",
      "chance": 5,
      "min_level": 34,
      "max_level": 34
    },
    {
      "pokemon": "ditto",
      "method": "walk",
      "chance": 10,
      "min_level": 30,
      "max_level": 30
    }
  ],
  "kanto-safari-zone-middle": [
    {
      "pokemon": "nidoran-f",
      "method": "walk",
      "chance": 20,
      "min_level": 22,
      "max_level": 22
    },
    {
      "pokemon": "nidorina",
      "method": "walk",
      "chance": 5,
      "min_level": 31,
      "max_level": 31
    },
    {
      "pokemon": "nidoran-m",
      "method": "walk",
      "chance": 20,
      "min_level": 22,
      "max_level": 22
    },
    {
      "pokemon": "nidorino",
      "method": "walk",
      "chance": 10,
      "min_level": 31,
      "max_level": 31
    },
    {
      "pokemon": "parasect",
      "method": "walk",
      "chance": 5,
      "min_level": 30,
      "max_level": 30
    },
    {
      "pokemon": "venonat",
      "method": "walk",
      "chance": 10,
      "min_level": 22,
      "max_level": 22
    },
    {
      "pokemon": "venonat",
      "method": "walk",
      "chance": 4,
      "min_level": 22,
      "max_level": 22
    },
    {
      "pokemon": "venonat",
      "method": "walk",
      "chance": 1,
      "min_level": 22,
      "max_level": 22
    },
    {
      "pokemon": "psyduck",
      "method": "super-rod",
      "chance": 4,
      "min_level": 15,
      "max_level": 35
    },
    {
      "pokemon": "psyduck",
      "method": "surf",
      "chance": 60,
      "min_level": 20,
      "max_level": 25
    },
    {
      "pokemon": "psyduck",
      "method": "surf",
      "chance": 30,
      "min_level": 20,
      "max_level": 25
    },
    {
      "pokemon": "psyduck",
      "method": "surf",
      "chance": 5,
      "min_level": 25,
      "max_level": 30
    },
    {
      "pokemon": "psyduck",
      "method": "surf",
      "chance": 4,
      "min_level": 30,
      "max_level": 35
    },
    {
      "pokemon": "psyduck",
      "method": "surf",
      "chance": 1,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "poliwag",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "slowpoke",
      "method": "super-rod",
      "chance": 4,
      "min_level": 15,
      "max_level": 35
    },
    {
      "pokemon": "slowpoke",
      "method": "surf",
      "chance": 60,
      "min_level": 20,
      "max_level": 25
    },
    {
      "pokemon": "slowpoke",
      "method": "surf",
      "chance": 30,
      "min_level": 20,
      "max_level": 25
    },
    {
      "pokemon": "slowpoke",
      "method": "surf",
      "chance": 5,
      "min_level": 25,
      "max_level": 30
    },
    {
      "pokemon": "slowpoke",
      "method": "surf",
      "chance": 4,
      "min_level": 30,
      "max_level": 35
    },
    {
      "pokemon": "slowpoke",
      "method": "surf",
      "chance": 1,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "exeggcute",
      "method": "walk",
      "chance": 10,
      "min_level": 24,
      "max_level": 24
    },
    {
      "pokemon": "exeggcute",
      "method": "walk",
      "chance": 10,
      "min_level": 25,
      "max_level": 25
    },
    {
      "pokemon": "rhyhorn",
      "method": "walk",
      "chance": 20,
      "min_level": 25,
      "max_level": 25
    },
    {
      "pokemon": "chansey",
      "method": "walk",
      "chance": 1,
      "min_level": 23,
      "max_level": 23
    },
    {
      "pokemon": "goldeen",
      "method": "good-rod",
      "chance": 60,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "goldeen",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "seaking",
      "method": "super-rod",
      "chance": 40,
      "min_level": 20,
      "max_level": 30
    },
    {
      "pokemon": "scyther",
      "method": "walk",
      "chance": 4,
      "min_level": 23,
      "max_level": 23
    },
    {
      "pokemon": "pinsir",
      "method": "walk",
      "chance": 4,
      "min_level": 23,
      "max_level": 23
    },
    {
      "pokemon": "magikarp",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 70,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 30,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "dratini",
      "method": "super-rod",
      "chance": 15,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "dragonair",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    }
  ],
  "kanto-safari-zone-area-1-east": [
    {
      "pokemon": "nidoran-f",
      "method": "walk",
      "chance": 5,
      "min_level": 24,
      "max_level": 24
    },
    {
      "pokemon": "nidorina",
      "method": "walk",
      "chance": 10,
      "min_level": 33,
      "max_level": 33
    },
    {
      "pokemon": "nidoran-m",
      "method": "walk",
      "chance": 20,
      "min_level": 24,
      "max_level": 24
    },
    {
      "pokemon": "nidorino",
      "method": "walk",
      "chance": 10,
      "min_level": 33,
      "max_level": 33
    },
    {
      "pokemon": "paras",
      "method": "walk",
      "chance": 10,
      "min_level": 22,
      "max_level": 22
    },
    {
      "pokemon": "paras",
      "method": "walk",
      "chance": 4,
      "min_level": 22,
      "max_level": 22
    },
    {
      "pokemon": "paras",
      "method": "walk",
      "chance": 1,
      "min_level": 22,
      "max_level": 22
    },
    {
      "pokemon": "parasect",
      "method": "walk",
      "chance": 5,
      "min_level": 25,
      "max_level": 25
    },
    {
      "pokemon": "psyduck",
      "method": "super-rod",
      "chance": 4,
      "min_level": 15,
      "max_level": 35
    },
    {
      "pokemon": "psyduck",
      "method": "surf",
      "chance": 60,
      "min_level": 20,
      "max_level": 25
    },
    {
      "pokemon": "psyduck",
      "method": "surf",
      "chance": 30,
      "min_level": 20,
      "max_level": 25
    },
    {
      "pokemon": "psyduck",
      "method": "surf",
      "chance": 5,
      "min_level": 25,
      "max_level": 30
    },
    {
      "pokemon": "psyduck",
      "method": "surf",
      "chance": 4,
      "min_level": 30,
      "max_level": 35
    },
    {
      "pokemon": "psyduck",
      "method": "surf",
      "chance": 1,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "poliwag",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "slowpoke",
      "method": "super-rod",
      "chance": 4,
      "min_level": 15,
      "max_level": 35
    },
    {
      "pokemon": "slowpoke",
      "method": "surf",
      "chance": 60,
      "min_level": 20,
      "max_level": 25
    },
    {
      "pokemon": "slowpoke",
      "method": "surf",
      "chance": 30,
      "min_level": 20,
      "max_level": 25
    },
    {
      "pokemon": "slowpoke",
      "method": "surf",
      "chance": 5,
      "min_level": 25,
      "max_level": 30
    },
    {
      "pokemon": "slowpoke",
      "method": "surf",
      "chance": 4,
      "min_level": 30,
      "max_level": 35
    },
    {
      "pokemon": "slowpoke",
      "method": "surf",
      "chance": 1,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "doduo",
      "method": "walk",
      "chance": 20,
      "min_level": 26,
      "max_level": 26
    },
    {
      "pokemon": "exeggcute",
      "method": "walk",
      "chance": 10,
      "min_level": 23,
      "max_level": 23
    },
    {
      "pokemon": "exeggcute",
      "method": "walk",
      "chance": 10,
      "min_level": 25,
      "max_level": 25
    },
    {
      "pokemon": "kangaskhan",
      "method": "walk",
      "chance": 4,
      "min_level": 25,
      "max_level": 25
    },
    {
      "pokemon": "goldeen",
      "method": "good-rod",
      "chance": 60,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "goldeen",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "seaking",
      "method": "super-rod",
      "chance": 40,
      "min_level": 20,
      "max_level": 30
    },
    {
      "pokemon": "scyther",
      "method": "walk",
      "chance": 1,
      "min_level": 28,
      "max_level": 28
    },
    {
      "pokemon": "pinsir",
      "method": "walk",
      "chance": 1,
      "min_level": 28,
      "max_level": 28
    },
    {
      "pokemon": "magikarp",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 70,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 30,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "dratini",
      "method": "super-rod",
      "chance": 15,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "dragonair",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    }
  ],
  "kanto-safari-zone-area-2-north": [
    {
      "pokemon": "nidoran-f",
      "method": "walk",
      "chance": 20,
      "min_level": 30,
      "max_level": 30
    },
    {
      "pokemon": "nidorina",
      "method": "walk",
      "chance": 5,
      "min_level": 30,
      "max_level": 30
    },
    {
      "pokemon": "nidoran-m",
      "method": "walk",
      "chance": 20,
      "min_level": 30,
      "max_level": 30
    },
    {
      "pokemon": "nidorino",
      "method": "walk",
      "chance": 10,
      "min_level": 30,
      "max_level": 30
    },
    {
      "pokemon": "paras",
      "method": "walk",
      "chance": 10,
      "min_level": 23,
      "max_level": 23
    },
    {
      "pokemon": "paras",
      "method": "walk",
      "chance": 4,
      "min_level": 23,
      "max_level": 23
    },
    {
      "pokemon": "paras",
      "method": "walk",
      "chance": 1,
      "min_level": 23,
      "max_level": 23
    },
    {
      "pokemon": "venomoth",
      "method": "walk",
      "chance": 5,
      "min_level": 32,
      "max_level": 32
    },
    {
      "pokemon": "psyduck",
      "method": "super-rod",
      "chance": 4,
      "min_level": 15,
      "max_level": 35
    },
    {
      "pokemon": "psyduck",
      "method": "surf",
      "chance": 60,
      "min_level": 20,
      "max_level": 25
    },
    {
      "pokemon": "psyduck",
      "method": "surf",
      "chance": 30,
      "min_level": 20,
      "max_level": 25
    },
    {
      "pokemon": "psyduck",
      "method": "surf",
      "chance": 5,
      "min_level": 25,
      "max_level": 30
    },
    {
      "pokemon": "psyduck",
      "method": "surf",
      "chance": 4,
      "min_level": 30,
      "max_level": 35
    },
    {
      "pokemon": "psyduck",
      "method": "surf",
      "chance": 1,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "poliwag",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "slowpoke",
      "method": "super-rod",
      "chance": 4,
      "min_level": 15,
      "max_level": 35
    },
    {
      "pokemon": "slowpoke",
      "method": "surf",
      "chance": 60,
      "min_level": 20,
      "max_level": 25
    },
    {
      "pokemon": "slowpoke",
      "method": "surf",
      "chance": 30,
      "min_level": 20,
      "max_level": 25
    },
    {
      "pokemon": "slowpoke",
      "method": "surf",
      "chance": 5,
      "min_level": 25,
      "max_level": 30
    },
    {
      "pokemon": "slowpoke",
      "method": "surf",
      "chance": 4,
      "min_level": 30,
      "max_level": 35
    },
    {
      "pokemon": "slowpoke",
      "method": "surf",
      "chance": 1,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "exeggcute",
      "method": "walk",
      "chance": 10,
      "min_level": 25,
      "max_level": 25
    },
    {
      "pokemon": "exeggcute",
      "method": "walk",
      "chance": 10,
      "min_level": 27,
      "max_level": 27
    },
    {
      "pokemon": "rhyhorn",
      "method": "walk",
      "chance": 20,
      "min_level": 26,
      "max_level": 26
    },
    {
      "pokemon": "chansey",
      "method": "walk",
      "chance": 4,
      "min_level": 26,
      "max_level": 26
    },
    {
      "pokemon": "goldeen",
      "method": "good-rod",
      "chance": 60,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "goldeen",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "seaking",
      "method": "super-rod",
      "chance": 40,
      "min_level": 20,
      "max_level": 30
    },
    {
      "pokemon": "tauros",
      "method": "walk",
      "chance": 1,
      "min_level": 28,
      "max_level": 28
    },
    {
      "pokemon": "magikarp",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 70,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 30,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "dratini",
      "method": "super-rod",
      "chance": 15,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "dragonair",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    }
  ],
  "kanto-safari-zone-area-3-west": [
    {
      "pokemon": "nidoran-f",
      "method": "walk",
      "chance": 5,
      "min_level": 30,
      "max_level": 30
    },
    {
      "pokemon": "nidorina",
      "method": "walk",
      "chance": 10,
      "min_level": 30,
      "max_level": 30
    },
    {
      "pokemon": "nidoran-m",
      "method": "walk",
      "chance": 20,
      "min_level": 22,
      "max_level": 22
    },
    {
      "pokemon": "nidorino",
      "method": "walk",
      "chance": 10,
      "min_level": 30,
      "max_level": 30
    },
    {
      "pokemon": "venonat",
      "method": "walk",
      "chance": 10,
      "min_level": 23,
      "max_level": 23
    },
    {
      "pokemon": "venonat",
      "method": "walk",
      "chance": 4,
      "min_level": 23,
      "max_level": 23
    },
    {
      "pokemon": "venonat",
      "method": "walk",
      "chance": 1,
      "min_level": 23,
      "max_level": 23
    },
    {
      "pokemon": "venomoth",
      "method": "walk",
      "chance": 5,
      "min_level": 32,
      "max_level": 32
    },
    {
      "pokemon": "psyduck",
      "method": "super-rod",
      "chance": 4,
      "min_level": 15,
      "max_level": 35
    },
    {
      "pokemon": "psyduck",
      "method": "surf",
      "chance": 60,
      "min_level": 20,
      "max_level": 25
    },
    {
      "pokemon": "psyduck",
      "method": "surf",
      "chance": 30,
      "min_level": 20,
      "max_level": 25
    },
    {
      "pokemon": "psyduck",
      "method": "surf",
      "chance": 5,
      "min_level": 25,
      "max_level": 30
    },
    {
      "pokemon": "psyduck",
      "method": "surf",
      "chance": 4,
      "min_level": 30,
      "max_level": 35
    },
    {
      "pokemon": "psyduck",
      "method": "surf",
      "chance": 1,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "poliwag",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "slowpoke",
      "method": "super-rod",
      "chance": 4,
      "min_level": 15,
      "max_level": 35
    },
    {
      "pokemon": "slowpoke",
      "method": "surf",
      "chance": 60,
      "min_level": 20,
      "max_level": 25
    },
    {
      "pokemon": "slowpoke",
      "method": "surf",
      "chance": 30,
      "min_level": 20,
      "max_level": 25
    },
    {
      "pokemon": "slowpoke",
      "method": "surf",
      "chance": 5,
      "min_level": 25,
      "max_level": 30
    },
    {
      "pokemon": "slowpoke",
      "method": "surf",
      "chance": 4,
      "min_level": 30,
      "max_level": 35
    },
    {
      "pokemon": "slowpoke",
      "method": "surf",
      "chance": 1,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "doduo",
      "method": "walk",
      "chance": 20,
      "min_level": 26,
      "max_level": 26
    },
    {
      "pokemon": "exeggcute",
      "method": "walk",
      "chance": 10,
      "min_level": 25,
      "max_level": 25
    },
    {
      "pokemon": "exeggcute",
      "method": "walk",
      "chance": 10,
      "min_level": 27,
      "max_level": 27
    },
    {
      "pokemon": "kangaskhan",
      "method": "walk",
      "chance": 1,
      "min_level": 28,
      "max_level": 28
    },
    {
      "pokemon": "goldeen",
      "method": "good-rod",
      "chance": 60,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "goldeen",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "seaking",
      "method": "super-rod",
      "chance": 40,
      "min_level": 20,
      "max_level": 30
    },
    {
      "pokemon": "tauros",
      "method": "walk",
      "chance": 4,
      "min_level": 25,
      "max_level": 25
    },
    {
      "pokemon": "magikarp",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 70,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 30,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "dratini",
      "method": "super-rod",
      "chance": 15,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "dragonair",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    }
  ],
  "saffron-city-fighting-dojo": [
    {
      "pokemon": "hitmonlee",
      "method": "gift",
      "chance": 100,
      "min_level": 25,
      "max_level": 25
    },
    {
      "pokemon": "hitmonchan",
      "method": "gift",
      "chance": 100,
      "min_level": 25,
      "max_level": 25
    }
  ],
  "saffron-city-silph-co-7f": [
    {
      "pokemon": "lapras",
      "method": "gift",
      "chance": 100,
      "min_level": 25,
      "max_level": 25
    }
  ],
  "ss-anne-area": [
    {
      "pokemon": "psyduck",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 60,
      "min_level": 5,
      "max_level": 10
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 30,
      "min_level": 10,
      "max_level": 20
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 5,
      "min_level": 20,
      "max_level": 30
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 4,
      "min_level": 30,
      "max_level": 35
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 1,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "slowpoke",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "shellder",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "krabby",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "horsea",
      "method": "good-rod",
      "chance": 60,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "horsea",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "horsea",
      "method": "super-rod",
      "chance": 4,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "staryu",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "magikarp",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 70,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 30,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "gyarados",
      "method": "super-rod",
      "chance": 15,
      "min_level": 15,
      "max_level": 25
    }
  ],
  "mt-ember-area": [
    {
      "pokemon": "spearow",
      "method": "walk",
      "chance": 10,
      "min_level": 32,
      "max_level": 32
    },
    {
      "pokemon": "spearow",
      "method": "walk",
      "chance": 4,
      "min_level": 30,
      "max_level": 30
    },
    {
      "pokemon": "spearow",
      "method": "walk",
      "chance": 1,
      "min_level": 30,
      "max_level": 30
    },
    {
      "pokemon": "fearow",
      "method": "walk",
      "chance": 20,
      "min_level": 38,
      "max_level": 38
    },
    {
      "pokemon": "fearow",
      "method": "walk",
      "chance": 5,
      "min_level": 40,
      "max_level": 40
    },
    {
      "pokemon": "machop",
      "method": "walk",
      "chance": 10,
      "min_level": 35,
      "max_level": 35
    },
    {
      "pokemon": "geodude",
      "method": "walk",
      "chance": 10,
      "min_level": 33,
      "max_level": 33
    },
    {
      "pokemon": "geodude",
      "method": "rock-smash",
      "chance": 60,
      "min_level": 5,
      "max_level": 20
    },
    {
      "pokemon": "geodude",
      "method": "rock-smash",
      "chance": 30,
      "min_level": 10,
      "max_level": 20
    },
    {
      "pokemon": "geodude",
      "method": "rock-smash",
      "chance": 5,
      "min_level": 15,
      "max_level": 30
    },
    {
      "pokemon": "graveler",
      "method": "rock-smash",
      "chance": 4,
      "min_level": 25,
      "max_level": 40
    },
    {
      "pokemon": "graveler",
      "method": "rock-smash",
      "chance": 1,
      "min_level": 30,
      "max_level": 40
    },
    {
      "pokemon": "ponyta",
      "method": "walk",
      "chance": 20,
      "min_level": 30,
      "max_level": 30
    },
    {
      "pokemon": "ponyta",
      "method": "walk",
      "chance": 10,
      "min_level": 33,
      "max_level": 33
    },
    {
      "pokemon": "ponyta",
      "method": "walk",
      "chance": 5,
      "min_level": 36,
      "max_level": 36
    },
    {
      "pokemon": "rapidash",
      "method": "walk",
      "chance": 4,
      "min_level": 39,
      "max_level": 39
    },
    {
      "pokemon": "rapidash",
      "method": "walk",
      "chance": 1,
      "min_level": 42,
      "max_level": 42
    },
    {
      "pokemon": "magmar",
      "method": "walk",
      "chance": 4,
      "min_level": 38,
      "max_level": 38
    },
    {
      "pokemon": "magmar",
      "method": "walk",
      "chance": 1,
      "min_level": 40,
      "max_level": 40
    }
  ],
  "mt-ember-cave": [
    {
      "pokemon": "machop",
      "method": "walk",
      "chance": 20,
      "min_level": 35,
      "max_level": 35
    },
    {
      "pokemon": "machop",
      "method": "walk",
      "chance": 10,
      "min_level": 31,
      "max_level": 31
    },
    {
      "pokemon": "machop",
      "method": "walk",
      "chance": 10,
      "min_level": 33,
      "max_level": 33
    },
    {
      "pokemon": "machop",
      "method": "walk",
      "chance": 5,
      "min_level": 37,
      "max_level": 37
    },
    {
      "pokemon": "machop",
      "method": "walk",
      "chance": 4,
      "min_level": 39,
      "max_level": 39
    },
    {
      "pokemon": "machop",
      "method": "walk",
      "chance": 1,
      "min_level": 39,
      "max_level": 39
    },
    {
      "pokemon": "geodude",
      "method": "walk",
      "chance": 20,
      "min_level": 33,
      "max_level": 33
    },
    {
      "pokemon": "geodude",
      "method": "walk",
      "chance": 10,
      "min_level": 29,
      "max_level": 29
    },
    {
      "pokemon": "geodude",
      "method": "walk",
      "chance": 10,
      "min_level": 31,
      "max_level": 31
    },
    {
      "pokemon": "geodude",
      "method": "walk",
      "chance": 5,
      "min_level": 35,
      "max_level": 35
    },
    {
      "pokemon": "geodude",
      "method": "walk",
      "chance": 4,
      "min_level": 37,
      "max_level": 37
    },
    {
      "pokemon": "geodude",
      "method": "walk",
      "chance": 1,
      "min_level": 37,
      "max_level": 37
    }
  ],
  "mt-ember-inside": [
    {
      "pokemon": "machop",
      "method": "walk",
      "chance": 20,
      "min_level": 36,
      "max_level": 36
    },
    {
      "pokemon": "machop",
      "method": "walk",
      "chance": 10,
      "min_level": 32,
      "max_level": 32
    },
    {
      "pokemon": "machop",
      "method": "walk",
      "chance": 10,
      "min_level": 34,
      "max_level": 34
    },
    {
      "pokemon": "machoke",
      "method": "walk",
      "chance": 5,
      "min_level": 38,
      "max_level": 38
    },
    {
      "pokemon": "machoke",
      "method": "walk",
      "chance": 5,
      "min_level": 38,
      "max_level": 38
    },
    {
      "pokemon": "machoke",
      "method": "walk",
      "chance": 4,
      "min_level": 40,
      "max_level": 40
    },
    {
      "pokemon": "machoke",
      "method": "walk",
      "chance": 4,
      "min_level": 40,
      "max_level": 40
    },
    {
      "pokemon": "machoke",
      "method": "walk",
      "chance": 1,
      "min_level": 40,
      "max_level": 40
    },
    {
      "pokemon": "machoke",
      "method": "walk",
      "chance": 1,
      "min_level": 40,
      "max_level": 40
    },
    {
      "pokemon": "geodude",
      "method": "walk",
      "chance": 20,
      "min_level": 34,
      "max_level": 34
    },
    {
      "pokemon": "geodude",
      "method": "walk",
      "chance": 10,
      "min_level": 30,
      "max_level": 30
    },
    {
      "pokemon": "geodude",
      "method": "walk",
      "chance": 10,
      "min_level": 32,
      "max_level": 32
    },
    {
      "pokemon": "geodude",
      "method": "rock-smash",
      "chance": 60,
      "min_level": 5,
      "max_level": 20
    },
    {
      "pokemon": "geodude",
      "method": "rock-smash",
      "chance": 30,
      "min_level": 10,
      "max_level": 20
    },
    {
      "pokemon": "geodude",
      "method": "rock-smash",
      "chance": 5,
      "min_level": 15,
      "max_level": 30
    },
    {
      "pokemon": "graveler",
      "method": "rock-smash",
      "chance": 4,
      "min_level": 25,
      "max_level": 40
    },
    {
      "pokemon": "graveler",
      "method": "rock-smash",
      "chance": 1,
      "min_level": 30,
      "max_level": 40
    }
  ],
  "mt-ember-1f-cave-behind-team-rocket": [
    {
      "pokemon": "machop",
      "method": "walk",
      "chance": 20,
      "min_level": 38,
      "max_level": 38
    },
    {
      "pokemon": "machop",
      "method": "walk",
      "chance": 10,
      "min_level": 34,
      "max_level": 34
    },
    {
      "pokemon": "machop",
      "method": "walk",
      "chance": 10,
      "min_level": 36,
      "max_level": 36
    },
    {
      "pokemon": "machoke",
      "method": "walk",
      "chance": 5,
      "min_level": 40,
      "max_level": 40
    },
    {
      "pokemon": "machoke",
      "method": "walk",
      "chance": 4,
      "min_level": 42,
      "max_level": 42
    },
    {
      "pokemon": "machoke",
      "method": "walk",
      "chance": 1,
      "min_level": 42,
      "max_level": 42
    },
    {
      "pokemon": "geodude",
      "method": "walk",
      "chance": 20,
      "min_level": 36,
      "max_level": 36
    },
    {
      "pokemon": "geodude",
      "method": "walk",
      "chance": 10,
      "min_level": 32,
      "max_level": 32
    },
    {
      "pokemon": "geodude",
      "method": "walk",
      "chance": 10,
      "min_level": 34,
      "max_level": 34
    },
    {
      "pokemon": "geodude",
      "method": "walk",
      "chance": 5,
      "min_level": 38,
      "max_level": 38
    },
    {
      "pokemon": "geodude",
      "method": "walk",
      "chance": 4,
      "min_level": 40,
      "max_level": 40
    },
    {
      "pokemon": "geodude",
      "method": "walk",
      "chance": 1,
      "min_level": 40,
      "max_level": 40
    },
    {
      "pokemon": "geodude",
      "method": "rock-smash",
      "chance": 60,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "geodude",
      "method": "rock-smash",
      "chance": 4,
      "min_level": 30,
      "max_level": 40
    },
    {
      "pokemon": "geodude",
      "method": "rock-smash",
      "chance": 1,
      "min_level": 30,
      "max_level": 40
    },
    {
      "pokemon": "graveler",
      "method": "rock-smash",
      "chance": 30,
      "min_level": 30,
      "max_level": 45
    },
    {
      "pokemon": "graveler",
      "method": "rock-smash",
      "chance": 5,
      "min_level": 35,
      "max_level": 50
    }
  ],
  "mt-ember-b1f": [
    {
      "pokemon": "geodude",
      "method": "walk",
      "chance": 20,
      "min_level": 38,
      "max_level": 38
    },
    {
      "pokemon": "geodude",
      "method": "walk",
      "chance": 20,
      "min_level": 36,
      "max_level": 36
    },
    {
      "pokemon": "geodude",
      "method": "walk",
      "chance": 10,
      "min_level": 34,
      "max_level": 34
    },
    {
      "pokemon": "geodude",
      "method": "walk",
      "chance": 10,
      "min_level": 40,
      "max_level": 40
    },
    {
      "pokemon": "geodude",
      "method": "walk",
      "chance": 5,
      "min_level": 42,
      "max_level": 42
    },
    {
      "pokemon": "geodude",
      "method": "walk",
      "chance": 4,
      "min_level": 42,
      "max_level": 42
    },
    {
      "pokemon": "geodude",
      "method": "walk",
      "chance": 1,
      "min_level": 42,
      "max_level": 42
    },
    {
      "pokemon": "geodude",
      "method": "rock-smash",
      "chance": 60,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "geodude",
      "method": "rock-smash",
      "chance": 4,
      "min_level": 30,
      "max_level": 40
    },
    {
      "pokemon": "geodude",
      "method": "rock-smash",
      "chance": 1,
      "min_level": 30,
      "max_level": 40
    },
    {
      "pokemon": "graveler",
      "method": "rock-smash",
      "chance": 30,
      "min_level": 30,
      "max_level": 45
    },
    {
      "pokemon": "graveler",
      "method": "rock-smash",
      "chance": 5,
      "min_level": 35,
      "max_level": 50
    }
  ],
  "mt-ember-b2f": [
    {
      "pokemon": "geodude",
      "method": "walk",
      "chance": 20,
      "min_level": 40,
      "max_level": 40
    },
    {
      "pokemon": "geodude",
      "method": "walk",
      "chance": 10,
      "min_level": 42,
      "max_level": 42
    },
    {
      "pokemon": "geodude",
      "method": "walk",
      "chance": 5,
      "min_level": 44,
      "max_level": 44
    },
    {
      "pokemon": "geodude",
      "method": "walk",
      "chance": 4,
      "min_level": 44,
      "max_level": 44
    },
    {
      "pokemon": "geodude",
      "method": "walk",
      "chance": 1,
      "min_level": 44,
      "max_level": 44
    },
    {
      "pokemon": "geodude",
      "method": "rock-smash",
      "chance": 60,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "geodude",
      "method": "rock-smash",
      "chance": 4,
      "min_level": 30,
      "max_level": 40
    },
    {
      "pokemon": "geodude",
      "method": "rock-smash",
      "chance": 1,
      "min_level": 30,
      "max_level": 40
    },
    {
      "pokemon": "graveler",
      "method": "rock-smash",
      "chance": 30,
      "min_level": 30,
      "max_level": 45
    },
    {
      "pokemon": "graveler",
      "method": "rock-smash",
      "chance": 5,
      "min_level": 35,
      "max_level": 50
    }
  ],
  "mt-ember-summit": [
    {
      "pokemon": "geodude",
      "method": "rock-smash",
      "chance": 60,
      "min_level": 5,
      "max_level": 20
    },
    {
      "pokemon": "geodude",
      "method": "rock-smash",
      "chance": 30,
      "min_level": 10,
      "max_level": 20
    },
    {
      "pokemon": "geodude",
      "method": "rock-smash",
      "chance": 5,
      "min_level": 15,
      "max_level": 30
    },
    {
      "pokemon": "graveler",
      "method": "rock-smash",
      "chance": 4,
      "min_level": 25,
      "max_level": 40
    },
    {
      "pokemon": "graveler",
      "method": "rock-smash",
      "chance": 1,
      "min_level": 30,
      "max_level": 40
    },
    {
      "pokemon": "moltres",
      "method": "static",
      "chance": 100,
      "min_level": 50,
      "max_level": 50
    },
    {
      "pokemon": "moltres",
      "method": "static",
      "chance": 100,
      "min_level": 50,
      "max_level": 50
    }
  ],
  "berry-forest-area": [
    {
      "pokemon": "pidgey",
      "method": "walk",
      "chance": 10,
      "min_level": 32,
      "max_level": 32
    },
    {
      "pokemon": "pidgeotto",
      "method": "walk",
      "chance": 20,
      "min_level": 37,
      "max_level": 37
    },
    {
      "pokemon": "oddish",
      "method": "walk",
      "chance": 10,
      "min_level": 30,
      "max_level": 30
    },
    {
      "pokemon": "gloom",
      "method": "walk",
      "chance": 20,
      "min_level": 35,
      "max_level": 35
    },
    {
      "pokemon": "venonat",
      "method": "walk",
      "chance": 10,
      "min_level": 34,
      "max_level": 34
    },
    {
      "pokemon": "venomoth",
      "method": "walk",
      "chance": 4,
      "min_level": 37,
      "max_level": 37
    },
    {
      "pokemon": "venomoth",
      "method": "walk",
      "chance": 1,
      "min_level": 40,
      "max_level": 40
    },
    {
      "pokemon": "psyduck",
      "method": "walk",
      "chance": 5,
      "min_level": 31,
      "max_level": 31
    },
    {
      "pokemon": "psyduck",
      "method": "super-rod",
      "chance": 4,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "psyduck",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "psyduck",
      "method": "surf",
      "chance": 60,
      "min_level": 5,
      "max_level": 20
    },
    {
      "pokemon": "psyduck",
      "method": "surf",
      "chance": 30,
      "min_level": 20,
      "max_level": 35
    },
    {
      "pokemon": "psyduck",
      "method": "surf",
      "chance": 5,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "golduck",
      "method": "surf",
      "chance": 4,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "golduck",
      "method": "surf",
      "chance": 1,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "poliwag",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "bellsprout",
      "method": "walk",
      "chance": 10,
      "min_level": 30,
      "max_level": 30
    },
    {
      "pokemon": "weepinbell",
      "method": "walk",
      "chance": 20,
      "min_level": 35,
      "max_level": 35
    },
    {
      "pokemon": "slowpoke",
      "method": "walk",
      "chance": 5,
      "min_level": 31,
      "max_level": 31
    },
    {
      "pokemon": "slowpoke",
      "method": "super-rod",
      "chance": 4,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "slowpoke",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "slowpoke",
      "method": "surf",
      "chance": 60,
      "min_level": 5,
      "max_level": 20
    },
    {
      "pokemon": "slowpoke",
      "method": "surf",
      "chance": 30,
      "min_level": 20,
      "max_level": 35
    },
    {
      "pokemon": "slowpoke",
      "method": "surf",
      "chance": 5,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "slowbro",
      "method": "surf",
      "chance": 4,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "slowbro",
      "method": "surf",
      "chance": 1,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "drowzee",
      "method": "walk",
      "chance": 10,
      "min_level": 34,
      "max_level": 34
    },
    {
      "pokemon": "hypno",
      "method": "walk",
      "chance": 4,
      "min_level": 37,
      "max_level": 37
    },
    {
      "pokemon": "hypno",
      "method": "walk",
      "chance": 1,
      "min_level": 40,
      "max_level": 40
    },
    {
      "pokemon": "hypno",
      "method": "static",
      "chance": 100,
      "min_level": 30,
      "max_level": 30
    },
    {
      "pokemon": "exeggcute",
      "method": "walk",
      "chance": 5,
      "min_level": 35,
      "max_level": 35
    },
    {
      "pokemon": "goldeen",
      "method": "good-rod",
      "chance": 60,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "goldeen",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "seaking",
      "method": "super-rod",
      "chance": 40,
      "min_level": 20,
      "max_level": 30
    },
    {
      "pokemon": "magikarp",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 70,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 30,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "gyarados",
      "method": "super-rod",
      "chance": 15,
      "min_level": 15,
      "max_level": 25
    }
  ],
  "icefall-cave-entrance": [
    {
      "pokemon": "zubat",
      "method": "walk",
      "chance": 10,
      "min_level": 40,
      "max_level": 40
    },
    {
      "pokemon": "golbat",
      "method": "walk",
      "chance": 20,
      "min_level": 45,
      "max_level": 45
    },
    {
      "pokemon": "golbat",
      "method": "walk",
      "chance": 4,
      "min_level": 48,
      "max_level": 48
    },
    {
      "pokemon": "golbat",
      "method": "walk",
      "chance": 1,
      "min_level": 48,
      "max_level": 48
    },
    {
      "pokemon": "psyduck",
      "method": "walk",
      "chance": 5,
      "min_level": 41,
      "max_level": 41
    },
    {
      "pokemon": "psyduck",
      "method": "super-rod",
      "chance": 4,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "psyduck",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "psyduck",
      "method": "surf",
      "chance": 30,
      "min_level": 5,
      "max_level": 35
    },
    {
      "pokemon": "poliwag",
      "method": "good-rod",
      "chance": 60,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "poliwag",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "poliwhirl",
      "method": "super-rod",
      "chance": 40,
      "min_level": 20,
      "max_level": 30
    },
    {
      "pokemon": "slowpoke",
      "method": "walk",
      "chance": 5,
      "min_level": 41,
      "max_level": 41
    },
    {
      "pokemon": "slowpoke",
      "method": "super-rod",
      "chance": 4,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "slowpoke",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "slowpoke",
      "method": "surf",
      "chance": 30,
      "min_level": 5,
      "max_level": 35
    },
    {
      "pokemon": "seel",
      "method": "walk",
      "chance": 20,
      "min_level": 43,
      "max_level": 43
    },
    {
      "pokemon": "seel",
      "method": "walk",
      "chance": 10,
      "min_level": 45,
      "max_level": 45
    },
    {
      "pokemon": "seel",
      "method": "walk",
      "chance": 10,
      "min_level": 47,
      "max_level": 47
    },
    {
      "pokemon": "seel",
      "method": "surf",
      "chance": 60,
      "min_level": 5,
      "max_level": 35
    },
    {
      "pokemon": "dewgong",
      "method": "walk",
      "chance": 10,
      "min_level": 49,
      "max_level": 49
    },
    {
      "pokemon": "dewgong",
      "method": "walk",
      "chance": 5,
      "min_level": 51,
      "max_level": 51
    },
    {
      "pokemon": "dewgong",
      "method": "walk",
      "chance": 4,
      "min_level": 53,
      "max_level": 53
    },
    {
      "pokemon": "dewgong",
      "method": "walk",
      "chance": 1,
      "min_level": 53,
      "max_level": 53
    },
    {
      "pokemon": "dewgong",
      "method": "surf",
      "chance": 5,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "goldeen",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "magikarp",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 70,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 30,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "gyarados",
      "method": "super-rod",
      "chance": 15,
      "min_level": 15,
      "max_level": 25
    }
  ],
  "icefall-cave-1f": [
    {
      "pokemon": "zubat",
      "method": "walk",
      "chance": 10,
      "min_level": 40,
      "max_level": 40
    },
    {
      "pokemon": "golbat",
      "method": "walk",
      "chance": 20,
      "min_level": 45,
      "max_level": 45
    },
    {
      "pokemon": "golbat",
      "method": "walk",
      "chance": 4,
      "min_level": 48,
      "max_level": 48
    },
    {
      "pokemon": "golbat",
      "method": "walk",
      "chance": 1,
      "min_level": 48,
      "max_level": 48
    },
    {
      "pokemon": "seel",
      "method": "walk",
      "chance": 10,
      "min_level": 45,
      "max_level": 45
    }
  ],
  "icefall-cave-b1f": [
    {
      "pokemon": "zubat",
      "method": "walk",
      "chance": 10,
      "min_level": 40,
      "max_level": 40
    },
    {
      "pokemon": "golbat",
      "method": "walk",
      "chance": 20,
      "min_level": 45,
      "max_level": 45
    },
    {
      "pokemon": "golbat",
      "method": "walk",
      "chance": 4,
      "min_level": 48,
      "max_level": 48
    },
    {
      "pokemon": "golbat",
      "method": "walk",
      "chance": 1,
      "min_level": 48,
      "max_level": 48
    },
    {
      "pokemon": "seel",
      "method": "walk",
      "chance": 10,
      "min_level": 45,
      "max_level": 45
    }
  ],
  "icefall-cave-waterfall": [
    {
      "pokemon": "zubat",
      "method": "walk",
      "chance": 10,
      "min_level": 40,
      "max_level": 40
    },
    {
      "pokemon": "golbat",
      "method": "walk",
      "chance": 20,
      "min_level": 45,
      "max_level": 45
    },
    {
      "pokemon": "golbat",
      "method": "walk",
      "chance": 4,
      "min_level": 48,
      "max_level": 48
    },
    {
      "pokemon": "golbat",
      "method": "walk",
      "chance": 1,
      "min_level": 48,
      "max_level": 48
    },
    {
      "pokemon": "psyduck",
      "method": "walk",
      "chance": 5,
      "min_level": 41,
      "max_level": 41
    },
    {
      "pokemon": "psyduck",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 60,
      "min_level": 5,
      "max_level": 20
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 30,
      "min_level": 20,
      "max_level": 35
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 5,
      "min_level": 35,
      "max_level": 45
    },
    {
      "pokemon": "tentacruel",
      "method": "surf",
      "chance": 4,
      "min_level": 35,
      "max_level": 45
    },
    {
      "pokemon": "slowpoke",
      "method": "walk",
      "chance": 5,
      "min_level": 41,
      "max_level": 41
    },
    {
      "pokemon": "slowpoke",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "seel",
      "method": "walk",
      "chance": 20,
      "min_level": 43,
      "max_level": 43
    },
    {
      "pokemon": "seel",
      "method": "walk",
      "chance": 10,
      "min_level": 45,
      "max_level": 45
    },
    {
      "pokemon": "seel",
      "method": "walk",
      "chance": 10,
      "min_level": 47,
      "max_level": 47
    },
    {
      "pokemon": "dewgong",
      "method": "walk",
      "chance": 10,
      "min_level": 49,
      "max_level": 49
    },
    {
      "pokemon": "dewgong",
      "method": "walk",
      "chance": 5,
      "min_level": 51,
      "max_level": 51
    },
    {
      "pokemon": "dewgong",
      "method": "walk",
      "chance": 4,
      "min_level": 53,
      "max_level": 53
    },
    {
      "pokemon": "dewgong",
      "method": "walk",
      "chance": 1,
      "min_level": 53,
      "max_level": 53
    },
    {
      "pokemon": "shellder",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "krabby",
      "method": "good-rod",
      "chance": 60,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "krabby",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "krabby",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "kingler",
      "method": "super-rod",
      "chance": 4,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "horsea",
      "method": "good-rod",
      "chance": 60,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "horsea",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "horsea",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "seadra",
      "method": "super-rod",
      "chance": 4,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "staryu",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "magikarp",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 70,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 30,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "gyarados",
      "method": "super-rod",
      "chance": 15,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "lapras",
      "method": "surf",
      "chance": 1,
      "min_level": 30,
      "max_level": 45
    }
  ],
  "pattern-bush-area": [
    {
      "pokemon": "caterpie",
      "method": "walk",
      "chance": 10,
      "min_level": 6,
      "max_level": 6
    },
    {
      "pokemon": "metapod",
      "method": "walk",
      "chance": 5,
      "min_level": 9,
      "max_level": 9
    },
    {
      "pokemon": "weedle",
      "method": "walk",
      "chance": 10,
      "min_level": 6,
      "max_level": 6
    },
    {
      "pokemon": "kakuna",
      "method": "walk",
      "chance": 20,
      "min_level": 9,
      "max_level": 9
    }
  ],
  "lost-cave-room-1": [
    {
      "pokemon": "zubat",
      "method": "walk",
      "chance": 20,
      "min_level": 37,
      "max_level": 37
    },
    {
      "pokemon": "golbat",
      "method": "walk",
      "chance": 10,
      "min_level": 41,
      "max_level": 41
    },
    {
      "pokemon": "golbat",
      "method": "walk",
      "chance": 10,
      "min_level": 43,
      "max_level": 43
    },
    {
      "pokemon": "gastly",
      "method": "walk",
      "chance": 20,
      "min_level": 40,
      "max_level": 40
    },
    {
      "pokemon": "gastly",
      "method": "walk",
      "chance": 5,
      "min_level": 38,
      "max_level": 38
    },
    {
      "pokemon": "haunter",
      "method": "walk",
      "chance": 10,
      "min_level": 44,
      "max_level": 44
    },
    {
      "pokemon": "haunter",
      "method": "walk",
      "chance": 10,
      "min_level": 46,
      "max_level": 46
    },
    {
      "pokemon": "haunter",
      "method": "walk",
      "chance": 5,
      "min_level": 48,
      "max_level": 48
    },
    {
      "pokemon": "haunter",
      "method": "walk",
      "chance": 4,
      "min_level": 50,
      "max_level": 50
    },
    {
      "pokemon": "haunter",
      "method": "walk",
      "chance": 1,
      "min_level": 52,
      "max_level": 52
    }
  ],
  "lost-cave-room-2": [
    {
      "pokemon": "zubat",
      "method": "walk",
      "chance": 20,
      "min_level": 37,
      "max_level": 37
    },
    {
      "pokemon": "golbat",
      "method": "walk",
      "chance": 10,
      "min_level": 41,
      "max_level": 41
    },
    {
      "pokemon": "golbat",
      "method": "walk",
      "chance": 10,
      "min_level": 43,
      "max_level": 43
    },
    {
      "pokemon": "gastly",
      "method": "walk",
      "chance": 20,
      "min_level": 40,
      "max_level": 40
    },
    {
      "pokemon": "gastly",
      "method": "walk",
      "chance": 5,
      "min_level": 38,
      "max_level": 38
    },
    {
      "pokemon": "haunter",
      "method": "walk",
      "chance": 10,
      "min_level": 44,
      "max_level": 44
    },
    {
      "pokemon": "haunter",
      "method": "walk",
      "chance": 10,
      "min_level": 46,
      "max_level": 46
    },
    {
      "pokemon": "haunter",
      "method": "walk",
      "chance": 5,
      "min_level": 48,
      "max_level": 48
    },
    {
      "pokemon": "haunter",
      "method": "walk",
      "chance": 4,
      "min_level": 50,
      "max_level": 50
    },
    {
      "pokemon": "haunter",
      "method": "walk",
      "chance": 1,
      "min_level": 52,
      "max_level": 52
    }
  ],
  "lost-cave-room-3": [
    {
      "pokemon": "zubat",
      "method": "walk",
      "chance": 20,
      "min_level": 37,
      "max_level": 37
    },
    {
      "pokemon": "golbat",
      "method": "walk",
      "chance": 10,
      "min_level": 41,
      "max_level": 41
    },
    {
      "pokemon": "golbat",
      "method": "walk",
      "chance": 10,
      "min_level": 43,
      "max_level": 43
    },
    {
      "pokemon": "gastly",
      "method": "walk",
      "chance": 20,
      "min_level": 40,
      "max_level": 40
    },
    {
      "pokemon": "gastly",
      "method": "walk",
      "chance": 5,
      "min_level": 38,
      "max_level": 38
    },
    {
      "pokemon": "haunter",
      "method": "walk",
      "chance": 10,
      "min_level": 44,
      "max_level": 44
    },
    {
      "pokemon": "haunter",
      "method": "walk",
      "chance": 10,
      "min_level": 46,
      "max_level": 46
    },
    {
      "pokemon": "haunter",
      "method": "walk",
      "chance": 5,
      "min_level": 48,
      "max_level": 48
    },
    {
      "pokemon": "haunter",
      "method": "walk",
      "chance": 4,
      "min_level": 50,
      "max_level": 50
    },
    {
      "pokemon": "haunter",
      "method": "walk",
      "chance": 1,
      "min_level": 52,
      "max_level": 52
    }
  ],
  "lost-cave-room-4": [
    {
      "pokemon": "zubat",
      "method": "walk",
      "chance": 20,
      "min_level": 37,
      "max_level": 37
    },
    {
      "pokemon": "golbat",
      "method": "walk",
      "chance": 10,
      "min_level": 41,
      "max_level": 41
    },
    {
      "pokemon": "golbat",
      "method": "walk",
      "chance": 10,
      "min_level": 43,
      "max_level": 43
    },
    {
      "pokemon": "gastly",
      "method": "walk",
      "chance": 20,
      "min_level": 40,
      "max_level": 40
    },
    {
      "pokemon": "gastly",
      "method": "walk",
      "chance": 5,
      "min_level": 38,
      "max_level": 38
    },
    {
      "pokemon": "haunter",
      "method": "walk",
      "chance": 10,
      "min_level": 44,
      "max_level": 44
    },
    {
      "pokemon": "haunter",
      "method": "walk",
      "chance": 10,
      "min_level": 46,
      "max_level": 46
    },
    {
      "pokemon": "haunter",
      "method": "walk",
      "chance": 5,
      "min_level": 48,
      "max_level": 48
    },
    {
      "pokemon": "haunter",
      "method": "walk",
      "chance": 4,
      "min_level": 50,
      "max_level": 50
    },
    {
      "pokemon": "haunter",
      "method": "walk",
      "chance": 1,
      "min_level": 52,
      "max_level": 52
    }
  ],
  "lost-cave-room-5": [
    {
      "pokemon": "zubat",
      "method": "walk",
      "chance": 20,
      "min_level": 37,
      "max_level": 37
    },
    {
      "pokemon": "golbat",
      "method": "walk",
      "chance": 10,
      "min_level": 41,
      "max_level": 41
    },
    {
      "pokemon": "golbat",
      "method": "walk",
      "chance": 10,
      "min_level": 43,
      "max_level": 43
    },
    {
      "pokemon": "gastly",
      "method": "walk",
      "chance": 20,
      "min_level": 40,
      "max_level": 40
    },
    {
      "pokemon": "gastly",
      "method": "walk",
      "chance": 5,
      "min_level": 38,
      "max_level": 38
    },
    {
      "pokemon": "haunter",
      "method": "walk",
      "chance": 10,
      "min_level": 44,
      "max_level": 44
    },
    {
      "pokemon": "haunter",
      "method": "walk",
      "chance": 10,
      "min_level": 46,
      "max_level": 46
    },
    {
      "pokemon": "haunter",
      "method": "walk",
      "chance": 5,
      "min_level": 48,
      "max_level": 48
    },
    {
      "pokemon": "haunter",
      "method": "walk",
      "chance": 4,
      "min_level": 50,
      "max_level": 50
    },
    {
      "pokemon": "haunter",
      "method": "walk",
      "chance": 1,
      "min_level": 52,
      "max_level": 52
    }
  ],
  "lost-cave-room-6": [
    {
      "pokemon": "zubat",
      "method": "walk",
      "chance": 20,
      "min_level": 37,
      "max_level": 37
    },
    {
      "pokemon": "golbat",
      "method": "walk",
      "chance": 10,
      "min_level": 41,
      "max_level": 41
    },
    {
      "pokemon": "golbat",
      "method": "walk",
      "chance": 10,
      "min_level": 43,
      "max_level": 43
    },
    {
      "pokemon": "gastly",
      "method": "walk",
      "chance": 20,
      "min_level": 40,
      "max_level": 40
    },
    {
      "pokemon": "gastly",
      "method": "walk",
      "chance": 5,
      "min_level": 38,
      "max_level": 38
    },
    {
      "pokemon": "haunter",
      "method": "walk",
      "chance": 10,
      "min_level": 44,
      "max_level": 44
    },
    {
      "pokemon": "haunter",
      "method": "walk",
      "chance": 10,
      "min_level": 46,
      "max_level": 46
    },
    {
      "pokemon": "haunter",
      "method": "walk",
      "chance": 5,
      "min_level": 48,
      "max_level": 48
    },
    {
      "pokemon": "haunter",
      "method": "walk",
      "chance": 4,
      "min_level": 50,
      "max_level": 50
    },
    {
      "pokemon": "haunter",
      "method": "walk",
      "chance": 1,
      "min_level": 52,
      "max_level": 52
    }
  ],
  "lost-cave-room-7": [
    {
      "pokemon": "zubat",
      "method": "walk",
      "chance": 20,
      "min_level": 37,
      "max_level": 37
    },
    {
      "pokemon": "golbat",
      "method": "walk",
      "chance": 10,
      "min_level": 41,
      "max_level": 41
    },
    {
      "pokemon": "golbat",
      "method": "walk",
      "chance": 10,
      "min_level": 43,
      "max_level": 43
    },
    {
      "pokemon": "gastly",
      "method": "walk",
      "chance": 20,
      "min_level": 40,
      "max_level": 40
    },
    {
      "pokemon": "gastly",
      "method": "walk",
      "chance": 5,
      "min_level": 38,
      "max_level": 38
    },
    {
      "pokemon": "haunter",
      "method": "walk",
      "chance": 10,
      "min_level": 44,
      "max_level": 44
    },
    {
      "pokemon": "haunter",
      "method": "walk",
      "chance": 10,
      "min_level": 46,
      "max_level": 46
    },
    {
      "pokemon": "haunter",
      "method": "walk",
      "chance": 5,
      "min_level": 48,
      "max_level": 48
    },
    {
      "pokemon": "haunter",
      "method": "walk",
      "chance": 4,
      "min_level": 50,
      "max_level": 50
    },
    {
      "pokemon": "haunter",
      "method": "walk",
      "chance": 1,
      "min_level": 52,
      "max_level": 52
    }
  ],
  "lost-cave-room-8": [
    {
      "pokemon": "zubat",
      "method": "walk",
      "chance": 20,
      "min_level": 37,
      "max_level": 37
    },
    {
      "pokemon": "golbat",
      "method": "walk",
      "chance": 10,
      "min_level": 41,
      "max_level": 41
    },
    {
      "pokemon": "golbat",
      "method": "walk",
      "chance": 10,
      "min_level": 43,
      "max_level": 43
    },
    {
      "pokemon": "gastly",
      "method": "walk",
      "chance": 20,
      "min_level": 40,
      "max_level": 40
    },
    {
      "pokemon": "gastly",
      "method": "walk",
      "chance": 5,
      "min_level": 38,
      "max_level": 38
    },
    {
      "pokemon": "haunter",
      "method": "walk",
      "chance": 10,
      "min_level": 44,
      "max_level": 44
    },
    {
      "pokemon": "haunter",
      "method": "walk",
      "chance": 10,
      "min_level": 46,
      "max_level": 46
    },
    {
      "pokemon": "haunter",
      "method": "walk",
      "chance": 5,
      "min_level": 48,
      "max_level": 48
    },
    {
      "pokemon": "haunter",
      "method": "walk",
      "chance": 4,
      "min_level": 50,
      "max_level": 50
    },
    {
      "pokemon": "haunter",
      "method": "walk",
      "chance": 1,
      "min_level": 52,
      "max_level": 52
    }
  ],
  "lost-cave-room-9": [
    {
      "pokemon": "zubat",
      "method": "walk",
      "chance": 20,
      "min_level": 37,
      "max_level": 37
    },
    {
      "pokemon": "golbat",
      "method": "walk",
      "chance": 10,
      "min_level": 41,
      "max_level": 41
    },
    {
      "pokemon": "golbat",
      "method": "walk",
      "chance": 10,
      "min_level": 43,
      "max_level": 43
    },
    {
      "pokemon": "gastly",
      "method": "walk",
      "chance": 20,
      "min_level": 40,
      "max_level": 40
    },
    {
      "pokemon": "gastly",
      "method": "walk",
      "chance": 5,
      "min_level": 38,
      "max_level": 38
    },
    {
      "pokemon": "haunter",
      "method": "walk",
      "chance": 10,
      "min_level": 44,
      "max_level": 44
    },
    {
      "pokemon": "haunter",
      "method": "walk",
      "chance": 10,
      "min_level": 46,
      "max_level": 46
    },
    {
      "pokemon": "haunter",
      "method": "walk",
      "chance": 5,
      "min_level": 48,
      "max_level": 48
    },
    {
      "pokemon": "haunter",
      "method": "walk",
      "chance": 4,
      "min_level": 50,
      "max_level": 50
    },
    {
      "pokemon": "haunter",
      "method": "walk",
      "chance": 1,
      "min_level": 52,
      "max_level": 52
    }
  ],
  "lost-cave-room-10": [
    {
      "pokemon": "zubat",
      "method": "walk",
      "chance": 20,
      "min_level": 37,
      "max_level": 37
    },
    {
      "pokemon": "golbat",
      "method": "walk",
      "chance": 10,
      "min_level": 41,
      "max_level": 41
    },
    {
      "pokemon": "golbat",
      "method": "walk",
      "chance": 10,
      "min_level": 43,
      "max_level": 43
    },
    {
      "pokemon": "gastly",
      "method": "walk",
      "chance": 20,
      "min_level": 40,
      "max_level": 40
    },
    {
      "pokemon": "gastly",
      "method": "walk",
      "chance": 5,
      "min_level": 38,
      "max_level": 38
    },
    {
      "pokemon": "haunter",
      "method": "walk",
      "chance": 10,
      "min_level": 44,
      "max_level": 44
    },
    {
      "pokemon": "haunter",
      "method": "walk",
      "chance": 10,
      "min_level": 46,
      "max_level": 46
    },
    {
      "pokemon": "haunter",
      "method": "walk",
      "chance": 5,
      "min_level": 48,
      "max_level": 48
    },
    {
      "pokemon": "haunter",
      "method": "walk",
      "chance": 4,
      "min_level": 50,
      "max_level": 50
    },
    {
      "pokemon": "haunter",
      "method": "walk",
      "chance": 1,
      "min_level": 52,
      "max_level": 52
    }
  ],
  "lost-cave-item-rooms": [
    {
      "pokemon": "zubat",
      "method": "walk",
      "chance": 20,
      "min_level": 37,
      "max_level": 37
    },
    {
      "pokemon": "golbat",
      "method": "walk",
      "chance": 10,
      "min_level": 41,
      "max_level": 41
    },
    {
      "pokemon": "gastly",
      "method": "walk",
      "chance": 20,
      "min_level": 40,
      "max_level": 40
    },
    {
      "pokemon": "haunter",
      "method": "walk",
      "chance": 10,
      "min_level": 44,
      "max_level": 44
    },
    {
      "pokemon": "haunter",
      "method": "walk",
      "chance": 10,
      "min_level": 46,
      "max_level": 46
    },
    {
      "pokemon": "haunter",
      "method": "walk",
      "chance": 5,
      "min_level": 48,
      "max_level": 48
    },
    {
      "pokemon": "haunter",
      "method": "walk",
      "chance": 4,
      "min_level": 50,
      "max_level": 50
    },
    {
      "pokemon": "haunter",
      "method": "walk",
      "chance": 1,
      "min_level": 52,
      "max_level": 52
    }
  ],
  "kindle-road-area": [
    {
      "pokemon": "spearow",
      "method": "walk",
      "chance": 20,
      "min_level": 32,
      "max_level": 32
    },
    {
      "pokemon": "spearow",
      "method": "walk",
      "chance": 5,
      "min_level": 30,
      "max_level": 30
    },
    {
      "pokemon": "fearow",
      "method": "walk",
      "chance": 10,
      "min_level": 36,
      "max_level": 36
    },
    {
      "pokemon": "meowth",
      "method": "walk",
      "chance": 10,
      "min_level": 31,
      "max_level": 31
    },
    {
      "pokemon": "persian",
      "method": "walk",
      "chance": 4,
      "min_level": 37,
      "max_level": 37
    },
    {
      "pokemon": "persian",
      "method": "walk",
      "chance": 1,
      "min_level": 40,
      "max_level": 40
    },
    {
      "pokemon": "psyduck",
      "method": "walk",
      "chance": 5,
      "min_level": 34,
      "max_level": 34
    },
    {
      "pokemon": "psyduck",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 60,
      "min_level": 5,
      "max_level": 20
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 30,
      "min_level": 20,
      "max_level": 35
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 5,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "tentacruel",
      "method": "surf",
      "chance": 4,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "tentacruel",
      "method": "surf",
      "chance": 1,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "geodude",
      "method": "walk",
      "chance": 10,
      "min_level": 31,
      "max_level": 31
    },
    {
      "pokemon": "geodude",
      "method": "rock-smash",
      "chance": 60,
      "min_level": 5,
      "max_level": 20
    },
    {
      "pokemon": "geodude",
      "method": "rock-smash",
      "chance": 30,
      "min_level": 10,
      "max_level": 20
    },
    {
      "pokemon": "geodude",
      "method": "rock-smash",
      "chance": 5,
      "min_level": 15,
      "max_level": 30
    },
    {
      "pokemon": "graveler",
      "method": "rock-smash",
      "chance": 4,
      "min_level": 25,
      "max_level": 40
    },
    {
      "pokemon": "graveler",
      "method": "rock-smash",
      "chance": 1,
      "min_level": 30,
      "max_level": 40
    },
    {
      "pokemon": "ponyta",
      "method": "walk",
      "chance": 20,
      "min_level": 34,
      "max_level": 34
    },
    {
      "pokemon": "ponyta",
      "method": "walk",
      "chance": 10,
      "min_level": 31,
      "max_level": 31
    },
    {
      "pokemon": "rapidash",
      "method": "walk",
      "chance": 4,
      "min_level": 37,
      "max_level": 37
    },
    {
      "pokemon": "rapidash",
      "method": "walk",
      "chance": 1,
      "min_level": 40,
      "max_level": 40
    },
    {
      "pokemon": "slowpoke",
      "method": "walk",
      "chance": 5,
      "min_level": 34,
      "max_level": 34
    },
    {
      "pokemon": "slowpoke",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "krabby",
      "method": "good-rod",
      "chance": 60,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "krabby",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "krabby",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "krabby",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "kingler",
      "method": "super-rod",
      "chance": 4,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "horsea",
      "method": "good-rod",
      "chance": 60,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "horsea",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "horsea",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "horsea",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "seadra",
      "method": "super-rod",
      "chance": 4,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "magikarp",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 70,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 30,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "gyarados",
      "method": "super-rod",
      "chance": 15,
      "min_level": 15,
      "max_level": 25
    }
  ],
  "treasure-beach-area": [
    {
      "pokemon": "spearow",
      "method": "walk",
      "chance": 20,
      "min_level": 32,
      "max_level": 32
    },
    {
      "pokemon": "spearow",
      "method": "walk",
      "chance": 10,
      "min_level": 31,
      "max_level": 31
    },
    {
      "pokemon": "fearow",
      "method": "walk",
      "chance": 10,
      "min_level": 36,
      "max_level": 36
    },
    {
      "pokemon": "fearow",
      "method": "walk",
      "chance": 5,
      "min_level": 38,
      "max_level": 38
    },
    {
      "pokemon": "fearow",
      "method": "walk",
      "chance": 4,
      "min_level": 40,
      "max_level": 40
    },
    {
      "pokemon": "fearow",
      "method": "walk",
      "chance": 1,
      "min_level": 40,
      "max_level": 40
    },
    {
      "pokemon": "meowth",
      "method": "walk",
      "chance": 10,
      "min_level": 31,
      "max_level": 31
    },
    {
      "pokemon": "persian",
      "method": "walk",
      "chance": 4,
      "min_level": 37,
      "max_level": 37
    },
    {
      "pokemon": "persian",
      "method": "walk",
      "chance": 1,
      "min_level": 40,
      "max_level": 40
    },
    {
      "pokemon": "psyduck",
      "method": "walk",
      "chance": 5,
      "min_level": 31,
      "max_level": 31
    },
    {
      "pokemon": "psyduck",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 60,
      "min_level": 5,
      "max_level": 20
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 30,
      "min_level": 20,
      "max_level": 35
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 5,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "tentacruel",
      "method": "surf",
      "chance": 4,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "tentacruel",
      "method": "surf",
      "chance": 1,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "slowpoke",
      "method": "walk",
      "chance": 5,
      "min_level": 31,
      "max_level": 31
    },
    {
      "pokemon": "slowpoke",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "krabby",
      "method": "good-rod",
      "chance": 60,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "krabby",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "krabby",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "krabby",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "kingler",
      "method": "super-rod",
      "chance": 4,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "tangela",
      "method": "walk",
      "chance": 20,
      "min_level": 33,
      "max_level": 33
    },
    {
      "pokemon": "tangela",
      "method": "walk",
      "chance": 10,
      "min_level": 35,
      "max_level": 35
    },
    {
      "pokemon": "horsea",
      "method": "good-rod",
      "chance": 60,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "horsea",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "horsea",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "horsea",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "seadra",
      "method": "super-rod",
      "chance": 4,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "magikarp",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 70,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 30,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "gyarados",
      "method": "super-rod",
      "chance": 15,
      "min_level": 15,
      "max_level": 25
    }
  ],
  "cape-brink-area": [
    {
      "pokemon": "spearow",
      "method": "walk",
      "chance": 20,
      "min_level": 31,
      "max_level": 31
    },
    {
      "pokemon": "fearow",
      "method": "walk",
      "chance": 10,
      "min_level": 36,
      "max_level": 36
    },
    {
      "pokemon": "oddish",
      "method": "walk",
      "chance": 20,
      "min_level": 30,
      "max_level": 30
    },
    {
      "pokemon": "oddish",
      "method": "walk",
      "chance": 10,
      "min_level": 32,
      "max_level": 32
    },
    {
      "pokemon": "gloom",
      "method": "walk",
      "chance": 10,
      "min_level": 36,
      "max_level": 36
    },
    {
      "pokemon": "gloom",
      "method": "walk",
      "chance": 5,
      "min_level": 38,
      "max_level": 38
    },
    {
      "pokemon": "meowth",
      "method": "walk",
      "chance": 10,
      "min_level": 31,
      "max_level": 31
    },
    {
      "pokemon": "persian",
      "method": "walk",
      "chance": 4,
      "min_level": 37,
      "max_level": 37
    },
    {
      "pokemon": "persian",
      "method": "walk",
      "chance": 1,
      "min_level": 40,
      "max_level": 40
    },
    {
      "pokemon": "psyduck",
      "method": "walk",
      "chance": 5,
      "min_level": 31,
      "max_level": 31
    },
    {
      "pokemon": "psyduck",
      "method": "super-rod",
      "chance": 4,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "psyduck",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "psyduck",
      "method": "surf",
      "chance": 60,
      "min_level": 5,
      "max_level": 20
    },
    {
      "pokemon": "psyduck",
      "method": "surf",
      "chance": 30,
      "min_level": 20,
      "max_level": 35
    },
    {
      "pokemon": "psyduck",
      "method": "surf",
      "chance": 5,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "golduck",
      "method": "walk",
      "chance": 4,
      "min_level": 37,
      "max_level": 37
    },
    {
      "pokemon": "golduck",
      "method": "walk",
      "chance": 1,
      "min_level": 40,
      "max_level": 40
    },
    {
      "pokemon": "golduck",
      "method": "surf",
      "chance": 4,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "golduck",
      "method": "surf",
      "chance": 1,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "poliwag",
      "method": "good-rod",
      "chance": 60,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "poliwag",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "poliwhirl",
      "method": "super-rod",
      "chance": 40,
      "min_level": 20,
      "max_level": 30
    },
    {
      "pokemon": "bellsprout",
      "method": "walk",
      "chance": 20,
      "min_level": 30,
      "max_level": 30
    },
    {
      "pokemon": "bellsprout",
      "method": "walk",
      "chance": 10,
      "min_level": 32,
      "max_level": 32
    },
    {
      "pokemon": "weepinbell",
      "method": "walk",
      "chance": 10,
      "min_level": 36,
      "max_level": 36
    },
    {
      "pokemon": "weepinbell",
      "method": "walk",
      "chance": 5,
      "min_level": 38,
      "max_level": 38
    },
    {
      "pokemon": "slowpoke",
      "method": "walk",
      "chance": 5,
      "min_level": 31,
      "max_level": 31
    },
    {
      "pokemon": "slowpoke",
      "method": "super-rod",
      "chance": 4,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "slowpoke",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "slowpoke",
      "method": "surf",
      "chance": 60,
      "min_level": 5,
      "max_level": 20
    },
    {
      "pokemon": "slowpoke",
      "method": "surf",
      "chance": 30,
      "min_level": 20,
      "max_level": 35
    },
    {
      "pokemon": "slowpoke",
      "method": "surf",
      "chance": 5,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "slowbro",
      "method": "walk",
      "chance": 4,
      "min_level": 37,
      "max_level": 37
    },
    {
      "pokemon": "slowbro",
      "method": "walk",
      "chance": 1,
      "min_level": 40,
      "max_level": 40
    },
    {
      "pokemon": "slowbro",
      "method": "surf",
      "chance": 4,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "slowbro",
      "method": "surf",
      "chance": 1,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "goldeen",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "magikarp",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 70,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 30,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "gyarados",
      "method": "super-rod",
      "chance": 15,
      "min_level": 15,
      "max_level": 25
    }
  ],
  "bond-bridge-area": [
    {
      "pokemon": "pidgey",
      "method": "walk",
      "chance": 20,
      "min_level": 32,
      "max_level": 32
    },
    {
      "pokemon": "pidgey",
      "method": "walk",
      "chance": 10,
      "min_level": 29,
      "max_level": 29
    },
    {
      "pokemon": "pidgeotto",
      "method": "walk",
      "chance": 10,
      "min_level": 34,
      "max_level": 34
    },
    {
      "pokemon": "pidgeotto",
      "method": "walk",
      "chance": 4,
      "min_level": 37,
      "max_level": 37
    },
    {
      "pokemon": "pidgeotto",
      "method": "walk",
      "chance": 1,
      "min_level": 40,
      "max_level": 40
    },
    {
      "pokemon": "oddish",
      "method": "walk",
      "chance": 20,
      "min_level": 31,
      "max_level": 31
    },
    {
      "pokemon": "gloom",
      "method": "walk",
      "chance": 10,
      "min_level": 36,
      "max_level": 36
    },
    {
      "pokemon": "venonat",
      "method": "walk",
      "chance": 5,
      "min_level": 34,
      "max_level": 34
    },
    {
      "pokemon": "meowth",
      "method": "walk",
      "chance": 10,
      "min_level": 31,
      "max_level": 31
    },
    {
      "pokemon": "persian",
      "method": "walk",
      "chance": 4,
      "min_level": 37,
      "max_level": 37
    },
    {
      "pokemon": "persian",
      "method": "walk",
      "chance": 1,
      "min_level": 40,
      "max_level": 40
    },
    {
      "pokemon": "psyduck",
      "method": "walk",
      "chance": 5,
      "min_level": 31,
      "max_level": 31
    },
    {
      "pokemon": "psyduck",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "bellsprout",
      "method": "walk",
      "chance": 20,
      "min_level": 31,
      "max_level": 31
    },
    {
      "pokemon": "weepinbell",
      "method": "walk",
      "chance": 10,
      "min_level": 36,
      "max_level": 36
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 60,
      "min_level": 5,
      "max_level": 20
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 30,
      "min_level": 20,
      "max_level": 35
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 5,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "tentacruel",
      "method": "surf",
      "chance": 4,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "tentacruel",
      "method": "surf",
      "chance": 1,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "slowpoke",
      "method": "walk",
      "chance": 5,
      "min_level": 31,
      "max_level": 31
    },
    {
      "pokemon": "slowpoke",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "krabby",
      "method": "good-rod",
      "chance": 60,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "krabby",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "krabby",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "krabby",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "kingler",
      "method": "super-rod",
      "chance": 4,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "horsea",
      "method": "good-rod",
      "chance": 60,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "horsea",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "horsea",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "horsea",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "seadra",
      "method": "super-rod",
      "chance": 4,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "magikarp",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 70,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 30,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "gyarados",
      "method": "super-rod",
      "chance": 15,
      "min_level": 15,
      "max_level": 25
    }
  ],
  "resort-gorgeous-area": [
    {
      "pokemon": "psyduck",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 60,
      "min_level": 5,
      "max_level": 35
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 5,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "tentacruel",
      "method": "surf",
      "chance": 4,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "tentacruel",
      "method": "surf",
      "chance": 1,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "slowpoke",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "krabby",
      "method": "good-rod",
      "chance": 60,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "krabby",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "krabby",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "kingler",
      "method": "super-rod",
      "chance": 4,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "horsea",
      "method": "good-rod",
      "chance": 60,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "horsea",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "horsea",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "seadra",
      "method": "super-rod",
      "chance": 4,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "magikarp",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 70,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 30,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "gyarados",
      "method": "super-rod",
      "chance": 15,
      "min_level": 15,
      "max_level": 25
    }
  ],
  "water-labyrinth-area": [
    {
      "pokemon": "psyduck",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 60,
      "min_level": 5,
      "max_level": 20
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 5,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "tentacruel",
      "method": "surf",
      "chance": 4,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "tentacruel",
      "method": "surf",
      "chance": 1,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "slowpoke",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "krabby",
      "method": "good-rod",
      "chance": 60,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "krabby",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "krabby",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "kingler",
      "method": "super-rod",
      "chance": 4,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "horsea",
      "method": "good-rod",
      "chance": 60,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "horsea",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "horsea",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "seadra",
      "method": "super-rod",
      "chance": 4,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "magikarp",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 70,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 30,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "gyarados",
      "method": "super-rod",
      "chance": 15,
      "min_level": 15,
      "max_level": 25
    }
  ],
  "five-isle-meadow-area": [
    {
      "pokemon": "pidgey",
      "method": "walk",
      "chance": 20,
      "min_level": 44,
      "max_level": 44
    },
    {
      "pokemon": "pidgeotto",
      "method": "walk",
      "chance": 10,
      "min_level": 48,
      "max_level": 48
    },
    {
      "pokemon": "pidgeotto",
      "method": "walk",
      "chance": 4,
      "min_level": 50,
      "max_level": 50
    },
    {
      "pokemon": "pidgeotto",
      "method": "walk",
      "chance": 1,
      "min_level": 50,
      "max_level": 50
    },
    {
      "pokemon": "meowth",
      "method": "walk",
      "chance": 10,
      "min_level": 41,
      "max_level": 41
    },
    {
      "pokemon": "persian",
      "method": "walk",
      "chance": 4,
      "min_level": 47,
      "max_level": 47
    },
    {
      "pokemon": "persian",
      "method": "walk",
      "chance": 1,
      "min_level": 50,
      "max_level": 50
    },
    {
      "pokemon": "psyduck",
      "method": "walk",
      "chance": 5,
      "min_level": 41,
      "max_level": 41
    },
    {
      "pokemon": "psyduck",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 60,
      "min_level": 5,
      "max_level": 35
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 5,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "tentacruel",
      "method": "surf",
      "chance": 4,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "tentacruel",
      "method": "surf",
      "chance": 1,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "slowpoke",
      "method": "walk",
      "chance": 5,
      "min_level": 41,
      "max_level": 41
    },
    {
      "pokemon": "slowpoke",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "krabby",
      "method": "good-rod",
      "chance": 60,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "krabby",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "krabby",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "kingler",
      "method": "super-rod",
      "chance": 4,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "horsea",
      "method": "good-rod",
      "chance": 60,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "horsea",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "horsea",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "seadra",
      "method": "super-rod",
      "chance": 4,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "magikarp",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 70,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 30,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "gyarados",
      "method": "super-rod",
      "chance": 15,
      "min_level": 15,
      "max_level": 25
    }
  ],
  "memorial-pillar-area": [
    {
      "pokemon": "psyduck",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 60,
      "min_level": 5,
      "max_level": 35
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 5,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "tentacruel",
      "method": "surf",
      "chance": 4,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "tentacruel",
      "method": "surf",
      "chance": 1,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "slowpoke",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "krabby",
      "method": "good-rod",
      "chance": 60,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "krabby",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "krabby",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "kingler",
      "method": "super-rod",
      "chance": 4,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "horsea",
      "method": "good-rod",
      "chance": 60,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "horsea",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "horsea",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "seadra",
      "method": "super-rod",
      "chance": 4,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "magikarp",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 70,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 30,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "gyarados",
      "method": "super-rod",
      "chance": 15,
      "min_level": 15,
      "max_level": 25
    }
  ],
  "outcast-island-area": [
    {
      "pokemon": "psyduck",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 60,
      "min_level": 5,
      "max_level": 20
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 30,
      "min_level": 20,
      "max_level": 35
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 5,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "tentacruel",
      "method": "surf",
      "chance": 4,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "tentacruel",
      "method": "surf",
      "chance": 1,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "slowpoke",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "krabby",
      "method": "good-rod",
      "chance": 60,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "krabby",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "krabby",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "kingler",
      "method": "super-rod",
      "chance": 4,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "horsea",
      "method": "good-rod",
      "chance": 60,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "horsea",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "horsea",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "seadra",
      "method": "super-rod",
      "chance": 4,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "magikarp",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 70,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 30,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "gyarados",
      "method": "super-rod",
      "chance": 15,
      "min_level": 15,
      "max_level": 25
    }
  ],
  "green-path-area": [
    {
      "pokemon": "psyduck",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 60,
      "min_level": 5,
      "max_level": 20
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 30,
      "min_level": 20,
      "max_level": 35
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 5,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "tentacruel",
      "method": "surf",
      "chance": 4,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "tentacruel",
      "method": "surf",
      "chance": 1,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "slowpoke",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "krabby",
      "method": "good-rod",
      "chance": 60,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "krabby",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "krabby",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "kingler",
      "method": "super-rod",
      "chance": 4,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "horsea",
      "method": "good-rod",
      "chance": 60,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "horsea",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "horsea",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "seadra",
      "method": "super-rod",
      "chance": 4,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "magikarp",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 70,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 30,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "gyarados",
      "method": "super-rod",
      "chance": 15,
      "min_level": 15,
      "max_level": 25
    }
  ],
  "water-path-area": [
    {
      "pokemon": "spearow",
      "method": "walk",
      "chance": 20,
      "min_level": 44,
      "max_level": 44
    },
    {
      "pokemon": "fearow",
      "method": "walk",
      "chance": 10,
      "min_level": 48,
      "max_level": 48
    },
    {
      "pokemon": "fearow",
      "method": "walk",
      "chance": 4,
      "min_level": 50,
      "max_level": 50
    },
    {
      "pokemon": "fearow",
      "method": "walk",
      "chance": 1,
      "min_level": 50,
      "max_level": 50
    },
    {
      "pokemon": "oddish",
      "method": "walk",
      "chance": 10,
      "min_level": 44,
      "max_level": 44
    },
    {
      "pokemon": "gloom",
      "method": "walk",
      "chance": 5,
      "min_level": 48,
      "max_level": 48
    },
    {
      "pokemon": "meowth",
      "method": "walk",
      "chance": 10,
      "min_level": 41,
      "max_level": 41
    },
    {
      "pokemon": "persian",
      "method": "walk",
      "chance": 4,
      "min_level": 47,
      "max_level": 47
    },
    {
      "pokemon": "persian",
      "method": "walk",
      "chance": 1,
      "min_level": 50,
      "max_level": 50
    },
    {
      "pokemon": "psyduck",
      "method": "walk",
      "chance": 5,
      "min_level": 41,
      "max_level": 41
    },
    {
      "pokemon": "psyduck",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "bellsprout",
      "method": "walk",
      "chance": 10,
      "min_level": 44,
      "max_level": 44
    },
    {
      "pokemon": "weepinbell",
      "method": "walk",
      "chance": 5,
      "min_level": 48,
      "max_level": 48
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 60,
      "min_level": 5,
      "max_level": 20
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 30,
      "min_level": 20,
      "max_level": 35
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 5,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "tentacruel",
      "method": "surf",
      "chance": 4,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "tentacruel",
      "method": "surf",
      "chance": 1,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "slowpoke",
      "method": "walk",
      "chance": 5,
      "min_level": 41,
      "max_level": 41
    },
    {
      "pokemon": "slowpoke",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "krabby",
      "method": "good-rod",
      "chance": 60,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "krabby",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "krabby",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "kingler",
      "method": "super-rod",
      "chance": 4,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "horsea",
      "method": "good-rod",
      "chance": 60,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "horsea",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "horsea",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "seadra",
      "method": "super-rod",
      "chance": 4,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "magikarp",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 70,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 30,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "gyarados",
      "method": "super-rod",
      "chance": 15,
      "min_level": 15,
      "max_level": 25
    }
  ],
  "ruin-valley-area": [
    {
      "pokemon": "spearow",
      "method": "walk",
      "chance": 20,
      "min_level": 44,
      "max_level": 44
    },
    {
      "pokemon": "fearow",
      "method": "walk",
      "chance": 10,
      "min_level": 49,
      "max_level": 49
    },
    {
      "pokemon": "meowth",
      "method": "walk",
      "chance": 10,
      "min_level": 43,
      "max_level": 43
    },
    {
      "pokemon": "persian",
      "method": "walk",
      "chance": 4,
      "min_level": 49,
      "max_level": 49
    },
    {
      "pokemon": "persian",
      "method": "walk",
      "chance": 1,
      "min_level": 52,
      "max_level": 52
    },
    {
      "pokemon": "psyduck",
      "method": "walk",
      "chance": 5,
      "min_level": 41,
      "max_level": 41
    },
    {
      "pokemon": "psyduck",
      "method": "super-rod",
      "chance": 4,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "psyduck",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "poliwag",
      "method": "good-rod",
      "chance": 60,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "poliwag",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "poliwhirl",
      "method": "super-rod",
      "chance": 40,
      "min_level": 20,
      "max_level": 30
    },
    {
      "pokemon": "slowpoke",
      "method": "walk",
      "chance": 5,
      "min_level": 41,
      "max_level": 41
    },
    {
      "pokemon": "slowpoke",
      "method": "super-rod",
      "chance": 4,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "slowpoke",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "goldeen",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "magikarp",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 70,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 30,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "gyarados",
      "method": "super-rod",
      "chance": 15,
      "min_level": 15,
      "max_level": 25
    }
  ],
  "trainer-tower-area": [
    {
      "pokemon": "psyduck",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 60,
      "min_level": 5,
      "max_level": 20
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 30,
      "min_level": 20,
      "max_level": 35
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 5,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "tentacruel",
      "method": "surf",
      "chance": 4,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "tentacruel",
      "method": "surf",
      "chance": 1,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "slowpoke",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "krabby",
      "method": "good-rod",
      "chance": 60,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "krabby",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "krabby",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "kingler",
      "method": "super-rod",
      "chance": 4,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "horsea",
      "method": "good-rod",
      "chance": 60,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "horsea",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "horsea",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "seadra",
      "method": "super-rod",
      "chance": 4,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "magikarp",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 70,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 30,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "gyarados",
      "method": "super-rod",
      "chance": 15,
      "min_level": 15,
      "max_level": 25
    }
  ],
  "canyon-entrance-area": [
    {
      "pokemon": "spearow",
      "method": "walk",
      "chance": 20,
      "min_level": 44,
      "max_level": 44
    },
    {
      "pokemon": "fearow",
      "method": "walk",
      "chance": 10,
      "min_level": 48,
      "max_level": 48
    },
    {
      "pokemon": "fearow",
      "method": "walk",
      "chance": 5,
      "min_level": 50,
      "max_level": 50
    },
    {
      "pokemon": "meowth",
      "method": "walk",
      "chance": 10,
      "min_level": 41,
      "max_level": 41
    },
    {
      "pokemon": "persian",
      "method": "walk",
      "chance": 4,
      "min_level": 47,
      "max_level": 47
    },
    {
      "pokemon": "persian",
      "method": "walk",
      "chance": 1,
      "min_level": 50,
      "max_level": 50
    },
    {
      "pokemon": "psyduck",
      "method": "walk",
      "chance": 5,
      "min_level": 41,
      "max_level": 41
    },
    {
      "pokemon": "slowpoke",
      "method": "walk",
      "chance": 5,
      "min_level": 41,
      "max_level": 41
    }
  ],
  "sevault-canyon-area": [
    {
      "pokemon": "fearow",
      "method": "walk",
      "chance": 10,
      "min_level": 50,
      "max_level": 50
    },
    {
      "pokemon": "meowth",
      "method": "walk",
      "chance": 10,
      "min_level": 43,
      "max_level": 43
    },
    {
      "pokemon": "persian",
      "method": "walk",
      "chance": 4,
      "min_level": 49,
      "max_level": 49
    },
    {
      "pokemon": "persian",
      "method": "walk",
      "chance": 1,
      "min_level": 52,
      "max_level": 52
    },
    {
      "pokemon": "geodude",
      "method": "walk",
      "chance": 20,
      "min_level": 46,
      "max_level": 46
    },
    {
      "pokemon": "geodude",
      "method": "rock-smash",
      "chance": 60,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "geodude",
      "method": "rock-smash",
      "chance": 4,
      "min_level": 30,
      "max_level": 40
    },
    {
      "pokemon": "geodude",
      "method": "rock-smash",
      "chance": 1,
      "min_level": 30,
      "max_level": 40
    },
    {
      "pokemon": "graveler",
      "method": "rock-smash",
      "chance": 30,
      "min_level": 30,
      "max_level": 45
    },
    {
      "pokemon": "graveler",
      "method": "rock-smash",
      "chance": 5,
      "min_level": 35,
      "max_level": 50
    },
    {
      "pokemon": "onix",
      "method": "walk",
      "chance": 5,
      "min_level": 54,
      "max_level": 54
    },
    {
      "pokemon": "cubone",
      "method": "walk",
      "chance": 10,
      "min_level": 46,
      "max_level": 46
    },
    {
      "pokemon": "marowak",
      "method": "walk",
      "chance": 10,
      "min_level": 52,
      "max_level": 52
    }
  ],
  "tanoby-ruins-area": [
    {
      "pokemon": "psyduck",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 60,
      "min_level": 5,
      "max_level": 20
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 30,
      "min_level": 20,
      "max_level": 35
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 5,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "tentacruel",
      "method": "surf",
      "chance": 4,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "tentacruel",
      "method": "surf",
      "chance": 1,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "slowpoke",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "krabby",
      "method": "good-rod",
      "chance": 60,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "krabby",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "krabby",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "kingler",
      "method": "super-rod",
      "chance": 4,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "horsea",
      "method": "good-rod",
      "chance": 60,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "horsea",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "horsea",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "seadra",
      "method": "super-rod",
      "chance": 4,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "magikarp",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 70,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 30,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "gyarados",
      "method": "super-rod",
      "chance": 15,
      "min_level": 15,
      "max_level": 25
    }
  ],
  "one-island-area": [
    {
      "pokemon": "psyduck",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 60,
      "min_level": 5,
      "max_level": 20
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 30,
      "min_level": 20,
      "max_level": 35
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 5,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "tentacruel",
      "method": "surf",
      "chance": 4,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "tentacruel",
      "method": "surf",
      "chance": 1,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "slowpoke",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "shellder",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "krabby",
      "method": "good-rod",
      "chance": 60,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "krabby",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "krabby",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "kingler",
      "method": "super-rod",
      "chance": 4,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "horsea",
      "method": "good-rod",
      "chance": 60,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "horsea",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "horsea",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "seadra",
      "method": "super-rod",
      "chance": 4,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "staryu",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "magikarp",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 70,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 30,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "gyarados",
      "method": "super-rod",
      "chance": 15,
      "min_level": 15,
      "max_level": 25
    }
  ],
  "four-island-area": [
    {
      "pokemon": "psyduck",
      "method": "super-rod",
      "chance": 4,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "psyduck",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "psyduck",
      "method": "surf",
      "chance": 30,
      "min_level": 5,
      "max_level": 35
    },
    {
      "pokemon": "poliwag",
      "method": "good-rod",
      "chance": 60,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "poliwag",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "poliwhirl",
      "method": "super-rod",
      "chance": 40,
      "min_level": 20,
      "max_level": 30
    },
    {
      "pokemon": "slowpoke",
      "method": "super-rod",
      "chance": 4,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "slowpoke",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "slowpoke",
      "method": "surf",
      "chance": 30,
      "min_level": 5,
      "max_level": 35
    },
    {
      "pokemon": "goldeen",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "magikarp",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 70,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 30,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "gyarados",
      "method": "super-rod",
      "chance": 15,
      "min_level": 15,
      "max_level": 25
    }
  ],
  "five-island-area": [
    {
      "pokemon": "psyduck",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 60,
      "min_level": 5,
      "max_level": 35
    },
    {
      "pokemon": "tentacool",
      "method": "surf",
      "chance": 5,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "tentacruel",
      "method": "surf",
      "chance": 4,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "tentacruel",
      "method": "surf",
      "chance": 1,
      "min_level": 35,
      "max_level": 40
    },
    {
      "pokemon": "slowpoke",
      "method": "super-rod",
      "chance": 1,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "shellder",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "krabby",
      "method": "good-rod",
      "chance": 60,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "krabby",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "krabby",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "kingler",
      "method": "super-rod",
      "chance": 4,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "horsea",
      "method": "good-rod",
      "chance": 60,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "horsea",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "horsea",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "seadra",
      "method": "super-rod",
      "chance": 4,
      "min_level": 25,
      "max_level": 35
    },
    {
      "pokemon": "staryu",
      "method": "super-rod",
      "chance": 40,
      "min_level": 15,
      "max_level": 25
    },
    {
      "pokemon": "magikarp",
      "method": "good-rod",
      "chance": 20,
      "min_level": 5,
      "max_level": 15
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 70,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "magikarp",
      "method": "old-rod",
      "chance": 30,
      "min_level": 5,
      "max_level": 5
    },
    {
      "pokemon": "gyarados",
      "method": "super-rod",
      "chance": 15,
      "min_level": 15,
      "max_level": 25
    }
  ],
  "kanto-altering-cave-a": [
    {
      "pokemon": "zubat",
      "method": "walk",
      "chance": 20,
      "min_level": 10,
      "max_level": 10
    },
    {
      "pokemon": "zubat",
      "method": "walk",
      "chance": 20,
      "min_level": 12,
      "max_level": 12
    },
    {
      "pokemon": "zubat",
      "method": "walk",
      "chance": 10,
      "min_level": 8,
      "max_level": 8
    },
    {
      "pokemon": "zubat",
      "method": "walk",
      "chance": 10,
      "min_level": 14,
      "max_level": 14
    },
    {
      "pokemon": "zubat",
      "method": "walk",
      "chance": 10,
      "min_level": 10,
      "max_level": 10
    },
    {
      "pokemon": "zubat",
      "method": "walk",
      "chance": 10,
      "min_level": 12,
      "max_level": 12
    },
    {
      "pokemon": "zubat",
      "method": "walk",
      "chance": 5,
      "min_level": 16,
      "max_level": 16
    },
    {
      "pokemon": "zubat",
      "method": "walk",
      "chance": 5,
      "min_level": 6,
      "max_level": 6
    },
    {
      "pokemon": "zubat",
      "method": "walk",
      "chance": 4,
      "min_level": 8,
      "max_level": 8
    },
    {
      "pokemon": "zubat",
      "method": "walk",
      "chance": 4,
      "min_level": 14,
      "max_level": 14
    },
    {
      "pokemon": "zubat",
      "method": "walk",
      "chance": 1,
      "min_level": 8,
      "max_level": 8
    },
    {
      "pokemon": "zubat",
      "method": "walk",
      "chance": 1,
      "min_level": 14,
      "max_level": 14
    }
  ],
  "kanto-pokecenter-area": [
    {
      "pokemon": "pikachu",
      "method": "colosseum-bonus-disc-jpn",
      "chance": 100,
      "min_level": 10,
      "max_level": 10
    }
  ],
  "kanto-underground-path-area": [
    {
      "pokemon": "nidoran-f",
      "method": "npc-trade",
      "chance": 100,
      "min_level": 5,
      "max_level": 100
    },
    {
      "pokemon": "nidoran-m",
      "method": "npc-trade",
      "chance": 100,
      "min_level": 5,
      "max_level": 100
    }
  ]
};