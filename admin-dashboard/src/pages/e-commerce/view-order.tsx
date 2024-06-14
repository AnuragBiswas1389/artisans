/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Breadcrumb,
  Button,
  Card,
  Checkbox,
  Label,
  Table,
  Modal,
  Textarea,
  TextInput,
} from "flowbite-react";
import type { FC } from "react";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import {
  HiCog,
  HiDotsVertical,
  HiExclamationCircle,
  HiHome,
  HiOutlineExclamationCircle,
  HiOutlinePrinter,
  HiPencilAlt,
  HiTrash,
  HiUpload,
} from "react-icons/hi";
import NavbarSidebarLayout from "../../layouts/navbar-sidebar";
import { Pagination } from "../users/list";
import { useParams } from "react-router-dom";


const EcommerceViewOrderPage: FC = function () {
  const orderId = useParams<{ orderId: string }>();
  return (
    <NavbarSidebarLayout isFooter={false}>
      <div className="p-4">
        <div>
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
            <Breadcrumb.Item>View Order</Breadcrumb.Item>
          </Breadcrumb>
          <div className="flex justify-between">
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
              Order #{orderId.orderId}
            </h1>
            <div className="flex gap-4">
              <Button><HiOutlinePrinter className="text-xl mr-4" />Print Invoice</Button>
              <Button>Print Label</Button>
            </div>
          </div>

        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="overflow-x-auto col-span-full p-4">
          <Table className="text-base ">
            <Table.Head className="">
              <Table.HeadCell>Date</Table.HeadCell>
              <Table.HeadCell>Image</Table.HeadCell>
              <Table.HeadCell>Product name</Table.HeadCell>
              <Table.HeadCell>Color</Table.HeadCell>
              <Table.HeadCell>Category</Table.HeadCell>
              <Table.HeadCell>Price</Table.HeadCell>
              <Table.HeadCell>Qty.</Table.HeadCell>
              <Table.HeadCell>Mode of payment</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y border-b-gray-300 border-dotted border-b-2 dark:border-gray-600">
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell>20-04-24</Table.Cell>
                <Table.Cell>
                  <img src="/public/images/products/apple-imac-1.png" alt="product" className="h-[80px]" />
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  Apple MacBook Pro 17"
                </Table.Cell>

                <Table.Cell>Sliver</Table.Cell>
                <Table.Cell>Laptop</Table.Cell>
                <Table.Cell>4</Table.Cell>
                <Table.Cell>Net Banking</Table.Cell>
                <Table.Cell>$2999</Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell>15-02-23</Table.Cell>
                <Table.Cell>
                  <img src="/public/images/products/apple-imac-2.png" alt="product" className="h-[80px]" />
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  Microsoft Surface Pro
                </Table.Cell>
                <Table.Cell>White</Table.Cell>
                <Table.Cell>Laptop PC</Table.Cell>
                <Table.Cell>3</Table.Cell>
                <Table.Cell>Cash On Delivery</Table.Cell>
                <Table.Cell>$1999</Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell>15-02-23</Table.Cell>
                <Table.Cell>
                  <img src="/public/images/products/apple-imac-1.png" alt="product" className="h-[80px]" />
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Magic Mouse 2</Table.Cell>
                <Table.Cell>Black</Table.Cell>
                <Table.Cell>Accessories</Table.Cell>
                <Table.Cell>4</Table.Cell>
                <Table.Cell>Net Banking</Table.Cell>
                <Table.Cell>$99</Table.Cell>
              </Table.Row>
            </Table.Body>
            <Table.Body className="">
              <Table.Row>
                <Table.Cell colSpan={6}></Table.Cell>
                <Table.Cell>
                  Sub Total :
                </Table.Cell>
                <Table.Cell>
                  $150
                </Table.Cell>
              </Table.Row>
              <Table.Row >
                <Table.Cell colSpan={6}></Table.Cell>
                <Table.Cell>
                  Discount :
                </Table.Cell>
                <Table.Cell>
                  -$10
                </Table.Cell>
              </Table.Row>
              <Table.Row className="font-bold border-t-2 border-gray-200 text-gray-800 dark:text-gray-100 dark:border-gray-800 border-b-2 dark:bg-gray-800">
                <Table.Cell colSpan={6}></Table.Cell>
                <Table.Cell>
                  Total Amount :
                </Table.Cell>
                <Table.Cell>
                  $50
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
        <div className="m-4 text-gray-900 dark:text-white rounded-md overflow-hidden bg-white dark:bg-gray-800 shadow-lg">
          <div className="bg-primary-50 border-b-2 border-b-gray-300 dark:border-b-gray-200 dark:bg-gray-600 p-4">
            <h2 className="text-base font-semibold sm:text-xl">
              Shipping Details
            </h2>
          </div>
          <div className="p-4 dark:text-gray-300 flex flex-col gap-4">
            <p><b>State : </b>Tripura</p>
            <p><b>City : </b>Agartala</p>
            <p><b>Zip Code : </b>799003</p>
            <p><b>Address : </b>Ramnagar Road no. 2, 3rd Crossing</p>
          </div>
        </div>

        <div className="m-4 text-gray-900 dark:text-white rounded-md overflow-hidden bg-white dark:bg-gray-800 shadow-lg">
          <div className="bg-primary-50 border-b-2 border-b-gray-300 dark:border-b-gray-200 dark:bg-gray-600 p-4">
            <h2 className="text-base font-semibold sm:text-xl">
              Contact Details
            </h2>
          </div>
          <div className="p-4 dark:text-gray-300 flex flex-col gap-4">
            <p><b>Name : </b>Name of account holder</p>
            <p><b>Phone : </b>999-5552-666</p>
            <p><b>Email : </b>test@mail.com</p>
          </div>
        </div>

        <div className="m-4 text-gray-900 dark:text-white rounded-md overflow-hidden bg-white dark:bg-gray-800 shadow-lg">
          <div className="bg-primary-50 border-b-2 border-b-gray-300 dark:border-b-gray-200 dark:bg-gray-600 p-4">
            <h2 className="text-base font-semibold sm:text-xl">
              Delivery Progress
            </h2>
          </div>
          <form className="m-4">
            <select id="delivery-progress" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option disabled defaultValue="">Select Delivery progress</option>
              <option value="received">Received</option>
              <option value="processing">Processing</option>
              <option value="dispatched">Dispatched</option>
              <option value="cancel">Cancel</option>
            </select>
          </form>
        </div>
      </div>

    </NavbarSidebarLayout>
  );
};

export default EcommerceViewOrderPage;
