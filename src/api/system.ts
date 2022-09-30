import { defHttp } from '/@/utils/http/axios';

enum Api {
  Dept = '/department',
}

export const getDeptList = (params) => defHttp.get({ url: Api.Dept, params });
export const getDeptOptions = () => defHttp.get({ url: Api.Dept + '/options' });
export const addDept = (params) => defHttp.post({ url: Api.Dept, params });
export const updateDept = (id, params) => defHttp.put({ url: Api.Dept + '/' + id, params });
export const removeDept = (id) => defHttp.delete({ url: Api.Dept + '/' + id });
