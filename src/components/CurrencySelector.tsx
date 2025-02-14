import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useAppDispatch } from "@/hooks/reduxHooks";
import { setDefaultCurrency } from "@/redux/currency/slice";

import symbols from "../symbols.json";

type Props = {
  baseCurrency: string;
};

function RatesSelector({ baseCurrency }: Props) {
  const dispatch = useAppDispatch();

  const handleChange = (selectedValue: string) => {
    dispatch(setDefaultCurrency(selectedValue));
  };

  return (
    <div className="flex items-center">
      <p className="text-lg font-medium mr-4">Your base currency:</p>
      <Select onValueChange={handleChange} value={baseCurrency}>
        <SelectTrigger className="w-[100px]">
          <SelectValue>{baseCurrency}</SelectValue>
        </SelectTrigger>
        <SelectContent>
          {symbols.map((rate) => (
            <SelectItem key={rate.value} value={rate.value}>
              {rate.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default RatesSelector;
