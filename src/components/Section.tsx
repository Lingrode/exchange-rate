import React from "react";

type Props = {
  children: React.ReactNode;
};

const Section = ({ children }: Props) => {
  return <section className="py-20">{children}</section>;
};

export default Section;
