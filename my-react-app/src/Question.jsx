import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Fade from '@mui/material/Fade';
import Grow from '@mui/material/Grow';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';


import './styles.css';

/**
 * A functional component that renders a question with multiple options and handles user input.
 *
 * @param {object} props - The component's props.
 * @param {string} props.question - The question to be displayed.
 * @param {array} props.options - An array of options for the question.
 * @param {string} props.answer - The correct answer to the question.
 * @param {function} props.onAnswer - A callback function to be called when the user submits an answer.
 * @return {JSX.Element} The rendered question component.
 */
export default function Question(props) {

    const question = props.question;
    const options = props.options;
    const answer = props.answer;
    
const [view, setView] = React.useState(props.view);

/**
 * Handles changes to the toggle button state.
 *
 * @param {object} event - The event object triggered by the change.
 * @param {string} newValue - The new value of the toggle button.
 * @return {void}
 */
const handleChange = (event, newValue) => {
    //console.log("New Value:" + newValue);
    setView(newValue); // Update the state with the new value of the toggle button
};

const [error, setError] = React.useState(null);


const [correctAnswer, setCorrectAnswer] = React.useState(null);

const [correctStatus, setCorrectStatus] = React.useState(null);

const [growStatus, setGrowStatus] = React.useState(false);

const [yourAnswer, setYourAnswer] = React.useState(null);

/**
 * Handles the submission of the user's answer.
 *
 * @return {void}
 */
const handleSubmit = () => {
    if (view === null || view === undefined || view == null){
        setError("Please select an option");
    } else {
        setError(null);

        switch (view) {
            case "a":
                setYourAnswer(options[0]);
                break;
            case "b":
                setYourAnswer(options[1]);
                break;
            case "c":
                setYourAnswer(options[2]);
                break;
            case "d":
                setYourAnswer(options[3]);
                break;                           
        }
        switch (answer) {
            case "a":
                setCorrectAnswer(options[0]);
                break;
            case "b":
                setCorrectAnswer(options[1]);
                break;
            case "c":
                setCorrectAnswer(options[2]);
                break;
            case "d":
                setCorrectAnswer(options[3]);
                break;                           
        }

        if (view === answer) {
            //console.log("Correct!");
            setCorrectStatus(true);
            setView(null);
        } else {
            //console.log("Wrong");
            setCorrectStatus(false);
        }
    }
}

React.useEffect(() => {
    setView(null);
    setGrowStatus(true);
    setCorrectAnswer(null);
    setYourAnswer(null);
    setCorrectStatus(null);
    setIsRedGlowing(false);
    setIsBlueGlowing(false);
    setIsGreenGlowing(false);
    setIsOrangeGlowing(false);
    //console.log("useEffect!");
}, [question]);

  const [isRedGlowing, setIsRedGlowing] = React.useState(false);

/**
 *  Toggles the red glow effect on or off.
 *  
 *  @return {void} No return value.
 */
  const toggleRedGlow = () => {
    setIsRedGlowing(!isRedGlowing);
    setIsBlueGlowing(false);
    setIsGreenGlowing(false);
    setIsOrangeGlowing(false);
  };

  const [isBlueGlowing, setIsBlueGlowing] = React.useState(false);

/**
 * Toggles the blue glow effect on or off.
 *
 * @return {void} No return value.
 */
  const toggleBlueGlow = () => {
    setIsBlueGlowing(!isBlueGlowing);
    setIsRedGlowing(false);
    setIsGreenGlowing(false);
    setIsOrangeGlowing(false);
  };

  const [isGreenGlowing, setIsGreenGlowing] = React.useState(false);

/**
 * Toggles the green glow effect on or off.
 *
 * @return {void} No return value.
 */
  const toggleGreenGlow = () => {
    setIsGreenGlowing(!isGreenGlowing);
    setIsBlueGlowing(false);
    setIsRedGlowing(false);
    setIsOrangeGlowing(false);
  };
  
  const [isOrangeGlowing, setIsOrangeGlowing] = React.useState(false);

/**
 * Toggles the orange glow effect on or off.
 *
 * @return {void} No return value.
 */
  const toggleOrangeGlow = () => {
    setIsOrangeGlowing(!isOrangeGlowing);
    setIsBlueGlowing(false);
    setIsGreenGlowing(false);
    setIsRedGlowing(false);
  };

  const stackStyles = {
    border: '1px solid rgba(255,255,255,0.8)',
    borderRadius: '10px',
    boxShadow: '0px 5px 5px 5px rgba(0, 0, 0, 0.14)',
    padding: '1.3em',
    margin: '1em',
    textAlign: 'center',
    display: 'inline-block',
    backgroundColor: '#ffffff',

  };

  return (
    <Grow in={growStatus}>
    <div>
        <Fade in={error !== null}>
            <Alert severity="error">{error}</Alert>
        </Fade>
        <Stack
        className='card'
        border={1}
        sx={stackStyles}
        >

        <Typography variant='h4' align='center' marginBottom={1}>
            {question}
        </Typography>

        {
        (correctStatus) &&

        <Fade in={true}>
        <Box>
            <Typography variant='h2' align='center' marginBottom={3}>Correct! 😀</Typography>
            <Typography variant='h5' align='center' marginBottom={4}>Your Answer: {yourAnswer} </Typography>
            <Button size='large'
                onClick={() => {
                    props.onAnswer(true);
                    setGrowStatus(false);
                }}>
                Next Question
            </Button>
        </Box>
        </Fade>

        } 
        {
        (!correctStatus && correctStatus !== null) && 
        
        <Fade in={true}>
        <Box>
            <Typography variant='h3' align='center' marginBottom={3}>
                Incorrect ☹️
            </Typography>
            {/* <Typography variant='h5' align='center' marginBottom={2}>Your Answer: {yourAnswer} </Typography> */}
            <Typography variant='h5' align='center' marginBottom={4}>Correct Answer: {correctAnswer} </Typography>
            <Button size='large'
                onClick={() => {
                    props.onAnswer(false);
                    setGrowStatus(false);
                }}>
                Next Question
            </Button>
        </Box>
        </Fade>
        }

        {
        (yourAnswer == null) &&

            <ToggleButtonGroup
                orientation="vertical"
                exclusive
                value={view}
                fullWidth={true}
                onChange={handleChange}
                sx={{ display: 'flex', justifyContent: 'center' }}
            >
                <ToggleButton
                value="a"
                className={`red-glow ${isRedGlowing ? 'glow' : ''}`}
                onClick={toggleRedGlow}
                sx={{
                    backgroundColor: 'rgba(255, 155, 148, 0.7)',

                    color: 'black',

                    '&:hover': {
                    backgroundColor: 'rgba(255, 155, 148, 0.7)',
                    },
                    '&.Mui-selected': {
                        backgroundColor: 'rgba(255, 88, 88)', // Change background color when selected
                        color: '#fff', // Change text color when selected
                        '&:hover': {
                            backgroundColor: 'rgb(255, 88, 88)',
                        },
                    },

                }}
                >
                <Typography variant='h5'>{options[0]}</Typography>
                </ToggleButton>
                <ToggleButton
                value="b"
                className={`blue-glow ${isBlueGlowing ? 'glow' : ''}`}
                onClick={toggleBlueGlow}
                sx={{
                    color: 'black',
                    backgroundColor: 'rgba(121, 169, 252, 0.7)',
                    '&:hover': {
                    backgroundColor: 'rgba(121, 169, 252, 0.7)',
                    },
                    '&.Mui-selected': {
                        backgroundColor: 'rgb(2, 101, 207)', // Change background color when selected
                        color: '#fff', // Change text color when selected
                        '&:hover': {
                            backgroundColor: 'rgb(2, 101, 207)',
                        },
                    },
                    
                    
                }}
                >
                <Typography variant='h5'>{options[1]}</Typography>
                </ToggleButton>
                { options[2] && <ToggleButton
                value="c"
                className={`green-glow ${isGreenGlowing ? 'glow' : ''}`}
                onClick={toggleGreenGlow}
                sx={{
                    backgroundColor: 'rgba(153, 255, 160, 0.7)',
                    color: 'black',
                    '&:hover': {
                    backgroundColor: 'rgba(153, 255, 160, 0.7)',
                    },
                    '&.Mui-selected': {
                        backgroundColor: 'rgb(28, 166, 23)', // Change background color when selected
                        color: '#fff', // Change text color when selected
                        '&:hover': {
                            backgroundColor: 'rgb(28, 166, 23)',
                        },
                    },
                }}
                >
                <Typography variant='h5'>{options[2]}</Typography>
                </ToggleButton> }
                { options[3] &&<ToggleButton
                value="d"
                className={`orange-glow ${isOrangeGlowing ? 'glow' : ''}`}
                onClick={toggleOrangeGlow}
                sx={{
                    color: 'black',
                    backgroundColor: 'rgba(247, 203, 79, 0.7)',
                    '&:hover': {
                    backgroundColor: 'rgba(247, 203, 79, 0.7)',
                    },
                    '&.Mui-selected': {
                        backgroundColor: 'rgb(255, 181, 33)', // Change background color when selected
                        color: '#fff', // Change text color when selected
                        '&:hover': {
                            backgroundColor: 'rgb(255, 181, 33)',
                        },
                    },
                }}
                >
                <Typography variant='h5'>{options[3]}</Typography>
                </ToggleButton> }
            </ToggleButtonGroup>

        } 

        {
        (yourAnswer == null) &&

            <Button variant='contained' color='success' size='large' sx={{ marginTop:2, }} onClick={handleSubmit} disableElevation>
                Submit
            </Button>

        }
        </Stack>
    </div>
    </Grow>
  );
}

Question.propTypes = {
  question: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  answer: PropTypes.string.isRequired,
  view: PropTypes.any,
  onAnswer: PropTypes.func.isRequired,
};
