import React from 'react'

import HeaderResumePart from './HeaderResumePart'
import HeaderNavPart from './HeaderNavPart'

const Header = () => {
    return (
        <>
            <div className='flex'>

                <HeaderNavPart />
                <HeaderResumePart />

            </div>
        </>
    )
}

export default Header