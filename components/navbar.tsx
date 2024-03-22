"use client";

import Image from "next/image";
import { NavbarQuery } from "../tina/__generated__/types";
import { tinaField, useTina } from "tinacms/dist/react";
import SvgIcon from "./svgIcon";
import { useRef, useState } from "react";
import Link from "next/link";

export default function Navbar(props: {
  data: NavbarQuery;
  variables: object;
  query: string;
}) {
  const { data } = useTina(props);

  const [icon, setIcon] = useState("hamburger");
  const divRef = useRef<HTMLDivElement | null>(null);

  const changeIcon = () => {
    if (icon === "hamburger") {
      setIcon("x");
      divRef.current?.classList.toggle("hidden");
      document.body.style.overflow = "hidden";
    } else {
      setIcon("hamburger");
      divRef.current?.classList.toggle("hidden");
      document.body.style.overflow = "scroll";
    }
  };

  return (
    <nav className="sticky z-50">
      <div className="flex justify-between bg-white px-4 py-2 shadow-sm ">
        <Link className="mr-4 self-center " href="/">
          <Image
            data-tina-field={tinaField(data?.navbar, "logo")}
            width={125}
            height={90}
            src={data?.navbar?.logo || "/default.png"}
            alt="logo"
            className="py-4"
          />
        </Link>
        <div className="hidden items-center gap-8 lg:flex">
          {data.navbar.links &&
            data?.navbar?.links.map((link, index) => {
              return (
                <a
                  data-tina-field={link && tinaField(link, "label")}
                  key={index}
                  href={link?.url || "/"}
                >
                  <h3 className="cursor-pointer border-b-4 border-transparent p-4 text-lg font-bold text-black hover:border-b-blue-500 hover:text-blue-500">
                    {link?.label}
                  </h3>
                </a>
              );
            })}
          {data.navbar.imgLinks && (
            <>
              <div className="mx-2 h-16 self-center border-l-4 border-l-black lg:mx-6"></div>
              {data?.navbar?.imgLinks.map((link, index) => {
                return (
                  <a key={index} className="mr-4" href={link?.url || "/"}>
                    <Image
                      data-tina-field={link && tinaField(link, "label")}
                      width={125}
                      height={90}
                      src={link?.image || "/default.png"}
                      alt={link?.label || "image " + index}
                      className="hover:opacity-50"
                    />
                  </a>
                );
              })}
            </>
          )}
        </div>
        <div
          onClick={changeIcon}
          className="z-50 flex cursor-pointer items-center lg:hidden"
        >
          <SvgIcon iconName={icon} className="h-8 w-8"></SvgIcon>
        </div>
        <div
          ref={divRef}
          className="absolute left-0 top-0 z-40 hidden h-screen w-screen overflow-hidden bg-white lg:hidden"
        >
          <div className="flex flex-col gap-4 px-6 py-12 ">
            {data.navbar.links &&
              data?.navbar?.links.map((link, index) => {
                return (
                  <Link
                    data-tina-field={link && tinaField(link, "label")}
                    key={index}
                    href={link?.url || "/"}
                    onClick={changeIcon}
                  >
                    <h3 className="inline-block cursor-pointer text-lg font-bold text-black hover:text-blue-500">
                      {link?.label}
                    </h3>
                  </Link>
                );
              })}
            {data.navbar.imgLinks && (
              <>
                {data?.navbar?.imgLinks.map((link, index) => {
                  return (
                    <a key={index} className="mr-4" href={link?.url || "/"}>
                      <Image
                        data-tina-field={link && tinaField(link, "label")}
                        width={125}
                        height={90}
                        src={link?.image || "/default.png"}
                        alt={link?.label || "image " + index}
                        className="hover:opacity-50"
                      />
                    </a>
                  );
                })}
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
