import { Button, Container, Stack, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import Toggle from "../../components/Toggle";
import Real from "./real/Real";
import Demo from "./demo/Demo";

function MyAccount() {
    return (
        <Stack m={{ xs: "1rem", sm: "2rem" }}>
            {/* <Container> */}
            <Stack
                sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "1rem", alignItems: "center", justifyContent: "space-between" }}
            >
                <Typography sx={{ fontSize: "2rem", fontWeight: "700" }}>My accounts</Typography>
                <Button variant="contained" startIcon={<AddIcon />} sx={{ textTransform: "capitalize", bgcolor: "#f3f5f7", color: "black", boxShadow: "none", px: "1.5rem" }}>
                    Open New Account
                </Button>
            </Stack>
            <Toggle
                toggleButtonGroupSx={{ mt: "1.5rem" }}
                toggleButtonSx={{ border: "none" }}
                stackSx={{ borderBottom: "1px solid #989c9e" }}
                items={["Real", "Demo", "Archived"]}
            />
            {/* <Real /> */}
            <Demo />
            {/* </Container> */}
        </Stack>
    )
}

export default MyAccount;