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

export interface RowData {
  id: number;
  profileImageUrl: string;
  fullName: string;
  email: string;
  bio: string;
}

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

export interface LoginDetailsError {
  username?: string;
  password?: string;
}

export interface ApiError {
  response: {
    data: {
      message: string;
    };
  };
}

export interface ValidationErrorItem {
  path?: string;
  message: string;
}

export interface ValidationError {
  inner: ValidationErrorItem[];
}

export interface User {
  id: number;
  fullName: string;
  email: string;
  bio: string;
  profileImageUrl: string;
}

export interface LoginData {
  username: string;
  password: string;
}
