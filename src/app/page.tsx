import Image from 'next/image';

export default function Home() {
  return (
    <>
      <header className='flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-slate-800 bg-gradient-to-b from-sky-600/[.15] via-transparent text-sm py-3 sm:py-0 dark:bg-blue-950 dark:border-gray-600'>
        <nav
          className='relative max-w-7x1 w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8'
          aria-label='Global'>
          <div className='flex items-center justify-between'>
            <a
              href='#'
              className='flex-none text-x1 text-gray-200 font-semibold dark:text-white py-8'
              aria-label='Brand'>
              Resume Builder
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}
