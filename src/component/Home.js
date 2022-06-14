import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../modules/navbar';
import Footer from '../modules/footer';
// import Slider from '../modules/carousel';
import DataGridProDemo from '../modules/dataGrid';
import i18n from 'i18next';



// import './i18n.js';






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
        name: 'OTC',
        href: '#',
        current: false
    },
    {
        name: 'Learning',
        href: '#',
        current: false
    },
    {
        name: 'Rules and Regulations',
        href: '#',
        current: false
    }, {
        name: 'About us',
        href: '#',
        current: false
    }, {
        name: 'Contact us',
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
const footerItem = ['Getting Started', 'Core Concepts', 'Customization', 'Community']
const imgurlslider = [{
    
    image: '../images/1.jpg'
  },
  {
    
    image: '../images/slider02.png'
  },
  {
    
    image: '../images/slider03.png'
  }
      
   ]
const footerItems = new Map();
footerItems.set('Getting Started', [
    {
        text: 'Test1',
        href: 'http://google.com'
    }, {
        text: 'Test1',
        href: 'google.com'
    }
]);
footerItems.set('Core Concepts', [
    {
        text: 'Test1',
        href: 'google.com'
    }, {
        text: 'Test1',
        href: 'google.com'
    }, {
        text: 'Test1',
        href: 'google.com'
    }
]);
footerItems.set('Customization', [
    {
        text: 'Test1',
        href: 'google.com'
    }, {
        text: 'Test1',
        href: 'google.com'
    }
]);
footerItems.set('Community', [
    {
        text: 'Test1',
        href: 'google.com'
    }, {
        text: 'Test1',
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
        <div> {/* <Header /> */}
       
            <Navbar user={user}
                navigation={navigation}
                userNavigation={userNavigation}/>
            {/* <Slider styleCarosel={styleCarosel}
              imgurlslider={imgurlslider} /> */}
            <DataGridProDemo rows={rows}
                columns={columns}
                style1={style}/>
                
            <Footer footerItem={footerItem}
                footerItems={footerItems}
                footerIcon
                ={footerIcon }/>
               <h2>{t('wlc_to_react')}</h2>
               
        </div>
        
    )
}
