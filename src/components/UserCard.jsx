import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Box, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { LocationOn, Phone } from '@mui/icons-material';
import Image from 'next/image';

const UserCard = ({ firstname, location, lastname, phone, onFetchDetails }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card style={{ width: '350px', margin: '10px' }}>
        <CardContent style={{ textAlign: 'left' }}>
          <Box
            sx={{
              marginBottom: '10px',
            }}
          >
            <Image
              src="/image.png" // Path to the static image in the public folder
              alt="User Avatar"
              width={80} // Adjust width as needed
              height={80} // Adjust height as needed
              layout="intrinsic"
            />
          </Box>
          <Box
            sx={{
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: '10px',
            }}
          >
            <Typography variant="h6">{firstname} {lastname}</Typography>
          </Box>
          <Box
            sx={{
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography variant="body2" color="textSecondary">
              <LocationOn style={{ fontSize: '16px', verticalAlign: 'middle' }} /> {location}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="body2" color="textSecondary" style={{ marginRight: '75px' }}>
                <Phone style={{ fontSize: '16px', verticalAlign: 'middle' }} /> {phone}
              </Typography>
         
              <Button
                variant="contained"
                color="primary"
                onClick={handleClickOpen}
                sx={{ backgroundColor: 'black', '&:hover': { backgroundColor: 'grey' }, padding: '6px 12px' }}
              >
                Fetch Details
              </Button>
            </Box>
            <Typography  color="textSecondary" style={{fontSize: '10px', marginLeft: '5px' }}>
               Available on Phone
            </Typography>
          </Box>
        </CardContent>
      </Card>

      {/* MUI Dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: '450px',  // Increase the width as needed
            height: '460px', // Increase the height as needed
          },
        }}
      >
        <DialogTitle sx={{ 
            padding: '10px',
            marginLeft: '20px', 
            textAlign: 'left',
            fontWeight: 'bold',  
            borderBottom: '1px solid #ddd' // Optional: add border below title for separation
          }}>Fetch Details
          </DialogTitle>
        <DialogContent>
          <Box sx={{ padding: 'px' }}>
            <Typography  variant="body2" // Reduce size by using a smaller variant
              style={{ marginBottom: '10px', color: '#4B4F54' }} >
              Here are the details of the following employee
            </Typography>

            <Typography variant="body1" >
              Name: {firstname} {lastname}
            </Typography>

            <Typography variant="body1" >
               Location: {location}
            </Typography>

            <Typography variant="body1" >
               Contact number: {phone}
            </Typography>

            <Typography variant="body1" style={{ marginTop: '15px', marginBottom: '5px' }} >
              Profile Image:
            </Typography>
            <Box
              sx={{
                width: '100%',
                height: '180px', // Set height for the rectangle containing the image
              }}
            >
             
              <Image
                src="/image_square.png" // Use the user's image URL if available
                alt="User Avatar"
                width={180} // Adjust width as needed
                height={200} // Adjust height as needed
                layout="intrinsic"
              />
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="black"
          sx ={{
            border: '1px solid #ddd'
          }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default UserCard;
