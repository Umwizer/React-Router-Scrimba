import React from "react";
import { useOutletContext } from "react-router-dom";
const HostVanInfo = () => {
  const { currentVan } = useOutletContext();
  return <h2>Information info goes here</h2>;
};

export default HostVanInfo;
