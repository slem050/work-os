import Project from "../schemes/projectScheme";
const express = require('express');
const router = express.Router();


router.post("/add-Project", async (req, res)=>{
    try {
        const {name,
            owner,
            finishDate,
            startDate,
            text,
            particapent}  = req.body;
    
        
        
    
        const ProjectDB = new Project({
            owner,
            finishDate,
            startDate,
            text,
            particapent
        });
    
            ProjectDB.save(function (err, USERS) {
            if (err) return console.error(err);
            console.log(ProjectDB.name + " saved to PROJECT collection.");
          });
                
      } catch (error) {
        console.info('ON app.post("/add-Project"')
        console.log(req.body);
        console.error(error.message);
        res.send({ error: error.message });
      }
})
module.exports = router;