const fsClass = require("../lib/fsUsers")
const fsUsers = new fsClass("../model/users.json")
const fsPosts = new fsClass("../model/posts.json")

module.exports = (req,res) => {
    try {
        const { username } = req.params
        
        const allUsers = JSON.parse(fsUsers.read())
        const user = allUsers.find(el => el.username == username)
        
        const allPosts = JSON.parse(fsPosts.read())
        const userPosts = allPosts.filter(el => el.userId == user.id)

        if(!user){
            return res.status(400).send({
                message: "User not found"
            })
        }
        res.render("index",{user, userPosts})
    
    } catch (error) {
        console.log(error);
    }
}