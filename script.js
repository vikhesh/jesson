TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "vfov": 180,
  "hfovMax": 120,
  "hfovMin": 60,
  "id": "panorama_5AE1BDB3_57F3_C155_419E_B9624DA116EC",
  "adjacentPanoramas": [
   {
    "backwardYaw": 89.05,
    "panorama": {
     "vfov": 180,
     "hfovMax": 120,
     "hfovMin": 60,
     "id": "panorama_5BD1542C_57F3_C773_41B1_CA65F0FE709E",
     "adjacentPanoramas": [
      {
       "backwardYaw": -90.95,
       "panorama": "this.panorama_5AE1BDB3_57F3_C155_419E_B9624DA116EC",
       "class": "AdjacentPanorama",
       "distance": 1,
       "yaw": 89.05
      }
     ],
     "pitch": 0,
     "label": "LIVING",
     "hfov": 360,
     "class": "Panorama",
     "partial": false,
     "thumbnailUrl": "media/panorama_5BD1542C_57F3_C773_41B1_CA65F0FE709E_t.jpg",
     "frames": [
      {
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 2048,
          "width": 4096,
          "url": "media/panorama_5BD1542C_57F3_C773_41B1_CA65F0FE709E_hq.jpeg",
          "class": "ImageResourceLevel"
         },
         {
          "height": 1608,
          "width": 3217,
          "url": "media/panorama_5BD1542C_57F3_C773_41B1_CA65F0FE709E.jpeg",
          "class": "ImageResourceLevel"
         }
        ]
       },
       "thumbnailUrl": "media/panorama_5BD1542C_57F3_C773_41B1_CA65F0FE709E_t.jpg",
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_5AE1BDB3_57F3_C155_419E_B9624DA116EC, this.camera_472AADC8_5816_4133_41D4_D2AC7E7893C5); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "id": "overlay_5766FA1B_5811_C356_41D5_B31A455A6522",
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 65,
              "width": 65,
              "url": "media/panorama_5BD1542C_57F3_C773_41B1_CA65F0FE709E_0_HS_0_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "hfov": 9.83,
           "yaw": 89.05,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -31.59
          }
         ],
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "items": [
          {
           "yaw": 89.05,
           "hfov": 9.83,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 131,
              "width": 131,
              "url": "media/panorama_5BD1542C_57F3_C773_41B1_CA65F0FE709E_0_HS_0_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -31.59
          }
         ]
        }
       ]
      }
     ]
    },
    "class": "AdjacentPanorama",
    "distance": 1,
    "yaw": -90.95
   },
   {
    "backwardYaw": -174.61,
    "panorama": {
     "vfov": 180,
     "hfovMax": 120,
     "hfovMin": 60,
     "id": "panorama_5BD49A2D_57F3_C34D_41C1_F2AC73341CC7",
     "adjacentPanoramas": [
      {
       "backwardYaw": -0.64,
       "panorama": "this.panorama_5AE1BDB3_57F3_C155_419E_B9624DA116EC",
       "class": "AdjacentPanorama",
       "distance": 1,
       "yaw": -174.61
      },
      {
       "backwardYaw": -155.77,
       "panorama": {
        "vfov": 180,
        "hfovMax": 120,
        "hfovMin": 60,
        "id": "panorama_5BD4E651_57F2_43D2_41D2_B88D37448834",
        "adjacentPanoramas": [
         {
          "backwardYaw": 34.9,
          "panorama": "this.panorama_5BD49A2D_57F3_C34D_41C1_F2AC73341CC7",
          "class": "AdjacentPanorama",
          "distance": 1,
          "yaw": -155.77
         }
        ],
        "pitch": 0,
        "label": "COURTYARD",
        "hfov": 360,
        "class": "Panorama",
        "partial": false,
        "thumbnailUrl": "media/panorama_5BD4E651_57F2_43D2_41D2_B88D37448834_t.jpg",
        "frames": [
         {
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 2048,
             "width": 4096,
             "url": "media/panorama_5BD4E651_57F2_43D2_41D2_B88D37448834_hq.jpeg",
             "class": "ImageResourceLevel"
            },
            {
             "height": 1608,
             "width": 3217,
             "url": "media/panorama_5BD4E651_57F2_43D2_41D2_B88D37448834.jpeg",
             "class": "ImageResourceLevel"
            }
           ]
          },
          "thumbnailUrl": "media/panorama_5BD4E651_57F2_43D2_41D2_B88D37448834_t.jpg",
          "class": "SphericPanoramaFrame",
          "overlays": [
           {
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_5BD49A2D_57F3_C34D_41C1_F2AC73341CC7, this.camera_475C3E49_5816_4332_41D4_DF0A667504B0); this.mainPlayList.set('selectedIndex', 2)"
             }
            ],
            "id": "overlay_49CFB7D2_5812_40D7_41D2_B32E8479AA52",
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 72,
                 "width": 58,
                 "url": "media/panorama_5BD4E651_57F2_43D2_41D2_B88D37448834_0_HS_0_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "hfov": 9.65,
              "yaw": -155.77,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -20.16
             }
            ],
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "items": [
             {
              "yaw": -155.77,
              "hfov": 9.65,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 145,
                 "width": 116,
                 "url": "media/panorama_5BD4E651_57F2_43D2_41D2_B88D37448834_0_HS_0_0.png",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -20.16
             }
            ]
           }
          ]
         }
        ]
       },
       "class": "AdjacentPanorama",
       "distance": 1,
       "yaw": 34.9
      },
      {
       "backwardYaw": 23.09,
       "panorama": {
        "vfov": 180,
        "hfovMax": 120,
        "hfovMin": 60,
        "id": "panorama_5BD76A36_57F2_435F_41C9_2F3CF02B8972",
        "adjacentPanoramas": [
         {
          "backwardYaw": -82.3,
          "panorama": "this.panorama_5BD49A2D_57F3_C34D_41C1_F2AC73341CC7",
          "class": "AdjacentPanorama",
          "distance": 1,
          "yaw": 23.09
         }
        ],
        "pitch": 0,
        "label": "BEDROOM 1",
        "hfov": 360,
        "class": "Panorama",
        "partial": false,
        "thumbnailUrl": "media/panorama_5BD76A36_57F2_435F_41C9_2F3CF02B8972_t.jpg",
        "frames": [
         {
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 2048,
             "width": 4096,
             "url": "media/panorama_5BD76A36_57F2_435F_41C9_2F3CF02B8972_hq.jpeg",
             "class": "ImageResourceLevel"
            },
            {
             "height": 1608,
             "width": 3217,
             "url": "media/panorama_5BD76A36_57F2_435F_41C9_2F3CF02B8972.jpeg",
             "class": "ImageResourceLevel"
            }
           ]
          },
          "thumbnailUrl": "media/panorama_5BD76A36_57F2_435F_41C9_2F3CF02B8972_t.jpg",
          "class": "SphericPanoramaFrame",
          "overlays": [
           {
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_5BD49A2D_57F3_C34D_41C1_F2AC73341CC7, this.camera_46D05DBE_5816_414F_41D0_BDDFEADCEA08); this.mainPlayList.set('selectedIndex', 2)"
             }
            ],
            "id": "overlay_4C78762B_5812_C375_41CE_DCCCDEB0D811",
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 75,
                 "width": 75,
                 "url": "media/panorama_5BD76A36_57F2_435F_41C9_2F3CF02B8972_0_HS_0_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "hfov": 12.81,
              "yaw": 23.09,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -15.11
             }
            ],
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "items": [
             {
              "yaw": 23.09,
              "hfov": 12.81,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 151,
                 "width": 151,
                 "url": "media/panorama_5BD76A36_57F2_435F_41C9_2F3CF02B8972_0_HS_0_0.png",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -15.11
             }
            ]
           }
          ]
         }
        ]
       },
       "class": "AdjacentPanorama",
       "distance": 1,
       "yaw": -82.3
      },
      {
       "backwardYaw": 115.43,
       "panorama": {
        "vfov": 180,
        "hfovMax": 120,
        "hfovMin": 60,
        "id": "panorama_5BD4AE4D_57F2_43CD_41C0_9CF3D4EBA4F3",
        "adjacentPanoramas": [
         {
          "backwardYaw": 80.62,
          "panorama": {
           "vfov": 180,
           "hfovMax": 120,
           "hfovMin": 60,
           "id": "panorama_5BD7443C_57F2_4753_41B2_F8742134D8F9",
           "adjacentPanoramas": [
            {
             "backwardYaw": -80.91,
             "panorama": "this.panorama_5BD4AE4D_57F2_43CD_41C0_9CF3D4EBA4F3",
             "class": "AdjacentPanorama",
             "distance": 1,
             "yaw": 80.62
            }
           ],
           "pitch": 0,
           "label": "PRAYER ROOM",
           "hfov": 360,
           "class": "Panorama",
           "partial": false,
           "thumbnailUrl": "media/panorama_5BD7443C_57F2_4753_41B2_F8742134D8F9_t.jpg",
           "frames": [
            {
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 2048,
                "width": 4096,
                "url": "media/panorama_5BD7443C_57F2_4753_41B2_F8742134D8F9_hq.jpeg",
                "class": "ImageResourceLevel"
               },
               {
                "height": 1608,
                "width": 3217,
                "url": "media/panorama_5BD7443C_57F2_4753_41B2_F8742134D8F9.jpeg",
                "class": "ImageResourceLevel"
               }
              ]
             },
             "thumbnailUrl": "media/panorama_5BD7443C_57F2_4753_41B2_F8742134D8F9_t.jpg",
             "class": "SphericPanoramaFrame",
             "overlays": [
              {
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_5BD4AE4D_57F2_43CD_41C0_9CF3D4EBA4F3, this.camera_47A83E62_5816_43F6_41C2_309D7E8CE59F); this.mainPlayList.set('selectedIndex', 8)"
                }
               ],
               "id": "overlay_4C314A65_5813_C3FD_41B1_83F8FBA0DCAA",
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 75,
                    "width": 75,
                    "url": "media/panorama_5BD7443C_57F2_4753_41B2_F8742134D8F9_0_HS_0_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "hfov": 12.61,
                 "yaw": 80.62,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -18.13
                }
               ],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "items": [
                {
                 "yaw": 80.62,
                 "hfov": 12.61,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 151,
                    "width": 151,
                    "url": "media/panorama_5BD7443C_57F2_4753_41B2_F8742134D8F9_0_HS_0_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -18.13
                }
               ]
              }
             ]
            }
           ]
          },
          "class": "AdjacentPanorama",
          "distance": 1,
          "yaw": -80.91
         },
         {
          "backwardYaw": -58.92,
          "panorama": "this.panorama_5BD49A2D_57F3_C34D_41C1_F2AC73341CC7",
          "class": "AdjacentPanorama",
          "distance": 1,
          "yaw": 115.43
         },
         {
          "backwardYaw": 121.07,
          "panorama": {
           "vfov": 180,
           "hfovMax": 120,
           "hfovMin": 60,
           "id": "panorama_4B3698DE_5812_40CE_41CD_DE5B45642126",
           "adjacentPanoramas": [
            {
             "backwardYaw": -20.48,
             "panorama": "this.panorama_5BD4AE4D_57F2_43CD_41C0_9CF3D4EBA4F3",
             "class": "AdjacentPanorama",
             "distance": 1,
             "yaw": 121.07
            }
           ],
           "pitch": 0,
           "label": "17",
           "hfov": 360,
           "class": "Panorama",
           "partial": false,
           "thumbnailUrl": "media/panorama_4B3698DE_5812_40CE_41CD_DE5B45642126_t.jpg",
           "frames": [
            {
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 2048,
                "width": 4096,
                "url": "media/panorama_4B3698DE_5812_40CE_41CD_DE5B45642126_hq.jpeg",
                "class": "ImageResourceLevel"
               },
               {
                "height": 1608,
                "width": 3217,
                "url": "media/panorama_4B3698DE_5812_40CE_41CD_DE5B45642126.jpeg",
                "class": "ImageResourceLevel"
               }
              ]
             },
             "thumbnailUrl": "media/panorama_4B3698DE_5812_40CE_41CD_DE5B45642126_t.jpg",
             "class": "SphericPanoramaFrame",
             "overlays": [
              {
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_5BD4AE4D_57F2_43CD_41C0_9CF3D4EBA4F3, this.camera_47419E35_5816_4352_41BD_3B742363AD11); this.mainPlayList.set('selectedIndex', 8)"
                }
               ],
               "id": "overlay_4F301361_5832_C1FB_41C8_AD5CC65A8A84",
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 75,
                    "width": 75,
                    "url": "media/panorama_4B3698DE_5812_40CE_41CD_DE5B45642126_0_HS_0_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "hfov": 12.46,
                 "yaw": 121.07,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -20.14
                }
               ],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "items": [
                {
                 "yaw": 121.07,
                 "hfov": 12.46,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 151,
                    "width": 151,
                    "url": "media/panorama_4B3698DE_5812_40CE_41CD_DE5B45642126_0_HS_0_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -20.14
                }
               ]
              }
             ]
            }
           ]
          },
          "class": "AdjacentPanorama",
          "distance": 1,
          "yaw": -20.48
         }
        ],
        "pitch": 0,
        "label": "HALL CAM 3",
        "hfov": 360,
        "class": "Panorama",
        "partial": false,
        "thumbnailUrl": "media/panorama_5BD4AE4D_57F2_43CD_41C0_9CF3D4EBA4F3_t.jpg",
        "frames": [
         {
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 2048,
             "width": 4096,
             "url": "media/panorama_5BD4AE4D_57F2_43CD_41C0_9CF3D4EBA4F3_hq.jpeg",
             "class": "ImageResourceLevel"
            },
            {
             "height": 1608,
             "width": 3217,
             "url": "media/panorama_5BD4AE4D_57F2_43CD_41C0_9CF3D4EBA4F3.jpeg",
             "class": "ImageResourceLevel"
            }
           ]
          },
          "thumbnailUrl": "media/panorama_5BD4AE4D_57F2_43CD_41C0_9CF3D4EBA4F3_t.jpg",
          "class": "SphericPanoramaFrame",
          "overlays": [
           {
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_5BD49A2D_57F3_C34D_41C1_F2AC73341CC7, this.camera_473ABDDB_5816_40D6_41B4_7194BD94CDF3); this.mainPlayList.set('selectedIndex', 2)"
             }
            ],
            "id": "overlay_4B7B3FD3_5816_40D6_41BE_3D18C145A867",
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 87,
                 "width": 71,
                 "url": "media/panorama_5BD4AE4D_57F2_43CD_41C0_9CF3D4EBA4F3_0_HS_0_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "hfov": 11.42,
              "yaw": 115.43,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -24.43
             }
            ],
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "items": [
             {
              "yaw": 115.43,
              "hfov": 11.42,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 174,
                 "width": 142,
                 "url": "media/panorama_5BD4AE4D_57F2_43CD_41C0_9CF3D4EBA4F3_0_HS_0_0.png",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -24.43
             }
            ]
           },
           {
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_5BD7443C_57F2_4753_41B2_F8742134D8F9, this.camera_47229DD2_5816_40D6_418E_9769DF98AC80); this.mainPlayList.set('selectedIndex', 9)"
             }
            ],
            "id": "overlay_4C54F4E2_5812_C0F7_41CA_8E41A32C0D0F",
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 75,
                 "width": 75,
                 "url": "media/panorama_5BD4AE4D_57F2_43CD_41C0_9CF3D4EBA4F3_0_HS_1_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "hfov": 12.61,
              "yaw": -80.91,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -18.13
             }
            ],
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "items": [
             {
              "yaw": -80.91,
              "hfov": 12.61,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 151,
                 "width": 151,
                 "url": "media/panorama_5BD4AE4D_57F2_43CD_41C0_9CF3D4EBA4F3_0_HS_1_0.png",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -18.13
             }
            ]
           },
           {
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_4B3698DE_5812_40CE_41CD_DE5B45642126, this.camera_47303DE4_5816_40F2_41D0_09DA21A73DE5); this.mainPlayList.set('selectedIndex', 16)"
             }
            ],
            "id": "overlay_4F698A47_5832_433E_41AD_B73FA5D45E3B",
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 70,
                 "width": 65,
                 "url": "media/panorama_5BD4AE4D_57F2_43CD_41C0_9CF3D4EBA4F3_0_HS_2_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "hfov": 11.04,
              "yaw": -20.48,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -16.89
             }
            ],
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "items": [
             {
              "yaw": -20.48,
              "hfov": 11.04,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 140,
                 "width": 131,
                 "url": "media/panorama_5BD4AE4D_57F2_43CD_41C0_9CF3D4EBA4F3_0_HS_2_0.png",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -16.89
             }
            ]
           }
          ]
         }
        ]
       },
       "class": "AdjacentPanorama",
       "distance": 1,
       "yaw": -58.92
      },
      {
       "backwardYaw": 7.53,
       "panorama": {
        "vfov": 180,
        "hfovMax": 120,
        "hfovMin": 60,
        "id": "panorama_5BD7405D_57F2_5FD2_41C9_703957A2904B",
        "adjacentPanoramas": [
         {
          "backwardYaw": -174.15,
          "panorama": {
           "vfov": 180,
           "hfovMax": 120,
           "hfovMin": 60,
           "id": "panorama_5BD776B7_57F2_435D_41BA_C096A5774026",
           "adjacentPanoramas": [
            {
             "backwardYaw": -0.01,
             "panorama": {
              "vfov": 180,
              "hfovMax": 120,
              "hfovMin": 60,
              "id": "panorama_5BD792C2_57F2_C337_41D4_F870F1386049",
              "adjacentPanoramas": [
               {
                "backwardYaw": 83.15,
                "panorama": "this.panorama_5BD776B7_57F2_435D_41BA_C096A5774026",
                "class": "AdjacentPanorama",
                "distance": 1,
                "yaw": -0.01
               }
              ],
              "pitch": 0,
              "label": "UPPER LIVING CAM 3",
              "hfov": 360,
              "class": "Panorama",
              "partial": false,
              "thumbnailUrl": "media/panorama_5BD792C2_57F2_C337_41D4_F870F1386049_t.jpg",
              "frames": [
               {
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 2048,
                   "width": 4096,
                   "url": "media/panorama_5BD792C2_57F2_C337_41D4_F870F1386049_hq.jpeg",
                   "class": "ImageResourceLevel"
                  },
                  {
                   "height": 1608,
                   "width": 3217,
                   "url": "media/panorama_5BD792C2_57F2_C337_41D4_F870F1386049.jpeg",
                   "class": "ImageResourceLevel"
                  }
                 ]
                },
                "thumbnailUrl": "media/panorama_5BD792C2_57F2_C337_41D4_F870F1386049_t.jpg",
                "class": "SphericPanoramaFrame",
                "overlays": [
                 {
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_5BD776B7_57F2_435D_41BA_C096A5774026, this.camera_46E58D74_5816_41D3_41C2_82C4C43DA3ED); this.mainPlayList.set('selectedIndex', 12)"
                   }
                  ],
                  "id": "overlay_4E830A84_5832_C333_41CC_F4F130E73BCD",
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 50,
                       "width": 58,
                       "url": "media/panorama_5BD792C2_57F2_C337_41D4_F870F1386049_0_HS_0_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "hfov": 9.49,
                    "yaw": -0.01,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -22.67
                   }
                  ],
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "yaw": -0.01,
                    "hfov": 9.49,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 100,
                       "width": 116,
                       "url": "media/panorama_5BD792C2_57F2_C337_41D4_F870F1386049_0_HS_0_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -22.67
                   }
                  ]
                 }
                ]
               }
              ]
             },
             "class": "AdjacentPanorama",
             "distance": 1,
             "yaw": 83.15
            },
            {
             "backwardYaw": -67.84,
             "panorama": {
              "vfov": 180,
              "hfovMax": 120,
              "hfovMin": 60,
              "id": "panorama_5BD75CC4_57F2_4733_41D4_F2C9846702DF",
              "adjacentPanoramas": [
               {
                "backwardYaw": 19.46,
                "panorama": "this.panorama_5BD776B7_57F2_435D_41BA_C096A5774026",
                "class": "AdjacentPanorama",
                "distance": 1,
                "yaw": -67.84
               },
               {
                "backwardYaw": -20.36,
                "panorama": {
                 "vfov": 180,
                 "hfovMax": 120,
                 "hfovMin": 60,
                 "id": "panorama_5BD7C8E3_57F2_C0F6_41D1_CF361C833D65",
                 "adjacentPanoramas": [
                  {
                   "backwardYaw": 160.91,
                   "panorama": "this.panorama_5BD75CC4_57F2_4733_41D4_F2C9846702DF",
                   "class": "AdjacentPanorama",
                   "distance": 1,
                   "yaw": -20.36
                  }
                 ],
                 "pitch": 0,
                 "label": "FIRST FLOOR BEDROOM",
                 "hfov": 360,
                 "class": "Panorama",
                 "partial": false,
                 "thumbnailUrl": "media/panorama_5BD7C8E3_57F2_C0F6_41D1_CF361C833D65_t.jpg",
                 "frames": [
                  {
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "height": 2048,
                      "width": 4096,
                      "url": "media/panorama_5BD7C8E3_57F2_C0F6_41D1_CF361C833D65_hq.jpeg",
                      "class": "ImageResourceLevel"
                     },
                     {
                      "height": 1608,
                      "width": 3217,
                      "url": "media/panorama_5BD7C8E3_57F2_C0F6_41D1_CF361C833D65.jpeg",
                      "class": "ImageResourceLevel"
                     }
                    ]
                   },
                   "thumbnailUrl": "media/panorama_5BD7C8E3_57F2_C0F6_41D1_CF361C833D65_t.jpg",
                   "class": "SphericPanoramaFrame",
                   "overlays": [
                    {
                     "useHandCursor": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_5BD75CC4_57F2_4733_41D4_F2C9846702DF, this.camera_47D16F3F_5816_414D_41C3_524A8223C302); this.mainPlayList.set('selectedIndex', 13)"
                      }
                     ],
                     "id": "overlay_4EC8D81D_5833_CF4D_41CE_CE94D2078FC4",
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 60,
                          "width": 47,
                          "url": "media/panorama_5BD7C8E3_57F2_C0F6_41D1_CF361C833D65_0_HS_0_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "hfov": 7.38,
                       "yaw": -20.36,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -26.82
                      }
                     ],
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay",
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "yaw": -20.36,
                       "hfov": 7.38,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 120,
                          "width": 94,
                          "url": "media/panorama_5BD7C8E3_57F2_C0F6_41D1_CF361C833D65_0_HS_0_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -26.82
                      }
                     ]
                    }
                   ]
                  }
                 ]
                },
                "class": "AdjacentPanorama",
                "distance": 1,
                "yaw": 160.91
               }
              ],
              "pitch": 0,
              "label": "UPPER LIVING CAM 2",
              "hfov": 360,
              "class": "Panorama",
              "partial": false,
              "thumbnailUrl": "media/panorama_5BD75CC4_57F2_4733_41D4_F2C9846702DF_t.jpg",
              "frames": [
               {
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 2048,
                   "width": 4096,
                   "url": "media/panorama_5BD75CC4_57F2_4733_41D4_F2C9846702DF_hq.jpeg",
                   "class": "ImageResourceLevel"
                  },
                  {
                   "height": 1608,
                   "width": 3217,
                   "url": "media/panorama_5BD75CC4_57F2_4733_41D4_F2C9846702DF.jpeg",
                   "class": "ImageResourceLevel"
                  }
                 ]
                },
                "thumbnailUrl": "media/panorama_5BD75CC4_57F2_4733_41D4_F2C9846702DF_t.jpg",
                "class": "SphericPanoramaFrame",
                "overlays": [
                 {
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_5BD776B7_57F2_435D_41BA_C096A5774026, this.camera_46C98D99_5816_4155_41D4_FC502F7BAD3E); this.mainPlayList.set('selectedIndex', 12)"
                   }
                  ],
                  "id": "overlay_4E32B26E_5831_C3CF_41C7_43289F5820BA",
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 55,
                       "width": 47,
                       "url": "media/panorama_5BD75CC4_57F2_4733_41D4_F2C9846702DF_0_HS_0_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "hfov": 7.9,
                    "yaw": -67.84,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -17.15
                   }
                  ],
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "yaw": -67.84,
                    "hfov": 7.9,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 111,
                       "width": 94,
                       "url": "media/panorama_5BD75CC4_57F2_4733_41D4_F2C9846702DF_0_HS_0_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -17.15
                   }
                  ]
                 },
                 {
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_5BD7C8E3_57F2_C0F6_41D1_CF361C833D65, this.camera_46C38DA2_5816_4177_41C3_36E70CE835F7); this.mainPlayList.set('selectedIndex', 15)"
                   }
                  ],
                  "id": "overlay_4E39D548_5832_4133_41C2_A5B8AB48F113",
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 44,
                       "width": 68,
                       "url": "media/panorama_5BD75CC4_57F2_4733_41D4_F2C9846702DF_0_HS_1_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "hfov": 10.28,
                    "yaw": 160.91,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -31.49
                   }
                  ],
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "yaw": 160.91,
                    "hfov": 10.28,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 89,
                       "width": 137,
                       "url": "media/panorama_5BD75CC4_57F2_4733_41D4_F2C9846702DF_0_HS_1_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -31.49
                   }
                  ]
                 }
                ]
               }
              ]
             },
             "class": "AdjacentPanorama",
             "distance": 1,
             "yaw": 19.46
            },
            {
             "backwardYaw": -7.04,
             "panorama": "this.panorama_5BD7405D_57F2_5FD2_41C9_703957A2904B",
             "class": "AdjacentPanorama",
             "distance": 1,
             "yaw": -174.15
            }
           ],
           "pitch": 0,
           "label": "UPPER LIVING CAM 1",
           "hfov": 360,
           "class": "Panorama",
           "partial": false,
           "thumbnailUrl": "media/panorama_5BD776B7_57F2_435D_41BA_C096A5774026_t.jpg",
           "frames": [
            {
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 2048,
                "width": 4096,
                "url": "media/panorama_5BD776B7_57F2_435D_41BA_C096A5774026_hq.jpeg",
                "class": "ImageResourceLevel"
               },
               {
                "height": 1608,
                "width": 3217,
                "url": "media/panorama_5BD776B7_57F2_435D_41BA_C096A5774026.jpeg",
                "class": "ImageResourceLevel"
               }
              ]
             },
             "thumbnailUrl": "media/panorama_5BD776B7_57F2_435D_41BA_C096A5774026_t.jpg",
             "class": "SphericPanoramaFrame",
             "overlays": [
              {
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_5BD7405D_57F2_5FD2_41C9_703957A2904B, this.camera_46F61D90_5816_4153_41C0_09F31202EF33); this.mainPlayList.set('selectedIndex', 11)"
                }
               ],
               "id": "overlay_4D4A5F2F_582E_414E_41D4_9A7DE8D4DEDC",
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 57,
                    "width": 57,
                    "url": "media/panorama_5BD776B7_57F2_435D_41BA_C096A5774026_0_HS_0_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "hfov": 9.34,
                 "yaw": -174.15,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -23.58
                }
               ],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "items": [
                {
                 "yaw": -174.15,
                 "hfov": 9.34,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 114,
                    "width": 115,
                    "url": "media/panorama_5BD776B7_57F2_435D_41BA_C096A5774026_0_HS_0_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -23.58
                }
               ]
              },
              {
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_5BD792C2_57F2_C337_41D4_F870F1386049, this.camera_46F8AD7D_5816_41CD_41C0_40946945A024); this.mainPlayList.set('selectedIndex', 14)"
                }
               ],
               "id": "overlay_4D3CFB09_582F_C135_4178_512BB7A5C8EC",
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 58,
                    "width": 55,
                    "url": "media/panorama_5BD776B7_57F2_435D_41BA_C096A5774026_0_HS_1_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "hfov": 8.83,
                 "yaw": 83.15,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -25.44
                }
               ],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "items": [
                {
                 "yaw": 83.15,
                 "hfov": 8.83,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 117,
                    "width": 111,
                    "url": "media/panorama_5BD776B7_57F2_435D_41BA_C096A5774026_0_HS_1_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -25.44
                }
               ]
              },
              {
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_5BD75CC4_57F2_4733_41D4_F2C9846702DF, this.camera_46FC7D86_5816_413F_41D5_FC3311C80AE7); this.mainPlayList.set('selectedIndex', 13)"
                }
               ],
               "id": "overlay_4DB15025_582E_DF7D_41D0_A4B195652489",
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 67,
                    "width": 42,
                    "url": "media/panorama_5BD776B7_57F2_435D_41BA_C096A5774026_0_HS_2_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "hfov": 7.17,
                 "yaw": 19.46,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -17.4
                }
               ],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "items": [
                {
                 "yaw": 19.46,
                 "hfov": 7.17,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 134,
                    "width": 85,
                    "url": "media/panorama_5BD776B7_57F2_435D_41BA_C096A5774026_0_HS_2_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -17.4
                }
               ]
              }
             ]
            }
           ]
          },
          "class": "AdjacentPanorama",
          "distance": 1,
          "yaw": -7.04
         },
         {
          "backwardYaw": -94.01,
          "panorama": "this.panorama_5BD49A2D_57F3_C34D_41C1_F2AC73341CC7",
          "class": "AdjacentPanorama",
          "distance": 1,
          "yaw": 7.53
         }
        ],
        "pitch": 0,
        "label": "STAIR",
        "hfov": 360,
        "class": "Panorama",
        "partial": false,
        "thumbnailUrl": "media/panorama_5BD7405D_57F2_5FD2_41C9_703957A2904B_t.jpg",
        "frames": [
         {
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 2048,
             "width": 4096,
             "url": "media/panorama_5BD7405D_57F2_5FD2_41C9_703957A2904B_hq.jpeg",
             "class": "ImageResourceLevel"
            },
            {
             "height": 1608,
             "width": 3217,
             "url": "media/panorama_5BD7405D_57F2_5FD2_41C9_703957A2904B.jpeg",
             "class": "ImageResourceLevel"
            }
           ]
          },
          "thumbnailUrl": "media/panorama_5BD7405D_57F2_5FD2_41C9_703957A2904B_t.jpg",
          "class": "SphericPanoramaFrame",
          "overlays": [
           {
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_5BD776B7_57F2_435D_41BA_C096A5774026, this.camera_47CB4F11_5816_4152_41BD_2C4DFA570274); this.mainPlayList.set('selectedIndex', 12)"
             }
            ],
            "id": "overlay_4D4E5D31_5811_C152_41CA_27D019B8513E",
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 64,
                 "width": 64,
                 "url": "media/panorama_5BD7405D_57F2_5FD2_41C9_703957A2904B_0_HS_0_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "hfov": 11.22,
              "yaw": -7.04,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -6.09
             }
            ],
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "items": [
             {
              "yaw": -7.04,
              "hfov": 11.22,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 128,
                 "width": 128,
                 "url": "media/panorama_5BD7405D_57F2_5FD2_41C9_703957A2904B_0_HS_0_0.png",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -6.09
             }
            ]
           },
           {
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_5BD49A2D_57F3_C34D_41C1_F2AC73341CC7, this.camera_47C5FF26_5816_417E_41B6_9F37F44A1458); this.mainPlayList.set('selectedIndex', 2)"
             }
            ],
            "id": "overlay_4CE4FB53_582E_C1D5_4175_7130E253846E",
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 91,
                 "width": 38,
                 "url": "media/panorama_5BD7405D_57F2_5FD2_41C9_703957A2904B_0_HS_1_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "hfov": 5.75,
              "yaw": 7.53,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -31.84
             }
            ],
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "items": [
             {
              "yaw": 7.53,
              "hfov": 5.75,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 182,
                 "width": 76,
                 "url": "media/panorama_5BD7405D_57F2_5FD2_41C9_703957A2904B_0_HS_1_0.png",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -31.84
             }
            ]
           }
          ]
         }
        ]
       },
       "class": "AdjacentPanorama",
       "distance": 1,
       "yaw": -94.01
      },
      {
       "backwardYaw": -41.08,
       "panorama": {
        "vfov": 180,
        "hfovMax": 120,
        "hfovMin": 60,
        "id": "panorama_5BD49037_57F3_BF5D_414E_CF9E7E9ADD16",
        "adjacentPanoramas": [
         {
          "backwardYaw": 121.08,
          "panorama": "this.panorama_5BD49A2D_57F3_C34D_41C1_F2AC73341CC7",
          "class": "AdjacentPanorama",
          "distance": 1,
          "yaw": -41.08
         },
         {
          "backwardYaw": -84.8,
          "panorama": {
           "vfov": 180,
           "hfovMax": 120,
           "hfovMin": 60,
           "id": "panorama_5BD75C97_57F2_475D_41C6_441C0FC7578F",
           "adjacentPanoramas": [
            {
             "backwardYaw": -164.18,
             "panorama": {
              "vfov": 180,
              "hfovMax": 120,
              "hfovMin": 60,
              "id": "panorama_5BD4B264_57F2_43F2_419D_9AE2EDC1C21A",
              "adjacentPanoramas": [
               {
                "backwardYaw": 3.51,
                "panorama": "this.panorama_5BD75C97_57F2_475D_41C6_441C0FC7578F",
                "class": "AdjacentPanorama",
                "distance": 1,
                "yaw": -164.18
               },
               {
                "backwardYaw": -86.43,
                "panorama": {
                 "vfov": 180,
                 "hfovMax": 120,
                 "hfovMin": 60,
                 "id": "panorama_5BD7485E_57F2_4FCF_41C5_6AC96E3DC608",
                 "adjacentPanoramas": [
                  {
                   "backwardYaw": 82.14,
                   "panorama": "this.panorama_5BD4B264_57F2_43F2_419D_9AE2EDC1C21A",
                   "class": "AdjacentPanorama",
                   "distance": 1,
                   "yaw": -86.43
                  }
                 ],
                 "pitch": 0,
                 "label": "KITCHEN CAM 2",
                 "hfov": 360,
                 "class": "Panorama",
                 "partial": false,
                 "thumbnailUrl": "media/panorama_5BD7485E_57F2_4FCF_41C5_6AC96E3DC608_t.jpg",
                 "frames": [
                  {
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "height": 2048,
                      "width": 4096,
                      "url": "media/panorama_5BD7485E_57F2_4FCF_41C5_6AC96E3DC608_hq.jpeg",
                      "class": "ImageResourceLevel"
                     },
                     {
                      "height": 1608,
                      "width": 3217,
                      "url": "media/panorama_5BD7485E_57F2_4FCF_41C5_6AC96E3DC608.jpeg",
                      "class": "ImageResourceLevel"
                     }
                    ]
                   },
                   "thumbnailUrl": "media/panorama_5BD7485E_57F2_4FCF_41C5_6AC96E3DC608_t.jpg",
                   "class": "SphericPanoramaFrame",
                   "overlays": [
                    {
                     "useHandCursor": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_5BD4B264_57F2_43F2_419D_9AE2EDC1C21A, this.camera_47773E1C_5816_4352_41D1_C5A0443F9DE2); this.mainPlayList.set('selectedIndex', 6)"
                      }
                     ],
                     "id": "overlay_4B3E55D9_5816_40D5_41B9_3DBDECE37B77",
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 60,
                          "width": 72,
                          "url": "media/panorama_5BD7485E_57F2_4FCF_41C5_6AC96E3DC608_0_HS_0_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "hfov": 11.32,
                       "yaw": -86.43,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -27.82
                      }
                     ],
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay",
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "yaw": -86.43,
                       "hfov": 11.32,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 120,
                          "width": 145,
                          "url": "media/panorama_5BD7485E_57F2_4FCF_41C5_6AC96E3DC608_0_HS_0_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -27.82
                      }
                     ]
                    }
                   ]
                  }
                 ]
                },
                "class": "AdjacentPanorama",
                "distance": 1,
                "yaw": 82.14
               }
              ],
              "pitch": 0,
              "label": "KITCHEN CAM 1",
              "hfov": 360,
              "class": "Panorama",
              "partial": false,
              "thumbnailUrl": "media/panorama_5BD4B264_57F2_43F2_419D_9AE2EDC1C21A_t.jpg",
              "frames": [
               {
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 2048,
                   "width": 4096,
                   "url": "media/panorama_5BD4B264_57F2_43F2_419D_9AE2EDC1C21A_hq.jpeg",
                   "class": "ImageResourceLevel"
                  },
                  {
                   "height": 1608,
                   "width": 3217,
                   "url": "media/panorama_5BD4B264_57F2_43F2_419D_9AE2EDC1C21A.jpeg",
                   "class": "ImageResourceLevel"
                  }
                 ]
                },
                "thumbnailUrl": "media/panorama_5BD4B264_57F2_43F2_419D_9AE2EDC1C21A_t.jpg",
                "class": "SphericPanoramaFrame",
                "overlays": [
                 {
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_5BD7485E_57F2_4FCF_41C5_6AC96E3DC608, this.camera_4779EE13_5816_4356_41C5_BB724A47724D); this.mainPlayList.set('selectedIndex', 7)"
                   }
                  ],
                  "id": "overlay_4AA5A889_5816_4F35_41A4_AD9FD28DF3AF",
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 77,
                       "width": 69,
                       "url": "media/panorama_5BD4B264_57F2_43F2_419D_9AE2EDC1C21A_0_HS_0_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "hfov": 10.61,
                    "yaw": 82.14,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -30.33
                   }
                  ],
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "yaw": 82.14,
                    "hfov": 10.61,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 154,
                       "width": 139,
                       "url": "media/panorama_5BD4B264_57F2_43F2_419D_9AE2EDC1C21A_0_HS_0_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -30.33
                   }
                  ]
                 },
                 {
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_5BD75C97_57F2_475D_41C6_441C0FC7578F, this.camera_476DAE09_5816_4332_41CD_0D28F671BDFE); this.mainPlayList.set('selectedIndex', 5)"
                   }
                  ],
                  "id": "overlay_4C3AA0C1_5816_DF35_41B2_3AFCB2A6938C",
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 64,
                       "width": 88,
                       "url": "media/panorama_5BD4B264_57F2_43F2_419D_9AE2EDC1C21A_0_HS_1_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "hfov": 11.19,
                    "yaw": -164.18,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -44.03
                   }
                  ],
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "yaw": -164.18,
                    "hfov": 11.19,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 128,
                       "width": 177,
                       "url": "media/panorama_5BD4B264_57F2_43F2_419D_9AE2EDC1C21A_0_HS_1_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -44.03
                   }
                  ]
                 }
                ]
               }
              ]
             },
             "class": "AdjacentPanorama",
             "distance": 1,
             "yaw": 3.51
            },
            {
             "backwardYaw": 74.6,
             "panorama": "this.panorama_5BD49037_57F3_BF5D_414E_CF9E7E9ADD16",
             "class": "AdjacentPanorama",
             "distance": 1,
             "yaw": -84.8
            },
            {
             "backwardYaw": -26.51,
             "panorama": {
              "vfov": 180,
              "hfovMax": 120,
              "hfovMin": 60,
              "id": "panorama_460B2A2B_5816_4376_41C1_8F12176F7280",
              "adjacentPanoramas": [
               {
                "backwardYaw": 159.78,
                "panorama": "this.panorama_5BD75C97_57F2_475D_41C6_441C0FC7578F",
                "class": "AdjacentPanorama",
                "distance": 1,
                "yaw": -26.51
               }
              ],
              "pitch": 0,
              "label": "MASTER BED",
              "hfov": 360,
              "class": "Panorama",
              "partial": false,
              "thumbnailUrl": "media/panorama_460B2A2B_5816_4376_41C1_8F12176F7280_t.jpg",
              "frames": [
               {
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 2048,
                   "width": 4096,
                   "url": "media/panorama_460B2A2B_5816_4376_41C1_8F12176F7280_hq.jpeg",
                   "class": "ImageResourceLevel"
                  },
                  {
                   "height": 1608,
                   "width": 3217,
                   "url": "media/panorama_460B2A2B_5816_4376_41C1_8F12176F7280.jpeg",
                   "class": "ImageResourceLevel"
                  }
                 ]
                },
                "thumbnailUrl": "media/panorama_460B2A2B_5816_4376_41C1_8F12176F7280_t.jpg",
                "class": "SphericPanoramaFrame",
                "overlays": [
                 {
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_5BD75C97_57F2_475D_41C6_441C0FC7578F, this.camera_47103E00_5816_4332_41C4_A9C9B6CB595C); this.mainPlayList.set('selectedIndex', 5)"
                   }
                  ],
                  "id": "overlay_4594050E_5816_C14E_41C3_23A8573AD636",
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 62,
                       "width": 57,
                       "url": "media/panorama_460B2A2B_5816_4376_41C1_8F12176F7280_0_HS_0_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "hfov": 8.85,
                    "yaw": -26.51,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -28.07
                   }
                  ],
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "yaw": -26.51,
                    "hfov": 8.85,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 125,
                       "width": 114,
                       "url": "media/panorama_460B2A2B_5816_4376_41C1_8F12176F7280_0_HS_0_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -28.07
                   }
                  ]
                 }
                ]
               }
              ]
             },
             "class": "AdjacentPanorama",
             "distance": 1,
             "yaw": 159.78
            }
           ],
           "pitch": 0,
           "label": "HALL CAM 2",
           "hfov": 360,
           "class": "Panorama",
           "partial": false,
           "thumbnailUrl": "media/panorama_5BD75C97_57F2_475D_41C6_441C0FC7578F_t.jpg",
           "frames": [
            {
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 2048,
                "width": 4096,
                "url": "media/panorama_5BD75C97_57F2_475D_41C6_441C0FC7578F_hq.jpeg",
                "class": "ImageResourceLevel"
               },
               {
                "height": 1608,
                "width": 3217,
                "url": "media/panorama_5BD75C97_57F2_475D_41C6_441C0FC7578F.jpeg",
                "class": "ImageResourceLevel"
               }
              ]
             },
             "thumbnailUrl": "media/panorama_5BD75C97_57F2_475D_41C6_441C0FC7578F_t.jpg",
             "class": "SphericPanoramaFrame",
             "overlays": [
              {
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_5BD4B264_57F2_43F2_419D_9AE2EDC1C21A, this.camera_78229F58_5816_41D3_41D2_80E122EE2F09); this.mainPlayList.set('selectedIndex', 6)"
                }
               ],
               "id": "overlay_4A038B91_5813_C155_41D3_0847A399C60F",
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 60,
                    "width": 69,
                    "url": "media/panorama_5BD75C97_57F2_475D_41C6_441C0FC7578F_0_HS_0_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "hfov": 9.77,
                 "yaw": 3.51,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -37.37
                }
               ],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "items": [
                {
                 "yaw": 3.51,
                 "hfov": 9.77,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 120,
                    "width": 139,
                    "url": "media/panorama_5BD75C97_57F2_475D_41C6_441C0FC7578F_0_HS_0_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -37.37
                }
               ]
              },
              {
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_5BD49037_57F3_BF5D_414E_CF9E7E9ADD16, this.camera_783C3F72_5816_41D7_41B6_2C1A701BF5B5); this.mainPlayList.set('selectedIndex', 3)"
                }
               ],
               "id": "overlay_4A42A84D_5812_4FCD_41B6_0602D759D354",
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 64,
                    "width": 79,
                    "url": "media/panorama_5BD75C97_57F2_475D_41C6_441C0FC7578F_0_HS_1_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "hfov": 11.37,
                 "yaw": -84.8,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -35.99
                }
               ],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "items": [
                {
                 "yaw": -84.8,
                 "hfov": 11.37,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 128,
                    "width": 159,
                    "url": "media/panorama_5BD75C97_57F2_475D_41C6_441C0FC7578F_0_HS_1_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -35.99
                }
               ]
              },
              {
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_460B2A2B_5816_4376_41C1_8F12176F7280, this.camera_780F0F8B_5816_4135_41CA_B1216760F935); this.mainPlayList.set('selectedIndex', 17)"
                }
               ],
               "id": "overlay_4A745D7F_5812_C1CD_41D2_7CF114BF9E34",
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 54,
                    "width": 72,
                    "url": "media/panorama_5BD75C97_57F2_475D_41C6_441C0FC7578F_0_HS_2_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "hfov": 10.64,
                 "yaw": 159.78,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -33.88
                }
               ],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "items": [
                {
                 "yaw": 159.78,
                 "hfov": 10.64,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 109,
                    "width": 145,
                    "url": "media/panorama_5BD75C97_57F2_475D_41C6_441C0FC7578F_0_HS_2_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -33.88
                }
               ]
              }
             ]
            }
           ]
          },
          "class": "AdjacentPanorama",
          "distance": 1,
          "yaw": 74.6
         }
        ],
        "pitch": 0,
        "label": "DINING",
        "hfov": 360,
        "class": "Panorama",
        "partial": false,
        "thumbnailUrl": "media/panorama_5BD49037_57F3_BF5D_414E_CF9E7E9ADD16_t.jpg",
        "frames": [
         {
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 2048,
             "width": 4096,
             "url": "media/panorama_5BD49037_57F3_BF5D_414E_CF9E7E9ADD16_hq.jpeg",
             "class": "ImageResourceLevel"
            },
            {
             "height": 1608,
             "width": 3217,
             "url": "media/panorama_5BD49037_57F3_BF5D_414E_CF9E7E9ADD16.jpeg",
             "class": "ImageResourceLevel"
            }
           ]
          },
          "thumbnailUrl": "media/panorama_5BD49037_57F3_BF5D_414E_CF9E7E9ADD16_t.jpg",
          "class": "SphericPanoramaFrame",
          "overlays": [
           {
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_5BD49A2D_57F3_C34D_41C1_F2AC73341CC7, this.camera_470CFDEE_5816_40CE_41C6_47C9A483986D); this.mainPlayList.set('selectedIndex', 2)"
             }
            ],
            "id": "overlay_48E3C26F_581E_43CE_4193_24B3732291EB",
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 71,
                 "width": 59,
                 "url": "media/panorama_5BD49037_57F3_BF5D_414E_CF9E7E9ADD16_0_HS_0_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "hfov": 9.5,
              "yaw": -41.08,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -25.56
             }
            ],
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "items": [
             {
              "yaw": -41.08,
              "hfov": 9.5,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 142,
                 "width": 119,
                 "url": "media/panorama_5BD49037_57F3_BF5D_414E_CF9E7E9ADD16_0_HS_0_0.png",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -25.56
             }
            ]
           },
           {
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_5BD75C97_57F2_475D_41C6_441C0FC7578F, this.camera_471BBDF7_5816_40DE_41A0_9B49EAC60602); this.mainPlayList.set('selectedIndex', 5)"
             }
            ],
            "id": "overlay_49390ABB_581E_C355_41D1_BCF8F8FCA118",
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 51,
                 "width": 75,
                 "url": "media/panorama_5BD49037_57F3_BF5D_414E_CF9E7E9ADD16_0_HS_1_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "hfov": 10.88,
              "yaw": 74.6,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -35.11
             }
            ],
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "items": [
             {
              "yaw": 74.6,
              "hfov": 10.88,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 102,
                 "width": 151,
                 "url": "media/panorama_5BD49037_57F3_BF5D_414E_CF9E7E9ADD16_0_HS_1_0.png",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -35.11
             }
            ]
           },
           {
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.mainPlayList.set('selectedIndex', 4)"
             }
            ],
            "id": "overlay_495A0B39_581E_4155_41D4_B98C3FF5B293",
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 75,
                 "width": 75,
                 "url": "media/panorama_5BD49037_57F3_BF5D_414E_CF9E7E9ADD16_0_HS_2_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "hfov": 13.18,
              "yaw": -0.52,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -6.57
             }
            ],
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "items": [
             {
              "yaw": -0.52,
              "hfov": 13.18,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 151,
                 "width": 151,
                 "url": "media/panorama_5BD49037_57F3_BF5D_414E_CF9E7E9ADD16_0_HS_2_0.png",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -6.57
             }
            ]
           }
          ]
         }
        ]
       },
       "class": "AdjacentPanorama",
       "distance": 1,
       "yaw": 121.08
      }
     ],
     "pitch": 0,
     "label": "HALL",
     "hfov": 360,
     "class": "Panorama",
     "partial": false,
     "thumbnailUrl": "media/panorama_5BD49A2D_57F3_C34D_41C1_F2AC73341CC7_t.jpg",
     "frames": [
      {
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 2048,
          "width": 4096,
          "url": "media/panorama_5BD49A2D_57F3_C34D_41C1_F2AC73341CC7_hq.jpeg",
          "class": "ImageResourceLevel"
         },
         {
          "height": 1608,
          "width": 3217,
          "url": "media/panorama_5BD49A2D_57F3_C34D_41C1_F2AC73341CC7.jpeg",
          "class": "ImageResourceLevel"
         }
        ]
       },
       "thumbnailUrl": "media/panorama_5BD49A2D_57F3_C34D_41C1_F2AC73341CC7_t.jpg",
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_5AE1BDB3_57F3_C155_419E_B9624DA116EC, this.camera_47BA0E7C_5816_43D2_41A9_5CBCF9F8FD0A); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "id": "overlay_57C7FE1A_5812_C357_41B4_377439462B33",
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 78,
              "width": 61,
              "url": "media/panorama_5BD49A2D_57F3_C34D_41C1_F2AC73341CC7_0_HS_0_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "hfov": 9.7,
           "yaw": -174.61,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -25.94
          }
         ],
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "items": [
          {
           "yaw": -174.61,
           "hfov": 9.7,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 157,
              "width": 122,
              "url": "media/panorama_5BD49A2D_57F3_C34D_41C1_F2AC73341CC7_0_HS_0_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -25.94
          }
         ]
        },
        {
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_5BD4AE4D_57F2_43CD_41C0_9CF3D4EBA4F3, this.camera_47922EC4_5816_4332_41D5_303ABA890090); this.mainPlayList.set('selectedIndex', 8)"
          }
         ],
         "id": "overlay_57F05868_5813_CFF3_41D3_C8251F0B6691",
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 71,
              "width": 45,
              "url": "media/panorama_5BD49A2D_57F3_C34D_41C1_F2AC73341CC7_0_HS_1_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "hfov": 7.5,
           "yaw": -58.92,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -20.79
          }
         ],
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "items": [
          {
           "yaw": -58.92,
           "hfov": 7.5,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 142,
              "width": 91,
              "url": "media/panorama_5BD49A2D_57F3_C34D_41C1_F2AC73341CC7_0_HS_1_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -20.79
          }
         ]
        },
        {
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_5BD49037_57F3_BF5D_414E_CF9E7E9ADD16, this.camera_47FFFEF7_5816_40DE_41D3_E389BBF917B1); this.mainPlayList.set('selectedIndex', 3)"
          }
         ],
         "id": "overlay_483CA7DC_5812_C0D3_41C5_0DABE3FDF27B",
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 45,
              "width": 67,
              "url": "media/panorama_5BD49A2D_57F3_C34D_41C1_F2AC73341CC7_0_HS_2_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "hfov": 10.1,
           "yaw": 121.08,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -31.09
          }
         ],
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "items": [
          {
           "yaw": 121.08,
           "hfov": 10.1,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 91,
              "width": 134,
              "url": "media/panorama_5BD49A2D_57F3_C34D_41C1_F2AC73341CC7_0_HS_2_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -31.09
          }
         ]
        },
        {
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_5BD4E651_57F2_43D2_41D2_B88D37448834, this.camera_47B5EE96_5816_435E_41D5_97F3DF415A3D); this.mainPlayList.set('selectedIndex', 4)"
          }
         ],
         "id": "overlay_482EF28E_5811_C34F_41C6_6E0C3B73DE79",
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 75,
              "width": 75,
              "url": "media/panorama_5BD49A2D_57F3_C34D_41C1_F2AC73341CC7_0_HS_3_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "hfov": 13.08,
           "yaw": 34.9,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -9.84
          }
         ],
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "items": [
          {
           "yaw": 34.9,
           "hfov": 13.08,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 151,
              "width": 151,
              "url": "media/panorama_5BD49A2D_57F3_C34D_41C1_F2AC73341CC7_0_HS_3_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -9.84
          }
         ]
        },
        {
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_5BD7405D_57F2_5FD2_41C9_703957A2904B, this.camera_47ED9EDE_5816_40CE_41CC_FD6FBC5B34EC); this.mainPlayList.set('selectedIndex', 11)"
          }
         ],
         "id": "overlay_48B9877B_581E_C1D5_41A4_85DCA391A06F",
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 57,
              "width": 57,
              "url": "media/panorama_5BD49A2D_57F3_C34D_41C1_F2AC73341CC7_0_HS_4_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "hfov": 10.07,
           "yaw": -94.01,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": 9.08
          }
         ],
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "items": [
          {
           "yaw": -94.01,
           "hfov": 10.07,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 114,
              "width": 115,
              "url": "media/panorama_5BD49A2D_57F3_C34D_41C1_F2AC73341CC7_0_HS_4_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "pitch": 9.08
          }
         ]
        },
        {
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_5BD76A36_57F2_435F_41C9_2F3CF02B8972, this.camera_4787CEAF_5816_434E_41C1_ACA9A7298DFE); this.mainPlayList.set('selectedIndex', 10)"
          }
         ],
         "id": "overlay_45636A93_581E_4355_41D0_388E146CA1F8",
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 65,
              "width": 51,
              "url": "media/panorama_5BD49A2D_57F3_C34D_41C1_F2AC73341CC7_0_HS_5_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "hfov": 8.9,
           "yaw": -82.3,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -8.71
          }
         ],
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "items": [
          {
           "yaw": -82.3,
           "hfov": 8.9,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 130,
              "width": 102,
              "url": "media/panorama_5BD49A2D_57F3_C34D_41C1_F2AC73341CC7_0_HS_5_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -8.71
          }
         ]
        }
       ]
      }
     ]
    },
    "class": "AdjacentPanorama",
    "distance": 1,
    "yaw": -0.64
   }
  ],
  "pitch": 0,
  "label": "FOYER",
  "hfov": 360,
  "class": "Panorama",
  "partial": false,
  "thumbnailUrl": "media/panorama_5AE1BDB3_57F3_C155_419E_B9624DA116EC_t.jpg",
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2048,
       "width": 4096,
       "url": "media/panorama_5AE1BDB3_57F3_C155_419E_B9624DA116EC_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_5AE1BDB3_57F3_C155_419E_B9624DA116EC.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_5AE1BDB3_57F3_C155_419E_B9624DA116EC_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_5BD49A2D_57F3_C34D_41C1_F2AC73341CC7, this.camera_46DF9DB4_5816_4153_41A8_9FECFE8C0A8F); this.mainPlayList.set('selectedIndex', 2)"
       }
      ],
      "id": "overlay_56877AEA_5817_C0F7_41D1_83C15338FDB8",
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 47,
           "width": 57,
           "url": "media/panorama_5AE1BDB3_57F3_C155_419E_B9624DA116EC_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "hfov": 9.13,
        "yaw": -0.64,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -24.43
       }
      ],
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "items": [
       {
        "yaw": -0.64,
        "hfov": 9.13,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 94,
           "width": 114,
           "url": "media/panorama_5AE1BDB3_57F3_C155_419E_B9624DA116EC_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -24.43
       }
      ]
     },
     {
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_5BD1542C_57F3_C773_41B1_CA65F0FE709E, this.camera_46C51DAB_5816_4175_41B1_11DD85D58C80); this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "id": "overlay_56B514DF_5816_C0CD_41A2_BA654C42ADCA",
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 62,
           "width": 58,
           "url": "media/panorama_5AE1BDB3_57F3_C155_419E_B9624DA116EC_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "hfov": 8.71,
        "yaw": -90.95,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -32.09
       }
      ],
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "items": [
       {
        "yaw": -90.95,
        "hfov": 8.71,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 125,
           "width": 116,
           "url": "media/panorama_5AE1BDB3_57F3_C155_419E_B9624DA116EC_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -32.09
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "viewerArea": "this.MainViewer",
  "preloadEnabled": false,
  "id": "MainViewerPanoramaPlayer",
  "mouseControlMode": "drag_acceleration",
  "touchControlMode": "drag_rotation",
  "displayPlaybackBar": true,
  "gyroscopeVerticalDraggingEnabled": true,
  "class": "PanoramaPlayer"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_5AE1BDB3_57F3_C155_419E_B9624DA116EC_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_5BD1542C_57F3_C773_41B1_CA65F0FE709E",
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_5BD1542C_57F3_C773_41B1_CA65F0FE709E_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_5BD49A2D_57F3_C34D_41C1_F2AC73341CC7",
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_5BD49A2D_57F3_C34D_41C1_F2AC73341CC7_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_5BD49037_57F3_BF5D_414E_CF9E7E9ADD16",
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_5BD49037_57F3_BF5D_414E_CF9E7E9ADD16_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_5BD4E651_57F2_43D2_41D2_B88D37448834",
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_5BD4E651_57F2_43D2_41D2_B88D37448834_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_5BD75C97_57F2_475D_41C6_441C0FC7578F",
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_5BD75C97_57F2_475D_41C6_441C0FC7578F_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_5BD4B264_57F2_43F2_419D_9AE2EDC1C21A",
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_5BD4B264_57F2_43F2_419D_9AE2EDC1C21A_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_5BD7485E_57F2_4FCF_41C5_6AC96E3DC608",
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_5BD7485E_57F2_4FCF_41C5_6AC96E3DC608_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_5BD4AE4D_57F2_43CD_41C0_9CF3D4EBA4F3",
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_5BD4AE4D_57F2_43CD_41C0_9CF3D4EBA4F3_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_5BD7443C_57F2_4753_41B2_F8742134D8F9",
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_5BD7443C_57F2_4753_41B2_F8742134D8F9_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_5BD76A36_57F2_435F_41C9_2F3CF02B8972",
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_5BD76A36_57F2_435F_41C9_2F3CF02B8972_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_5BD7405D_57F2_5FD2_41C9_703957A2904B",
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_5BD7405D_57F2_5FD2_41C9_703957A2904B_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_5BD776B7_57F2_435D_41BA_C096A5774026",
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_5BD776B7_57F2_435D_41BA_C096A5774026_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_5BD75CC4_57F2_4733_41D4_F2C9846702DF",
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_5BD75CC4_57F2_4733_41D4_F2C9846702DF_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_5BD792C2_57F2_C337_41D4_F870F1386049",
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_5BD792C2_57F2_C337_41D4_F870F1386049_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_5BD7C8E3_57F2_C0F6_41D1_CF361C833D65",
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_5BD7C8E3_57F2_C0F6_41D1_CF361C833D65_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_4B3698DE_5812_40CE_41CD_DE5B45642126",
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_4B3698DE_5812_40CE_41CD_DE5B45642126_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_460B2A2B_5816_4376_41C1_8F12176F7280",
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_460B2A2B_5816_4376_41C1_8F12176F7280_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "camera": "this.panorama_5AE1BDB3_57F3_C155_419E_B9624DA116EC_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "media": "this.panorama_5AE1BDB3_57F3_C155_419E_B9624DA116EC",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_5BD1542C_57F3_C773_41B1_CA65F0FE709E_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.panorama_5BD1542C_57F3_C773_41B1_CA65F0FE709E",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_5BD49A2D_57F3_C34D_41C1_F2AC73341CC7_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_5BD49A2D_57F3_C34D_41C1_F2AC73341CC7",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_5BD49037_57F3_BF5D_414E_CF9E7E9ADD16_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "media": "this.panorama_5BD49037_57F3_BF5D_414E_CF9E7E9ADD16",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_5BD4E651_57F2_43D2_41D2_B88D37448834_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "media": "this.panorama_5BD4E651_57F2_43D2_41D2_B88D37448834",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_5BD75C97_57F2_475D_41C6_441C0FC7578F_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "media": "this.panorama_5BD75C97_57F2_475D_41C6_441C0FC7578F",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_5BD4B264_57F2_43F2_419D_9AE2EDC1C21A_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "media": "this.panorama_5BD4B264_57F2_43F2_419D_9AE2EDC1C21A",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_5BD7485E_57F2_4FCF_41C5_6AC96E3DC608_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "media": "this.panorama_5BD7485E_57F2_4FCF_41C5_6AC96E3DC608",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_5BD4AE4D_57F2_43CD_41C0_9CF3D4EBA4F3_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "media": "this.panorama_5BD4AE4D_57F2_43CD_41C0_9CF3D4EBA4F3",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_5BD7443C_57F2_4753_41B2_F8742134D8F9_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "media": "this.panorama_5BD7443C_57F2_4753_41B2_F8742134D8F9",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_5BD76A36_57F2_435F_41C9_2F3CF02B8972_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "media": "this.panorama_5BD76A36_57F2_435F_41C9_2F3CF02B8972",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_5BD7405D_57F2_5FD2_41C9_703957A2904B_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "media": "this.panorama_5BD7405D_57F2_5FD2_41C9_703957A2904B",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_5BD776B7_57F2_435D_41BA_C096A5774026_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "media": "this.panorama_5BD776B7_57F2_435D_41BA_C096A5774026",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_5BD75CC4_57F2_4733_41D4_F2C9846702DF_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
    "media": "this.panorama_5BD75CC4_57F2_4733_41D4_F2C9846702DF",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_5BD792C2_57F2_C337_41D4_F870F1386049_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
    "media": "this.panorama_5BD792C2_57F2_C337_41D4_F870F1386049",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_5BD7C8E3_57F2_C0F6_41D1_CF361C833D65_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "media": "this.panorama_5BD7C8E3_57F2_C0F6_41D1_CF361C833D65",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_4B3698DE_5812_40CE_41CD_DE5B45642126_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
    "media": "this.panorama_4B3698DE_5812_40CE_41CD_DE5B45642126",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_460B2A2B_5816_4376_41C1_8F12176F7280_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 0)",
    "media": "this.panorama_460B2A2B_5816_4376_41C1_8F12176F7280",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   }
  ]
 },
 {
  "id": "ThumbnailList_4AFEEAEB_5798_8BFE_41B1_72739494AC74_playlist",
  "class": "PlayList",
  "items": [
   {
    "camera": "this.panorama_5AE1BDB3_57F3_C155_419E_B9624DA116EC_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4AFEEAEB_5798_8BFE_41B1_72739494AC74_playlist, 0, 1)",
    "media": "this.panorama_5AE1BDB3_57F3_C155_419E_B9624DA116EC",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_5BD1542C_57F3_C773_41B1_CA65F0FE709E_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4AFEEAEB_5798_8BFE_41B1_72739494AC74_playlist, 1, 2)",
    "media": "this.panorama_5BD1542C_57F3_C773_41B1_CA65F0FE709E",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_5BD49A2D_57F3_C34D_41C1_F2AC73341CC7_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4AFEEAEB_5798_8BFE_41B1_72739494AC74_playlist, 2, 3)",
    "media": "this.panorama_5BD49A2D_57F3_C34D_41C1_F2AC73341CC7",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_5BD49037_57F3_BF5D_414E_CF9E7E9ADD16_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4AFEEAEB_5798_8BFE_41B1_72739494AC74_playlist, 3, 4)",
    "media": "this.panorama_5BD49037_57F3_BF5D_414E_CF9E7E9ADD16",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_5BD4E651_57F2_43D2_41D2_B88D37448834_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4AFEEAEB_5798_8BFE_41B1_72739494AC74_playlist, 4, 5)",
    "media": "this.panorama_5BD4E651_57F2_43D2_41D2_B88D37448834",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_5BD75C97_57F2_475D_41C6_441C0FC7578F_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4AFEEAEB_5798_8BFE_41B1_72739494AC74_playlist, 5, 6)",
    "media": "this.panorama_5BD75C97_57F2_475D_41C6_441C0FC7578F",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_5BD4B264_57F2_43F2_419D_9AE2EDC1C21A_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4AFEEAEB_5798_8BFE_41B1_72739494AC74_playlist, 6, 7)",
    "media": "this.panorama_5BD4B264_57F2_43F2_419D_9AE2EDC1C21A",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_5BD7485E_57F2_4FCF_41C5_6AC96E3DC608_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4AFEEAEB_5798_8BFE_41B1_72739494AC74_playlist, 7, 8)",
    "media": "this.panorama_5BD7485E_57F2_4FCF_41C5_6AC96E3DC608",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_5BD4AE4D_57F2_43CD_41C0_9CF3D4EBA4F3_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4AFEEAEB_5798_8BFE_41B1_72739494AC74_playlist, 8, 9)",
    "media": "this.panorama_5BD4AE4D_57F2_43CD_41C0_9CF3D4EBA4F3",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_5BD7443C_57F2_4753_41B2_F8742134D8F9_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4AFEEAEB_5798_8BFE_41B1_72739494AC74_playlist, 9, 10)",
    "media": "this.panorama_5BD7443C_57F2_4753_41B2_F8742134D8F9",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_5BD76A36_57F2_435F_41C9_2F3CF02B8972_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4AFEEAEB_5798_8BFE_41B1_72739494AC74_playlist, 10, 11)",
    "media": "this.panorama_5BD76A36_57F2_435F_41C9_2F3CF02B8972",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_5BD7405D_57F2_5FD2_41C9_703957A2904B_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4AFEEAEB_5798_8BFE_41B1_72739494AC74_playlist, 11, 12)",
    "media": "this.panorama_5BD7405D_57F2_5FD2_41C9_703957A2904B",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_5BD776B7_57F2_435D_41BA_C096A5774026_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4AFEEAEB_5798_8BFE_41B1_72739494AC74_playlist, 12, 13)",
    "media": "this.panorama_5BD776B7_57F2_435D_41BA_C096A5774026",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_5BD75CC4_57F2_4733_41D4_F2C9846702DF_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4AFEEAEB_5798_8BFE_41B1_72739494AC74_playlist, 13, 14)",
    "media": "this.panorama_5BD75CC4_57F2_4733_41D4_F2C9846702DF",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_5BD792C2_57F2_C337_41D4_F870F1386049_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4AFEEAEB_5798_8BFE_41B1_72739494AC74_playlist, 14, 15)",
    "media": "this.panorama_5BD792C2_57F2_C337_41D4_F870F1386049",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_5BD7C8E3_57F2_C0F6_41D1_CF361C833D65_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4AFEEAEB_5798_8BFE_41B1_72739494AC74_playlist, 15, 16)",
    "media": "this.panorama_5BD7C8E3_57F2_C0F6_41D1_CF361C833D65",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_4B3698DE_5812_40CE_41CD_DE5B45642126_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4AFEEAEB_5798_8BFE_41B1_72739494AC74_playlist, 16, 17)",
    "media": "this.panorama_4B3698DE_5812_40CE_41CD_DE5B45642126",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_460B2A2B_5816_4376_41C1_8F12176F7280_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4AFEEAEB_5798_8BFE_41B1_72739494AC74_playlist, 17, 0)",
    "media": "this.panorama_460B2A2B_5816_4376_41C1_8F12176F7280",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   }
  ]
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_46E58D74_5816_41D3_41C2_82C4C43DA3ED",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": -96.85,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_46F8AD7D_5816_41CD_41C0_40946945A024",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 179.99,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_46FC7D86_5816_413F_41D5_FC3311C80AE7",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 112.16,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_46F61D90_5816_4153_41C0_09F31202EF33",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 172.96,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_46C98D99_5816_4155_41D4_FC502F7BAD3E",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": -160.54,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_46C38DA2_5816_4177_41C3_36E70CE835F7",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 159.64,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_46C51DAB_5816_4175_41B1_11DD85D58C80",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": -90.95,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_46DF9DB4_5816_4153_41A8_9FECFE8C0A8F",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 5.39,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_46D05DBE_5816_414F_41D0_BDDFEADCEA08",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 97.7,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_472AADC8_5816_4133_41D4_D2AC7E7893C5",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 89.05,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_47229DD2_5816_40D6_418E_9769DF98AC80",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": -99.38,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_473ABDDB_5816_40D6_41B4_7194BD94CDF3",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 121.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_47303DE4_5816_40F2_41D0_09DA21A73DE5",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": -58.93,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_470CFDEE_5816_40CE_41C6_47C9A483986D",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": -58.92,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_471BBDF7_5816_40DE_41A0_9B49EAC60602",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 95.2,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_47103E00_5816_4332_41C4_A9C9B6CB595C",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": -20.22,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_476DAE09_5816_4332_41CD_0D28F671BDFE",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": -176.49,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_4779EE13_5816_4356_41C5_BB724A47724D",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 93.57,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_47773E1C_5816_4352_41D1_C5A0443F9DE2",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": -97.86,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_47419E35_5816_4352_41BD_3B742363AD11",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 159.52,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_475C3E49_5816_4332_41D4_DF0A667504B0",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": -145.1,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_47A83E62_5816_43F6_41C2_309D7E8CE59F",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 99.09,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_47BA0E7C_5816_43D2_41A9_5CBCF9F8FD0A",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 179.36,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_47B5EE96_5816_435E_41D5_97F3DF415A3D",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 24.23,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_4787CEAF_5816_434E_41C1_ACA9A7298DFE",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": -156.91,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_47922EC4_5816_4332_41D5_303ABA890090",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": -64.57,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_47ED9EDE_5816_40CE_41CC_FD6FBC5B34EC",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": -172.47,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_47FFFEF7_5816_40DE_41D3_E389BBF917B1",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 138.92,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_47CB4F11_5816_4152_41BD_2C4DFA570274",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 5.85,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_47C5FF26_5816_417E_41B6_9F37F44A1458",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 85.99,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_47D16F3F_5816_414D_41C3_524A8223C302",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": -19.09,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_78229F58_5816_41D3_41D2_80E122EE2F09",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 15.82,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_783C3F72_5816_41D7_41B6_2C1A701BF5B5",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": -105.4,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 10,
  "id": "camera_780F0F8B_5816_4135_41CA_B1216760F935",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 153.49,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "audio_48617B36_5799_8A56_419C_6A1D65BA7561",
  "audio": {
   "mp3Url": "media/audio_48617B36_5799_8A56_419C_6A1D65BA7561.mp3",
   "oggUrl": "media/audio_48617B36_5799_8A56_419C_6A1D65BA7561.ogg",
   "class": "AudioResource"
  },
  "autoplay": true,
  "class": "PanoramaAudio"
 },
 {
  "id": "audio_5B6ED3D6_57EE_40DF_41AE_28D7BD05E081",
  "audio": {
   "mp3Url": "media/audio_5B6ED3D6_57EE_40DF_41AE_28D7BD05E081.mp3",
   "oggUrl": "media/audio_5B6ED3D6_57EE_40DF_41AE_28D7BD05E081.ogg",
   "class": "AudioResource"
  },
  "autoplay": true,
  "class": "MediaAudio"
 }
], "children": [
 {
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarHeadShadowHorizontalLength": 0,
  "transitionMode": "blending",
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "borderRadius": 0,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "paddingRight": 0,
  "toolTipShadowVerticalLength": 0,
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBorderRadius": 0,
  "toolTipTextShadowColor": "#000000",
  "playbackBarBorderRadius": 0,
  "playbackBarHeadBorderRadius": 0,
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarProgressBorderSize": 0,
  "toolTipShadowOpacity": 1,
  "playbackBarHeadBorderSize": 0,
  "shadow": false,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "toolTipBorderColor": "#767676",
  "progressBarBorderSize": 0,
  "playbackBarProgressBorderRadius": 0,
  "playbackBarHeadBorderColor": "#000000",
  "paddingBottom": 0,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipTextShadowBlurRadius": 3,
  "paddingTop": 0,
  "toolTipFontSize": 12,
  "playbackBarBorderColor": "#FFFFFF",
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarLeft": 0,
  "playbackBarBorderSize": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadHeight": 15,
  "toolTipPaddingBottom": 4,
  "minHeight": 50,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipFontWeight": "normal",
  "toolTipPaddingTop": 4,
  "progressRight": 0,
  "toolTipOpacity": 1,
  "toolTipBorderSize": 1,
  "progressBarBorderColor": "#000000",
  "progressBackgroundOpacity": 1,
  "playbackBarHeadOpacity": 1,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarHeight": 10,
  "width": "100%",
  "toolTipShadowBlurRadius": 3,
  "minWidth": 100,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "progressBarOpacity": 1,
  "progressBarBackgroundColorDirection": "vertical",
  "toolTipBackgroundColor": "#F6F6F6",
  "progressBorderColor": "#000000",
  "progressLeft": 0,
  "playbackBarBottom": 5,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "progressBottom": 0,
  "borderSize": 0,
  "toolTipPaddingRight": 6,
  "playbackBarRight": 0,
  "progressOpacity": 1,
  "toolTipShadowHorizontalLength": 0,
  "height": "100%",
  "toolTipFontStyle": "normal",
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarBackgroundColorDirection": "vertical",
  "top": 0,
  "toolTipFontColor": "#606060",
  "toolTipShadowColor": "#333333",
  "playbackBarHeadWidth": 6,
  "progressBarBorderRadius": 0,
  "toolTipFontFamily": "Arial",
  "progressBorderSize": 0,
  "id": "MainViewer",
  "paddingLeft": 0,
  "progressHeight": 10,
  "toolTipTextShadowOpacity": 0,
  "playbackBarHeadShadow": true,
  "toolTipBorderRadius": 3,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "left": 0,
  "playbackBarProgressOpacity": 1,
  "toolTipPaddingLeft": 6,
  "playbackBarBackgroundOpacity": 1,
  "class": "ViewerArea",
  "playbackBarOpacity": 1,
  "toolTipShadowSpread": 0
 },
 {
  "scrollBarVisible": "rollOver",
  "backgroundOpacity": 0,
  "verticalAlign": "bottom",
  "height": 200,
  "borderRadius": 0,
  "paddingRight": 0,
  "minWidth": 20,
  "borderSize": 0,
  "gap": 10,
  "scrollBarMargin": 2,
  "shadow": false,
  "horizontalAlign": "center",
  "paddingBottom": 0,
  "paddingLeft": 0,
  "scrollBarWidth": 10,
  "bottom": 0,
  "paddingTop": 0,
  "left": 0,
  "class": "Container",
  "scrollBarColor": "#000000",
  "contentOpaque": false,
  "overflow": "visible",
  "layout": "horizontal",
  "right": 0,
  "minHeight": 20,
  "scrollBarOpacity": 0.5
 },
 {
  "itemThumbnailShadow": true,
  "scrollBarVisible": "rollOver",
  "backgroundOpacity": 0,
  "scrollBarOpacity": 0.5,
  "itemThumbnailShadowBlurRadius": 8,
  "minHeight": 20,
  "itemThumbnailShadowHorizontalLength": 3,
  "itemPaddingLeft": 3,
  "itemPaddingTop": 3,
  "itemThumbnailBorderRadius": 50,
  "verticalAlign": "top",
  "itemLabelFontFamily": "Arial",
  "itemLabelFontSize": 14,
  "borderRadius": 5,
  "width": "7.6%",
  "minWidth": 20,
  "paddingRight": 20,
  "selectedItemLabelFontColor": "#FFCC00",
  "itemVerticalAlign": "middle",
  "itemLabelGap": 9,
  "gap": 10,
  "itemLabelFontStyle": "normal",
  "playList": "this.ThumbnailList_4AFEEAEB_5798_8BFE_41B1_72739494AC74_playlist",
  "borderSize": 0,
  "itemThumbnailShadowVerticalLength": 3,
  "itemBackgroundColorDirection": "vertical",
  "itemThumbnailOpacity": 1,
  "itemThumbnailShadowColor": "#000000",
  "itemThumbnailWidth": 75,
  "scrollBarMargin": 2,
  "itemThumbnailScaleMode": "fit_outside",
  "layout": "vertical",
  "itemLabelHorizontalAlign": "center",
  "top": "0.11%",
  "itemLabelTextDecoration": "none",
  "horizontalAlign": "left",
  "itemLabelFontWeight": "normal",
  "shadow": false,
  "itemThumbnailShadowSpread": 1,
  "selectedItemLabelFontWeight": "bold",
  "rollOverItemBackgroundOpacity": 0,
  "itemPaddingRight": 3,
  "itemBackgroundColorRatios": [],
  "itemHorizontalAlign": "center",
  "bottom": "0%",
  "id": "ThumbnailList_4AFEEAEB_5798_8BFE_41B1_72739494AC74",
  "paddingLeft": 20,
  "scrollBarWidth": 10,
  "paddingBottom": 10,
  "rollOverItemLabelFontWeight": "normal",
  "paddingTop": 10,
  "itemThumbnailHeight": 75,
  "class": "ThumbnailList",
  "scrollBarColor": "#FFFFFF",
  "itemLabelFontColor": "#FFFFFF",
  "itemPaddingBottom": 3,
  "itemOpacity": 1,
  "itemLabelPosition": "bottom",
  "itemBorderRadius": 0,
  "itemBackgroundOpacity": 0,
  "itemBackgroundColor": [],
  "itemMode": "normal",
  "itemThumbnailShadowOpacity": 0.54,
  "right": "0%"
 }
], 
 "start": "this.playAudioList([this.audio_5B6ED3D6_57EE_40DF_41AE_28D7BD05E081]); this.syncPlaylists([this.ThumbnailList_4AFEEAEB_5798_8BFE_41B1_72739494AC74_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0)",
 "scripts": {
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "getKey": function(key){  return window[key]; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "registerKey": function(key, value){  window[key] = value; },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "existsKey": function(key){  return key in window; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "unregisterKey": function(key){  delete window[key]; },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; }
 },
 "vrPolyfillScale": 0.5,
 "scrollBarVisible": "rollOver",
 "backgroundPreloadEnabled": true,
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "width": "100%",
 "verticalAlign": "top",
 "height": "100%",
 "borderRadius": 0,
 "minWidth": 20,
 "paddingRight": 0,
 "borderSize": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "id": "rootPlayer",
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "class": "Player",
 "contentOpaque": false,
 "overflow": "visible",
 "horizontalAlign": "left",
 "scrollBarColor": "#000000",
 "minHeight": 20,
 "mouseWheelEnabled": true
})