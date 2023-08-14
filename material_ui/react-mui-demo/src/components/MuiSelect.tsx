import { Box, Typography, TextField, MenuItem } from "@mui/material";

import React, { useState } from "react";

export const MuiSelect = () => {
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value as string);
  };

  const handleChangeMultiple = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <>
      <Typography variant="h3">{country}</Typography>
      <Box width={"250px"}>
        <TextField
          label="Select country"
          select
          value={country}
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value="India">India</MenuItem>
          <MenuItem value="USA">USA</MenuItem>
          <MenuItem value="Australia">Australia</MenuItem>
        </TextField>
        <Typography variant="h3">{countries}</Typography>
        <TextField
          label="Select country"
          select
          value={countries}
          onChange={handleChangeMultiple}
          fullWidth
          SelectProps={{
            multiple: true,
          }}
        >
          <MenuItem value="India">India</MenuItem>
          <MenuItem value="USA">USA</MenuItem>
          <MenuItem value="Australia">Australia</MenuItem>
        </TextField>
      </Box>
    </>
  );
};
