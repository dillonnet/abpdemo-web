import { defHttp } from '/@/utils/http/axios';

enum Api {
  Role = '/role',
  Dept = '/department',
  System = '/system',
}

export const getRoleList = (params) => defHttp.get({ url: Api.Role, params });
export const getRole = (id) => defHttp.get({ url: Api.Role + '/' + id });
export const addRole = (params) => defHttp.post({ url: Api.Role, params });
export const updateRole = (id, params) => defHttp.put({ url: Api.Role + '/' + id, params });
export const removeRole = (id) => defHttp.delete({ url: Api.Role + '/' + id });

export const getDeptList = (params) => defHttp.get({ url: Api.Dept, params });
export const getDeptOptions = () => defHttp.get({ url: Api.Dept + '/options' });
export const addDept = (params) => defHttp.post({ url: Api.Dept, params });
export const updateDept = (id, params) => defHttp.put({ url: Api.Dept + '/' + id, params });
export const removeDept = (id) => defHttp.delete({ url: Api.Dept + '/' + id });

export const getPermissions = () => defHttp.get({ url: Api.System + '/permissions' });
