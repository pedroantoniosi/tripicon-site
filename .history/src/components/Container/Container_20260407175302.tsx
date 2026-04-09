import styles from "./index.module.css";

type ContainerProps = {
  children?: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
  return <div className="p-4 flex  gap-4 bg-red-400">{children}</div>;
};

export default Container;
