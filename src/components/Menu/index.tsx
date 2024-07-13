import menuIcon from "assets/menuIcon.svg";
import { useState } from "react";
import { useLockBodyScroll } from "lib/hooks/useLockBodyScroll";

import { createPortal } from "react-dom";
import { url } from "lib/utils";
import { Button } from "components/ui/button";
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuGroup,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuPortal,
   DropdownMenuSeparator,
   DropdownMenuShortcut,
   DropdownMenuSub,
   DropdownMenuSubContent,
   DropdownMenuSubTrigger,
   DropdownMenuTrigger,
} from "components/ui/dropdown-menu";
interface INavDrop {}

const Menu = () => {
   const [menuOpen, setMenuOpen] = useState(false);

   useLockBodyScroll(menuOpen);
   const ServicesData = [
      { title: "Home", link: "/" },
      { title: "Hire", link: "/hire" },
      { title: "Join The NOK", link: "/join" },
   ];
   const CompanyData = [
      { title: "About Us", link: "/about-us" },
      { title: "Contact Us", link: "/contact-us" },
      { title: "Terms of Service", link: "/terms" },
      { title: "Privacy Policy", link: "/privacy" },
   ];

   return (
      <>
         <DropdownMenu>
            <DropdownMenuTrigger asChild>
               <Button variant="default">
                  {" "}
                  <img src={url("/svgs/menuIcon.svg")} alt="" />
               </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[10rem] md:w-[20rem]">
               <DropdownMenuLabel>Navigation</DropdownMenuLabel>
               <DropdownMenuSeparator />
               <DropdownMenuGroup>
                  <DropdownMenuItem>
                     <a href="/"> Home</a>
                     <DropdownMenuShortcut></DropdownMenuShortcut>
                  </DropdownMenuItem>
               </DropdownMenuGroup>
               <DropdownMenuSeparator />
               <DropdownMenuGroup>
                  <DropdownMenuItem>
                     <a href="/about-us"> About Us</a>
                     <DropdownMenuShortcut></DropdownMenuShortcut>
                  </DropdownMenuItem>
               </DropdownMenuGroup>
               <DropdownMenuSeparator />

               <DropdownMenuGroup>
                  <DropdownMenuSub>
                     <DropdownMenuSubTrigger>Services</DropdownMenuSubTrigger>
                     <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                           <DropdownMenuItem>
                              <a href="/3d-animation">3D Animation</a>
                           </DropdownMenuItem>
                           <DropdownMenuItem>
                              <a href="/product-visualization">Product Visualization</a>
                           </DropdownMenuItem>
                           <DropdownMenuItem>
                              <a href="/vfx">VFX</a>
                           </DropdownMenuItem>
                           <DropdownMenuItem>
                              <a href="/game-development">Game Development</a>
                           </DropdownMenuItem>
                        </DropdownMenuSubContent>
                     </DropdownMenuPortal>
                  </DropdownMenuSub>
               </DropdownMenuGroup>
               <DropdownMenuSeparator />
               <DropdownMenuGroup>
                  <DropdownMenuItem>
                     <a href="/contact-us">Contact Us</a>
                  </DropdownMenuItem>
               </DropdownMenuGroup>
            </DropdownMenuContent>
         </DropdownMenu>
      </>
   );
};

export default Menu;
