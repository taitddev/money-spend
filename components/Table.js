import React from "react";
import { convertDate, numberWithCommas } from "../common/util";

const Table = ({ props }) => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden sm:rounded-lg shadow-md">
            <table className="min-w-full">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th
                    scope="col"
                    className="text-xs font-medium text-gray-700 px-6 py-3 text-left uppercase tracking-wider dark:text-gray-400"
                  >
                    Mã đơn hàng
                  </th>
                  <th
                    scope="col"
                    className="text-xs font-medium text-gray-700 px-6 py-3 text-left uppercase tracking-wider dark:text-gray-400"
                  >
                    Ngày mua
                  </th>
                  <th
                    scope="col"
                    className="text-xs font-medium text-gray-700 px-6 py-3 text-left uppercase tracking-wider dark:text-gray-400"
                  >
                    Sản phẩm
                  </th>
                  <th
                    scope="col"
                    className="text-xs font-medium text-gray-700 px-6 py-3 text-left uppercase tracking-wider dark:text-gray-400"
                  >
                    Tổng tiền
                  </th>
                  <th
                    scope="col"
                    className="text-xs font-medium text-gray-700 px-6 py-3 text-right uppercase tracking-wider dark:text-gray-400"
                  >
                    Trạng thái đơn hàng
                  </th>
                </tr>
              </thead>

              <tbody>
                {props.map((item) => (
                  // eslint-disable-next-line react/jsx-key
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      <a
                        href={`https://tiki.vn/sales/order/view/${item.id}`}
                        className="text-blue-600 hover:text-blue-900 dark:text-blue-500 dark:hover:underline"
                      >
                        {item.id}
                      </a>
                    </td>
                    <td className="text-sm text-gray-500 px-6 py-4 whitespace-nowrap dark:text-gray-400">
                      {convertDate(item.created_at)}
                    </td>
                    <td className="text-sm text-gray-500 px-6 py-4 dark:text-gray-400">
                      {item.description}
                    </td>
                    <td className="text-sm text-gray-500 px-6 text-right py-4 whitespace-nowrap dark:text-gray-400">
                      {`${numberWithCommas(item.grand_total)} đ`}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium dark:text-gray-400">
                      {item.status_text}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
