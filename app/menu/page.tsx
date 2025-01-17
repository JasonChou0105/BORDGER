"use client";

import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import Footer from "@/components/Footer/Footer";
import Menu from "@/components/Menu/Menu";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const itemId = searchParams.get("itemId");

  return (
    <div>
      <Navbar />
      <Menu id={itemId} />
      <Footer />
    </div>
  );
}
