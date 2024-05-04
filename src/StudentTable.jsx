import man from "./assets/assets/avatar.png";

export default function StudentTable() {
  return (
    <div>
      <section className="py-24 lg:pt-[120px] lg:pb-28">
        <div className="container">
          <div className="mb-16 flex flex-col items-center">
            <h2 className="text-3xl lg:text-[40px] mb-9 font-bold">
              <span className="text-[#00CC8C]">Students</span> of the Year
            </h2>

            <form>
              <div className="flex">
                <div className="relative overflow-hidden text-gray-50 md:min-w-[380px] lg:min-w-[440px] rounded-[63px]">
                  <input
                    type="search"
                    id="search-dropdown"
                    className="z-20 block w-full bg-white px-4 py-2.5 pr-10 focus:outline-none rounded-[63px] placeholder:text-neutral-400 text-neutral-800"
                    placeholder="Search by Student "
                    required
                  />
                  <button
                    type="submit"
                    className="absolute right-0 inline-flex items-center justify-center w-10 top-0 h-full rounded-e-lg text-neutral-800"
                  >
                    <svg
                      className="h-4 w-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                    <span className="sr-only">Search</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="max-w-[848px] mx-auto overflow-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#FFFFFF0D]">
                  <th className="uppercase p-5 text-sm md:text-xl font-semibold md:min-w-[110px] text-left">
                    ID
                  </th>
                  <th className="p-5 text-sm md:text-xl font-semibold text-left">
                    Name
                  </th>
                  <th className="p-5 text-sm md:text-xl font-semibold">
                    Scores
                  </th>
                  <th className="p-5 text-sm md:text-xl font-semibold">
                    Percentage
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white/5">
                  <td className="p-5 text-sm md:text-xl" colSpan="4">
                    Class One
                  </td>
                </tr>
                <tr className="border-b border-[#7ECEB529]">
                  <td className="p-5 text-sm md:text-xl">1</td>
                  <td className="p-5 text-sm md:text-xl">
                    <div className="flex space-x-3 items-center">
                      <img
                        className="w-8 h-8"
                        src={man}
                        width="32"
                        height="32"
                        alt="John Smith"
                      />
                      <span className="whitespace-nowrap">John Smith</span>
                    </div>
                  </td>
                  <td className="p-5 text-sm md:text-xl text-center">A+</td>
                  <td className="p-5 text-sm md:text-xl text-center">98%</td>
                </tr>
                <tr className="border-b border-[#7ECEB529]">
                  <td className="p-5 text-sm md:text-xl">2</td>
                  <td className="p-5 text-sm md:text-xl">
                    <div className="flex space-x-3 items-center">
                      <img
                        className="w-8 h-8"
                        src={man}
                        width="32"
                        height="32"
                        alt="John Smith"
                      />
                      <span className="whitespace-nowrap">John Smith</span>
                    </div>
                  </td>
                  <td className="p-5 text-sm md:text-xl text-center">A+</td>
                  <td className="p-5 text-sm md:text-xl text-center">98%</td>
                </tr>
                <tr className="border-b border-[#7ECEB529]">
                  <td className="p-5 text-sm md:text-xl">3</td>
                  <td className="p-5 text-sm md:text-xl">
                    <div className="flex space-x-3 items-center">
                      <img
                        className="w-8 h-8"
                        src={man}
                        width="32"
                        height="32"
                        alt="John Smith"
                      />
                      <span className="whitespace-nowrap">John Smith</span>
                    </div>
                  </td>
                  <td className="p-5 text-sm md:text-xl text-center">A+</td>
                  <td className="p-5 text-sm md:text-xl text-center">98%</td>
                </tr>

                <tr className="bg-white/5">
                  <td className="p-5 text-sm md:text-xl" colSpan="4">
                    Class Two
                  </td>
                </tr>
                <tr className="border-b border-[#7ECEB529]">
                  <td className="p-5 text-sm md:text-xl">1</td>
                  <td className="p-5 text-sm md:text-xl">
                    <div className="flex space-x-3 items-center">
                      <img
                        className="w-8 h-8"
                        src={man}
                        width="32"
                        height="32"
                        alt="John Smith"
                      />
                      <span className="whitespace-nowrap">John Smith</span>
                    </div>
                  </td>
                  <td className="p-5 text-sm md:text-xl text-center">A+</td>
                  <td className="p-5 text-sm md:text-xl text-center">98%</td>
                </tr>
                <tr className="border-b border-[#7ECEB529]">
                  <td className="p-5 text-sm md:text-xl">2</td>
                  <td className="p-5 text-sm md:text-xl">
                    <div className="flex space-x-3 items-center">
                      <img
                        className="w-8 h-8"
                        src={man}
                        width="32"
                        height="32"
                        alt="John Smith"
                      />
                      <span className="whitespace-nowrap">John Smith</span>
                    </div>
                  </td>
                  <td className="p-5 text-sm md:text-xl text-center">A+</td>
                  <td className="p-5 text-sm md:text-xl text-center">98%</td>
                </tr>
                <tr className="border-b border-[#7ECEB529]">
                  <td className="p-5 text-sm md:text-xl">3</td>
                  <td className="p-5 text-sm md:text-xl">
                    <div className="flex space-x-3 items-center">
                      <img
                        className="w-8 h-8"
                        src={man}
                        width="32"
                        height="32"
                        alt="John Smith"
                      />
                      <span className="whitespace-nowrap">John Smith</span>
                    </div>
                  </td>
                  <td className="p-5 text-sm md:text-xl text-center">A+</td>
                  <td className="p-5 text-sm md:text-xl text-center">98%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
