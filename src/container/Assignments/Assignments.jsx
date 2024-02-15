import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor } from '../../api/sanity';
import './Assignments.scss';
import { useSanityContext } from '../../context/SanityContext';

const assignmentCategory = ['프로그래머스', 'All'];

const Assignments = () => {
  const { assignmentData } = useSanityContext();
  const [filterAssignment, setFilterAssignment] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    if (assignmentData) {
      setFilterAssignment(assignmentData);
    }
  }, [assignmentData]);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterAssignment(assignmentData);
      } else {
        setFilterAssignment(
          assignmentData.filter((assignment) => assignment.tags.includes(item))
        );
      }
    }, 500);
  };

  return (
    <>
      <h2 className='head-text'>
        My <span>Assignments</span> Section
      </h2>

      <div className='app__assignment-filter'>
        {assignmentCategory.map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__assignment-filter-item app__flex p-text ${
              activeFilter === item ? 'item-active' : ''
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__assignment-portfolio'
      >
        {filterAssignment.map((assignment, index) => (
          <div className='app__assignment-item app__flex' key={index}>
            <div className='app__assignment-img app__flex'>
              <img src={urlFor(assignment.imgUrl)} alt={assignment.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: 'easeInOut',
                  staggerChildren: 0.5,
                }}
                className='app__assignment-hover app__flex'
              >
                <a
                  href={assignment.assignmentLink}
                  target='_blank'
                  rel='noreferrer'
                >
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className='app__flex'
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={assignment.codeLink} target='_blank' rel='noreferrer'>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className='app__flex'
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className='app__assignment-content app__flex'>
              <h4 className='bold-text'>{assignment.title}</h4>
              <p className='p-text' style={{ marginTop: 10 }}>
                {assignment.description}
              </p>

              <div className='app__assignment-tag app__flex'>
                <p className='p-text'>{assignment.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Assignments, 'app__assignments'),
  'assignments',
  'app__primarybg'
);
