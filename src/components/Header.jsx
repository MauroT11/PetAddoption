'use client';

import Link from 'next/link';
import Image from 'next/image';
import logoImage from '../../public/paws_logo.png';
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { yellow } from '@mui/material/colors';
import SvgIcon from '@mui/material/SvgIcon';

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function Header() {
  return (
    <header className="bg-[#303841] py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link href="/">
            <Image
              src={logoImage}
              alt="Pet Addoption Logo"
              width={100}
              height={100}
            />
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">
                <HomeIcon sx={{ color: yellow[600] }} />
              </Link>
            </li>
            <li>
              <Link href="/pets">
                <span className="text-white hover:text-[#F6C90E]">Pets</span>
              </Link>
            </li>
            <li>
              <Link href="/adoption">
                <span className="text-white hover:text-[#F6C90E]">
                  Adoption
                </span>
              </Link>
            </li>
            <li>
              <Link href="/suppor_us">
                <span className="text-white hover:text-[#F6C90E]">
                  Support us
                </span>
              </Link>
            </li>
            <li>
              <Link href="/about_us">
                <span className="text-white hover:text-[#F6C90E]">
                  About us
                </span>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <span className="text-white hover:text-[#F6C90E]">Contact</span>
              </Link>
            </li>
          </ul>
        </nav>
        <Box sx={{ flexGrow: 0 }}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Box>
      </div>
    </header>
  );
}
