import { useId, useState } from "react";
import { CheckIcon, ChevronDownIcon } from "lucide-react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

import { useAppDispatch } from "@/hooks/reduxHooks";
import { setDefaultCurrency } from "@/redux/currency/slice";

import { cn } from "@/lib/utils";
import symbols from "@/symbols.json";

type Props = {
  baseCurrency: string;
};

function RatesSelector({ baseCurrency }: Props) {
  const dispatch = useAppDispatch();
  const id = useId();
  const [open, setOpen] = useState<boolean>(false);

  const handleChange = (selectedValue: string) => {
    dispatch(setDefaultCurrency(selectedValue));
  };

  return (
    <div className="flex items-center">
      <p className="text-lg font-medium mr-4 whitespace-nowrap">
        {" "}
        Your base currency:
      </p>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            id={id}
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="bg-background hover:bg-background border-input w-full justify-between px-3 font-normal outline-offset-0 outline-none focus-visible:outline-[3px]"
          >
            <span
              className={cn(
                "truncate",
                !baseCurrency && "text-muted-foreground"
              )}
            >
              {baseCurrency
                ? symbols.find((symbol) => symbol.value === baseCurrency)?.label
                : "Select currency"}
            </span>
            <ChevronDownIcon
              size={16}
              className="text-muted-foreground/80 shrink-0"
              aria-hidden="true"
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="border-input w-full min-w-[var(--radix-popper-anchor-width)] p-0"
          align="start"
        >
          <Command>
            <CommandInput placeholder="Search currency..." />
            <CommandList>
              <CommandEmpty>No symbol found.</CommandEmpty>
              <CommandGroup>
                {symbols.map((symbol) => (
                  <CommandItem
                    key={symbol.value}
                    value={symbol.value}
                    onSelect={(currentValue) => {
                      handleChange(currentValue);
                      setOpen(false);
                    }}
                  >
                    {symbol.value}
                    {baseCurrency === symbol.value && (
                      <CheckIcon size={16} className="ml-auto" />
                    )}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default RatesSelector;
