import { performanceIndicator, productScores, salesData } from "@/types/types";

export const salesVolume: salesData[] = [
  {
    month: 1,
    productSales: {
      A: 120,
      B: 150,
      C: 80,
    },
  },
  {
    month: 2,
    productSales: {
      A: 200,
      B: 180,
      C: 160,
    },
  },
  {
    month: 3,
    productSales: {
      A: 150,
      B: 210,
      C: 190,
    },
  },
];

export const userFeedbackScores: productScores[] = [
  {
    productName: "A",
    rating: 4.5,
  },
  {
    productName: "B",
    rating: 4.7,
  },
  {
    productName: "C",
    rating: 4.3,
  },
];

export const performanceIndicators: performanceIndicator[] = [
  {
    제품: "A",
    배터리수명: "10시간",
    processingSpeed: "빠름",
  },
  {
    productName: "B",
    batteryLife: "12시간",
    processingSpeed: "보통",
  },
  {
    productName: "C",
    batteryLife: "8시간",
    processingSpeed: "느림",
  },
];
