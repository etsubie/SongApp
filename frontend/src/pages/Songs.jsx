import React from "react";
import Song from "../components/Song";
import { Container, Flex, Flexstart, Semibold, Wrap } from "../Styles/MainStyle";
import Back from "../components/Back";

const Songs = () => {
  return (
    <Container>
       <Flex>
       <Semibold>All Songs</Semibold>
        <Back />
     </Flex>
        <Flexstart>
        <Wrap>

        <Song />
        <Song />
        <Song />
        <Song />
        </Wrap>

        </Flexstart>
    </Container>
  );
};

export default Songs;
