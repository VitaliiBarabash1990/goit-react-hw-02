import { useState, useEffect } from "react";
import Description from "./components/Description/Description";
import s from "./App.module.css";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

function App() {
	// const [values, setValues] = useState(options);
	const options = {
		good: 0,
		neutral: 0,
		bad: 0,
	};

	const [values, setValues] = useState(() => {
		const savedClicks = JSON.parse(window.localStorage.getItem("saved-clicks"));
		if (savedClicks !== null) {
			return savedClicks;
		}
		return options;
	});

	useEffect(() => {
		window.localStorage.setItem("saved-clicks", JSON.stringify(values));
	}, [values]);

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

	const totalFeedback = values.good + values.neutral + values.bad;

	return (
		<div className={s.app}>
			<Description />
			<Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} />
			{totalFeedback !== 0 ? (
				<Feedback
					valueGood={values.good}
					valueNeutral={values.neutral}
					valueBad={values.bad}
					totalFeedback={totalFeedback}
				/>
			) : (
				<Notification />
			)}
		</div>
	);
}

export default App;
