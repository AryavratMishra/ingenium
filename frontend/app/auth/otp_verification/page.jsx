import React, { Suspense } from "react";
import OTPVerification from "./content";

const page = () => {
  return (
    <Suspense>
      <OTPVerification />
    </Suspense>
  );
};

export default page;
