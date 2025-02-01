import { getLocalStorageData } from 'utility';
import React, { useState, useEffect } from 'react';
import { useTheme } from 'context/ThemeContext';
// The styles will now be imported through the main style.scss file

const Settings: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [activeTab, setActiveTab] = useState('profile');
  const [formData, setFormData] = useState({
    // Profile Data
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    profilePicture: null as File | null,
    username: '',
    gender: '',
    image: '',
    bio: '',
    // Site Settings
    siteName: '',
    siteEmail: '',
    timezone: 'UTC',
    logo: null,
    theme: 'light',
    language: 'en',
    notifications: true,
    emailNotifications: true
  });

  // Load user data on component mount
  useEffect(() => {
    const adminUserData = getLocalStorageData("loginData", null);
    console.log(adminUserData,'adminuserdata');
    
    if (adminUserData) {
      setFormData(prev => ({
        ...prev,
        firstName: adminUserData.firstName || '',
        lastName: adminUserData.lastName || '',
        email: adminUserData.email || '',
        username: adminUserData.username || '',
        gender: adminUserData.gender || '',
        image: adminUserData.image || '',
        phone: adminUserData.phone || '',
        bio: adminUserData.bio || '',
        // Keep existing profile picture if no new one is uploaded
        profilePicture: adminUserData.profilePicture || null
      }));
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData(prev => ({
        ...prev,
        profilePicture: file
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can update the localStorage or make an API call to update the profile
    console.log('Saving settings:', formData);
    
    // Example of updating localStorage
    const adminUserData = getLocalStorageData("loginData", null);
    if (adminUserData) {
      const updatedData = {
        ...adminUserData,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        bio: formData.bio,
        profilePicture: formData.profilePicture
      };
      localStorage.setItem("loginData", JSON.stringify(updatedData));
    }
  };

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newTheme = e.target.value as 'light' | 'dark';
    toggleTheme(newTheme);
    setFormData(prev => ({
      ...prev,
      theme: newTheme
    }));
  };

  return (
    <div className="settings-page">
      <div className="settings-header">
        <h1>Settings</h1>
        <p>Manage your profile and application settings</p>
      </div>

      <div className="settings-container">
        <div className="settings-nav">
          <button 
            className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            Profile
          </button>
          <button 
            className={`nav-item ${activeTab === 'general' ? 'active' : ''}`}
            onClick={() => setActiveTab('general')}
          >
            General
          </button>
          <button 
            className={`nav-item ${activeTab === 'appearance' ? 'active' : ''}`}
            onClick={() => setActiveTab('appearance')}
          >
            Appearance
          </button>
          <button 
            className={`nav-item ${activeTab === 'notifications' ? 'active' : ''}`}
            onClick={() => setActiveTab('notifications')}
          >
            Notifications
          </button>
        </div>

        <div className="settings-content">
          {activeTab === 'profile' && (
            <div className="settings-section">
              <h2>Profile Settings</h2>
              <form onSubmit={handleSubmit}>
                <div className="profile-picture-section">
                  <div className="profile-picture">
                    {(formData.profilePicture || formData.image) ? (
                      <img 
                        src={formData.profilePicture ? 
                          URL.createObjectURL(formData.profilePicture) : 
                          formData.image
                        } 
                        alt="Profile Preview" 
                        className="profile-image"
                      />
                    ) : (
                      <div className="profile-placeholder">
                        <i className="bi bi-person"></i>
                      </div>
                    )}
                    <div className="profile-upload-overlay">
                      <label htmlFor="profilePicture" className="upload-button">
                        <i className="bi bi-camera"></i>
                        <span>Change Photo</span>
                      </label>
                      <input
                        type="file"
                        id="profilePicture"
                        name="profilePicture"
                        accept="image/*"
                        onChange={handleFileChange}
                        hidden
                      />
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      placeholder="Enter username"
                      disabled
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="gender">Gender</label>
                    <input
                      type="text"
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      placeholder="Enter gender"
                      disabled
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Enter first name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Enter last name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter email address"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter phone number"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="bio">Bio</label>
                  <textarea
                    id="bio"
                    name="bio"
                    value={formData.bio}
                    onChange={handleInputChange}
                    placeholder="Write something about yourself"
                    rows={4}
                  />
                </div>
              </form>
            </div>
          )}

          {activeTab === 'general' && (
            <div className="settings-section">
              <h2>General Settings</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="siteName">Site Name</label>
                  <input
                    type="text"
                    id="siteName"
                    name="siteName"
                    value={formData.siteName}
                    onChange={handleInputChange}
                    placeholder="Enter site name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="siteEmail">Admin Email</label>
                  <input
                    type="email"
                    id="siteEmail"
                    name="siteEmail"
                    value={formData.siteEmail}
                    onChange={handleInputChange}
                    placeholder="Enter admin email"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="timezone">Timezone</label>
                  <select 
                    id="timezone" 
                    name="timezone"
                    value={formData.timezone}
                    onChange={handleInputChange}
                  >
                    <option value="UTC">UTC</option>
                    <option value="IST">IST (UTC+5:30)</option>
                    <option value="EST">EST (UTC-5)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="language">Language</label>
                  <select 
                    id="language" 
                    name="language"
                    value={formData.language}
                    onChange={handleInputChange}
                  >
                    <option value="en">English</option>
                    <option value="hi">Hindi</option>
                    <option value="es">Spanish</option>
                  </select>
                </div>
              </form>
            </div>
          )}

          {activeTab === 'appearance' && (
            <div className="settings-section">
              <h2>Appearance Settings</h2>
              <div className="form-group">
                <label htmlFor="theme">Theme</label>
                <select 
                  id="theme" 
                  name="theme"
                  value={theme}
                  onChange={handleThemeChange}
                  className="theme-select"
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="logo">Site Logo</label>
                <div className="logo-upload">
                  <input
                    type="file"
                    id="logo"
                    name="logo"
                    accept="image/*"
                  />
                  <p className="help-text">Recommended size: 200x200px</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="settings-section">
              <h2>Notification Settings</h2>
              <div className="form-group checkbox-group">
                <label>
                  <input
                    type="checkbox"
                    name="notifications"
                    checked={formData.notifications}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      notifications: e.target.checked
                    }))}
                  />
                  Enable Push Notifications
                </label>
              </div>

              <div className="form-group checkbox-group">
                <label>
                  <input
                    type="checkbox"
                    name="emailNotifications"
                    checked={formData.emailNotifications}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      emailNotifications: e.target.checked
                    }))}
                  />
                  Enable Email Notifications
                </label>
              </div>
            </div>
          )}

          <div className="settings-actions">
            <button type="submit" className="save-btn" onClick={handleSubmit}>
              {activeTab === 'profile' ? 'Save Profile' : 'Save Changes'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings; 