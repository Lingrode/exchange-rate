import clsx from "clsx";

import { Props } from "./types";

const Heading = ({
  title,
  top,
  bottom,
  error,
  info,
  tag: Tag = "h2",
}: Props) => {
  return (
    <Tag
      className={clsx("font-bold relative text-center foreground text-2xl", {
        "mt-12": top,
        "mb-12": bottom,
        "text-red-400": error,
        "text-yellow-600": info,
      })}
    >
      {title}
    </Tag>
  );
};

export default Heading;
