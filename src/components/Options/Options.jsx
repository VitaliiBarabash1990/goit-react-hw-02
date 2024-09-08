import s from "./Options.module.css";
// import { useState } from "react";

const Options = ({ updateFeedback, totalFeedback }) => {
	return (
		<div>
			<div className={s.options}>
				<button onClick={() => updateFeedback("good")} className={s.btn}>
					Good
				</button>
				<button onClick={() => updateFeedback("neutral")} className={s.btn}>
					Neutral
				</button>
				<button onClick={() => updateFeedback("bad")} className={s.btn}>
					Bad
				</button>
				{totalFeedback !== 0 && (
					<button onClick={() => updateFeedback("reset")} className={s.btn}>
						Reset
					</button>
				)}
			</div>
		</div>
	);
};

export default Options;
