import ReactDOM from "react-dom";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { motion } from "framer-motion";


const useStyles = makeStyles({
    circle: {
      fill: 'red', 
      stroke: 'yellow'
    },
    line: {
      fill: 'pink', 
      stroke: 'pink', 
      strokeWidth: '10',
      strokeLinecap: 'round'
    }
});

const App = ({ variants, onCompleted}) => {
    const classes = useStyles();

    return (
        <svg width="400" height="400" style={{ backgroundColor: 'green' }}>
          <g>
           <motion.circle
                cx={200}
                cy={250}
                r={100}
                className={classes.circle}
                animate={{ cy: [null, 200], r: [115, 125] }}
                transition={{ 
                  duration: 1,
                  times: [0, 1], 
                  yoyo: Infinity, 
                }}
            />
            <g id="line">
              <motion.line
                x1="150"
                x2="200"
                y1="210"
                y2="260"
                animate={{ 
                  y1: [null, 170], 
                  y2: [null, 210],
                }}
                transition={{ 
                  duration: 1,
                  times: [0, 1], 
                  yoyo: Infinity, 
                }}
                className={classes.line}
              />
            <motion.line
                x1="250"
                x2="200"
                y1="210"
                y2="260"
                animate={{ 
                  y1: [null, 170], 
                  y2: [null, 210] 
                }}
                transition={{ 
                  duration: 1,
                  times: [0, 1], 
                  yoyo: Infinity, 
                }}
                className={classes.line}
              />
            </g>
            <use xlinkHref="#line" />
            <use xlinkHref="#line" transform="translate(0, 40)"/>
          </g>
        </svg> 
    )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
