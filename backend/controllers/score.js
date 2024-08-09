import scoreSchema from "../schemas/scoreSchema.js";
import Score from "../models/score.js";

export const getScores = async (req, res) => {

    try {

        const scores = await Score.findAll();
        if (!scores)
         return res.status(400).send("Scores not found");
        else
         return res.json(scores);
       
    } catch (error) {
        console.log(error);
    res.status(500).json({ error: error.message });
    }
   
};


export const createScore = async (req, res) => {

try {
    const { error } = scoreSchema.validate(req.body);
    if (error) {
        return res.status(400).json({error: error.details.message})
    } else {
        const createdScore = await Score.create(req.body);
        res.status(201).json({id:createdScore.id, username: createdScore.username, score: createdScore.score, message:"succesfully created"});
    }
} catch (error) {
    console.log(error);
    res.status(500).send("couldnt create")
}
};

export const updateScore = async (req, res) => {

try {

    const { error } = scoreSchema.validate(req.body);
    if (error) {
        return res.status(400).json({error: error.details[0].message})
    }

        const [updated] = await Score.update(req.body, {where: {id: req.params.id}});

        if (!updated) {
            return res.status(400).send("Score with such id was not found");

        } else {
        const updatedScore = await Score.findByPk({where: {id: req.params.id}});
        res.status(201).json({username: updatedScore.username, score: updatedScore.score}); 
    }
} catch (error) {
    console.log(error);
    res.status(500).send("couldnt update")
}
};

