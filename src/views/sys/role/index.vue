<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <Button type="primary" @click="handleCreate" auth="System.Roles.Create"> 新增角色 </Button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="!record.isStatic && column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'clarity:note-edit-line',
                auth: 'System.Roles.Update',
                onClick: handleEdit.bind(null, record),
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                auth: 'System.Roles.Delete',
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
    <Form @register="registerDrawer" @success="handleSuccess" />
  </div>
</template>
<script lang="ts" setup>
  import { Button } from '/@/components/Button';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getRoleList, getRole } from '/@/api/system';
  import { useModal } from '/@/components/Modal';
  import Form from './Form.vue';
  import { columns, searchFormSchema } from './data';

  const [registerDrawer, { openModal }] = useModal();
  const [registerTable, { reload }] = useTable({
    title: '角色列表',
    api: getRoleList,
    columns,
    formConfig: {
      labelWidth: 120,
      schemas: searchFormSchema,
    },
    useSearchForm: true,
    showTableSetting: true,
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

  function handleEdit(item: Recordable) {
    getRole(item.id).then((record) => {
      openModal(true, {
        record,
        isUpdate: true,
      });
    });
  }

  function handleDelete(record: Recordable) {
    console.log(record);
  }

  function handleSuccess() {
    reload();
  }
</script>
