import { Button, Container, Stack, Typography } from "@mui/material";
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Toggle from "../../components/Toggle";
import Real from "./real/Real";
import Demo from "./demo/Demo";

function MyAccount() {

    const [activeAccountType, setActiveAccountType] = useState(<Real />);
    const [activeButtonName, setActiveButtonName] = useState("Real")

    function handleAccountToggle(newAlignment) {

        setActiveButtonName(newAlignment)
        console.log(newAlignment)
        switch (newAlignment) {
            case "Real":
                setActiveAccountType(<Real />);
                break;
            case "Demo":
                setActiveAccountType(<Demo />);
                break;
            case "Archived":
                setActiveAccountType("Archived");
                break;
            default:
                console.log("Unknown toggle value:", newAlignment);
        }
    }

    return (
        <Stack m={{ xs: "1rem", sm: "2rem" }}>
            <Container>
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
                    toggleButtonSx={{
                        borderTop: "none",
                        borderLeft: "none",
                        borderRight: "none",
                        borderRadius: "0"
                    }}
                    stackSx={{ borderBottom: "1px solid #989c9e" }}
                    items={["Real", "Demo", "Archived"]}
                    onChange={(event, newAlignment) => handleAccountToggle(newAlignment)}
                    active={activeButtonName}
                />
                {activeAccountType}
            </Container>
        </Stack>
    )
}

export default MyAccount;