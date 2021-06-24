const fs = require('fs')
var csv = require('csv-parser')
const Vehicle = require('../model/Vehicle')

const Provider1 = {
    async parse(file){
        return new Promise(function(resolve, reject) {
            //the parser is using fs and stream so it will only load the file in chuncks and it will keep the memory on low.
            fs.createReadStream(file)
            .pipe(csv()) //piping the csv with the parser
            .on('data', async function (row) {
                //search if the vehicle axists based on oridinal provider ID and the vin number
                let vehicle = await Vehicle.findOne({originalID: row.id, vin: row.vin});

                if(!vehicle){
                    // create a new Vehicle since it does not exists
                    vehicle = new Vehicle();
                }
                vehicle.originalID = row.id
                vehicle.vin = row.vin
                vehicle.make = row.make
                vehicle.model = row.model
                vehicle.mileage = row.mileage
                vehicle.year = row.year
                vehicle.price = row.price
                vehicle.zipCode = row['zip code']
                vehicle.created = row['created date']
                vehicle.updated = row['updated date']
                await vehicle.save(function (err){
                    if(err){reject(err.toString())}
                })
            })
            .on('end', function () {
                resolve("done")
            })
            .on('error', function(e){
                console.log(e)
                reject(e)
            })
        })
    }
}
module.exports = Provider1;