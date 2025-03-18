import React from "react";

import { Card, CardHeader } from "@/components/ui/card";

type Props = {
  children: React.ReactNode;
};

const GridItem = ({ children }: Props) => {
  return (
    <Card className="transition-transform hover:scale-105">
      <CardHeader className="flex items-center flex-col justify-center">
        {children}
      </CardHeader>
    </Card>
  );
};

export default GridItem;
