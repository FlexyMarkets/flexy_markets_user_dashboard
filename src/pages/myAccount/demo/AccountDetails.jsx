import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button, Stack } from '@mui/material';
import { Icon } from '@iconify/react';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

function AccountDetails() {
    return (
        <Stack mt="3rem">
            <Accordion defaultExpanded sx={{ boxShadow: "none", border: "1px solid black", p: "1rem" }}>
                <Stack gap=".7rem">
                    <Stack
                        sx={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}
                    >
                        <Stack sx={{
                            flexDirection: "row",
                            fontSize: "12px",
                            gap: ".5rem"
                        }}>
                            <Typography fontSize={"12px"} borderRadius={".2rem"} bgcolor={"#e8f6ee"} px={".5rem"} py={".1rem"} color='#29834d'>Demo</Typography>
                            <Typography fontSize={"12px"} borderRadius={".2rem"} bgcolor={"#f3f5f7"} px={".5rem"} py={".1rem"}>MT5</Typography>
                            <Typography fontSize={"12px"} borderRadius={".2rem"} bgcolor={"#f3f5f7"} px={".5rem"} py={".1rem"}>Standard</Typography>
                            <Typography fontSize={"14px"} fontWeight={"700"}># 239177571</Typography>
                        </Stack>
                        <AccordionSummary sx={{ width: "auto", p: "0" }}><ExpandMoreIcon /></AccordionSummary>
                    </Stack>
                    <Stack
                        sx={{
                            flexDirection: "row",
                            flexWrap: "wrap",
                            gap: "1rem",
                            alignItems: "center",
                            justifyContent: "space-between"
                        }}
                    >
                        <Typography variant='h4' fontWeight={"700"}>10,001<Typography component="span">.91 USD</Typography></Typography>
                        <Stack sx={{ flexDirection: "row", gap: ".5rem" }}>
                            <Button
                                variant="contained"
                                startIcon={<Icon icon="material-symbols-light:candlestick-chart-outline-rounded" />}
                                sx={{ textTransform: "capitalize", bgcolor: "#17433d", color: "white", boxShadow: "none" }}
                            >
                                Trade
                            </Button>
                            <Button
                                variant="contained"
                                startIcon={<ArrowCircleDownIcon />}
                                sx={{ textTransform: "capitalize", bgcolor: "#f3f5f7", color: "black", boxShadow: "none" }}
                            >
                                Set Balance
                            </Button>
                        </Stack>
                    </Stack>
                </Stack>
                <AccordionDetails sx={{ p: "0", mt: "1rem", border: "1px solid black" }}>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Stack>
    );
}

export default AccountDetails;