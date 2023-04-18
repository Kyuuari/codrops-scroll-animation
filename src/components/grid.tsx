"use client";
import React from "react";

type Props = {};

export default function Grid({}: Props) {
  return (
    <div className="grid relative w-full grid-cols-8">
      <div className="grid-item col-[1] row-[1]">
        <div className="bg-img-1 grid-item-img" />
      </div>
      <div className="grid-item col-[6] row-[1]">
        <div className="bg-img-1 grid-item-img" />
      </div>

      <div className="grid-item col-[2] row-[2]">
        <div className="bg-img-1 grid-item-img" />
      </div>
      <div className="grid-item col-[8] row-[2]">
        <div className="bg-img-1 grid-item-img" />
      </div>

      <div className="grid-item col-[6] row-[3]">
        <div className="bg-img-1 grid-item-img" />
      </div>

      <div className="grid-item col-[4] row-[4]">
        <div className="bg-img-1 grid-item-img" />
      </div>

      <div className="grid-item col-[8] row-[5]">
        <div className="bg-img-1 grid-item-img" />
      </div>

      <div className="grid-item col-[3] row-[6]">
        <div className="bg-img-1 grid-item-img" />
      </div>

      <div className="grid-item col-[7] row-[7]">
        <div className="bg-img-1 grid-item-img" />
      </div>
      <div className="grid-item col-[2] row-[7]">
        <div className="bg-img-1 grid-item-img" />
      </div>

      <div className="grid-item col-[4] row-[8]">
        <div className="bg-img-1 grid-item-img" />
      </div>

      <div className="grid-item col-[8] row-[9]">
        <div className="bg-img-1 grid-item-img" />
      </div>

      <div className="grid-item col-[1] row-[10]">
        <div className="bg-img-1 grid-item-img" />
      </div>

      <div className="grid-item col-[6] row-[11]">
        <div className="bg-img-1 grid-item-img" />
      </div>

      {/* <div className="will-change-transform relative)"></div> */}
    </div>
  );
}
