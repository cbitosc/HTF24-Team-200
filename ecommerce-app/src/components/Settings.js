import React, { useEffect, useState } from "react";

const Settings = () => {
    const [settings, setSettings] = useState({
      emailNotifications: true,
      marketingEmails: false,
      twoFactorAuth: false,
    });
  
    return (
      <div className="min-h-screen bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-6">Account Settings</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded">
                <div>
                  <h3 className="font-medium">Email Notifications</h3>
                  <p className="text-sm text-gray-500">Receive notifications about your orders</p>
                </div>
                <input
                  type="checkbox"
                  checked={settings.emailNotifications}
                  onChange={(e) => setSettings({...settings, emailNotifications: e.target.checked})}
                  className="h-4 w-4"
                />
              </div>
              <div className="flex items-center justify-between p-4 border rounded">
                <div>
                  <h3 className="font-medium">Marketing Emails</h3>
                  <p className="text-sm text-gray-500">Receive emails about promotions</p>
                </div>
                <input
                  type="checkbox"
                  checked={settings.marketingEmails}
                  onChange={(e) => setSettings({...settings, marketingEmails: e.target.checked})}
                  className="h-4 w-4"
                />
              </div>
              <div className="flex items-center justify-between p-4 border rounded">
                <div>
                  <h3 className="font-medium">Two-Factor Authentication</h3>
                  <p className="text-sm text-gray-500">Add an extra layer of security</p>
                </div>
                <input
                  type="checkbox"
                  checked={settings.twoFactorAuth}
                  onChange={(e) => setSettings({...settings, twoFactorAuth: e.target.checked})}
                  className="h-4 w-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Settings;