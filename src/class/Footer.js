import React, { Component } from 'react';

import {Link} from 'react-router-dom';

let propTypes = {
  todoLen: PT.number,
  showClearBtn: PT.bool,
  deleteAllCompleted: PT.func,
  pathname: PT.string
}

const Footer = function (props){
  let {todoLen, showClearBtn, deleteAllCompleted, pathname} = props;
  
  let clearBtn = null;
  
  if(showClearBtn){
    clearBtn = (
      <button
        className="clear-completed"
        onClick={deleteAllCompleted}
      >Clear completed</button>
    );
  }
  
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{todoLen}</strong>
        {' '}
        item
        {' '}
        left
      </span>
      <ul className="filters">
        <li>
          <Link to='/'
            className={pathname === '/' ? 'selected' : ''}
          >
            All
          </Link>
        </li>
        <li>
          <Link to='/active'
            className={pathname === '/active' ? 'selected' : ''}
          >
            Active
          </Link>
        </li>
        <li>
          <Link to='/completed'
            className={pathname === '/completed' ? 'selected' : ''}
          >
            Completed
          </Link>
        </li>
      </ul>
      {clearBtn}
    </footer>
  );
}

Footer.propTypes = propTypes;

export default Footer;