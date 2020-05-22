import React from 'react'
import ProfileCard from '../Comps/ProfileCard.jsx'
import { Grid } from '@material-ui/core';
import profileInfo from '../testData'

const Profiles = () => {
    const getProfileInfo = profileObj => {
        return(
            <Grid item xs={12} sm={3}>
                <ProfileCard {...profileObj} />
            </Grid>
        )
    }
    
    return (
     <Grid container spacing={2}>
         {profileInfo.map(profileObj => getProfileInfo(profileObj))}
    </Grid>
 )

}

export default Profiles;