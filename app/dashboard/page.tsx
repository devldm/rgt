import {
  performanceIndicator,
  productData,
  productScores,
} from "@/types/types";
import Chart from "../components/chart";
import { promises as fs } from "fs";

export default async function Dashboard() {
  const file = await fs.readFile(
    process.cwd() + "/app/data/problem_3_data.json",
    "utf8",
  );
  const data = JSON.parse(file);
  const userFeedbackData = data.사용자피드백점수;
  const performanceIndicators = data.성능지표;

  const mergedProductData: productData[] = userFeedbackData.map(
    (productScoresItem: productScores) => {
      const perfItem: performanceIndicator = performanceIndicators.find(
        (item: performanceIndicator) =>
          item["제품"] === productScoresItem["제품"],
      );
      return { ...productScoresItem, ...perfItem };
    },
  );

  return (
    <div className="min-h-screen min-w-screen">
      <Chart data={data} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {mergedProductData.map((product: productData) => {
          return (
            <div className="bg-slate-900 rounded-t-md p-4 flex flex-col gap-4">
              <p className="text-2xl font-bold">{product.제품}</p>
              <p>점수: {product.점수}</p>
              <p>배터리수명: {product.배터리수명}</p>
              <p>처리속도: {product.처리속도}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
