import { Carousel } from 'antd';
import React from 'react';
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Slider = () => (
  <Carousel autoplay>
    <div>
      <img src={require('../images/slider01.png')} />
                          
   
    </div>
    <div>
    <img src={require('../images/slider02.png')}  />  
    </div>
    <div>
    <img src={require('../images/slider03.png')}  />
    </div>
  </Carousel>
);

export default Slider;
