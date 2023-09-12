import React from 'react';
import style from './App.module.scss';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import { BrowserRouter, Route } from 'react-router-dom';
import { AppPropsType } from './redux/state';

function App(props: AppPropsType) {
  return (
    <BrowserRouter>
      <div className={style.app}>
        <Header />
        <div className={style.content}>
          <Route path="/dialogs"
            render={() => <Dialogs dialogsData={props.state.messagesPage.dialogsData} messagesData={props.state.messagesPage.messagesData} />} />
          <Route path="/profile"
            render={() => <Profile postsData={props.state.profilePage.postsData} />} />
          <Route path="/news"
            render={() => <News />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
