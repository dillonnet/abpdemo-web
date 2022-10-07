import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { getRoleOptions, getDeptOptions } from '/@/api/system';

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
    title: '部门',
    dataIndex: 'departmentName',
    width: 200,
  },
  {
    title: '创建时间',
    dataIndex: 'creationTime',
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
    rules: [
      {
        min: 6,
        max: 16,
        message: '请输入6-16位字符串',
      },
    ],
  },
  {
    field: 'name',
    label: '姓名',
    required: true,
    component: 'Input',
    rules: [
      {
        max: 16,
        message: '请输入最多16位字符串',
      },
    ],
  },
  {
    field: 'id',
    label: '',
    show: false,
    component: 'Input',
  },
  {
    field: 'password',
    label: '密码',
    required: ({ model }) => {
      return model.id === undefined || model.id === '';
    },
    rules: [
      {
        min: 6,
        max: 18,
        message: '请输入6-18位字符串',
      },
    ],
    component: 'InputPassword',
    show: ({ model }) => {
      console.log(model);
      return model.id === undefined || model.id === '';
    },
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
  {
    field: 'departmentId',
    label: '部门',
    component: 'ApiTreeSelect',
    componentProps: {
      fieldNames: {
        label: 'name',
        value: 'value',
      },
      api: getDeptOptions,
    },
  },
];
