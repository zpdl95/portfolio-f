import { createContext, useContext, useEffect, useState } from 'react';
import { client } from '../api/sanity';

const SanityContext = createContext();

export function SanityContextProiver({ children }) {
  const [aboutData, setAboutData] = useState();
  const [worksData, setWorksData] = useState();
  const [expData, setExpData] = useState();
  const [skillsData, setSkillsData] = useState();

  useEffect(() => {
    const aboutQuery = '*[_type == "abouts"]';
    const workQuery = '*[_type == "works"]';
    const experirencesQuery = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(aboutQuery).then(setAboutData);
    client.fetch(workQuery).then(setWorksData);
    client.fetch(experirencesQuery).then(setExpData);
    client.fetch(skillsQuery).then(setSkillsData);
  }, []);

  return (
    <SanityContext.Provider
      value={{ aboutData, worksData, expData, skillsData }}
    >
      {children}
    </SanityContext.Provider>
  );
}

export const useSanityContext = () => useContext(SanityContext);
