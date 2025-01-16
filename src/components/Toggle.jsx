import { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Stack } from '@mui/material';

function Toggle({ toggleButtonSx, items, toggleButtonGroupSx, stackSx }) {
    const [alignment, setAlignment] = useState('web');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <Stack sx={stackSx}>
            <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
                sx={{ color: "#989c9e", ...toggleButtonGroupSx }}
            >
                {
                    items?.map((item, i) => (
                        <ToggleButton value="Real" sx={{ textTransform: "capitalize", fontSize: "1rem", ...toggleButtonSx }} key={i}>{item}</ToggleButton>
                    ))
                }
            </ToggleButtonGroup>
        </Stack>
    );
}

export default Toggle;