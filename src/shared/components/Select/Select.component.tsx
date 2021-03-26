import React, { useState } from "react";
import { 
  SelectContainer,
  Selection,
  Dropdown,
  Option
} from "./Select.styled";

interface ISelectProps {
  items: [string, number][];
  className?: string;
  onSelect: (item: number)=>void;
}

const Select = ({ items, className, onSelect }: ISelectProps) => {
  const [visible, setVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState('Choose your pack')


  return (
    <SelectContainer className={className} onClick={()=>setVisible((prev)=>!prev)}>
      <Selection>{selectedValue}</Selection>
      <Dropdown visible={visible}>
        {items.map((item,indx)=>{
          return <Option 
                  onClick={()=>{setSelectedValue(item[0]); onSelect(item[1])}}>
              {item[0]} - x{item[1]}
            </Option>
        })}
      </Dropdown>
    </SelectContainer>
  );
}

export default Select