import { Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'
import React from 'react'
import { paymentMethodsDetails } from './paymentMethodsDetails'

function PaymentMethods() {
    return (
        <Stack mb={"3rem"} gap={"1rem"}>
            <Typography variant='h6' fontWeight={"700"} fontSize={"1.5rem"}>All payment methods</Typography>
            <Grid container size={12} spacing={4}>
                {
                    paymentMethodsDetails.map((item, i) => (
                        <Grid size={6} sx={{ border: "1px solid #c3c5c7", p: "1rem", borderRadius: ".7rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                            <Grid sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <Stack sx={{ flexDirection: "row", alignItems: "center" }}>
                                    <img src={item.img} alt='error' />
                                    <Typography>{item.methodName}</Typography>
                                </Stack>
                                <Typography fontSize={"12px"} px={"8px"} py={"2px"} borderRadius={"1rem"} color='#0e7337' bgcolor={"#f0fbf5"}>{item.specification && item.specification}</Typography>
                            </Grid>
                            <Grid>
                                {
                                    Object.entries(item?.details).map(([key, value], i) => (
                                        <Stack sx={{ flexDirection: "row", gap: ".5rem", alignItems: "center" }}>
                                            <Typography color='#c3c5c7' fontSize={"14px"}>{key}</Typography>
                                            <Typography fontSize={"14px"}>{value}</Typography>
                                        </Stack>
                                    ))
                                }
                            </Grid>
                        </Grid>
                    ))
                }
            </Grid>
        </Stack>
    )
}

export default PaymentMethods