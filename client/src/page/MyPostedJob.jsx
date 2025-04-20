
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Spinner from "../component/Spinner";

const MyPostedJob = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  // Fetch posted jobs using react-query
  const {
    data: jobs = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["myPostedJobs", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/jobs/${user?.email}`);
      return data;
    },
    enabled: !!user?.email,
  });

  // Delete job mutation
  const deleteJobMutation = useMutation({
    mutationFn: async (id) => {
      const res = await axiosSecure.delete(`/job/${id}`);
      return res.data;
    },
    onSuccess: (data, variables) => {
      if (data.deletedCount > 0) {
        toast.success("Job deleted successfully");
        queryClient.invalidateQueries(["myPostedJobs"]);
      }
    },
    onError: (error) => {
      toast.error("Error deleting job");
      console.error(error);
    },
  });

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure you want to delete this job?");
    if (confirm) {
      deleteJobMutation.mutate(id);
    }
  };

  // Loading & error states
  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return (
      <div className="text-center py-10 text-red-500">Failed to load jobs.</div>
    );
  }

  return (
    <section className="container px-4 mx-auto pt-12">
      <Toaster position="top-center" />
      <div className="flex items-center gap-x-3 mb-4">
        <h2 className="text-lg font-medium text-gray-800">My Posted Jobs</h2>
        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full">
          {jobs.length} Jobs
        </span>
      </div>

      {jobs.length === 0 ? (
        <p className="text-center py-8 text-gray-500">
          You haven’t posted any jobs yet.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                  Title
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                  Deadline
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                  Price
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                  Category
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                  Description
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {jobs.map((job) => (
                <tr key={job._id}>
                  <td className="px-4 py-4 text-sm text-gray-700">
                    {job.title}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600">
                    {job.deadline}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600">
                    ${job.min_price} - ${job.max_price}
                  </td>
                  <td className="px-4 py-4 text-sm text-blue-500">
                    {job.category}
                  </td>
                  <td
                    className="px-4 py-4 text-sm text-gray-500"
                    title={job.description}
                  >
                    {job.description.length > 35
                      ? job.description.slice(0, 35) + "..."
                      : job.description}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600">
                    <div className="flex gap-4">
                      <button
                        onClick={() => handleDelete(job._id)}
                        className="text-gray-500 transition-colors duration-200   hover:text-red-500 focus:outline-none"
                        title="Delete"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </button>
                      <Link
                        to={`/update/${job._id}`}
                        className="text-gray-500 transition-colors duration-200   hover:text-yellow-500 focus:outline-none"
                        title="Edit"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                          />
                        </svg>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default MyPostedJob;
