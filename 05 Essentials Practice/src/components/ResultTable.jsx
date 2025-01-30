import { calculateInvestmentResults, formatter } from "../util/investment";

export default function ResultTable({ userInput }) {

  const annualResults = calculateInvestmentResults(userInput);

  let totalInterest = 0;
  let totalInvested = userInput.initialInvestment;
  for (let i = 0; i < annualResults.length; i++) {
    totalInterest += annualResults[i].interest;
    annualResults[i]['totalInterest'] = totalInterest;
    totalInvested += annualResults[i].annualInvestment;
    annualResults[i]['totalInvested'] = totalInvested;
  }

  return <table id="result">
    <thead>
      <tr>
        <th>Year</th>
        <th>Investment Value</th>
        <th>Interest (Year)</th>
        <th>Total Interest</th>
        <th>Invested Capital</th>
      </tr>
    </thead>
    <tbody>
      {annualResults.map((result, index) => (<tr key={index}>
        <td>{result.year}</td>
        <td>{formatter.format(result.valueEndOfYear)}</td>
        <td>{formatter.format(result.interest)}</td>
        <td>{formatter.format(result.totalInterest)}</td>
        <td>{formatter.format(result.totalInvested)}</td>
      </tr>))}
    </tbody>
  </table>
}