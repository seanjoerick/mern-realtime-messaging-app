import User from "../models/user.model.js";

export const getUsers = async (req, res) => {
	try {
		const loggedInUserId = req.user._id;

		const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");

		res.status(200).json(filteredUsers);
	} catch (error) {
		console.error("Error in getUsers: ", error.message);
        next(error);
	}
};

export const addFriends = async (req, res) => {
    const { friendId } = req.body;
    try {
        const loggedInUserId = req.user._id;
        
        const user = await User.findById(friendId);
        if(!user) return res.status(404).json({ message: 'User not found!'});


    } catch (error) {
        console.error("Error adding friends: ", error.message);
        next(error);
    }

}