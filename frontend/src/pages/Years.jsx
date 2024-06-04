import React from "react";
import {
  Container,
  Flex,
  Flexstart,
  Semibold,
  Wrap,
} from "../Styles/MainStyle";
import GroupedYear from "../components/GroupedYear";
import Back from "../components/Back";

const Years = () => {
  return (
    <Container>
      <Flex>
      <Semibold>Songs Grouped in Year</Semibold>
        <Back />
     </Flex>
      <Flexstart>
        <Wrap>
          <GroupedYear />
          <GroupedYear />
          <GroupedYear />
          <GroupedYear />
        </Wrap>
      </Flexstart>
    </Container>
  );
};

export default Years;
