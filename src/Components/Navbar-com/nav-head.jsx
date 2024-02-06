import React from 'react';
import './nav-head.css';
import Img from '../../images/img.jpg';
import 'boxicons';

const Navhead = ({ onToggle }) => {
    return (
        <header className='relative'>
            <div className='image-text  flex items-center justify-between'>
                <img src={Img} alt="Logo" className='image flex items-center' />
                <div className="text head-text flex flex-col text-base font-normal ">
                    <span className="title text-bold">Gestion de Stocks</span>
                    <span className="profession">Conseil Provincial Tiznit</span>
                </div>
            </div>
            <box-icon name='chevron-right' onClick={onToggle}></box-icon>
        </header>
    );
}
export default Navhead;
