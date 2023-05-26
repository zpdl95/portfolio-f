import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const Header = () => (
  <div className='app__header app__flex'>
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className='app__header-img'
    ></motion.div>

    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className='app__header-info'
    >
      <div className='app__header-badge'>
        <div className='badge-cmp app__flex'>
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className='p-text'>안녕하세요!</p>
            <h1 className='head-text'>최재원</h1>
            <p className='p-text'>입니다.</p>
          </div>
        </div>

        <div className='tag-cmp app__flex'>
          <p className='p-text'>
            프론트엔드 개발자로 활동하고 있습니다. 이제까지 제가 개발한 웹
            사이트와 어플리케이션을 소개하는 포트폴리오를 준비했습니다. 많은
            분들이 제 작업물을 보고 평가해주시길 기대합니다. 감사합니다!
          </p>
        </div>
      </div>
    </motion.div>
  </div>
);

export default AppWrap(Header, 'home');
