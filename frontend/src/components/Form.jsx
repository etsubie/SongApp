import React, { useState, useEffect } from "react";
import {
  CLEAR,
  Center,
  Container,
  CustomForm,
  Input,
  Option,
  Select,
  BlueText,
  Submit,
  Filecntr,
} from "../Styles/MainStyle";
import FileBase from "react-file-base64";
import { Subheading } from "../Styles/SideStyle";
import Back from "./Back";
import { useNavigate, useParams } from "react-router-dom";
import {
  createSongRequest,
  fetchSongByIdRequest,
  updateSongRequest,
} from "../redux/songsSlice";
import { useDispatch, useSelector } from "react-redux";

const Form = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const song = useSelector((state) => state.songs.list);
  const genres = ["rock", "traditional", "hip hop", "reggae", "pop"];
  const [formData, setFormData] = useState({
    title: "",
    publishYear: "",
    genre: "",
    singer: "",
    imgUrl: "",
    audio: "",
  });

  useEffect(() => {
    if (id) {
      dispatch(fetchSongByIdRequest(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (song && id) {
      setFormData({
        title: song.title || "",
        publishYear: song.publishYear || "",
        genre: song.genre || "",
        singer: song.singer || "",
        imgUrl: song.imgUrl || "",
        audio: song.audio || "",
      });
    }
  }, [song, id]);

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
    if (id) {
      dispatch(updateSongRequest({ id, formData }));
    } else {
      dispatch(createSongRequest(formData));
    }
    navigate("/all");
    clearForm();
  };

  return (
    <Container>
      <Back />
      <Center>
        <CustomForm onSubmit={handleSubmit}>
          <Center>
            {" "}
            <BlueText>{id ? "Edit Song" : "Create Song"}</BlueText>
          </Center>
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
          <Select
            value={formData.genre}
            onChange={(e) =>
              setFormData({ ...formData, genre: e.target.value })
            }
          >
            <Option value="" disabled>
              Select Genre
            </Option>
            {genres.map((genre) => (
              <Option key={genre} value={genre}>
                {genre.charAt(0).toUpperCase() + genre.slice(1)}
              </Option>
            ))}
          </Select>
          <Input
            placeholder="Publish Year"
            value={formData.publishYear}
            onChange={(e) =>
              setFormData({ ...formData, publishYear: e.target.value })
            }
          />
          <Filecntr>
          <label>Image:</label>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setFormData({ ...formData, imgUrl: base64 })
            }
          />
          </Filecntr>
          <Filecntr>
          <label>Audio:</label>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => setFormData({ ...formData, audio: base64 })}
          />
          </Filecntr>
          <Submit type="submit">
            <Subheading>{id ? "Update" : "Create"}</Subheading>
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
