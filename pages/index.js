import useSWR from "swr";
import axios from "axios";

import Table from "../components/Table";
import { numberWithCommas } from "../common/util";

export default function Home() {
  const url = "https://tiki.vn/api/v2/me/orders?page=1&limit=9999";

  const fetcher = (url) =>
    axios
      .get(url, {
        headers: {
          "x-access-token":
            "eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI2NTQzNjkiLCJpYXQiOjE2MzkzNTkxMjQsImV4cCI6MTYzOTQ0NTUyNCwiaXNzIjoiaHR0cHM6Ly90aWtpLnZuIiwiY3VzdG9tZXJfaWQiOiI2NTQzNjkiLCJjbGllbnRfaWQiOiJ0aWtpLXNzbyIsInNjb3BlIjoic3NvIn0.fJmUrtiCEtvu1oG-Chnu9RRr3-rVSvzw1wVs7-HdorxU9Z_CvDW_hrgnv2AciL2JKu3Dd4Qn0jozIGil5hj6d69S9Lm_f-cXKUFtZ42_MeS0ZMvdV86L51Kb8ENAU5_KgCFYwcJPTsts7AaPl-noKvdw_U8af7lql6-ruiXZGTKoOACeveLj18sAL-bJUJ9GhT-9m_pPteSJht0U40WG8S3Jo0dfXtSnoPud64AhK8v287LZusAR3ZGF3niU_ANtK3s2ay-L-RQsR2qdzBY8b-i1ERMfEzjZR-tMC62vvJWykJoVKxlkLWSaE713dToPBWyjvDW0kyl8iWlxlXS3Fe9CtLsICsUum-UIN_Y5d2YprkqbQrQCW2nOzviZD3HV5tBGylxJrS97EqKTndSM7DUbugPew_GmKFlyMSI2AQq5BQPYV9v06Xg1-mu6QK6c0uEzPfwMoa6plPoApVTSaQZzixHq_EgqbyOzIY3bc4TTcR_zno_HSkSp8xt8s89rYiQbNUsaA0s_nnGRGnTHe7o8xqvSAdKjLlhLeg4RcrVle_siRwU1IUbQvMFmV4fw7FEhO6yYiZxf04viVfOI44TlZpeQfiChlo5eHw5jNrS9X7Usj7RTrSch0_s8OXxBaQYevalOjcLOP8xaunU-sQgLM1IW7oGc0cNazDhCbVk",
        },
      })
      .then((res) => res.data);

  // fetch data
  const { data, error } = useSWR(url, fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  const filteredOrder = data.data.filter((item) => item.status !== "canceled");

  const sum = filteredOrder.reduce((a, b) => a + (b["grand_total"] || 0), 0);

  // console.log(filteredOrder);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 dark:bg-gray-800">
      <h1 className="text-4xl text-gray-600 dark:text-gray-300">
        Tổng số tiền đã mua tại Tiki là: {numberWithCommas(sum)}đ
      </h1>

      <Table props={filteredOrder} />
    </div>
  );
}
