import React, { useState } from "react";
import { Stack, Box } from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import PopularPropertyCard from "./PopularPropertiesCard";

const PopularProperties = () => {
  const [popularProperties, setPopularProperties] = useState<number[]>([
    1, 2, 3, 4, 5, 6, 7,
  ]);

  return (
    <Stack className={"popular-properties"}>
      <Stack className={"container"}>
        <Stack className={"info-box"}>
          <Box className={"left"}>
            <span>Popular Properties</span>
            <p>Popularity is based on views</p>
          </Box>
          <Box className={"right"}>
            <div className={"see-all"}>
              <span>See All Categories</span>
              <NorthEastIcon className={"see-all-icon"} />
            </div>
          </Box>
        </Stack>
        <Stack className={"card-box"}>
          {popularProperties.length === 0 ? (
            <Box className={"empty-list"}>Properties Empty</Box>
          ) : (
            <Swiper
              className={"popular-property-swiper"}
              slidesPerView={"auto"}
              spaceBetween={25}
              navigation={{
                nextEl: ".swiper-popular-next",
                prevEl: ".swiper-popular-prev",
              }}
              pagination={{
                el: ".swiper-popular-pagination",
                clickable: true,
              }}
            >
              {popularProperties.map((property, index) => {
                return (
                  <SwiperSlide key={index} className={"popular-property-slide"}>
                    <PopularPropertyCard />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          )}
        </Stack>
        <Stack className={"pagination-box"}>
          <WestIcon className={"swiper-popular-prev"} />
          <div className={"swiper-popular-pagination"}></div>
          <EastIcon className={"swiper-popular-next"} />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PopularProperties;
