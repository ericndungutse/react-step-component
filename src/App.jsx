import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handleNext() {
    // if (step !== messages.length) setStep(step + 1) //Bad Way;
    // Better Way
    if (step !== messages.length) setStep((currStep) => currStep + 1); //Bad Way;
  }

  function handlePrevious() {
    // if (step !== 1) setStep(step - 1);

    if (step !== 1) setStep((currStep) => currStep - 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((isOpen) => !isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 && "active"}>1</div>
            <div className={step >= 2 && "active"}>2</div>
            <div className={step >= 3 && "active"}>3</div>
          </div>
          <StepMessage step={step}>
            {messages[step - 1]}
            <br />
            <br />
            <div className="buttons">
              <Button
                bgColor="#e7e7e7"
                txtColor="#333"
                onClick={() => alert("Welcome!")}
              >
                Learn How
              </Button>
            </div>
          </StepMessage>

          <div className="buttons">
            <Button bgColor="#7950f2" txtColor="#fff" onClick={handlePrevious}>
              <span>👈</span>Previous
            </Button>

            <Button bgColor="#7950f2" txtColor="#fff" onClick={handleNext}>
              Next<span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function Button({ bgColor, txtColor, children, onClick }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: txtColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function StepMessage({ step, children }) {
  return (
    <p className="message">
      <h3>Step {step}</h3>
      {children}
    </p>
  );
}
