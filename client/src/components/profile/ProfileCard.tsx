import React from 'react';
import { Button } from '@/components/ui/button';
import { User } from '@shared/schema';

interface ProfileCardProps {
  user: User;
  onEditProfile: () => void;
  onChangePassword: () => void;
  onLogout: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  user,
  onEditProfile,
  onChangePassword,
  onLogout
}) => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/3 flex flex-col items-center mb-6 md:mb-0">
        <div className="relative">
          <div className="h-24 w-24 bg-white rounded-full p-2 mb-2 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-16 w-16"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <button 
            className="absolute bottom-0 right-0 bg-primary text-dark rounded-full p-1"
            title="Change profile picture"
            onClick={() => {/* Change profile picture functionality */}}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
              <circle cx="12" cy="13" r="4"></circle>
            </svg>
          </button>
        </div>
        <h2 className="text-xl font-semibold">{user?.name || 'Dr. S. Yuvaraj'}</h2>
        <p className="text-gray-700">{user?.organization || 'Yuvaraj Hospitals'}</p>
        
        <div className="flex space-x-2 mt-4">
          <Button 
            onClick={onEditProfile}
            className="bg-primary hover:bg-primary/90 text-dark py-2 px-3 rounded flex items-center space-x-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 mr-1"
            >
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
            </svg>
            Edit Profile
          </Button>
          <Button 
            onClick={onChangePassword}
            variant="outline"
            className="bg-blue-100 hover:bg-blue-200 text-blue-800 py-2 px-3 rounded flex items-center space-x-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 mr-1"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            Change Password
          </Button>
        </div>
        
        <Button 
          onClick={onLogout}
          variant="destructive"
          className="mt-4 flex items-center space-x-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 mr-1"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            <polyline points="16 17 21 12 16 7"></polyline>
            <line x1="21" y1="12" x2="9" y2="12"></line>
          </svg>
          Logout
        </Button>
      </div>
      
      <div className="md:w-2/3 md:pl-8 border-t md:border-t-0 md:border-l border-gray-300 md:pl-8 pt-6 md:pt-0">
        <h3 className="text-lg font-semibold mb-4">Account Information</h3>
        
        <div className="space-y-2">
          <p>Email: {user?.email || 'yuvaraj@gmail.com'}</p>
          <p>Contact: {user?.phone || '123567890'}</p>
          <p>DOB: {user?.dob || '09.06.2003'}</p>
          <p>Gender: {user?.gender || 'Male'}</p>
          <p>Nationality: {user?.nationality || 'Indian'}</p>
          <p>State: {user?.state || 'TamilNadu'}</p>
          <p>City: {user?.city || 'Chennai'}</p>
          <p>Member since: {user?.memberSince || 'January 17, 2023'}</p>
          <p>Last Login: {user?.lastLogin || 'Today at 10:56 am'}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
