import React from "react";

const ShippingData = ({ shippingAddress }) => {
  return (
    <div className="shippingData">
      <span>{shippingAddress?.name}</span>
      <span>{shippingAddress?.email}</span>
      <span>{shippingAddress?.address}</span>
      <span>
        {shippingAddress?.city}, {shippingAddress?.zipCode}
      </span>
      <span>{shippingAddress?.country}</span>
      <span>Phone : {shippingAddress?.phoneNumber}</span>
    </div>
  );
};

export default ShippingData;
