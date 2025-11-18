import Quiz from './Quiz';

const backStyles = {        
    backgroundImage: 'url("CKS-Front.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'blur(8px)', // Add a blur effect
    zIndex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
};

const quizStyles = {
    position: 'absolute',
    zIndex: 10,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
};

const containerStyles = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: '',
    alignItems: '',
    minHeight: '100vh',
    paddingBottom: '0vh',
};

const imgContainerStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    zIndex: 100, // Increased z-index to ensure it's above backStyles
    top: 0,
    left: 0,
    right: 0,
};

const imgStyles = {
    width: '100%',
    maxWidth: '430px',
    borderBottomLeftRadius: '22px',
    borderBottomRightRadius: '22px',
}

/**
 * The main application component, responsible for rendering the quiz interface.
 *
 * @return {JSX.Element} The JSX element representing the application interface.
 */
function App() {
  return (
    <div style={containerStyles}>
        <div style={backStyles}></div>
        <div style={imgContainerStyles}>
            <a href='https://koreanflagship.manoa.hawaii.edu' target='_blank' style={{ zIndex: 101 }}> {/* Increased z-index */}
                <img src='https://koreanflagship.manoa.hawaii.edu/trivia/klfclogo.png' style={imgStyles}></img>
            </a>
        </div>
        <div style={quizStyles}>
            <Quiz />
        </div>
    </div>
  );
}

export default App;
