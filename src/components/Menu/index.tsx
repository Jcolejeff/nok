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
               <button className="">
                  {" "}
                  <img src={url("/svgs/menuIcon.svg")} alt="" className="w-8" />
               </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-6 w-[10rem] border-none bg-black/50 text-xl text-white md:w-[20rem]">
               <DropdownMenuGroup>
                  <DropdownMenuItem
                     onClick={() => {
                        window.location.href = "/";
                     }}
                  >
                     <a href="/"> Home</a>
                     <DropdownMenuShortcut></DropdownMenuShortcut>
                  </DropdownMenuItem>
               </DropdownMenuGroup>

               <DropdownMenuGroup>
                  <DropdownMenuSub>
                     <DropdownMenuSubTrigger>Services</DropdownMenuSubTrigger>
                     <DropdownMenuPortal>
                        <DropdownMenuSubContent className="bg-black/50 text-white">
                           <DropdownMenuItem
                              onClick={() => {
                                 window.location.href = "/3d-animation";
                              }}
                           >
                              <a href="/3d-animation">3D Animation</a>
                           </DropdownMenuItem>
                           <DropdownMenuItem
                              onClick={() => {
                                 window.location.href = "/product-visualization";
                              }}
                           >
                              <a href="/product-visualization">Product Visualization</a>
                           </DropdownMenuItem>
                           <DropdownMenuItem
                              onClick={() => {
                                 window.location.href = "/vfx";
                              }}
                           >
                              <a href="/vfx">VFX</a>
                           </DropdownMenuItem>
                           <DropdownMenuItem
                              onClick={() => {
                                 window.location.href = "/game-development";
                              }}
                           >
                              <a href="/game-development">Game Development</a>
                           </DropdownMenuItem>
                        </DropdownMenuSubContent>
                     </DropdownMenuPortal>
                  </DropdownMenuSub>
               </DropdownMenuGroup>

               <DropdownMenuGroup>
                  <DropdownMenuItem
                     onClick={() => {
                        window.location.href = "/about-us";
                     }}
                  >
                     <a href="/about-us"> About The Studio</a>
                     <DropdownMenuShortcut></DropdownMenuShortcut>
                  </DropdownMenuItem>
               </DropdownMenuGroup>
               <DropdownMenuGroup>
                  <DropdownMenuItem
                     onClick={() => {
                        window.location.href = "/contact-us";
                     }}
                  >
                     <a href="/contact-us">Contact Us</a>
                  </DropdownMenuItem>
               </DropdownMenuGroup>
            </DropdownMenuContent>
         </DropdownMenu>
      </>
   );
};

export default Menu;
