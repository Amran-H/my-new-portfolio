import React from 'react'

const NabvarLinks = ({ href, label, active, onClick }) => {
    return (
        <li><a href={href} className={active ? 'active' : ''}
            onClick={onClick}
        >{label}</a></li>
    )
}

export default NabvarLinks