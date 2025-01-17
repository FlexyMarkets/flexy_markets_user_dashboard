import { Stack, Typography, Button } from "@mui/material";
import AccountDetailsAccordian from "../accountDetailsAccordian/AccountDetailsAccordian"
import { realAccountDetailsData, realAccountDetailsID, totalAmountAndButtons } from "./realAccountDetailsData";
import AccountTypeAndPattern from "../AccountTypeAndPattern";

function Real() {
    return (
        <Stack>
            <AccountTypeAndPattern />
            {/* <Stack sx={{ minHeight: "50vh", mt: "2rem", justifyContent: "center", alignItems: "center", gap: "1rem" }}>
                <Icon
                    icon="mingcute:empty-box-line"
                    height="5rem"
                    width="5rem"
                    color="#17433d"
                />
                <Typography>You don’t have any real accounts</Typography>
                <Button variant="contained" sx={{ textTransform: "capitalize", bgcolor: "#17433d", color: "white", boxShadow: "none", px: "1.5rem" }}>
                    Open New Account
                </Button>
            </Stack> */}
            <AccountDetailsAccordian
                accountDetailsData={realAccountDetailsData}
                accountDetailsID={realAccountDetailsID}
                totalAmountAndButtons={totalAmountAndButtons}
            />
        </Stack>
    )
}

export default Real;