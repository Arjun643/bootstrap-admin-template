export interface SecurityData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface SecuritySettingsProps {
  securityData: SecurityData;
  onSecurityChange: (data: SecurityData) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export interface NotificationData {
  emailNotifications: boolean;
  pushNotifications: boolean;
  newsUpdates: boolean;
  securityAlerts: boolean;
}

export interface NotificationSettingsProps {
  notificationData: NotificationData;
  onNotificationChange: (data: NotificationData) => void;
}
