import Container from "@/components/Container";
import Heading from "@/components/Heading/Heading";
import Section from "@/components/Section";
import React from "react";

const Rates = () => {
  return (
    <Section>
      <Container>
        <Heading
          error
          title="Something went wrong...😐 We cannot show current rates!"
        />
      </Container>
    </Section>
  );
};

export default Rates;
