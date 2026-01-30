import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
              <img className="logo" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf99BY0LkqMHNICONVbcb_Q6IJbqGFPSIkQg&s"/>  
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};
const RestaurentCard = ({resData}) => {
    const {cloudinaryImageId,name,cuisines,avgRating} = resData;
   
    return(
        <div className="res-card" style ={{backgroundColor:"#f0f0f0"}}>
            <img 
                className="res-logo"
                alt="res-logo"
                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
           <h3>{name}</h3>
           <h4>{cuisines.join(",")}</h4>
           <h4>{avgRating}</h4>
           <h4>38 minutes</h4>
        </div>
    )
}
const resObj = [
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "1194334",
              "name": "Big Bowl",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/3/a6e60e54-a9bf-472c-92e1-1b0ad2faf923_1194334.jpg",
              "locality": "Chikkadpally New nallakunta",
              "areaName": "Oden Mall",
              "costForTwo": "₹250 for two",
              "cuisines": [
                "Chinese",
                "Tibetan",
                "Desserts"
              ],
              "avgRating": 4,
              "parentId": "434792",
              "avgRatingString": "4.0",
              "totalRatingsString": "108",
              "promoted": true,
              "adTrackingId": "cid=62f5348a-bb60-459e-84ff-394286b3cb59~p=0~adgrpid=62f5348a-bb60-459e-84ff-394286b3cb59#ag4~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1194334~plpr=COLLECTION~eid=d9afc269-5baf-4d3a-92c8-d7de7e4ac4dc~srvts=1769585969688~collid=83631",
              "sla": {
                "deliveryTime": 47,
                "lastMileTravel": 6.2,
                "serviceability": "SERVICEABLE",
                "slaString": "45-50 mins",
                "lastMileTravelString": "6.2 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2026-01-28 23:00:00",
                "opened": true
              },
              "badges": {

              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {

                  },
                  "imageBased": {

                  },
                  "textExtendedBadges": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "discountTag": "FLAT DEAL",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "isNewlyOnboarded": true,
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "62f5348a-bb60-459e-84ff-394286b3cb59"
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=1194334&source=collection&query=Pizza",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "651014",
              "name": "Pizza Hut",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/d16c0e96-615c-4c34-99ad-52264d937d26_651014.JPG",
              "locality": "Mehdipatnam",
              "areaName": "Mehdipatnam",
              "costForTwo": "₹350 for two",
              "cuisines": [
                "Pizzas"
              ],
              "avgRating": 4.4,
              "parentId": "721",
              "avgRatingString": "4.4",
              "totalRatingsString": "2.8K+",
              "sla": {
                "deliveryTime": 37,
                "lastMileTravel": 5,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "5.0 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2026-01-28 23:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "Rxawards/_CATEGORY-Pizza.png",
                    "description": "Delivery!"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textExtendedBadges": {

                  },
                  "textBased": {

                  },
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "imageId": "Rxawards/_CATEGORY-Pizza.png",
                          "description": "Delivery!"
                        }
                      }
                    ]
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹59",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "4.5",
                  "ratingCount": "549"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=651014&source=collection&query=Pizza",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "233053",
              "name": "Firangi Bake",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/3/f0f912ff-5516-4967-a01b-988b3662c2fa_233053.jpg",
              "locality": "Beside Little Flower Primary school",
              "areaName": "Abids",
              "costForTwo": "₹400 for two",
              "cuisines": [
                "Pizzas",
                "Pastas",
                "Italian",
                "Mexican",
                "Healthy Food",
                "Desserts",
                "Beverages"
              ],
              "avgRating": 4.2,
              "parentId": "3952",
              "avgRatingString": "4.2",
              "totalRatingsString": "966",
              "promoted": true,
              "adTrackingId": "cid=78f039be-709b-41cb-84cf-70cd141df08f~p=1~adgrpid=78f039be-709b-41cb-84cf-70cd141df08f#ag4~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=233053~plpr=COLLECTION~eid=3e0ae65f-96ca-4f5e-9fd3-5023fa39f05a~srvts=1769585969689~collid=83631",
              "sla": {
                "deliveryTime": 41,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "40-45 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2026-01-28 23:59:00",
                "opened": true
              },
              "badges": {

              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {

                  },
                  "imageBased": {

                  },
                  "textExtendedBadges": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "UPTO ₹80",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "78f039be-709b-41cb-84cf-70cd141df08f"
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=233053&source=collection&query=Pizza",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "27739",
              "name": "Cafe Niloufer Classic",
              "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/2/13/9370aa51-58e9-4c3e-81c3-0ebe77220638_96363901-beab-4df6-945c-178fb0d2aab1.png",
              "locality": "Oshiwara",
              "areaName": "Khairatabad",
              "costForTwo": "₹150 for two",
              "cuisines": [
                "Bakery",
                "Beverages",
                "Snacks",
                "Desserts"
              ],
              "avgRating": 4.7,
              "parentId": "466854",
              "avgRatingString": "4.7",
              "totalRatingsString": "149K+",
              "sla": {
                "deliveryTime": 32,
                "lastMileTravel": 2.8,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "2.8 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2026-01-28 23:59:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                    "description": "Delivery!"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {

                  },
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                          "description": "Delivery!"
                        }
                      }
                    ]
                  },
                  "textExtendedBadges": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹29",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=27739&source=collection&query=Pizza",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "970628",
              "name": "Olio - The Wood Fired Pizzeria",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/24/a8ee6bf6-c6df-41c0-853c-03658b11e1f7_970628.JPG",
              "locality": "AKSHMI VILLA",
              "areaName": "Himayat Nagar",
              "costForTwo": "₹300 for two",
              "cuisines": [
                "Pizzas",
                "Pastas",
                "Italian",
                "Fast Food",
                "Snacks",
                "Beverages",
                "Desserts"
              ],
              "avgRating": 4.2,
              "parentId": "11633",
              "avgRatingString": "4.2",
              "totalRatingsString": "1.1K+",
              "promoted": true,
              "adTrackingId": "cid=30c46013-638e-4465-b2a5-919079cf2389~p=4~adgrpid=30c46013-638e-4465-b2a5-919079cf2389#ag3~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=970628~plpr=COLLECTION~eid=421b5b4b-4f67-4f1c-b681-375d526d9660~srvts=1769585969689~collid=83631",
              "sla": {
                "deliveryTime": 44,
                "lastMileTravel": 5,
                "serviceability": "SERVICEABLE",
                "slaString": "40-50 mins",
                "lastMileTravelString": "5.0 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2026-01-29 00:30:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "newg.png",
                    "description": "Gourmet"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {

                  },
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "imageId": "newg.png",
                          "description": "Gourmet"
                        }
                      }
                    ]
                  },
                  "textExtendedBadges": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "discountTag": "FLAT DEAL",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "30c46013-638e-4465-b2a5-919079cf2389"
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=970628&source=collection&query=Pizza",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "1312293",
              "name": "LeanCrust Pizza- ThinCrust Experts",
              "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/8/30/89990dbf-9727-4950-87a9-b58085b35cbd_c8a05db7-2ce4-4e38-8424-fab165fa3896.jpg",
              "locality": "GUDIMAKAPUR",
              "areaName": "Mehdipatnam Circle No 12",
              "costForTwo": "₹300 for two",
              "cuisines": [
                "Pizzas",
                "Italian",
                "Desserts"
              ],
              "avgRating": 4.5,
              "parentId": "11216",
              "avgRatingString": "4.5",
              "totalRatingsString": "\u003C3",
              "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 3.9,
                "serviceability": "SERVICEABLE",
                "slaString": "20-30 mins",
                "lastMileTravelString": "3.9 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2026-01-29 02:00:00",
                "opened": true
              },
              "badges": {

              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {

                  },
                  "imageBased": {

                  },
                  "textExtendedBadges": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹99",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "isNewlyOnboarded": true,
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=1312293&source=collection&query=Pizza",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "739387",
              "name": "ENSO - Sourdough Pizza by Nomad",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/667d8c9c-2ef7-4ab6-be7c-c67fdfb3c3f8_739387.jpg",
              "locality": "Jubilee Hills",
              "areaName": "BANJARA HILLS",
              "costForTwo": "₹850 for two",
              "cuisines": [
                "Pizzas",
                "Fast Food",
                "Desserts",
                "Salads",
                "Beverages"
              ],
              "avgRating": 4.2,
              "parentId": "77344",
              "avgRatingString": "4.2",
              "totalRatingsString": "786",
              "promoted": true,
              "adTrackingId": "cid=5d7b484a-b292-48bc-bc7d-d18572591cb0~p=5~adgrpid=5d7b484a-b292-48bc-bc7d-d18572591cb0#ag3~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=739387~plpr=COLLECTION~eid=e6cc603e-9c8d-435b-a567-6b42df97561d~srvts=1769585969689~collid=83631",
              "sla": {
                "deliveryTime": 53,
                "lastMileTravel": 5.9,
                "serviceability": "SERVICEABLE",
                "slaString": "50-60 mins",
                "lastMileTravelString": "5.9 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2026-01-29 00:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "newg.png",
                    "description": "Gourmet"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {

                  },
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "imageId": "newg.png",
                          "description": "Gourmet"
                        }
                      }
                    ]
                  },
                  "textExtendedBadges": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹299",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "5d7b484a-b292-48bc-bc7d-d18572591cb0"
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=739387&source=collection&query=Pizza",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      }
    ]
      

const Body = () => {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
            {
                resObj.map((restaurent) => (
                    <RestaurentCard 
                    key={restaurent.card.card.info.id}
                      resData={restaurent.card.card.info}/>
                ))
            }
            </div>
        </div>
    );
};

const AppLayout = () => {
    return(
        <div className="app">
        <Header/>
        <Body/>
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);