const arr=[
	{
		color: "red",
		value: "#f00"
	},
	{
		color: "green",
		value: "#0f0"
	},
	{
		color: "blue",
		value: "#00f"
	},
	{
		color: "cyan",
		value: "#0ff"
	},
	{
		color: "magenta",
		value: "#f0f"
	},
	{
		color: "yellow",
		value: "#ff0"
	},
	{
		color: "red",
		value: "#000"
	}
]
const uniqueArr = arr.filter((obj, index, self) =>
    index === self.findIndex((t) => (
        t.color === obj.color
    ))
);

console.log(uniqueArr);