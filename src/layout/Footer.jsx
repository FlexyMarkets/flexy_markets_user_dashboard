import Grid from '@mui/material/Grid2'
import { footerData, footerLinkData } from './footerData';
import React from 'react'
import { Stack, Typography } from '@mui/material';

function Footer() {
    return (
        <Stack mx={{ xs: "1rem", sm: "2rem" }}>
            <Grid container size={12} spacing={{ xs: 4, sm: 8 }} display="flex" flexWrap="wrap">
                <Grid size={{ sm: 8 }}>
                    {
                        footerData.map((items, i) => (
                            <Typography key={i} fontSize="12px" mb={".4rem"}>{items}</Typography>
                        ))
                    }
                </Grid>
                <Grid size={{ sm: 4 }}>
                    {
                        footerLinkData.map((linkItems, i) => (
                            <Typography key={i} fontSize="13px" color='#1172cc' mb={".3rem"}>{linkItems}</Typography>
                        ))
                    }
                </Grid>
            </Grid>
            <Stack my={"2rem"} flexDirection={"row"} justifyContent={"space-between"}>
                <Typography fontSize="13px">2.7.6-5-g10504d530</Typography>
                <Typography fontSize="13px">© 2025. Flexy Markets</Typography>
            </Stack>
        </Stack>
    )
}

export default Footer;