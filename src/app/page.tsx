import Link from 'next/link';

export default function Home() {
  return (
    <>
      <header className='flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-slate-800 bg-gradient-to-b from-purple-700/[.25] via-transparent text-sm py-3 sm:py-0 dark:bg-blue-950 dark:border-bg-dark-600'>
        <nav
          className='relative max-w-7x1 w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8'
          aria-label='Global'>
          <div className='flex items-center justify-between'>
            <a href='#' className='flex-none text-x1 text-lime-50 font-bold dark:text-lime-50 py-8' aria-label='Brand'>
              Resume Builder
            </a>
          </div>
        </nav>
      </header>
      {/*<!-- Hero --> */}
      <div className='bg-slate-800 h-screen'>
        <div className='bg-gradient-to-b from-sky-900/[.25] via-transparent'>
          <div className='max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8'>
            {/* <!-- Title --> */}
            <div className='max-w-3xl text-center mx-auto pt-10'>
              <h1 className='block font-medium text-lime-50 text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>
                Craft A Compelling Resume With AI Resume Builder
              </h1>
            </div>
            {/* <!-- End Title --> */}

            <div className='max-w-3xl text-center mx-auto'>
              <p className='text-lg text-lime-50'>
                Resume Builder helps you create a resume that effectively highlights your skills and experience.
              </p>
            </div>
            {/* <!-- Buttons --> */}
            <div className='text-center'>
              <Link
                className='inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800'
                href='/resumeandcoverletter'>
                Get started
                <svg
                  className='flex-shrink-0 w-4 h-4'
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'>
                  <path d='m9 18 6-6-6-6' />
                </svg>
              </Link>
            </div>
            {/* <!-- End Buttons --> */}
          </div>
        </div>
      </div>
      {/* <!-- End Hero --> */}
    </>
  );
}
