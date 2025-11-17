import type { Order, OrderItem } from "../../types";
import { menuItems } from "./MenuItems";

// Helper to calculate payment summary
function computePaymentSummary(items: OrderItem[]) {
  const subtotalPes = items.reduce((sum, item) => {
    const price = item.menuItem.discountPerc
      ? Math.floor(item.menuItem.pricePes * (1 - item.menuItem.discountPerc / 100))
      : item.menuItem.pricePes;
    return sum + price * item.quantity;
  }, 0);

  const taxPes = Math.floor(subtotalPes * 0.05); // 5% tax
  const serviceFeePes = Math.floor(subtotalPes * 0.03); // 3% service fee

  return { subtotalPes, taxPes, serviceFeePes };
}

// Mock orders with computed paymentSummary
export const orders: Order[] = [
  {
    id: "1",
    orderId: "ORD-2001",
    name: "Kwame Adu",
    contact: "0245551234",
    time: new Date("2025-11-17T08:15:00Z"),
    image: menuItems[0].image,
    menu: [
      { menuItem: menuItems[0], quantity: 1 },
      { menuItem: menuItems[2], quantity: 2 }
    ],
    modeOfPayment: "cash",
    notes: "Less salt in the rice.",
    paymentSummary: computePaymentSummary([
      { menuItem: menuItems[0], quantity: 1 },
      { menuItem: menuItems[2], quantity: 2 }
    ])
  },
  {
    id: "2",
    orderId: "ORD-2002",
    name: "Abena Owusu",
    contact: "0559988776",
    time: new Date("2025-11-17T09:45:00Z"),
    image: menuItems[1].image,
    menu: [
      { menuItem: menuItems[1], quantity: 1 }
    ],
    modeOfPayment: "card",
    notes: "Include extra sauce.",
    paymentSummary: computePaymentSummary([
      { menuItem: menuItems[1], quantity: 1 }
    ])
  },
  {
    id: "3",
    orderId: "ORD-2003",
    name: "Kojo Boateng",
    contact: "0241122334",
    time: new Date("2025-11-16T19:30:00Z"),
    image: menuItems[3].image,
    menu: [
      { menuItem: menuItems[3], quantity: 2 },
      { menuItem: menuItems[5], quantity: 1 }
    ],
    modeOfPayment: "cash",
    notes: "No onions please.",
    paymentSummary: computePaymentSummary([
      { menuItem: menuItems[3], quantity: 2 },
      { menuItem: menuItems[5], quantity: 1 }
    ])
  },
  {
    id: "4",
    orderId: "ORD-2004",
    name: "Ama Serwaa",
    contact: "0204455667",
    time: new Date("2025-11-15T12:10:00Z"),
    image: menuItems[4].image,
    menu: [
      { menuItem: menuItems[4], quantity: 1 },
      { menuItem: menuItems[6], quantity: 3 }
    ],
    modeOfPayment: "card",
    notes: "Wrap the salad separately.",
    paymentSummary: computePaymentSummary([
      { menuItem: menuItems[4], quantity: 1 },
      { menuItem: menuItems[6], quantity: 3 }
    ])
  },
  {
    id: "5",
    orderId: "ORD-2005",
    name: "Michael Owusu",
    contact: "0506677889",
    time: new Date("2025-11-14T18:20:00Z"),
    image: menuItems[7].image,
    menu: [
      { menuItem: menuItems[7], quantity: 1 }
    ],
    modeOfPayment: "cash",
    paymentSummary: computePaymentSummary([
      { menuItem: menuItems[7], quantity: 1 }
    ])
  }
];
