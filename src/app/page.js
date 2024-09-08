import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          Practice Next App
        </h1>

        <Link href="/recipe-list">
          <a className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
            Recipe List
          </a>
        </Link>
      </div>
    </main>
  );
}
