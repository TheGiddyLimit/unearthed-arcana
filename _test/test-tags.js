import {DataTester, BraceCheck, EscapeCharacterCheck} from "5etools-utils";
import * as Uf from "5etools-utils/lib/UtilFs.js";

const TIME_TAG = "\tRun duration";
console.time(TIME_TAG);

async function main () {
	const ClazzDataTesters = [
		BraceCheck,
		EscapeCharacterCheck,
	];
	DataTester.register({ClazzDataTesters});

	await Uf.pRunOnDirs(
		async (dir) => {
			console.log(`Running on directory "${dir}"...`);
			await DataTester.pRun(
				dir,
				ClazzDataTesters,
			);
		},
		{
			isSerial: true,
		},
	);

	const outMessage = DataTester.getLogReport(ClazzDataTesters);

	console.timeEnd(TIME_TAG);

	return !outMessage;
}

export default main();
