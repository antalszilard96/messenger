import './Left.css';
import Logo from './logo/Logo';
import Myprofile from './myprofile/Myprofile';
import Line from './line/Line';
import ActiveChat from './activeChat/ActiveChat';

import { getFriends } from '../../api/axios';
import { useState, useEffect } from 'react';
import SearchBar from './search/SearchBar';
import ListPage from './search/ListPage';

function Left() {

  const [friends, setFriends] = useState([])
  const [searchResults, setSearchResults] = useState([])

  useEffect(() =>{
      getFriends().then(json => {
          setFriends(json)
          return json
      }).then(json => {
        setSearchResults(json)
      })
  }, [])

    return (
      <div className="left">
        <Logo />
        <Line />
        <Myprofile />
        <ActiveChat />
        <SearchBar friends={friends} setSearchResults = {setSearchResults} />
        <ListPage searchResults={searchResults} />
      </div>
    );
  }
  
  export default Left;
  



