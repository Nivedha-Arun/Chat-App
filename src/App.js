import { useEffect, useState } from 'react';
import './App.scss';
import Card from './components/Card.js'
import {FaBars} from "react-icons/fa"

let pageToken, pageId = "";
var newList = [];

function App() {

  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);
  const [page, setPageToken] = useState([]);

  useEffect(() => {
  fetch(`http://message-list.appspot.com/messages${pageId}`)
    .then(res => res.json())
    .then(
      (result) => {
        pageToken = result.pageToken;
        Array.prototype.push.apply(newList,result.messages); 
        setItems(newList);
      },
      (error) => {
        setError(error);
      }
    )

}, [page]);

const scrollToEnd = () => {
  setPageToken(pageId = "?pageToken="+pageToken)
  //document.body.scrollTop = 0;
  //document.documentElement.scrollTop = 0;
}

window.onscroll = function() {
  if(window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight)
  {
    scrollToEnd();
  }
}


  return (
    <div className="App">
      <div className="header">
        <span className="bars"><FaBars /></span>
        <h3>Messages</h3>
      </div>
      <div className="content">
      {items.map((dataItem) => 
      { 
      return ( 
          <Card key = {dataItem.id} data = {dataItem}/> 
          ); 
      })}
      </div>
      </div>
  );
}

export default App;
