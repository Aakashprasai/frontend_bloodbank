import { Dropdown, initMDB } from "mdb-ui-kit";
import { React, useState } from 'react';
initMDB({ Dropdown });



const Navbars = () => {

    let links = [
        { name: "HOME", link: "" },
        { name: "ABOUT", link: "" },
        { name: "PROPERTY & CONSTRUCTION", link: "" },
        { name: "GALLERY", link: "" }
    ];
    let [open, setOpen] = useState(false);
    return (<>
        <nav className='shadow-md w-full fixed top-0 left-0 font-[Montserrat] font-medium text-medium'>
            <div className='md:flex items-center justify-around bg-white py-3.5 md:px-10 px-7'>
                <a className='flex items-center '>
                    <span>
                        <img className='w-[120px] h-[100px] object-fit-contain' src="../assets/images/logo.png" alt="" />
                    </span>
                </a>
                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
                    {
                        links.map((link) => (
                            <li key={link.name} className='md:ml-8 md:my-0 my-7'>
                                <a href={link.link} className='text-black hover:text-blue-600 duration-500'>{link.name}</a>
                            </li>
                        ))
                    }

                    <li key={'link.name'} className='md:ml-8 md:my-0 my-7 md:hidden'>
                        <a href={'link.link'} className='text-black hover:text-blue-600 duration-500'>Contact</a>
                    </li>
                </ul>
                <button className='p-3 hidden md:block bg-blue-600 rounded-[10px] text-white hover:bg-blue-800 '>
                    CONTACT
                </button>
            </div>
        </nav>
    </>

    );
};

export default Navbars;
