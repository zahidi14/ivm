const supabase = require("../config/supabaseClient");

exports.register = async(req, res)=>{
    const {username, password} = req.body;

    try{
        const {data, error} = await supabase.auth.signUp({
            username: username,
            password:password
        })

        if (error){
            res.status(400).json({"error": error.message})
        }
        res.status(201).json({
            message: "user Registered successfully",
            user: data.user
        })

    }catch(error){
        res.status(500).json({
            message: "internal server error",
            error: error
        })
    }
}

exports.login = async(req, res)=>{
    const {username, password} = req.body
    try{
        const {data, error} = await supabase.auth.signInWithPassword({
            username : username,
            password:password
        })

        if(error){
            res.status(400).json({
                message: "error signin",
                error: error
            })
        }
        
        res.status(201).json({
            message: "user login successfully",
            token: data.session.access_token
        })
    }catch(err){
        res.status(500).json({
            message: "internal server error",
            error: err
        })
    }
}