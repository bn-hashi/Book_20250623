import Link from "next/link";

export default function Footer () {
  return (
    <footer className = "bg-gray-800 text-gray-100 teext-sm py-6 px-4">
      <div className = "max-w-screen-lg mx-auto flex flex-col sm:flex-row sm:justify-between space-y-4 sm:space-y-0">
        <div>
          <p className = "font-semibold">TorasTech 合同会社</p>
          <p> 東京都千代田区〇〇 1-2-3 </p>
          <p className = "mt-1 text-gray-400">
            (c) 2025 TorasTech.All rights reserved.
          </p>
        </div>

        <div className = "flex flex-col sm:items-end space-y-2">
          {/* 内部サイト遷移想定Linkタグ */}
          <nav className = "space-x-4">
            <Link href = "/" className = "hover:underline">
              利用規約
            </Link>
            <Link href = "/" className = "hover:underline">
              プライバシーポリシー
            </Link>
            <Link href = "/" className = "hover:underline">
              FAQ
            </Link>
          </nav>
          {/* 外部サイト遷移想定aタグ */}
          <div className = "flex space-x-4">
            <a 
              href = "#" 
              target="_blank" 
              rel = "noopener noreferrer" 
              className = "hover:underline"
            >
              Twitter
            </a>
            <a 
              href = "#" 
              target="_blank" 
              rel = "noopener noreferrer" 
              className = "hover:underline"
            >
              Facebook
            </a>
            <a 
              href = "#" 
              target="_blank" 
              rel = "noopener noreferrer" 
              className = "hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}