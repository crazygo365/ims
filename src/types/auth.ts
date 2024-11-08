export type UserRole = 'admin' | 'finance' | 'investor';

export interface User {
  id: string;
  username: string;
  name: string;
  role: UserRole;
  email: string;
  phone?: string;
  permissions: string[];
  status: 'active' | 'inactive';
  createdAt: string;
  lastLogin?: string;
}

export interface Permission {
  id: string;
  name: string;
  description: string;
  code: string;
}

export const PERMISSIONS = {
  // 数据中心
  DATA_CENTER_VIEW: 'data_center:view',
  DATA_CENTER_MANAGE: 'data_center:manage',

  // 店铺管理
  SHOP_VIEW: 'shop:view',
  SHOP_MANAGE: 'shop:manage',
  SHOP_HISTORY_VIEW: 'shop:history:view',

  // 投资人管理
  INVESTOR_VIEW: 'investor:view',
  INVESTOR_MANAGE: 'investor:manage',

  // 分红管理
  DIVIDEND_VIEW: 'dividend:view',
  DIVIDEND_MANAGE: 'dividend:manage',

  // 净值管理
  NET_WORTH_VIEW: 'net_worth:view',
  NET_WORTH_MANAGE: 'net_worth:manage',

  // 贷款管理
  LOAN_VIEW: 'loan:view',
  LOAN_MANAGE: 'loan:manage',

  // 系统设置
  USER_MANAGE: 'user:manage',
  ROLE_MANAGE: 'role:manage',
  FINANCE_MANAGE: 'finance:manage',
  BRAND_MANAGE: 'brand:manage',
  MANAGER_MANAGE: 'manager:manage',
  SYSTEM_SETTINGS: 'system:settings',

  // 报表权限
  REPORT_VIEW: 'report:view',
  REPORT_MANAGE: 'report:manage',
} as const;