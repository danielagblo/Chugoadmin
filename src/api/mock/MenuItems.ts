import type { MenuItem } from "../../types";
import item1 from "../../assets/foodPlaceholder2.png";
import item2 from "../../assets/foodPlaceholder3.png";
import item3 from "../../assets/foodPlaceholder4.png";


export const menuItems: MenuItem[] = [
  {
    id: "m1",
    name: "Jollof Rice & Chicken",
    description: "Fragrant Ghanaian jollof served with grilled chicken.",
    pricePes: 5000,
    discountPerc: 10,
    image: item1
  },
  {
    id: "m2",
    name: "Chicken Fried Rice",
    description: "Stir-fried rice with vegetables and tender chicken pieces.",
    discountPerc: 20,
    pricePes: 4500,
    image: item2
  },
  {
    id: "m3",
    name: "Beef Sauce",
    description: "Savory beef in rich vegetable sauce.",
    pricePes: 5700,
    image: item3
  },
  {
    id: "m4",
    name: "Yam Chips & Fish",
    description: "Crispy yam chips with spiced fried fish.",
    pricePes: 4200,
    discountPerc: 5,
    image: item1
  },
  {
    id: "m5",
    name: "Banku & Tilapia",
    description: "Charcoal-grilled tilapia served with banku and pepper.",
    pricePes: 6500,
    image: item2
  },
  {
    id: "m6",
    name: "Beef Burger",
    description: "Juicy beef patty with cheese, onions, and house sauce.",
    pricePes: 4800,
    image: item3
  },
  {
    id: "m7",
    name: "Spring Rolls (3 pcs)",
    description: "Crispy vegetable spring rolls.",
    pricePes: 2000,
    image: item1
  },
  {
    id: "m8",
    name: "Fruit Juice",
    description: "Freshly blended watermelon and pineapple juice.",
    pricePes: 1500,
    image: item2
  },
  {
    id: "m9",
    name: "Chicken Shawarma",
    description: "Sliced chicken with creamy garlic sauce in soft pita.",
    pricePes: 3500,
    image: item3
  },
  {
    id: "m10",
    name: "Fufu & Goat Light Soup",
    description: "Pounded cassava and plantain served with spicy goat soup.",
    pricePes: 7000,
    image: item1
  }
];
