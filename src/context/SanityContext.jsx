import { createContext, useContext, useEffect, useState } from 'react';
import { client } from '../api/sanity';

const SanityContext = createContext();

export function SanityContextProiver({ children }) {
  const [aboutData, setAboutData] = useState();
  const [expData, setExpData] = useState();
  const [skillsData, setSkillsData] = useState();
  const [worksData, setWorksData] = useState();
  const [assignmentData, setAssignmentData] = useState();

  useEffect(() => {
    const aboutQuery = '*[_type == "abouts"]';
    const experirencesQuery = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';
    const workQuery = '*[_type == "works"]';
    const assignmentQuery = '*[_type == "assignments"]';

    client.fetch(aboutQuery).then(setAboutData).catch(console.error);
    client.fetch(experirencesQuery).then(setExpData).catch(console.error);
    client.fetch(skillsQuery).then(setSkillsData).catch(console.error);
    client.fetch(workQuery).then(setWorksData).catch(console.error);
    client.fetch(assignmentQuery).then(setAssignmentData).catch(console.error);
  }, []);

  return (
    <SanityContext.Provider
      value={{ aboutData, expData, skillsData, worksData, assignmentData }}
    >
      {children}
    </SanityContext.Provider>
  );
}

export const useSanityContext = () => useContext(SanityContext);
