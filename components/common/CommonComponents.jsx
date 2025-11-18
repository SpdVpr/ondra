import React from "react";
import ScrollTop from "./ScrollTop";
import Sidebar from "../headers/Sidebar";
import MobileMenu from "../headers/MobileMenu";
import MobileMenuOnepage from "../headers/MobileMenuOnepage";

export default function CommonComponents() {
  return (
    <>
      <ScrollTop />
      <Sidebar />
      <MobileMenu />
      <MobileMenuOnepage />
    </>
  );
}
