const csvFilePath = './Proof_homework.csv';
const mongoose = require('mongoose');
const User = require('./models/User.model');
const csv=require('csvtojson');

const populateDb = () => {
	const db = mongoose.connection;

	db.collection('users').drop();
	db.createCollection('users');

	csv({ignoreEmpty: true})
	.fromFile(csvFilePath)
	.then((jsonObj)=>{
	    // The jsonObj was a bit messy. This cleans it up to match schema for database insertion
	    let fieldsObj = jsonObj[0];
	    let data = jsonObj.slice(1);
	    let fields = [];
	    for(let key in fieldsObj){
	    	fields.push(fieldsObj[key]);
	    }
	    let cleanJson = []
	    data.forEach(function(dataObj){
	    	let cleanData = {}; 
	    	let keys = Object.keys(dataObj);
	        let user = new User();
	    	for(var i = 0, len = fields.length; i < len; i++){
          // slight hack to get json key and schema key aligned
          fields[i] = fields[i].replace(' ', '_');
  				user[fields[i]] = dataObj[keys[i]];
	    	}
	    	console.log('user: ', user);
        user.save((err)=>{
            if (err){
                console.log(err);
            }
        })
	    })
	})
}

module.exports = populateDb;
