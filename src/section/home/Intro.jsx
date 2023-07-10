import { Box, Button, IconButton, Typography } from '@mui/material';
import React from 'react';
import Motor from '../../assets/images/FoodDelivery.png';
import Modal from '../../components/Modal';
import Close from '@mui/icons-material/Close';

function Intro() {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 3000);
  }, []);

  return (
    <Modal width={{ xs: '90%', sm: '40%', md: '40%' }} open={open}>
      <Box sx={{ backgroundColor: '#fff', borderRadius: 4, p: { xs: 3, sm: 4, md: 4 }, textAlign: 'center' }}>
        <Box width="100%" display="flex" justifyContent="flex-end">
          <IconButton onClick={() => setOpen(false)}>
            <Close sx={{ color: '#929292' }} />
          </IconButton>
        </Box>
        <Box component="img" src={Motor} alt="modal" sx={{ width: '100%' }} />
        <Typography fontSize={{ xs: 22, sm: 38, md: 38 }}>Free Shipping Member</Typography>

        <Button
          onClick={() => setOpen(false)}
          variant="contained"
          sx={{
            backgroundColor: '#1AC073',
            '&:hover': {
              background: '#38b449',
            },
            px: 8,
            py: 2,
            mt: 2,
          }}
        >
          Regisiter
        </Button>
      </Box>
    </Modal>
  );
}

export default Intro;
