import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';

export default function MyTextField() {
    return (
        <TextField
            label="Enter your text here"
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <ImageOutlinedIcon />
                    </InputAdornment>
                ),
            }}
        />
    );
}