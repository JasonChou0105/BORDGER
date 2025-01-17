"use client";

import React from "react";
import Menu from "@/components/Menu/Menu";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const itemId = searchParams.get("itemId");

  return (
    <div>
      <Menu id={itemId} />
    </div>
  );
}
