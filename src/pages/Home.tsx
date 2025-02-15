import Container from "@/components/Container";
import ExchangeForm from "@/components/ExchangeForm";
import Heading from "@/components/Heading/Heading";
import Section from "@/components/Section";

const Home = () => {
  return (
    <Section>
      <Container>
        <ExchangeForm />

        <Heading info title="What currencies do you want to exchange?🙂" />
      </Container>
    </Section>
  );
};

export default Home;
