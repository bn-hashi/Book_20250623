import Link from "next/link";

export default function HomePage() {
  return (
    <div className = "flex w-full min-h-screen items-center justify-center">
      <main className = "text-center max-w-xl">
        <h1 className = "text-5xl font-extrabold mb-6 drop-shadow">
          Welcome to Mysite
        </h1>
        <p className = "text-lg mb-8">
          キャッチコピー
        </p>
        <Link href = "/blog" className = "text-blue-600 font-semibold py-3 px-6 rounded-full shadow borderhover:bg-gray-100 transition-colors">
          ブログ一覧へ
        </Link>
      </main>
    </div>
  )
}