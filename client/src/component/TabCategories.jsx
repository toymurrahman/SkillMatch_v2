import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCard from "./JobCard";
import axios from "axios";
import Spinner from "./Spinner";

const TabCategories = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/jobs`
        );
        setJobs(data);
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  const categories = [
    "Web Development",
    "Graphics Design",
    "Digital Marketing",
  ];

  if (loading) return <Spinner />;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
          Browse Jobs by Categories
        </h1>
        <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
          Explore categories like Web Development, Graphics Design, and Digital
          Marketing.
        </p>
      </div>
      <Tabs>
        <div className="flex justify-center overflow-x-auto">
          <TabList className="flex gap-2 sm:gap-4 bg-gray-100 p-2 rounded-full shadow-inner min-w-fit sm:min-w-0">
            {categories.map((category, idx) => (
              <Tab
                key={idx}
                className="px-4 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-gray-700 rounded-full cursor-pointer transition-all duration-200 focus:outline-none"
                selectedClassName="bg-white shadow text-blue-600"
              >
                {category}
              </Tab>
            ))}
          </TabList>
        </div>
        {categories.map((category, idx) => (
          <TabPanel key={idx}>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {jobs.filter((j) => j.category === category).length > 0 ? (
                jobs
                  .filter((j) => j.category === category)
                  .map((job) => <JobCard key={job._id} jobs={job} />)
              ) : (
                <p className="col-span-full text-center text-gray-500 text-sm sm:text-base">
                  No jobs available in{" "}
                  <span className="font-medium">{category}</span> yet.
                </p>
              )}
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default TabCategories;
