import React from "react";

type ContainerProps = {
  children?: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return <div className="p-2 max-w-[1024px] m-auto bg-red-600">{children}</div>;
}
