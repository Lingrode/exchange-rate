import { FormEvent } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const ExchangeForm = () => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const inputValue = (
      form.elements.namedItem("search") as HTMLInputElement
    ).value.trim();
    const [amount, from, , to] = inputValue.split(" ");
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
