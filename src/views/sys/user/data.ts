import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { getRoleOptions } from '/@/api/system';

export const columns: BasicColumn[] = [
  {
    title: '用户名',
    dataIndex: 'userName',
    width: 200,
  },
  {
    title: '姓名',
    dataIndex: 'name',
    width: 200,
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 180,
    format: 'moment',
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'filter',
    label: '用户名',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'userName',
    label: '用户名',
    required: true,
    component: 'Input',
  },
  {
    field: 'name',
    label: '姓名',
    required: true,
    component: 'Input',
  },
  {
    field: 'password',
    label: '密码',
    required: true,
    component: 'InputPassword',
  },
  {
    field: 'roleIds',
    label: '角色',
    required: true,
    component: 'ApiSelect',
    componentProps: {
      fieldNames: {
        label: 'name',
        value: 'value',
      },
      mode: 'multiple',
      api: getRoleOptions,
    },
  },
];
