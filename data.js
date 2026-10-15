var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrada-porto",
      "name": "Entrada Portão",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.15938836622058083,
        "pitch": 0.03759500696797602,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.08349930312661691,
          "pitch": 0.20420985243521272,
          "rotation": 0,
          "target": "1-estrada-do-lago"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-estrada-do-lago",
      "name": "Estrada do Lago",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.04564734632692691,
        "pitch": -0.015038054614137764,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 1.2904722866561418,
          "pitch": 0.28224335588583926,
          "rotation": 0,
          "target": "2-ponte-do-lago"
        },
        {
          "yaw": -0.01176621148653112,
          "pitch": 0.28187566577400425,
          "rotation": 0,
          "target": "3-entrada-da-fonte"
        },
        {
          "yaw": -3.0620697627862405,
          "pitch": 0.34351678069889147,
          "rotation": 0,
          "target": "0-entrada-porto",
          "targetViewParameters": {
            "yaw": 2.914998062238464,  // Força a câmera a olhar para esse ângulo ao chegar na cena
          }
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-ponte-do-lago",
      "name": "Ponte do Lago",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -0.030881540834602816,
        "pitch": -0.015041749108668512,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -3.1070012581568545,
          "pitch": 0.4197485462221735,
          "rotation": 0,
          "target": "1-estrada-do-lago",
          "targetViewParameters": {
            "yaw": -1.804195241830497,  // Força a câmera a olhar para esse ângulo ao chegar na cena
          }
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-entrada-da-fonte",
      "name": "Entrada da Fonte",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -1.9463644786939547,
          "pitch": 0.36358037307992674,
          "rotation": 0,
          "target": "4-jardim-da-fonte"
        },
        {
          "yaw": -0.4203872293997648,
          "pitch": 0.36533788066499184,
          "rotation": 0,
          "target": "6-entrada-do-salo"
        },
        {
          "yaw": -3.0317395982295814,
          "pitch": 0.2640057709434558,
          "rotation": 0,
          "target": "1-estrada-do-lago",
          "targetViewParameters": {
            "yaw": -3.1413440697735684,  // Força a câmera a olhar para esse ângulo ao chegar na cena
          }
        },
        {
          "yaw": 1.5744510337626902,
          "pitch": 0.5296749407365482,
          "rotation": 0,
          "target": "16-salo-de-cerimnias"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-jardim-da-fonte",
      "name": "Jardim da Fonte",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.8895220292677202,
          "pitch": 0.36015018224210316,
          "rotation": 0,
          "target": "5-recanto-dos-noivos"
        },
        {
          "yaw": 3.0878249191607186,
          "pitch": 0.3366655385846613,
          "rotation": 0,
          "target": "3-entrada-da-fonte",
          "targetViewParameters": {
            "yaw": 1.0821095729732164,  // Força a câmera a olhar para esse ângulo ao chegar na cena
          }
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-recanto-dos-noivos",
      "name": "Recanto dos Noivos",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.6479449144979004,
          "pitch": 0.36782717445059454,
          "rotation": 0,
          "target": "6-entrada-do-salo",
          "targetViewParameters": {
            "yaw": 2.542851091716143,  // Força a câmera a olhar para esse ângulo ao chegar na cena
          }
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-entrada-do-salo",
      "name": "Entrada do Salão",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.680710420584111,
        "pitch": -0.0018480637267739297,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.05827323484675162,
          "pitch": 0.2697699974634915,
          "rotation": 0,
          "target": "7-salo-de-festas"
        },
        {
          "yaw": 1.4685499332239456,
          "pitch": 0.24170661896834034,
          "rotation": 0,
          "target": "11-entrada-do-salo-de-dana"
        },
        {
          "yaw": -2.229950009733976,
          "pitch": 0.5059312040329189,
          "rotation": 0,
          "target": "3-entrada-da-fonte",
          "targetViewParameters": {
            "yaw": -3.1087542655014904,  // Força a câmera a olhar para esse ângulo ao chegar na cena
          }
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-salo-de-festas",
      "name": "Salão de Festas",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.045784692544433625,
        "pitch": 0.022425762513815783,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.016583647174325478,
          "pitch": 0.49444401922108305,
          "rotation": 0,
          "target": "8-salo-de-festas---buffet"
        },
        {
          "yaw": -1.3366315594157285,
          "pitch": 0.43725015844102977,
          "rotation": 0,
          "target": "10-salo-de-festas---cascata"
        },
        {
          "yaw": 1.4514897689928867,
          "pitch": 0.33823043129801,
          "rotation": 0,
          "target": "9-salo-jardim-vertical"
        },
        {
          "yaw": -3.1244871155102594,
          "pitch": 0.459726989833273,
          "rotation": 0,
          "target": "6-entrada-do-salo",
          "targetViewParameters": {
            "yaw": -3.0238249154404784,  // Força a câmera a olhar para esse ângulo ao chegar na cena
          }
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-salo-de-festas---buffet",
      "name": "Salão de Festas - Buffet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.034908027216488335,
        "pitch": 0.003759513653534441,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 3.1166570046598565,
          "pitch": 0.5224060533438752,
          "rotation": 0,
          "target": "7-salo-de-festas",
          "targetViewParameters": {
            "yaw": -3.0536863927184417,  // Força a câmera a olhar para esse ângulo ao chegar na cena
          }
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-salo-jardim-vertical",
      "name": "Salão Jardim Vertical",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.068739645079134,
          "pitch": 0.4138148770824621,
          "rotation": 0,
          "target": "7-salo-de-festas",
          "targetViewParameters": {
            "yaw": -1.5600219650721598,  // Força a câmera a olhar para esse ângulo ao chegar na cena
          }
        },
        {
          "yaw": -0.061024315920137795,
          "pitch": 0.47515014870994143,
          "rotation": 5.497787143782138,
          "target": "12-salo-de-dana"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-salo-de-festas---cascata",
      "name": "Salão de Festas - Cascata",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.6246094514413603,
          "pitch": 0.48832776123109944,
          "rotation": 0,
          "target": "7-salo-de-festas",
          "targetViewParameters": {
            "yaw": 1.7353447975941485,  // Força a câmera a olhar para esse ângulo ao chegar na cena
          }
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-entrada-do-salo-de-dana",
      "name": "Entrada do Salão de Dança",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -2.593586161183943,
        "pitch": 0.037048477099066446,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 2.5406912580040295,
          "pitch": 0.4554861606976175,
          "rotation": 0,
          "target": "12-salo-de-dana"
        },
        {
          "yaw": -2.519243957432664,
          "pitch": 0.3187724327942476,
          "rotation": 0,
          "target": "14-estacionamento"
        },
        {
          "yaw": -0.47872655275286036,
          "pitch": 0.5535725728849545,
          "rotation": 6.283185307179586,
          "target": "17-piscina"
        },
        {
          "yaw": 0.07112470468122645,
          "pitch": 0.30736036725371463,
          "rotation": 11.780972450961727,
          "target": "15-entrada-salo-de-cerimnias",
          "targetViewParameters": {
            "yaw": -0.9163306447527368,  // Força a câmera a olhar para esse ângulo ao chegar na cena
          }
        },
        {
          "yaw": 0.5151855350383538,
          "pitch": 0.3042419580135878,
          "rotation": 0,
          "target": "6-entrada-do-salo",
          "targetViewParameters": {
            "yaw": -1.551666509334348,  // Força a câmera a olhar para esse ângulo ao chegar na cena
          }
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-salo-de-dana",
      "name": "Salão de Dança",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.03356402407681536,
        "pitch": -0.011278540960603323,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.006214393116939831,
          "pitch": 0.35717204788911516,
          "rotation": 0,
          "target": "13-pista-de-dana"
        },
        {
          "yaw": -1.7432849464095774,
          "pitch": 0.4075119376924885,
          "rotation": 0,
          "target": "9-salo-jardim-vertical",
          "targetViewParameters": {
            "yaw": 2.7897550145439567,  // Força a câmera a olhar para esse ângulo ao chegar na cena
          }
        },
        {
          "yaw": -3.0845910241954524,
          "pitch": 0.526751169087488,
          "rotation": 0,
          "target": "11-entrada-do-salo-de-dana",
          "targetViewParameters": {
            "yaw": -0.7030909147828677,  // Força a câmera a olhar para esse ângulo ao chegar na cena
          }
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-pista-de-dana",
      "name": "Pista de Dança",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.02820498616205036,
        "pitch": -0.007519027307068882,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -3.1220985325483674,
          "pitch": 0.49597400871592434,
          "rotation": 0,
          "target": "12-salo-de-dana",
          "targetViewParameters": {
            "yaw": -3.1083019959978984,  // Força a câmera a olhar para esse ângulo ao chegar na cena
          }
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-estacionamento",
      "name": "Estacionamento",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.7611457024324544,
          "pitch": 0.21848492147377385,
          "rotation": 0,
          "target": "11-entrada-do-salo-de-dana",
          "targetViewParameters": {
            "yaw": 0.7845727746977555,  // Força a câmera a olhar para esse ângulo ao chegar na cena
          }
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-entrada-salo-de-cerimnias",
      "name": "Entrada Salão de Cerimônias",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.038966203541150435,
          "pitch": 0.4325050181074843,
          "rotation": 0,
          "target": "16-salo-de-cerimnias"
        },
        {
          "yaw": 1.6270344166586375,
          "pitch": 0.14994456122720123,
          "rotation": 0.7853981633974483,
          "target": "11-entrada-do-salo-de-dana",
          "targetViewParameters": {
            "yaw": 3.0954049435750584,  // Força a câmera a olhar para esse ângulo ao chegar na cena
          }
        },
        {
          "yaw": 1.4426707350977441,
          "pitch": 0.14910512317325164,
          "rotation": 5.497787143782138,
          "target": "6-entrada-do-salo",
          "targetViewParameters": {
            "yaw": -1.3376236322700645,  // Força a câmera a olhar para esse ângulo ao chegar na cena
          }

        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-salo-de-cerimnias",
      "name": "Salão de Cerimônias",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.115618611230497,
          "pitch": 0.39741057779990463,
          "rotation": 0,
          "target": "15-entrada-salo-de-cerimnias",
          "targetViewParameters": {
            "yaw": 2.9858183421774562,  // Força a câmera a olhar para esse ângulo ao chegar na cena
          }
        },
        {
          "yaw": 1.3514041169359334,
          "pitch": 0.41717013368983835,
          "rotation": 0,
          "target": "6-entrada-do-salo",
          "targetViewParameters": {
            "yaw": 0.34178011033171174,  // Força a câmera a olhar para esse ângulo ao chegar na cena
          }
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-piscina",
      "name": "Piscina",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.731893057569285,
          "pitch": 0.4087229534134984,
          "rotation": 6.283185307179586,
          "target": "6-entrada-do-salo",
          "targetViewParameters": {
            "yaw": -1.5407358454542077,  // Força a câmera a olhar para esse ângulo ao chegar na cena
          }
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Recanto Sollare Eventos",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
