import CategoryInterface from "@/interfaces/category";

export const useCategories = () => [
  {
    id: 0,
    name: "Market",
    icon: 'shopping-cart',
    color: "#F54545",
  },
  {
    id: 1,
    name: "Transport",
    icon: 'truck',
    color: "#F5A445",
  },
  {
    id: 2,
    name: "Health",
    icon: 'heart',
    color: "#45F545",
  },
  {
    id: 3,
    name: "Education",
    icon: 'book-open',
    color: "#45F5A4",
  },
  {
    id: 4,
    name: "Entertainment",
    icon: 'monitor',
    color: "#4545F5",
  },
  {
    id: 5,
    name: "Salary",
    icon: 'dollar-sign',
    color: "#A445F5",
  },
  {
    id: 6,
    name: "Savings",
    icon: 'package',
    color: "#F545F5",
  },
  {
    id: 7,
    name: "Rent",
    icon: 'home',
    color: "#F545A4",
  },
  {
    id: 8,
    name: "Pets",
    icon: 'github',
    color: "#F5A445",
  }
] as CategoryInterface[];
