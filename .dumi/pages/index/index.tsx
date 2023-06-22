import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import './index.scss'

const Content: React.FC = () => {
  const navigate = useNavigate()

  return (
    <section className='index'>
      <div className='banner'>
        <h1>Happy Bee</h1>
        <div>助力设计开发者「更灵活」地搭建出「更美」的产品，让用户「快乐工作」～</div>
        <div className='start-use' onClick={() => navigate('/components')}>开始使用</div>
      </div>
      
    </section>
  )
};

export default Content;