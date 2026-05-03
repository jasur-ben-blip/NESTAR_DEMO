import React from "react";
import { Box, Stack } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BedIcon from "@mui/icons-material/Bed";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";

interface TopPropertyCardProps {
  property?: {
    id: number;
    title: string;
    description: string;
    price: number;
    beds: number;
    rooms: number;
    area: number;
    type: string; // "Barter" | "Rent" | "Sale"
    views: number;
    likes: number;
    liked: boolean;
    image: string;
  };
}

const defaultProperties = [
  {
    id: 1,
    title: "Dream Land",
    description:
      "Located in a safe and convenient neighborhood with modern amenities and great views.",
    price: 200000,
    beds: 3,
    rooms: 4,
    area: 200,
    type: "Barter",
    views: 54,
    likes: 43,
    liked: true,
    image: "/img/property/sub1.png",
  },
  {
    id: 2,
    title: "Megalon Villa",
    description:
      "A beautiful and cozy private villa offering comfort and luxury living experience.",
    price: 200000,
    beds: 1,
    rooms: 3,
    area: 75,
    type: "Barter",
    views: 32,
    likes: 22,
    liked: true,
    image: "/img/property/sub1.png",
  },
];

const TopPropertyCard = ({ property }: TopPropertyCardProps) => {
  const data = property ?? defaultProperties[0];

  return (
    <Stack className={"trend-property-card"}>
      {/* Image Box */}
      <Box className={"card-image-box"}>
        <img
          src={data.image || "/img/sub1.png"}
          alt={data.title}
          className={"card-image"}
        />
        <Box className={"price-tag"}>${data.price.toLocaleString()}</Box>
      </Box>

      {/* Card Content */}
      <Stack className={"card-content"}>
        <Box className={"card-title"}>{data.title}</Box>
        <Box className={"card-desc"}>{data.description}</Box>

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
          <Stack className={"card-stats"}>
            <Box className={"stat-item"}>
              <RemoveRedEyeIcon className={"stat-icon"} />
              <span>{data.views}</span>
            </Box>
            <Box className={"stat-item"}>
              {data.liked ? (
                <FavoriteIcon className={"stat-icon liked"} />
              ) : (
                <FavoriteBorderIcon className={"stat-icon"} />
              )}
              <span>{data.likes}</span>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TopPropertyCard;
