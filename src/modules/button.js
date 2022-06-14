import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import i18n from 'i18next';




export default function VariantButtonGroup() {
 
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="text" aria-label="text button group">
        <Button onClick={()=>i18n.changeLanguage("fa")} href="#/actIon-2">FA</Button>
        <Button onClick={()=>i18n.changeLanguage("en")} href="#/action-2" >EN</Button>
      </ButtonGroup>
    </Box>
  );
}
