import { ClimbingBoxLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="fixed size-full top-0 left-0 flex items-center justify-center bg-foreground opacity-80">
      <ClimbingBoxLoader color="var(--background)" />
    </div>
  );
};

export default Loader;
