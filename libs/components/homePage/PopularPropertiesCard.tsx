import React from "react";
import { Box, Stack } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import BedIcon from "@mui/icons-material/Bed";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";

interface PopularPropertyCardProps {
  property?: {
    id: number;
    title: string;
    address: string;
    price: number;
    beds: number;
    rooms: number;
    area: number;
    type: string;
    views: number;
    top: boolean;
    image: string;
  };
}

const PopularPropertyCard = ({ property }: PopularPropertyCardProps) => {
  const defaultData = {
    id: 1,
    title: "Dream Land",
    address: "Gwangju hasdes 51",
    price: 200000,
    beds: 3,
    rooms: 4,
    area: 200,
    type: "Sale",
    views: 54,
    top: true,
    image: "/img/property/dreamhouse.png",
  };

  const data = property ?? defaultData;

  return (
    <Stack className={"popular-property-card"}>
      {/* Image Box */}
      <Box className={"card-image-box"}>
        <img
          src={data.image}
          alt={data.title}
          className={"card-image"}
          onError={(e) => {
            e.currentTarget.src = "/img/property/dreamhouse.png";
          }}
        />
        {data.top && (
          <Box className={"top-badge"}>
            <ElectricBoltIcon className={"badge-icon"} />
            <span>TOP</span>
          </Box>
        )}
        <Box className={"price-tag"}>${data.price.toLocaleString()}</Box>
      </Box>

      {/* Card Content */}
      <Stack className={"card-content"}>
        <Box className={"card-title"}>{data.title}</Box>
        <Box className={"card-address"}>{data.address}</Box>

        {/* Property Details */}
        <Stack className={"card-details"}>
          <Box className={"detail-item"}>
            <BedIcon className={"detail-icon"} />
            <span>{data.beds} bed</span>
          </Box>
          <Box className={"detail-item"}>
            <MeetingRoomIcon className={"detail-icon"} />
            <span>{data.rooms} rooms</span>
          </Box>
          <Box className={"detail-item"}>
            <SquareFootIcon className={"detail-icon"} />
            <span>{data.area} m2</span>
          </Box>
        </Stack>

        {/* Footer */}
        <Stack className={"card-footer"}>
          <Box className={"card-type"}>{data.type}</Box>
          <Box className={"stat-item"}>
            <RemoveRedEyeIcon className={"stat-icon"} />
            <span>{data.views}</span>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PopularPropertyCard;
