// import { StaticImageData } from "next/image";

interface Items {
  id: number;
  img: string;  // Using string type for image paths
  title: string;
  title2: string;
  price: string;
}

const Best1 = "/Best/b1.png";
const Best2 = "/Best/b2.png";
const Best3 = "/Best/b3.png";

const g1 = "/g1.png";
const g2 = "/g2.png";
const g3 = "/g3.png";
const g4 = "/g4.png";

const f1 = "/featured/shoe1.png";
const f2 = "/featured/shoe2.png";
const f3 = "/featured/shoe3.png";
const f4 = "/featured/shoe4.png";
const f5 = "/featured/shoe5.png";
const f6 = "/featured/shoe6.png";
const f7 = "/featured/shoe7.png";
const f8 = "/featured/shoe8.png";
const f9 = "/featured/shoe9.png";
const f10 = "/featured/shoe10.png";

export const airMax: Items[] = [
  {
    id: 1,
    img: Best1,
    title: "Nike Air Max Pulse",
    title2: "Women's Shoes",
    price: "₹ 13 995"
  },
  {
    id: 2,
    img: Best2,
    title: "Nike Air Max Pulse",
    title2: "Men's Shoes",
    price: "₹ 13 995"
  },
  {
    id: 3,
    img: Best3,
    title: "Nike Air Max 97 SE",
    title2: "Men's Shoes",
    price: "₹ 13 995"
  },
  {
    id: 4,
    img: Best3,
    title: "Nike Air Max 97 SE",
    title2: "Men's Shoes",
    price: "₹ 13 995"
  }
];

export const gear1: Items[] = [
  {
    id: 1,
    img: g1,
    title: "Nike Air Max Pulse",
    title2: "Women's Shoes",
    price: "₹ 13 995"
  },
  {
    id: 2,
    img: g2,
    title: "Nike Air Max Pulse",
    title2: "Men's Shoes",
    price: "₹ 13 995"
  },
  {
    id: 3,
    img: g1,
    title: "Nike Air Max 97 SE",
    title2: "Men's Shoes",
    price: "₹ 13 995"
  },
  {
    id: 4,
    img: g2,
    title: "Nike Air Max 97 SE",
    title2: "Men's Shoes",
    price: "₹ 13 995"
  }
];

export const gear2: Items[] = [
  {
    id: 1,
    img: g3,
    title: "Nike Air Max Pulse",
    title2: "Women's Shoes",
    price: "₹ 13 995"
  },
  {
    id: 2,
    img: g4,
    title: "Nike Air Max Pulse",
    title2: "Men's Shoes",
    price: "₹ 13 995"
  },
  {
    id: 3,
    img: g3,
    title: "Nike Air Max 97 SE",
    title2: "Men's Shoes",
    price: "₹ 13 995"
  },
  {
    id: 4,
    img: g4,
    title: "Nike Air Max 97 SE",
    title2: "Men's Shoes",
    price: "₹ 13 995"
  }
];

export const feature: Items[] = [
  {
    id: 1,
    img: f1,
    title: "Nike Air Force 1 Mid '07",
    title2: "Men's Shoes",
    price: "₹ 10 995"
  },
  {
    id: 2,
    img: f2,
    title: "Nike Court Vision Low Next Nature",
    title2: "Men's Shoes",
    price: "₹ 4 995"
  },
  {
    id: 3,
    img: f3,
    title: "Nike Air Force 1 PLT.AF.ORM",
    title2: "Women's Shoes",
    price: "₹ 8 995"
  },
  {
    id: 4,
    img: f4,
    title: "Nike Air Force 1 React",
    title2: "Men's Shoes",
    price: "₹ 13 295"
  },
  {
    id: 5,
    img: f5,
    title: "Air Jordan 1 Elevate Low",
    title2: "Women's Shoes",
    price: "₹ 11 895"
  },
  {
    id: 6,
    img: f6,
    title: "Nike Court Vision Low",
    title2: "Men's Shoes",
    price: "₹ 5 695"
  },
  {
    id: 7,
    img: f7,
    title: "Nike Dunk Low Retro SE",
    title2: "Men's Shoes",
    price: "₹ 9 695"
  },
  {
    id: 8,
    img: f8,
    title: "Nike Air Max SC",
    title2: "Men's Shoes",
    price: "₹ 12 695"
  },
  {
    id: 9,
    img: f9,
    title: "Nike Dunk Low Retro",
    title2: "Men's Shoes",
    price: "₹ 7 695"
  },
  {
    id: 10,
    img: f10,
    title: "Nike Air Max SC",
    title2: "Women's Shoes",
    price: "₹ 16 695"
  },
  {
    id: 11,
    img: f9,
    title: "Nike Air Force 1 PLT.AF.ORM",
    title2: "Women's Shoes",
    price: "₹ 8 995"
  },
  {
    id: 12,
    img: f5,
    title: "Nike Air Force 1 React",
    title2: "Men's Shoes",
    price: "₹ 13 295"
  },
  {
    id: 13,
    img: f4,
    title: "Air Jordan 1 Elevate Low",
    title2: "Women's Shoes",
    price: "₹ 11 895"
  }
];
