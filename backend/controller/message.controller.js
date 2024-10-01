import Message from '../models/message.model.js';
import Conversation from '../models/conversation.model.js'; 
import User from '../models/user.model.js';

export const sendMessage = async (req, res, next) => { 
    try {
        const { message } = req.body;
        const { receiverId } = req.params;
        const senderId = req.user._id;

        // Check if a conversation exist
        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        });

        // If wala, create a new one
        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            });
        }

        //Create and save the message
        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        });

        // Add the new message sa message list between 2 user
        conversation.messages.push(newMessage._id);
 
        //Kaya naka promise.all para mag save both on time
        await Promise.all([conversation.save(), newMessage.save()]);

        res.status(201).json({ success: true, message: newMessage });
        
    } catch (error) {
        console.error('Error in message controller:', error);
        next(error);
    }
};

export const getMessage = async (req, res) => {
    try {
        const { id: userToChatId } = req.params
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId] },
        }).populate('messages');

        if(!conversation) return res.status(200).json([]);

        const messages = conversation.messages;

        res.status(200).json(messages);

    } catch (error) {
        console.error('Error in getMessage controller:', error);
        next(error);
    }
}