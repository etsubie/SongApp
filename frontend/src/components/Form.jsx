import React from "react";
import {
  Center,
  Clear,
  Container,
  CustomForm,
  Flex,
  Input,
  Semibold,
  Submit,
} from "../Styles/MainStyle";
import { Subheading } from "../Styles/SideStyle";
import Back from "./Back";

const Form = () => {
  return (
    <Container>
      <Flex>
      <Semibold>Create Song</Semibold>
        <Back />
     </Flex>
      <Center>
        <CustomForm>
          <Input />
          <Input />
          <Input />
          <Input />
          <Submit>
            <Subheading>Create</Subheading>
          </Submit>
          <Clear>
            <Subheading>Clear</Subheading>
          </Clear>
        </CustomForm>
      </Center>
    </Container>
  );
};

export default Form;
