import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div>Home Page</div>
      <button onClick={() => navigate("order-summary", { replace: true })}>
        {" "}
        {/* replaces the whole history*/}
        Place Order
      </button>
    </>
  );
}
