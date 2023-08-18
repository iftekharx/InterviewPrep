import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  FormHelperText,
  RadioGroup,
  Radio,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

export const MuiRadioButton = () => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Box>
      <Typography variant="h3">{value}</Typography>
      <FormControl>
        <FormLabel>Years of experience</FormLabel>
        <RadioGroup
          name="job-experience-group"
          aria-labelledby="job-experience-group-label"
          onChange={handleChange}
          row
        >
          <FormControlLabel
            control={<Radio size="small" color="success" />}
            label="0-2"
            value={"0-2"}
          />
          <FormControlLabel control={<Radio />} label="3-5" value={"3-5"} />
          <FormControlLabel control={<Radio />} label="6-10" value={"6-10"} />
        </RadioGroup>
        <FormHelperText>Invalid selection</FormHelperText>
      </FormControl>
    </Box>
  );
};
