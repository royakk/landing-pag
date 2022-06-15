import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../modules/navbar';
import Footer from '../modules/footer';
import Slider from '../modules/carousel';
import DataGridProDemo from '../modules/dataGrid';




const rows = [
    {
        id: 1,
        col1: 'Hello',
        col2: 'World'
    }, {
        id: 2,
        col1: 'DataGridPro',
        col2: 'is Awesome'
    }, {
        id: 3,
        col1: 'MUI',
        col2: 'is Amazing'
    },
];
const columns = [
    {
        field: 'col1',
        headerName: 'Column 1',
        width: 150
    }, {
        field: 'col2',
        headerName: 'Column 2',
        width: 150
    },
];

const style = {
    display: 'block',
    margin: 'auto',
    position: ' relative',
    height: '20em',
    width: '65%'
}
const styleCarosel={
    display: 'block',
    margin: 'auto',
    position: 'relative',
    width : '65%',
    height : '637px'
}

const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
}
const navigation = [
    {
        name: 'Dashboard',
        href: '#',
        current: true
    },
    {
        name: 'otc',
        href: '#',
        current: false
    },
    {
        name:'Learning' ,
        href: '#',
        current: false
    },
    {
        name: 'Rules_and_Regulations',
        href: '#',
        current: false
    }, {
        name: 'About_us',
        href: '#',
        current: false
    }, {
        name: 'Contact_us',
        href: '#',
        current: false
    }, {
        name: 'Markets',
        href: '#',
        current: false
    },

]
const userNavigation = [
    {
        name: 'Your Profile',
        href: '#'
    }, {
        name: 'test',
        href: '#'
    }, {
        name: 'Sign out',
        href: '#'
    },
]
const footerItem = ['Links','About_us' ,'Subscribe' ]
const imgurlslider = [{
    
    image: "images/1.jpg"
  },
  {
    
    image: "images/slider01.png"
  },
  {
    
    image: "images/slider02.png"
  }
      
   ]
const footerItems = new Map();
footerItems.set('Links', [
    {
        text: 'Work_with_us',
        href: 'http://google.com'
    }, {
        text: 'Security',
        href: 'google.com'
    }
]);
footerItems.set('About_us', [
    {
        text: 'Contact_us',
        href: 'google.com'
    }, {
        text: 'About_us',
        href: 'google.com'
    }, {
        text:'Blog',
        href: 'google.com'
    }
]);
footerItems.set('Subscribe', [
    {
        text:'Rules_and_Regulations',
        href: 'google.com'
    }, {
        text: 'User_guide',
        href: 'google.com'
    },
    {
        text: 'Fee',
        href: 'google.com'
    }
]);


const footerIcon = [
    {
        text: 'uil uil-facebook-f',
        href: 'http://google.com'
    }, {
        text: 'uil uil-twitter-alt',
        href: 'http://google.com'
    }, {
        text: 'uil uil-linkedin',
        href: 'http://google.com'
    }, {
        text: 'uil uil-instagram',
        href: 'http://google.com'
    }
]

export default function Home() {
    const {t} = useTranslation (); 
    
    return (
        <div> 
       
            <Navbar user={user}
                navigation={navigation}
                userNavigation={userNavigation}/>
            <Slider styleCarosel={styleCarosel} 
               imgurlslider={imgurlslider} /> 
            <DataGridProDemo rows={rows}
                columns={columns}
                style1={style}/>
        
            <Footer footerItem={footerItem}
                footerItems={footerItems}
                footerIcon
                ={footerIcon }/>
               
               
        </div>
        
    )
}
