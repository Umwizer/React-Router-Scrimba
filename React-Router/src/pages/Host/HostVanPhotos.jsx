import React from "react";

import { useOutletContext } from "react-router-dom";
const HostVanPhotos = () => {
  const { currentVan } = useOutletContext();
  return <h2>Photos info goes here</h2>;
};

export default HostVanPhotos;
