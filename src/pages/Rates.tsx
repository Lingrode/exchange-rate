import { useEffect } from "react";

import Container from "@/components/Container";
import Heading from "@/components/Heading/Heading";
import Loader from "@/components/Loader";
import RatesList from "@/components/RatesList";
import Section from "@/components/Section";

import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { getLatestRates } from "@/redux/currency/operations";
import {
  selectBaseCurrency,
  selectFilteredRates,
  selectIsError,
  selectIsLoading,
} from "@/redux/currency/selectors";

const Rates = () => {
  const dispatch = useAppDispatch();
  const baseCurrency = useAppSelector(selectBaseCurrency);
  const filteredRates = useAppSelector(selectFilteredRates);
  const isError = useAppSelector(selectIsError);
  const isLoading = useAppSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getLatestRates(baseCurrency));
  }, [dispatch, baseCurrency]);

  if (isLoading) return <Loader />;

  return (
    <Section>
      <Container>
        {isError && (
          <Heading
            error
            title="Something went wrong...😐 We cannot show current rates!"
          />
        )}

        {filteredRates.length > 0 && <RatesList rates={filteredRates} />}
      </Container>
    </Section>
  );
};

export default Rates;
