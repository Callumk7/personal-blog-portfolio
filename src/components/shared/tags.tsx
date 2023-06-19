import clsx from "clsx";

enum TagColour {
	Red,
	Blue,
	Green,
	Yellow,
	Pink,
}

export default function Tag({ tag, colour }: { tag: string; colour: TagColour }) {
	let colourString = "";
	switch (colour) {
		case TagColour.Red:
			colourString = "border-red-900 text-red-900";
			break;

		case TagColour.Blue:
			colourString = "border-blue-500 text-blue-500";
			break;

		case TagColour.Green:
			colourString = "border-lime-500";

		default:
			break;
	}

	return <div className={clsx("rounded-full border p-1", colourString)}>{tag}</div>;
}
