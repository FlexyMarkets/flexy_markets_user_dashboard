import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

function Selector({ items }) {
    const [accountType, setAccountType] = useState('');

    const handleChange = (event) => {
        setAccountType(event.target.value);
    };

    return (
        <FormControl sx={{ minWidth: 200 }} size="small">
            <InputLabel id="demo-select-small-label">Account Type</InputLabel>
            <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={accountType}
                label="Account Type"
                onChange={handleChange}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                {
                    items.map((item, i) => (
                        <MenuItem value={item} key={i}>{item}</MenuItem>
                    ))
                }
                {/* <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem> */}
            </Select>
        </FormControl>
    );
}

export default Selector;