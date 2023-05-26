import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';
import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { urlFor } from '../../api/sanity';
import { useSanityContext } from '../../context/SanityContext';

const About = () => {
  const { aboutData, expData } = useSanityContext();
  const [sortedExpData, setSortedExpData] = useState();

  useEffect(() => {
    if (expData) {
      const sortedData = expData.toSorted((a, b) => {
        if (a._createdAt < b._createdAt) {
          return -1;
        } else if (a._createdAt > b._createdAt) {
          return 1;
        } else {
          return 0;
        }
      });

      setSortedExpData(sortedData);
    }
  }, [expData]);

  return (
    <>
      <h2 className='head-text'>
        <span>About</span>
      </h2>
      <div className='app__about-wrapper'>
        <div className='app__profiles'>
          {aboutData?.map((about, index) => (
            <div key={about.title + index} className='app__profile-item'>
              <div className='app__profile-img'>
                <img src={urlFor(about.imgUrl)} alt={about.title} />
              </div>

              <div className='app__profile-desc'>
                <p className='p-text' style={{ marginTop: 10 }}>
                  {about.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className='app__exp'>
          {sortedExpData?.map((experience) => (
            <motion.div className='app__exp-item' key={experience.year}>
              <div className='app__exp-year'>
                <p className='bold-text'>{experience.year}</p>
              </div>
              <motion.div className='app__exp-works'>
                {experience.works.map((work, index) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className='app__exp-work'
                      data-tip
                      data-for={work.name + index}
                      key={work.name}
                    >
                      <h4 className='bold-text'>{work.name}</h4>
                      <p className='p-text'>{work.company}</p>
                    </motion.div>
                    {work.desc && (
                      <ReactTooltip
                        id={work.name + index}
                        effect='solid'
                        arrowColor='#fff'
                        className='tooltip'
                      >
                        {work.desc}
                      </ReactTooltip>
                    )}
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg'
);
