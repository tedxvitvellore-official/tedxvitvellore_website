import React from "react";
import Event from "../Event/Event";
import meraki from "../../assets/meraki_logo.png";
import divergent from "../../assets/divergent_logo.png";
import envisage from "../../assets/envisage_logo.png";
import reunited from "../../assets/reunited_logo.png";
import ripple from "../../assets/ripple_logo.png";

function Events() {
  return (
    <div className="w-full flex flex-col items-center justify-around bg-black">
      <Event
        imgURL={ripple}
        dates="24 July 2022"
        desc="We tend to glance over the little things we do, the small actions that have massive consequences beyond the scope 
        of our understanding.

        Smaller life choices can be analogized through ripples in water or a flap of a butterfly's wing.
        
        The concept that a butterfly's wings flapping can cause a tornado or a small ripple can spread through 
        streams is at the core of the theme of the event."
      />
      <a
        href="http://localhost:3000/"
        target="_blank"
        rel="noreferrer"
        className="py-4 px-6 text-lg rounded-md font-semibold bg-pm max-w-1/2 mb-8"
      >
        Register
      </a>
      <Event
        imgURL={envisage}
        desc="Our flagship event revolved around the central theme of envisioning and ultimately achieving our goals through positive affirmations and manifestations, in which individuals of reputation and stature addressed young minds looking forward to taking the next step in embarking on the journey of an unconventional career."
        dates="30 December 2021"
      />
      <Event
        imgURL={reunited}
        dates="16th October 2021"
        desc="A scintillating session where our alumni, who have been an integral part of TEDxVITVellore, shared their insightful anecdotes and told us about their college experiences, life choices, and expertise in organizing TEDx events. The event reminisced the cumulation of memories and life lessons with the audience."
      />
      <Event
        imgURL={divergent}
        dates="15th May 2021"
        desc="Divergent highlighted what it means to have for commencing the venture to follow one's dream of establishing an unconventional career. The extraordinary panel of speakers took the stage to share their visions and direct the audience such that they could look beyond the stereotypes of a successful career.
"
      />
      <Event
        imgURL={meraki}
        dates="30th Jan 2021"
        desc="The event opened the stage to all aspiring poets, future novelists, and anyone looking for words to heal. Meraki - 'the story of a story' showcased the process of transformation of one's ideas into moments of epiphany by gaining inspiration from the words of well-established litterateurs and litterateuse."
      />
    </div>
  );
}

export default Events;
