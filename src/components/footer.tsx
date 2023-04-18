import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="h-screen z-[200] justify-center items-center flex relative bg-zinc-300 px-10 w-full">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight max-w-[40ch]">
        From the dawn of civilisation onwards crowds have always undergone the
        influence of illusions. It is to the creators of illusions that they
        have raised more temples, statues, and altars than to any other class of
        men.
      </h3>
    </div>
  );
}
