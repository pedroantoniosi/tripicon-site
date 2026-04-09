import React from "react";

type ContainerProps = {
  children?: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return <div className="p-2 max-w-[1640px] m-auto">{children}</div>;
}
