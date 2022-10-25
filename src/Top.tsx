import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Uploader } from './components';
import { BinaryContext } from './contexts/Binary';
import { APP_NAME } from './utils';

export const Top: React.FC = React.memo(() => {
  const rom = useContext(BinaryContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!!rom.data) {
      navigate(`/${APP_NAME}/lz77`);
    }
  }, [rom.data]); // eslint-disable-line

  return (
    <Uploader
      upload={(title: string, data: Uint8Array) => {
        rom.setBinary(title, data);
      }}
    />
  );
});
