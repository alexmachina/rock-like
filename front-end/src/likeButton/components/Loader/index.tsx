import "./loader.css";

interface LoaderProps {
  children: React.ReactNode;
  loading: boolean;
}
const Loader: React.FC<LoaderProps> = ({ loading, children }) => {
  return loading ? (
    <div className="spinner">
      <div className="bounce1"></div>
      <div className="bounce2"></div>
      <div className="bounce3"></div>
    </div>
  ) : (
    <>{children}</>
  );
};

export default Loader;
