import React, { Children } from "react";

type ContainerProps = {
  children?: React.ReactNode;
};

export default function Container({ chidren }: ContainerProps) {
  return <div className="max-w-[1024px] m-auto">{Children}</div>;
}
