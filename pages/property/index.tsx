import withLayoutBasic from "@/libs/components/layout/layoutBasic";
import { Container } from "@mui/material";
import { NextPage } from "next";

const PropertyList: NextPage = () => {
  console.log("PROPERTY LIST COMPONENT - PAGES ROUTING");
  return <Container>PROPERTY LIST</Container>;
};

export default withLayoutBasic(PropertyList);
