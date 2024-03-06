export type product = {
  productId: number;
  productName: string;
  productImageUrl: string;
};

type productSales = {
  A: number;
  B: number;
  C: number;
};

export type salesData = {
  month: number;
  productSales: productSales;
};

export type productScores = {
  제품: string;
  점수: number;
};

export type performanceIndicator = {
  제품: string;
  배터리수명: string;
  처리속도: processingSpeed;
};

export type productData = {
  제품: string;
  점수: number;
  배터리수명: string;
  처리속도: processingSpeed;
};

type processingSpeed = "빠름" | "보통" | "느림";
