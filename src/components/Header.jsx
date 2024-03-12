import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import logoImage from '@/components/paws_logo.png';

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
                <span className="text-white hover:text-[#F6C90E]">Home</span>
              </Link>
            </li>
            <li>
              <Link href="/pets">
                <span className="text-white hover:text-[#F6C90E]">Pets</span>
              </Link>
            </li>
            <li>
              <Link href="/posts">
                <span className="text-white hover:text-[#F6C90E]">
                  Adoption
                </span>
              </Link>
            </li>
            <li>
              <Link href="/posts">
                <span className="text-white hover:text-[#F6C90E]">
                  Support us
                </span>
              </Link>
            </li>
            <li>
              <Link href="/posts">
                <span className="text-white hover:text-[#F6C90E]">
                  About us
                </span>
              </Link>
            </li>
            <li>
              <Link href="/posts">
                <span className="text-white hover:text-[#F6C90E]">Contact</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
