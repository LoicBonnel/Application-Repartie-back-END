//const data = require("./../models/data.json");
const Blagues = require("../model/Blagues");
const controllerBlague = 
{
    find: async (req, res) =>{
        if(req.query.search){
                const query = req.query.search;
                const result = data.filter(song => song.title.toLowerCase().includes(query.toLowerCase()));
                if (result.length === 0) {
                    return res.status(404).json({ error: "No matching songs found." });
                }
                res.status(200).json({ result });
                console.log(result);
        }else{
            const data = await Blagues.findAll();
            res.status(200).json({result: data });
        }
    },

create : async (req,res)=>{
    console.log(req.body);
    const data = await Blagues.create(req.body);
    console.log(data);
    // res.status(201).json({message : "votre blague a été ajoutée"});
},

    findById: (req, res) => {
        const id = req.params.id
        if(isNaN(id)){
            return res.status(400).json({error : "Don't use text for id"});
        }
        if(id > data.length){
            return res.status(404).json({error : "ID not found ..."});
        }

        return res.status(200).json({result : data[id-1]})
    },

    delete: async (req, res) => {
        const id = req.param.id;
        const data = await Blagues.destroy({
            where :{
                id:id
            }
        });
        res.status(200).json({message : "Suppression effectué."})
    },


    random: (req, res)=>{

    }
}

module.exports = controllerBlague