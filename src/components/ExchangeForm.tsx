import { FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useAppDispatch } from "@/hooks/reduxHooks";
import { getExchange } from "@/redux/currency/operations";

const ExchangeForm = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const inputValue = (
      form.elements.namedItem("search") as HTMLInputElement
    ).value.trim();
    const [amount, from, , to] = inputValue.split(" ");

    dispatch(getExchange({ to, from, amount }));
  };

  return (
    <form
      className="w-xs mx-auto relative mb-10 flex gap-3"
      onSubmit={handleSubmit}
    >
      <Input
        name="search"
        type="text"
        title="Request format 15 USD in UAH"
        pattern="^\d+(\.\d{1,2})?\s[a-zA-Z]{3}\sin\s[a-zA-Z]{3}$"
      />
      <Button type="submit" className="cursor-pointer">
        Search
      </Button>
    </form>
  );
};

export default ExchangeForm;
