import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { InputLabel } from '@mui/material';

export default function ButtonGroupCustom({ selectButton, setSelectButton, setBarVariables, barVariableNames }) {



    const handleChange = (event) => {
        const currentParameter = event.target.value;
        setBarVariables(barVariableNames[parseInt(currentParameter)])
        setSelectButton(currentParameter)
    };



    return (
        <div style={{ width: '100%' }}>
            <FormControl sx={{ m: 1, width: "40%", color: '#000000' }}>
                <InputLabel >Change Parameter
                </InputLabel>
                <Select

                    value={selectButton}
                    onChange={handleChange}
                    label="Change Parameter"
                >

                    <MenuItem
                        value='0'
                    >Region VS Relevance
                    </MenuItem>
                    <MenuItem
                        value='1'
                    >
                        Region VS Intensity
                    </MenuItem>
                    <MenuItem
                        value='2'
                    >
                        Region VS Likelihood
                    </MenuItem>
                    <MenuItem
                        value='3'
                    >
                        Region VS Start Year
                    </MenuItem>
                    <MenuItem
                        value='4'
                    >
                        Region VS End Year
                    </MenuItem>
                    <MenuItem
                        value='5'
                    >
                        Topic VS Relevance
                    </MenuItem>
                    <MenuItem
                        value='6'
                    >
                        Topic VS Intensity
                    </MenuItem>
                    <MenuItem
                        value='7'
                    >
                        Topic VS Likelihood
                    </MenuItem>
                    <MenuItem
                        value='8'
                    >
                        Topic VS Start Year
                    </MenuItem>
                    <MenuItem
                        value='9'
                    >
                        Topic VS End Year
                    </MenuItem>

                </Select>
            </FormControl>

        </div>
    );
}