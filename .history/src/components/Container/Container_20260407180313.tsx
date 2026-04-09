import styles from "./index.module.css";

type ContainerProps = {
  children?: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={`${styles.container} ${className} flex flex-col gap-4 bg-red-500 p-8`}
    >
      {children}
    </div>
  );
};

export default Container;
