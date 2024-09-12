import React from "react";
import {
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Alert,
  Input,
  Drawer,
  Card,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,

  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { RxCrossCircled } from "react-icons/rx";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  CubeTransparentIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import { IoBagAddOutline } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../store/slice/authSlice";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

export function SidebarWithBurgerMenu({ setSideBarText }) {
  const [open, setOpen] = React.useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const name = localStorage.getItem("author");
  const navigate = useNavigate();
  const role = useSelector(state => state.auth.role)
  const { pathname } = useLocation();

  const dispatch = useDispatch();

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  const logouthandle = () => {
    toast.success("Successfully logout");
    setTimeout(() => {
      navigate("/user-auth")
      dispatch(logout())
    }, 1000)
  }

  const switchProfile = async () => {

    toast.success("Account switched")
    try {
      const res = await axios.get(import.meta.env.VITE_API_URL + "/switch", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
      })

      const data = res.data;
      toast.success(data.message)
      setTimeout(() => {
        navigate(`/${data.role}/dashboard`)
      }, 1000);
      dispatch(login(data))
    } catch (error) {
      console.log(error.message)

    }
  }

  return (
    <div className="fixed lg:top-0 top-4 z-30 " >
      <Toaster position="top-center" />
      <IconButton variant="text" className="bg-black rounded-full  fixed top-4 left-6 hover:bg-black text-white text-3xl" onClick={openDrawer}>
        {
          name.charAt(0)
        }
      </IconButton>
      <Drawer open={isDrawerOpen} onClose={closeDrawer}>

        <Card
          color="transparent"
          shadow={false}
          className="h-[calc(100vh-2rem)] w-full p-4"
        >
          <div className="mb-2 flex justify-between items-center gap-4 p-4">

            <Typography variant="h5" color="blue-gray">
              {
                name.charAt(0).toUpperCase() + name.slice(1)
              }
            </Typography>
            <RxCrossCircled size={24} onClick={closeDrawer} className="cursor-pointer" />
          </div>




          <List>
            <Accordion
              className="md:hidden block"
              open={open === 1}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""
                    }`}
                />
              }
            >

              <ListItem className={`p-0 ${pathname === "/seller/dashboard" ? "block" : "hidden"}`} selected={open === 1} >
                <AccordionHeader
                  onClick={() => handleOpen(1)}
                  className="border-b-0 p-3"
                >
                  <ListItemPrefix>
                    <PresentationChartBarIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="mr-auto font-normal">
                    Manage Products
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <List className="p-0">

                  <ListItem>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    <span onClick={(e) => setSideBarText(e.target.innerText)}>  Uploaded</span>
                  </ListItem>
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    <span onClick={(e) => setSideBarText(e.target.innerText)} >Add New Product</span>
                  </ListItem>
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    <span onClick={(e) => setSideBarText(e.target.innerText)}>   Analytics</span>
                  </ListItem>
                </List>
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 1}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""
                    }`}
                />
              }
            >

              {/* <ListItem className="p-0" selected={open === 1}>
                <AccordionHeader
                  onClick={() => handleOpen(1)}
                  className="border-b-0 p-3 hidden md:block"
                >
                  <ListItemPrefix>
                    <PresentationChartBarIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="mr-auto font-normal">
                    Dashboard
                  </Typography>
                </AccordionHeader>
              </ListItem> */}
              <AccordionBody className="py-1">
                <List className="p-0">

                  <ListItem>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Analytics
                  </ListItem>
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Reporting
                  </ListItem>
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Projects
                  </ListItem>
                </List>
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 2}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""
                    }`}
                />
              }
            >

              <AccordionBody className="py-1">
                <List className="p-0">
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    <span onClick={(e) => setSideBarText(e.target.innerText)}>Orders</span>
                  </ListItem>
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    <span onClick={(e) => setSideBarText(e.target.innerText)}> Products</span>
                  </ListItem>
                </List>
              </AccordionBody>
            </Accordion>
            <hr className="my-2 border-blue-gray-50" />
            {
              pathname !== "/home" && (
                <ListItem onClick={() => navigate("/home")}>
                  <ListItemPrefix>
                    <PowerIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  Home
                </ListItem>
              )

            }


            {
              role.toLowerCase() === "seller" && <ListItem ListItem onClick={() => navigate("/seller/dashboard")}>
                <ListItemPrefix>
                  <UserCircleIcon className="h-5 w-5" />
                </ListItemPrefix>
                Profile
              </ListItem>
            }


            {
              role.toLowerCase() === "buyer" && (
                <ListItem className={`${pathname === "/your/order" && "bg-black text-white"}`} onClick={() => navigate("/your/order")}>
                  <ListItemPrefix>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                    </svg>

                  </ListItemPrefix>
                  Order
                </ListItem>
              )
            }

            {
              role.toLowerCase() === "buyer" && (
                <ListItem className={`${pathname === "/your/favourite" && "bg-black text-white"}`} onClick={() => navigate("/your/favourite")}>
                  <ListItemPrefix>
                    <IoBagAddOutline size={24} />
                  </ListItemPrefix>
                  Favourite
                </ListItem>
              )
            }


            <ListItem>
              <ListItemPrefix >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                </svg>

              </ListItemPrefix>
              <span onClick={switchProfile}>Switch to   {
                role.toLowerCase() === "seller" ? "Buyer" : "Seller"
              }</span>

            </ListItem>
            <ListItem onClick={logouthandle}>
              <ListItemPrefix>
                <PowerIcon className="h-5 w-5" />
              </ListItemPrefix>
              Log Out
            </ListItem>
          </List>

        </Card>
      </Drawer>
    </div>
  );
}