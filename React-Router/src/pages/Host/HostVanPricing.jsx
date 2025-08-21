import React from "react";

import { useOutletContext } from "react-router-dom";
const HostVanPricing = () => {
  const { currentVan } = useOutletContext();
  return <h2>Pricing info goes here</h2>;
};

export default HostVanPricing;
