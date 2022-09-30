import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { DataStatusEnum, enumToOptions } from '/@/enums/bizNum';

export const columns: BasicColumn[] = [
  {
    title: '部门名称',
    dataIndex: 'name',
    width: 160,
    align: 'left',
  },
  {
    title: '排序',
    dataIndex: 'sort',
    width: 100,
  },
  {
    title: '状态',
    dataIndex: 'status',
    width: 100,
    customRender: ({ record }) => {
      return DataStatusEnum[record.status];
    },
  },
  {
    title: '创建时间',
    dataIndex: 'creationTime',
    width: 180,
    format: 'moment',
  },
  {
    title: '备注',
    dataIndex: 'remark',
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'filter',
    label: '部门名称',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'status',
    label: '状态',
    component: 'Select',
    componentProps: {
      options: enumToOptions(DataStatusEnum),
    },
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'name',
    label: '部门名称',
    component: 'Input',
    required: true,
  },
  {
    field: 'parentId',
    label: '上级部门',
    component: 'TreeSelect',
    componentProps: {
      fieldNames: {
        label: 'name',
        value: 'value',
      },
      getPopupContainer: () => document.body,
    },
  },
  {
    field: 'sort',
    label: '排序',
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'status',
    label: '状态',
    component: 'RadioButtonGroup',
    defaultValue: 'Enable',
    componentProps: {
      options: enumToOptions(DataStatusEnum),
    },
    required: true,
  },
  {
    label: '备注',
    field: 'remark',
    component: 'InputTextArea',
  },
];
