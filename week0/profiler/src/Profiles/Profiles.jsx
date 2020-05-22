import React from 'react'
import ProfileCard from '../Comps/ProfileCard.jsx'
import { Grid } from '@material-ui/core';

const Profiles = () => {
 return (
     <Grid container spacing={4}>
         <Grid item xs={12} sm={8}>
            <ProfileCard avatarSrc="WL" 
                            title="William & Linda" 
                            occupation="Software Engineer • @Zaio"
                            imgSrc="https://images.pexels.com/photos/737573/pexels-photo-737573.jpeg?cs=srgb&dl=animal-avatar-bark-barking-737573.jpg&fm=jpg"
                            bio=" This impressive paella is a perfect party 
                            dish and a fun meal to cook together with 
                            your guests. Add 1 cup of frozen peas along 
                            with the mussels, if you like." />
        </Grid>
    </Grid>
 )

}

export default Profiles;