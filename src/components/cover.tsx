import React from "react";

type Props = {};

export default function Cover({}: Props) {
  return (
    <div className="cover fixed top-0 left-0 flex flex-col items-center justify-center pointer-events-none w-full h-screen">
      <h1 className="cover__title scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
        Thomas Vance<sup>&reg;</sup>
      </h1>
      <h2 className="cover__subtitle scroll-m-20 text-2xl font-semibold tracking-tight">
        並外れたファッション
      </h2>
    </div>
  );
}
