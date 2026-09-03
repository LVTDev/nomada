import Image from "next/image";
import React from "react";

const ListItem = ({ text, i }: { text: React.ReactNode; i: number }) => {
  return (
    <div className="flex items-center">
      {" "} 
      <div className="relative w-[5px] h-[13px] mr-3">
        <Image className="" fill src={`/logo${i}.png`} alt="colored line" />
      </div>
      {text}
    </div>
  );
};

export default ListItem;
