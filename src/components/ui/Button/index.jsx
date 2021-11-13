import PropTypes from "prop-types";
import cl from "./button.module.css";

export const Button = ({ children, disabled, loading, ...props }) => (
  <button className={cl.btn} {...props} disabled={disabled || false}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
  loading: false,
};
