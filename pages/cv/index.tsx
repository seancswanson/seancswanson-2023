import Image from "next/image";
import Link from "next/link";
import Resume from "../../data/cv.json";
import Layout from "../../components/layout";
import download from "../../assets/icons/download.png";
import { saveAs } from "file-saver";
import { toKebabCase } from "../../lib/util";
import Breadcrumbs from "../../components/Breadcrumbs";

const CV = () => {
  const {
    name,
    title,
    professionalExperience,
    education,
    certifications,
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
  const SoftwareList = ({
    software,
  }: {
    software: { [key: string]: string[] };
  }) => {
    return (
      <div className="grid grid-cols-3 gap-y-6 gap-x-2">
        {Object.keys(software).map((subCategory) => (
          <div
            key={subCategory}
            className="flex flex-col items-center p-4 bg-gray-100 rounded-lg"
          >
            <p className="mb-2 font-bold text-center">{subCategory}</p>
            <ul className="flex flex-wrap justify-center gap-2 text-center">
              {software[subCategory].map((tool, index) => (
                <li
                  key={index}
                  className="rounded border bg-[rgba(255,255,255,0.8)] px-2 py-1 text-sm"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };

  return (
    <Layout>
      <Breadcrumbs
        items={[
          { title: "Home", href: "/" },
          { title: "CV", href: "/cv" },
        ]}
      />
      <h1 className="relative flex flex-col items-center gap-1 mb-4 text-2xl rounded-sm md:flex-row md:gap-8">
        <div className="black-block h-[2px] w-full grow bg-black md:w-[initial]"></div>
        <span className="block font-bold">
          {name} - {title}
        </span>
        <div className="black-block h-[2px] w-full grow bg-black md:w-[initial]"></div>
      </h1>
      <div>
        <button
          className="flex items-center self-end justify-center w-1/2 gap-2 p-2 m-auto text-sm transition-opacity duration-75 bg-white border border-black rounded opacity-75 hocus:opacity-100 md:m-0 md:w-auto md:py-2"
          onClick={downloadCV}
        >
          Download to .txt{" "}
          <Image
            src={download}
            width="15"
            height="15"
            alt="Arrow pointing up and to the right"
          />
        </button>
      </div>

      {/* Professional Experience */}
      <div className="mt-4 flex flex-col gap-4 rounded-lg border border-slate-200 bg-[rgba(255,255,255,0.8)] p-6 shadow transition-colors duration-200">
        <p className="mb-3 italic font-bold">Professional Experience</p>
        {professionalExperience.map((experience, index) => (
          <div key={index} className="mb-8">
            <h2 className="flex items-end gap-2 mb-2 font-bold">
              <Image
                src={`/cv-images/${toKebabCase(experience.company)}.png`}
                alt={`Logo for ${experience.company}`}
                width={40}
                height={40}
                className={`${
                  experience.showLogo ? "block" : "hidden"
                } rounded-full shadow-md`}
              />
              {experience.company}, {experience.location}
            </h2>

            {experience.positions && experience.positions.length > 1 ? (
              experience.positions.map((position, posIndex) => (
                <div key={posIndex} className="mb-8 last:mb-0">
                  <h3 className="mb-2 font-semibold">
                    {position.title} ({position.startDate} -{" "}
                    {position.endDate || "Present"})
                  </h3>
                  <ul className="pl-5 list-disc">
                    {position.responsibilities.map(
                      (responsibility, respIndex) => (
                        <li
                          key={respIndex}
                          className="mb-1 text-sm transition-colors duration-150 hover:text-blue-500"
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
                <h3 className="mb-2 underline">
                  {experience.title} ({experience.startDate} -{" "}
                  {experience.endDate || "Present"})
                </h3>
                <ul className="pl-5 list-disc">
                  {experience.responsibilities!.map(
                    (responsibility, respIndex) => (
                      <li
                        key={respIndex}
                        className="mb-1 text-sm transition-colors duration-150 hover:text-blue-500"
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
      <div className="mt-4 flex flex-col gap-2 rounded-lg border border-slate-200 bg-[rgba(255,255,255,0.8)] p-6 shadow">
        <p className="italic font-bold">Education</p>
        {education.map((edu, index) => (
          <div key={index}>
            <h2 className="flex items-end gap-2 mb-2 font-bold">
              <Image
                src={`/cv-images/${toKebabCase(edu.institution)}.png`}
                alt={`Logo for ${edu.institution}`}
                width={40}
                height={40}
                className="rounded-full shadow-md"
              />
              {edu.institution}, {edu.location}
            </h2>
            <p>
              {edu.degree} ({edu.startDate} - {edu.endDate})
            </p>
          </div>
        ))}
      </div>

      {/* Certificatons */}
      <div className="mt-4 flex flex-col gap-2 rounded-lg border border-slate-200 bg-[rgba(255,255,255,0.8)] p-6 shadow">
        <p className="italic font-bold">Certifications</p>
        <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <li
              key={index}
              className="p-2 bg-white border rounded-md shadow-sm"
            >
              {cert}
            </li>
          ))}
        </ul>
      </div>

      {/* Software and Tools */}
      <div className="mt-4 flex flex-col gap-2 rounded-lg border border-slate-200 bg-[rgba(255,255,255,0.8)] p-6 shadow">
        <p className="italic font-bold">Software & Tools</p>
        <ul>
          <SoftwareList software={additionalInformation.software} />
        </ul>
      </div>
    </Layout>
  );
};

export default CV;
