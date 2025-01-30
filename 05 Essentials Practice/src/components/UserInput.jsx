export default function UserInput({ userInput, onInputUpdated }) {

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={evt => onInputUpdated('initialInvestment', evt.target.value)} />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={evt => onInputUpdated('annualInvestment', evt.target.value)} />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={evt => onInputUpdated('expectedReturn', evt.target.value)} />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={evt => onInputUpdated('duration', evt.target.value)} />
        </p>
      </div>
    </section>
  );
}