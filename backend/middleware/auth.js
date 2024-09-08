const supabase = require("../config/supabaseClient");


const auth = async (req,res, next)=>{
    const token = req.headers.authorization?.split(' ')[1];

    if(!token){
        res.status(401).json({error : "missing or invalid token"})
    }

    const {data, error} =  await supabase.auth.getUser(token);
   

    if(!data.user || error){
        res.status(401).json({error: "invalid or expired token"})
    }

    req.user = data.user
    next()
}

module.exports = auth