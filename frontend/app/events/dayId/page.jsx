"use client";

import { Suspense } from "react";
import EventTimelinePage from "./content";

export default function EventsDay() {
  return (
    <Suspense>
      <EventTimelinePage />
    </Suspense>
  );
}
