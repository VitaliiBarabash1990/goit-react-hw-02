import s from "./Feedback.module.css";

const Feedback = ({ valueGood, valueNeutral, valueBad }) => {
	return (
		<div>
			<ul className={s.options}>
				<li>Good: {valueGood}</li>
				<li>Neutral: {valueNeutral}</li>
				<li>Bad: {valueBad}</li>
				<li>Total: {valueGood + valueNeutral + valueBad}</li>
				<li>
					Positive:{" "}
					{Math.round(
						(valueGood / (valueGood + valueNeutral + valueBad)) * 100
					)}{" "}
					%{" "}
				</li>
			</ul>
		</div>
	);
};

export default Feedback;
