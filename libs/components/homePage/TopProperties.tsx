import React, { useState } from "react";
import { Stack, Box } from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import TrendPropertyCard from "./TrendPropertyCard";

const TopProperties = () => {
  const [trendProperties, setTrendProperties] = useState<number[]>([
    1, 2, 3, 4, 5, 6, 7,
  ]);

  return (
    <Stack className={"trend-properties"}>
      <Stack className={"container"}>
        <Stack className={"info-box"}>
          <Box className={"left"}>
            <span>Top Properties</span>
            <p>Check out our Top Properties</p>
          </Box>
          <Box className={"right"}>
            <div className={"pagination-box"}>
              <WestIcon className={"swiper-trend-prev"} />
              <div className={"swiper-trend-pagination"}></div>
              <EastIcon className={"swiper-trend-next"} />
            </div>
          </Box>
        </Stack>
        <Stack className={"card-box"}>
          {trendProperties.length === 0 ? (
            <Box className={"empty-list"}>Top is Empty</Box>
          ) : (
            <Swiper
              className={"trend-property-swiper"}
              slidesPerView={"auto"}
              spaceBetween={15}
              navigation={{
                nextEl: ".swiper-trend-next",
                prevEl: ".swiper-trend-prev",
              }}
              pagination={{
                el: ".swiper-trend-pagination",
              }}
            >
              {trendProperties.map((property, index) => {
                return (
                  <SwiperSlide key={index} className={"trend-property-slide"}>
                    <TrendPropertyCard />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TopProperties;
