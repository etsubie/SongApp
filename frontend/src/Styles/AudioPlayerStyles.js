import styled from '@emotion/styled';
import { space, layout, color, typography, border, flexbox } from 'styled-system';

export const AudioPlayerContainer = styled('div')(
  space,
  layout,
  color,
  border,
  flexbox,
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '300px',
    margin: '0 auto',
    backgroundColor: 'white'
  }
);

export const AudioControls = styled('div')(
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: '10px',
  },
  typography,
  color,
);

export const PlayButton = styled('button')(
  {
    background: '#0d7ae6',
    border: 'none',
    cursor: 'pointer',
    '&:focus': {
      outline: 'none',
    },
    padding: '10px',
    fontSize: '15px',
    color:'white'
  },
  layout,
  space,
);

export const ProgressBar = styled('input')(
  {
    width: '100%',
    cursor: 'pointer',
  },
  layout,
  color,
  space,
);


