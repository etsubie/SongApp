import React, { useEffect } from "react";
import {
  Center,
  Column,
  Container,
  Delete,
  Edit,
  Flex,
  Flexstart,
  Info,
  RowGap40,
  Semibold,
  Wrap,
} from "../Styles/MainStyle";
import {
  CustomBar,
  CustomCard,
  DImg,
  StyledImg,
  Subheading,
  Title,
  Year,
} from "../Styles/SideStyle";
import { StyledLink } from "../Styles/Link";
import Back from "./Back";
import { useDispatch, useSelector } from "react-redux";
import { fetchSongsRequest, deleteSongRequest } from "../redux/songsSlice";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import CustomAudioPlayer from "./CustomAudioPlayer";

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const songs = useSelector((state) => state.songs.list);

  useEffect(() => {
    dispatch(fetchSongsRequest());
  }, [dispatch]);

  const song = songs.find((song) => song._id === id);
  const similarSongs = songs
    .filter((s) => s.genre === song?.genre && s._id !== id)
    .slice(0, 3);

  const handleEdit = (ID) => {
    navigate(`/${ID}`);
  };

  const handleDelete = (id) => {
    dispatch(deleteSongRequest(id));
    navigate("/all");
  };

  return (
    <Container>
      <Flex>
        <Semibold>Details</Semibold>
        <Back />
      </Flex>
      {song && (
        <Flexstart>
          <RowGap40>
            <CustomCard>
              <DImg src={song.imgUrl || "/images/OIP.jpg"} />
            </CustomCard>
            <Info>
              <Semibold>{song.title.charAt(0).toUpperCase()+song.title.slice(1)}</Semibold>
              <Column>
                <Subheading>{song.publishYear}</Subheading>
                <Subheading>{song.genre.charAt(0).toUpperCase()+song.genre.slice(1)}</Subheading>
              </Column>
              <Column>
                <Year>Artist: {song.singer.charAt(0).toUpperCase()+song.singer.slice(1)}</Year>
                <Year>{moment(song.createdAt).fromNow()}</Year>
              </Column>
              <RowGap40>
                <CustomAudioPlayer audioSrc={song.audio} />
                <Edit onClick={() => handleEdit(song._id)} />
                <Delete onClick={() => handleDelete(song._id)} />
              </RowGap40>
            </Info>
          </RowGap40>
        </Flexstart>
      )}
      <Center>
      {similarSongs.length > 0 && (
    <>
      <Semibold>Similar Songs</Semibold>
      <CustomBar />
      <Wrap>
        {similarSongs.map((similarSong) => (
          <StyledLink key={similarSong._id} to={`/${similarSong._id}`}>
            <CustomCard>
              <StyledImg
                src={similarSong.imgUrl || "/images/OIP.jpg"}
                alt="Song Image"
              />
              <Title>{similarSong.title}</Title>
              <Year>{similarSong.publishYear}</Year>
            </CustomCard>
          </StyledLink>
        ))}
      </Wrap>
    </>
  )}
      </Center>
    </Container>
  );
};

export default Details;
