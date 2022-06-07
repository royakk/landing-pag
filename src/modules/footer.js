import React, { Component } from 'react';
const footer = () => {
    return ( 
    <>
    
    <div className="flex">
    <span className="text-center font-bold my-20 mx-auto">
        Footer icons required Unicons (npm i @iconscout/unicons)

        <hr className="my-4" />

        <a href="https://egoistdeveloper.github.io/twcss-to-sass-playground/" target="_blank" className="text-blue-600">
            Convetert to SASS
        </a>
    </span>
</div>

<footer className="bg-gray-800 pt-1  sm:mt-10 pt-10" >
    <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
        
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12 h-3/6">
            
            <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                Getting Started
            </div>

           
            <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Installation
            </a>
           
        </div>

        
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            
            <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                Core Concepts
            </div>

            
            <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Utility-First
            </a>
            
        </div>

        
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
           
            <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                Customization
            </div>

            
            <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Configuration
            </a>
            <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Theme Configuration
            </a>
            
        </div>

      
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
           
            <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                Community
            </div>

            
            <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                GitHub
            </a>
            <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Discord
            </a>
            <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Twitter
            </a>
            <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                YouTube
            </a>
        </div>
    </div>

  
    <div className="pt-2">
        <div className="flex pb-5 px-3 m-auto pt-5 
            border-t border-gray-500 text-gray-400 text-sm 
            flex-col md:flex-row max-w-6xl">
            <div className="mt-2">
                © Copyright 1998-year. All Rights Reserved.
            </div>

            
            <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
                <a href="#" className="w-6 mx-1">
                    <i className="uil uil-facebook-f"></i>
                </a>
                <a href="#" className="w-6 mx-1">
                    <i className="uil uil-twitter-alt"></i>
                </a>
                <a href="#" className="w-6 mx-1">
                    <i className="uil uil-youtube"></i>
                </a>
                <a href="#" className="w-6 mx-1">
                    <i className="uil uil-linkedin"></i>
                </a>
                <a href="#" className="w-6 mx-1">
                    <i className="uil uil-instagram"></i>
                </a>
            </div>
        </div>
    </div>
</footer>
    </>

     );
}
 
export default footer;