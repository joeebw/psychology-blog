import CircularProgress from "@mui/material/CircularProgress";
import "./spinner.styles.scss";

const Spinner = ({ isReady }) => {
  return (
    <div className="spinner" style={{ display: isReady && "none" }}>
      <CircularProgress size={80} />
    </div>
  );
};

export default Spinner;
