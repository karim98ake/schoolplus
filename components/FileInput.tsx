import React from "react";
interface FileInputProps {
  formdata: FormData;
  setFormdata: React.Dispatch<React.SetStateAction<FormData>>;
}
const FileInput: React.FC<FileInputProps> = ({ formdata, setFormdata }) => {
  const handelchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target);
  };
  return (
    <div className="w-full my-6">
      <label className="flex flex-col justify-center items-center w-full  bg-white rounded-lg border-2 border-gray-300 border-dashed cursor-pointer ">
        <div className="flex flex-col justify-center items-center pt-5 pb-6">
          <svg
            aria-hidden="true"
            className="mb-3 w-10 h-10 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            ></path>
          </svg>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">اضغط لتحميل الملف</span>
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            SVG, PNG, JPG , pdf (MAX. 800x400px)
          </p>
        </div>
        <input
          id="dropzone-file"
          type="file"
          className="hidden"
          name="file"
          onChange={(e) => handelchange(e)}
        />
      </label>
    </div>
  );
};

export default FileInput;