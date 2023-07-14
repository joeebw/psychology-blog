import CircularProgress from "@mui/material/CircularProgress";
import "./spinner.styles.scss";

const Spinner = () => {
  return (
    <div className="spinner">
      <CircularProgress size={80} />
    </div>
  );
};

export default Spinner;
