import { INITIAL_PER_PAGE } from   "@/constants";
import { getList } from   "@/libs/microcmsApi";

export default async function Blog() {
  const data = await getList({
    limit: INITIAL_PER_PAGE,
  });
  console.log(data);
  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-center">
      <p className="text-3xl font-bold">ブログ一覧</p>
      <p className="text-xl font-bold">{data.contents[0].title}</p>
    </div>
  );
}