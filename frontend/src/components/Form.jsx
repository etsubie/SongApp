import React, { useState } from "react";
import {
  CLEAR,
  Center,
  Container,
  CustomForm,
  Flex,
  Input,
  Semibold,
  Submit,
} from "../Styles/MainStyle";
import FileBase from "react-file-base64";
import { Subheading } from "../Styles/SideStyle";
import Back from "./Back";
import { useNavigate } from "react-router-dom";
import { createSongRequest } from "../redux/songsSlice";
import { useDispatch } from "react-redux";

const Form = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    publishYear: "",
    genre: "",
    singer: "",
    imgUrl: "",
    audio: "",
  });

  const clearForm = () => {
    setFormData({
      title: "",
      publishYear: "",
      genre: "",
      singer: "",
      imgUrl: "",
      audio: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      dispatch(createSongRequest(formData));
    navigate("/all");
    clearForm();
  };

  return (
    <Container>
      <Flex>
        <Semibold>Create Song</Semibold>
        <Back />
      </Flex>
      <Center>
        <CustomForm onSubmit={handleSubmit}>
          <Input
            placeholder="Title"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
          <Input
            placeholder="Singer"
            value={formData.singer}
            onChange={(e) =>
              setFormData({ ...formData, singer: e.target.value })
            }
          />
          <Input
            placeholder="Genre"
            value={formData.genre}
            onChange={(e) =>
              setFormData({ ...formData, genre: e.target.value })
            }
          />
          <Input
            placeholder="Publish Year"
            value={formData.publishYear}
            onChange={(e) =>
              setFormData({ ...formData, publishYear: e.target.value })
            }
          />
          <label>Image:</label>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setFormData({ ...formData, imgUrl: base64 })
            }
          />
          <label>Audio:</label>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => setFormData({ ...formData, audio: base64 })}
          />
          <Submit type="submit">
            <Subheading>Create</Subheading>
          </Submit>
          <CLEAR type="button" onClick={clearForm}>
            <Subheading>Clear</Subheading>
          </CLEAR>
        </CustomForm>
      </Center>
    </Container>
  );
};

export default Form;
