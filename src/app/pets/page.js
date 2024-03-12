'use client'

import Image from "next/image"
import cat from "../../../public/pets/cat.jpg"
import dog from "../../../public/pets/dog.webp"
import rabbit from "../../../public/pets/rabbit.jpg"
import * as React from 'react';
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';
import { Stack } from "@mui/material"
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

// ICONS
import PetsIcon from '@mui/icons-material/Pets';
import CakeIcon from '@mui/icons-material/Cake';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

export default function Page() {

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const [open2, setOpen2] = React.useState(false);
    const handleClickOpen2 = () => {
        setOpen2(true);
    };
    const handleClose2 = () => {
        setOpen2(false);
    };

    const [open3, setOpen3] = React.useState(false);
    const handleClickOpen3 = () => {
        setOpen3(true);
    };
    const handleClose3 = () => {
        setOpen3(false);
    };


    return (
        <main className="flex flex-col justify-center gap-4 py-4 items-center min-w-full">
            <h1 className="text-5xl font-bold text-[#F6C90E]">PETS</h1>
            <div className="min-w-full gap-4 flex flex-col">

                {/* DOG SECTION */}
                <div className="min-w-full grid py2 px-4 grid-cols-2 items-center justify-items-center justify-center ">
                    <Image src={dog} alt="Spike" height={100} width={300} className="rounded-2xl" />
                    <div className="flex flex-col gap-4 text-center">
                        <h1 className="text-2xl font-bold">Athena</h1>
                        <p className="text-sm">Athena is looking for a VERY specific home. She needs an quiet environment free of other pets and ideally away from neighbouring dogs, but can live with children aged 14 and over. She obsessively tail chases which our training team are working with, and her new family MUST be willing to continue this in the home.</p>
                        <div>
                            <React.Fragment value={1}>
                            <Button variant="outlined" onClick={handleClickOpen} className="bg-[#3A4750] border-[#F6C90E] text-[#F6C90E] hover:text-[#3A4750] hover:bg-[#F6C90E]">Athenas Details</Button>
                            <BootstrapDialog
                                onClose={handleClose}
                                aria-labelledby="customized-dialog-title"
                                open={open}
                                fullWidth
                                className="text-center"
                            >
                                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                                Athena
                                </DialogTitle>
                                <IconButton
                                aria-label="close"
                                onClick={handleClose}
                                sx={{
                                    position: 'absolute',
                                    right: 8,
                                    top: 8,
                                    color: (theme) => theme.palette.grey[500],
                                }}
                                >
                                <CloseIcon />
                                </IconButton>
                                <DialogContent dividers>
                                    
                                <Typography gutterBottom>
                                    <PetsIcon /> German Shepherd Dog Cross
                                </Typography>
                                <Typography gutterBottom>
                                    <CakeIcon /> 1 - 2 Years
                                </Typography>
                                <Typography gutterBottom>
                                    <FemaleIcon /> Female
                                </Typography>
                                <Typography gutterBottom>
                                    <LocationOnIcon /> Merseyside (Liverpool)
                                </Typography>

                                </DialogContent>
                                <DialogActions>
                                <Button autoFocus onClick={handleClose}>
                                    Reserve 
                                </Button>
                                </DialogActions>
                            </BootstrapDialog>
                            </React.Fragment>
                        </div>
                    </div>
                </div>

                {/* CAT SECTION */}
                <div className="min-w-full grid py2 px-4 grid-cols-2 items-center justify-items-center justify-center ">
                    <Image src={cat} alt="Luna" height={100} width={300} className="rounded-2xl" />
                    <div className="flex flex-col gap-4 text-center">
                        <h1 className="text-2xl font-bold">Luna</h1>
                        <p className="text-sm">Introducing Luna, the playful and affectionate cat who's ready to find his forever home at the shelter! Luna is a bundle of energy who loves nothing more than receiving fuss and attention.</p>
                        <div>
                            <React.Fragment value={2}>
                            <Button variant="outlined" onClick={handleClickOpen2} className="bg-[#3A4750] border-[#F6C90E] text-[#F6C90E] hover:text-[#3A4750] hover:bg-[#F6C90E]">Lunas Details</Button>
                            <BootstrapDialog
                                onClose={handleClose2}
                                aria-labelledby="customized-dialog-title"
                                open={open2}
                                className="text-center"
                                fullWidth
                            >
                                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                                Luna
                                </DialogTitle>
                                <IconButton
                                aria-label="close"
                                onClick={handleClose2}
                                sx={{
                                    position: 'absolute',
                                    right: 8,
                                    top: 8,
                                    color: (theme) => theme.palette.grey[500],
                                }}
                                >
                                <CloseIcon />
                                </IconButton>
                                <DialogContent dividers>
                                    
                                <Typography gutterBottom>
                                    <PetsIcon /> Domestic short-haired cat
                                </Typography>
                                <Typography gutterBottom>
                                    <CakeIcon /> 5 Years
                                </Typography>
                                <Typography gutterBottom>
                                    <MaleIcon /> Male
                                </Typography>
                                <Typography gutterBottom>
                                    <LocationOnIcon /> Norwich
                                </Typography>

                                </DialogContent>
                                <DialogActions>
                                <Button autoFocus onClick={handleClose2}>
                                    Reserve 
                                </Button>
                                </DialogActions>
                            </BootstrapDialog>
                            </React.Fragment>
                        </div>
                    </div>
                </div>

                {/* Rabbit SECTION */}
                <div className="min-w-full grid py2 px-4 grid-cols-2 items-center justify-items-center justify-center ">
                    <Image src={rabbit} alt="Fluffy" height={100} width={300} className="rounded-2xl" />
                    <div className="flex flex-col gap-4 text-center">
                        <h1 className="text-2xl font-bold">Fluffy</h1>
                        <p className="text-sm">Fluffy is a handsome and friendly harlequin boy who is now looking for his forever home. He just loves to be out exploring and eats plenty of yummy hay, he will need a large shed / hutch set up with an attached run.</p>
                        <div>
                            <React.Fragment> 
                            <Button variant="outlined" onClick={handleClickOpen3} className="bg-[#3A4750] border-[#F6C90E] text-[#F6C90E] hover:text-[#3A4750] hover:bg-[#F6C90E]">Fluffys Details</Button>
                            <BootstrapDialog
                                onClose={handleClose3}
                                aria-labelledby="customized-dialog-title"
                                open={open3}
                                className="text-center"
                                fullWidth
                            >
                                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                                Fluffy
                                </DialogTitle>
                                <IconButton
                                aria-label="close"
                                onClick={handleClose3}
                                sx={{
                                    position: 'absolute',
                                    right: 8,
                                    top: 8,
                                    color: (theme) => theme.palette.grey[500],
                                }}
                                >
                                <CloseIcon />
                                </IconButton>
                                <DialogContent dividers>
                                    
                                <Typography gutterBottom>
                                    <PetsIcon /> Short Haired
                                </Typography>
                                <Typography gutterBottom>
                                    <CakeIcon /> 1 Year
                                </Typography>
                                <Typography gutterBottom>
                                    <MaleIcon /> Male
                                </Typography>
                                <Typography gutterBottom>
                                    <LocationOnIcon /> Cambridge
                                </Typography>

                                </DialogContent>
                                <DialogActions>
                                <Button autoFocus onClick={handleClose3}>
                                    Reserve 
                                </Button>
                                </DialogActions>
                            </BootstrapDialog>
                            </React.Fragment>
                        </div>
                    </div>
                </div>
            </div>
            <Stack className="py-8" spacing={2}>
                <Pagination count={10} size="small" />
            </Stack>
        </main>
    )
}