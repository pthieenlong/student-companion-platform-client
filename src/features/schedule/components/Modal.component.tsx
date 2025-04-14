/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useState } from "react"
import ReactDOM from "react-dom"
import { Input } from "../../../components"
import {
  CalendarDateRangeIcon,
  ClipboardDocumentListIcon,
  ClockIcon,
  TagIcon,
} from "@heroicons/react/24/outline"
import { DatePicker, TimePicker, Select, Tag } from "antd";
import type { SelectProps } from "antd";

type TagRender = SelectProps["tagRender"];

const OPTIONS: SelectProps['options'] = [
  {
    label: "Task",
    value: "task",
    color: "#809285"
  },
  {
    label: "Event",
    value: "event",
    color: "#D948e4"

  },
  {
    label: "Reminder",
    value: "reminder",
    color: "#93AE12"
  }
]
const timeFormat = "HH:mm";
const tagRender: TagRender = (props) => {
  const { label, value, closable, onClose } = props;
  const option = OPTIONS.find((option) => option.value === value);
  const color = option?.color || "#f0f0f0";
  const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.preventDefault()
    event.stopPropagation()
  }
  return (
    <Tag
      color={color}
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{ marginInlineEnd: 4 }}
    >
      {label}
    </Tag>
  );
}
const ModalComponent = ({
  isShowing,
  hide,
}: {
  isShowing: boolean
  hide: React.MouseEventHandler<HTMLElement>
}) => {
  return (
    isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div
            className="fixed inset-0 z-40 bg-black opacity-50"
            role="presentation"
            aria-hidden="true"
            onClick={hide}
          />
          <div
            className="fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 transform"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            tabIndex={-1}
          >
            <button
              type="button"
              onClick={hide}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Close modal"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <form className="rounded-lg bg-white p-4">
              <div className="flex items-center justify-center my-[1rem]">
                <Input
                  name="task-title"
                  id="task-title"
                  type="text"
                  placeholder="Enter task title"
                  className="font-monserrat text-xl font-semibold"
                />
              </div>
              <div>
              <div className="flex flex-col gap-2">
                <div className="w-[20rem] justify-center flex items-center gap-x-2">
                  <label
                    htmlFor="task-date"
                    className="block text-sm font-medium text-gray-700"
                  >
                    <CalendarDateRangeIcon className="w-6" />
                  </label>
                  <DatePicker 
                    name="task-date"
                    id="task-date"
                    className="w-full"
                    format="DD-MM-YYYY"
                  />
                </div>
                <div className="w-[20rem] justify-center flex items-center gap-x-2">
                  <label
                    htmlFor="task-time"
                    className="block text-sm font-medium text-gray-700"
                  >
                    <ClockIcon className="w-6" />
                  </label>
                  <TimePicker.RangePicker 
                    format={timeFormat}
                    name="task-time"
                    id="task-time"
                    className="w-full"
                  />
                </div>
                <div className="w-[20rem] justify-center flex items-center gap-x-2">
                <label
                  htmlFor="task-time"
                  className="block text-sm font-medium text-gray-700"
                >
                  <TagIcon className="w-6" />
                </label>
                <Select
                  className="w-full"
                  mode="multiple"
                  tagRender={tagRender}
                  options={OPTIONS}
                />
              </div>
              </div>
              
                <div className="mt-4">
                  <button
                    type="button"
                    onClick={hide}
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
                  >
                    Add event
                  </button>
                </div>
              </div>
            </form>
          </div>
        </React.Fragment>,
        document.body,
      )
    : null
  )
}
 

export default ModalComponent
