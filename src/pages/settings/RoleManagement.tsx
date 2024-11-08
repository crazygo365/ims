import React, { useState } from 'react';
import { Plus, Search, Edit2, Trash2, Shield, ChevronDown } from 'lucide-react';
import { PERMISSIONS } from '../../types/auth';

interface Role {
  id: string;
  name: string;
  description: string;
  permissions: string[];
  userCount: number;
}

const RoleManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);

  const roles: Role[] = [
    {
      id: '1',
      name: '系统管理员',
      description: '拥有系统所有权限',
      permissions: Object.values(PERMISSIONS),
      userCount: 2,
    },
    {
      id: '2',
      name: '财务主管',
      description: '管理财务报表和审核',
      permissions: [
        PERMISSIONS.FINANCE_MANAGE,
        PERMISSIONS.REPORT_MANAGE,
        PERMISSIONS.DIVIDEND_MANAGE,
        PERMISSIONS.NET_WORTH_MANAGE,
        PERMISSIONS.LOAN_MANAGE
      ],
      userCount: 3,
    },
    {
      id: '3',
      name: '财务人员',
      description: '处理日常财务工作',
      permissions: [
        PERMISSIONS.REPORT_VIEW,
        PERMISSIONS.DIVIDEND_VIEW,
        PERMISSIONS.NET_WORTH_VIEW
      ],
      userCount: 5,
    },
    {
      id: '4',
      name: '投资者',
      description: '查看投资相关信息',
      permissions: [
        PERMISSIONS.INVESTOR_VIEW,
        PERMISSIONS.REPORT_VIEW,
        PERMISSIONS.DIVIDEND_VIEW,
        PERMISSIONS.NET_WORTH_VIEW
      ],
      userCount: 15,
    },
  ];

  const permissionGroups = [
    {
      name: '数据中心',
      permissions: [
        { code: PERMISSIONS.DATA_CENTER_VIEW, name: '查看数据中心', description: '查看系统整体数据统计' },
        { code: PERMISSIONS.DATA_CENTER_MANAGE, name: '管理数据中心', description: '管理和配置数据中心' },
      ],
    },
    {
      name: '店铺管理',
      permissions: [
        { code: PERMISSIONS.SHOP_VIEW, name: '查看店铺', description: '查看店铺基本信息' },
        { code: PERMISSIONS.SHOP_MANAGE, name: '管理店铺', description: '管理店铺信息和配置' },
        { code: PERMISSIONS.SHOP_HISTORY_VIEW, name: '查看历史店铺', description: '查看已关闭的店铺信息' },
      ],
    },
    {
      name: '投资人管理',
      permissions: [
        { code: PERMISSIONS.INVESTOR_VIEW, name: '查看投资人', description: '查看投资人信息' },
        { code: PERMISSIONS.INVESTOR_MANAGE, name: '管理投资人', description: '管理投资人信息和账户' },
      ],
    },
    {
      name: '分红管理',
      permissions: [
        { code: PERMISSIONS.DIVIDEND_VIEW, name: '查看分红', description: '查看分红记录' },
        { code: PERMISSIONS.DIVIDEND_MANAGE, name: '管理分红', description: '管理和发放分红' },
      ],
    },
    {
      name: '净值管理',
      permissions: [
        { code: PERMISSIONS.NET_WORTH_VIEW, name: '查看净值', description: '查看净值记录' },
        { code: PERMISSIONS.NET_WORTH_MANAGE, name: '管理净值', description: '管理和更新净值' },
      ],
    },
    {
      name: '贷款管理',
      permissions: [
        { code: PERMISSIONS.LOAN_VIEW, name: '查看贷款', description: '查看贷款记录' },
        { code: PERMISSIONS.LOAN_MANAGE, name: '管理贷款', description: '管理贷款发放和还款' },
      ],
    },
    {
      name: '系统设置',
      permissions: [
        { code: PERMISSIONS.USER_MANAGE, name: '用户管理', description: '管理系统用户' },
        { code: PERMISSIONS.ROLE_MANAGE, name: '角色管理', description: '管理角色和权限' },
        { code: PERMISSIONS.FINANCE_MANAGE, name: '财务设置', description: '管理财务相关配置' },
        { code: PERMISSIONS.BRAND_MANAGE, name: '品牌管理', description: '管理店铺品牌' },
        { code: PERMISSIONS.MANAGER_MANAGE, name: '管理人管理', description: '管理店铺管理人' },
        { code: PERMISSIONS.SYSTEM_SETTINGS, name: '系统设置', description: '管理系统基本设置' },
      ],
    },
  ];

  return (
    <div>
      <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <h1 className="text-2xl font-bold text-gray-800">角色管理</h1>
        <button className="flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
          <Plus className="mr-2 h-4 w-4" />
          添加角色
        </button>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* 角色列表 */}
        <div className="lg:col-span-1">
          <div className="rounded-lg bg-white p-4 shadow-sm">
            <div className="mb-4">
              <div className="flex items-center rounded-lg border border-gray-300 px-3 py-2">
                <Search className="h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="搜索角色..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="ml-2 w-full border-none bg-transparent outline-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              {roles.map((role) => (
                <button
                  key={role.id}
                  onClick={() => setSelectedRole(role)}
                  className={`flex w-full items-center justify-between rounded-lg p-3 text-left transition-colors ${
                    selectedRole?.id === role.id
                      ? 'bg-blue-50 text-blue-600'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <div>
                    <h3 className="font-medium">{role.name}</h3>
                    <p className="text-sm text-gray-500">{role.description}</p>
                  </div>
                  <div className="text-sm text-gray-500">{role.userCount}个用户</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 权限设置 */}
        <div className="lg:col-span-2">
          {selectedRole ? (
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800">{selectedRole.name}</h2>
                <p className="text-gray-500">{selectedRole.description}</p>
              </div>

              <div className="space-y-6">
                {permissionGroups.map((group) => (
                  <div key={group.name} className="rounded-lg border border-gray-200 p-4">
                    <h3 className="mb-4 text-lg font-medium text-gray-800">{group.name}</h3>
                    <div className="space-y-4">
                      {group.permissions.map((permission) => (
                        <div
                          key={permission.code}
                          className="flex items-center justify-between"
                        >
                          <div>
                            <p className="font-medium text-gray-800">{permission.name}</p>
                            <p className="text-sm text-gray-500">{permission.description}</p>
                          </div>
                          <label className="relative inline-flex cursor-pointer items-center">
                            <input
                              type="checkbox"
                              className="peer sr-only"
                              checked={selectedRole.permissions.includes(permission.code)}
                              onChange={() => {}}
                            />
                            <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300"></div>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex justify-end space-x-4">
                <button className="flex items-center rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50">
                  取消
                </button>
                <button className="flex items-center rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                  保存更改
                </button>
              </div>
            </div>
          ) : (
            <div className="flex h-full items-center justify-center rounded-lg bg-white p-6 shadow-sm">
              <div className="text-center">
                <Shield className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-4 text-lg font-medium text-gray-800">选择角色</h3>
                <p className="mt-2 text-gray-500">请从左侧选择一个角色来管理其权限</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RoleManagement;