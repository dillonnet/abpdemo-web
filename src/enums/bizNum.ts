export enum DataStatusEnum {
  Enable = '启用',
  Disable = '禁用',
}

export function enumToOptions(enumData) {
  return Object.keys(enumData).map((name) => {
    return {
      value: name,
      label: enumData[name],
    };
  });
}
