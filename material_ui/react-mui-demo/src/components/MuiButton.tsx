import {
  Button,
  Stack,
  IconButton,
  ButtonGroup,
  ToggleButton,
  Typography,
  ToggleButtonGroup,
} from "@mui/material";
import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";

export const MuiButton = () => {
  const [formats, setFormats] = useState<string[]>([]);
  const [singleFormat, setSingleFormat] = useState<string | null>(null);

  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormats: string[]
  ) => {
    setFormats(updatedFormats);
  };

  const handleFormatChangeSingle = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormats: string | null
  ) => {
    setSingleFormat(updatedFormats);
  };

  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text" href="https://google.com">
          Text
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
      </Stack>

      <Stack display={"block"} spacing={2} direction={"row"}>
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </Stack>

      <Stack spacing={2} direction={"row"}>
        <Button variant="contained" startIcon={<SendIcon />} disableRipple>
          Send
        </Button>
        <Button variant="contained" endIcon={<SendIcon />} disableElevation>
          Send
        </Button>
        <IconButton aria-label="send" color="success" size="small">
          <SendIcon />
        </IconButton>
      </Stack>

      <Stack direction={"row"}>
        <ButtonGroup variant="contained">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction={"row"}>
        <ButtonGroup
          variant="outlined"
          orientation="vertical"
          size="small"
          color="secondary"
          aria-aria-label="alignment button group"
        >
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction={"row"}>
        <Typography variant="h3" color={"success"}>
          {formats.map((format) => format + ", ")}
        </Typography>
      </Stack>

      <Stack direction={"row"}>
        <ToggleButtonGroup
          aria-label="text-formatting"
          value={formats}
          onChange={handleFormatChange}
        >
          <ToggleButton value={"bold"} aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value={"italic"} aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value={"underline"} aria-label="underline">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      <Stack direction={"row"}>
        <Typography variant="h3" color={"success"}>
          {singleFormat}
        </Typography>
      </Stack>

      <Stack direction={"row"}>
        <ToggleButtonGroup
          aria-label="text-formatting"
          value={singleFormat}
          onChange={handleFormatChangeSingle}
          exclusive
        >
          <ToggleButton value={"bold"} aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value={"italic"} aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value={"underline"} aria-label="underline">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};
