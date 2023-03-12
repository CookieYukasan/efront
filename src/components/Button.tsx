import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
};

export default function Button({ children, className }: ButtonProps) {
  return <button className={className}>{children}</button>;
}
