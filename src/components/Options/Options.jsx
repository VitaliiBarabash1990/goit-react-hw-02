import s from "./Options.module.css";
// import { useState } from "react";

const Options = ({ updateFeedback }) => {
	return (
		<div>
			<div className={s.options}>
				<button onClick={() => updateFeedback("good")} className={s.btn}>
					Good
				</button>
				<button
					onClick={() => updateFeedback("neutral")}
					className={s.btn}
					value="neutral"
				>
					Neutral
				</button>
				<button
					onClick={() => updateFeedback("bad")}
					className={s.btn}
					value="bad"
				>
					Bad
				</button>
				<button
					onClick={() => updateFeedback("reset")}
					className={s.btn}
					value="reset"
				>
					Reset
				</button>
			</div>
		</div>
	);
};

export default Options;
