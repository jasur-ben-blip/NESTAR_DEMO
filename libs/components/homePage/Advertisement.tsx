import React from "react";
import { Stack, Box } from "@mui/material";

const Advertisement = () => {
  return (
    <Stack className={"advertisement"}>
      <Box className={"video-wrap"}>
        <Box className={"top-shadow"} />
        <video
          className={"ad-video"}
          src={"/video/ads.mov"}
          autoPlay
          muted
          loop
          playsInline
        />
        <Box className={"bottom-shadow"} />
      </Box>
    </Stack>
  );
};

export default Advertisement;
