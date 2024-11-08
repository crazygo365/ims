import React, { useState } from 'react';
import { Settings, Bell, Shield, Database } from 'lucide-react';

const SystemSettings = () => {
  const [activeTab, setActiveTab] = useState('notification');

  const tabs = [
    { id: 'notification', name: '通知设置', icon: Bell },
    { id: 'security', name: '安全设置', icon: Shield },
    { id: 'system', name: '系统参数', icon: Settings },
    { id: 'backup', name: '数据备份', icon: Database },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-2xl font-bold text-gray-800">系统设置</h1>

        <div className="flex space-x-6">
          {/* 左侧导航 */}
          <div className="w-64 shrink-0">
            <nav className="space-y-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex w-full items-center space-x-3 rounded-lg px-4 py-3 text-left ${
                      activeTab === tab.id
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{tab.name}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* 右侧内容 */}
          <div className="flex-1 rounded-lg bg-white p-6 shadow-sm">
            {activeTab === 'notification' && (
              <div className="space-y-6">
                <div className="rounded-lg border border-gray-200 p-4">
                  <h3 className="mb-4 text-lg font-medium text-gray-800">短信通知</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        腾讯云 SecretId
                      </label>
                      <input
                        type="text"
                        name="secretId"
                        placeholder="输入腾讯云 SecretId"
                        className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        腾讯云 SecretKey
                      </label>
                      <input
                        type="password"
                        name="secretKey"
                        placeholder="输入腾讯云 SecretKey"
                        className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        短信应用 SDKAppID
                      </label>
                      <input
                        type="text"
                        name="sdkAppId"
                        placeholder="输入短信应用 SDKAppID"
                        className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        短信签名
                      </label>
                      <input
                        type="text"
                        name="smsSign"
                        placeholder="输入短信签名"
                        className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
                      />
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-gray-200 p-4">
                  <h3 className="mb-4 text-lg font-medium text-gray-800">通知事件</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-800">新投资者注册</p>
                        <p className="text-sm text-gray-500">新投资者注册时通知管理员</p>
                      </div>
                      <label className="relative inline-flex cursor-pointer items-center">
                        <input type="checkbox" className="peer sr-only" defaultChecked />
                        <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-800">财务报表上传</p>
                        <p className="text-sm text-gray-500">新的财务报表上传时通知相关投资者</p>
                      </div>
                      <label className="relative inline-flex cursor-pointer items-center">
                        <input type="checkbox" className="peer sr-only" defaultChecked />
                        <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-800">分红发放通知</p>
                        <p className="text-sm text-gray-500">分红发放时通知相关投资者</p>
                      </div>
                      <label className="relative inline-flex cursor-pointer items-center">
                        <input type="checkbox" className="peer sr-only" defaultChecked />
                        <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300"></div>
                      </label>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        短信模板配置
                      </label>
                      <div className="mt-2 space-y-4">
                        <div className="rounded-lg border border-gray-200 p-4">
                          <p className="font-medium text-gray-800">分红通知模板</p>
                          <input
                            type="text"
                            name="dividendTemplateId"
                            placeholder="输入模板ID"
                            className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2"
                          />
                          <p className="mt-1 text-sm text-gray-500">
                            模板示例：尊敬的{'{1}'}，您投资的{'{2}'}已发放{'{3}'}月分红{'{4}'}元，请查收。
                          </p>
                        </div>
                        <div className="rounded-lg border border-gray-200 p-4">
                          <p className="font-medium text-gray-800">报表通知模板</p>
                          <input
                            type="text"
                            name="reportTemplateId"
                            placeholder="输入模板ID"
                            className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2"
                          />
                          <p className="mt-1 text-sm text-gray-500">
                            模板示例：尊敬的{'{1}'}，{'{2}'}的{'{3}'}月财务报表已上传，请登录系统查看。
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-gray-200 p-4">
                  <h3 className="mb-4 text-lg font-medium text-gray-800">通知测试</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        测试手机号
                      </label>
                      <div className="mt-1 flex space-x-4">
                        <input
                          type="tel"
                          placeholder="输入测试手机号"
                          className="block w-full rounded-lg border border-gray-300 px-3 py-2"
                        />
                        <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                          发送测试
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="space-y-6">
                <h2 className="text-lg font-medium text-gray-800">安全设置</h2>
                {/* 安全设置内容 */}
              </div>
            )}

            {activeTab === 'system' && (
              <div className="space-y-6">
                <h2 className="text-lg font-medium text-gray-800">系统参数</h2>
                {/* 系统参数内容 */}
              </div>
            )}

            {activeTab === 'backup' && (
              <div className="space-y-6">
                <h2 className="text-lg font-medium text-gray-800">数据备份</h2>
                {/* 数据备份内容 */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemSettings;