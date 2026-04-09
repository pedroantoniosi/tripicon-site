import React, { Children } from "react";

type ContainerProps{
    children: <react className="reacNode"></react>
}

export default function Container({chidren}: ContainerProps) {
  return <div className="max-w-[1024px] m-auto">
    {Children}
  </div>;
}
