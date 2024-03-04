import React from "react";
import PlaceList from "../components/PlaceList";
import { useParams } from "react-router-dom";

const UserPlaces = () => {
  const DUMMY_PLACES = [
    {
      id: "p1",
      title: "Empire State Building",
      description: "One of the most famous sky scrappers in the world",
      imageUrl:
        "https://www.esrtreit.com/wp-content/uploads/16A-ESB-2-768x512.jpg",
      address: "20 W 34th St, New York, NY 10001",
      location: {
        lat: 40.7484405,
        lng: -73.9856644,
      },
      creator: "u1",
    },
    {
      id: "p2",
      title: "Empire State Building",
      description: "One of the most famous sky scrappers in the world",
      imageUrl:
        "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/36/48/20.jpg",
      address: "20 W 34th St, New York, NY 10001",
      location: {
        lat: 40.7484405,
        lng: -73.9856644,
      },
      creator: "u2",
    },
  ];

  const userId = useParams().userId;
  const loadPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
  return <PlaceList items={loadPlaces} />;
};

export default UserPlaces;
