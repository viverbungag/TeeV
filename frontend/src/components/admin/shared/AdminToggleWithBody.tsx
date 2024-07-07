import AdminToggle from '@/components/admin/shared/AdminToggle';
import Add from '@/utilities/SVGs/Add';
import Remove from '@/utilities/SVGs/Remove';
import React from 'react';

type PropTypes = {
  toggleName: 'hasFiberInfo' | 'hasFeaturesInfo';
  itemsName: 'fiberInfoItems' | 'featureInfoItems';
  inputValues: InputValues;
  setInputValues: React.Dispatch<React.SetStateAction<InputValues>>;
  toggleLabel: string;
};

const AdminToggleWithBody: React.FC<PropTypes> = ({
  inputValues,
  setInputValues,
  toggleName,
  itemsName,
  toggleLabel,
}) => {
  const onToggleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.checked,
    });
  };

  const addItem = () => {
    const tempItems = [...inputValues[itemsName]];
    tempItems.push('');
    setInputValues({
      ...inputValues,
      [itemsName]: [...tempItems],
    });
  };

  const removeItem = (index: number) => {
    const tempItems = [...inputValues[itemsName]];
    tempItems.splice(index, 1);
    setInputValues({
      ...inputValues,
      [itemsName]: [...tempItems],
    });
  };

  const updateItem = (index: number, value: string) => {
    const tempItems = [...inputValues[itemsName]];
    tempItems[index] = value;
    setInputValues({
      ...inputValues,
      [itemsName]: [...tempItems],
    });
  };
  return (
    <div>
      <AdminToggle
        label={toggleLabel}
        onChange={onToggleChange}
        name={toggleName}
        checked={inputValues[toggleName]}
      />
      {inputValues[toggleName] && (
        <div className="flex flex-col gap-2 pl-2 mt-4 w-full">
          {inputValues[itemsName].map((value, index) => {
            return (
              <div
                className="flex items-center gap-4 pl-2 mt-4 w-full"
                key={index}
              >
                <textarea
                  className="textarea textarea-md w-full"
                  value={value}
                  onChange={(e) => updateItem(index, e.target.value)}
                />
                {index === inputValues[itemsName].length - 1 ? (
                  <button
                    type="button"
                    className="w-fit h-fit"
                    onClick={addItem}
                  >
                    <Add width={28} height={28} />
                  </button>
                ) : (
                  <div className="w-[28px] h-[28px]" />
                )}
                {inputValues[itemsName].length > 1 ? (
                  <button
                    type="button"
                    className="w-fit h-fit"
                    onClick={() => removeItem(index)}
                  >
                    <Remove width={28} height={28} color="#FF6961" />
                  </button>
                ) : (
                  <div className="w-[28px] h-[28px]" />
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AdminToggleWithBody;
