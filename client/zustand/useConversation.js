import { create } from "zustand";

const useConversation = create((set) => ({
	selectedFriend: null,
	setSelectedFriend: (selectedFriend) => set({ selectedFriend }),
	messages: [],
	setMessages: (messages) => set({ messages }),
}));

export default useConversation;