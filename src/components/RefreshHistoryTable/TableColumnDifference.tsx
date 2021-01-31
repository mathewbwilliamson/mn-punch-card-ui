import React from 'react';
import { RefreshHistoryItem } from '../../types/productTypes';

interface TableColumnDifferenceProps {
  item: RefreshHistoryItem;
}

export const TableColumnDifference: React.FC<TableColumnDifferenceProps> = ({
  item,
}) => {
  let textToUse: string = `No Change`;
  let colorToUse: string = 'text-blue-500';

  const differenceAmount = item.newRewardCardPrice - item.oldRewardCardPrice;

  if (
    item.oldRewardCardPrice === null ||
    item.oldRewardCardPrice === undefined
  ) {
    return <div>No Data</div>;
  }

  const percentageChange = Math.round(
    (differenceAmount / item.newRewardCardPrice) * 100
  );

  const increaseText = `(Increased ${percentageChange}%)`;
  const decreaseText = `(Decreased ${percentageChange}%)`;

  if (differenceAmount > 0) {
    textToUse = increaseText;
    colorToUse = 'text-red-500';
  } else if (differenceAmount < 0) {
    textToUse = decreaseText;
    colorToUse = 'text-green-500';
  }

  return (
    <div>
      <span className={`${colorToUse} font-semibold`}>{differenceAmount}</span>
      <div className={`${colorToUse} font-semibold`}>{textToUse}</div>
    </div>
  );
};
