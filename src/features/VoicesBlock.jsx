import React from "react";
import PropTypes from "prop-types";
import cl from "./voices.module.css";

const VoicesBlock = ({ name, providerLanguage, sex, provider, flags }) => {
  return (
    <div className={cl.voice}>
      <h3>Name: {name}</h3>
      <div>
        <b>Language:</b> {providerLanguage}
      </div>
      <div>
        <b>Sex:</b> {sex}
      </div>
      <div>
        <b>Provider:</b> {provider}
      </div>
      <div>
        {flags.map((item, index) => (
          <span key={`${item}_${index}`}>{item}</span>
        ))}
      </div>
    </div>
  );
};

VoicesBlock.propTypes = {
  name: PropTypes.string.isRequired,
  providerLanguage: PropTypes.string.isRequired,
  sex: PropTypes.string.isRequired,
  provider: PropTypes.string.isRequired,
  flags: PropTypes.arrayOf(PropTypes.string),
};

VoicesBlock.defaultProps = {
  provider: "unknow",
  flags: [],
};

export default VoicesBlock;
