import React, { useState } from 'react';
import { Plus, Search, Edit2, Trash2, MoreHorizontal } from 'lucide-react';
import type { User, UserRole } from '../../types/auth';

const UserManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState<UserRole | ''>('');

  const users: User[] = [
    {
      id: '1',
      username: 'admin',
      name: '系统管理员',
      role: 'admin',
      email: 'admin@example.com',
      phone: '13800138000',
      permissions: ['system:settings', 'user:manage', 'shop:manage', 'finance:manage'],
      status: 'active',
      createdAt: '2024-01-01',
      lastLogin: '2024-03-10 10:30:00',
    },
    {
      id: '2',
      username: 'finance1',
      name: '财务主管',
      role: 'finance',
      email: 'finance@example.com',
      phone: '13800138001',
      permissions: ['finance:manage', 'report:view', 'report:manage'],
      status: 'active',
      createdAt: '2024-01-15',
      lastLogin: '2024-03-09 16:45:00',
    },
  ];

  return (
    <div>
      <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <h1 className="text-2xl font-bold text-gray-800">用户管理</h1>
        <button className="flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
          <Plus className="mr-2 h-4 w-4" />
          添加用户
        </button>
      </div>

      <div className="mb-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex items-center rounded-lg border border-gray-300 px-3 py-2">
          <Search className="h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="搜索用户..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="ml-2 w-full border-none bg-transparent outline-none"
          />
        </div>

        <select
          value={filterRole}
          onChange={(e) => setFilterRole(e.target.value as UserRole | '')}
          className="rounded-lg border border-gray-300 px-3 py-2"
        >
          <option value="">所有角色</option>
          <option value="admin">管理员</option>
          <option value="finance">财务人员</option>
          <option value="investor">投资者</option>
        </select>
      </div>

      <div className="overflow-hidden rounded-lg bg-white shadow">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">用户名</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">姓名</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">角色</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">邮箱</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">状态</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">最后登录</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-blue-100 text-blue-600">
                        <div className="flex h-full w-full items-center justify-center text-sm font-semibold">
                          {user.name[0]}
                        </div>
                      </div>
                      <span className="ml-2 text-sm font-medium text-gray-900">
                        {user.username}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{user.name}</td>
                  <td className="px-6 py-4">
                    <span className={`rounded-full px-2 py-1 text-xs ${
                      user.role === 'admin'
                        ? 'bg-purple-100 text-purple-800'
                        : user.role === 'finance'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {user.role === 'admin' ? '管理员' : 
                       user.role === 'finance' ? '财务人员' : '投资者'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{user.email}</td>
                  <td className="px-6 py-4">
                    <span className={`rounded-full px-2 py-1 text-xs ${
                      user.status === 'active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {user.status === 'active' ? '正常' : '禁用'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{user.lastLogin}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <button className="text-gray-600 hover:text-blue-600">
                        <Edit2 className="h-4 w-4" />
                      </button>
                      <button className="text-gray-600 hover:text-red-600">
                        <Trash2 className="h-4 w-4" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-900">
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;