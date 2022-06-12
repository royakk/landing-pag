import { Carousel } from 'antd';
import React from 'react';
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Slider = (props) => (
  <Carousel autoplay>
    <div>
    <img style={{width:props.width,height: props.height,
  display: "block",
  margin: "auto",
  position:" relative"}} src={require('../images/1.jpg')} />
    </div>
    <div>
    <img style={{width:props.width,height: props.height,
  display: "block",
  margin: "auto",
  position:" relative"}} src={require('../images/slider02.png')}  />  
    </div>
    <div>
    <img style={{width:props.width,height: props.height,
  display: "block",
  margin: "auto",
  position:" relative"}} src={require('../images/slider03.png')}  />
    </div>
  </Carousel>
);

export default Slider;
