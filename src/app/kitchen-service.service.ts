import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KitchenServiceService {

  constructor() { }

  kitchenHotelsData = [
    {
      "id": "10000",
      "name": "Regency Hotel",
      "address": "348/343, Ground Floor, Mint Street, Sowcarpet, Chennai",
      "cuisines": "Non-Vegetarian Special, Street Food, North Indian",
      "rating": "4.4",
      "reviews": "865",
      "feature_image": "https://images.unsplash.com/photo-1613626630502-182579c0432c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      "category": "fish",
      "menu": [
        {
          "id": 100001,
          "name": "Fish Curry",
          "desc": "This Indian fish curry is a very spicy dish. The recipe was inspired by a Bengali fish recipe my mother used to make in India.",
          "price": 210
        },
        {
          "id": 100002,
          "name": "Special Fish Curry",
          "desc": "This Indian fish curry is a very spicy dish. The recipe was inspired by a Bengali fish recipe my mother used to make in India. This is Special made in Deshi Ghee",
          "price": 280
        },
        {
          "id": 100003,
          "name": "Fish Curry with Butter",
          "desc": "This Indian fish curry is a very spicy dish. The recipe was inspired by a Bengali fish recipe my mother used to make in India. This come with Butter",
          "price": 230
        },
        {
          "id": 100005,
          "name": "Fish and Chips",
          "desc": "Tarter Sauce, Fries",
          "price": 240
        },
        {
          "id": 100007,
          "name": "Fish fry",
          "desc": "fried fish, Tamato sauce, Red Chilly pouder, Green Sauce",
          "price": 150
        },
        {
          "id": 100008,
          "name": "Tandoori Rooti",
          "desc": "Tandoori Rooti without butter",
          "price": 15
        },
        {
          "id": 1000010,
          "name": "Tawa Rooti",
          "desc": "tawa rooti without butter",
          "price": 15
        },
      ]
    },
    {
      "id": "10010",
      "name": "Blossomwell Resorts",
      "address": "14/104, Gadifuri-Maafushi Island, Maldives, India",
      "cuisines": "North Indian, Non-Vegetarian Special, South Indian, chinese",
      "rating": "4.9",
      "reviews": "900",
      "feature_image": "https://images.unsplash.com/photo-1577303935007-0d306ee638cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=840&q=80",
      "category": "fish",
      "menu": [
        {
          "id": 100101,
          "name": "Fish fry",
          "desc": "red chilli, green sauce, onion, black salt",
          "price": 400
        },
        {
          "id": 100102,
          "name": "Special Fish fry",
          "desc": "red chilli, green sauce, onion, black salt. This is Special made in Deshi Ghee",
          "price": 500
        },
        {
          "id": 100102,
          "name": "masala Fish",
          "desc": "red chilli, green sauce, onion, black salt",
          "price": 450
        },
        {
          "id": 100106,
          "name": "Fish tikka",
          "desc": "red chilli, green sauce, onion, black salt",
          "price": 370
        }
      ]
    },
    {
      "id": "10020",
      "name": "Towne Place Suites",
      "address": "150/540, Main Market, Lajpat Nagar, New Delhi, India",
      "cuisines": "Street Food, fast-food, pizza",
      "rating": "4.6",
      "reviews": "426",
      "feature_image": "https://images.unsplash.com/photo-1573821663912-569905455b1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      "category": "Pizza",
      "menu": [
        {
          "id": 100201,
          "name": "simple pizza",
          "desc": "red chilli powder, black paper powder, green sauce, tamato sauce, black salt",
          "price": 100
        },
        {
          "id": 100202,
          "name": "onion pizaa",
          "desc": "red chilli powder, black paper powder, green sauce, tamato sauce, black salt",
          "price": 140
        },
        {
          "id": 100302,
          "name": "butter pizaa",
          "desc": "red chilli powder, black paper powder, green sauce, tamato sauce, black salt",
          "price": 200
        },
        {
          "id": 100404,
          "name": "cheese pizaa",
          "desc": "red chilli powder, black paper powder, green sauce, tamato sauce, black salt",
          "price": 240
        },
        {
          "id": 100405,
          "name": "burger",
          "desc": "green sauce, tamato sauce",
          "price": 60
        },
        {
          "id": 100606,
          "name": "chilli patato",
          "desc": "green sauce, tamato sauce, black salt",
          "price": 80
        }
      ]
    },
    {
      "id": "10030",
      "name": "Hotel Happy springs",
      "address": "15, New Market Area, Dharmatala, Taltala, Kolkata, West Bengal, India",
      "cuisines": "east indian, Non-Vegetarian, chicken Special, South Indian",
      "rating": "4.8",
      "reviews": "426",
      "feature_image": "https://images.unsplash.com/photo-1615557960916-5f4791effe9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      "category": "chicken",
      "menu": [
        {
          "id": 100301,
          "name": "checken Curry",
          "desc": "two legs per plate, salad.",
          "price": 300
        },
        {
          "id": 100302,
          "name": "Special chicken Curry",
          "desc": "two legs per plate, salad, This is Special made in Deshi Ghee.",
          "price": 400
        },
        {
          "id": 100302,
          "name": "chicken Curry with Butter",
          "desc": "two legs per plate, salad, butter",
          "price": 350
        },
        {
          "id": 100308,
          "name": "Tandoori Rooti",
          "desc": "Tandoori Rooti without butter",
          "price": 15
        },
        {
          "id": 100309,
          "name": "Special Tandoori Rooti",
          "desc": "Tandoori Rooti with Butter",
          "price": 20
        }
      ]
    },
    {
      "id": "10040",
      "name": "Sunset Lodge",
      "address": "4, NH-107, Kedarnath Road, Sitapur, Rampur, Uttarakhand, India",
      "cuisines": "North Indian, Vegetarian, panjabi Special, winter special",
      "rating": "4.4",
      "reviews": "328",
      "feature_image": "https://images.unsplash.com/photo-1630748662392-29b5f9a45f72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      "category": "Paneer",
      "menu": [
        {
          "id": 100401,
          "name": "Matar Paneer",
          "desc": "per plate (full-plate)",
          "price": 180
        },
        {
          "id": 100402,
          "name": "paalak Paneer",
          "desc": "per plate (full-plate)",
          "price": 160
        },
        {
          "id": 100402,
          "name": "shahi Paneer",
          "desc": "per plate (full-plate)",
          "price": 180
        },
        {
          "id": 100404,
          "name": "kadhahi Paneer",
          "desc": "per plate (full-plate)",
          "price": 240
        },
        {
          "id": 100408,
          "name": "Tandoori Rooti",
          "desc": "per pcs",
          "price": 15
        },
        {
          "id": 100409,
          "name": "Tawa Rooti",
          "desc": "per pcs",
          "price": 20
        }
      ]
    },
    {
      "id": "10040",
      "name": "The Eternity Resort",
      "address": "83, Narayan Gajanan Acharya Marg, Chembur, Mumbai, Maharashtra, india",
      "cuisines": "North Indian, Non-Vegetarian Special, South Indian",
      "rating": "4.6",
      "reviews": "540",
      "feature_image": "https://images.unsplash.com/photo-1652545296882-cf7f118c4df5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
      "category": "Chicken",
      "menu": [
        {
          "id": 100401,
          "name": "checken tikka",
          "desc": "red chilli powder, black paper powder, green sauce, tamato sauce, black salt ",
          "price": 250
        },
        {
          "id": 100402,
          "name": "checken roll",
          "desc": "red chilli powder, black paper powder, green sauce, tamato sauce, black salt",
          "price": 120
        },
        {
          "id": 100402,
          "name": "checken fry",
          "desc": "red chilli powder, black paper powder, green sauce, tamato sauce, black salt",
          "price": 200
        },
        {
          "id": 100404,
          "name": "checken memos",
          "desc": "red chilli paste, black paper powder, green sauce, tamato sauce, black salt (12 pcs)",
          "price": 100
        }
      ]
    },
    {
      "id": "10040",
      "name": "The Family Ties",
      "address": "150, Shalimar, Srinagar, Jammu and Kashmir, India",
      "cuisines": "North Indian, Vegetarian, South Indian, all type food except Non-Veg",
      "rating": "4.9",
      "reviews": "900",
      "feature_image": "https://images.unsplash.com/photo-1592417817038-d13fd7342605?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "category": "Meals",
      "menu": [
        {
          "id": 100401,
          "name": "simple Thali",
          "desc": "vegetable (2), breads (4), rice (some), salad, black paper, black salt",
          "price": 100
        },
        {
          "id": 100402,
          "name": "Special thali",
          "desc": "vegetable (3), breads (4), rice (some), salad, black paper, black salt",
          "price": 150
        },
        {
          "id": 100402,
          "name": "shahi thali",
          "desc": "vegetable (2), breads (4), rice (some), salad, black paper, black salt",
          "price": 200
        },
        {
          "id": 100404,
          "name": "water bottle",
          "desc": "1 pcs",
          "price": 20
        }
      ]
    },
    {
      "id": "10040",
      "name": "Hilton Garden Inn",
      "address": "1, India - Nepal Rd, Khalanga, Dharchula, Uttarakhand, India",
      "cuisines": "North Indian, Vegetarian, South Indian, nepali food",
      "rating": "4.7",
      "reviews": "426",
      "feature_image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      "category": "Paneer",
      "menu": [
        {
          "id": 100401,
          "name": "Paneer tikka",
          "desc": "red chilli powder, black paper powder, green sauce, tamato sauce, black salt (10 pcs)",
          "price": 200
        },
        {
          "id": 100402,
          "name": "Paneer roll",
          "desc": "green sauce, tamato sauce (1 pcs)",
          "price": 60
        },
        {
          "id": 100402,
          "name": "Paneer memos",
          "desc": "red chilli paste, black paper powder, green sauce, tamato sauce, black salt (12 pcs)",
          "price": 120
        }
      ]
    }
  ]
}
