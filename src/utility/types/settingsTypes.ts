export interface SettingOption {
  id: string;
  label: string;
  description?: string;
  value: boolean;
  onChange: (checked: boolean) => void;
}

export interface SettingsSection {
  title: string;
  description?: string;
  options: SettingOption[];
}
