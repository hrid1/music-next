import Link from "next/link";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import courseData from "@/data/music_courses.json";

interface Courses {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}
const FeatureCourses = () => {
  const featureCourses = courseData.courses.filter(
    (course: Courses) => course.isFeatured
  );

  return (
    <section className="py-12 bg-gray-950">
      <div>
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-3xl font-semibold mb-2">
            Feature Courses
          </h2>
          <p className="mb-6 text-xl">Learn with the Best</p>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center mx-4">
          {featureCourses.map((course) => (
            <BackgroundGradient
              key={course.id}
              className="rounded-[22px] max-w-full  bg-white dark:bg-zinc-900"
            >
              <div className="text-center h-full p-4 sm:p-10">
                <h2 className="text-xl font-bold text-teal-500">
                  {course.title}
                </h2>

                <p className="text-gray-300  my-2">{course.description}</p>
                <p className="text-lg font-semibold mt-2 ">${course.price}</p>
                <Link className="mt-4" href={course.slug}>
                  Learn More
                </Link>
              </div>
            </BackgroundGradient>
          ))}
        </div>
      </div>
      <div className="mt-16 text-center">
        <Link href={"/courses"}>
          <button className="px-3.5 py-2.5 rounded-lg font-semibold border text-gray-200 bg-black">
            Show All Courses
          </button>
        </Link>
      </div>
    </section>
  );
};

export default FeatureCourses;
