import { Stack } from "@mui/material";
import Selector from "../../../components/Selector";
import Toggle from "../../../components/Toggle";
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import AccountDetails from "./AccountDetails";

function Demo() {
    return (
        <Stack>
            <Stack sx={{ flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: "1rem", justifyContent: "space-between", mt: "2rem" }}>
                <Selector items={["Newest", "Oldest", "Free margin", "Nickname"]} />
                <Toggle items={[<ViewListIcon />, <ViewModuleIcon />]} />
            </Stack>
            <AccountDetails />
        </Stack>
    )
}

export default Demo;