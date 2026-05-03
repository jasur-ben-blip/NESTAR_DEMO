import React, { useState } from "react";
import { Stack, Box } from "@mui/material";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import TopAgentCard from "./TopAgentCard";

const TopAgents = () => {
  const [topAgents, setTopAgents] = useState<number[]>([1, 2, 3, 4, 5, 6, 7]);

  return (
    <Stack className={"top-agents"}>
      <Stack className={"container"}>
        <Stack className={"info-box"}>
          <Box className={"left"}>
            <span>Top Agents</span>
            <p>Our Top Agents always ready to serve you</p>
          </Box>
          <Box className={"right"}>
            <div className={"see-all"}>
              <span>See All Agents</span>
              <NorthEastIcon className={"see-all-icon"} />
            </div>
          </Box>
        </Stack>

        <Stack className={"card-box"}>
          <button className={"swiper-agents-prev nav-btn"}>
            <ArrowBackIosNewIcon />
          </button>

          {topAgents.length === 0 ? (
            <Box className={"empty-list"}>Agents Empty</Box>
          ) : (
            <Swiper
              className={"agents-swiper"}
              slidesPerView={"auto"}
              spaceBetween={30}
              navigation={{
                nextEl: ".swiper-agents-next",
                prevEl: ".swiper-agents-prev",
              }}
            >
              {topAgents.map((agent, index) => (
                <SwiperSlide key={index} className={"agent-slide"}>
                  <TopAgentCard />
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          <button className={"swiper-agents-next nav-btn"}>
            <ArrowForwardIosIcon />
          </button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TopAgents;
