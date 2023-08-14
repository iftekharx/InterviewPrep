import { Stack, TextField, InputAdornment } from "@mui/material";
import React, { useState } from "react";

export const MuiTextFields = () => {
  const [value, setValue] = useState("");

  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" />
        <TextField variant="filled" label="Name" />
        <TextField variant="standard" label="Name" />
      </Stack>

      <Stack direction={"row"} spacing={2}>
        <TextField label="Small secondary" size="small" color="secondary" />
      </Stack>

      <Stack direction={"row"} spacing={2}>
        <TextField label="Form Input" required />
        <TextField
          type="password"
          label="Password"
          onChange={(e) => setValue(e.target.value)}
          helperText={
            !value ? "Required" : "Do not share your password with anyone"
          }
          error={!value}
        />
        <TextField
          type="password"
          label="Form Input"
          helperText="Do not share your password with anyone"
          disabled
        />
        <TextField label="Read only" InputProps={{ readOnly: true }} />
      </Stack>

      <Stack direction={"row"} spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
        <TextField label="Amount" />
      </Stack>
    </Stack>
  );
};
