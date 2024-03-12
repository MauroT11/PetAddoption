'use client';

import Image from 'next/image';
import facebook from '../../public/socialMedia/facebook.png';
import instagram from '../../public/socialMedia/instagram.png';
import tiktok from '../../public/socialMedia/tiktok.png';
import youtube from '../../public/socialMedia/youtube.png';
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

export default function Footer() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const [anchorEl3, setAnchorEl3] = React.useState(null);
  const [anchorEl4, setAnchorEl4] = React.useState(null);

  const handlePopoverOpen1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  const handlePopoverClose1 = () => {
    setAnchorEl1(null);
  };

  const handlePopoverOpen2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handlePopoverClose2 = () => {
    setAnchorEl2(null);
  };

  const handlePopoverOpen3 = (event) => {
    setAnchorEl3(event.currentTarget);
  };

  const handlePopoverClose3 = () => {
    setAnchorEl3(null);
  };

  const handlePopoverOpen4 = (event) => {
    setAnchorEl4(event.currentTarget);
  };

  const handlePopoverClose4 = () => {
    setAnchorEl4(null);
  };

  const open1 = Boolean(anchorEl1);
  const open2 = Boolean(anchorEl2);
  const open3 = Boolean(anchorEl3);
  const open4 = Boolean(anchorEl4);

  return (
    <footer className="bg-[#303841] py-4 px-12 text-[#EEEEEE] flex justify-between items-center">
      {/* USEFUL LINKS */}
      <div className="flex flex-col gap-2 max-w-80">
        <h1 className="text-[#F6C90E] font-bold text-2xl">Useful Links</h1>
        <div className="grid grid-cols-2">
          <div className="flex flex-col">
            <a href="#" className="hover:underline">
              Donate
            </a>
            <a href="#" className="hover:underline">
              Contact Us
            </a>
            <a href="#" className="hover:underline">
              Privacy
            </a>
          </div>
          <div className="flex flex-col">
            <a href="#" className="hover:underline">
              Modern Slavery
            </a>
            <a href="#" className="hover:underline">
              Jobs
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        {/* facebook popover */}
        <Typography
          aria-owns={open1 ? 'mouse-over-popover' : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen1}
          onMouseLeave={handlePopoverClose1}
        >
          <Image src={facebook} height={100} width={50} alt="facebook" />
        </Typography>
        <Popover
          id="mouse-over-popover"
          sx={{
            pointerEvents: 'none',
          }}
          open={open1}
          anchorEl={anchorEl1}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          onClose={handlePopoverClose1}
          disableRestoreFocus
        >
          <Typography sx={{ p: 1 }}>Facebook</Typography>
        </Popover>

        {/* instagram popover */}

        <Typography
          aria-owns={open2 ? 'mouse-over-popover' : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen2}
          onMouseLeave={handlePopoverClose2}
        >
          <Image src={instagram} height={100} width={50} alt="instagram" />
        </Typography>
        <Popover
          id="mouse-over-popover"
          sx={{
            pointerEvents: 'none',
          }}
          open={open2}
          anchorEl={anchorEl2}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          onClose={handlePopoverClose2}
          disableRestoreFocus
        >
          <Typography sx={{ p: 1 }}>Instagram</Typography>
        </Popover>

        {/* tiktok popover */}

        <Typography
          aria-owns={open3 ? 'mouse-over-popover' : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen3}
          onMouseLeave={handlePopoverClose3}
        >
          <Image src={tiktok} height={100} width={50} alt="tiktok" />
        </Typography>
        <Popover
          id="mouse-over-popover"
          sx={{
            pointerEvents: 'none',
          }}
          open={open3}
          anchorEl={anchorEl3}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          onClose={handlePopoverClose3}
          disableRestoreFocus
        >
          <Typography sx={{ p: 1 }}>Tik Tok</Typography>
        </Popover>

        <Typography
          aria-owns={open4 ? 'mouse-over-popover' : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen4}
          onMouseLeave={handlePopoverClose4}
        >
          <Image src={youtube} height={100} width={50} alt="youtube" />
        </Typography>
        <Popover
          id="mouse-over-popover"
          sx={{
            pointerEvents: 'none',
          }}
          open={open4}
          anchorEl={anchorEl4}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          onClose={handlePopoverClose4}
          disableRestoreFocus
        >
          <Typography sx={{ p: 1 }}>YouTube</Typography>
        </Popover>
      </div>

      {/* MUI DIALOGUE BOX */}
      <div className="flex flex-col items-center">
        <p className="text-[#F6C90E] font-bold">Subscribe to our Newsletter</p>
        <React.Fragment>
          <Button variant="outlined" onClick={handleClickOpen}>
            Sign Up!
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{
              component: 'form',
              onSubmit: (event) => {
                event.preventDefault();
                const formData = new FormData(event.currentTarget);
                const formJson = Object.fromEntries(formData.entries());
                const email = formJson.email;
                console.log(email);
                handleClose();
              },
            }}
          >
            <DialogTitle>Subscribe</DialogTitle>
            <DialogContent>
              <DialogContentText>
                To subscribe to out newsletter, please enter your email address
                here. We will send newsletters every month!
              </DialogContentText>
              <TextField
                autoFocus
                required
                margin="dense"
                id="name"
                name="email"
                label="Email Address"
                type="email"
                fullWidth
                variant="standard"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit">Subscribe</Button>
            </DialogActions>
          </Dialog>
        </React.Fragment>
      </div>
      <div className="flex max-w-96 text-xs text-end text-[#F6C90E]">
        <p>
          © 2023 Pet Adoption Registered Charity Numbers: 227523 & SC037843
          Donations are tax exempt and Gift Aid can be claimed
        </p>
      </div>
    </footer>
  );
}
