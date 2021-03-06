import React, { useContext, useState, useEffect } from "react";
import CardTranslators from "../cards/CardTranslators";
import UserContext from "../../../contexts/UserContext";
import ModalContext from "../../../contexts/ModalContext";
import { ReactComponent as AddTranslator } from './add-translator.svg'
import Axios from "axios";
let uniqid = require('uniqid');

const Translator = () => {
  
    const [translators, setTranslators] = useState([]);
    const { userId } = useContext(UserContext);
    const { translatorCounter, setTranslatorCounter } = useContext(ModalContext);

    // API call to load the Tranlator's section for TM
  useEffect(() => {
    if (translators.length === 0 || translatorCounter === 0 ) {
    let url = `https://wdys.herokuapp.com/translators/${userId}/initial`
    Axios
    .get(url, {headers: {'Content-Type':'application/json'}})
    .then((res) => { 
        setTranslators(res.data);
        setTranslatorCounter(res.data.length)
    })
    .catch((err) => console.log(err))
  }
    
  }, [userId, translatorCounter, translators.length, setTranslatorCounter]);
  
  return (
    <>
    {translators.length !== 0 ?
    <div className="body-project">
      {translators.map(translator => 
        <CardTranslators 
        key={uniqid()} 
        id={translator._id}
        transName={translator.displayname}
        transLangs={translator.translator_langs}
        transEmail={translator.email}
        />
      )}
    </div>
    :
    <div className='no-table'>
        <div className='center'>
          <AddTranslator style={{maxWidth: '400px', maxHeight: '300px'}}/>
          <p className='center'>Looks like you have not assigned any translators yet, get started by adding one.</p>
        </div>
      </div>
}
    </>
  );
};

export default Translator;
