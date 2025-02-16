import Grid from "./Grid";
import GridItem from "./GridItem";
import { CardTitle } from "./ui/card";

type Props = {
  rates: { key: string; value: string }[];
};

const RatesList = ({ rates }: Props) => {
  return (
    <Grid>
      {rates.map(({ key, value }) => (
        <GridItem key={key}>
          <CardTitle>
            {key} = {value}
          </CardTitle>
        </GridItem>
      ))}
    </Grid>
  );
};

export default RatesList;
