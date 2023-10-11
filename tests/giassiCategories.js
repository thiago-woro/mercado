const fs = require('fs');


const data = [
    [
        {
          "id": 11,
          "name": "Mercearia",
          "hasChildren": true,
          "url": "https://www.giassi.com.br/mercearia",
          "children": [
            {
              "id": 82,
              "name": "Açúcar",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/mercearia/acucar",
              "children": [
                {
                  "id": 321,
                  "name": "Cristal",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/mercearia/acucar/cristal",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 322,
                  "name": "Demerara",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/mercearia/acucar/demerara",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 323,
                  "name": "Mascavo",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/mercearia/acucar/mascavo",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 324,
                  "name": "Refinado",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/mercearia/acucar/refinado",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 325,
                  "name": "Orgânico",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/mercearia/acucar/organico",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 83,
              "name": "Adoçantes",
              "hasChildren": false,
              "url": "https://www.giassi.com.br/mercearia/adocantes",
              "children": [],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 84,
              "name": "Alimentos Básicos",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/mercearia/alimentos-basicos",
              "children": [
                {
                  "id": 326,
                  "name": "Arroz",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/mercearia/alimentos-basicos/arroz",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 327,
                  "name": "Farináceos",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/mercearia/alimentos-basicos/farinaceos",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 328,
                  "name": "Feijão",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/mercearia/alimentos-basicos/feijao",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 329,
                  "name": "Grãos",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/mercearia/alimentos-basicos/graos",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 330,
                  "name": "Óleos",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/mercearia/alimentos-basicos/oleos",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 85,
              "name": "Alimentos Infantis",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/mercearia/alimentos-infantis",
              "children": [
                {
                  "id": 331,
                  "name": "Fórmulas",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/mercearia/alimentos-infantis/formulas",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 332,
                  "name": "Compostos",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/mercearia/alimentos-infantis/compostos",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 333,
                  "name": "Leite em Pó",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/mercearia/alimentos-infantis/leite-em-po",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 334,
                  "name": "Papinhas",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/mercearia/alimentos-infantis/papinhas",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 335,
                  "name": "Cereais",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/mercearia/alimentos-infantis/cereais",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 86,
              "name": "Bomboniere",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/mercearia/bomboniere",
              "children": [
                {
                  "id": 336,
                  "name": "Balas e Gomas",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/mercearia/bomboniere/balas-e-gomas",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 337,
                  "name": "Barras de Cereais",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/mercearia/bomboniere/barras-de-cereais",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 339,
                  "name": "Chocolates",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/mercearia/bomboniere/chocolates",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 340,
                  "name": "Pão de Mel",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/mercearia/bomboniere/pao-de-mel",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 87,
              "name": "Biscoitos e Torradas",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/mercearia/biscoitos-e-torradas",
              "children": [
                {
                  "id": 348,
                  "name": "Biscoitos Doces",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/mercearia/biscoitos-e-torradas/biscoitos-doces",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 349,
                  "name": "Biscoitos Salgados",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/mercearia/biscoitos-e-torradas/biscoitos-salgados",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 350,
                  "name": "Torradas",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/mercearia/biscoitos-e-torradas/torradas",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 88,
              "name": "Conservas",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/mercearia/conservas",
              "children": [
                {
                  "id": 341,
                  "name": "Pescados",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/mercearia/conservas/pescados",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 342,
                  "name": "Azeitonas e Pepinos",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/mercearia/conservas/azeitonas-e-pepinos",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 343,
                  "name": "Milhos e Ervilhas",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/mercearia/conservas/milhos-e-ervilhas",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 344,
                  "name": "Ovos de Codorna e Palmitos",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/mercearia/conservas/ovos-de-codorna-e-palmitos",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 345,
                  "name": "Cogumelos",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/mercearia/conservas/cogumelos",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 89,
              "name": "Étnicos",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/mercearia/etnicos",
              "children": [
                {
                  "id": 346,
                  "name": "Mexicanos",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/mercearia/etnicos/mexicanos",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 347,
                  "name": "Orientais",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/mercearia/etnicos/orientais",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 90,
              "name": "Massas",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/mercearia/massas",
              "children": [
                {
                  "id": 352,
                  "name": "Lasanhas",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/mercearia/massas/lasanhas",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 353,
                  "name": "Macarrão Instantâneo",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/mercearia/massas/macarrao-instantaneo",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 354,
                  "name": "Massas Frescas",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/mercearia/massas/massas-frescas",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 355,
                  "name": "Massas Secas",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/mercearia/massas/massas-secas",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 91,
              "name": "Matinal",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/mercearia/matinal",
              "children": [
                {
                  "id": 356,
                  "name": "Achocolatados",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/mercearia/matinal/achocolatados",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 357,
                  "name": "Cereais Matinais",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/mercearia/matinal/cereais-matinais",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 358,
                  "name": "Cafés",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/mercearia/matinal/cafes",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 359,
                  "name": "Doces e Geleias",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/mercearia/matinal/doces-e-geleias",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 360,
                  "name": "Chás e Mates",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/mercearia/matinal/chas-e-mates",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 92,
              "name": "Molhos",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/mercearia/molhos",
              "children": [
                {
                  "id": 361,
                  "name": "Mostarda",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/mercearia/molhos/mostarda",
                  "children": [],
                  "Title": "mostarda",
                  "MetaTagDescription": ""
                },
                {
                  "id": 362,
                  "name": "Ketchup",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/mercearia/molhos/ketchup",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 363,
                  "name": "Maionese",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/mercearia/molhos/maionese",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 364,
                  "name": "Outros Molhos",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/mercearia/molhos/outros-molhos",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 93,
              "name": "Preparo para Sobremesas",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/mercearia/preparo-para-sobremesas",
              "children": [
                {
                  "id": 365,
                  "name": "Leite Condensado",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/mercearia/preparo-para-sobremesas/leite-condensado",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 366,
                  "name": "Creme de Leite",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/mercearia/preparo-para-sobremesas/creme-de-leite",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 367,
                  "name": "Gelatinas",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/mercearia/preparo-para-sobremesas/gelatinas",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 368,
                  "name": "Chocolate Cobertura",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/mercearia/preparo-para-sobremesas/chocolate-cobertura",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 369,
                  "name": "Misturas para Bolo",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/mercearia/preparo-para-sobremesas/misturas-para-bolo",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 94,
              "name": "Salgadinhos e Snacks",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/mercearia/salgadinhos-e-snacks",
              "children": [
                {
                  "id": 370,
                  "name": "amendoim",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/mercearia/salgadinhos-e-snacks/amendoim",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 371,
                  "name": "Batata Frita",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/mercearia/salgadinhos-e-snacks/batata-frita",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 372,
                  "name": "Batata Palha",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/mercearia/salgadinhos-e-snacks/batata-palha",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 373,
                  "name": "Snack",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/mercearia/salgadinhos-e-snacks/snack",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 374,
                  "name": "Salgadinho",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/mercearia/salgadinhos-e-snacks/salgadinho",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 95,
              "name": "Sopas e Cremes",
              "hasChildren": false,
              "url": "https://www.giassi.com.br/mercearia/sopas-e-cremes",
              "children": [],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 96,
              "name": "Suplementação Alimentar",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/mercearia/suplementacao-alimentar",
              "children": [
                {
                  "id": 375,
                  "name": "Infantil",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/mercearia/suplementacao-alimentar/infantil",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 376,
                  "name": "Sênior",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/mercearia/suplementacao-alimentar/senior",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 377,
                  "name": "Fitness",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/mercearia/suplementacao-alimentar/fitness",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 97,
              "name": "Temperos",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/mercearia/temperos",
              "children": [
                {
                  "id": 378,
                  "name": "Ervas e Especiarias",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/mercearia/temperos/ervas-e-especiarias",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 379,
                  "name": "Caldos",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/mercearia/temperos/caldos",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 380,
                  "name": "Sal",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/mercearia/temperos/sal",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 381,
                  "name": "Azeites",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/mercearia/temperos/azeites",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 382,
                  "name": "Vinagres",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/mercearia/temperos/vinagres",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            }
          ],
          "Title": "",
          "MetaTagDescription": ""
        },
        {
          "id": 12,
          "name": "Padaria e Confeitaria",
          "hasChildren": true,
          "url": "https://www.giassi.com.br/padaria-e-confeitaria",
          "children": [
            {
              "id": 98,
              "name": "Bolos e Confeitaria",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/padaria-e-confeitaria/bolos-e-confeitaria",
              "children": [
                {
                  "id": 100,
                  "name": "Bolos",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/padaria-e-confeitaria/bolos-e-confeitaria/bolos",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 338,
                  "name": "Doces",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/padaria-e-confeitaria/bolos-e-confeitaria/doces",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 351,
                  "name": "Panetones e Colombas",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/padaria-e-confeitaria/bolos-e-confeitaria/panetones-e-colombas",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 99,
              "name": "Pães",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/padaria-e-confeitaria/paes",
              "children": [
                {
                  "id": 298,
                  "name": "Pão de Sanduíche e de Forma",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/padaria-e-confeitaria/paes/pao-de-sanduiche-e-de-forma",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 299,
                  "name": "Hambúrguer e Hot Dog",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/padaria-e-confeitaria/paes/hamburguer-e-hot-dog",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 300,
                  "name": "Pão Francês e Pão de Queijo",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/padaria-e-confeitaria/paes/pao-frances-e-pao-de-queijo",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 301,
                  "name": "Bisnagas",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/padaria-e-confeitaria/paes/bisnagas",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 302,
                  "name": "Especiais e Integrais",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/padaria-e-confeitaria/paes/especiais-e-integrais",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 404,
              "name": "Lanchonete",
              "hasChildren": false,
              "url": "https://www.giassi.com.br/padaria-e-confeitaria/lanchonete",
              "children": [],
              "Title": "",
              "MetaTagDescription": ""
            }
          ],
          "Title": "",
          "MetaTagDescription": ""
        },
        {
          "id": 2,
          "name": "Bebidas Alcoólicas",
          "hasChildren": true,
          "url": "https://www.giassi.com.br/bebidas-alcoolicas",
          "children": [
            {
              "id": 24,
              "name": "Aperitivos",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/bebidas-alcoolicas/aperitivos",
              "children": [
                {
                  "id": 143,
                  "name": "Catuaba",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/bebidas-alcoolicas/aperitivos/catuaba",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 144,
                  "name": "Coquetéis",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/bebidas-alcoolicas/aperitivos/coqueteis",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 145,
                  "name": "Licores",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/bebidas-alcoolicas/aperitivos/licores",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 146,
                  "name": "Margaritas",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/bebidas-alcoolicas/aperitivos/margaritas",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 147,
                  "name": "Vermutes",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/bebidas-alcoolicas/aperitivos/vermutes",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 25,
              "name": "Cervejas",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/bebidas-alcoolicas/cervejas",
              "children": [
                {
                  "id": 148,
                  "name": "Artesanais",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/bebidas-alcoolicas/cervejas/artesanais",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 149,
                  "name": "Malzbiers",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/bebidas-alcoolicas/cervejas/malzbiers",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 150,
                  "name": "Sem Álcool",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/bebidas-alcoolicas/cervejas/sem-alcool",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 151,
                  "name": "Premium",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/bebidas-alcoolicas/cervejas/premium",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 26,
              "name": "Destilados",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/bebidas-alcoolicas/destilados",
              "children": [
                {
                  "id": 152,
                  "name": "Aguardentes e Cachaças",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/bebidas-alcoolicas/destilados/aguardentes-e-cachacas",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 153,
                  "name": "Vodcas",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/bebidas-alcoolicas/destilados/vodcas",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 154,
                  "name": "Uísques",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/bebidas-alcoolicas/destilados/uisques",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 155,
                  "name": "Gins",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/bebidas-alcoolicas/destilados/gins",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 156,
                  "name": "Tequilas",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/bebidas-alcoolicas/destilados/tequilas",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 27,
              "name": "Espumantes",
              "hasChildren": false,
              "url": "https://www.giassi.com.br/bebidas-alcoolicas/espumantes",
              "children": [],
              "Title": "espumantes",
              "MetaTagDescription": ""
            },
            {
              "id": 28,
              "name": "Vinhos",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/bebidas-alcoolicas/vinhos",
              "children": [
                {
                  "id": 157,
                  "name": "Brancos",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/bebidas-alcoolicas/vinhos/brancos",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 158,
                  "name": "Do Porto",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/bebidas-alcoolicas/vinhos/do-porto",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 159,
                  "name": "Rosés",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/bebidas-alcoolicas/vinhos/roses",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 160,
                  "name": "Tintos",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/bebidas-alcoolicas/vinhos/tintos",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            }
          ],
          "Title": "",
          "MetaTagDescription": ""
        },
        {
          "id": 3,
          "name": "Bebidas não alcoólicas",
          "hasChildren": true,
          "url": "https://www.giassi.com.br/bebidas-nao-alcoolicas",
          "children": [
            {
              "id": 29,
              "name": "Água",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/bebidas-nao-alcoolicas/agua",
              "children": [
                {
                  "id": 161,
                  "name": "Água de Coco",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/bebidas-nao-alcoolicas/agua/agua-de-coco",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 162,
                  "name": "Água Com Gás",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/bebidas-nao-alcoolicas/agua/agua-com-gas",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 163,
                  "name": "Água Sem Gás",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/bebidas-nao-alcoolicas/agua/agua-sem-gas",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 164,
                  "name": "Saborizadas",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/bebidas-nao-alcoolicas/agua/saborizadas",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 165,
                  "name": "Água Tônica",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/bebidas-nao-alcoolicas/agua/agua-tonica",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 30,
              "name": "Bebida Láctea",
              "hasChildren": false,
              "url": "https://www.giassi.com.br/bebidas-nao-alcoolicas/bebida-lactea",
              "children": [],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 31,
              "name": "Bebidas Vegetais",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/bebidas-nao-alcoolicas/bebidas-vegetais",
              "children": [
                {
                  "id": 169,
                  "name": "Coco",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/bebidas-nao-alcoolicas/bebidas-vegetais/coco",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 170,
                  "name": "Soja",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/bebidas-nao-alcoolicas/bebidas-vegetais/soja",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 451,
                  "name": "Amêndoas",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/bebidas-nao-alcoolicas/bebidas-vegetais/amendoas",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 452,
                  "name": "Arroz",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/bebidas-nao-alcoolicas/bebidas-vegetais/arroz",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 453,
                  "name": "Aveia",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/bebidas-nao-alcoolicas/bebidas-vegetais/aveia",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 454,
                  "name": "Caju",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/bebidas-nao-alcoolicas/bebidas-vegetais/caju",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 32,
              "name": "Chás Prontos",
              "hasChildren": false,
              "url": "https://www.giassi.com.br/bebidas-nao-alcoolicas/chas-prontos",
              "children": [],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 33,
              "name": "Energéticos",
              "hasChildren": false,
              "url": "https://www.giassi.com.br/bebidas-nao-alcoolicas/energeticos",
              "children": [],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 34,
              "name": "Isotônicos e Hidrotônicos",
              "hasChildren": false,
              "url": "https://www.giassi.com.br/bebidas-nao-alcoolicas/isotonicos-e-hidrotonicos",
              "children": [],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 35,
              "name": "Refrigerantes",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/bebidas-nao-alcoolicas/refrigerantes",
              "children": [
                {
                  "id": 442,
                  "name": "Limão",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/bebidas-nao-alcoolicas/refrigerantes/limao",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 443,
                  "name": "Outros Refrigerantes",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/bebidas-nao-alcoolicas/refrigerantes/outros-refrigerantes",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 444,
                  "name": "Cola",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/bebidas-nao-alcoolicas/refrigerantes/cola",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 445,
                  "name": "Guaraná",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/bebidas-nao-alcoolicas/refrigerantes/guarana",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 446,
                  "name": "Laranja",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/bebidas-nao-alcoolicas/refrigerantes/laranja",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 36,
              "name": "Sucos",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/bebidas-nao-alcoolicas/sucos",
              "children": [
                {
                  "id": 175,
                  "name": "Concentrados",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/bebidas-nao-alcoolicas/sucos/concentrados",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 176,
                  "name": "Integrais",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/bebidas-nao-alcoolicas/sucos/integrais",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 177,
                  "name": "Néctares",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/bebidas-nao-alcoolicas/sucos/nectares",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 178,
                  "name": "Refrescos em Pó",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/bebidas-nao-alcoolicas/sucos/refrescos-em-po",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 37,
              "name": "Xaropes",
              "hasChildren": false,
              "url": "https://www.giassi.com.br/bebidas-nao-alcoolicas/xaropes",
              "children": [],
              "Title": "",
              "MetaTagDescription": ""
            }
          ],
          "Title": "",
          "MetaTagDescription": ""
        },
        {
          "id": 4,
          "name": "Carnes e Aves",
          "hasChildren": true,
          "url": "https://www.giassi.com.br/carnes-e-aves",
          "children": [
            {
              "id": 38,
              "name": "Bovinos",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/carnes-e-aves/bovinos",
              "children": [
                {
                  "id": 179,
                  "name": "Bifes",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/carnes-e-aves/bovinos/bifes",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 180,
                  "name": "Britânicas Giassi",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/carnes-e-aves/bovinos/britanicas-giassi",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 181,
                  "name": "Carne Moída",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/carnes-e-aves/bovinos/carne-moida",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 182,
                  "name": "Churrasco",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/carnes-e-aves/bovinos/churrasco",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 183,
                  "name": "Panela",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/carnes-e-aves/bovinos/panela",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 39,
              "name": "Cordeiro",
              "hasChildren": false,
              "url": "https://www.giassi.com.br/carnes-e-aves/cordeiro",
              "children": [],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 40,
              "name": "Exóticas",
              "hasChildren": false,
              "url": "https://www.giassi.com.br/carnes-e-aves/exoticas",
              "children": [],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 41,
              "name": "Frango",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/carnes-e-aves/frango",
              "children": [
                {
                  "id": 184,
                  "name": "Caipira",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/carnes-e-aves/frango/caipira",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 185,
                  "name": "Cortes da Asa",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/carnes-e-aves/frango/cortes-da-asa",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 186,
                  "name": "Cortes da Coxa",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/carnes-e-aves/frango/cortes-da-coxa",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 187,
                  "name": "Cortes do Peito",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/carnes-e-aves/frango/cortes-do-peito",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 188,
                  "name": "Miúdos",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/carnes-e-aves/frango/miudos",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 42,
              "name": "Pato",
              "hasChildren": false,
              "url": "https://www.giassi.com.br/carnes-e-aves/pato",
              "children": [],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 43,
              "name": "Linguiças",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/carnes-e-aves/linguicas",
              "children": [
                {
                  "id": 189,
                  "name": "Calabresa",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/carnes-e-aves/linguicas/calabresa",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 190,
                  "name": "Frango",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/carnes-e-aves/linguicas/frango",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 191,
                  "name": "Pernil",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/carnes-e-aves/linguicas/pernil",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 192,
                  "name": "Toscana",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/carnes-e-aves/linguicas/toscana",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 44,
              "name": "Peru",
              "hasChildren": false,
              "url": "https://www.giassi.com.br/carnes-e-aves/peru",
              "children": [],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 45,
              "name": "Suínas",
              "hasChildren": false,
              "url": "https://www.giassi.com.br/carnes-e-aves/suinas",
              "children": [],
              "Title": "",
              "MetaTagDescription": ""
            }
          ],
          "Title": "",
          "MetaTagDescription": ""
        },
        {
          "id": 9,
          "name": "Hortifrúti",
          "hasChildren": true,
          "url": "https://www.giassi.com.br/hortifruti",
          "children": [
            {
              "id": 72,
              "name": "Frutas",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/hortifruti/frutas",
              "children": [
                {
                  "id": 277,
                  "name": "Frutas Secas",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/hortifruti/frutas/frutas-secas",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 278,
                  "name": "Frutas Orgânicas",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/hortifruti/frutas/frutas-organicas",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 73,
              "name": "Legumes",
              "hasChildren": false,
              "url": "https://www.giassi.com.br/hortifruti/legumes",
              "children": [],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 74,
              "name": "Ovos",
              "hasChildren": false,
              "url": "https://www.giassi.com.br/hortifruti/ovos",
              "children": [],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 75,
              "name": "Temperos",
              "hasChildren": false,
              "url": "https://www.giassi.com.br/hortifruti/temperos",
              "children": [],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 76,
              "name": "Hortaliças",
              "hasChildren": false,
              "url": "https://www.giassi.com.br/hortifruti/hortalicas",
              "children": [],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 77,
              "name": "Prontos para Consumo",
              "hasChildren": false,
              "url": "https://www.giassi.com.br/hortifruti/prontos-para-consumo",
              "children": [],
              "Title": "",
              "MetaTagDescription": ""
            }
          ],
          "Title": "",
          "MetaTagDescription": ""
        },
        {
          "id": 7,
          "name": "Frios e Laticínios",
          "hasChildren": true,
          "url": "https://www.giassi.com.br/frios-e-laticinios",
          "children": [
            {
              "id": 59,
              "name": "Frios",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/frios-e-laticinios/frios",
              "children": [
                {
                  "id": 220,
                  "name": "Mortadelas",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/frios-e-laticinios/frios/mortadelas",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 221,
                  "name": "Peito de Peru",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/frios-e-laticinios/frios/peito-de-peru",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 222,
                  "name": "Presuntos",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/frios-e-laticinios/frios/presuntos",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 223,
                  "name": "Salames",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/frios-e-laticinios/frios/salames",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 60,
              "name": "Iogurtes",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/frios-e-laticinios/iogurtes",
              "children": [
                {
                  "id": 224,
                  "name": "Naturais",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/frios-e-laticinios/iogurtes/naturais",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 225,
                  "name": "Sobremesas",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/frios-e-laticinios/iogurtes/sobremesas",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 226,
                  "name": "Leite Fermentado",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/frios-e-laticinios/iogurtes/leite-fermentado",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 227,
                  "name": "Infantis",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/frios-e-laticinios/iogurtes/infantis",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 228,
                  "name": "Protéicos",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/frios-e-laticinios/iogurtes/proteicos",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 455,
                  "name": "Grego",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/frios-e-laticinios/iogurtes/grego",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 456,
                  "name": "Funcionais",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/frios-e-laticinios/iogurtes/funcionais",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 61,
              "name": "Lácteos",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/frios-e-laticinios/lacteos",
              "children": [
                {
                  "id": 229,
                  "name": "Chantilly",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/frios-e-laticinios/lacteos/chantilly",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 230,
                  "name": "Manteigas",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/frios-e-laticinios/lacteos/manteigas",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 231,
                  "name": "Margarinas e Cremes Vegetais",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/frios-e-laticinios/lacteos/margarinas-e-cremes-vegetais",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 232,
                  "name": "Requeijão",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/frios-e-laticinios/lacteos/requeijao",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 62,
              "name": "Leite",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/frios-e-laticinios/leite",
              "children": [
                {
                  "id": 233,
                  "name": "Desnatado",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/frios-e-laticinios/leite/desnatado",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 234,
                  "name": "Integral",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/frios-e-laticinios/leite/integral",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 235,
                  "name": "Semidesnatado",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/frios-e-laticinios/leite/semidesnatado",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 236,
                  "name": "Zero Lactose",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/frios-e-laticinios/leite/zero-lactose",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 237,
                  "name": "Especiais",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/frios-e-laticinios/leite/especiais",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 63,
              "name": "Queijos",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/frios-e-laticinios/queijos",
              "children": [
                {
                  "id": 238,
                  "name": "Muçarela",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/frios-e-laticinios/queijos/mucarela",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 239,
                  "name": "Prato",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/frios-e-laticinios/queijos/prato",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 240,
                  "name": "Cheddar",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/frios-e-laticinios/queijos/cheddar",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 241,
                  "name": "Especiais",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/frios-e-laticinios/queijos/especiais",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 242,
                  "name": "Ralado",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/frios-e-laticinios/queijos/ralado",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 64,
              "name": "Salsichas",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/frios-e-laticinios/salsichas",
              "children": [
                {
                  "id": 243,
                  "name": "Frango",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/frios-e-laticinios/salsichas/frango",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 244,
                  "name": "Hot Dog",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/frios-e-laticinios/salsichas/hot-dog",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 245,
                  "name": "Peru",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/frios-e-laticinios/salsichas/peru",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 246,
                  "name": "Vegetal",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/frios-e-laticinios/salsichas/vegetal",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            }
          ],
          "Title": "",
          "MetaTagDescription": ""
        },
        {
          "id": 6,
          "name": "Congelados",
          "hasChildren": true,
          "url": "https://www.giassi.com.br/congelados",
          "children": [
            {
              "id": 51,
              "name": "Hambúrguer",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/congelados/hamburguer",
              "children": [
                {
                  "id": 198,
                  "name": "Bovino",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/congelados/hamburguer/bovino",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 199,
                  "name": "Frango",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/congelados/hamburguer/frango",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 200,
                  "name": "Vegetais",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/congelados/hamburguer/vegetais",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 52,
              "name": "Pratos Prontos",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/congelados/pratos-prontos",
              "children": [
                {
                  "id": 201,
                  "name": "Almôndegas",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/congelados/pratos-prontos/almondegas",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 202,
                  "name": "Escondidinho",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/congelados/pratos-prontos/escondidinho",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 203,
                  "name": "Lasanhas",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/congelados/pratos-prontos/lasanhas",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 204,
                  "name": "Pizzas",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/congelados/pratos-prontos/pizzas",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 205,
                  "name": "Sanduíche",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/congelados/pratos-prontos/sanduiche",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 441,
                  "name": "Tortas",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/congelados/pratos-prontos/tortas",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 53,
              "name": "Sobremesas",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/congelados/sobremesas",
              "children": [
                {
                  "id": 211,
                  "name": "Açai",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/congelados/sobremesas/acai",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 212,
                  "name": "Petit Gateu",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/congelados/sobremesas/petit-gateu",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 213,
                  "name": "Sorvetes",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/congelados/sobremesas/sorvetes",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 214,
                  "name": "Tortas",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/congelados/sobremesas/tortas",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 54,
              "name": "Vegetais",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/congelados/vegetais",
              "children": [
                {
                  "id": 215,
                  "name": "Anel de Cebola",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/congelados/vegetais/anel-de-cebola",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 216,
                  "name": "Batatas",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/congelados/vegetais/batatas",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 217,
                  "name": "Ervilhas",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/congelados/vegetais/ervilhas",
                  "children": [],
                  "Title": "ervilhas",
                  "MetaTagDescription": ""
                },
                {
                  "id": 218,
                  "name": "Mandioca",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/congelados/vegetais/mandioca",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 219,
                  "name": "Brócolis",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/congelados/vegetais/brocolis",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 55,
              "name": "Petiscos",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/congelados/petiscos",
              "children": [
                {
                  "id": 206,
                  "name": "Pão de Queijo",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/congelados/petiscos/pao-de-queijo",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 207,
                  "name": "Bolinho de Queijo",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/congelados/petiscos/bolinho-de-queijo",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 208,
                  "name": "Casquinha de Siri",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/congelados/petiscos/casquinha-de-siri",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 209,
                  "name": "Salgadinhos",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/congelados/petiscos/salgadinhos",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 210,
                  "name": "Polenta",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/congelados/petiscos/polenta",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            }
          ],
          "Title": "",
          "MetaTagDescription": ""
        },
        {
          "id": 8,
          "name": "Higiene e Beleza",
          "hasChildren": true,
          "url": "https://www.giassi.com.br/higiene-e-beleza",
          "children": [
            {
              "id": 65,
              "name": "Barbearia",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/higiene-e-beleza/barbearia",
              "children": [
                {
                  "id": 247,
                  "name": "Aparelho de Barbear",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/higiene-e-beleza/barbearia/aparelho-de-barbear",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 248,
                  "name": "Carga",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/higiene-e-beleza/barbearia/carga",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 249,
                  "name": "Espuma de Barbear",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/higiene-e-beleza/barbearia/espuma-de-barbear",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 250,
                  "name": "Loção",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/higiene-e-beleza/barbearia/locao",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 66,
              "name": "Cabelo",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/higiene-e-beleza/cabelo",
              "children": [
                {
                  "id": 251,
                  "name": "Acessórios",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/higiene-e-beleza/cabelo/acessorios",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 252,
                  "name": "Gel e Fixador",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/higiene-e-beleza/cabelo/gel-e-fixador",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 253,
                  "name": "Tratamento Capilar",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/higiene-e-beleza/cabelo/tratamento-capilar",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 254,
                  "name": "Xampus",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/higiene-e-beleza/cabelo/xampus",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 255,
                  "name": "Condicionador",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/higiene-e-beleza/cabelo/condicionador",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 67,
              "name": "Corpo",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/higiene-e-beleza/corpo",
              "children": [
                {
                  "id": 256,
                  "name": "Desodorantes",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/higiene-e-beleza/corpo/desodorantes",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 257,
                  "name": "Hidratantes",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/higiene-e-beleza/corpo/hidratantes",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 258,
                  "name": "Sabonetes",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/higiene-e-beleza/corpo/sabonetes",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 259,
                  "name": "Repelentes",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/higiene-e-beleza/corpo/repelentes",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 260,
                  "name": "Protetor Solar",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/higiene-e-beleza/corpo/protetor-solar",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 68,
              "name": "Cuidado Facial",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/higiene-e-beleza/cuidado-facial",
              "children": [
                {
                  "id": 261,
                  "name": "Demaquilantes",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/higiene-e-beleza/cuidado-facial/demaquilantes",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 262,
                  "name": "Maquiagens",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/higiene-e-beleza/cuidado-facial/maquiagens",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 69,
              "name": "Higiene Bucal",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/higiene-e-beleza/higiene-bucal",
              "children": [
                {
                  "id": 263,
                  "name": "Creme Dental",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/higiene-e-beleza/higiene-bucal/creme-dental",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 264,
                  "name": "Escova Dental",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/higiene-e-beleza/higiene-bucal/escova-dental",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 265,
                  "name": "Enxaguante Bucal",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/higiene-e-beleza/higiene-bucal/enxaguante-bucal",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 266,
                  "name": "Fio Dental",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/higiene-e-beleza/higiene-bucal/fio-dental",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 70,
              "name": "Higiene Pessoal",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/higiene-e-beleza/higiene-pessoal",
              "children": [
                {
                  "id": 267,
                  "name": "Absorventes",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/higiene-e-beleza/higiene-pessoal/absorventes",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 268,
                  "name": "Incontinência",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/higiene-e-beleza/higiene-pessoal/incontinencia",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 269,
                  "name": "Lenços",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/higiene-e-beleza/higiene-pessoal/lencos",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 270,
                  "name": "Papel Higiênico",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/higiene-e-beleza/higiene-pessoal/papel-higienico",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 271,
                  "name": "Sabonetes Íntimos",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/higiene-e-beleza/higiene-pessoal/sabonetes-intimos",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 71,
              "name": "Infantil",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/higiene-e-beleza/infantil",
              "children": [
                {
                  "id": 272,
                  "name": "Fraldas",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/higiene-e-beleza/infantil/fraldas",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 273,
                  "name": "Lenços Umedecidos",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/higiene-e-beleza/infantil/lencos-umedecidos",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 274,
                  "name": "Banho",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/higiene-e-beleza/infantil/banho",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 275,
                  "name": "Higiene Oral",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/higiene-e-beleza/infantil/higiene-oral",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 276,
                  "name": "Acessórios",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/higiene-e-beleza/infantil/acessorios",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            }
          ],
          "Title": "",
          "MetaTagDescription": ""
        },
        {
          "id": 10,
          "name": "Limpeza",
          "hasChildren": true,
          "url": "https://www.giassi.com.br/limpeza",
          "children": [
            {
              "id": 78,
              "name": "Banheiro",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/limpeza/banheiro",
              "children": [
                {
                  "id": 279,
                  "name": "Acessórios",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/limpeza/banheiro/acessorios",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 280,
                  "name": "Desinfetante",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/limpeza/banheiro/desinfetante",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 281,
                  "name": "Limpadores Sanitários",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/limpeza/banheiro/limpadores-sanitarios",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 282,
                  "name": "Tira Limo",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/limpeza/banheiro/tira-limo",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 283,
                  "name": "Purificadores",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/limpeza/banheiro/purificadores",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 79,
              "name": "Casa em Geral",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/limpeza/casa-em-geral",
              "children": [
                {
                  "id": 284,
                  "name": "Água Sanitária",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/limpeza/casa-em-geral/agua-sanitaria",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 285,
                  "name": "Limpeza de Piso",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/limpeza/casa-em-geral/limpeza-de-piso",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 286,
                  "name": "Desodorizadores",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/limpeza/casa-em-geral/desodorizadores",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 287,
                  "name": "Inseticidas",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/limpeza/casa-em-geral/inseticidas",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 288,
                  "name": "Limpadores",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/limpeza/casa-em-geral/limpadores",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 80,
              "name": "Cozinha",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/limpeza/cozinha",
              "children": [
                {
                  "id": 289,
                  "name": "Acessórios",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/limpeza/cozinha/acessorios",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 290,
                  "name": "Desengordurantes",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/limpeza/cozinha/desengordurantes",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 291,
                  "name": "Detergentes",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/limpeza/cozinha/detergentes",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 292,
                  "name": "Esponjas e lãs de Aço",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/limpeza/cozinha/esponjas-e-las-de-aco",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 293,
                  "name": "Saponáceos",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/limpeza/cozinha/saponaceos",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 81,
              "name": "Roupas",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/limpeza/roupas",
              "children": [
                {
                  "id": 294,
                  "name": "Alvejantes e Tira Manchas",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/limpeza/roupas/alvejantes-e-tira-manchas",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 295,
                  "name": "Amaciantes",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/limpeza/roupas/amaciantes",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 296,
                  "name": "Lava Roupas",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/limpeza/roupas/lava-roupas",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 297,
                  "name": "Passa Roupas",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/limpeza/roupas/passa-roupas",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            }
          ],
          "Title": "",
          "MetaTagDescription": ""
        },
        {
          "id": 409,
          "name": "Cantinho do Bebê",
          "hasChildren": true,
          "url": "https://www.giassi.com.br/cantinho-do-bebe",
          "children": [
            {
              "id": 410,
              "name": "Higiene Bucal",
              "hasChildren": false,
              "url": "https://www.giassi.com.br/cantinho-do-bebe/higiene-bucal",
              "children": [],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 411,
              "name": "Fraldas e Lenços",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/cantinho-do-bebe/fraldas-e-lencos",
              "children": [
                {
                  "id": 415,
                  "name": "Lenços",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/cantinho-do-bebe/fraldas-e-lencos/lencos",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 416,
                  "name": "Fraldas",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/cantinho-do-bebe/fraldas-e-lencos/fraldas",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 412,
              "name": "Banho e Pós-Banho",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/cantinho-do-bebe/banho-e-pos-banho",
              "children": [
                {
                  "id": 417,
                  "name": "Cabelos",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/cantinho-do-bebe/banho-e-pos-banho/cabelos",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 418,
                  "name": "Sabonetes",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/cantinho-do-bebe/banho-e-pos-banho/sabonetes",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 419,
                  "name": "Loções",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/cantinho-do-bebe/banho-e-pos-banho/locoes",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 413,
              "name": "Alimentação",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/cantinho-do-bebe/alimentacao",
              "children": [
                {
                  "id": 420,
                  "name": "Fórmulas",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/cantinho-do-bebe/alimentacao/formulas",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 421,
                  "name": "Compostos",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/cantinho-do-bebe/alimentacao/compostos",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 422,
                  "name": "Papinhas",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/cantinho-do-bebe/alimentacao/papinhas",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 414,
              "name": "Acessórios",
              "hasChildren": false,
              "url": "https://www.giassi.com.br/cantinho-do-bebe/acessorios",
              "children": [],
              "Title": "",
              "MetaTagDescription": ""
            }
          ],
          "Title": "",
          "MetaTagDescription": ""
        },
        {
          "id": 5,
          "name": "Churrasco",
          "hasChildren": true,
          "url": "https://www.giassi.com.br/churrasco",
          "children": [
            {
              "id": 46,
              "name": "Acessórios",
              "hasChildren": false,
              "url": "https://www.giassi.com.br/churrasco/acessorios",
              "children": [],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 47,
              "name": "Acompanhamentos",
              "hasChildren": false,
              "url": "https://www.giassi.com.br/churrasco/acompanhamentos",
              "children": [],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 48,
              "name": "Carnes",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/churrasco/carnes",
              "children": [
                {
                  "id": 193,
                  "name": "Aves",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/churrasco/carnes/aves",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 194,
                  "name": "Bovina",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/churrasco/carnes/bovina",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 195,
                  "name": "Cordeiro",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/churrasco/carnes/cordeiro",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 196,
                  "name": "Linguiças",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/churrasco/carnes/linguicas",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 197,
                  "name": "Suína",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/churrasco/carnes/suina",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 49,
              "name": "Descartáveis",
              "hasChildren": false,
              "url": "https://www.giassi.com.br/churrasco/descartaveis",
              "children": [],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 50,
              "name": "Temperos",
              "hasChildren": false,
              "url": "https://www.giassi.com.br/churrasco/temperos",
              "children": [],
              "Title": "",
              "MetaTagDescription": ""
            }
          ],
          "Title": "",
          "MetaTagDescription": ""
        },
        {
          "id": 13,
          "name": "Peixaria",
          "hasChildren": true,
          "url": "https://www.giassi.com.br/peixaria",
          "children": [
            {
              "id": 101,
              "name": "Bacalhau",
              "hasChildren": false,
              "url": "https://www.giassi.com.br/peixaria/bacalhau",
              "children": [],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 102,
              "name": "Frutos do Mar",
              "hasChildren": false,
              "url": "https://www.giassi.com.br/peixaria/frutos-do-mar",
              "children": [],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 103,
              "name": "Pescados",
              "hasChildren": false,
              "url": "https://www.giassi.com.br/peixaria/pescados",
              "children": [],
              "Title": "",
              "MetaTagDescription": ""
            }
          ],
          "Title": "",
          "MetaTagDescription": ""
        },
        {
          "id": 1,
          "name": "Alimentos Especiais",
          "hasChildren": true,
          "url": "https://www.giassi.com.br/alimentos-especiais",
          "children": [
            {
              "id": 17,
              "name": "Zero Açúcar",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/alimentos-especiais/zero-acucar",
              "children": [
                {
                  "id": 113,
                  "name": "Chocolates",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/alimentos-especiais/zero-acucar/chocolates",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 114,
                  "name": "Biscoitos e Torradas",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/alimentos-especiais/zero-acucar/biscoitos-e-torradas",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 115,
                  "name": "Doces e Geleias",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/alimentos-especiais/zero-acucar/doces-e-geleias",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 116,
                  "name": "Iogurtes",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/alimentos-especiais/zero-acucar/iogurtes",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 117,
                  "name": "Refrigerantes",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/alimentos-especiais/zero-acucar/refrigerantes",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 18,
              "name": "Light",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/alimentos-especiais/light",
              "children": [
                {
                  "id": 118,
                  "name": "Biscoitos e Torradas",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/alimentos-especiais/light/biscoitos-e-torradas",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 119,
                  "name": "Doces e Geleias",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/alimentos-especiais/light/doces-e-geleias",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 120,
                  "name": "Iogurtes",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/alimentos-especiais/light/iogurtes",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 121,
                  "name": "Refrigerantes",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/alimentos-especiais/light/refrigerantes",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 122,
                  "name": "Adoçantes",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/alimentos-especiais/light/adocantes",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 19,
              "name": "Integrais",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/alimentos-especiais/integrais",
              "children": [
                {
                  "id": 123,
                  "name": "Arroz",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/alimentos-especiais/integrais/arroz",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 124,
                  "name": "Biscoitos e Torradas",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/alimentos-especiais/integrais/biscoitos-e-torradas",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 125,
                  "name": "Massas",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/alimentos-especiais/integrais/massas",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 126,
                  "name": "Pães",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/alimentos-especiais/integrais/paes",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 127,
                  "name": "Granolas e Aveias",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/alimentos-especiais/integrais/granolas-e-aveias",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 20,
              "name": "Orgânicos",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/alimentos-especiais/organicos",
              "children": [
                {
                  "id": 128,
                  "name": "Açúcar",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/alimentos-especiais/organicos/acucar",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 129,
                  "name": "Hortifrúti",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/alimentos-especiais/organicos/hortifruti",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 130,
                  "name": "Biscoitos e Torradas",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/alimentos-especiais/organicos/biscoitos-e-torradas",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 131,
                  "name": "Cafés",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/alimentos-especiais/organicos/cafes",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 132,
                  "name": "Bebidas",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/alimentos-especiais/organicos/bebidas",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 21,
              "name": "Zero Glúten",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/alimentos-especiais/zero-gluten",
              "children": [
                {
                  "id": 133,
                  "name": "Farinhas",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/alimentos-especiais/zero-gluten/farinhas",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 134,
                  "name": "Massas",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/alimentos-especiais/zero-gluten/massas",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 135,
                  "name": "Pães",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/alimentos-especiais/zero-gluten/paes",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 136,
                  "name": "Biscoitos e Torradas",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/alimentos-especiais/zero-gluten/biscoitos-e-torradas",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 137,
                  "name": "Cervejas",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/alimentos-especiais/zero-gluten/cervejas",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 22,
              "name": "Zero Lactose",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/alimentos-especiais/zero-lactose",
              "children": [
                {
                  "id": 138,
                  "name": "Chocolates",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/alimentos-especiais/zero-lactose/chocolates",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 139,
                  "name": "Biscoitos e Torradas",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/alimentos-especiais/zero-lactose/biscoitos-e-torradas",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 140,
                  "name": "Iogurtes",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/alimentos-especiais/zero-lactose/iogurtes",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 141,
                  "name": "Queijos",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/alimentos-especiais/zero-lactose/queijos",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 142,
                  "name": "Leites",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/alimentos-especiais/zero-lactose/leites",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 23,
              "name": "Veganos",
              "hasChildren": false,
              "url": "https://www.giassi.com.br/alimentos-especiais/veganos",
              "children": [],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 405,
              "name": "Fitness",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/alimentos-especiais/fitness",
              "children": [
                {
                  "id": 406,
                  "name": "Suplementos",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/alimentos-especiais/fitness/suplementos",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 407,
                  "name": "Barras Protéicas",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/alimentos-especiais/fitness/barras-proteicas",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 408,
                  "name": "Bebidas Protéicas",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/alimentos-especiais/fitness/bebidas-proteicas",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            }
          ],
          "Title": "",
          "MetaTagDescription": ""
        },
        {
          "id": 14,
          "name": "Pet Shop",
          "hasChildren": true,
          "url": "https://www.giassi.com.br/pet-shop",
          "children": [
            {
              "id": 104,
              "name": "Cães",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/pet-shop/caes",
              "children": [
                {
                  "id": 303,
                  "name": "Alimentação",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/pet-shop/caes/alimentacao",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 304,
                  "name": "Acessórios",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/pet-shop/caes/acessorios",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 305,
                  "name": "Produtos de Higiene",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/pet-shop/caes/produtos-de-higiene",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 105,
              "name": "Gatos",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/pet-shop/gatos",
              "children": [
                {
                  "id": 306,
                  "name": "Alimentação",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/pet-shop/gatos/alimentacao",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 307,
                  "name": "Acessórios",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/pet-shop/gatos/acessorios",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 308,
                  "name": "Produtos de Higiene",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/pet-shop/gatos/produtos-de-higiene",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 106,
              "name": "Outros Animais",
              "hasChildren": false,
              "url": "https://www.giassi.com.br/pet-shop/outros-animais",
              "children": [],
              "Title": "",
              "MetaTagDescription": ""
            }
          ],
          "Title": "",
          "MetaTagDescription": ""
        },
        {
          "id": 15,
          "name": "Descartáveis",
          "hasChildren": true,
          "url": "https://www.giassi.com.br/descartaveis",
          "children": [
            {
              "id": 56,
              "name": "Descartáveis de Papel",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/descartaveis/descartaveis-de-papel",
              "children": [
                {
                  "id": 309,
                  "name": "Guardanapos",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/descartaveis/descartaveis-de-papel/guardanapos",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 310,
                  "name": "Papel Toalha",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/descartaveis/descartaveis-de-papel/papel-toalha",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 311,
                  "name": "Copos",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/descartaveis/descartaveis-de-papel/copos",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 312,
                  "name": "Canudos",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/descartaveis/descartaveis-de-papel/canudos",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 57,
              "name": "Descartáveis de Plástico",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/descartaveis/descartaveis-de-plastico",
              "children": [
                {
                  "id": 313,
                  "name": "Copos",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/descartaveis/descartaveis-de-plastico/copos",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 314,
                  "name": "Pratos",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/descartaveis/descartaveis-de-plastico/pratos",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 315,
                  "name": "Talheres",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/descartaveis/descartaveis-de-plastico/talheres",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 316,
                  "name": "Bandejas",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/descartaveis/descartaveis-de-plastico/bandejas",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 58,
              "name": "Embalagens",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/descartaveis/embalagens",
              "children": [
                {
                  "id": 317,
                  "name": "Filme PVC",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/descartaveis/embalagens/filme-pvc",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 318,
                  "name": "Papel Alumínio",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/descartaveis/embalagens/papel-aluminio",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 319,
                  "name": "Microondas e Freezer",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/descartaveis/embalagens/microondas-e-freezer",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 320,
                  "name": "Papel",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/descartaveis/embalagens/papel",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            }
          ],
          "Title": "",
          "MetaTagDescription": ""
        },
        {
          "id": 16,
          "name": "Utensílios",
          "hasChildren": true,
          "url": "https://www.giassi.com.br/utensilios",
          "children": [
            {
              "id": 107,
              "name": "Para Cozinha",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/utensilios/para-cozinha",
              "children": [
                {
                  "id": 393,
                  "name": "Assadeira e Formas",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/utensilios/para-cozinha/assadeira-e-formas",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 394,
                  "name": "Copos",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/utensilios/para-cozinha/copos",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 395,
                  "name": "Garrafa Térmica",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/utensilios/para-cozinha/garrafa-termica",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 396,
                  "name": "Panelas e Frigideiras",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/utensilios/para-cozinha/panelas-e-frigideiras",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 397,
                  "name": "Pratos",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/utensilios/para-cozinha/pratos",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 108,
              "name": "Para Lavanderia",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/utensilios/para-lavanderia",
              "children": [
                {
                  "id": 398,
                  "name": "Baldes e Bacias",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/utensilios/para-lavanderia/baldes-e-bacias",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 399,
                  "name": "Prendedor de Roupas",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/utensilios/para-lavanderia/prendedor-de-roupas",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 400,
                  "name": "Varal",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/utensilios/para-lavanderia/varal",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 401,
                  "name": "Cestos",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/utensilios/para-lavanderia/cestos",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 109,
              "name": "Para Casa",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/utensilios/para-casa",
              "children": [
                {
                  "id": 389,
                  "name": "Rodos",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/utensilios/para-casa/rodos",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 390,
                  "name": "Vassouras",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/utensilios/para-casa/vassouras",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 391,
                  "name": "Luvas",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/utensilios/para-casa/luvas",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 392,
                  "name": "Panos",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/utensilios/para-casa/panos",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 110,
              "name": "Para Automóvel",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/utensilios/para-automovel",
              "children": [
                {
                  "id": 385,
                  "name": "Acessórios",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/utensilios/para-automovel/acessorios",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 386,
                  "name": "Limpeza",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/utensilios/para-automovel/limpeza",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 111,
              "name": "Para Banheiro",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/utensilios/para-banheiro",
              "children": [
                {
                  "id": 387,
                  "name": "Lixeira",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/utensilios/para-banheiro/lixeira",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 388,
                  "name": "Acessórios",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/utensilios/para-banheiro/acessorios",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            },
            {
              "id": 112,
              "name": "Iluminação",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/utensilios/iluminacao",
              "children": [
                {
                  "id": 383,
                  "name": "Lâmpadas",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/utensilios/iluminacao/lampadas",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                },
                {
                  "id": 384,
                  "name": "Pilhas",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/utensilios/iluminacao/pilhas",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            }
          ],
          "Title": "utensilios",
          "MetaTagDescription": ""
        },
        {
          "id": 447,
          "name": "Vestuário",
          "hasChildren": true,
          "url": "https://www.giassi.com.br/vestuario",
          "children": [
            {
              "id": 448,
              "name": "Calçados",
              "hasChildren": true,
              "url": "https://www.giassi.com.br/vestuario/calcados",
              "children": [
                {
                  "id": 450,
                  "name": "Sandália",
                  "hasChildren": false,
                  "url": "https://www.giassi.com.br/vestuario/calcados/sandalia",
                  "children": [],
                  "Title": "",
                  "MetaTagDescription": ""
                }
              ],
              "Title": "",
              "MetaTagDescription": ""
            }
          ],
          "Title": "",
          "MetaTagDescription": ""
        }
      ]
];

function extractUrlsAndChildren(item, result) {
    if (!item.hasChildren) {
        result.push(item.url);
    }

    if (item.children) {
        item.children.forEach(child => extractUrlsAndChildren(child, result));
    }
}

const flattenedData = data.flat();
const urlArrayWithNoChildren = [];

flattenedData.forEach(item => extractUrlsAndChildren(item, urlArrayWithNoChildren));

fs.writeFileSync('output.txt', urlArrayWithNoChildren.join('\n'));

//console.table(urlArrayWithNoChildren);


