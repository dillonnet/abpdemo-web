import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const system: AppRouteModule = {
  path: '/system',
  name: 'System',
  component: LAYOUT,
  redirect: '/system/user',
  meta: {
    orderNo: 2000,
    icon: 'ion:settings-outline',
    title: t('routes.demo.system.moduleName'),
    permission: 'System',
  },
  children: [
    {
      path: 'user',
      name: 'UserManagement',
      meta: {
        title: '用户管理',
        permission: 'System.Users',
      },
      component: () => import('/@/views/sys/user/index.vue'),
    },
    {
      path: 'role',
      name: 'RoleManagement',
      meta: {
        title: t('routes.demo.system.role'),
        permission: 'System.Roles',
      },
      component: () => import('/@/views/sys/role/index.vue'),
    },
    {
      path: 'dept',
      name: 'DeptManagement',
      meta: {
        title: t('routes.demo.system.dept'),
        permission: 'System.Departments',
      },
      component: () => import('/@/views/sys/dept/index.vue'),
    },
  ],
};

export default system;
