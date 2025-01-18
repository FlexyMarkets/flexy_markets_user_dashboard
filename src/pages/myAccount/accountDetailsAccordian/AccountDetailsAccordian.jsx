import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button, Stack, Box, Divider } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import ModalBox from '../../../components/ModalBox';


function AccountDetailsAccordian({ accountDetailsData, accountDetailsID, totalAmountAndButtons }) {
    return (
        <Stack my="3rem">
            <Accordion
                defaultExpanded
                sx={{
                    boxShadow: "none",
                    p: "1rem",
                    border: "1px solid #afb5b9",
                }}
            >
                <Stack gap=".7rem">
                    <Stack
                        sx={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Stack
                            sx={{
                                flexDirection: "row",
                                fontSize: "12px",
                                gap: ".5rem",
                            }}
                        >
                            <Typography
                                fontSize={"12px"}
                                borderRadius={".2rem"}
                                bgcolor={"#e8f6ee"}
                                px={".5rem"}
                                py={".1rem"}
                                color="#29834d"
                            >
                                Demo
                            </Typography>
                            <Typography
                                color="black"
                                fontSize={"12px"}
                                borderRadius={".2rem"}
                                bgcolor={"#f3f5f7"}
                                px={".5rem"}
                                py={".1rem"}
                            >
                                MT5
                            </Typography>
                            <Typography
                                color="black"
                                fontSize={"12px"}
                                borderRadius={".2rem"}
                                bgcolor={"#f3f5f7"}
                                px={".5rem"}
                                py={".1rem"}
                            >
                                Standard
                            </Typography>
                            <Typography fontSize={"14px"} fontWeight={"700"}>
                                # 239177571
                            </Typography>
                        </Stack>
                        <AccordionSummary sx={{ width: "auto", p: "0" }}>
                            <ExpandMoreIcon />
                        </AccordionSummary>
                    </Stack>
                    {totalAmountAndButtons && (
                        <Stack
                            direction="row"
                            alignItems="center"
                            justifyContent="space-between"
                            flexWrap="wrap"
                        >
                            <Typography variant="h4" fontWeight={"700"}>
                                {totalAmountAndButtons[0].total}.91 USD
                            </Typography>
                            <Stack direction="row" flexWrap="wrap" spacing={1}>
                                {totalAmountAndButtons[1].buttons.map((btn, i) => (
                                    <Button
                                        key={i}
                                        variant="contained"
                                        sx={{
                                            textTransform: "capitalize",
                                            bgcolor: !i ? "#17433d" : "#f3f5f7",
                                            color: !i ? "white" : "black",
                                            boxShadow: "none !important",
                                            minWidth: i === 2 ? "2.5rem" : "auto",
                                        }}
                                    >
                                        {btn.name ? (btn.modal ? <ModalBox startIcon={btn.name && btn.icon} btnName={btn.name} btnSx={{ color: !i ? "white" : "black", }} /> : btn.name) : btn.icon}
                                    </Button>
                                ))}
                            </Stack>
                        </Stack>
                    )}
                </Stack>
                <AccordionDetails
                    sx={{
                        p: "0",
                        mt: "1.5rem",
                        borderRadius: "8px",
                        bgcolor: "#f4f6f7",
                    }}
                >
                    {accountDetailsData &&
                        Object.entries(accountDetailsData).map(([key, value], i) => (
                            <Stack
                                key={key}
                                sx={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    p: "0.5rem 1rem",
                                    borderBottom: i !== 3 && "1px dashed gray",
                                }}
                            >
                                <Typography color="black">{key}</Typography>
                                <Typography color="black">{value}</Typography>
                            </Stack>
                        ))}
                </AccordionDetails>
                <AccordionDetails
                    sx={{
                        p: "0",
                        mt: "1.5rem",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                    }}
                >
                    <Stack
                        sx={{
                            flexDirection: "row",
                            flexWrap: "wrap",
                            gap: "1rem",
                        }}
                    >
                        {accountDetailsID &&
                            accountDetailsID.map((ele, i) => (
                                <Stack
                                    key={i}
                                    sx={{ flexDirection: "row", gap: ".5rem" }}
                                >
                                    <Typography
                                        color="#afb5b9"
                                        fontSize={"14px"}
                                    >
                                        {ele.type}:
                                    </Typography>
                                    <Typography fontSize={"14px"}>
                                        {ele.id}
                                    </Typography>
                                    <Typography>{ele.icon}</Typography>
                                </Stack>
                            ))}
                    </Stack>
                    <Divider orientation="vertical" variant="middle" />
                    <Button
                        variant="contained"
                        startIcon={<EditIcon />}
                        sx={{
                            textTransform: "capitalize",
                            bgcolor: "#f3f5f7",
                            color: "black",
                            boxShadow: "none !important",
                            mt: ".5rem",
                        }}
                    >
                        Change trading password
                    </Button>
                </AccordionDetails>
            </Accordion>
        </Stack>
    );
}

export default AccountDetailsAccordian;