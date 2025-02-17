import React from 'react'

const Footer = () => {
    return (
        <div bg="light" expand="lg" className='text-center p-2 shadow-sm' bg="light" expand="lg" style={{ cursor: "pointer" }}>
            <p>Developed by{" "} <span className="text-red-500"> ❤️ </span>
                <a href="https://github.com/Tapan2211"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                    color='#fgfgfg'>
                    Tapan Ghataliya
                </a>
            </p>
        </div>
    )
}

export default Footer;