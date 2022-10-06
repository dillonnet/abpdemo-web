import { defHttp } from '/@/utils/http/axios';

enum Api {
  User = '/user',
  Role = '/role',
  Dept = '/department',
  System = '/system',
}

export const getUserList = (params) => defHttp.get({ url: Api.User, params });
export const getUser = (id) => defHttp.get({ url: Api.User + '/' + id });
export const addUser = (params) => defHttp.post({ url: Api.User, params });
export const updateUser = (id, params) => defHttp.put({ url: Api.User + '/' + id, params });
export const removeUser = (id) => defHttp.delete({ url: Api.User + '/' + id });

export const getRoleList = (params) => defHttp.get({ url: Api.Role, params });
export const getRoleOptions = () => defHttp.get({ url: Api.Role + '/options' });
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
