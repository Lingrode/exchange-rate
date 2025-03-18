import Grid from "@/components/Grid";
import GridItem from "@/components/GridItem";
import { CardTitle } from "@/components/ui/card";

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
