import Link from "next/link";

export default function Header () {
  return (
    <header className = "flex fixed top-0 w-full items-center p-4 bg-gray-800 text-white z-50">
      <h1 className = "text-xl font-bold flex-1">TorasTech</h1>
      <nav className = "space-x-4">
        <Link href = "/" className = "hover:underline">
          ホーム
        </Link>
        <Link href = "/blog" className = "hover:underline">
          ブログ一覧
        </Link>
      </nav>
    </header>
  );
}