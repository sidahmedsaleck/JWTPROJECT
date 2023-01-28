

const resources = (req,res) => {
    res.status(200).send(`<h1>Welcome <strong> ${res.userName}</strong> to you resources </h1>`)
}


module.exports = resources