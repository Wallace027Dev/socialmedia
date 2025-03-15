"use client";
import Header from "../components/Header";
import Home from "../components/Home";

import { WrapperContainer } from "../styles/Wrapper";

export default function Page() {
  return (
    <WrapperContainer>
      <Header />
      <Home />
    </WrapperContainer>
  );
}
