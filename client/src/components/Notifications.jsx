import React from 'react';
import { UserIcon } from 'lucide-react';
import useGetPending from '../hooks/useGetPending';

const Notifications = ({ isOpen, onClose }) => {
  const { loading, getPending } = useGetPending(); // Use the custom hook
  const [activeTab, setActiveTab] = React.useState('all');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  if (!isOpen) return null;

  const allNotifications = [
    { id: 1, type: 'message', content: 'You have a new message from John Doe' },
    { id: 2, type: 'friend_request', content: 'Jane Smith sent you a friend request' },
    { id: 3, type: 'message', content: 'Alice Johnson replied to your comment' },
  ];

  const friendRequests = getPending;

  const notificationsToShow =
    activeTab === 'all' ? allNotifications : friendRequests;

  return (
    <div className="fixed inset-0 flex items-start justify-end bg-black bg-opacity-50 p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-96 mt-20">
        <h2 className="text-xl font-bold mb-4">Notifications</h2>
        <div className="flex mb-4">
          <button
            className={`flex-1 p-2 text-center ${activeTab === 'all' ? 'bg-blue-500 text-white' : 'text-gray-700'}`}
            onClick={() => handleTabChange('all')}
          >
            All
          </button>
          <button
            className={`flex-1 p-2 text-center ${activeTab === 'friend_requests' ? 'bg-blue-500 text-white' : 'text-gray-700'}`}
            onClick={() => handleTabChange('friend_requests')}
          >
            Friend Requests
          </button>
        </div>
        <div className="mb-4">
          {loading ? (
            <p className="text-gray-500">Loading...</p>
          ) : notificationsToShow.length > 0 ? (
            <ul className="space-y-2">
              {notificationsToShow.map((notification) => (
                activeTab === 'friend_requests' ? (
                  <li key={notification._id} className="flex items-center p-2 border rounded-lg">
                    <img src={notification.profilePic} alt={notification.fullName} className="h-8 w-8 rounded-full mr-2" />
                    <div className="flex-grow">
                      <p className="font-medium">{notification.fullName} sent you a friend request</p>
                    </div>
                    <button className="ml-4 px-3 py-1 bg-blue-500 text-white rounded-lg">
                      Accept
                    </button>
                  </li>
                ) : (
                  <li key={notification.id} className="flex items-center p-2 border rounded-lg">
                    <span className="mr-2">
                      <UserIcon className="h-5 w-5 text-gray-600" />
                    </span>
                    <div className="flex-grow">
                      <p className="font-medium">{notification.content}</p>
                    </div>
                  </li>
                )
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No notifications</p>
          )}
        </div>
        <div className="flex justify-end">
          <button type="button" onClick={onClose} className="mr-2 px-4 py-2 bg-gray-300 rounded-lg">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
