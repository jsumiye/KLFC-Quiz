import { useState } from 'react';
import Question from './Question';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

/**
 * A React functional component that renders a quiz with questions about Korean culture.
 * The quiz keeps track of the user's score and displays a message based on their performance.
 *
 * @return {JSX.Element} The JSX element representing the quiz.
 */
function Quiz() {

    const stackStyles = {
        border: '1px solid rgba(255,255,255,0.8)',
        borderRadius: '10px',
        boxShadow: '0px 5px 5px 5px rgba(0, 0, 0, 0.14)',
        padding: '1.4em',
        margin: '2em',
        textAlign: 'center',
        display: 'inline-block',
        backgroundColor: '#ffffff',
      };


    const [questions] = useState([
            {
                question:"What does KLFC stand for?",
                options:["Korean Language Foundation Course",
                        "Korean Linguistics Folklore Center",
                        "Korean Language Flagship Center",
                        "Korea Language Fluency Certificate"],
                answer:"c"
            },
            {
                question:"What is the capital city of South Korea?",
                options:["Moscow","Seoul", "Dejeon", "Tokyo"],
                answer:"b"
            },
            {
                question:"Which dog is native to Korea?",
                options:["Shiba dog","Jindo Dog", "Hamhung Dog", "Golden Retriever"],
                answer:"b"
            },
            {
                question:"What is the name of the Korean alphabet?",
                options:["Cuneiform",
                        "Katakana", 
                        "Hiragana", 
                        "Hangul"],
                answer:"d"
            },
            {
                question:"Does Korea have four distinct seasons?",
                options:["True","False"],
                answer:"a"
            },
            {
                question:"Kimchi was originally made to eat vegetables during the winter",
                options:["True","False"],
                answer:"a"
            },
            {
                question:"Which is not one of BTS’s songs?",
                options:["Dynamite","DNA", "Honey", "Butter"],
                answer:"c"
            },
            {
                question:"Who is not a member of HUNTR/X?",
                options:["Zoey","Rumi", "Hana", "Mira"],
                answer:"c"
            },
            {
                question:"What Korean traditional alcoholic drink is white and made with rice?",
                options:["Whiskey","Beer", "Makgeolli", "Wine"],
                answer:"c"
            },
            {
                question:"What is the soup Koreans eat on their birthdays?",
                options:["Teokguk","Miyeok soup", "Yukgaejang", "Taro soup"],
                answer:"b"
            },
            {
                question:"What is the name of the traditional Korean costume?",
                options:["Ao Dai","Kimono", "Cheongsam", "Hanbok"],
                answer:"d"
            },
            {
                question:"What is the name of Korea's currency?",
                options:["Yen","Won", "Ruble", "Pound"],
                answer:"b"
            },
            {
                question:"Who is not a member of the K-Pop group TWICE?",
                options:["Jihyo", "Nayeon", "Irin", "Sana"],
                answer:"c"
            },
            {
                question:"What is the national flower of South Korea",
                options:["Hibiscus","Rose", "Lily", "Daffodil"],
                answer:"a"
            },
            {
                question:"What is the name of Korean flag?",
                options:["Ingong gi","Seoungjo gi", "Taegeuk gi", "Ja gi"],
                answer:"c"
            },
            {
                question:"Which is not a traditional Korean food?",
                options:["Teokguk","Taro Soup", "Song Pyeon", "Spicy Chicken Flavored Noodles"],
                answer:"d"
            },
    ]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState("start");

    /**
     * Handles the user's answer to the current question.
     *
     * @param {boolean} isCorrect - Whether the user's answer is correct or not.
     * @return {void}
     */
    const handleAnswer = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setShowResult("results");
        }
    };

    /**
     * Resets the score, current question index, and show result state.
     *
     * @return {void}
     */
    const handleRestart = () => {
        setScore(0);
        setCurrentQuestionIndex(0);
        setShowResult("start");
    };

    /**
     * Returns a congratulatory message based on the user's score.
     *
     * @param {number} score - The user's current score.
     * @return {string} A message describing the user's performance.
     */
    function getMessage(score) {
        if (score == questions.length) {
            return("Perfection!! 🥇");
        } else
        if (score >= 13) {
            return("Superb! 🏆");
        } else
        if (score >= 7) {
            return("Good Job! 👍");
        } else {
            return("Keep trying!");
        }
    }

    return (
        <div>
            {(showResult == "start") &&
                <Stack style={stackStyles}>
                    <Typography padding={2} paddingBottom={0} variant="h4">Korean Language Flagship Center <br/> Culture Day Trivia</Typography>
                    <Typography padding={2} paddingTop={1} paddingBottom={4} variant="h6">Test your knowledge of Korea and its culture!</Typography>
                    <Button variant='contained' size='large' color='primary' onClick={() => setShowResult("quiz")}> Start </Button>
                </Stack>                

            }
            {(showResult == "quiz") &&
                <Question
                    question={questions[currentQuestionIndex].question + ` (${currentQuestionIndex+1}/${questions.length})`}
                    options={questions[currentQuestionIndex].options}
                    answer={questions[currentQuestionIndex].answer}
                    onAnswer={handleAnswer}
                    view={null}
                />
            }
            {(showResult == "results") &&
                <Stack style={stackStyles}>
                    <Typography padding={2} paddingBottom={0} variant="h4">Quiz Completed, <br/> Thanks for playing!</Typography>
                    <Typography padding={2} paddingTop={1} paddingBottom={1} variant="h5">Your Score: {score}/{questions.length}</Typography>
                    <Typography padding={2} paddingTop={1} paddingBottom={4} variant="h4">
                        {getMessage(score)}
                    </Typography>
                    <Button variant='contained' size='large' color='primary' onClick={handleRestart}> Restart </Button>
                </Stack>
            }
        </div>
    );
}

export default Quiz;
