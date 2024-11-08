import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Store,
  Receipt,
  Wallet2,
  LogOut,
  Database,
  Users,
  PiggyBank,
  TrendingUp,
  Settings,
  ChevronDown,
  ChevronRight,
  CreditCard
} from 'lucide-react';

// 投资人查询菜单
const investorMenuItems = [
  { path: '/', icon: LayoutDashboard, text: '总览' },
  { path: '/shops', icon: Store, text: '店铺查询' },
  { path: '/transactions', icon: Receipt, text: '资金往来' },
  { path: '/loans', icon: Wallet2, text: '贷款记录' },
];

// 系统管理菜单
const systemMenuItems = [
  {
    title: '数据中心',
    icon: Database,
    path: '/admin/dashboard',
  },
  {
    title: '投资人管理中心',
    icon: Users,
    path: '/admin/investors',
  },
  {
    title: '店铺管理',
    icon: Store,
    children: [
      { path: '/settings/shops', text: '店铺列表' },
      { path: '/settings/shops/history', text: '历史列表' },
    ],
  },
  {
    title: '分红管理',
    icon: PiggyBank,
    children: [
      { path: '/admin/dividends', text: '店铺分红记录' },
    ],
  },
  {
    title: '净值管理',
    icon: TrendingUp,
    children: [
      { path: '/admin/net-worth', text: '净值列表' },
      { path: '/admin/net-worth/history', text: '历史净值' },
    ],
  },
  {
    title: '贷款管理',
    icon: CreditCard,
    path: '/admin/loans',
  },
  {
    title: '系统设置',
    icon: Settings,
    children: [
      { path: '/settings/users', text: '用户管理' },
      { path: '/settings/roles', text: '角色管理' },
      { path: '/settings/finance', text: '财务设置' },
      { path: '/settings/brands', text: '品牌管理' },
      { path: '/settings/managers', text: '管理人管理' },
      { path: '/settings/system', text: '系统设置' },
    ],
  },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [openMenus, setOpenMenus] = useState<string[]>([]);

  const toggleMenu = (title: string) => {
    setOpenMenus(prev =>
      prev.includes(title)
        ? prev.filter(item => item !== title)
        : [...prev, title]
    );
  };

  const renderMenuItem = (item: any) => {
    const isActive = location.pathname === item.path;
    const Icon = item.icon;

    if (item.children) {
      const isOpen = openMenus.includes(item.title);
      return (
        <div key={item.title}>
          <button
            onClick={() => toggleMenu(item.title)}
            className="flex w-full items-center justify-between px-6 py-3 text-gray-600 hover:bg-gray-50"
          >
            <div className="flex items-center">
              <Icon className="h-5 w-5" />
              <span className="ml-3">{item.title}</span>
            </div>
            {isOpen ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </button>
          {isOpen && (
            <div className="bg-gray-50">
              {item.children.map((child: any) => (
                <Link
                  key={child.path}
                  to={child.path}
                  className={`block px-6 py-2 pl-14 ${
                    location.pathname === child.path
                      ? 'text-blue-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {child.text}
                </Link>
              ))}
            </div>
          )}
        </div>
      );
    }

    return (
      <Link
        key={item.path}
        to={item.path}
        className={`flex items-center px-6 py-3 ${
          isActive
            ? 'bg-blue-50 text-blue-600'
            : 'text-gray-600 hover:bg-gray-50'
        }`}
      >
        <Icon className="h-5 w-5" />
        <span className="ml-3">{item.text || item.title}</span>
      </Link>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 flex h-full w-64 flex-col overflow-y-auto bg-white shadow-lg">
        <div className="flex-shrink-0 border-b border-gray-200 p-6">
          <h1 className="text-xl font-bold text-gray-800">投资管理系统</h1>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto">
          <div className="mb-6">
            <h2 className="px-6 py-2 text-xs font-semibold uppercase text-gray-400">
              投资人查询
            </h2>
            <nav>
              {investorMenuItems.map(renderMenuItem)}
            </nav>
          </div>

          <div>
            <h2 className="px-6 py-2 text-xs font-semibold uppercase text-gray-400">
              系统管理
            </h2>
            <nav>
              {systemMenuItems.map(renderMenuItem)}
            </nav>
          </div>
        </div>

        {/* Logout Button */}
        <div className="flex-shrink-0 border-t border-gray-200 p-6">
          <button className="flex w-full items-center text-gray-600 hover:text-gray-900">
            <LogOut className="h-5 w-5" />
            <span className="ml-3">退出登录</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">{children}</div>
    </div>
  );
};

export default Layout;