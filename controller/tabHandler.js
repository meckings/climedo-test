const Tab = require("../model/tab");

const createTab = (req, res)=>{
    console.log(req.body);
    const tab = new Tab(req.body);
    tab.save()
        .then(result=>{
            console.log("Tab document saved!")
            res.json(result);
        })
        .catch(err=>{
            console.log(err.error);
            res.status(400).json({error: err._message});
        });
}

module.exports ={
    createTab
}