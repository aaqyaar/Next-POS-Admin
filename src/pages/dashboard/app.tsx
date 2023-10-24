import * as React from "react";
import {
  Box,
  Typography,
  Card,
  Grid,
  FormControl,
  Select,
  Option,
} from "@mui/joy";
import CardContent from "@mui/joy/CardContent";
import CircularProgress from "@mui/joy/CircularProgress";
import SvgIcon from "@mui/joy/SvgIcon";
import useScript from "hooks/useScript";
import { Sidebar, Header } from "components";
import { observer } from "mobx-react-lite";
import Chart from "react-apexcharts";
import { Helmet } from "react-helmet-async";

const useEnhancedEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;

export default observer(function DashboardApp() {
  const status = useScript(`https://unpkg.com/feather-icons`);

  useEnhancedEffect(() => {
    // @ts-ignore
    if (typeof feather !== "undefined") {
      // @ts-ignore
      feather.replace();
    }
  }, [status]);

  const chartOptions = {
    series: [
      {
        name: "Samsung Devices",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "Apple Devices",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    chart: {
      toolbar: {
        tools: {
          download: false,
          pan: false,
          zoomin: false,
          zoomout: false,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };

  const pieChartOptions = {
    options: {},
    series: [44, 55, 41, 17, 15],
    labels: ["A", "B", "C", "D", "E"],
  };

  return (
    <>
      <Helmet>
        <title>Dashboard | Inventory App</title>
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
            minWidth: 0,
            height: "100dvh",
            gap: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              my: 1,
              gap: 1,
              mb: 3,
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "start", sm: "center" },
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <Typography level="h2">Dashboard</Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <FormControl size="sm">
                <Select
                  size="sm"
                  placeholder="Filter by date range"
                  slotProps={{ button: { sx: { whiteSpace: "nowrap" } } }}
                >
                  <Option value="today">Today</Option>
                  <Option value="lastWeek">Last 7 days</Option>
                  <Option value="lastMonth">Last Month</Option>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Grid container spacing={3}>
            <Grid xs={12} md={6} lg={4}>
              <Card variant="plain" invertedColors sx={{ p: 3, mb: 2 }}>
                <CardContent orientation="horizontal">
                  <CircularProgress size="lg" determinate value={80}>
                    <SvgIcon>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                        />
                      </svg>
                    </SvgIcon>
                  </CircularProgress>
                  <CardContent>
                    <Typography level="body-md">Total Sales</Typography>
                    <Typography level="h2">$ 432.6M</Typography>
                  </CardContent>
                </CardContent>
              </Card>
            </Grid>

            <Grid xs={12} md={6} lg={4}>
              <Card
                variant="plain"
                color="warning"
                invertedColors
                sx={{ p: 3, mb: 2 }}
              >
                <CardContent orientation="horizontal">
                  <CircularProgress size="lg" determinate value={80}>
                    <SvgIcon>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                        />
                      </svg>
                    </SvgIcon>
                  </CircularProgress>
                  <CardContent>
                    <Typography level="body-md">Total Sales</Typography>
                    <Typography level="h2">$ 432.6M</Typography>
                  </CardContent>
                </CardContent>
              </Card>
            </Grid>

            <Grid xs={12} md={6} lg={4}>
              <Card variant="plain" color={"danger"} sx={{ p: 3, mb: 2 }}>
                <CardContent orientation="horizontal">
                  <CircularProgress size="lg" determinate value={80}>
                    <SvgIcon>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                        />
                      </svg>
                    </SvgIcon>
                  </CircularProgress>
                  <CardContent>
                    <Typography level="body-md">Total Sales</Typography>
                    <Typography level="h2">$ 432.6M</Typography>
                  </CardContent>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid xs={12} md={8} lg={8}>
              <Card variant="plain">
                <Chart
                  options={chartOptions as any}
                  series={chartOptions.series}
                  type="area"
                />
              </Card>
            </Grid>

            <Grid spacing={3} xs={12} md={4} lg={4} gap={3}>
              <Card variant="plain">
                <Chart
                  options={pieChartOptions.options}
                  series={pieChartOptions.series}
                  type="donut"
                />
              </Card>

              <Card variant="plain" sx={{ mt: 2 }}>
                <Chart
                  options={pieChartOptions.options}
                  series={pieChartOptions.series}
                  type="donut"
                />
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
});
