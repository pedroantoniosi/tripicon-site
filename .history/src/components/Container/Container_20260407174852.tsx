import styles from "./index.module.css";

type ContainerProps = {
  children?: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
  return <div className="flex  flex-col gap-4">{children}</div>;
};

export default Container;
