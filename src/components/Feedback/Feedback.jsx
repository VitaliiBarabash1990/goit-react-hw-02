import s from "./Feedback.module.css";

const Feedback = ({ valueGood, valueNeutral, valueBad, totalFeedback }) => {
	return (
		<div>
			<ul className={s.options}>
				<li>Good: {valueGood}</li>
				<li>Neutral: {valueNeutral}</li>
				<li>Bad: {valueBad}</li>
				<li>Total: {totalFeedback}</li>
				<li>Positive: {Math.round((valueGood / totalFeedback) * 100)} % </li>
			</ul>
		</div>
	);
};

export default Feedback;
