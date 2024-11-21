import React, { useEffect, useMemo, useState } from "react";
import { cn } from "../utils";

export const Navbar = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav">
>(({ ...props }, ref) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const opacity = useMemo(
    () => Math.min(Math.max(scrollPosition - 50, 0), 100),
    [scrollPosition]
  );

  return (
    <>
      <div className="h-[88px] " />
      <div className="top-0 left-0 right-0 fixed h-[88px]">
        <nav
          ref={ref}
          className={cn(
            "w-full bg-white justify-between flex items-center px-6 py-4 fixed top-0 left-0 right-0 position-fixed"
          )}
          {...props}
        />
        <div
          className={cn(
            "h-full w-full shadow-none transition-shadow",
            opacity > 0 && "shadow-lg"
          )}
        ></div>
      </div>
    </>
  );
});
Navbar.displayName = "Navbar";

export const NavbarPageName = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<"h1">
>(({ className, ...props }, ref) => (
  <h1
    ref={ref}
    className={cn("text-black text-3xl font-light", className)}
    {...props}
  />
));
NavbarPageName.displayName = "NavbarPageName";

export const NavbarActionItem = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<"button">
>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={cn("text-black text-2xl", className)}
    {...props}
  />
));
NavbarActionItem.displayName = "NavbarActionItem";
