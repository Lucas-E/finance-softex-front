import React, { useState } from "react";
import { Input, InputProps } from "@chakra-ui/react";

export interface MoneyInputProps extends InputProps {
  onMoneyChange: (numeric: number, formatted: string) => void;
}

const MoneyInput: React.FC<MoneyInputProps> = ({ onMoneyChange, ...props }) => {
  const [value, setValue] = useState<string>("");

  const formatToBRL = (value: string): string => {
    // Remove non-numeric characters
    const numericValue = value.replace(/\D/g, "");

    // Format the number to Brazilian Real format
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(parseInt(numericValue) / 100);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Set the numeric value to state
    const formattedValue = formatToBRL(event.target.value);
    setValue(formattedValue);
    onMoneyChange(
      parseInt(event.target.value.replace(/\D/g, "")),
      formattedValue,
    );
  };

  return (
    <Input value={value} onChange={handleChange} placeholder="R$" {...props} />
  );
};

export default MoneyInput;
