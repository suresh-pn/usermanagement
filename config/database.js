const mongoose = require("mon goose")
let connectdb = async() => {

    await mongoose.connect(process.env.MONGO_URL)

    .then(()=> console.log('connected to db'))
    .catch(()=> console.log('failed to connect to db'))

}

module.exports = connectdb