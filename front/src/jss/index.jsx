import React from 'react';
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
   myWrapper: {
      'max-width': 700,
      margin: {
         top: 25,
         right: 'auto',
         bottom: 10,
         left: 'auto'
      },
      'text-align': 'center',
      color: '#610B4B'

   },
   myLabel: {
      color: '#B404AE',
      margin: {
         right: 10
      },
   },
   myButton: {
      margin: {
         left: 10,
         right: 10
      },
      'background-color': '#E0E6F8',
      'border-color': '#E0E6F8',
      cursor: 'pointer'
   }
})

export const Label = ({children}) => {
   const classes = useStyles();
   return(
      <label className={classes.myLabel}>
         {children}
      </label>
   )
}

export const Button = ({children}) => {
   const classes = useStyles();
   return (
      <button className={classes.myButton}>
         {children}
      </button>
   )
}

export const Wrapper = ({children}) => {
   const classes = useStyles();
   return (
      <div className={classes.myWrapper}>
         {children}
      </div>
   )
}
