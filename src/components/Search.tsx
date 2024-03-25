import { styled } from "@mui/material/styles";
import { TextField, InputAdornment, Typography } from "@mui/material";
// assets
import { Search as SearchIcon } from "@mui/icons-material";

const Search = () => {
  return (
    <TextField
      fullWidth
      id="outlined-basic"
      label="Filter by product name"
      variant="outlined"
      sx={{
        ".MuiOutlinedInput-root": {
          borderRadius: "24px",
        },
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};
export default Search;
