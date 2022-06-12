import React, {Component} from 'react';
const footer = (props) => {
    console.log(props.footerIcon)
    return (

        <>

            <div className="flex"></div>


            <footer className="bg-gray-800 pt-1  sm:mt-10 pt-10">
                <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">

                    {
                    props.footerItem.map((item) => (
                        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12 h-3/6">
                            <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                                {item} </div>

                            {
                            props.footerItems.get(item).map((item2) => (
                                <a href={
                                        item2.href
                                    }
                                    className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                                    {
                                    item2.text
                                } </a>
                            ))
                        } </div>
                    ))
                }
                    <div className="pt-2">
                        <div className="flex pb-5 px-3 m-auto pt-5
                                            border-t border-gray-500 text-gray-400 text-sm
                                            flex-col md:flex-row max-w-6xl">
                            <div className="mt-2">
                                © Copyright 1998-year. All Rights Reserved.
                            </div>


                            <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
                                {
                                props.footerIcon.map((itm) => (

                                    <a href={
                                            itm.href
                                        }
                                        className="w-6 mx-1">
                                        <i className={
                                            itm.text
                                        }></i>
                                    </a>


                                ))
                            } </div>

                        </div>
                    </div>


                </div>


            </footer>
        </>

    );
}

export default footer;
