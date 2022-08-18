import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
/**
 * full documentation and params link
 * https://github.com/Hacker0x01/react-datepicker/blob/master/docs/datepicker.md
 */
const CustomDatePicker = React.forwardRef(
  (
    {
      selected,
      onSelect,
      onChange,
      id,
      showMonthDropdown,
      showYearDropdown,
      className,
      name,
      value,
      dateFormat,
      isDisable,
      activeStartDate,
      onBlur,
      maxDate,
      maxTime,
      minTime,
      minDate,
      excludeDates,
      returnValue,
      selectRange,
      endDate,
      dateFormatCalendar,
      
      ...props
    },
    ref
  ) => {
     
    return (
      <>
        <DatePicker
          name={name}
          id={id}
          className={className ? className : "form-control"}
          onSelect={onSelect}
          onChange={onChange}
          showMonthDropdown={showMonthDropdown ? showMonthDropdown : false}
          showYearDropdown={showYearDropdown ? showYearDropdown : false}
          selected={selected}
          ref={ref}
          onBlur={onBlur}
          dateFormat={ dateFormat ? dateFormat:"MM/dd/yyyy"}
          dateFormatCalendar={dateFormatCalendar  ? dateFormatCalendar :"LLLL yyyy"}
          maxDate={maxDate}
          minDate={minDate}
        />
      </>
    );
  });
export default CustomDatePicker;
CustomDatePicker.displayName ="CustomDatePicker";