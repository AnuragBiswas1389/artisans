/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Breadcrumb,
  Button,
  Checkbox,
  Label,
  Modal,
  Table,
  Textarea,
  TextInput,
} from "flowbite-react";
import type { FC } from "react";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Badge } from "flowbite-react";
import {
  HiCog,
  HiDotsVertical,
  HiExclamation,
  HiExclamationCircle,
  HiHome,
  HiTrash,
} from "react-icons/hi";
import NavbarSidebarLayout from "../../layouts/navbar-sidebar";
import { Pagination } from "../users/list";
import { TableBody } from "flowbite-react/lib/esm/components/Table/TableBody";
import { Link } from "react-router-dom";

const EcommerceOrdersPage: FC = function () {
  return (
    <NavbarSidebarLayout isFooter={false}>
      <div className="block items-center justify-between border-b border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:flex">
        <div className="mb-1 w-full">
          <div className="mb-4">
            <Breadcrumb className="mb-4">
              <Breadcrumb.Item href="#">
                <div className="flex items-center gap-x-3">
                  <HiHome className="text-xl" />
                  <span className="dark:text-white">Home</span>
                </div>
              </Breadcrumb.Item>
              <Breadcrumb.Item href="/e-commerce/products">
                E-commerce
              </Breadcrumb.Item>
              <Breadcrumb.Item>Orders</Breadcrumb.Item>
            </Breadcrumb>
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
              All Orders
            </h1>
          </div>
          <div className="block items-center sm:flex">
            <SearchForOrders />
            <div className="hidden space-x-1 border-l border-gray-100 pl-2 dark:border-gray-700 md:flex">
              <a
                href="#"
                className="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Configure</span>
                <HiCog className="text-2xl" />
              </a>
              <a
                href="#"
                className="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Delete</span>
                <HiTrash className="text-2xl" />
              </a>
              <a
                href="#"
                className="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Purge</span>
                <HiExclamationCircle className="text-2xl" />
              </a>
              <a
                href="#"
                className="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Settings</span>
                <HiDotsVertical className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow">
              <OrdersTable />
            </div>
          </div>
        </div>
      </div>
      <Pagination />
    </NavbarSidebarLayout>
  );
};

const SearchForOrders: FC = function () {
  return (
    <form className="mb-4 sm:mb-0 sm:pr-3" action="#" method="GET">
      <Label htmlFor="products-search" className="sr-only">
        Search
      </Label>
      <div className="relative mt-1 lg:w-64 xl:w-96">
        <TextInput
          id="orders-search"
          name="orders-search"
          placeholder="Search orders"
        />
      </div>
    </form>
  );
};

const TestOrders: {
  checked: boolean;
  id: string;
  name: string;
  qty: number;
  price: string;
  paymentMethod: string;
  status: string;
}[] = [
    {
      checked: false,
      id: "123",
      name: "craft1",
      qty: 1,
      price: "₹223",
      paymentMethod: "COD",
      status: "inProgress",
    },
    {
      checked: false,
      id: "124",
      name: "craft2",
      qty: 2,
      price: "₹789",
      paymentMethod: "debit",
      status: "completed",
    },
    {
      checked: false,
      id: "125",
      name: "craft4",
      qty: 6,
      price: "₹123",
      paymentMethod: "credit",
      status: "cancelled",
    },
    {
      checked: false,
      id: "126",
      name: "craft5",
      qty: 3,
      price: "₹456",
      paymentMethod: "net-banking",
      status: "inProgress",
    },
    {
      checked: false,
      id: "127",
      name: "craft5",
      qty: 3,
      price: "₹78",
      paymentMethod: "COD",
      status: "new",
    },
    {
      checked: false,
      id: "128",
      name: "craft5",
      qty: 3,
      price: "₹78",
      paymentMethod: "COD",
      status: "closed",
    },
  ];

interface statusprop{
  status: string;
};

const OrderStatus = ({ status } : statusprop) => {
  if (status === "inProgress") {
    return (
      <Badge className="justify-center" color="warning">
        In Progress
      </Badge>
    );
  } else if (status === "new") {
    return (
      <Badge className="justify-center" color="info">
        New !
      </Badge>
    );
  } else if (status === "completed") {
    return (
      <Badge className="justify-center" color="success">
        Successful
      </Badge>
    );
  } else if (status === "cancelled") {
    return (
      <Badge className="justify-center" color="failure">
        Cancelled
      </Badge>
    );
  } else if (status === "failed") {
    return (
      <Badge className="justify-center" color="failure">
        Failure
      </Badge>
    );
  } else if (status === "closed") {
    return (
      <Badge className="justify-center" color="gray">
        Closed
      </Badge>
    );
  } else {
    return (
      <div>
        <Badge className="justify-center" color="pink" icon={HiExclamation}>
          Error
        </Badge>
      </div>
    );
  }
};

const OrdersTable: FC = function () {
  return (
    <Table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
      <Table.Head className="bg-gray-100 dark:bg-gray-700 text-center">
        <Table.HeadCell>
          <span className="sr-only">Toggle selected</span>
          <Checkbox />
        </Table.HeadCell>
        <Table.HeadCell>ID</Table.HeadCell>
        <Table.HeadCell>Item Name</Table.HeadCell>
        <Table.HeadCell>Quantity</Table.HeadCell>
        <Table.HeadCell>Price</Table.HeadCell>
        <Table.HeadCell>Payment Method</Table.HeadCell>
        <Table.HeadCell className="text-center">Status</Table.HeadCell>
        <Table.HeadCell ></Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">
        {TestOrders.map((order, i) => (
          <Table.Row
            className={
              order.status === "new"
                ? "hover:bg-gray-100 dark:hover:bg-gray-700 text-center " //change background color based on whether its a new order
                : "hover:bg-gray-100 dark:hover:bg-gray-700 text-center"
            }
            key={i}
          >
            
            <Table.Cell className="w-4 p-4">
              <Checkbox />
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400">
              <div className="text-base font-semibold text-gray-900 dark:text-white">
                {order.id}
              </div>
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white">
              {order.name}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white">
              {order.qty}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white">
              {order.price}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white">
              {order.paymentMethod}
            </Table.Cell>
            <Table.Cell className="space-x-2 whitespace-nowrap p-4">
              <OrderStatus status={order.status} />
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap p-4 text-4xl text-gray-400 dark:text-white hover:text-gray-700 transition-all hover:pr-4">
              <Link key={order.id} to={`/e-commerce/view-order/${order.id}`}>
                  &#8250;
              </Link>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default EcommerceOrdersPage;
