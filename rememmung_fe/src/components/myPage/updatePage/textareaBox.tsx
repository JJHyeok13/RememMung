import React, { useEffect, useState } from "react";

interface TextareaBoxProps {
  title: string;
  placeholder: string;
  value: string;
  handleSetPetInfo: (type: string[]) => void;
}

const TextareaBox: React.FC<TextareaBoxProps> = ({
  title,
  placeholder,
  value,
  handleSetPetInfo,
}) => {
  const [textareaValue, setTextareaValue] = useState(value);

  useEffect(() => {
    setTextareaValue(value);
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setTextareaValue(newValue);
    handleSetPetInfo(newValue.split(", "));
  };

  return (
    <div className="py-4 mb-6">
      <div className="mb-2 font-semibold text-black-700]">{title}</div>

      <textarea
        placeholder={placeholder}
        className="text-sm font-normal rounded-lg text-black-700 bg-black-100 resize-none w-full p-3 pl-[14px] min-h-[150px]"
        value={textareaValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default TextareaBox;
