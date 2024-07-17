import React, { useEffect, useState } from "react";

interface ItemProps {
  id: number;
  value: string;
  name: string;
}

interface RadioInputBoxProps {
  title: string;
  items: ItemProps[];
  selectedValue: string;
  handleSetPetInfoGender: (type: string) => void;
}

const RadioInputBox: React.FC<RadioInputBoxProps> = ({
  title,
  items,
  selectedValue,
  handleSetPetInfoGender,
}) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(
    selectedValue
  );

  useEffect(() => {
    setSelectedItem(selectedValue);
  }, [selectedValue]);

  const handleInputChange = (item: ItemProps) => {
    handleSetPetInfoGender(item.value);
    setSelectedItem(item.value);
  };

  return (
    <div className="py-4 mb-6">
      <div className="mb-2 font-semibold text-black-700]">{title}</div>

      <div className="flex flex-row">
        {items.map((item) => (
          <div key={item.id} className="flex flex-row items-center mr-2">
            <input
              type="radio"
              id={`radio_${item.id}`}
              name="radio_group"
              className="mr-1 accent-[#6C6C77]"
              checked={selectedItem === item.value}
              onChange={() => handleInputChange(item)}
            />
            <label
              htmlFor={`radio_${item.id}`}
              className={`${
                selectedItem === item.value
                  ? "text-black-700"
                  : "text-black-500"
              } text-sm font-normal`}
            >
              {item.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioInputBox;
