import Head from 'next/head'
import React from 'react'
import Advocacy from '../../components/slices/Advocacy'
import GetToKnow from '../../components/slices/GetToKnow'
import MissionVision from '../../components/slices/MissionVision'
import SupportUs from '../../components/slices/SupportUs'
import Breadcrumbs from '../../components/_partials/Breadcrumbs'

const aboutus = ( ) => {
    
    return (
        <>
            <div className="relative w-full">
                <Breadcrumbs  />
                <GetToKnow />
                <MissionVision />
                <SupportUs />
                <Advocacy />
            </div>
        </>
    )
}

export default aboutus