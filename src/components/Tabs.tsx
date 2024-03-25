import * as React from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

interface StyledTabProps {
  label: string;
}

const AntTabs = styled(Tabs)({
  "& .MuiTabs-flexContainer": {
    justifyContent: "center",
  },
  "& .MuiTabs-indicator": {
    backgroundColor: "transparent",
  },
});

const AntTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  textTransform: "none",
  minWidth: 0,
  [theme.breakpoints.up("sm")]: {
    minWidth: 0,
  },
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: "12px",
  color: "rgba(0, 0, 0, 0.85)",
  backgroundColor: " #F5F6FA",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    color: "#40a9ff",
    opacity: 1,
  },
  "&.Mui-selected": {
    color: "#fff",
    backgroundColor: "#4129FA",
    fontWeight: theme.typography.fontWeightMedium,
  },
  "&.Mui-focusVisible": {
    backgroundColor: "#d1eaff",
  },
  "&:first-child ": {
    borderBottomLeftRadius: "4px",
    borderTopLeftRadius: "4px",
  },
  "&:last-child ": {
    borderBottomRightRadius: "4px",
    borderTopRightRadius: "4px",
  },
}));

export default function CustomizedTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ bgcolor: "#fff" }}>
        <AntTabs value={value} onChange={handleChange} aria-label="ant example">
          <AntTab label="Transactions" />
          <AntTab label="Dollar Value" />
          <AntTab label="Quantity" />
          <AntTab label="Containers" />
          <AntTab label="Weight" />
        </AntTabs>
        {/* <Box sx={{ p: 3 }} /> */}
      </Box>
    </Box>
  );
}
