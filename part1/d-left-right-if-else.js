import React from 'react';
import App from './src/App';

const History = (props) => {
    if (props.allClicks.length === 0) {
        return (
            <div>
                the app is used by pressing the buttons
            </div>
        )
    }

    reuturn (
        <div>
            button press History: {props.allClicks.join(' ')}
        </div>
    )
}

const Button = ({ onClick, text }) => (
    <button onClick={onClick}>
      {text}
    </button>
  )


const App = (props) => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'));
    setLeft(left + 1);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat('R'));
    setRight(right + 1);
  };

  
  return (
      <div>
          <div>
              {left}
              <Button onClick={handleLeftClick} text="left" />
              <Button onClick={handleRightClick} text="right" />
              {right}

          </div>
      </div>
  )
};

export default App;