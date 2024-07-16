import React, { useEffect, useState } from "react";

interface ItemProps {
  id: number;
  value: string;
  name: string;
}

interface CheckBoxInputProps {
  title: string;
  items: ItemProps[];
  selectedValues: string[];
  handleSetPetInfoPersonality: (type: string[]) => void;
}

const CheckBoxInput: React.FC<CheckBoxInputProps> = ({
  title,
  items,
  selectedValues,
  handleSetPetInfoPersonality,
}) => {
  const [selectedItems, setSelectedItems] = useState<string[]>(selectedValues);

  useEffect(() => {
    setSelectedItems(selectedValues);
  }, [selectedValues]);

  const handleInputChange = (item: ItemProps) => {
    if (selectedItems.includes(item.value)) {
      const updatedItems = selectedItems.filter(
        (value) => value !== item.value
      );
      setSelectedItems(updatedItems);
      handleSetPetInfoPersonality(updatedItems);
    } else {
      const updatedItems = [...selectedItems, item.value];
      setSelectedItems(updatedItems);
      handleSetPetInfoPersonality(updatedItems);
    }
  };

  return (
    <div className="py-4 rounded-xl mb-6">
      <div className="mb-2 font-semibold text-black-700]">{title}</div>
      <div className="flex flex-row flex-wrap">
        {items.map((item) => (
          <div className="flex flex-row items-center mb-2 mr-2" key={item.id}>
            <input
              type="checkbox"
              className={`mr-2 w-[22px] h-[22px] accent-brown-500`}
              checked={selectedItems.includes(item.value)}
              onChange={() => handleInputChange(item)}
            />
            <label
              className={`${
                selectedItems.includes(item.value)
                  ? "text-[#6C6C77]"
                  : "text-[#ACADB4]"
              }  text-sm font-medium `}
            >
              {item.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckBoxInput;
