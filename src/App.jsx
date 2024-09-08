import { useState } from "react";
import Description from "./components/Description/Description";
import s from "./App.module.css";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";

const options = {
	good: 0,
	neutral: 0,
	bad: 0,
};

function App() {
	const [values, setValues] = useState(options);

	const updateFeedback = (feedbackType) => {
		if (feedbackType === "reset") {
			setValues({
				...values,
				good: 0,
				neutral: 0,
				bad: 0,
			});
		} else {
			setValues((prev) => ({
				...prev,
				[feedbackType]: prev[feedbackType] + 1,
			}));
		}
	};

	return (
		<div className={s.app}>
			<Description />
			<Options updateFeedback={updateFeedback} />
			<Feedback
				valueGood={values.good}
				valueNeutral={values.neutral}
				valueBad={values.bad}
			/>
		</div>
	);
}

export default App;
