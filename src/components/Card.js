import React from "react";
import {FaTrash} from "react-icons/fa"

var prop = "";

function Card(props) {
prop = props;
var photoUrl = "http://message-list.appspot.com"+props.data.author.photoUrl;

var postDate = new Date(props.data.updated);
var currentDate = new Date();
var differenceInDate = currentDate.getFullYear() - postDate.getFullYear();

const touchMove = (event) => {
    var element = document.getElementsByClassName("main-content");
    var id= ((props.data.id-1));
    element[id].classList.add("touchMove");
};

const touchStart = (event) => {
    var element = document.getElementsByClassName("container");
    var deleteAction = document.getElementsByClassName("deleteAction");
    var id= ((props.data.id-1));
    deleteAction[id].classList.add("visible");
    deleteAction[id].style.height = element[id].offsetHeight - 25 + "px";
    touchMove();
}

const buttonClick = () => {
    var element = document.getElementsByClassName("main-content");
    var deleteAction = document.getElementsByClassName("deleteAction");
    var id= ((props.data.id-1));
    element[id].classList.remove("touchMove");
    deleteAction[id].classList.remove("visible");
}

    return (
        <div className="actions" id={props.data.id}>          
        <div className="container" id={props.data.id} onTouchMove={touchMove} onTouchStart={touchStart}>
        <button className="deleteAction" onClick={buttonClick}><span className="bars">Delete</span>
        <span className="trash"><FaTrash /></span></button>
            <div className="main-content">
                <div className="user-details">
                <img src={photoUrl} alt={props.data.author.name} />
                <div className="details">
                <h1>{props.data.author.name}</h1>
                <h2>{differenceInDate} years ago</h2>
                </div>
            </div>
            <div className="message">
                <h3>{props.data.content}</h3>
            </div>
        </div>
        </div>
        </div>
    )
}

var classname = document.getElementsByClassName("container");

function handleGestureMove(){
    console.log("Swiped");
  }

if(prop)
classname[prop.data.id].addEventListener('touchmove', handleGestureMove, false)

export default Card;