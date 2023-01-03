import {DataTester, BraceCheck, EscapeCharacterCheck} from "5etools-utils";
import * as Uf from "5etools-utils/lib/UtilFs.js";

const TIME_TAG = "\tRun duration";
console.time(TIME_TAG);

async function main () {
	const ClazzDataTesters = [
		BraceCheck,
		EscapeCharacterCheck,
	];

	await Uf.pRunOnDirs(async (dir) => {
		await DataTester.pRun(
			dir,
			ClazzDataTesters,
		);
	});

	const outMessage = DataTester.getLogReport(ClazzDataTesters);

	console.timeEnd(TIME_TAG);

	return !outMessage;
}

export default main();
