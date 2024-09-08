import s from "./Options.module.css";
// import { useState } from "react";

const Options = ({ onUpdateGood, onUpdateNeutral, onUpdateBad, reset }) => {
	return (
		<div>
			<div className={s.options}>
				<button onClick={onUpdateGood} className={s.btn}>
					Good
				</button>
				<button onClick={onUpdateNeutral} className={s.btn}>
					Neutral
				</button>
				<button onClick={onUpdateBad} className={s.btn}>
					Bad
				</button>
				<button onClick={reset} className={s.btn}>
					Reset
				</button>
			</div>
		</div>
	);
};

export default Options;
