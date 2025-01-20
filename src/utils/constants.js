import { AiOutlineMobile } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { RiMotorbikeFill } from "react-icons/ri";
import { FiMonitor } from "react-icons/fi";
import { GiSofa, GiMailShirt, GiGuitar } from "react-icons/gi";
import { MdPets } from "react-icons/md";
import { GrServices } from "react-icons/gr";
import { BiCar, BiBuildingHouse } from "react-icons/bi";
const list = [
  {
    id: 1,
    icon: BiCar,
    name: "Cars",
    sub: ["cars"],
  },
  {
    id: 2,
    icon: BiBuildingHouse,
    name: "Properties",
    sub: ["For Sale: Houses & Apartments", "Lands & Plots"],
  },
  {
    id: 3,
    icon: AiOutlineMobile,
    name: "Mobiles",
    sub: ["Mobile Phones", "Accessories"],
  },
  {
    id: 4,
    icon: BsBag,
    name: "Jobs",
    sub: ["Data entry & Back office", "Sales & Marketing"],
  },
  {
    id: 5,
    icon: RiMotorbikeFill,
    name: "Bikes",
    sub: ["Motorcycles", "Scooters"],
  },
  {
    id: 6,
    icon: FiMonitor,
    name: "Electronics & Appliances",
    sub: ["TVs, Video - Audio", "Kitchen & Other Appliances"],
  },
  {
    id: 7,
    icon: GiSofa,
    name: "Furniture",
    sub: ["Sofa & Dining", "Beds & Wardrobes"],
  },
  {
    id: 8,
    icon: GiMailShirt,
    name: "Fashion",
    sub: ["Men", "Women"],
  },
  {
    id: 9,
    icon: GiGuitar,
    name: "Books, Sports & Hobbies",
    sub: ["Books", "Gym & Fitness"],
  },
  {
    id: 10,
    icon: MdPets,
    name: "Pets",
    sub: ["Fishes & Aquarium", "Pet Food & Accessories"],
  },
  {
    id: 11,
    icon: GrServices,
    name: "Services",
    sub: ["Education & Classes", "Tours & Travel"],
  },
];
export default list;
