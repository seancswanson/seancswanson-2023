import { GetStaticProps } from "next";
import Resume from "../../data/cv.json";
import { Fragment, useEffect, useState } from "react";
import { ProjectTile } from "../../components/ProjectTile";
import Layout from "../../components/layout";
import Link from "next/link";
import { saveAs } from "file-saver";
const CV = () => {
  const {
    name,
    title,
    professionalExperience,
    education,
    additionalInformation,
  } = Resume;

  const downloadCV = async () => {
    try {
      const response = await fetch(
        "/Sean_Swanson_Resume_(Plain_Text)_-_August_2023.txt"
      );
      const txtBlob = await response.blob();
      saveAs(txtBlob, "Sean_Swanson_Resume_(Plain_Text)_-_August_2023.txt");
    } catch (error) {
      console.error("Error fetching and saving the file:", error);
    }
  };

  return (
    <Layout>
      <div className="breadcrumbs mb-4 text-xs font-bold uppercase text-blue-500 opacity-50 transition-opacity duration-75 hover:opacity-100">
        /{" "}
        <Link
          href="/CV"
          className="border-b-2 border-transparent transition-all hover:border-blue-500"
        >
          CV
        </Link>
      </div>

      <h1 className="relative mb-4 flex flex-col items-center gap-1 rounded-sm text-2xl md:flex-row md:gap-8">
        <div className="black-block h-[2px] w-full grow bg-black md:w-[initial]"></div>
        <span className="block font-bold">
          {name} - {title}
        </span>
        <div className="black-block h-[2px] w-full grow bg-black md:w-[initial]"></div>
      </h1>
      <div>
        <button
          className="self-end border border-black px-2 text-sm opacity-50 transition-opacity duration-75 hocus:opacity-100"
          onClick={downloadCV}
        >
          Download to .txt
        </button>
      </div>

      {/* Professional Experience */}
      <div className="mt-4 flex flex-col gap-4 rounded-lg border border-slate-200 bg-gray-50 p-6 shadow transition-colors duration-200 hover:bg-white">
        <p className="mb-3 text-lg font-bold italic">Professional Experience</p>
        {professionalExperience.map((experience, index) => (
          <div key={index} className="mb-4">
            <h2 className="mb-2 text-xl font-bold">
              {experience.company}, {experience.location}
            </h2>

            {experience.positions && experience.positions.length > 1 ? (
              experience.positions.map((position, posIndex) => (
                <div key={posIndex} className="mb-3">
                  <h3 className="mb-1 text-lg underline">
                    {position.title} ({position.startDate} -{" "}
                    {position.endDate || "Present"})
                  </h3>
                  <ul className="list-disc pl-5">
                    {position.responsibilities.map(
                      (responsibility, respIndex) => (
                        <li
                          key={respIndex}
                          className="mb-1 transition-colors duration-150 hover:text-blue-500"
                        >
                          {responsibility}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              ))
            ) : (
              <>
                <h3 className="mb-1 text-lg underline">
                  {experience.title} ({experience.startDate} -{" "}
                  {experience.endDate || "Present"})
                </h3>
                <ul className="list-disc pl-5">
                  {experience.responsibilities!.map(
                    (responsibility, respIndex) => (
                      <li
                        key={respIndex}
                        className="mb-1 transition-colors duration-150 hover:text-blue-500"
                      >
                        {responsibility}
                      </li>
                    )
                  )}
                </ul>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Education */}
      <div className="mt-4 flex flex-col gap-2 rounded-lg border border-slate-200 p-6 shadow">
        <p className="font-bold italic">Education</p>
        {education.map((edu, index) => (
          <div key={index}>
            <h2>
              {edu.institution}, {edu.location}
            </h2>
            <p>
              {edu.degree} ({edu.startDate} - {edu.endDate})
            </p>
          </div>
        ))}
      </div>

      {/* Additional Information */}
      <div className="mt-4 flex flex-col gap-2 rounded-lg border border-slate-200 p-6 shadow">
        <p className="font-bold italic">Software & Tools</p>
        <ul>
          {additionalInformation.software.map((tool, index) => (
            <li key={index}>{tool}</li>
          ))}
        </ul>
        <p className="mt-4 font-bold italic">Certifications</p>
        <ul>
          {additionalInformation.certifications.map((cert, index) => (
            <li key={index}>{cert}</li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default CV;
