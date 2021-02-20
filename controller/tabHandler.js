const Tab = require("../model/tab");
const statusCodes = require("../util");

const createTab = (req, res)=>{
    const tab = new Tab(req.body);
    console.log("create tab \n", tab);
    tab.save()
        .then(result=>{
            console.log("Tab document saved!")
            res.json(result);
        })
        .catch(err=>{
            const body = 
            {
                message: "There was an error in processing your request, please review and send again.",
                error: err._message
            }
            console.log(err.error);
            res.status(statusCodes.BAD_REQUEST).json(body);
        });
}

const getTabById = (req, res)=>{
    const id = req.params.id;
    console.log("get tab by id", id);
    Tab.findById(id)
        .then(result=>{
            if (result==null){
                console.log("Tab document not found!", result);
                res.status(statusCodes.NOT_FOUND).json({error: "no tab exists with that id!"});
            }
            else{
                console.log("Tab document found!", result);
                res.json(result);
            }
        })
        .catch(err=>{
            const body = 
            {
                message: "There was an error in processing your request, please review and send again.",
                error: err._message
            }
            console.log(err.error);
            res.status(statusCodes.BAD_REQUEST).json(body);
        });
}

const getAllTabs = (req, res)=>{
    console.log("get all tabs");
    Tab.find()
        .then(result=>{
            console.log("Tabs found!", result);
            res.json(result);
        })
        .catch(err=>{
            const body = 
            {
                message: "There was an error in processing your request, please review and send again.",
                error: err._message
            }
            console.log(err.error);
            res.status(statusCodes.BAD_REQUEST).json(body);
        });
}

module.exports ={
    createTab,
    getTabById,
    getAllTabs
}