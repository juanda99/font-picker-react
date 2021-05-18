import React, { useState } from "react";

import FontPicker from "../dist/FontPicker.es";

const API_KEY = "AIzaSyAOkdDlx49HCSBdu86oe8AD1Q7piIxlR6k";

function OnePicker() {
	const [activeFontFamily, setActiveFontFamily] = useState("Open Sans");
	return (
		<div className="wrapper">
			<FontPicker
				apiKey={API_KEY}
				activeFontFamily={activeFontFamily}
				onChange={(nextFont) => setActiveFontFamily(nextFont.family)}
			/>
			<p className="apply-font">The font will be applied to this text.</p>
		</div>
	);
}

export default OnePicker;
