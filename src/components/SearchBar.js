import React from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem, TextField } from '@mui/material';

const SearchBar = ({ selectedMonth, searchQuery, months, onMonthChange, onSearchChange }) => (
  <Box sx={{ mb: 4, display: 'flex', gap: 2 }}>
    <FormControl sx={{ minWidth: 200 }}>
      <InputLabel>Select Month</InputLabel>
      <Select
        value={selectedMonth}
        label="Select Month"
        onChange={onMonthChange}
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(122, 86, 214, 0.2)',
          }
        }}
      >
        {months.map((month) => (
          <MenuItem key={month.value} value={month.value}>
            {month.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
    <TextField
      label="Search Transactions"
      variant="outlined"
      value={searchQuery}
      onChange={onSearchChange}
      placeholder="Search by title, description, or price"
      sx={{ 
        flexGrow: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'rgba(122, 86, 214, 0.2)',
          },
        },
        '& .MuiInputLabel-root': {
          color: 'rgba(255, 255, 255, 0.7)',
        },
        '& .MuiInputBase-input': {
          color: 'white',
        }
      }}
    />
  </Box>
);

export default SearchBar;