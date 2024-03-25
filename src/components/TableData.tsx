import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import { dummyData } from "../utils/dumpData";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    border: "1px solid gray",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
  border: "1px solid #000",
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  border: 1,
}));

export default function TableData() {
  return (
    <Stack
      spacing={2}
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">
                Product
                <UnfoldMoreIcon sx={{ verticalAlign: "middle" }} />
              </StyledTableCell>
              <StyledTableCell align="center">
                Transactions
                <UnfoldMoreIcon sx={{ verticalAlign: "middle" }} />
              </StyledTableCell>
              <StyledTableCell align="center">
                US Dollar Value
                <UnfoldMoreIcon sx={{ verticalAlign: "middle" }} />
              </StyledTableCell>
              <StyledTableCell align="center">
                Quantity
                <UnfoldMoreIcon sx={{ verticalAlign: "middle" }} />
              </StyledTableCell>
              <StyledTableCell align="center">
                Containers
                <UnfoldMoreIcon sx={{ verticalAlign: "middle" }} />
              </StyledTableCell>
              <StyledTableCell align="center">
                Weight
                <UnfoldMoreIcon sx={{ verticalAlign: "middle" }} />
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dummyData.map((row) => (
              <StyledTableRow key={row.productName}>
                <StyledTableCell component="th" scope="row">
                  {row.productName}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.transactions}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.usDollarValue}
                </StyledTableCell>
                <StyledTableCell align="center">{row.quantity}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.containers}
                </StyledTableCell>
                <StyledTableCell align="center">{row.weight}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination count={10} variant="outlined" shape="rounded" />
    </Stack>
  );
}
