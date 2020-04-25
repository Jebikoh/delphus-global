import React from "react";
import useNetwork from "../util/use-network";

export default function InternetTest() {
  const network = useNetwork();
  return <p>{JSON.stringify(network)}</p>;
}
