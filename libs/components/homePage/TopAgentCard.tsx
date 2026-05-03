import React from "react";
import { Box, Stack } from "@mui/material";

interface TopAgentCardProps {
  agent?: {
    id: number;
    name: string;
    image: string;
  };
}

const TopAgentCard = ({ agent }: TopAgentCardProps) => {
  const defaultData = {
    id: 1,
    name: "JENIFER",
    image: "/img/profile/girl.svg",
  };

  const data = agent ?? defaultData;

  return (
    <Stack className={"top-agent-card"}>
      <Box className={"agent-image-box"}>
        <img
          src={data.image}
          alt={data.name}
          className={"agent-image"}
          onError={(e) => {
            e.currentTarget.src = "/img/sub1.png";
          }}
        />
      </Box>
      <Box className={"agent-name"}>{data.name}</Box>
      <Box className={"agent-role"}>AGENT</Box>
    </Stack>
  );
};

export default TopAgentCard;
