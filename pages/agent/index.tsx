import withLayoutBasic from "@/libs/components/layout/layoutBasic";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import { Stack } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";

const AgentList: NextPage = () => {
  const device = useDeviceDetect();
  if (device === "mobile") {
    return <Stack> AGENT MOBILE</Stack>;
  } else {
    return (
      <div
        style={{
          margin: "20px 0",
        }}
      >
        <Stack className={"container"}> AGENT LIST </Stack>
      </div>
    );
  }
};

export default withLayoutBasic(AgentList);
