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
  Dropdown,
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
  HiPencilAlt,
  HiTrash,
  HiUpload,
} from "react-icons/hi";
import NavbarSidebarLayout from "../../layouts/navbar-sidebar";
import { Pagination } from "../users/list";

const EcommerceAddProductsPage: FC = function () {
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
            <Breadcrumb.Item>Add Products</Breadcrumb.Item>
          </Breadcrumb>
          <h1 className="text-xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Add products
          </h1>
        </div>
      </div>
      <div className="p-4 pt-0 mb-8">
        <form action="" method="">
          {/* product details start */}
          <div>
            <div className="py-4">
              <h2 className="border-b-2 border-gray-300 text-xl font-semibold dark:text-gray-300 dark:border-gray-500">Product Details</h2>
            </div>
            <div className="py-4">
              <Label htmlFor="file-upload">Product Image</Label>
              <div className="flex w-full items-center justify-center">
                <label className="flex h-32 w-full cursor-pointer flex-col rounded border-2 border-dashed border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-700">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <HiUpload className="text-4xl text-gray-300" />
                    <p className="py-1 text-sm text-gray-600 dark:text-gray-500">
                      Upload a file or drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                  <input type="file" className="hidden" name="file-upload" />
                </label>
              </div>
            </div>
            <div className="flex space-x-5">
              <div className="rounded border-2 border-gray-300 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-700 p-2">
                <img
                  alt="Apple iMac 1"
                  src="/images/products/apple-imac-1.png"
                  className="h-24"
                />
                <a href="#" className="cursor-pointer">
                  <span className="sr-only">Delete</span>
                  <HiTrash className="-mt-5 text-2xl text-red-600" />
                </a>
              </div>
              <div className="rounded border-2 border-gray-300 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-700 p-2">
                <img
                  alt="Apple iMac 2"
                  src="/images/products/apple-imac-2.png"
                  className="h-24"
                />
                <a href="#" className="cursor-pointer">
                  <span className="sr-only">Delete</span>
                  <HiTrash className="-mt-5 text-2xl text-red-600" />
                </a>
              </div>
              <div className="rounded border-2 border-gray-300 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-700 p-2">
                <img
                  alt="Apple iMac 3"
                  src="/images/products/apple-imac-3.png"
                  className="h-24"
                />
                <a href="#" className="cursor-pointer">
                  <span className="sr-only">Delete</span>
                  <HiTrash className="-mt-5 text-2xl text-red-600" />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 py-6">
              <div className="">
                <Label htmlFor="productName">Product Title</Label>
                <TextInput
                  id="productName"
                  name="productName"
                  placeholder='Apple iMac 27"'
                  className="mt-1"
                />
              </div>
              <div className="flex items-center gap-4 justify-center">
                <Checkbox id="aut" name="auth" disabled value={""} />
                <Label htmlFor="auth">Auth Certificate </Label>
              </div>
              <div className="lg:col-span-2">
                <Label htmlFor="productDetails">Product description</Label>
                <Textarea
                  id="productDetails"
                  name="productDetails"
                  placeholder="e.g. 3.8GHz 8-core 10th-generation Intel Core i7 processor, Turbo Boost up to 5.0GHz, Ram 16 GB DDR4 2300Mhz"
                  rows={6}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="sku">Product Keywords</Label>
                <TextInput id="sku" name="sku" placeholder="" className="mt-1" />
              </div>
              <div className="">
                <Label htmlFor="sSku">Crafts Person Name / ID</Label>
                <TextInput
                  id="sSku"
                  name="sSku"
                  placeholder=""
                  className="mt-1"
                />
              </div>
              <div>
                <fieldset>
                  <legend className="dark:text-gray-300 text-sm">Product Condition</legend>
                  <div className="flex items-center gap-6 p-2">
                    <div className="flex gap-2 items-center">
                      <input type="radio" name="product-condition" id="product-new" value={"product-new"} className="dark:border-none" />
                      <Label htmlFor="product-condition">New</Label>
                    </div>
                    <div className="flex gap-2 items-center">
                      <input type="radio" name="product-condition" id="product-used" value={"product-used"} className="dark:border-none" />
                      <Label htmlFor="product-condition">Used</Label>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
            {/* product details end */}


            {/* product pricing start */}
            <div className="py-4">
              <h2 className="border-b-2 border-gray-300 text-xl font-semibold dark:text-gray-300 dark:border-gray-500">Product Pricing</h2>
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 py-6">
              <div className="">
                <Label htmlFor="price">MRP</Label>
                <TextInput
                  id="price"
                  name="price"
                  type="number"
                  placeholder="₹2300"
                  className="mt-1"
                />
              </div>
              <div className="">
                <Label htmlFor="price">Selling Price</Label>
                <TextInput
                  id="price"
                  name="price"
                  type="number"
                  placeholder="₹2300"
                  className="mt-1"
                />
              </div>
              <div className="">
                <Label htmlFor="price">Offers</Label>
                <TextInput
                  id="price"
                  name="price"
                  type="text"
                  placeholder="welcome offers"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="offers">Discount</Label>
                <select
                  id="offers"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-1"
                >
                  <option selected>Choose a Discount</option>
                  <option value="offer1">10%</option>
                  <option value="offer2">25%</option>
                  <option value="offer3">50%</option>
                  <option value="offer4">
                    <TextInput
                      id="customOffer"
                      placeholder="custom"
                      type="number"
                    />
                    Custom
                  </option>
                </select>
              </div>
              {/* <div>
                <Label htmlFor="productDimension">Product Dimensions</Label>
                <div className="flex gap-6">
                  <TextInput
                    id="productDimension"
                    name="productDimension"
                    placeholder="L*B*H   (for e.g. 20*60*10)"
                    className="mt-1 w-full"
                  />
                  <select
                    id="unit"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-1"
                  >
                    <option selected disabled>
                      Pick a unit
                    </option>
                    <option value="cm">cm</option>
                    <option value="inch">inch</option>
                    <option value="meter">meter</option>
                  </select>
                </div>
              </div>
              <div>
                <Label htmlFor="weight">Product weight (in grams)</Label>
                <TextInput
                  id="weight"
                  name="weight"
                  type="number"
                  placeholder="e.g. 1300"
                  className="mt-1"
                />
              </div> */}
            </div>
            {/* product pricing end */}


            {/* Logistics start */}
            <div className="py-4 pt-0">
              <h2 className="border-b-2 border-gray-300 text-xl font-semibold dark:text-gray-300 dark:border-gray-500">Logistics</h2>
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 py-6">
              <div>
                <Label htmlFor="offers">Dispatchment</Label>
                <select
                  id="offers"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-1"
                >
                  <option selected>Select Dispatchment time</option>
                  <option value="offer1">24 Hrs</option>
                  <option value="offer2">48 Hrs</option>
                  <option value="offer3">72 Hrs</option>
                  <option value="offer4">
                    <TextInput
                      id="customOffer"
                      placeholder="custom"
                      type="number"
                    />
                    Custom
                  </option>
                </select>
              </div>
              <div className="flex items-center">
                <fieldset>
                  <legend className="dark:text-gray-300 text-sm">Return Policy</legend>
                  <div className="flex items-center gap-6 p-2">
                    <div className="flex gap-2 items-center">
                      <input type="radio" name="return-policy" id="returnable" value={"returnable"} className="dark:border-none" />
                      <Label htmlFor="returnable">Returnable</Label>
                    </div>
                    <div className="flex gap-2 items-center">
                      <input type="radio" name="return-policy" id="non-returnable" value={"non-returnable"} className="dark:border-none" />
                      <Label htmlFor="non-returnable">Non-Returnable</Label>
                    </div>
                  </div>
                </fieldset>
              </div>
              <div className="flex items-center">
                <fieldset>
                  <legend className="dark:text-gray-300 text-sm">Delivery</legend>
                  <div className="flex items-center gap-6 p-2">
                    <div className="flex gap-2 items-center">
                      <input type="radio" name="delivery" id="delivery-free" value={"delivery-free"} className="dark:border-none" />
                      <Label htmlFor="product-condition">New</Label>
                    </div>
                    <div className="flex gap-2 items-center">
                      <input type="radio" name="delivery" id="delivery-paid" value={"delivery-paid"} className="dark:border-none" />
                      <Label htmlFor="product-condition">Used</Label>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
            {/* Logistics end */}


            {/* payments start */}
            <div className="py-4 pt-0">
              <h2 className="border-b-2 border-gray-300 text-xl font-semibold dark:text-gray-300 dark:border-gray-500">Payment</h2>
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 py-6">
              <div className="flex items-center">
                <fieldset>
                  <legend className="dark:text-gray-300 text-sm">Delivery</legend>
                  <div className="flex items-center gap-6 p-2">
                    <div className="flex gap-2 items-center">
                      <input type="radio" name="payment" id="payment-cod" value={"payment-cod"} className="dark:border-none" />
                      <Label htmlFor="payment-cod">Cash on Deliver (COD)</Label>
                    </div>
                    <div className="flex gap-2 items-center">
                      <input type="radio" name="payment" id="payment-prepaid" value={"payment-prepaid"} className="dark:border-none" />
                      <Label htmlFor="payment-prepaid">Prepaid</Label>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
            {/* payments end */}

          </div>
          <div className="flex items-center">
            <input type="submit" value="Add Product" onSubmit={(e) => { e.preventDefault() }} className="bg-primary-600 p-2 rounded-lg cursor-pointer text-gray-50 hover:bg-primary-500 active:bg-primary-700 shadow-xl flex-1" />
          </div>
        </form>
      </div>
    </NavbarSidebarLayout>
  );
};

export default EcommerceAddProductsPage;
