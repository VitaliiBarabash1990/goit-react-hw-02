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

	// Функція, яку будемо передавати в ClickCounter
	// для виклику під час кліку
	const updateGood = () => {
		setValues({
			...values,
			good: values.good + 1,
		});
	};
	const updateNeutral = () => {
		setValues({
			...values,
			neutral: values.neutral + 1,
		});
	};
	const updateBad = () => {
		setValues({
			...values,
			bad: values.bad + 1,
		});
	};
	const reset = () => {
		setValues({
			...values,
			good: 0,
			neutral: 0,
			bad: 0,
		});
	};
	return (
		<div className={s.app}>
			<Description />
			<Options
				onUpdateGood={updateGood}
				onUpdateNeutral={updateNeutral}
				onUpdateBad={updateBad}
				reset={reset}
			/>
			<Feedback
				valueGood={values.good}
				valueNeutral={values.neutral}
				valueBad={values.bad}
			/>
		</div>
	);
}

export default App;
