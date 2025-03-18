import { ChangeEvent } from "react";

import { Input } from "@/components/ui/input";

import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { selectFilter } from "@/redux/filter/selectors";
import { setFilter } from "@/redux/filter/slice";

const Filter = () => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector(selectFilter);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <Input
      placeholder="What currency are you looking for? 🧐"
      value={filter}
      onChange={handleChange}
      className="block w-xs mx-auto mb-12 h-10"
    />
  );
};

export default Filter;
