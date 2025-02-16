import Container from "@/components/Container";
import ExchangeForm from "@/components/ExchangeForm";
import ExchangeInfo from "@/components/ExchangeInfo";
import Heading from "@/components/Heading/Heading";
import Loader from "@/components/Loader";
import Section from "@/components/Section";

import { useAppSelector } from "@/hooks/reduxHooks";
import {
  selectExchangeInfo,
  selectIsError,
  selectIsLoading,
} from "@/redux/currency/selectors";

const Home = () => {
  const isLoading = useAppSelector(selectIsLoading);
  const isError = useAppSelector(selectIsError);
  const exchangeInfo = useAppSelector(selectExchangeInfo);

  if (isLoading) return <Loader />;

  return (
    <Section>
      <Container>
        <ExchangeForm />

        {!exchangeInfo && !isError && (
          <Heading info title="What currencies do you want to exchange?🙂" />
        )}

        {exchangeInfo && <ExchangeInfo {...exchangeInfo} />}

        {isError && (
          <Heading
            error
            title="Something went wrong...😐 Check the data validity and try again!"
          />
        )}
      </Container>
    </Section>
  );
};

export default Home;
