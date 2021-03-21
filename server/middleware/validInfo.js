module.exports =  (req, res, next) => {
    const { email, name, password } = req.body;

    function validEmail(userEmail) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
    }

    if (req.path === "/register") {

//1. Check for empty values in 
        if (![email, name, password].every(Boolean)) {
            return res.status(401).json("Missing Credentials");
//2. Check for valid email
        } else if (!validEmail(email)) {
            return res.status(401).json("Invalid Email");
        }
    } else if (req.path === "/login") {
//3. check for empty values
        if (![email, password].every(Boolean)) {
            return res.status(401).json("Missing Credentials");
//3. check for empty values
        } else if (!validEmail(email)) {
            return res.status(401).json("Invalid Email");
        }
    }

    next();
};