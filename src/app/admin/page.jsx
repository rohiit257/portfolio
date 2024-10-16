'use client';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { NavbarDemo } from '../components/Navbar';
import Auth from '../components/Auth';

const Page = () => {
  const [messages, setMessages] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Handles successful authentication
  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
  };

  // Function to fetch messages from the API
  const fetchMessages = async () => {
    try {
      const response = await axios.get('/api/get_message'); // Correct endpoint for fetching messages
      setMessages(response.data); // Set the messages state with the fetched data
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  // Function to delete a message
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/delete_message/${id}`); // Call API to delete the message
      fetchMessages(); // Refetch messages after deletion
    } catch (error) {
      console.error('Error deleting message:', error);
    }
  };

  // useEffect to run fetchMessages when the page loads and when the user is authenticated
  useEffect(() => {
    if (isAuthenticated) {
      fetchMessages(); // Fetch messages if the user is authenticated
    }
  }, [isAuthenticated]); // Runs when authentication status changes

  return (
    <>
      {!isAuthenticated ? (
        <Auth onSuccess={handleAuthSuccess} /> // Show authentication component if not authenticated
      ) : (
        <>
          <NavbarDemo />
          <section className="mx-auto w-full max-w-7xl px-4 py-4 mt-20">
            <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
              <div>
                <h2 className="text-lg font-semibold">Messages</h2>
                <p className="mt-1 text-sm text-gray-700">
                  This is a list of all messages. You can view and manage messages here.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-col">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div className="overflow-hidden md:rounded-lg">
                    <table className="min-w-full divide-y divide-zinc-800">
                      <thead className="bg-transparent">
                        <tr>
                          <th
                            scope="col"
                            className="px-4 py-3.5 text-left text-sm font-normal text-slate-300"
                          >
                            <span>Id</span>
                          </th>
                          <th
                            scope="col"
                            className="px-12 py-3.5 text-left text-sm font-normal text-slate-300"
                          >
                            Message
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-3.5 text-left text-sm font-normal text-slate-300"
                          >
                            Date
                          </th>
                          <th
                            scope="col"
                            className="relative px-4 py-3.5"
                          >
                            <span className="sr-only">Delete</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-zinc-800 bg-transparent">
                        {messages.map((message) => (
                          <tr key={message._id}>
                            <td className="whitespace-nowrap px-4 py-4">
                              <div className="text-sm font-medium text-slate-300">
                                {message._id}
                              </div>
                            </td>
                            <td className="whitespace-nowrap px-12 py-4">
                              <div className="text-sm text-slate-300">
                                {message.message}
                              </div>
                            </td>
                            <td className="whitespace-nowrap px-4 py-4">
                              <div className="text-sm text-slate-300">
                                {new Date(message.createdAt).toLocaleDateString()}
                              </div>
                            </td>
                            <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                              <button
                                onClick={() => handleDelete(message._id)}
                                className="text-red-500 hover:text-red-700"
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Page;
