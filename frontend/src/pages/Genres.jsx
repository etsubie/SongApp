import React from "react";
import {
  Container,
  Flex,
  Flexstart,
  Semibold,
  Wrap,
} from "../Styles/MainStyle";
import Genre from "../components/Genre";
import Back from "../components/Back";

const Genres = () => {
  return (
    <Container>
      <Flex>
      <Semibold>Songs Grouped in Genre</Semibold>
        <Back />
     </Flex>
      <Flexstart>
        <Wrap>
          <Genre />
          <Genre />
          <Genre />
          <Genre />
        </Wrap>
      </Flexstart>
    </Container>
  );
};

export default Genres;
