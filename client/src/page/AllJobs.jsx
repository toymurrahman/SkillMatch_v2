
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import JobCard from "../component/JobCard";
import Spinner from "../component/Spinner";

const AllJobs = () => {
  const axiosSecure = useAxiosSecure();
  const [itemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");

  // Query for jobs
  const { data: jobs = [], isLoading } = useQuery({
    queryKey: ["jobs", currentPage, itemsPerPage, filter, sort, search],
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `/alljobs?page=${currentPage}&size=${itemsPerPage}&filter=${filter}&sort=${sort}&search=${search}`
      );
      return data;
    },
  });

  // Query for job count
  const { data: countData = {} } = useQuery({
    queryKey: ["jobCount", filter, search],
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `/jobscount?filter=${filter}&search=${search}`
      );
      return data;
    },
  });

  const numberOfPages = Math.ceil((countData.count || 0) / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()].map((num) => num + 1);

  const handlePaginationButton = (value) => {
    setCurrentPage(value);
  };

  const handleReset = () => {
    setFilter("");
    setSort("");
    setSearch("");
    setSearchText("");
    setCurrentPage(1);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(searchText);
    setCurrentPage(1);
  };

  if (isLoading) return <Spinner />;

  return (
    <div className="container px-6 py-10 mx-auto min-h-[calc(100vh-306px)] flex flex-col justify-between">
      {/* Filters */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-5">
        <select
          onChange={(e) => {
            setFilter(e.target.value);
            setCurrentPage(1);
          }}
          value={filter}
          className="border p-4 rounded-lg"
        >
          <option value="">Filter By Category</option>
          <option value="Web Development">Web Development</option>
          <option value="Graphics Design">Graphics Design</option>
          <option value="Digital Marketing">Digital Marketing</option>
        </select>

        <form onSubmit={handleSearch}>
          <div className="flex border p-1 rounded-lg">
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="px-6 py-2 outline-none"
              placeholder="Enter Job Title"
            />
            <button className="bg-gray-700 text-white px-4 py-2 rounded-md">
              Search
            </button>
          </div>
        </form>

        <select
          onChange={(e) => {
            setSort(e.target.value);
            setCurrentPage(1);
          }}
          value={sort}
          className="border p-4 rounded-md"
        >
          <option value="">Sort By Deadline</option>
          <option value="asc">Ascending Order</option>
          <option value="dsc">Descending Order</option>
        </select>

        <button onClick={handleReset} className="btn px-8 py-4 rounded-md hover:bg-slate-700 hover:text-white">Reset</button>
      </div>

      {/* Jobs Grid */}
      <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {jobs.map((job) => (
          <JobCard key={job._id} jobs={job} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-12">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePaginationButton(currentPage - 1)}
          className="px-4 py-2 mx-1 bg-gray-200 rounded-md disabled:opacity-50 hover:bg-slate-700 hover:text-white"
        >
          Previous
        </button>

        {pages.map((num) => (
          <button
            key={num}
            onClick={() => handlePaginationButton(num)}
            className={`px-4 py-2 mx-1 rounded-md transition-colors ${
              currentPage === num
                ? "bg-slate-700 text-white"
                : "bg-gray-200 hover:bg-slate-700 hover:text-white"
            }`}
          >
            {num}
          </button>
        ))}

        <button
          disabled={currentPage === numberOfPages}
          onClick={() => handlePaginationButton(currentPage + 1)}
          className="px-4 py-2 mx-1 bg-gray-200 rounded-md disabled:opacity-50 hover:bg-slate-700 hover:text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllJobs;
