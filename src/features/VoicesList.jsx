import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchVoices,
  selectVoices,
  selectLoading,
  selectError,
  selectStatus,
  selectLanuages,
} from "./voicesSlice";
import cl from "./voices.module.css";
import VoicesBlock from "./VoicesBlock";
const VoicesList = () => {
  const dispatch = useDispatch();

  const [lang, setLang] = useState("ENG");

  const voices = useSelector(selectVoices(lang));
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const status = useSelector(selectStatus);
  const languages = useSelector(selectLanuages);

  useEffect(() => {
    dispatch(fetchVoices());
  }, [dispatch, status]);

  const handleChange = (e) => {
    setLang(e.target.value);
  };

  if (loading) {
    return (
      <div className={cl.voicesLoading}>
        <Loader type="Oval" color="#00BFFF" height={80} width={80} />
      </div>
    );
  }

  if (error) {
    return <div className={cl.voicesError}>{error}</div>;
  }

  return (
    <div className={cl.voicesWrap}>
      <div className={cl.voicesFilter}>
        <select onChange={handleChange} value={lang} className={cl.select}>
          {languages &&
            languages.map((item, index) => <option key={`${item}_${index}`}>{item}</option>)}
        </select>
      </div>
      <div className={cl.voices}>
        {voices &&
          voices.map((item, index) => (
            <VoicesBlock
              key={`${item.id}_${index}`}
              name={item.name}
              providerLanguage={item.providerLanguage}
              provider={item.provider}
              sex={item.sex}
              flags={item.flags}
            />
          ))}
      </div>
    </div>
  );
};

export default VoicesList;
