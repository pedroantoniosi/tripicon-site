import styles from "./Container.module.css"

type ContainerProps = {
  children?: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={`${} ${className}`}>
      {children}
    </div>
  );
};

export default Container;
