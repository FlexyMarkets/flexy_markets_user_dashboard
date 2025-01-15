import { Button, Container, Stack, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import Toggle from "../../components/Toggle";
import Selector from "../../components/Selector";
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';

function MyAccount() {
    return (
        <Stack my={"2rem"}>
            <Container>
                <Stack
                    sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}
                >
                    <Typography sx={{ fontSize: "2rem", fontWeight: "700" }}>My accounts</Typography>
                    <Button variant="contained" startIcon={<AddIcon />} sx={{ textTransform: "capitalize", bgcolor: "#f3f5f7", color: "black", boxShadow: "none", px: "1.5rem" }}>
                        Open New Account
                    </Button>
                </Stack>
                <Toggle margine={"3rem"} items={["Main", "Demo"]} />
                <Stack sx={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <Selector />
                    <Toggle items={[<ViewListIcon />, <ViewModuleIcon />]} />
                </Stack>
            </Container>
        </Stack>
    )
}

export default MyAccount;