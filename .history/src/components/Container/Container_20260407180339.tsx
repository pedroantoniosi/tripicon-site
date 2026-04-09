type ContainerProps = {
  children?: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={` ${className} flex flex-col gap-4 bg-red-500 p-8`}>
      {children}
    </div>
  );
};

export default Container;
