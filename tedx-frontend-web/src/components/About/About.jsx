import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import styles from "./About.module.css";

function About() {
  const data = [
    {
      label: "TED",
      value: "ted",
      title: "About TED",
      desc: `TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a four-day conference in California 30 years ago, TED has grown to support its mission with multiple initiatives. 

      The two annual TED Conferences invite the world's leading thinkers and doers to speak for 18 minutes or less. Many of these talks are then made available, free, at TED.com. TED speakers have included Bill Gates, Jane Goodall, Elizabeth Gilbert, Sir Richard Branson, Nandan Nilekani, Philippe Starck, Ngozi Okonjo-Iweala, Sal Khan and Daniel Kahneman. The annual TED Conference takes place each spring in Vancouver, British Columbia. 
      TED's media initiatives include TED.com, where new TED Talks are posted daily; TED Translators, which provides subtitles and interactive transcripts as well as translations from volunteers worldwide; the educational initiative TED-Ed. 

TED has established The Audacious Project that takes a collaborative approach to funding ideas with the potential to create change at thrilling scale; TEDx, which supports individuals or groups in hosting local, self- organized TED-style events around the world, and the TED Fellows program, helping world-changing innovators from around the globe to amplify the impact of their remarkable projects and activities.  `,
    },
    {
      label: "TEDx",
      value: "tedx",
      title: "About TEDx, x = independently organized event",
      desc: `In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. 

      These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized. (Subject to certain rules and regulations.)`,
    },
  ];

  return (
    <div className="bg-black text-white flex flex-col items-center justify-around w-full lg:px-48  md:px-16 px-2">
      <div className="border-pm border-b-2 font-bold text-3xl mt-2 text-center">
        About Us
      </div>
      <Tabs value="html" className="w-full mt-4">
        <TabsHeader className={styles.tabsHeader}>
          {data.map(({ label, value }) => (
            <Tab key={value} value={value} className="text-pm font-bold">
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody className={styles.tabsBody}>
          {data.map(({ value, title }) => (
            <TabPanel key={value} value={value} className={styles.tabsTitle}>
              {title}
            </TabPanel>
          ))}
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value} className={styles.tabDesc}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
}

export default About;
