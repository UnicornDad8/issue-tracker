"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import styles from "./style.module.css";

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<IssueForm>();
  const [error, setError] = useState("");

  return (
    <div className="max-w-xl">
      {error && (
        <div
          className="bg-red-100 border-t-4 mb-5 border-red-500 rounded-b text-red-900 px-4 py-3 shadow-md"
          role="alert-danger"
        >
          <div className="flex">
            <div className="py-1">
              <svg
                className="fill-current h-6 w-6 text-red-500 mr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
              </svg>
            </div>
            <div>
              <p className="font-bold">Error:</p>
              <p className="text-sm">{error}</p>
            </div>
          </div>
        </div>
      )}
      <form
        className="space-y-3"
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post("/api/issues", data);
            router.push("/issues");
          } catch (error) {
            setError("An unexpected error occurred.");
          }
        })}
      >
        <div className="leading-normal">
          <input
            type="text"
            className="border rounded-sm w-full px-4 py-3"
            placeholder="Title"
            {...register("title")}
          />
        </div>
        <div className="leading-normal">
          <Controller
            name="Description"
            control={control}
            render={({ field }) => (
              <SimpleMDE
                className="border rounded-sm w-full px-4 py-3"
                placeholder="Description"
                {...field}
                ref={null}
              />
            )}
          />
        </div>
        <button className={`${styles["btn"]} ${styles["btnBlue"]}`}>
          Submit New Issue
        </button>
      </form>
    </div>
  );
};

export default NewIssuePage;