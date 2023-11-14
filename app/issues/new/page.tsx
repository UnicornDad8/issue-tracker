"use client";

import React from "react";
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

  return (
    <form
      className="max-w-xl space-y-3"
      onSubmit={handleSubmit(async (data) => {
        try {
          await axios.post("/issues/new", data, {
            headers: {
              "Content-Type": "application/json",
            },
          });
          router.push("/issues");
        } catch (error) {
          console.log(error);
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
  );
};

export default NewIssuePage;
