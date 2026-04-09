import React from "react";

type ContainerProps = {
  children?: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return <div className="max-w-[1640px] m-auto">{children}</div>;
}
