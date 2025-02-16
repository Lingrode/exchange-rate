import React from "react";

import { Card, CardHeader } from "./ui/card";

type Props = {
  children: React.ReactNode;
};

const GridItem = ({ children }: Props) => {
  return (
    <Card>
      <CardHeader className="flex items-center flex-col justify-center">
        {children}
      </CardHeader>
    </Card>
  );
};

export default GridItem;
