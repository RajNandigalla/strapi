import { useMemo } from 'react';
import { get, toString } from 'lodash';
import useDataManager from '../../../../hooks/useDataManager';

function useSelect({ schema, componentFieldName }) {
  const {
    checkFormErrors,
    modifiedData,
    moveComponentField,
    removeRepeatableField,
    duplicateRepeatableFieldData,
    triggerFormValidation,
  } = useDataManager();

  const mainField = useMemo(() => get(schema, ['settings', 'mainField'], 'id'), [schema]);
  const displayedValue = toString(
    get(modifiedData, [...componentFieldName.split('.'), mainField], '')
  );

  return {
    displayedValue,
    mainField,
    checkFormErrors,
    moveComponentField,
    removeRepeatableField,
    triggerFormValidation,
    duplicateRepeatableFieldData,
  };
}

export default useSelect;
