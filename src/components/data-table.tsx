/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import { ColorPaletteProp } from "@mui/joy/styles";
import {
  Avatar,
  Box,
  Button,
  Chip,
  Divider,
  FormControl,
  FormLabel,
  Link,
  Input,
  Modal,
  ModalDialog,
  ModalClose,
  Select,
  Option,
  Table,
  Sheet,
  Checkbox,
  IconButton,
  Typography,
  Menu,
  MenuButton,
  MenuItem,
  Dropdown,
} from "@mui/joy";
import { iconButtonClasses } from "@mui/joy/IconButton";
// icons
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import BlockIcon from "@mui/icons-material/Block";
import AutorenewRoundedIcon from "@mui/icons-material/AutorenewRounded";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import { AutorenewRounded, Block, CheckRounded } from "@mui/icons-material";

type Customer = {
  initial: string;
  name: string;
  email: string;
};

export type Row = {
  id: string;
  date: string;
  status: string;
  customer: Customer;
};

export type Column<T> = {
  id: string; // Using string type for flexibility
  label: string;
  render: (row: T) => JSX.Element;
};

type OrderTableProps = {
  rows: Row[];
  columns: Column<Row>[];
  onSort?: (orderBy: string) => void; // Updated to string for flexibility
  onSelectRow?: (rowId: string) => void;
};

type Order = "asc" | "desc";

export function OrderTable({
  rows,
  columns,
  onSort,
  onSelectRow,
}: OrderTableProps) {
  const [order, setOrder] = React.useState<Order>("desc");
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [open, setOpen] = React.useState(false);
  const renderFilters = () => (
    <React.Fragment>
      <FormControl size="sm">
        <FormLabel>Status</FormLabel>
        <Select
          size="sm"
          placeholder="Filter by status"
          slotProps={{ button: { sx: { whiteSpace: "nowrap" } } }}
        >
          <Option value="paid">Paid</Option>
          <Option value="pending">Pending</Option>
          <Option value="refunded">Refunded</Option>
          <Option value="cancelled">Cancelled</Option>
        </Select>
      </FormControl>

      <FormControl size="sm">
        <FormLabel>Category</FormLabel>
        <Select size="sm" placeholder="All">
          <Option value="all">All</Option>
          <Option value="refund">Refund</Option>
          <Option value="purchase">Purchase</Option>
          <Option value="debit">Debit</Option>
        </Select>
      </FormControl>

      <FormControl size="sm">
        <FormLabel>Customer</FormLabel>
        <Select size="sm" placeholder="All">
          <Option value="all">All</Option>
          <Option value="olivia">Olivia Rhye</Option>
          <Option value="steve">Steve Hampton</Option>
          <Option value="ciaran">Ciaran Murray</Option>
          <Option value="marina">Marina Macdonald</Option>
          <Option value="charles">Charles Fulton</Option>
          <Option value="jay">Jay Hoper</Option>
        </Select>
      </FormControl>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <Sheet
        className="SearchAndFilters-mobile"
        sx={{
          display: {
            xs: "flex",
            sm: "none",
          },
          my: 1,
          gap: 1,
        }}
      >
        <Input
          size="sm"
          placeholder="Search"
          startDecorator={<SearchIcon />}
          sx={{ flexGrow: 1 }}
        />
        <IconButton
          size="sm"
          variant="outlined"
          color="neutral"
          onClick={() => setOpen(true)}
        >
          <FilterAltIcon />
        </IconButton>
        <Modal open={open} onClose={() => setOpen(false)}>
          <ModalDialog aria-labelledby="filter-modal" layout="fullscreen">
            <ModalClose />
            <Typography id="filter-modal" level="h2">
              Filters
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Sheet sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {renderFilters()}
              <Button color="primary" onClick={() => setOpen(false)}>
                Submit
              </Button>
            </Sheet>
          </ModalDialog>
        </Modal>
      </Sheet>
      <Box
        className="SearchAndFilters-tabletUp"
        sx={{
          borderRadius: "sm",
          py: 2,
          display: {
            xs: "none",
            sm: "flex",
          },
          flexWrap: "wrap",
          gap: 1.5,
          "& > *": {
            minWidth: {
              xs: "120px",
              md: "160px",
            },
          },
        }}
      >
        <FormControl sx={{ flex: 1 }} size="sm">
          <FormLabel>Search for user</FormLabel>
          <Input
            size="sm"
            placeholder="Search"
            startDecorator={<SearchIcon />}
          />
        </FormControl>
        {renderFilters()}
      </Box>

      <Sheet
        className="OrderTableContainer"
        variant="outlined"
        sx={{
          display: { xs: "none", sm: "initial" },
          width: "100%",
          borderRadius: "sm",
          flexShrink: 1,
          overflow: "auto",
          minHeight: 0,
        }}
      >
        <Table
          aria-labelledby="tableTitle"
          stickyHeader
          hoverRow
          sx={{
            "--TableCell-headBackground":
              "var(--joy-palette-background-level1)",
            "--Table-headerUnderlineThickness": "1px",
            "--TableRow-hoverBackground":
              "var(--joy-palette-background-level1)",
            "--TableCell-paddingY": "4px",
            "--TableCell-paddingX": "8px",
          }}
        >
          <thead>
            <tr>
              <th
                style={{ width: 48, textAlign: "center", padding: "12px 6px" }}
              >
                <Checkbox
                  size="sm"
                  indeterminate={
                    selected.length > 0 && selected.length !== rows.length
                  }
                  checked={selected.length === rows.length}
                  onChange={(event) => {
                    setSelected(
                      event.target.checked ? rows.map((row) => row.id) : []
                    );
                  }}
                  color={
                    selected.length > 0 || selected.length === rows.length
                      ? "primary"
                      : undefined
                  }
                  sx={{ verticalAlign: "text-bottom" }}
                />
              </th>
              {columns.map((column, index) => (
                <th key={column.id} style={{ width: 140, padding: "12px 6px" }}>
                  {index === 0 ? (
                    <Link
                      underline="none"
                      color="primary"
                      component="button"
                      onClick={() => setOrder(order === "asc" ? "desc" : "asc")}
                      fontWeight="lg"
                      endDecorator={<ArrowDropDownIcon />}
                      sx={{
                        "& svg": {
                          transition: "0.2s",
                          transform:
                            order === "desc"
                              ? "rotate(0deg)"
                              : "rotate(180deg)",
                        },
                      }}
                    >
                      {column.label}
                    </Link>
                  ) : (
                    column.label
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td style={{ textAlign: "center", width: 120 }}>
                  <Checkbox
                    size="sm"
                    checked={selected.includes(row.id)}
                    color={selected.includes(row.id) ? "primary" : undefined}
                    onChange={(event) => {
                      setSelected((ids) =>
                        event.target.checked
                          ? ids.concat(row.id)
                          : ids.filter((itemId) => itemId !== row.id)
                      );
                    }}
                    slotProps={{ checkbox: { sx: { textAlign: "left" } } }}
                    sx={{ verticalAlign: "text-bottom" }}
                  />
                </td>
                {columns.map((column) => (
                  <td key={column.id}>{column.render(row)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </Sheet>

      <Box
        className="Pagination-laptopUp"
        sx={{
          pt: 2,
          gap: 1,
          [`& .${iconButtonClasses.root}`]: { borderRadius: "50%" },
          display: {
            xs: "none",
            md: "flex",
          },
        }}
      >
        <Button
          size="sm"
          variant="outlined"
          color="neutral"
          startDecorator={<KeyboardArrowLeftIcon />}
        >
          Previous
        </Button>

        <Box sx={{ flex: 1 }} />
        {["1", "2", "3", "…", "8", "9", "10"].map((page) => (
          <IconButton
            key={page}
            size="sm"
            variant={Number(page) ? "outlined" : "plain"}
            color="neutral"
          >
            {page}
          </IconButton>
        ))}
        <Box sx={{ flex: 1 }} />

        <Button
          size="sm"
          variant="outlined"
          color="neutral"
          endDecorator={<KeyboardArrowRightIcon />}
        >
          Next
        </Button>
      </Box>
    </React.Fragment>
  );
}

// Usage:

export const columns: Column<Row>[] = [
  {
    id: "id",
    label: "Invoice",
    render: (row) => <Typography level="body-xs">{row.id}</Typography>,
  },
  {
    id: "date",
    label: "Date",
    render: (row) => <Typography level="body-xs">{row.date}</Typography>,
  },
  {
    id: "status",
    label: "Status",
    render: (row) => (
      <Chip
        variant="soft"
        size="sm"
        startDecorator={
          {
            Paid: <CheckRounded />,
            Refunded: <AutorenewRounded />,
            Cancelled: <Block />,
          }[row.status]
        }
        color={
          {
            Paid: "success",
            Refunded: "neutral",
            Cancelled: "danger",
          }[row.status] as ColorPaletteProp
        }
      >
        {row.status}
      </Chip>
    ),
  },
  {
    id: "customer.name",
    label: "Customer Name",
    render: (row) => (
      <Typography level="body-xs">{row.customer.name}</Typography>
    ),
  },
];
