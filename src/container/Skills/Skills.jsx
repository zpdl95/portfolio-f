import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor } from '../../api/sanity';
import './Skills.scss';
import { useSanityContext } from '../../context/SanityContext';

const Skills = () => {
  const { skillsData } = useSanityContext();
  const [sortedSkillsData, setsortedSkillsData] = useState();

  useEffect(() => {
    if (skillsData) {
      const sortedData = skillsData.toSorted((a, b) => {
        if (a._createdAt < b._createdAt) {
          return -1;
        } else if (a._createdAt > b._createdAt) {
          return 1;
        } else {
          return 0;
        }
      });

      setsortedSkillsData(sortedData);
    }
  }, [skillsData]);

  return (
    <>
      <h2 className='head-text'>Skills</h2>

      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {sortedSkillsData?.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className='app__skills-item'
              key={skill.name}
            >
              <div className='skills-item__img'>
                <div
                  className='app__flex'
                  style={{ backgroundColor: skill.bgColor }}
                >
                  <img src={urlFor(skill.icon)} alt={skill.name} />
                </div>
                <p className='p-text'>{skill.name}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__primarybg'
);
