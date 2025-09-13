import {DataTester, BraceCheck, EscapeCharacterCheck} from "5etools-utils";
import * as Uf from "5etools-utils/lib/UtilFs.js";

const TIME_TAG = "\tRun duration";
console.time(TIME_TAG);

async function main () {
	const dataTesters = [
		new BraceCheck(),
		new EscapeCharacterCheck(),
	];
	DataTester.register({dataTesters});

	await Uf.pRunOnDirs(
		async (dir) => {
			console.log(`Running on directory "${dir}"...`);
			await DataTester.pRun(
				dir,
				dataTesters,
			);
		},
		{
			isSerial: true,
		},
	);

	const outMessage = DataTester.getLogReport(dataTesters);

	console.timeEnd(TIME_TAG);

	return !outMessage;
}

export default main();
