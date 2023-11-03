import { ReactNode, memo } from "react";
import { PianoLink } from "./style";

type LinkType = {
  href: string;
  children: ReactNode;
};

export const NavLink = memo<LinkType>(({ href, children }) => {
  return (
    <PianoLink draggable={false} href={href}>
      {children}
    </PianoLink>
  );
});
