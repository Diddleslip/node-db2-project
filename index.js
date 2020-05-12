const server = require("./api/server");
const Port = process.env.PORT || 5000;

server.get("/", (re, res) => {
    res.status(200).json({ message: "Server is up and running!" });
})

server.listen(Port, () => {
    console.log(`\n Server is up and running \n`);
})