import withLayoutBasic from "@/libs/components/layout/layoutBasic";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import { Container, Stack } from "@mui/material";
import { NextPage } from "next";

const PropertyDetail = () => {
  const device = useDeviceDetect();
  if (device === "mobile") {
    return <Stack>PROPERTY DETAIL MOBILE</Stack>;
  } else {
    return <Container>PROPERTY DETAIL</Container>;
  }
};
export default withLayoutBasic(PropertyDetail);
