import User from "../models/user.model.js";

export const getUsers = async (req, res, next) => {
    try {
        const loggedInUserId = req.user._id;

        // Find all users except the logged-in user
        const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");

        res.status(200).json(filteredUsers);
    } catch (error) {
        console.error("Error in getUsers: ", error.message);
        next(error);
    }
};

export const addFriends = async (req, res, next) => {
    const friendId = req.params.userId; 
    try {
        const loggedInUserId = req.user._id;

        // Find the friend by ID
        const friend = await User.findById(friendId);
        if (!friend) return res.status(404).json({ message: 'User not found!' });

        // Check if already friends
        if (friend.friends.includes(loggedInUserId)) {
            return res.status(400).json({ message: 'You are already friends with this user.' });
        }

        // Check if the logged-in user has already sent a request to this friend
        if (friend.pendingRequests.includes(loggedInUserId)) {
            return res.status(400).json({ message: 'Friend request already sent' });
        }

        // Check if the friend has already sent a request to the logged-in user
        const loggedInUser = await User.findById(loggedInUserId); 
        if (loggedInUser.pendingRequests.includes(friendId)) {
            return res.status(400).json({ message: 'You need to accept this friend request.' });
        }

        // Add logged-in user to friend's pending requests
        friend.pendingRequests.push(loggedInUserId);
        await friend.save();

        return res.status(200).json({ message: 'Friend request sent' });
    } catch (error) {
        console.error("Error adding friends: ", error.message);
        next(error);
    }
};


export const acceptFriends = async (req, res, next) => {
    const requesterId = req.params.requesterId; 

    try {
        const loggedInUserId = req.user._id;

        // Find both the logged-in user and the requester
        const loggedInUser = await User.findById(loggedInUserId);
        const requester = await User.findById(requesterId);

        // Check if either user is not found
        if (!loggedInUser || !requester) {
            return res.status(400).json({ message: 'One or both users not found!' });
        }

        // Check if the friend request exists in the logged-in user's pendingRequests
        if (!loggedInUser.pendingRequests.includes(requesterId)) {
            return res.status(400).json({ message: 'Friend request not found' });
        }

        // Add each other to their friends array
        loggedInUser.friends.push(requesterId);
        requester.friends.push(loggedInUserId);

        // Remove the request from the logged-in user's pendingRequests
        loggedInUser.pendingRequests = loggedInUser.pendingRequests.filter(
            (id) => id.toString() !== requesterId.toString()
        );

        // Save both users concurrently
        await Promise.all([loggedInUser.save(), requester.save()]);
        
        res.status(200).json({ message: 'Friend request accepted' });
    } catch (error) {
        console.error('Error accepting friend request:', error.message);
        next(error);
    }
};

// Get the friends of the logged-in user
export const getFriends = async (req, res, next) => {
    try {
        const loggedInUserId = req.user._id;
        const loggedInUser = await User.findById(loggedInUserId)
            .populate('friends', 'fullName profilePic') 
            .select('-password');

        if (!loggedInUser) return res.status(404).json({ message: 'User not found!' });

        // Check if the user has friends
        if (loggedInUser.friends.length === 0) {
            return res.status(200).json({ message: 'No friends yet' });
        }

        return res.status(200).json(loggedInUser.friends);
    } catch (error) {
        console.error('Error getting friends: ', error.message);
        next(error);
    }
};
