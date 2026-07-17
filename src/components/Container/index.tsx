type ContainerProps = {
  children?: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={`w-full max-w-[1600px] mx-auto p-2 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
