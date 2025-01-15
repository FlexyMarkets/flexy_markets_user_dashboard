import { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Stack } from '@mui/material';

function Toggle({ margine, items }) {
    const [alignment, setAlignment] = useState('web');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <Stack borderBottom={"1px solid black"}>
            <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
                sx={{ mt: { margine }, color: "#989c9e" }}
            >
                {
                    items?.map((item, i) => (
                        <ToggleButton value="Real" sx={{ textTransform: "capitalize", border: "none", fontSize: "1rem" }} key={i}>{item}</ToggleButton>
                    ))
                }
            </ToggleButtonGroup>
        </Stack>
    );
}

export default Toggle;