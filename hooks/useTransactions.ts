import TransactionInterface from "../interfaces/transaction";
import { useCategories } from "./useCategories";

export const useTransactions = () => {
  const categories = useCategories()
  return [
    {
      id: 0,
      title: "Fort Atacadista 1",
      date: "12/03/2024",
      value: "- R$ 15,68",
      category: categories[0],
      tags: [
        {
          id: 1,
          name: "Páscoa",
          mainColor: "#F54545",
          backgroundColor: "rgba(245, 69, 69, 0.5)",
        },
        {
          id: 2,
          name: "Compras",
          mainColor: "#45CBF5",
          backgroundColor: "rgba(69, 203, 245, 0.5)",
        },
        {
          id: 3,
          name: "Compras",
          mainColor: "#DDF545",
          backgroundColor: "rgba(221, 245, 69, 0.5)",
        },
      ],
    },
    {
      id: 1,
      title: "Fort Atacadista 2",
      date: "12/03/2024",
      category: categories[1],
      value: "- R$ 15,68",
      tags: [],
    },
    {
      id: 2,
      title: "Fort Atacadista 3",
      date: "12/03/2024",
      category: categories[2],
      value: "- R$ 15,68",
      tags: [],
    },
    {
      id: 3,
      title: "Fort Atacadista 4",
      date: "12/03/2024",
      category: categories[3],
      value: "- R$ 15,68",
      tags: [],
    },
    {
      id: 4,
      title: "Fort Atacadista 5",
      date: "12/03/2024",
      category: categories[4],
      value: "- R$ 15,68",
      tags: [],
    },
    {
      id: 5,
      title: "Fort Atacadista 6",
      date: "12/03/2024",
      category: categories[5],
      value: "- R$ 15,68",
      tags: [],
    },
    {
      id: 6,
      title: "Fort Atacadista 7",
      date: "12/03/2024",
      category: categories[6],
      value: "- R$ 15,68",
      tags: [],
    },
    {
      id: 7,
      title: "Fort Atacadista 8",
      date: "12/03/2024",
      category: categories[7],
      value: "- R$ 15,68",
      tags: [],
    },
    {
      id: 8,
      title: "Fort Atacadista 9",
      date: "12/03/2024",
      category: categories[8],
      value: "- R$ 15,68",
      tags: [],
    },
  ] as TransactionInterface[];
};
