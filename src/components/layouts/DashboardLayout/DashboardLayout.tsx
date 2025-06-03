import { ReactNode, useState } from "react";
import PageHead from "@/components/commons/PageHead";
import Sidebar from "./Sidebar";
import { SIDEBAR_ADMIN, SIDEBAR_MEMBER } from "./DashboardLayout.constants";
import { Navbar, NavbarMenuToggle } from "@heroui/react";

interface PropTypes {
  children: ReactNode;
  description?: string;
  title?: string;
  type?: string;
}

const DahsboardLayout = (props: PropTypes) => {
  const { children, description, title, type = "member" } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <PageHead title={title} />
      <div className="max-w-screen-3xl 3xl:container flex">
        <Sidebar
          sidebarItems={type === "admin" ? SIDEBAR_ADMIN : SIDEBAR_MEMBER}
          isOpen={open}
        />
        <div className="h-screen w-full overflow-y-auto p-8">
          <Navbar
            className="flex justify-between bg-transparent px-0"
            classNames={{wrapper: "p-0"}}
            isBlurred={false}
            position="static"
          >
            <h1 className="text-3xl font-bold">{title}</h1>
            <NavbarMenuToggle
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen(!open)}
              className="lg:hidden"
            />
          </Navbar>
          <p className="mb-4 text-small">{description}</p>
          {children}
        </div>
      </div>
    </>
  );
};

export default DahsboardLayout;
