import React from 'react'



const Footer = () => {

    const currentDate = new Date();
    const year = currentDate.getFullYear();


    return (
        <footer className='text-center'>
            <h4>Created by Ridwan {year} </h4>
        </footer>
    )
}

export default Footer