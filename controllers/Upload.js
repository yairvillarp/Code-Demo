const fs = require('fs')
const Vehicle = require('../model/Vehicle')
const Provider1 = require('../parsers/provider1')
const Provider2 = require('../parsers/provider2')

const UploadController = {
    async getall(req, res){
        //this is for testing purposes to check if you have any vehicles on the DB
        const vehicles = await Vehicle.findOne({})
        res.status(201).send(vehicles)
    },
    async upload(req, res) {
        switch (req.body.provider) {
            //here add how many providers you need after creatting the parser
            case "provider1":
                try {
                    await Provider1.parse(req.file.path);
                    // delete de file once donde with the csv data
                    await fs.unlinkSync(req.file.path)
                    res.status(201).send({msg: "Finished parsing the csv data"})
                } catch (error) {
                    await fs.unlinkSync(req.file.path)
                    res.status(400).send({msg: error.toString()})
                }
                break;
            case "provider2":
                try {
                    await Provider2.parse(req.file.path);
                    // delete de file once donde with the csv data
                    await fs.unlinkSync(req.file.path)
                    res.status(201).send({msg: "Finished parsing the csv data"})
                } catch (error) {
                    await fs.unlinkSync(req.file.path)
                    res.status(400).send({msg: error.toString()})
                }
                break;
            default:
                await fs.unlinkSync(req.file.path)
                res.status(400).send({msg:"the provider does not have a parser"})
                break;
        } 
    }
};
  
module.exports = UploadController;
  