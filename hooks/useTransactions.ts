import TransactionInterface from "../interfaces/transaction";

export const useTransactions = () => {
  return [
    {
      id: 1,
      title: "Fort Atacadista 1",
      date: "12/03/2024",
      value: "- R$ 15,68",
      category: {
        id: "1",
        name: "Compras",
        icon: require("@/assets/images/cart-icon.png"),
      },
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
      id: 2,
      title: "Fort Atacadista 2",
      date: "12/03/2024",
      category: {
        id: "1",
        name: "Compras",
        icon: require("@/assets/images/cart-icon.png"),
      },
      value: "- R$ 15,68",
      tags: [],
    },
    {
      id: 3,
      title: "Fort Atacadista 3",
      date: "12/03/2024",
      category: {
        id: "1",
        name: "Compras",
        icon: require("@/assets/images/cart-icon.png"),
      },
      value: "- R$ 15,68",
      tags: [],
    },
    {
      id: 4,
      title: "Fort Atacadista 4",
      date: "12/03/2024",
      category: {
        id: "1",
        name: "Compras",
        icon: require("@/assets/images/cart-icon.png"),
      },
      value: "- R$ 15,68",
      tags: [],
    },
    {
      id: 5,
      title: "Fort Atacadista 5",
      date: "12/03/2024",
      category: {
        id: "1",
        name: "Compras",
        icon: require("@/assets/images/cart-icon.png"),
      },
      value: "- R$ 15,68",
      tags: [],
    },
    {
      id: 6,
      title: "Fort Atacadista 6",
      date: "12/03/2024",
      category: {
        id: "1",
        name: "Compras",
        icon: require("@/assets/images/cart-icon.png"),
      },
      value: "- R$ 15,68",
      tags: [],
    },
    {
      id: 7,
      title: "Fort Atacadista 7",
      date: "12/03/2024",
      category: {
        id: "1",
        name: "Compras",
        icon: require("@/assets/images/cart-icon.png"),
      },
      value: "- R$ 15,68",
      tags: [],
    },
    {
      id: 8,
      title: "Fort Atacadista 8",
      date: "12/03/2024",
      category: {
        id: "1",
        name: "Compras",
        icon: require("@/assets/images/cart-icon.png"),
      },
      value: "- R$ 15,68",
      tags: [],
    },
    {
      id: 9,
      title: "Fort Atacadista 9",
      date: "12/03/2024",
      category: {
        id: "1",
        name: "Compras",
        icon: require("@/assets/images/cart-icon.png"),
      },
      value: "- R$ 15,68",
      tags: [],
    },
    {
      id: 10,
      title: "Fort Atacadista 10",
      date: "12/03/2024",
      category: {
        id: "1",
        name: "Compras",
        icon: require("@/assets/images/cart-icon.png"),
      },
      value: "- R$ 15,68",
      tags: [],
    },
    {
      id: 11,
      title: "Fort Atacadista 11",
      date: "12/03/2024",
      category: {
        id: "1",
        name: "Compras",
        icon: require("@/assets/images/cart-icon.png"),
      },
      value: "- R$ 15,68",
      tags: [],
    },
    {
      id: 12,
      title: "Fort Atacadista 12",
      date: "12/03/2024",
      category: {
        id: "1",
        name: "Compras",
        icon: require("@/assets/images/cart-icon.png"),
      },
      value: "- R$ 15,68",
      tags: [],
    },
  ] as TransactionInterface[];
};
