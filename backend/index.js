// To connect with your mongoDB database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/', {
	dbName: 'yourDB-name',
	useNewUrlParser: true,
	useUnifiedTopology: true
}, err => err ? console.log(err) :
	console.log('Connected to yourDB-name database'));

// Schema for users of app
const eventSchema = new mongoose.Schema({
	name: {
		type: String,
		required: false,
	},
	location: {
		type: String,
		required: false,
	},
	date: {
		type: String,
		default: Date.now,
	},
});
const Event = mongoose.model('events', eventSchema);
eventSchema.createIndexes();

// For backend and express
const express = require('express');
const app = express();
const cors = require("cors");
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());
app.get("/", (req, resp) => {

	resp.send("App is Working");
	// You can check backend is working or not by
	// entering http://loacalhost:5000
	
	// If you see App is working means
	// backend working properly
});

app.post("/create", async (req, resp) => {
	try {
		const event = new Event(req.body);
		let result = await event.save();
		result = result.toObject();
		
		resp.send(req.body);
			

	} catch (e) {
		resp.send("Something Went Wrong");
	}
});
app.listen(5000);
