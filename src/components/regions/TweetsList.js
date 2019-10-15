import React from 'react';
import {
  Row,
  Col,
  Table,
  Divider,
  Modal
} from 'antd';
import _ from 'lodash';

import ListView from '../common/ListView';
import regionAPI from  '../../services/region.js';

const sampleArray = [
  {
    "created_at": "Mon Oct 14 05:13:23 +0000 2019",
    "id": 1183611738878599200,
    "id_str": "1183611738878599169",
    "text": "I can see the headlines now.  “Once proud franchise says playoff loss doesn’t count because they weren’t ready for the inning to start”",
    "truncated": false,
    "entities": {
      "hashtags": [
        
      ],
      "symbols": [
        
      ],
      "user_mentions": [
        
      ],
      "urls": [
        
      ]
    },
    "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 43775786,
      "id_str": "43775786",
      "name": "Dave Portnoy",
      "screen_name": "stoolpresidente",
      "location": "Boston",
      "description": "El Presidente/3 time Bee Sting survivor. Heart attack survivor. Vegas Heat Stroke Survivor. Milli Milli Club. Shot 4 under at Shinnecock.",
      "url": "https://t.co/nXDqi8XC4M",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/nXDqi8XC4M",
              "expanded_url": "http://boston.barstoolsports.com",
              "display_url": "boston.barstoolsports.com",
              "indices": [
                0,
                23
              ]
            }
          ]
        },
        "description": {
          "urls": [
            
          ]
        }
      },
      "protected": false,
      "followers_count": 1057483,
      "friends_count": 1198,
      "listed_count": 3092,
      "created_at": "Sun May 31 23:08:06 +0000 2009",
      "favourites_count": 2301,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 77696,
      "lang": null,
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "00254C",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": true,
      "profile_image_url": "http://pbs.twimg.com/profile_images/598493860336148480/SaR7gKvr_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/598493860336148480/SaR7gKvr_normal.jpg",
      "profile_link_color": "050505",
      "profile_sidebar_border_color": "CCCCCC",
      "profile_sidebar_fill_color": "EEEEEE",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": false,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 76,
    "favorite_count": 1300,
    "favorited": false,
    "retweeted": false,
    "lang": "en"
  },
  {
    "created_at": "Mon Oct 14 05:02:38 +0000 2019",
    "id": 1183609033779024000,
    "id_str": "1183609033779023872",
    "text": "Gonna need a Tommy check https://t.co/HwAu96M9tT https://t.co/PnR5afSivQ",
    "truncated": false,
    "entities": {
      "hashtags": [
        
      ],
      "symbols": [
        
      ],
      "user_mentions": [
        
      ],
      "urls": [
        {
          "url": "https://t.co/HwAu96M9tT",
          "expanded_url": "https://twitter.com/barstoolbets/status/1183608568760717313",
          "display_url": "twitter.com/barstoolbets/s…",
          "indices": [
            25,
            48
          ]
        }
      ],
      "media": [
        {
          "id": 1183609030788505600,
          "id_str": "1183609030788505600",
          "indices": [
            49,
            72
          ],
          "media_url": "http://pbs.twimg.com/media/EG0GJHkX4AA3LJX.jpg",
          "media_url_https": "https://pbs.twimg.com/media/EG0GJHkX4AA3LJX.jpg",
          "url": "https://t.co/PnR5afSivQ",
          "display_url": "pic.twitter.com/PnR5afSivQ",
          "expanded_url": "https://twitter.com/stoolpresidente/status/1183609033779023872/photo/1",
          "type": "photo",
          "sizes": {
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            },
            "small": {
              "w": 469,
              "h": 680,
              "resize": "fit"
            },
            "medium": {
              "w": 497,
              "h": 720,
              "resize": "fit"
            },
            "large": {
              "w": 497,
              "h": 720,
              "resize": "fit"
            }
          }
        }
      ]
    },
    "extended_entities": {
      "media": [
        {
          "id": 1183609030788505600,
          "id_str": "1183609030788505600",
          "indices": [
            49,
            72
          ],
          "media_url": "http://pbs.twimg.com/media/EG0GJHkX4AA3LJX.jpg",
          "media_url_https": "https://pbs.twimg.com/media/EG0GJHkX4AA3LJX.jpg",
          "url": "https://t.co/PnR5afSivQ",
          "display_url": "pic.twitter.com/PnR5afSivQ",
          "expanded_url": "https://twitter.com/stoolpresidente/status/1183609033779023872/photo/1",
          "type": "photo",
          "sizes": {
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            },
            "small": {
              "w": 469,
              "h": 680,
              "resize": "fit"
            },
            "medium": {
              "w": 497,
              "h": 720,
              "resize": "fit"
            },
            "large": {
              "w": 497,
              "h": 720,
              "resize": "fit"
            }
          }
        }
      ]
    },
    "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 43775786,
      "id_str": "43775786",
      "name": "Dave Portnoy",
      "screen_name": "stoolpresidente",
      "location": "Boston",
      "description": "El Presidente/3 time Bee Sting survivor. Heart attack survivor. Vegas Heat Stroke Survivor. Milli Milli Club. Shot 4 under at Shinnecock.",
      "url": "https://t.co/nXDqi8XC4M",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/nXDqi8XC4M",
              "expanded_url": "http://boston.barstoolsports.com",
              "display_url": "boston.barstoolsports.com",
              "indices": [
                0,
                23
              ]
            }
          ]
        },
        "description": {
          "urls": [
            
          ]
        }
      },
      "protected": false,
      "followers_count": 1057483,
      "friends_count": 1198,
      "listed_count": 3092,
      "created_at": "Sun May 31 23:08:06 +0000 2009",
      "favourites_count": 2301,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 77696,
      "lang": null,
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "00254C",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": true,
      "profile_image_url": "http://pbs.twimg.com/profile_images/598493860336148480/SaR7gKvr_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/598493860336148480/SaR7gKvr_normal.jpg",
      "profile_link_color": "050505",
      "profile_sidebar_border_color": "CCCCCC",
      "profile_sidebar_fill_color": "EEEEEE",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": false,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": true,
    "quoted_status_id": 1183608568760717300,
    "quoted_status_id_str": "1183608568760717313",
    "quoted_status": {
      "created_at": "Mon Oct 14 05:00:47 +0000 2019",
      "id": 1183608568760717300,
      "id_str": "1183608568760717313",
      "text": "Correa walks it off in the 11th. \n\nAstros (-174) win it 3-2 in the 11th inning. https://t.co/TYNqOW1uwT",
      "truncated": false,
      "entities": {
        "hashtags": [
          
        ],
        "symbols": [
          
        ],
        "user_mentions": [
          
        ],
        "urls": [
          
        ],
        "media": [
          {
            "id": 1183608464532263000,
            "id_str": "1183608464532262912",
            "indices": [
              80,
              103
            ],
            "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/1183608464532262912/pu/img/EBBzn61vbN5wh5LH.jpg",
            "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/1183608464532262912/pu/img/EBBzn61vbN5wh5LH.jpg",
            "url": "https://t.co/TYNqOW1uwT",
            "display_url": "pic.twitter.com/TYNqOW1uwT",
            "expanded_url": "https://twitter.com/barstoolbets/status/1183608568760717313/video/1",
            "type": "photo",
            "sizes": {
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              },
              "small": {
                "w": 383,
                "h": 680,
                "resize": "fit"
              },
              "large": {
                "w": 720,
                "h": 1280,
                "resize": "fit"
              },
              "medium": {
                "w": 675,
                "h": 1200,
                "resize": "fit"
              }
            }
          }
        ]
      },
      "extended_entities": {
        "media": [
          {
            "id": 1183608464532263000,
            "id_str": "1183608464532262912",
            "indices": [
              80,
              103
            ],
            "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/1183608464532262912/pu/img/EBBzn61vbN5wh5LH.jpg",
            "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/1183608464532262912/pu/img/EBBzn61vbN5wh5LH.jpg",
            "url": "https://t.co/TYNqOW1uwT",
            "display_url": "pic.twitter.com/TYNqOW1uwT",
            "expanded_url": "https://twitter.com/barstoolbets/status/1183608568760717313/video/1",
            "type": "video",
            "sizes": {
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              },
              "small": {
                "w": 383,
                "h": 680,
                "resize": "fit"
              },
              "large": {
                "w": 720,
                "h": 1280,
                "resize": "fit"
              },
              "medium": {
                "w": 675,
                "h": 1200,
                "resize": "fit"
              }
            },
            "video_info": {
              "aspect_ratio": [
                9,
                16
              ],
              "duration_millis": 47438,
              "variants": [
                {
                  "bitrate": 832000,
                  "content_type": "video/mp4",
                  "url": "https://video.twimg.com/ext_tw_video/1183608464532262912/pu/vid/360x640/kJkcqKISX8a23GFV.mp4?tag=10"
                },
                {
                  "bitrate": 2176000,
                  "content_type": "video/mp4",
                  "url": "https://video.twimg.com/ext_tw_video/1183608464532262912/pu/vid/720x1280/Pe2jPJsR6QasNZum.mp4?tag=10"
                },
                {
                  "content_type": "application/x-mpegURL",
                  "url": "https://video.twimg.com/ext_tw_video/1183608464532262912/pu/pl/IL6LG3fDK14bT9GR.m3u8?tag=10"
                },
                {
                  "bitrate": 632000,
                  "content_type": "video/mp4",
                  "url": "https://video.twimg.com/ext_tw_video/1183608464532262912/pu/vid/320x568/rJdOjV3Y-HT47jKE.mp4?tag=10"
                }
              ]
            },
            "additional_media_info": {
              "monetizable": false
            }
          }
        ]
      },
      "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user": {
        "id": 926324367054786600,
        "id_str": "926324367054786562",
        "name": "Barstool Bets",
        "screen_name": "barstoolbets",
        "location": "",
        "description": "Rule number 1 of gambling, always bet the over. Rule number 2, if a mascot dies the week of a big game, it's an automatic mortal lock. @barstoolsports",
        "url": "https://t.co/fLhBykKFVJ",
        "entities": {
          "url": {
            "urls": [
              {
                "url": "https://t.co/fLhBykKFVJ",
                "expanded_url": "http://barstoolbets.com",
                "display_url": "barstoolbets.com",
                "indices": [
                  0,
                  23
                ]
              }
            ]
          },
          "description": {
            "urls": [
              
            ]
          }
        },
        "protected": false,
        "followers_count": 159357,
        "friends_count": 42,
        "listed_count": 438,
        "created_at": "Fri Nov 03 05:45:14 +0000 2017",
        "favourites_count": 467,
        "utc_offset": null,
        "time_zone": null,
        "geo_enabled": true,
        "verified": false,
        "statuses_count": 3750,
        "lang": null,
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "F5F8FA",
        "profile_background_image_url": null,
        "profile_background_image_url_https": null,
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/1165971479713988609/8Dt8R3wi_normal.jpg",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/1165971479713988609/8Dt8R3wi_normal.jpg",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/926324367054786562/1567705488",
        "profile_link_color": "1DA1F2",
        "profile_sidebar_border_color": "C0DEED",
        "profile_sidebar_fill_color": "DDEEF6",
        "profile_text_color": "333333",
        "profile_use_background_image": true,
        "has_extended_profile": false,
        "default_profile": true,
        "default_profile_image": false,
        "following": false,
        "follow_request_sent": false,
        "notifications": false,
        "translator_type": "none"
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "is_quote_status": false,
      "retweet_count": 154,
      "favorite_count": 1748,
      "favorited": false,
      "retweeted": false,
      "possibly_sensitive": false,
      "lang": "en"
    },
    "retweet_count": 61,
    "favorite_count": 1550,
    "favorited": false,
    "retweeted": false,
    "possibly_sensitive": false,
    "lang": "en"
  },
  {
    "created_at": "Mon Oct 14 02:35:00 +0000 2019",
    "id": 1183571881519124500,
    "id_str": "1183571881519124480",
    "text": "Smoltz just insulted the fuck out of @Edelman11     Comparing him to Brett fucking Gardner?   Why they’re both white?",
    "truncated": false,
    "entities": {
      "hashtags": [
        
      ],
      "symbols": [
        
      ],
      "user_mentions": [
        {
          "screen_name": "Edelman11",
          "name": "Julian Edelman",
          "id": 272250951,
          "id_str": "272250951",
          "indices": [
            37,
            47
          ]
        }
      ],
      "urls": [
        
      ]
    },
    "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 43775786,
      "id_str": "43775786",
      "name": "Dave Portnoy",
      "screen_name": "stoolpresidente",
      "location": "Boston",
      "description": "El Presidente/3 time Bee Sting survivor. Heart attack survivor. Vegas Heat Stroke Survivor. Milli Milli Club. Shot 4 under at Shinnecock.",
      "url": "https://t.co/nXDqi8XC4M",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/nXDqi8XC4M",
              "expanded_url": "http://boston.barstoolsports.com",
              "display_url": "boston.barstoolsports.com",
              "indices": [
                0,
                23
              ]
            }
          ]
        },
        "description": {
          "urls": [
            
          ]
        }
      },
      "protected": false,
      "followers_count": 1057483,
      "friends_count": 1198,
      "listed_count": 3092,
      "created_at": "Sun May 31 23:08:06 +0000 2009",
      "favourites_count": 2301,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 77696,
      "lang": null,
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "00254C",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": true,
      "profile_image_url": "http://pbs.twimg.com/profile_images/598493860336148480/SaR7gKvr_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/598493860336148480/SaR7gKvr_normal.jpg",
      "profile_link_color": "050505",
      "profile_sidebar_border_color": "CCCCCC",
      "profile_sidebar_fill_color": "EEEEEE",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": false,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 195,
    "favorite_count": 3755,
    "favorited": false,
    "retweeted": false,
    "lang": "en"
  },
  {
    "created_at": "Mon Oct 14 01:40:15 +0000 2019",
    "id": 1183558102001561600,
    "id_str": "1183558102001561600",
    "text": "RT @TylerScott: Them #GiantAssSpoilers put @DaleJr on a redneck vocabulary rampage on TV. Looking good tho @mattdracing &amp; @stoolpresidente.…",
    "truncated": false,
    "entities": {
      "hashtags": [
        {
          "text": "GiantAssSpoilers",
          "indices": [
            21,
            38
          ]
        }
      ],
      "symbols": [
        
      ],
      "user_mentions": [
        {
          "screen_name": "TylerScott",
          "name": "Tyler Scott",
          "id": 230926970,
          "id_str": "230926970",
          "indices": [
            3,
            14
          ]
        },
        {
          "screen_name": "DaleJr",
          "name": "Dale Earnhardt Jr.",
          "id": 18132032,
          "id_str": "18132032",
          "indices": [
            43,
            50
          ]
        },
        {
          "screen_name": "mattdracing",
          "name": "Matt DiBenedetto",
          "id": 43701219,
          "id_str": "43701219",
          "indices": [
            107,
            119
          ]
        },
        {
          "screen_name": "stoolpresidente",
          "name": "Dave Portnoy",
          "id": 43775786,
          "id_str": "43775786",
          "indices": [
            126,
            142
          ]
        }
      ],
      "urls": [
        
      ]
    },
    "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 43775786,
      "id_str": "43775786",
      "name": "Dave Portnoy",
      "screen_name": "stoolpresidente",
      "location": "Boston",
      "description": "El Presidente/3 time Bee Sting survivor. Heart attack survivor. Vegas Heat Stroke Survivor. Milli Milli Club. Shot 4 under at Shinnecock.",
      "url": "https://t.co/nXDqi8XC4M",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/nXDqi8XC4M",
              "expanded_url": "http://boston.barstoolsports.com",
              "display_url": "boston.barstoolsports.com",
              "indices": [
                0,
                23
              ]
            }
          ]
        },
        "description": {
          "urls": [
            
          ]
        }
      },
      "protected": false,
      "followers_count": 1057483,
      "friends_count": 1198,
      "listed_count": 3092,
      "created_at": "Sun May 31 23:08:06 +0000 2009",
      "favourites_count": 2301,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 77696,
      "lang": null,
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "00254C",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": true,
      "profile_image_url": "http://pbs.twimg.com/profile_images/598493860336148480/SaR7gKvr_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/598493860336148480/SaR7gKvr_normal.jpg",
      "profile_link_color": "050505",
      "profile_sidebar_border_color": "CCCCCC",
      "profile_sidebar_fill_color": "EEEEEE",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": false,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "retweeted_status": {
      "created_at": "Sun Oct 13 22:38:10 +0000 2019",
      "id": 1183512278957609000,
      "id_str": "1183512278957608960",
      "text": "Them #GiantAssSpoilers put @DaleJr on a redneck vocabulary rampage on TV. Looking good tho @mattdracing &amp;… https://t.co/1vj2lCiTdv",
      "truncated": true,
      "entities": {
        "hashtags": [
          {
            "text": "GiantAssSpoilers",
            "indices": [
              5,
              22
            ]
          }
        ],
        "symbols": [
          
        ],
        "user_mentions": [
          {
            "screen_name": "DaleJr",
            "name": "Dale Earnhardt Jr.",
            "id": 18132032,
            "id_str": "18132032",
            "indices": [
              27,
              34
            ]
          },
          {
            "screen_name": "mattdracing",
            "name": "Matt DiBenedetto",
            "id": 43701219,
            "id_str": "43701219",
            "indices": [
              91,
              103
            ]
          }
        ],
        "urls": [
          {
            "url": "https://t.co/1vj2lCiTdv",
            "expanded_url": "https://twitter.com/i/web/status/1183512278957608960",
            "display_url": "twitter.com/i/web/status/1…",
            "indices": [
              111,
              134
            ]
          }
        ]
      },
      "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user": {
        "id": 230926970,
        "id_str": "230926970",
        "name": "Tyler Scott",
        "screen_name": "TylerScott",
        "location": "KCMO",
        "description": "@huskers @chicagobears @partypupils #4 & RSj",
        "url": null,
        "entities": {
          "description": {
            "urls": [
              
            ]
          }
        },
        "protected": false,
        "followers_count": 643,
        "friends_count": 308,
        "listed_count": 36,
        "created_at": "Mon Dec 27 03:18:34 +0000 2010",
        "favourites_count": 40503,
        "utc_offset": null,
        "time_zone": null,
        "geo_enabled": true,
        "verified": false,
        "statuses_count": 48910,
        "lang": null,
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": true,
        "profile_background_color": "131516",
        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme14/bg.gif",
        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme14/bg.gif",
        "profile_background_tile": true,
        "profile_image_url": "http://pbs.twimg.com/profile_images/1180945845065338880/u8crUCgM_normal.jpg",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/1180945845065338880/u8crUCgM_normal.jpg",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/230926970/1570464959",
        "profile_link_color": "009999",
        "profile_sidebar_border_color": "EEEEEE",
        "profile_sidebar_fill_color": "EFEFEF",
        "profile_text_color": "333333",
        "profile_use_background_image": true,
        "has_extended_profile": true,
        "default_profile": false,
        "default_profile_image": false,
        "following": false,
        "follow_request_sent": false,
        "notifications": false,
        "translator_type": "none"
      },
      "geo": null,
      "coordinates": null,
      "place": {
        "id": "a592bd6ceb1319f7",
        "url": "https://api.twitter.com/1.1/geo/id/a592bd6ceb1319f7.json",
        "place_type": "city",
        "name": "San Diego",
        "full_name": "San Diego, CA",
        "country_code": "US",
        "country": "United States",
        "contained_within": [
          
        ],
        "bounding_box": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -117.282538,
                32.53962
              ],
              [
                -116.9274403,
                32.53962
              ],
              [
                -116.9274403,
                33.0804044
              ],
              [
                -117.282538,
                33.0804044
              ]
            ]
          ]
        },
        "attributes": {
          
        }
      },
      "contributors": null,
      "is_quote_status": false,
      "retweet_count": 10,
      "favorite_count": 180,
      "favorited": false,
      "retweeted": false,
      "possibly_sensitive": false,
      "lang": "en"
    },
    "is_quote_status": false,
    "retweet_count": 10,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "lang": "en"
  },
  {
    "created_at": "Mon Oct 14 00:58:36 +0000 2019",
    "id": 1183547619336999000,
    "id_str": "1183547619336998912",
    "text": "#dega https://t.co/yu4TK5OV2N",
    "truncated": false,
    "entities": {
      "hashtags": [
        {
          "text": "dega",
          "indices": [
            0,
            5
          ]
        }
      ],
      "symbols": [
        
      ],
      "user_mentions": [
        
      ],
      "urls": [
        {
          "url": "https://t.co/yu4TK5OV2N",
          "expanded_url": "https://twitter.com/barstoolsports/status/1183547333096726528",
          "display_url": "twitter.com/barstoolsports…",
          "indices": [
            6,
            29
          ]
        }
      ]
    },
    "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 43775786,
      "id_str": "43775786",
      "name": "Dave Portnoy",
      "screen_name": "stoolpresidente",
      "location": "Boston",
      "description": "El Presidente/3 time Bee Sting survivor. Heart attack survivor. Vegas Heat Stroke Survivor. Milli Milli Club. Shot 4 under at Shinnecock.",
      "url": "https://t.co/nXDqi8XC4M",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/nXDqi8XC4M",
              "expanded_url": "http://boston.barstoolsports.com",
              "display_url": "boston.barstoolsports.com",
              "indices": [
                0,
                23
              ]
            }
          ]
        },
        "description": {
          "urls": [
            
          ]
        }
      },
      "protected": false,
      "followers_count": 1057483,
      "friends_count": 1198,
      "listed_count": 3092,
      "created_at": "Sun May 31 23:08:06 +0000 2009",
      "favourites_count": 2301,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 77696,
      "lang": null,
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "00254C",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": true,
      "profile_image_url": "http://pbs.twimg.com/profile_images/598493860336148480/SaR7gKvr_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/598493860336148480/SaR7gKvr_normal.jpg",
      "profile_link_color": "050505",
      "profile_sidebar_border_color": "CCCCCC",
      "profile_sidebar_fill_color": "EEEEEE",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": false,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": true,
    "quoted_status_id": 1183547333096726500,
    "quoted_status_id_str": "1183547333096726528",
    "quoted_status": {
      "created_at": "Mon Oct 14 00:57:28 +0000 2019",
      "id": 1183547333096726500,
      "id_str": "1183547333096726528",
      "text": "Welcome to Talladega baby \n\n@rubbinisracing (Via IG/Jacobm_987) https://t.co/1n6rnknG4z",
      "truncated": false,
      "entities": {
        "hashtags": [
          
        ],
        "symbols": [
          
        ],
        "user_mentions": [
          {
            "screen_name": "rubbinisracing",
            "name": "BarstoolRacing",
            "id": 1172243903388573700,
            "id_str": "1172243903388573696",
            "indices": [
              28,
              43
            ]
          }
        ],
        "urls": [
          
        ],
        "media": [
          {
            "id": 1183547235184906200,
            "id_str": "1183547235184906241",
            "indices": [
              64,
              87
            ],
            "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/1183547235184906241/pu/img/OmLErKwwnYDVNMgI.jpg",
            "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/1183547235184906241/pu/img/OmLErKwwnYDVNMgI.jpg",
            "url": "https://t.co/1n6rnknG4z",
            "display_url": "pic.twitter.com/1n6rnknG4z",
            "expanded_url": "https://twitter.com/barstoolsports/status/1183547333096726528/video/1",
            "type": "photo",
            "sizes": {
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              },
              "medium": {
                "w": 640,
                "h": 1138,
                "resize": "fit"
              },
              "large": {
                "w": 640,
                "h": 1138,
                "resize": "fit"
              },
              "small": {
                "w": 382,
                "h": 680,
                "resize": "fit"
              }
            }
          }
        ]
      },
      "extended_entities": {
        "media": [
          {
            "id": 1183547235184906200,
            "id_str": "1183547235184906241",
            "indices": [
              64,
              87
            ],
            "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/1183547235184906241/pu/img/OmLErKwwnYDVNMgI.jpg",
            "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/1183547235184906241/pu/img/OmLErKwwnYDVNMgI.jpg",
            "url": "https://t.co/1n6rnknG4z",
            "display_url": "pic.twitter.com/1n6rnknG4z",
            "expanded_url": "https://twitter.com/barstoolsports/status/1183547333096726528/video/1",
            "type": "video",
            "sizes": {
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              },
              "medium": {
                "w": 640,
                "h": 1138,
                "resize": "fit"
              },
              "large": {
                "w": 640,
                "h": 1138,
                "resize": "fit"
              },
              "small": {
                "w": 382,
                "h": 680,
                "resize": "fit"
              }
            },
            "video_info": {
              "aspect_ratio": [
                320,
                569
              ],
              "duration_millis": 17634,
              "variants": [
                {
                  "content_type": "application/x-mpegURL",
                  "url": "https://video.twimg.com/ext_tw_video/1183547235184906241/pu/pl/FhM4MYKTAKw1Oea7.m3u8?tag=10"
                },
                {
                  "bitrate": 2176000,
                  "content_type": "video/mp4",
                  "url": "https://video.twimg.com/ext_tw_video/1183547235184906241/pu/vid/640x1138/YLTkX0Nud8UZoV2a.mp4?tag=10"
                },
                {
                  "bitrate": 632000,
                  "content_type": "video/mp4",
                  "url": "https://video.twimg.com/ext_tw_video/1183547235184906241/pu/vid/320x568/sYJMsuIzruJOIjLc.mp4?tag=10"
                },
                {
                  "bitrate": 832000,
                  "content_type": "video/mp4",
                  "url": "https://video.twimg.com/ext_tw_video/1183547235184906241/pu/vid/360x640/2LjI5lU-SBSUIRYQ.mp4?tag=10"
                }
              ]
            },
            "additional_media_info": {
              "monetizable": false
            }
          }
        ]
      },
      "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user": {
        "id": 22637974,
        "id_str": "22637974",
        "name": "Barstool Sports",
        "screen_name": "barstoolsports",
        "location": "America",
        "description": "Viva La Stool - Download the Barstool Sports app https://t.co/sxfRMbcsSw",
        "url": "https://t.co/67MD8gf64M",
        "entities": {
          "url": {
            "urls": [
              {
                "url": "https://t.co/67MD8gf64M",
                "expanded_url": "http://www.barstoolsports.com",
                "display_url": "barstoolsports.com",
                "indices": [
                  0,
                  23
                ]
              }
            ]
          },
          "description": {
            "urls": [
              {
                "url": "https://t.co/sxfRMbcsSw",
                "expanded_url": "https://www.barstoolsports.com/download",
                "display_url": "barstoolsports.com/download",
                "indices": [
                  49,
                  72
                ]
              }
            ]
          }
        },
        "protected": false,
        "followers_count": 1838100,
        "friends_count": 702,
        "listed_count": 4970,
        "created_at": "Tue Mar 03 16:01:13 +0000 2009",
        "favourites_count": 3294,
        "utc_offset": null,
        "time_zone": null,
        "geo_enabled": true,
        "verified": true,
        "statuses_count": 37474,
        "lang": null,
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "C0DEED",
        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_tile": true,
        "profile_image_url": "http://pbs.twimg.com/profile_images/1058444729816440832/pQUvQtVl_normal.jpg",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/1058444729816440832/pQUvQtVl_normal.jpg",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/22637974/1570797907",
        "profile_link_color": "0084B4",
        "profile_sidebar_border_color": "FFFFFF",
        "profile_sidebar_fill_color": "DDEEF6",
        "profile_text_color": "333333",
        "profile_use_background_image": true,
        "has_extended_profile": false,
        "default_profile": false,
        "default_profile_image": false,
        "following": false,
        "follow_request_sent": false,
        "notifications": false,
        "translator_type": "none"
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "is_quote_status": false,
      "retweet_count": 625,
      "favorite_count": 4049,
      "favorited": false,
      "retweeted": false,
      "possibly_sensitive": false,
      "lang": "en"
    },
    "retweet_count": 121,
    "favorite_count": 1917,
    "favorited": false,
    "retweeted": false,
    "possibly_sensitive": false,
    "lang": "und"
  },
  {
    "created_at": "Sun Oct 13 23:38:48 +0000 2019",
    "id": 1183527537965748200,
    "id_str": "1183527537965748224",
    "text": "When I started Barstool I didn’t think I’d fall in love with @nascar and NASCAR fans would fall in love with us.  B… https://t.co/gSuTwzqwgk",
    "truncated": true,
    "entities": {
      "hashtags": [
        
      ],
      "symbols": [
        
      ],
      "user_mentions": [
        {
          "screen_name": "NASCAR",
          "name": "NASCAR",
          "id": 49153854,
          "id_str": "49153854",
          "indices": [
            61,
            68
          ]
        }
      ],
      "urls": [
        {
          "url": "https://t.co/gSuTwzqwgk",
          "expanded_url": "https://twitter.com/i/web/status/1183527537965748224",
          "display_url": "twitter.com/i/web/status/1…",
          "indices": [
            117,
            140
          ]
        }
      ]
    },
    "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 43775786,
      "id_str": "43775786",
      "name": "Dave Portnoy",
      "screen_name": "stoolpresidente",
      "location": "Boston",
      "description": "El Presidente/3 time Bee Sting survivor. Heart attack survivor. Vegas Heat Stroke Survivor. Milli Milli Club. Shot 4 under at Shinnecock.",
      "url": "https://t.co/nXDqi8XC4M",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/nXDqi8XC4M",
              "expanded_url": "http://boston.barstoolsports.com",
              "display_url": "boston.barstoolsports.com",
              "indices": [
                0,
                23
              ]
            }
          ]
        },
        "description": {
          "urls": [
            
          ]
        }
      },
      "protected": false,
      "followers_count": 1057483,
      "friends_count": 1198,
      "listed_count": 3092,
      "created_at": "Sun May 31 23:08:06 +0000 2009",
      "favourites_count": 2301,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 77696,
      "lang": null,
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "00254C",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": true,
      "profile_image_url": "http://pbs.twimg.com/profile_images/598493860336148480/SaR7gKvr_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/598493860336148480/SaR7gKvr_normal.jpg",
      "profile_link_color": "050505",
      "profile_sidebar_border_color": "CCCCCC",
      "profile_sidebar_fill_color": "EEEEEE",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": false,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 251,
    "favorite_count": 6400,
    "favorited": false,
    "retweeted": false,
    "possibly_sensitive": false,
    "lang": "en"
  },
  {
    "created_at": "Sun Oct 13 23:12:03 +0000 2019",
    "id": 1183520805688348700,
    "id_str": "1183520805688348673",
    "text": "Just landed.  #Stillhere",
    "truncated": false,
    "entities": {
      "hashtags": [
        {
          "text": "Stillhere",
          "indices": [
            14,
            24
          ]
        }
      ],
      "symbols": [
        
      ],
      "user_mentions": [
        
      ],
      "urls": [
        
      ]
    },
    "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 43775786,
      "id_str": "43775786",
      "name": "Dave Portnoy",
      "screen_name": "stoolpresidente",
      "location": "Boston",
      "description": "El Presidente/3 time Bee Sting survivor. Heart attack survivor. Vegas Heat Stroke Survivor. Milli Milli Club. Shot 4 under at Shinnecock.",
      "url": "https://t.co/nXDqi8XC4M",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/nXDqi8XC4M",
              "expanded_url": "http://boston.barstoolsports.com",
              "display_url": "boston.barstoolsports.com",
              "indices": [
                0,
                23
              ]
            }
          ]
        },
        "description": {
          "urls": [
            
          ]
        }
      },
      "protected": false,
      "followers_count": 1057483,
      "friends_count": 1198,
      "listed_count": 3092,
      "created_at": "Sun May 31 23:08:06 +0000 2009",
      "favourites_count": 2301,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 77696,
      "lang": null,
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "00254C",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": true,
      "profile_image_url": "http://pbs.twimg.com/profile_images/598493860336148480/SaR7gKvr_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/598493860336148480/SaR7gKvr_normal.jpg",
      "profile_link_color": "050505",
      "profile_sidebar_border_color": "CCCCCC",
      "profile_sidebar_fill_color": "EEEEEE",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": false,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 26,
    "favorite_count": 1890,
    "favorited": false,
    "retweeted": false,
    "lang": "en"
  },
  {
    "created_at": "Sun Oct 13 22:31:03 +0000 2019",
    "id": 1183510487960621000,
    "id_str": "1183510487960621058",
    "text": "Breaking:   The throttle just became unstuck.  Some are saying all the love from my fans unstuck it like how Xmas s… https://t.co/Om5B0z4Z9C",
    "truncated": true,
    "entities": {
      "hashtags": [
        
      ],
      "symbols": [
        
      ],
      "user_mentions": [
        
      ],
      "urls": [
        {
          "url": "https://t.co/Om5B0z4Z9C",
          "expanded_url": "https://twitter.com/i/web/status/1183510487960621058",
          "display_url": "twitter.com/i/web/status/1…",
          "indices": [
            117,
            140
          ]
        }
      ]
    },
    "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 43775786,
      "id_str": "43775786",
      "name": "Dave Portnoy",
      "screen_name": "stoolpresidente",
      "location": "Boston",
      "description": "El Presidente/3 time Bee Sting survivor. Heart attack survivor. Vegas Heat Stroke Survivor. Milli Milli Club. Shot 4 under at Shinnecock.",
      "url": "https://t.co/nXDqi8XC4M",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/nXDqi8XC4M",
              "expanded_url": "http://boston.barstoolsports.com",
              "display_url": "boston.barstoolsports.com",
              "indices": [
                0,
                23
              ]
            }
          ]
        },
        "description": {
          "urls": [
            
          ]
        }
      },
      "protected": false,
      "followers_count": 1057483,
      "friends_count": 1198,
      "listed_count": 3092,
      "created_at": "Sun May 31 23:08:06 +0000 2009",
      "favourites_count": 2301,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 77696,
      "lang": null,
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "00254C",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": true,
      "profile_image_url": "http://pbs.twimg.com/profile_images/598493860336148480/SaR7gKvr_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/598493860336148480/SaR7gKvr_normal.jpg",
      "profile_link_color": "050505",
      "profile_sidebar_border_color": "CCCCCC",
      "profile_sidebar_fill_color": "EEEEEE",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": false,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 329,
    "favorite_count": 8645,
    "favorited": false,
    "retweeted": false,
    "lang": "en"
  },
  {
    "created_at": "Sun Oct 13 22:25:24 +0000 2019",
    "id": 1183509066804539400,
    "id_str": "1183509066804539397",
    "text": "What’s the throttle?   Is that important?   Cause that’s stuck",
    "truncated": false,
    "entities": {
      "hashtags": [
        
      ],
      "symbols": [
        
      ],
      "user_mentions": [
        
      ],
      "urls": [
        
      ]
    },
    "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 43775786,
      "id_str": "43775786",
      "name": "Dave Portnoy",
      "screen_name": "stoolpresidente",
      "location": "Boston",
      "description": "El Presidente/3 time Bee Sting survivor. Heart attack survivor. Vegas Heat Stroke Survivor. Milli Milli Club. Shot 4 under at Shinnecock.",
      "url": "https://t.co/nXDqi8XC4M",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/nXDqi8XC4M",
              "expanded_url": "http://boston.barstoolsports.com",
              "display_url": "boston.barstoolsports.com",
              "indices": [
                0,
                23
              ]
            }
          ]
        },
        "description": {
          "urls": [
            
          ]
        }
      },
      "protected": false,
      "followers_count": 1057483,
      "friends_count": 1198,
      "listed_count": 3092,
      "created_at": "Sun May 31 23:08:06 +0000 2009",
      "favourites_count": 2301,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 77696,
      "lang": null,
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "00254C",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": true,
      "profile_image_url": "http://pbs.twimg.com/profile_images/598493860336148480/SaR7gKvr_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/598493860336148480/SaR7gKvr_normal.jpg",
      "profile_link_color": "050505",
      "profile_sidebar_border_color": "CCCCCC",
      "profile_sidebar_fill_color": "EEEEEE",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": false,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 48,
    "favorite_count": 1701,
    "favorited": false,
    "retweeted": false,
    "lang": "en"
  },
  {
    "created_at": "Sun Oct 13 22:23:49 +0000 2019",
    "id": 1183508668131823600,
    "id_str": "1183508668131823617",
    "text": "My bookie must be shitting his pants right now with these plane issues",
    "truncated": false,
    "entities": {
      "hashtags": [
        
      ],
      "symbols": [
        
      ],
      "user_mentions": [
        
      ],
      "urls": [
        
      ]
    },
    "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 43775786,
      "id_str": "43775786",
      "name": "Dave Portnoy",
      "screen_name": "stoolpresidente",
      "location": "Boston",
      "description": "El Presidente/3 time Bee Sting survivor. Heart attack survivor. Vegas Heat Stroke Survivor. Milli Milli Club. Shot 4 under at Shinnecock.",
      "url": "https://t.co/nXDqi8XC4M",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/nXDqi8XC4M",
              "expanded_url": "http://boston.barstoolsports.com",
              "display_url": "boston.barstoolsports.com",
              "indices": [
                0,
                23
              ]
            }
          ]
        },
        "description": {
          "urls": [
            
          ]
        }
      },
      "protected": false,
      "followers_count": 1057483,
      "friends_count": 1198,
      "listed_count": 3092,
      "created_at": "Sun May 31 23:08:06 +0000 2009",
      "favourites_count": 2301,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 77696,
      "lang": null,
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "00254C",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": true,
      "profile_image_url": "http://pbs.twimg.com/profile_images/598493860336148480/SaR7gKvr_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/598493860336148480/SaR7gKvr_normal.jpg",
      "profile_link_color": "050505",
      "profile_sidebar_border_color": "CCCCCC",
      "profile_sidebar_fill_color": "EEEEEE",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": false,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 47,
    "favorite_count": 2504,
    "favorited": false,
    "retweeted": false,
    "lang": "en"
  },
  {
    "created_at": "Sun Oct 13 22:19:39 +0000 2019",
    "id": 1183507618087800800,
    "id_str": "1183507618087800832",
    "text": "We’re flying home and the pilot just told us the plane is broken.  He also said not to worry though so we good.",
    "truncated": false,
    "entities": {
      "hashtags": [
        
      ],
      "symbols": [
        
      ],
      "user_mentions": [
        
      ],
      "urls": [
        
      ]
    },
    "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 43775786,
      "id_str": "43775786",
      "name": "Dave Portnoy",
      "screen_name": "stoolpresidente",
      "location": "Boston",
      "description": "El Presidente/3 time Bee Sting survivor. Heart attack survivor. Vegas Heat Stroke Survivor. Milli Milli Club. Shot 4 under at Shinnecock.",
      "url": "https://t.co/nXDqi8XC4M",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/nXDqi8XC4M",
              "expanded_url": "http://boston.barstoolsports.com",
              "display_url": "boston.barstoolsports.com",
              "indices": [
                0,
                23
              ]
            }
          ]
        },
        "description": {
          "urls": [
            
          ]
        }
      },
      "protected": false,
      "followers_count": 1057483,
      "friends_count": 1198,
      "listed_count": 3092,
      "created_at": "Sun May 31 23:08:06 +0000 2009",
      "favourites_count": 2301,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 77696,
      "lang": null,
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "00254C",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": true,
      "profile_image_url": "http://pbs.twimg.com/profile_images/598493860336148480/SaR7gKvr_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/598493860336148480/SaR7gKvr_normal.jpg",
      "profile_link_color": "050505",
      "profile_sidebar_border_color": "CCCCCC",
      "profile_sidebar_fill_color": "EEEEEE",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": false,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 114,
    "favorite_count": 5851,
    "favorited": false,
    "retweeted": false,
    "lang": "en"
  },
  {
    "created_at": "Sun Oct 13 21:58:34 +0000 2019",
    "id": 1183502311513088000,
    "id_str": "1183502311513088000",
    "text": "RT @VivaLaStool: Youngstown bob is a content machine https://t.co/CuquAb7dXB",
    "truncated": false,
    "entities": {
      "hashtags": [
        
      ],
      "symbols": [
        
      ],
      "user_mentions": [
        {
          "screen_name": "VivaLaStool",
          "name": "Viva La Stool",
          "id": 2510879071,
          "id_str": "2510879071",
          "indices": [
            3,
            15
          ]
        }
      ],
      "urls": [
        {
          "url": "https://t.co/CuquAb7dXB",
          "expanded_url": "https://twitter.com/Youngstown_Bob/status/1183490752292278274/video/1",
          "display_url": "twitter.com/Youngstown_Bob…",
          "indices": [
            53,
            76
          ]
        }
      ]
    },
    "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 43775786,
      "id_str": "43775786",
      "name": "Dave Portnoy",
      "screen_name": "stoolpresidente",
      "location": "Boston",
      "description": "El Presidente/3 time Bee Sting survivor. Heart attack survivor. Vegas Heat Stroke Survivor. Milli Milli Club. Shot 4 under at Shinnecock.",
      "url": "https://t.co/nXDqi8XC4M",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/nXDqi8XC4M",
              "expanded_url": "http://boston.barstoolsports.com",
              "display_url": "boston.barstoolsports.com",
              "indices": [
                0,
                23
              ]
            }
          ]
        },
        "description": {
          "urls": [
            
          ]
        }
      },
      "protected": false,
      "followers_count": 1057483,
      "friends_count": 1198,
      "listed_count": 3092,
      "created_at": "Sun May 31 23:08:06 +0000 2009",
      "favourites_count": 2301,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 77696,
      "lang": null,
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "00254C",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": true,
      "profile_image_url": "http://pbs.twimg.com/profile_images/598493860336148480/SaR7gKvr_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/598493860336148480/SaR7gKvr_normal.jpg",
      "profile_link_color": "050505",
      "profile_sidebar_border_color": "CCCCCC",
      "profile_sidebar_fill_color": "EEEEEE",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": false,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "retweeted_status": {
      "created_at": "Sun Oct 13 21:20:12 +0000 2019",
      "id": 1183492659173834800,
      "id_str": "1183492659173834753",
      "text": "Youngstown bob is a content machine https://t.co/CuquAb7dXB",
      "truncated": false,
      "entities": {
        "hashtags": [
          
        ],
        "symbols": [
          
        ],
        "user_mentions": [
          
        ],
        "urls": [
          {
            "url": "https://t.co/CuquAb7dXB",
            "expanded_url": "https://twitter.com/Youngstown_Bob/status/1183490752292278274/video/1",
            "display_url": "twitter.com/Youngstown_Bob…",
            "indices": [
              36,
              59
            ]
          }
        ]
      },
      "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user": {
        "id": 2510879071,
        "id_str": "2510879071",
        "name": "Viva La Stool",
        "screen_name": "VivaLaStool",
        "location": "Barstool HQ",
        "description": "All of your favorite @barstoolsports videos in one place #VivaLaStool | Follow @vivalastool on Instagram",
        "url": "https://t.co/NybqkmDeF7",
        "entities": {
          "url": {
            "urls": [
              {
                "url": "https://t.co/NybqkmDeF7",
                "expanded_url": "https://www.instagram.com/vivalastool/",
                "display_url": "instagram.com/vivalastool/",
                "indices": [
                  0,
                  23
                ]
              }
            ]
          },
          "description": {
            "urls": [
              
            ]
          }
        },
        "protected": false,
        "followers_count": 96661,
        "friends_count": 117,
        "listed_count": 342,
        "created_at": "Tue May 20 16:42:57 +0000 2014",
        "favourites_count": 1116,
        "utc_offset": null,
        "time_zone": null,
        "geo_enabled": false,
        "verified": false,
        "statuses_count": 3099,
        "lang": null,
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "C0DEED",
        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/953673288965910529/Erix1kj9_normal.jpg",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/953673288965910529/Erix1kj9_normal.jpg",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/2510879071/1520441257",
        "profile_link_color": "1DA1F2",
        "profile_sidebar_border_color": "C0DEED",
        "profile_sidebar_fill_color": "DDEEF6",
        "profile_text_color": "333333",
        "profile_use_background_image": true,
        "has_extended_profile": true,
        "default_profile": true,
        "default_profile_image": false,
        "following": false,
        "follow_request_sent": false,
        "notifications": false,
        "translator_type": "none"
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "is_quote_status": false,
      "retweet_count": 11,
      "favorite_count": 350,
      "favorited": false,
      "retweeted": false,
      "possibly_sensitive": false,
      "lang": "en"
    },
    "is_quote_status": false,
    "retweet_count": 11,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "possibly_sensitive": false,
    "lang": "en"
  },
  {
    "created_at": "Sun Oct 13 21:55:52 +0000 2019",
    "id": 1183501632606220300,
    "id_str": "1183501632606220289",
    "text": "RT @chadmikosz25: Super bummed about the weather, &amp; having to fly home at 5AM, but I got to meet @barstoolsports @stoolpresidente &amp; @Franki…",
    "truncated": false,
    "entities": {
      "hashtags": [
        
      ],
      "symbols": [
        
      ],
      "user_mentions": [
        {
          "screen_name": "chadmikosz25",
          "name": "Chad",
          "id": 69183679,
          "id_str": "69183679",
          "indices": [
            3,
            16
          ]
        },
        {
          "screen_name": "barstoolsports",
          "name": "Barstool Sports",
          "id": 22637974,
          "id_str": "22637974",
          "indices": [
            101,
            116
          ]
        },
        {
          "screen_name": "stoolpresidente",
          "name": "Dave Portnoy",
          "id": 43775786,
          "id_str": "43775786",
          "indices": [
            117,
            133
          ]
        }
      ],
      "urls": [
        
      ]
    },
    "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 43775786,
      "id_str": "43775786",
      "name": "Dave Portnoy",
      "screen_name": "stoolpresidente",
      "location": "Boston",
      "description": "El Presidente/3 time Bee Sting survivor. Heart attack survivor. Vegas Heat Stroke Survivor. Milli Milli Club. Shot 4 under at Shinnecock.",
      "url": "https://t.co/nXDqi8XC4M",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/nXDqi8XC4M",
              "expanded_url": "http://boston.barstoolsports.com",
              "display_url": "boston.barstoolsports.com",
              "indices": [
                0,
                23
              ]
            }
          ]
        },
        "description": {
          "urls": [
            
          ]
        }
      },
      "protected": false,
      "followers_count": 1057483,
      "friends_count": 1198,
      "listed_count": 3092,
      "created_at": "Sun May 31 23:08:06 +0000 2009",
      "favourites_count": 2301,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 77696,
      "lang": null,
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "00254C",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": true,
      "profile_image_url": "http://pbs.twimg.com/profile_images/598493860336148480/SaR7gKvr_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/598493860336148480/SaR7gKvr_normal.jpg",
      "profile_link_color": "050505",
      "profile_sidebar_border_color": "CCCCCC",
      "profile_sidebar_fill_color": "EEEEEE",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": false,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "retweeted_status": {
      "created_at": "Sun Oct 13 21:31:35 +0000 2019",
      "id": 1183495520565842000,
      "id_str": "1183495520565841920",
      "text": "Super bummed about the weather, &amp; having to fly home at 5AM, but I got to meet @barstoolsports @stoolpresidente &amp;… https://t.co/gwuvH3ropa",
      "truncated": true,
      "entities": {
        "hashtags": [
          
        ],
        "symbols": [
          
        ],
        "user_mentions": [
          {
            "screen_name": "barstoolsports",
            "name": "Barstool Sports",
            "id": 22637974,
            "id_str": "22637974",
            "indices": [
              83,
              98
            ]
          },
          {
            "screen_name": "stoolpresidente",
            "name": "Dave Portnoy",
            "id": 43775786,
            "id_str": "43775786",
            "indices": [
              99,
              115
            ]
          }
        ],
        "urls": [
          {
            "url": "https://t.co/gwuvH3ropa",
            "expanded_url": "https://twitter.com/i/web/status/1183495520565841920",
            "display_url": "twitter.com/i/web/status/1…",
            "indices": [
              123,
              146
            ]
          }
        ]
      },
      "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user": {
        "id": 69183679,
        "id_str": "69183679",
        "name": "Chad",
        "screen_name": "chadmikosz25",
        "location": "Chicago, Illinois",
        "description": "I sell car parts, drink lots of Budweiser, and sometimes design racecars.",
        "url": "https://t.co/WJnwyVv54j",
        "entities": {
          "url": {
            "urls": [
              {
                "url": "https://t.co/WJnwyVv54j",
                "expanded_url": "http://www.bigevildesigns.com",
                "display_url": "bigevildesigns.com",
                "indices": [
                  0,
                  23
                ]
              }
            ]
          },
          "description": {
            "urls": [
              
            ]
          }
        },
        "protected": false,
        "followers_count": 878,
        "friends_count": 2345,
        "listed_count": 11,
        "created_at": "Thu Aug 27 03:05:38 +0000 2009",
        "favourites_count": 32339,
        "utc_offset": null,
        "time_zone": null,
        "geo_enabled": true,
        "verified": false,
        "statuses_count": 18020,
        "lang": null,
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "000052",
        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme14/bg.gif",
        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme14/bg.gif",
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/1157322789919047680/-br2RDcq_normal.jpg",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/1157322789919047680/-br2RDcq_normal.jpg",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/69183679/1567300673",
        "profile_link_color": "000D3C",
        "profile_sidebar_border_color": "FFFFFF",
        "profile_sidebar_fill_color": "FF0000",
        "profile_text_color": "000000",
        "profile_use_background_image": true,
        "has_extended_profile": true,
        "default_profile": false,
        "default_profile_image": false,
        "following": false,
        "follow_request_sent": false,
        "notifications": false,
        "translator_type": "none"
      },
      "geo": null,
      "coordinates": null,
      "place": {
        "id": "07d9c9426e488002",
        "url": "https://api.twitter.com/1.1/geo/id/07d9c9426e488002.json",
        "place_type": "poi",
        "name": "Talladega Superspeedway",
        "full_name": "Talladega Superspeedway",
        "country_code": "US",
        "country": "United States",
        "contained_within": [
          
        ],
        "bounding_box": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -86.06680870056152,
                33.56671567569066
              ],
              [
                -86.06680870056152,
                33.56671567569066
              ],
              [
                -86.06680870056152,
                33.56671567569066
              ],
              [
                -86.06680870056152,
                33.56671567569066
              ]
            ]
          ]
        },
        "attributes": {
          
        }
      },
      "contributors": null,
      "is_quote_status": false,
      "retweet_count": 10,
      "favorite_count": 312,
      "favorited": false,
      "retweeted": false,
      "possibly_sensitive": false,
      "lang": "en"
    },
    "is_quote_status": false,
    "retweet_count": 10,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "lang": "en"
  },
  {
    "created_at": "Sun Oct 13 21:03:00 +0000 2019",
    "id": 1183488327837802500,
    "id_str": "1183488327837802496",
    "text": "RT @TalladegaSuperS: The conclusion of the #1000Bulbs500 has been postponed until tomorrow, October 14 at 1:00 PM CT. \n\nIt will air on NBCS…",
    "truncated": false,
    "entities": {
      "hashtags": [
        {
          "text": "1000Bulbs500",
          "indices": [
            43,
            56
          ]
        }
      ],
      "symbols": [
        
      ],
      "user_mentions": [
        {
          "screen_name": "TalladegaSuperS",
          "name": "Talladega Superspeedway",
          "id": 22536159,
          "id_str": "22536159",
          "indices": [
            3,
            19
          ]
        }
      ],
      "urls": [
        
      ]
    },
    "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 43775786,
      "id_str": "43775786",
      "name": "Dave Portnoy",
      "screen_name": "stoolpresidente",
      "location": "Boston",
      "description": "El Presidente/3 time Bee Sting survivor. Heart attack survivor. Vegas Heat Stroke Survivor. Milli Milli Club. Shot 4 under at Shinnecock.",
      "url": "https://t.co/nXDqi8XC4M",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/nXDqi8XC4M",
              "expanded_url": "http://boston.barstoolsports.com",
              "display_url": "boston.barstoolsports.com",
              "indices": [
                0,
                23
              ]
            }
          ]
        },
        "description": {
          "urls": [
            
          ]
        }
      },
      "protected": false,
      "followers_count": 1057483,
      "friends_count": 1198,
      "listed_count": 3092,
      "created_at": "Sun May 31 23:08:06 +0000 2009",
      "favourites_count": 2301,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 77696,
      "lang": null,
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "00254C",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": true,
      "profile_image_url": "http://pbs.twimg.com/profile_images/598493860336148480/SaR7gKvr_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/598493860336148480/SaR7gKvr_normal.jpg",
      "profile_link_color": "050505",
      "profile_sidebar_border_color": "CCCCCC",
      "profile_sidebar_fill_color": "EEEEEE",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": false,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "retweeted_status": {
      "created_at": "Sun Oct 13 20:33:07 +0000 2019",
      "id": 1183480809090625500,
      "id_str": "1183480809090625536",
      "text": "The conclusion of the #1000Bulbs500 has been postponed until tomorrow, October 14 at 1:00 PM CT. \n\nIt will air on N… https://t.co/s9Cf2RaZov",
      "truncated": true,
      "entities": {
        "hashtags": [
          {
            "text": "1000Bulbs500",
            "indices": [
              22,
              35
            ]
          }
        ],
        "symbols": [
          
        ],
        "user_mentions": [
          
        ],
        "urls": [
          {
            "url": "https://t.co/s9Cf2RaZov",
            "expanded_url": "https://twitter.com/i/web/status/1183480809090625536",
            "display_url": "twitter.com/i/web/status/1…",
            "indices": [
              117,
              140
            ]
          }
        ]
      },
      "source": "<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user": {
        "id": 22536159,
        "id_str": "22536159",
        "name": "Talladega Superspeedway",
        "screen_name": "TalladegaSuperS",
        "location": "Talladega, AL",
        "description": "Join our 50th anniversary celebration this October 11-13! Tickets and camping for the #1000Bulbs500 and #SugarlandsShine250 are available now!",
        "url": "https://t.co/biI2IBISn8",
        "entities": {
          "url": {
            "urls": [
              {
                "url": "https://t.co/biI2IBISn8",
                "expanded_url": "https://bit.ly/2Y6oB9c",
                "display_url": "bit.ly/2Y6oB9c",
                "indices": [
                  0,
                  23
                ]
              }
            ]
          },
          "description": {
            "urls": [
              
            ]
          }
        },
        "protected": false,
        "followers_count": 140194,
        "friends_count": 1851,
        "listed_count": 1480,
        "created_at": "Mon Mar 02 21:23:52 +0000 2009",
        "favourites_count": 7665,
        "utc_offset": null,
        "time_zone": null,
        "geo_enabled": true,
        "verified": true,
        "statuses_count": 53264,
        "lang": null,
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "282D2E",
        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/1168946378665582592/ZcoQoChh_normal.jpg",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/1168946378665582592/ZcoQoChh_normal.jpg",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/22536159/1567527494",
        "profile_link_color": "00BCFF",
        "profile_sidebar_border_color": "000000",
        "profile_sidebar_fill_color": "000000",
        "profile_text_color": "9C9C9C",
        "profile_use_background_image": true,
        "has_extended_profile": false,
        "default_profile": false,
        "default_profile_image": false,
        "following": false,
        "follow_request_sent": false,
        "notifications": false,
        "translator_type": "none"
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "is_quote_status": false,
      "retweet_count": 124,
      "favorite_count": 381,
      "favorited": false,
      "retweeted": false,
      "possibly_sensitive": false,
      "lang": "en"
    },
    "is_quote_status": false,
    "retweet_count": 124,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "lang": "en"
  },
  {
    "created_at": "Sun Oct 13 21:02:16 +0000 2019",
    "id": 1183488144462811100,
    "id_str": "1183488144462811139",
    "text": "RT @JWarrenw2026: @stoolpresidente @mattdracing....rain delay, c'mon over. https://t.co/2l8XU5qqLt",
    "truncated": false,
    "entities": {
      "hashtags": [
        
      ],
      "symbols": [
        
      ],
      "user_mentions": [
        {
          "screen_name": "JWarrenw2026",
          "name": "Jeremy Warren",
          "id": 788421575586488300,
          "id_str": "788421575586488321",
          "indices": [
            3,
            16
          ]
        },
        {
          "screen_name": "stoolpresidente",
          "name": "Dave Portnoy",
          "id": 43775786,
          "id_str": "43775786",
          "indices": [
            18,
            34
          ]
        },
        {
          "screen_name": "mattdracing",
          "name": "Matt DiBenedetto",
          "id": 43701219,
          "id_str": "43701219",
          "indices": [
            35,
            47
          ]
        }
      ],
      "urls": [
        
      ],
      "media": [
        {
          "id": 1183486370217713700,
          "id_str": "1183486370217713664",
          "indices": [
            75,
            98
          ],
          "media_url": "http://pbs.twimg.com/media/EGyWlVVX4AAghSI.jpg",
          "media_url_https": "https://pbs.twimg.com/media/EGyWlVVX4AAghSI.jpg",
          "url": "https://t.co/2l8XU5qqLt",
          "display_url": "pic.twitter.com/2l8XU5qqLt",
          "expanded_url": "https://twitter.com/JWarrenw2026/status/1183486425028874240/photo/1",
          "type": "photo",
          "sizes": {
            "large": {
              "w": 1536,
              "h": 2048,
              "resize": "fit"
            },
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            },
            "medium": {
              "w": 900,
              "h": 1200,
              "resize": "fit"
            },
            "small": {
              "w": 510,
              "h": 680,
              "resize": "fit"
            }
          },
          "source_status_id": 1183486425028874200,
          "source_status_id_str": "1183486425028874240",
          "source_user_id": 788421575586488300,
          "source_user_id_str": "788421575586488321"
        }
      ]
    },
    "extended_entities": {
      "media": [
        {
          "id": 1183486370217713700,
          "id_str": "1183486370217713664",
          "indices": [
            75,
            98
          ],
          "media_url": "http://pbs.twimg.com/media/EGyWlVVX4AAghSI.jpg",
          "media_url_https": "https://pbs.twimg.com/media/EGyWlVVX4AAghSI.jpg",
          "url": "https://t.co/2l8XU5qqLt",
          "display_url": "pic.twitter.com/2l8XU5qqLt",
          "expanded_url": "https://twitter.com/JWarrenw2026/status/1183486425028874240/photo/1",
          "type": "photo",
          "sizes": {
            "large": {
              "w": 1536,
              "h": 2048,
              "resize": "fit"
            },
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            },
            "medium": {
              "w": 900,
              "h": 1200,
              "resize": "fit"
            },
            "small": {
              "w": 510,
              "h": 680,
              "resize": "fit"
            }
          },
          "source_status_id": 1183486425028874200,
          "source_status_id_str": "1183486425028874240",
          "source_user_id": 788421575586488300,
          "source_user_id_str": "788421575586488321"
        }
      ]
    },
    "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 43775786,
      "id_str": "43775786",
      "name": "Dave Portnoy",
      "screen_name": "stoolpresidente",
      "location": "Boston",
      "description": "El Presidente/3 time Bee Sting survivor. Heart attack survivor. Vegas Heat Stroke Survivor. Milli Milli Club. Shot 4 under at Shinnecock.",
      "url": "https://t.co/nXDqi8XC4M",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/nXDqi8XC4M",
              "expanded_url": "http://boston.barstoolsports.com",
              "display_url": "boston.barstoolsports.com",
              "indices": [
                0,
                23
              ]
            }
          ]
        },
        "description": {
          "urls": [
            
          ]
        }
      },
      "protected": false,
      "followers_count": 1057483,
      "friends_count": 1198,
      "listed_count": 3092,
      "created_at": "Sun May 31 23:08:06 +0000 2009",
      "favourites_count": 2301,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 77696,
      "lang": null,
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "00254C",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": true,
      "profile_image_url": "http://pbs.twimg.com/profile_images/598493860336148480/SaR7gKvr_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/598493860336148480/SaR7gKvr_normal.jpg",
      "profile_link_color": "050505",
      "profile_sidebar_border_color": "CCCCCC",
      "profile_sidebar_fill_color": "EEEEEE",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": false,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "retweeted_status": {
      "created_at": "Sun Oct 13 20:55:26 +0000 2019",
      "id": 1183486425028874200,
      "id_str": "1183486425028874240",
      "text": "@stoolpresidente @mattdracing....rain delay, c'mon over. https://t.co/2l8XU5qqLt",
      "truncated": false,
      "entities": {
        "hashtags": [
          
        ],
        "symbols": [
          
        ],
        "user_mentions": [
          {
            "screen_name": "stoolpresidente",
            "name": "Dave Portnoy",
            "id": 43775786,
            "id_str": "43775786",
            "indices": [
              0,
              16
            ]
          },
          {
            "screen_name": "mattdracing",
            "name": "Matt DiBenedetto",
            "id": 43701219,
            "id_str": "43701219",
            "indices": [
              17,
              29
            ]
          }
        ],
        "urls": [
          
        ],
        "media": [
          {
            "id": 1183486370217713700,
            "id_str": "1183486370217713664",
            "indices": [
              57,
              80
            ],
            "media_url": "http://pbs.twimg.com/media/EGyWlVVX4AAghSI.jpg",
            "media_url_https": "https://pbs.twimg.com/media/EGyWlVVX4AAghSI.jpg",
            "url": "https://t.co/2l8XU5qqLt",
            "display_url": "pic.twitter.com/2l8XU5qqLt",
            "expanded_url": "https://twitter.com/JWarrenw2026/status/1183486425028874240/photo/1",
            "type": "photo",
            "sizes": {
              "large": {
                "w": 1536,
                "h": 2048,
                "resize": "fit"
              },
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              },
              "medium": {
                "w": 900,
                "h": 1200,
                "resize": "fit"
              },
              "small": {
                "w": 510,
                "h": 680,
                "resize": "fit"
              }
            }
          }
        ]
      },
      "extended_entities": {
        "media": [
          {
            "id": 1183486370217713700,
            "id_str": "1183486370217713664",
            "indices": [
              57,
              80
            ],
            "media_url": "http://pbs.twimg.com/media/EGyWlVVX4AAghSI.jpg",
            "media_url_https": "https://pbs.twimg.com/media/EGyWlVVX4AAghSI.jpg",
            "url": "https://t.co/2l8XU5qqLt",
            "display_url": "pic.twitter.com/2l8XU5qqLt",
            "expanded_url": "https://twitter.com/JWarrenw2026/status/1183486425028874240/photo/1",
            "type": "photo",
            "sizes": {
              "large": {
                "w": 1536,
                "h": 2048,
                "resize": "fit"
              },
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              },
              "medium": {
                "w": 900,
                "h": 1200,
                "resize": "fit"
              },
              "small": {
                "w": 510,
                "h": 680,
                "resize": "fit"
              }
            }
          }
        ]
      },
      "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": 43775786,
      "in_reply_to_user_id_str": "43775786",
      "in_reply_to_screen_name": "stoolpresidente",
      "user": {
        "id": 788421575586488300,
        "id_str": "788421575586488321",
        "name": "Jeremy Warren",
        "screen_name": "JWarrenw2026",
        "location": "Collierville, TN",
        "description": "Mississippi born and raised.",
        "url": null,
        "entities": {
          "description": {
            "urls": [
              
            ]
          }
        },
        "protected": false,
        "followers_count": 57,
        "friends_count": 599,
        "listed_count": 1,
        "created_at": "Tue Oct 18 16:48:46 +0000 2016",
        "favourites_count": 3820,
        "utc_offset": null,
        "time_zone": null,
        "geo_enabled": false,
        "verified": false,
        "statuses_count": 849,
        "lang": null,
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "F5F8FA",
        "profile_background_image_url": null,
        "profile_background_image_url_https": null,
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/1159638639158210561/3lws406G_normal.jpg",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/1159638639158210561/3lws406G_normal.jpg",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/788421575586488321/1565314759",
        "profile_link_color": "1DA1F2",
        "profile_sidebar_border_color": "C0DEED",
        "profile_sidebar_fill_color": "DDEEF6",
        "profile_text_color": "333333",
        "profile_use_background_image": true,
        "has_extended_profile": true,
        "default_profile": true,
        "default_profile_image": false,
        "following": false,
        "follow_request_sent": false,
        "notifications": false,
        "translator_type": "none"
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "is_quote_status": false,
      "retweet_count": 4,
      "favorite_count": 144,
      "favorited": false,
      "retweeted": false,
      "possibly_sensitive": false,
      "lang": "en"
    },
    "is_quote_status": false,
    "retweet_count": 4,
    "favorite_count": 0,
    "favorited": false,
    "retweeted": false,
    "possibly_sensitive": false,
    "lang": "en"
  },
  {
    "created_at": "Sun Oct 13 20:26:19 +0000 2019",
    "id": 1183479097168711700,
    "id_str": "1183479097168711685",
    "text": "Rain delay @TalladegaSuperS    Meanwhile @ClintBowyer has kicked me out of the redneck club. https://t.co/LXnzP9nv1x",
    "truncated": false,
    "entities": {
      "hashtags": [
        
      ],
      "symbols": [
        
      ],
      "user_mentions": [
        {
          "screen_name": "TalladegaSuperS",
          "name": "Talladega Superspeedway",
          "id": 22536159,
          "id_str": "22536159",
          "indices": [
            11,
            27
          ]
        },
        {
          "screen_name": "ClintBowyer",
          "name": "Clint Bowyer",
          "id": 479727198,
          "id_str": "479727198",
          "indices": [
            41,
            53
          ]
        }
      ],
      "urls": [
        
      ],
      "media": [
        {
          "id": 1183478725993730000,
          "id_str": "1183478725993730051",
          "indices": [
            93,
            116
          ],
          "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/1183478725993730051/pu/img/h3-W8cRslPL9F-To.jpg",
          "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/1183478725993730051/pu/img/h3-W8cRslPL9F-To.jpg",
          "url": "https://t.co/LXnzP9nv1x",
          "display_url": "pic.twitter.com/LXnzP9nv1x",
          "expanded_url": "https://twitter.com/stoolpresidente/status/1183479097168711685/video/1",
          "type": "photo",
          "sizes": {
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            },
            "small": {
              "w": 383,
              "h": 680,
              "resize": "fit"
            },
            "large": {
              "w": 720,
              "h": 1280,
              "resize": "fit"
            },
            "medium": {
              "w": 675,
              "h": 1200,
              "resize": "fit"
            }
          }
        }
      ]
    },
    "extended_entities": {
      "media": [
        {
          "id": 1183478725993730000,
          "id_str": "1183478725993730051",
          "indices": [
            93,
            116
          ],
          "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/1183478725993730051/pu/img/h3-W8cRslPL9F-To.jpg",
          "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/1183478725993730051/pu/img/h3-W8cRslPL9F-To.jpg",
          "url": "https://t.co/LXnzP9nv1x",
          "display_url": "pic.twitter.com/LXnzP9nv1x",
          "expanded_url": "https://twitter.com/stoolpresidente/status/1183479097168711685/video/1",
          "type": "video",
          "sizes": {
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            },
            "small": {
              "w": 383,
              "h": 680,
              "resize": "fit"
            },
            "large": {
              "w": 720,
              "h": 1280,
              "resize": "fit"
            },
            "medium": {
              "w": 675,
              "h": 1200,
              "resize": "fit"
            }
          },
          "video_info": {
            "aspect_ratio": [
              9,
              16
            ],
            "duration_millis": 22840,
            "variants": [
              {
                "bitrate": 832000,
                "content_type": "video/mp4",
                "url": "https://video.twimg.com/ext_tw_video/1183478725993730051/pu/vid/360x640/89FSqhLxphPGTia_.mp4?tag=10"
              },
              {
                "bitrate": 2176000,
                "content_type": "video/mp4",
                "url": "https://video.twimg.com/ext_tw_video/1183478725993730051/pu/vid/720x1280/k9tdSc7p5aPoTVGq.mp4?tag=10"
              },
              {
                "bitrate": 632000,
                "content_type": "video/mp4",
                "url": "https://video.twimg.com/ext_tw_video/1183478725993730051/pu/vid/320x568/YBNjnG6P4BytTSz7.mp4?tag=10"
              },
              {
                "content_type": "application/x-mpegURL",
                "url": "https://video.twimg.com/ext_tw_video/1183478725993730051/pu/pl/89Z9GpwNC8rqZ8Qi.m3u8?tag=10"
              }
            ]
          },
          "additional_media_info": {
            "monetizable": false
          }
        }
      ]
    },
    "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 43775786,
      "id_str": "43775786",
      "name": "Dave Portnoy",
      "screen_name": "stoolpresidente",
      "location": "Boston",
      "description": "El Presidente/3 time Bee Sting survivor. Heart attack survivor. Vegas Heat Stroke Survivor. Milli Milli Club. Shot 4 under at Shinnecock.",
      "url": "https://t.co/nXDqi8XC4M",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/nXDqi8XC4M",
              "expanded_url": "http://boston.barstoolsports.com",
              "display_url": "boston.barstoolsports.com",
              "indices": [
                0,
                23
              ]
            }
          ]
        },
        "description": {
          "urls": [
            
          ]
        }
      },
      "protected": false,
      "followers_count": 1057483,
      "friends_count": 1198,
      "listed_count": 3092,
      "created_at": "Sun May 31 23:08:06 +0000 2009",
      "favourites_count": 2301,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 77696,
      "lang": null,
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "00254C",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": true,
      "profile_image_url": "http://pbs.twimg.com/profile_images/598493860336148480/SaR7gKvr_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/598493860336148480/SaR7gKvr_normal.jpg",
      "profile_link_color": "050505",
      "profile_sidebar_border_color": "CCCCCC",
      "profile_sidebar_fill_color": "EEEEEE",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": false,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 62,
    "favorite_count": 1049,
    "favorited": false,
    "retweeted": false,
    "possibly_sensitive": false,
    "lang": "en"
  },
  {
    "created_at": "Sun Oct 13 20:15:45 +0000 2019",
    "id": 1183476436411269000,
    "id_str": "1183476436411269123",
    "text": "Yesterday I needed Florida to score from the 3 yard line.   They didn’t.  Today I needed to stop the Bengals.   I c… https://t.co/M90ezenNjN",
    "truncated": true,
    "entities": {
      "hashtags": [
        
      ],
      "symbols": [
        
      ],
      "user_mentions": [
        
      ],
      "urls": [
        {
          "url": "https://t.co/M90ezenNjN",
          "expanded_url": "https://twitter.com/i/web/status/1183476436411269123",
          "display_url": "twitter.com/i/web/status/1…",
          "indices": [
            117,
            140
          ]
        }
      ]
    },
    "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 43775786,
      "id_str": "43775786",
      "name": "Dave Portnoy",
      "screen_name": "stoolpresidente",
      "location": "Boston",
      "description": "El Presidente/3 time Bee Sting survivor. Heart attack survivor. Vegas Heat Stroke Survivor. Milli Milli Club. Shot 4 under at Shinnecock.",
      "url": "https://t.co/nXDqi8XC4M",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/nXDqi8XC4M",
              "expanded_url": "http://boston.barstoolsports.com",
              "display_url": "boston.barstoolsports.com",
              "indices": [
                0,
                23
              ]
            }
          ]
        },
        "description": {
          "urls": [
            
          ]
        }
      },
      "protected": false,
      "followers_count": 1057483,
      "friends_count": 1198,
      "listed_count": 3092,
      "created_at": "Sun May 31 23:08:06 +0000 2009",
      "favourites_count": 2301,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 77696,
      "lang": null,
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "00254C",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": true,
      "profile_image_url": "http://pbs.twimg.com/profile_images/598493860336148480/SaR7gKvr_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/598493860336148480/SaR7gKvr_normal.jpg",
      "profile_link_color": "050505",
      "profile_sidebar_border_color": "CCCCCC",
      "profile_sidebar_fill_color": "EEEEEE",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": false,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 47,
    "favorite_count": 1362,
    "favorited": false,
    "retweeted": false,
    "possibly_sensitive": false,
    "lang": "en"
  },
  {
    "created_at": "Sun Oct 13 20:08:33 +0000 2019",
    "id": 1183474627860938800,
    "id_str": "1183474627860938752",
    "text": "I haven’t won a close game in my life",
    "truncated": false,
    "entities": {
      "hashtags": [
        
      ],
      "symbols": [
        
      ],
      "user_mentions": [
        
      ],
      "urls": [
        
      ]
    },
    "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 43775786,
      "id_str": "43775786",
      "name": "Dave Portnoy",
      "screen_name": "stoolpresidente",
      "location": "Boston",
      "description": "El Presidente/3 time Bee Sting survivor. Heart attack survivor. Vegas Heat Stroke Survivor. Milli Milli Club. Shot 4 under at Shinnecock.",
      "url": "https://t.co/nXDqi8XC4M",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/nXDqi8XC4M",
              "expanded_url": "http://boston.barstoolsports.com",
              "display_url": "boston.barstoolsports.com",
              "indices": [
                0,
                23
              ]
            }
          ]
        },
        "description": {
          "urls": [
            
          ]
        }
      },
      "protected": false,
      "followers_count": 1057483,
      "friends_count": 1198,
      "listed_count": 3092,
      "created_at": "Sun May 31 23:08:06 +0000 2009",
      "favourites_count": 2301,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 77696,
      "lang": null,
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "00254C",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": true,
      "profile_image_url": "http://pbs.twimg.com/profile_images/598493860336148480/SaR7gKvr_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/598493860336148480/SaR7gKvr_normal.jpg",
      "profile_link_color": "050505",
      "profile_sidebar_border_color": "CCCCCC",
      "profile_sidebar_fill_color": "EEEEEE",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": false,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 37,
    "favorite_count": 688,
    "favorited": false,
    "retweeted": false,
    "lang": "en"
  },
  {
    "created_at": "Sun Oct 13 20:03:25 +0000 2019",
    "id": 1183473332970295300,
    "id_str": "1183473332970295297",
    "text": "The Ravens better not blow this on that roughing the passer",
    "truncated": false,
    "entities": {
      "hashtags": [
        
      ],
      "symbols": [
        
      ],
      "user_mentions": [
        
      ],
      "urls": [
        
      ]
    },
    "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 43775786,
      "id_str": "43775786",
      "name": "Dave Portnoy",
      "screen_name": "stoolpresidente",
      "location": "Boston",
      "description": "El Presidente/3 time Bee Sting survivor. Heart attack survivor. Vegas Heat Stroke Survivor. Milli Milli Club. Shot 4 under at Shinnecock.",
      "url": "https://t.co/nXDqi8XC4M",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/nXDqi8XC4M",
              "expanded_url": "http://boston.barstoolsports.com",
              "display_url": "boston.barstoolsports.com",
              "indices": [
                0,
                23
              ]
            }
          ]
        },
        "description": {
          "urls": [
            
          ]
        }
      },
      "protected": false,
      "followers_count": 1057483,
      "friends_count": 1198,
      "listed_count": 3092,
      "created_at": "Sun May 31 23:08:06 +0000 2009",
      "favourites_count": 2301,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 77696,
      "lang": null,
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "00254C",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": true,
      "profile_image_url": "http://pbs.twimg.com/profile_images/598493860336148480/SaR7gKvr_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/598493860336148480/SaR7gKvr_normal.jpg",
      "profile_link_color": "050505",
      "profile_sidebar_border_color": "CCCCCC",
      "profile_sidebar_fill_color": "EEEEEE",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": false,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 1,
    "favorite_count": 187,
    "favorited": false,
    "retweeted": false,
    "lang": "en"
  },
  {
    "created_at": "Sun Oct 13 19:54:27 +0000 2019",
    "id": 1183471078229844000,
    "id_str": "1183471078229843974",
    "text": "The schlong is 4-0 vs the  spread.   #whodey",
    "truncated": false,
    "entities": {
      "hashtags": [
        {
          "text": "whodey",
          "indices": [
            37,
            44
          ]
        }
      ],
      "symbols": [
        
      ],
      "user_mentions": [
        
      ],
      "urls": [
        
      ]
    },
    "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 43775786,
      "id_str": "43775786",
      "name": "Dave Portnoy",
      "screen_name": "stoolpresidente",
      "location": "Boston",
      "description": "El Presidente/3 time Bee Sting survivor. Heart attack survivor. Vegas Heat Stroke Survivor. Milli Milli Club. Shot 4 under at Shinnecock.",
      "url": "https://t.co/nXDqi8XC4M",
      "entities": {
        "url": {
          "urls": [
            {
              "url": "https://t.co/nXDqi8XC4M",
              "expanded_url": "http://boston.barstoolsports.com",
              "display_url": "boston.barstoolsports.com",
              "indices": [
                0,
                23
              ]
            }
          ]
        },
        "description": {
          "urls": [
            
          ]
        }
      },
      "protected": false,
      "followers_count": 1057483,
      "friends_count": 1198,
      "listed_count": 3092,
      "created_at": "Sun May 31 23:08:06 +0000 2009",
      "favourites_count": 2301,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": true,
      "verified": false,
      "statuses_count": 77696,
      "lang": null,
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "00254C",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": true,
      "profile_image_url": "http://pbs.twimg.com/profile_images/598493860336148480/SaR7gKvr_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/598493860336148480/SaR7gKvr_normal.jpg",
      "profile_link_color": "050505",
      "profile_sidebar_border_color": "CCCCCC",
      "profile_sidebar_fill_color": "EEEEEE",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": false,
      "default_profile": false,
      "default_profile_image": false,
      "following": false,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 45,
    "favorite_count": 1349,
    "favorited": false,
    "retweeted": false,
    "lang": "en"
  }
]
class TweetsList extends React.Component {

  state = { loading: false, data: [], visible: false, userPic: "", userName: "", userTitle:"", tweetText:"", media:"" };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
      userPic: "", 
      userName: "", 
      userTitle:"", 
      tweetText:"", 
      media:""
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
      userPic: "", 
      userName: "", 
      userTitle:"", 
      tweetText:"", 
      media:""
    });
  };
  componentDidMount = () => {
    
    console.log(this.props.location,'Userlocation');
    let res = this.props.location.pathname.split("/");
    let username = res[3];

    // const dataSet = [];
    // sampleArray.map(function(name, index){
    //   console.log(name.favorite_count);
    //   if(name.favorite_count > 10){
    //     if(name.extended_entities){
    //       const {extended_entities} = name;
    //       const {media} = extended_entities
    //       const {media_url} = media[0];
    //       name.media_url = media_url;
    //     }
    //     dataSet.push(name);
    //   }
    // })
    // this.setState({data: dataSet});
    this.setState({loading:true})
    regionAPI.getTweets(username).then(
      res => {
        console.log(res,'res');
        const dataSet = [];
        res.map(function(name, index){
          console.log(name.favorite_count);
          if(name.favorite_count > 1000){
            if(name.extended_entities){
              const {extended_entities} = name;
              const {media} = extended_entities
              const {media_url} = media[0];
              name.media_url = media_url;
            }
            dataSet.push(name);
          }
        })
        this.setState({data: dataSet});
        this.setState({loading:false})

      }
    ).catch(err => {
      console.log(err,'gettweets')
      this.setState({loading:false})
    }
    );
  };
  
  clickUserName = record => {
    console.log(record)

    const {text} = record;
    const {media_url} = record;
    const {user} = record;
    const {name} = user;
    const {screen_name} = user;
    const {profile_image_url} = user;
    this.setState({
      userPic: profile_image_url, 
      userName: screen_name, 
      userTitle:name, 
      tweetText:text, 
      media:media_url
    },this.showModal());
    
  }

  render() {
    const {
      loading,
      searchLoading,
      pagination,
      onPaginationChange
    } = this.props;
    const {data, userPic, userName, userTitle, tweetText, media } = this.state;
    
  
    const allColumns = [
      {
        title: 'ID',
        dataIndex: 'id',
        className: 'clickable',
        render: (text, record) => (
          <span className="row-actions" onClick={() => this.clickUserName(record)}>
            {text || record.text}
          </span>
        )
      },{
        title: 'Media',
        dataIndex: 'media',
        className: 'clickable',
        render: (text, record) => (
          <span className="row-actions" onClick={() => this.clickUserName(record)}>
           {record.media_url ? (<img width="60" height="60" src={`${record.media_url}`}/>) : 'No Media Available'}
          </span>
        ) 
      },
      {
        title: 'Name',
        dataIndex: 'alias',
        className: 'clickable',
        render: (text, record) => (
          <span className="row-actions" onClick={() => this.clickUserName(record)}>
            {text || record.text}
          </span>
        ) 
      },

    ];

    let columns = allColumns;

    const notTabletOrPhoneTable = (
      <Table
        size="middle"
        rowKey="id"
        columns={columns}
        dataSource={data}
        loading={loading}
        onChange={onPaginationChange}
        pagination={pagination}
      />
    );
    const phoneTable = (
      <Table
        size="middle"
        rowKey="id"
        columns={columns}
        dataSource={data}
        loading={loading}
        onChange={onPaginationChange}
        pagination={pagination}
      />
    );

    let table = notTabletOrPhoneTable;

    return (
      <Row
        type="flex"
        justify="center"
        className="page list-view vpc-list-view"
      >
        <Col xs={24} xl={18}>
          <Row type="flex" justify="space-between" className="page-header">
            <h2 className="heading">TweetsList</h2>
          </Row>
          <Divider />
        </Col>
        <Col xs={24} xl={18}>
          {table}
        </Col>
        <Modal
          title="Tweet Details"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <div>
          <Row>
            <Col span={4}>
              <Row> <img width="50" height="50" src={userPic}/></Row>
            </Col>
            <Col span={20}>
              <span>{userTitle}</span><br/>
              <span>@{userName}</span>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <span>{tweetText}</span>
            </Col>
            {media ? (<Col span={24}>
              <img width="350" height="350" src={media}/>
            </Col>) : null}
          </Row>
          </div>
 
        </Modal>
      </Row>
    );
  }
}

export default ListView(TweetsList)
