"use client";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StoreIcon, CheckMark, School } from "@/dist/imports";
import Image from "next/image";
import axios from "axios";

// Validation Schema
const validationSchema = Yup.object({
  name: Yup.string().required("الاسم الكامل مطلوب"),
  phone: Yup.string().required("رقم الهاتف مطلوب"),
  adresse: Yup.string().required("العنوان مطلوب"),
  file: Yup.mixed()
    .required("الملف مطلوب")
    .test(
      "fileFormat",
      "نوع الملف غير مدعوم. الرجاء تحميل صورة أو ملف PDF",
      (value) => {
        if (!value) return false;
        const supportedFormats = [
          "image/jpg",
          "image/jpeg",
          "image/png",
          "application/pdf",
        ];
        return supportedFormats.includes(value.type);
      }
    ),
});

const Form: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      adresse: "",
      file: null as File | null,
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsSubmitting(true);

      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("phone", values.phone);
      formData.append("adresse", values.adresse);
      if (values.file) {
        formData.append("file", values.file);
      }

      try {
        const response = await axios.post(
          "https://schoolplusapi.onrender.com/api/contact",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (response.status === 200) {
          toast.success("تم إرسال طلبك بنجاح");
        } else {
          toast.error("حدث خطأ ما، يرجى المحاولة مرة أخرى");
        }
      } catch (error) {
        console.error("Error submitting the form:", error);
        toast.error("حدث خطأ ما، يرجى المحاولة مرة أخرى");
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  return (
    <div className="min-h-screen bg-primary flex items-center px-[7%] max-sm:flex-col max-sm:py-14">
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className="left flex flex-col flex-1 justify-center items-center max-sm:order-2">
        <img src={School.src} alt="" />
        <div className="flex items-center flex-col gap-y-4">
          <div className="flex items-center gap-10">
            <article className="flex items-center gap-2 justify-end text-white text-20">
              توصيل سريع
              <img src={CheckMark.src} alt="" />
            </article>
            <article className="flex items-center gap-2 justify-end text-white text-20">
              أفضل جودة <img src={CheckMark.src} alt="" />
            </article>
          </div>
          <div className="flex items-center gap-10">
            <article className="flex items-center gap-2 justify-end text-white text-20">
              خدمة ممتازة <img src={CheckMark.src} alt="" />
            </article>
            <article className="flex items-center gap-2 justify-end text-white text-20">
              أفضل الأسعار <img src={CheckMark.src} alt="" />
            </article>
          </div>
        </div>
      </div>
      <div className="right flex-1 flex flex-col items-end max-sm:mb-10 max-sm:order-1">
        <h2 className="text-white text-40 max-sm:text-2xl max-sm:text-end">
          هل لديك قائمة بالأدوات التي تحتاجها؟
        </h2>
        <p className="text-end text-20 text-[#E5E8FF] mt-4">
          املأ النموذج أدناه وسنقوم بتحضير طلبك في أسرع وقت ممكن أو اتصل بنا على
          الواتساب
          <a href="#" className="underline font-extrabold mx-4">
            +212612345678
          </a>
        </p>
        <form onSubmit={formik.handleSubmit} className="mt-6 w-full">
          <div className="flex items-center w-full gap-6 max-sm:flex-col">
            <div className="flex flex-col items-end gap-2 flex-1 max-sm:w-full">
              <input
                type="text"
                name="phone"
                placeholder="رقم الهاتف"
                className="p-4 bg-white text-end w-full"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
              />
              {formik.touched.phone && formik.errors.phone ? (
                <div className="text-red-500 font-semibold">
                  {formik.errors.phone} *
                </div>
              ) : null}
            </div>
            <div className="flex flex-col items-end gap-2 flex-1 max-sm:w-full">
              <input
                type="text"
                name="name"
                placeholder="الاسم الكامل"
                className="p-4 bg-white text-end w-full"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-red-500 font-bold">
                  {formik.errors.name}
                </div>
              ) : null}
            </div>
          </div>
          <div className="flex items-center w-full gap-6 mt-6 max-sm:flex-col">
            <div className="flex flex-col items-end gap-3 flex-1 max-sm:w-full">
              <input
                type="text"
                name="adresse"
                placeholder="العنوان"
                className="p-4 bg-white text-end w-full"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.adresse}
              />
              {formik.touched.adresse && formik.errors.adresse ? (
                <div className="text-red-500 font-bold">
                  {formik.errors.adresse}
                </div>
              ) : null}
            </div>
          </div>
          <div className="w-full my-6">
            <label className="flex flex-col justify-center items-center w-full bg-white rounded-lg border-2 border-gray-300 border-dashed cursor-pointer">
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
                onChange={(event) => {
                  const file = event.currentTarget.files?.[0];
                  if (file) {
                    formik.setFieldValue("file", file);
                  }
                }}
              />
            </label>
            {formik.touched.file && formik.errors.file ? (
              <div className="text-red-500 font-bold text-end">
                {formik.errors.file}
              </div>
            ) : null}
          </div>
          <button
            style={{ borderRadius: `calc(var(--unit) * 10)` }}
            type="submit"
            className="btn rounded-lg mt-4 bg-white text-black gap-3 w-full flex justify-center items-center"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>loading...</>
            ) : (
              <>
                <Image
                  src={StoreIcon}
                  width={24}
                  height={25}
                  alt="cart-icon"
                  className="icon"
                />
                اطلب أدواتك المدرسية الآن
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
