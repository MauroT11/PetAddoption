import Image from 'next/image';
import main_pic from '../../public/main_pic.png';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function Home() {
  return (
    <main className="min-h-96 flex">
      <div className="w-1/2">
        <Image
          src={main_pic}
          alt="Dog"
          className="h-[70svh] w-auto rounded-br-full"
        />
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center px-8">
        <h1 className="text-4xl font-bold">Transform Lives</h1>
        <h2 className="text-lg">Rescue a Furry Friend Today</h2>
        <p className="text-sm">
          &quot;Be the Difference: Open Your Heart and Home to a Shelter
          Pet&quot;
        </p>
        <div className="max-w-[600px] mt-8">
          {/* ACCORDION */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography>Our mission</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                At our shelter, we believe in the power of second chances. Every
                pet that comes through our doors carries a unique story, often
                filled with hardships and challenges. But with your support, we
                can change those stories into tales of hope and happiness. From
                the moment they arrive, our dedicated team works tirelessly to
                provide these animals with the love, care, and rehabilitation
                they need to thrive.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>Why adopt from us</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                By choosing to adopt from us, you're not just welcoming a new
                pet into your home; you're giving a deserving animal a chance at
                a brand new life. Whether it's a playful pup like Humpty or a
                gentle soul like Dumpty, each furry friend in our care is
                eagerly waiting to become a cherished member of your family.
                Together, we can make a difference—one paw at a time.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>Join Us</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Join us in our mission to bring joy and companionship to pets in
                need. Whether you're looking for a loyal canine companion, a
                purring feline friend, or a cuddly critter to call your own, we
                have a wide variety of animals eagerly awaiting their forever
                homes. Together, let's write the next chapter in these precious
                pets' lives. Adopt, don't shop, and together we can make a world
                of difference.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </main>
  );
}
