//@ts-check
import { Select, Skeleton } from 'antd';
import useSWR from 'swr';
import { baseUrl } from '../../config.js';
import { fetcher } from '../utils/fetcher.js';

/**
 * @typedef {{
 *  onChoose: (entry: string) => void
 * }} DroplistProps
 */

/**
 * @typedef {{
 *   _id: string,
 *   name: string,
 *   enable: boolean
 * }} ListEntry
 */

/**
 * 顯示所有 droplist
 *
 * @param {DroplistProps} arg0
 */
export default function DroplistSelect({ onChoose }) {
  const {
    data: room_list,
    error: room_error,
    isLoading: room_isLoading,
  } = useSWR(baseUrl + '/room', fetcher);

  const room_list_cast = /** @type {ListEntry[] | null} */ (room_list);

  const droplist = room_list_cast
    ? room_list_cast.map((room) => {
        return {
          value: room._id,
          label: room.name,
          disabled: !room.enable,
        };
      })
    : [];

  if (room_isLoading) return <Skeleton active />;

  return (
    <Select
      placeholder="請選擇"
      onChange={(value) => onChoose(value)}
      options={droplist}
    />
  );
}
