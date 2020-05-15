import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { firstPage } from './story';
import { VERSION } from './version';

import logoImage from '../assets/logo.svg';

const App = () => {
  const [page, setPage] = useState(firstPage);
  const [log, setLog] = useState([]);

  const choices = page.choices.map((choice) => {
    const onClick = () => {
      setLog([{ page, choice }, ...log]);
      setPage(choice.targetPage);
    };

    return (
      <button key={`${log.length}|${choice.name}`} className="page__choice" onClick={onClick}>
        → <span className="page__choice__name">{choice.name}</span>
      </button>
    );
  });

  const logs = log.map(({ page, choice }, i) => {
    return (
      <div className="log__entry" key={i}>
        <div className="log__dialog">{page.dialog}</div>
        <div className="log__choice">{choice.action}</div>
      </div>
    );
  });

  console.debug(page, log);

  const isStart = page === firstPage;

  return (
    <div className={isStart ? 'pacecar pacecar--start' : 'pacecar'}>
      <div className={isStart ? 'logo logo--start' : 'logo'}>
        <img src={logoImage} className="logo__image" />
        <span className="logo__version">{VERSION}</span>
      </div>
      <div className={isStart ? 'page page--start' : 'page'}>
        <div className="page__dialog">{page.dialog}</div>
        <div className="page__choices">{choices}</div>
      </div>
      <div className="log">{logs}</div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
