import React = require("react");

interface IItem {
  id: string;
  text: string;
  onClick?: (id: string) => void;
  className?: string;
  As?: 'a' | 'li' | 'button' | 'div';
  href?: string;
}

interface IGenericListProps {
  list: IItem[];
}

const noop = () => {};

export function GenericList({ list }: IGenericListProps) {
  return (
    <>
      {list.map(({ As =  'div', text, onClick = noop, className, id, href}) => (
        <As
          key={id}
          className={className}
          href={href}
          onClick={() => onClick(id)}
        >
          {text}
        </As>
      ))}
    </>
  )
}
