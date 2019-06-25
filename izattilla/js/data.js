var APP_DATA = {
  "scenes": [
    {
      "id": "0-panorama",
      "name": "panorama",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.15036783443097868,
          "pitch": 0.006809062960982715,
          "rotation": 3.141592653589793,
          "target": "1-zal_04_1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.8861080223693314,
          "pitch": 0.0987113020325161,
          "title": "Данияр",
          "text": "Дизайнер<div>Телефон:+998 90 666 22 22</div><div>Instagramm: @Daniyar</div>"
        }
      ]
    },
    {
      "id": "1-zal_04_1",
      "name": "zal_04_1",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.364510584910212,
          "pitch": 0.04664707339783192,
          "rotation": 0,
          "target": "0-panorama"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
