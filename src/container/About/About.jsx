import React from 'react';
import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import githubImg from '../../assets/github.png';
import velogImg from '../../assets/velog.png';

const About = () => {
  return (
    <>
      <h2 className='head-text'>
        <span>About</span>
      </h2>
      <div className='app__about-wrapper'>
        <div className='app__about-card'>
          <h3 className='title'>me</h3>
          <p>최재원</p>
          <p>1995.06.03</p>
          <p>경남대학교 심리학과</p>
        </div>
        <div className='app__about-card'>
          <h3 className='title'>education</h3>
          <div>
            <p className='term'>2019.06.21~2019.09.06</p>
            <p>데이터 사이언스 및 AI 융합 기반의 빅리더</p>
          </div>
          <div>
            <p className='term'>2020.08~</p>
            <p>노마드 코더</p>
          </div>
          <div>
            <p className='term'>2022.12~</p>
            <p>드림코딩 아카데미</p>
          </div>
        </div>
        <div className='app__about-card'>
          <h3 className='title'>channel</h3>
          <div className='channel-info'>
            <img src={githubImg} alt='github' />
            <a href='https://github.com/zpdl95/' target='_blank'>
              https://github.com/zpdl95/
            </a>
          </div>
          <div className='channel-info'>
            <img src={velogImg} alt='github' />
            <a href='https://velog.io/@zpdl95/posts' target='_blank'>
              https://velog.io/@zpdl95/posts
            </a>
          </div>
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
