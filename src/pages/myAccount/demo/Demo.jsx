import { Stack } from "@mui/material";
import Selector from "../../../components/Selector";
import Toggle from "../../../components/Toggle";
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import AccountDetailsAccordian from "../accountDetailsAccordian/AccountDetailsAccordian.jsx";
import { demoAccountDetailsData, demoAccountDetailsID } from "./demoAccountDetailsData.js";
import { totalAmountAndButtons } from "./demoAccountDetailsData.js";
import AccountTypeAndPattern from "../AccountTypeAndPattern.jsx";

function Demo() {
    console.log(demoAccountDetailsData)
    return (
        <Stack>
            <AccountTypeAndPattern />
            <AccountDetailsAccordian
                accountDetailsData={demoAccountDetailsData}
                accountDetailsID={demoAccountDetailsID}
                totalAmountAndButtons={totalAmountAndButtons}
            />
        </Stack>
    )
}

export default Demo;