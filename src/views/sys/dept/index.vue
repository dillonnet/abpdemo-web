<template>
  <div>
    <BasicTable @register="registerTable" @fetch-success="fetchSuccess">
      <template #toolbar>
        <Button type="primary" @click="handleCreate" auth="System.Departments.Create">
          新增部门
        </Button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'clarity:note-edit-line',
                auth: 'System.Departments.Update',
                onClick: handleEdit.bind(null, record),
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                auth: 'System.Departments.Delete',
                popConfirm: {
                  title: '是否确认删除',
                  placement: 'left',
                  confirm: handleDelete.bind(null, record),
                },
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <Form @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts" setup>
  import { nextTick } from 'vue';
  import { Button } from '/@/components/Button';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getDeptList, removeDept } from '/@/api/system';
  import { useModal } from '/@/components/Modal';
  import Form from './Form.vue';

  import { columns, searchFormSchema } from './data';
  const [registerModal, { openModal }] = useModal();
  const [registerTable, { reload, expandAll }] = useTable({
    title: '部门列表',
    api: getDeptList,
    columns,
    formConfig: {
      labelWidth: 120,
      schemas: searchFormSchema,
    },
    isTreeTable: true,
    pagination: false,
    useSearchForm: true,
    bordered: true,
    showIndexColumn: false,
    actionColumn: {
      width: 80,
      title: '操作',
      dataIndex: 'action',
      // slots: { customRender: 'action' },
      fixed: undefined,
    },
  });

  function handleCreate() {
    openModal(true, {
      isUpdate: false,
    });
  }

  function handleEdit(record: Recordable) {
    openModal(true, {
      record,
      isUpdate: true,
    });
  }

  function handleDelete(record: Recordable) {
    removeDept(record.id).then(() => {
      reload();
    });
  }

  function handleSuccess() {
    reload();
  }

  function fetchSuccess() {
    nextTick(expandAll);
  }
</script>
