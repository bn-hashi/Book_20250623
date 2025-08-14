// src/app/blog/page/[p]/page.tsx  （2ページ目以降）
import { getList } from "@/libs/microcmsApi";
import { INITIAL_PER_PAGE } from "@/constants";
import Pagination from "@/components/Pagination";
import Link from "next/link";
import Image from "next/image";
import { DateChange } from "@/utils/DateChange";

type Props = { params: { p: string } };

export default async function BlogPaged({ params }: Props) {
  const page = Math.max(1, parseInt(params.p, 10) || 1);
  const data = await getList({
    limit: INITIAL_PER_PAGE,
    offset: (page - 1) * INITIAL_PER_PAGE,
  });

  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-center pt-40">
      <p className="text-3xl font-bold">ブログ一覧（{page}ページ目）</p>
      <ul className="grid grid-cols-2 gap-8 w-11/12 max-w-[600px] mx-auto mt-10">
        {data.contents.map((detail) => (
          <li key={detail.id}>
            <Link href={`/blog/detail/${detail.id}`}
            className="flex flex-col h-80 bg-gray-100 shadow-lg rounded-2xl"
            >
            {/* 画像部分 */}
            <div className="relative w-full h-40">
              <Image
                src={detail.thumbnail?.url}
                alt="thumbnail"
                fill
                className="object-cover rounded-t-2xl"
              />
            </div>
            {/* 記事情報部分 */}
            <dl className="flex flex-col w-full px-3 mt-6">
              <dt className="text-xl font-bold line-clamp-3">
                {detail.title}
              </dt>
              <dd className="text-gray-600 text-sm flex w-full justify-end">
                <DateChange date={detail.publishedAt || detail.createdAt} />
              </dd>
            </dl>
            </Link>
          </li>
        ))}
      </ul>
      <Pagination totalCount={data.totalCount} p={page} />
    </div>
  );
}
