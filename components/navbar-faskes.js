import Link from 'next/link';

export default function NavbarFaskes() {
  return (
    <nav className="static top-5 w-screen h-16 px-8 flex flex-row gap-4 justify-center">
      <Link href="/fasilitas-kesehatan/puskesmas" passHref>
        <div className="flex flex-col flex-grow items-center justify-center p-2 pb-1 active:bg-gray-200 hover:bg-gray-100">
          <p>Puskesmas</p>
        </div>
      </Link>
      <Link href="/fasilitas-kesehatan/apotek" passHref>
        <div className="flex flex-col flex-grow items-center justify-center p-2 pb-1 active:bg-gray-200 hover:bg-gray-100">
          <p>Apotek</p>
        </div>
      </Link>
      <Link href="/fasilitas-kesehatan/oksigen" passHref>
        <div className="flex flex-col flex-grow items-center justify-center p-2 pb-1 active:bg-gray-200 hover:bg-gray-100">
          <p>Oksigen</p>
        </div>
      </Link>
    </nav>
  );
}