import React, { useState } from 'react';
import ProfileCard from '@/components/profile/ProfileCard';
import ContactSupport from '@/components/profile/ContactSupport';
import { User } from '@shared/schema';
import { useToast } from '@/hooks/use-toast';

const SettingsPage: React.FC = () => {
  const { toast } = useToast();
  // Mock user data - in a real app this would come from API
  const [user, setUser] = useState<User>({
    id: 1,
    username: 'dr.yuvaraj',
    name: 'Dr. S. Yuvaraj',
    email: 'yuvaraj@gmail.com',
    phone: '123567890',
    organization: 'Yuvaraj Hospitals',
    dob: '09.06.2003',
    gender: 'Male',
    nationality: 'Indian',
    state: 'TamilNadu',
    city: 'Chennai',
    memberSince: 'January 17, 2023',
    lastLogin: 'Today at 10:56 am',
    password: ''  // would not normally be included in the client response
  });

  const handleEditProfile = () => {
    toast({
      title: "Edit Profile",
      description: "Profile editing functionality would be implemented here in production.",
    });
  };

  const handleChangePassword = () => {
    toast({
      title: "Change Password",
      description: "Password change functionality would be implemented here in production.",
    });
  };

  const handleLogout = () => {
    toast({
      title: "Logout",
      description: "Logout functionality would be implemented here in production.",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* User Profile Section */}
        <div className="bg-secondary bg-opacity-70 rounded-xl shadow-lg p-6 mb-8">
          <ProfileCard
            user={user}
            onEditProfile={handleEditProfile}
            onChangePassword={handleChangePassword}
            onLogout={handleLogout}
          />
        </div>
        
        {/* Settings and Support */}
        <ContactSupport />
      </div>
    </div>
  );
};

export default SettingsPage;
