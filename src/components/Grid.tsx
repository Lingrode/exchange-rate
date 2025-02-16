import React from "react";

type Props = {
  children: React.ReactNode;
};

const Grid = ({ children }: Props) => {
  return <div className="grid grid-cols-4 gap-5">{children}</div>;
};

export default Grid;
