import React from 'react';
import { Tooltip, Text } from 'react-native-elements';

export const second = 1000;
export const minute = second * 60;
export const hour = minute * 60;
export const day = hour * 24;
export const month = day * 30; // let's count that every month has 30 days
export const year = day * 365;
export const formatTime = (number, unit) => `${number} ${number > 1 ? `${unit}s` : unit} ago`;

export const relativeTimeTable = [
  { rightBound: Infinity, description: date => formatTime(Math.round(date / (year)), 'year') },
  { rightBound: year, description: date => formatTime(Math.round(date / (month)), 'month') },
  { rightBound: month, description: date => formatTime(Math.round(date / (day)), 'day') },
  { rightBound: day, description: date => formatTime(Math.round(date / (hour)), 'hour') },
  { rightBound: hour, description: date => formatTime(Math.round(date / (minute)), 'minute') },
  { rightBound: minute, description: () => 'Just now' }
];

export const exact = (value) => value.toUTCString().split(',')[1].slice(0, -7).trim();

const FormatDate = ({ date, tooltipProps, formatTooltip, textProps, ...props }) => {
  const currDate = new Date(date);
  return (
    <Tooltip popover={<Text {...tooltipProps}>{formatTooltip ? formatTooltip(currDate, exact(currDate)) : exact(currDate)} UTC</Text>} {...props}>
      <Text {...textProps}>{relativeTimeTable.reduce((acc, i) => (i.rightBound > Date.now() - currDate ? i.description(Date.now() - currDate) : acc), exact(currDate))}</Text>
    </Tooltip>
  );
}

export default FormatDate;
