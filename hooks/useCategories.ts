import CategoryInterface from "@/interfaces/category";

const CATEGORIES = [
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
] as CategoryInterface[]

export const useCategories = () => {
  console.debug(`Categories amount: ${CATEGORIES.length}`)
  return CATEGORIES
};


export const addCategory = (category: CategoryInterface) => {
  console.debug(`Adding category '${category.name}' to CATEGORIES`)
  const categories = CATEGORIES.filter(c => c.id !== category.id)
  categories.push(category)
}