import { Stack, Typography, Button } from "@mui/material";
import Toggle from "../../../components/Toggle";
import Selector from "../../../components/Selector";
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import { Icon } from '@iconify/react';

function Real() {
    return (
        <Stack>
            <Stack sx={{ flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: "1rem", justifyContent: "space-between", mt: "2rem" }}>
                <Selector items={["Newest", "Oldest", "Free margin", "Nickname"]} />
                <Toggle items={[<ViewListIcon />, <ViewModuleIcon />]} />
            </Stack>
            <Stack sx={{ minHeight: "50vh", mt: "2rem", justifyContent: "center", alignItems: "center", gap: "1rem" }}>
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
            </Stack>
        </Stack>
    )
}

export default Real;