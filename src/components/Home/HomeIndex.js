import { Box, Typography } from '@mui/material'
import React from 'react'
import Hero from './compoments/Hero'
import FirstTime from './compoments/FirstTime'
import FeatureProperties from './compoments/FeatureProperties'
import FindLocalAgent from './compoments/FindLocalAgent'
import LookingFor from './compoments/LookingFor'
import JoinUs from './compoments/JoinUs'
import WhyUs from './compoments/WhyUs'
import ClientStories from './compoments/ClientStories'
import RecentBlog from './compoments/RecentBlog'
import WantCall from './compoments/WantCall'
import PopularBoston from './compoments/PopularBoston'
import ContactUs from './compoments/ContactUs'
import ClientTestimonials from './compoments/ClientTestimonials'

export default function HomeIndex() {
  return (
    <Box>
     <Hero/>
     {/* <FirstTime/> */}
     <FeatureProperties/>
     <PopularBoston/>
     <ContactUs/>
     {/* <FindLocalAgent/> */}
     <LookingFor/>
     <WhyUs/>
     <ClientTestimonials title="Client Testimonials"/>
     {/* <ClientStories/> */}
     <RecentBlog/>
     <WantCall/>
     <JoinUs/>
    </Box>
  )
}
