<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <Button type="primary" @click="handleCreate" auth="System.Users.Create"> 新增用户 </Button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'clarity:note-edit-line',
                auth: 'System.Users.Update',
                onClick: handleEdit.bind(null, record),
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                auth: 'System.Users.Delete',
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
  import { getUserList, getUser, removeUser } from '/@/api/system';
  import { useModal } from '/@/components/Modal';
  import Form from './Form.vue';
  import { columns, searchFormSchema } from './data';

  const [registerDrawer, { openModal }] = useModal();
  const [registerTable, { reload }] = useTable({
    title: '用户列表',
    api: getUserList,
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
      fixed: undefined,
    },
  });

  function handleCreate() {
    openModal(true, {
      isUpdate: false,
    });
  }

  function handleEdit(item: Recordable) {
    getUser(item.id).then((record) => {
      openModal(true, {
        record,
        isUpdate: true,
      });
    });
  }

  async function handleDelete(record: Recordable) {
    await removeUser(record.id);
    reload();
  }

  function handleSuccess() {
    reload();
  }
</script>
