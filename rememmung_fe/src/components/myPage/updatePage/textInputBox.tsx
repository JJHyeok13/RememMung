import React from "react";

interface TextInputBoxProps {
  title: string;
  placeholder: string;
  value: string;
  handleSetPetInfoName: (type: string) => void;
}

const TextInputBox: React.FC<TextInputBoxProps> = ({
  title,
  placeholder,
  value,
  handleSetPetInfoName,
}) => {
  return (
    <div className="py-4 mb-6">
      <div className="mb-2 font-semibold text-black-700]">{title}</div>

      <input
        type="text"
        placeholder={placeholder}
        className="text-sm font-normal bg-[#F3F6FA] p-4 rounded-xl text-[#6C6C77] w-1/3"
        value={value}
        onChange={(e) => handleSetPetInfoName(e.target.value)}
      />
    </div>
  );
};

export default TextInputBox;
