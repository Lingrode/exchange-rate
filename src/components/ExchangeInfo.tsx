import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

import { ExchangeInfoType } from "@/redux/currency/types";

const ExchangeInfo = ({ amount, from, to, rate, result }: ExchangeInfoType) => {
  return (
    <Card className="flex justify-center flex-col items-center w-2xl mx-auto px-6 py-14">
      <CardHeader>
        <CardTitle className="text-center text-2xl">
          {amount} {from} in {to}
        </CardTitle>
        <CardDescription className="text-xl">
          at the rate of {rate}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-bold">
          {result.toFixed(2)} {to}
        </p>
      </CardContent>
    </Card>
  );
};

export default ExchangeInfo;
