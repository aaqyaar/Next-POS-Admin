import { Column, OrderTable } from "components/data-table";
import * as React from "react";
import { Box, Button, Breadcrumbs, Typography } from "@mui/joy";
// icons
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";

import { Sidebar, OrderList, Header, MuiLink } from "components";
import { observer } from "mobx-react-lite";
import { Helmet } from "react-helmet-async";
import { useStores } from "models/helpers";
import { IUser } from "types/users";

export default observer(function UsersListPage() {
  //   const data: Row[] = [
  //     {
  //       id: "INV-1234",
  //       date: "Feb 3, 2023",
  //       status: "Refunded",
  //       customer: {
  //         initial: "O",
  //         name: "Olivia Ryhe",
  //         email: "olivia@email.com",
  //       },
  //     },
  //     {
  //       id: "INV-1233",
  //       date: "Feb 3, 2023",
  //       status: "Paid",
  //       customer: {
  //         initial: "S",
  //         name: "Steve Hampton",
  //         email: "steve.hamp@email.com",
  //       },
  //     },
  //     {
  //       id: "INV-1232",
  //       date: "Feb 3, 2023",
  //       status: "Refunded",
  //       customer: {
  //         initial: "C",
  //         name: "Ciaran Murray",
  //         email: "ciaran.murray@email.com",
  //       },
  //     },
  //     {
  //       id: "INV-1231",
  //       date: "Feb 3, 2023",
  //       status: "Refunded",
  //       customer: {
  //         initial: "M",
  //         name: "Maria Macdonald",
  //         email: "maria.mc@email.com",
  //       },
  //     },
  //     {
  //       id: "INV-1230",
  //       date: "Feb 3, 2023",
  //       status: "Cancelled",
  //       customer: {
  //         initial: "C",
  //         name: "Charles Fulton",
  //         email: "fulton@email.com",
  //       },
  //     },
  //     {
  //       id: "INV-1229",
  //       date: "Feb 3, 2023",
  //       status: "Cancelled",
  //       customer: {
  //         initial: "J",
  //         name: "Jay Hooper",
  //         email: "hooper@email.com",
  //       },
  //     },
  //     {
  //       id: "INV-1228",
  //       date: "Feb 3, 2023",
  //       status: "Refunded",
  //       customer: {
  //         initial: "K",
  //         name: "Krystal Stevens",
  //         email: "k.stevens@email.com",
  //       },
  //     },
  //     {
  //       id: "INV-1227",
  //       date: "Feb 3, 2023",
  //       status: "Paid",
  //       customer: {
  //         initial: "S",
  //         name: "Sachin Flynn",
  //         email: "s.flyn@email.com",
  //       },
  //     },
  //     {
  //       id: "INV-1226",
  //       date: "Feb 3, 2023",
  //       status: "Cancelled",
  //       customer: {
  //         initial: "B",
  //         name: "Bradley Rosales",
  //         email: "brad123@email.com",
  //       },
  //     },
  //     {
  //       id: "INV-1234",
  //       date: "Feb 3, 2023",
  //       status: "Paid",
  //       customer: {
  //         initial: "O",
  //         name: "Olivia Ryhe",
  //         email: "olivia@email.com",
  //       },
  //     },
  //     {
  //       id: "INV-1233",
  //       date: "Feb 3, 2023",
  //       status: "Cancelled",
  //       customer: {
  //         initial: "S",
  //         name: "Steve Hampton",
  //         email: "steve.hamp@email.com",
  //       },
  //     },
  //     {
  //       id: "INV-1232",
  //       date: "Feb 3, 2023",
  //       status: "Paid",
  //       customer: {
  //         initial: "C",
  //         name: "Ciaran Murray",
  //         email: "ciaran.murray@email.com",
  //       },
  //     },
  //     {
  //       id: "INV-1231",
  //       date: "Feb 3, 2023",
  //       status: "Refunded",
  //       customer: {
  //         initial: "M",
  //         name: "Maria Macdonald",
  //         email: "maria.mc@email.com",
  //       },
  //     },
  //     {
  //       id: "INV-1230",
  //       date: "Feb 3, 2023",
  //       status: "Paid",
  //       customer: {
  //         initial: "C",
  //         name: "Charles Fulton",
  //         email: "fulton@email.com",
  //       },
  //     },
  //     {
  //       id: "INV-1229",
  //       date: "Feb 3, 2023",
  //       status: "Cancelled",
  //       customer: {
  //         initial: "J",
  //         name: "Jay Hooper",
  //         email: "hooper@email.com",
  //       },
  //     },
  //     {
  //       id: "INV-1228",
  //       date: "Feb 3, 2023",
  //       status: "Cancelled",
  //       customer: {
  //         initial: "K",
  //         name: "Krystal Stevens",
  //         email: "k.stevens@email.com",
  //       },
  //     },
  //     {
  //       id: "INV-1227",
  //       date: "Feb 3, 2023",
  //       status: "Paid",
  //       customer: {
  //         initial: "S",
  //         name: "Sachin Flynn",
  //         email: "s.flyn@email.com",
  //       },
  //     },
  //     {
  //       id: "INV-1226",
  //       date: "Feb 3, 2023",
  //       status: "Cancelled",
  //       customer: {
  //         initial: "B",
  //         name: "Bradley Rosales",
  //         email: "brad123@email.com",
  //       },
  //     },
  //   ];

  const {
    usersStore: { getUsers, data },
  } = useStores();

  React.useEffect(() => {
    getUsers();
  }, [getUsers]);

  const columns: Column<IUser>[] = [
    {
      id: "id",
      label: "Unique ID",
      render: (row) => <Typography level="body-xs">{row.id}</Typography>,
    },
    {
      id: "name",
      label: "Name",
      render: (row) => <Typography level="body-xs">{row.name}</Typography>,
    },
    {
      id: "email",
      label: "Email Address",
      render: (row) => <Typography level="body-xs">{row.email}</Typography>,
    },
    {
      id: "phone",
      label: "Phone Number",
      render: (row) => <Typography level="body-xs">{row.phone}</Typography>,
    },
  ];
  return (
    <>
      <Helmet>
        <title>Users | Inventory App</title>
      </Helmet>

      <Box sx={{ display: "flex", minHeight: "100dvh" }}>
        <Header />
        <Sidebar />
        <Box
          component="main"
          className="MainContent"
          sx={{
            px: {
              xs: 2,
              md: 6,
            },
            pt: {
              xs: "calc(12px + var(--Header-height))",
              sm: "calc(12px + var(--Header-height))",
              md: 3,
            },
            pb: {
              xs: 2,
              sm: 2,
              md: 3,
            },
            flex: 1,
            display: "flex",
            flexDirection: "column",
            minWidth: 0,
            height: "100dvh",
            gap: 1,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Breadcrumbs
              size="sm"
              aria-label="breadcrumbs"
              separator={<ChevronRightRoundedIcon fontSize="small" />}
              sx={{ pl: 0 }}
            >
              <MuiLink to="/">
                <HomeRoundedIcon />
              </MuiLink>
              <MuiLink to={"/dashboard"}>Dashboard</MuiLink>

              <Typography color="primary" fontWeight={500} fontSize={12}>
                Users
              </Typography>
            </Breadcrumbs>
          </Box>
          <Box
            sx={{
              display: "flex",
              my: 1,
              gap: 1,
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "start", sm: "center" },
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <Typography level="h2">Users</Typography>
            <Button
              color="primary"
              startDecorator={<DownloadRoundedIcon />}
              size="sm"
            >
              Download PDF
            </Button>
          </Box>
          <OrderTable
            rows={data as any}
            columns={columns as any}
            onSort={(orderBy) => {
              console.log(`Sorting by ${orderBy}`);
              // Handle sorting logic here
            }}
            onSelectRow={(rowId) => {
              console.log(`Row ${rowId} selected`);
              // Handle row selection logic here
            }}
          />
          <OrderList />
        </Box>
      </Box>
    </>
  );
});
