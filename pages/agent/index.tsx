import withLayoutBasic from "@/libs/components/layout/layoutBasic";
import { Stack } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";

const AgentList: NextPage = () => {
  return (
    <div style={{ margin: "20px 0" }}>
      <Stack className="container">AgentList</Stack>
    </div>
  );
};

export default withLayoutBasic(AgentList);
