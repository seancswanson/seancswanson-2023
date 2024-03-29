import Image from "next/image";
import Link from "next/link";
import Resume from "../../data/cv.json";
import Layout from "../../components/layout";
import download from "../../assets/icons/download.png";
import { saveAs } from "file-saver";
import { toKebabCase } from "../../lib/util";

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
            className="flex flex-col items-center rounded-lg bg-gray-100 p-4"
          >
            <p className="mb-2 text-center font-bold">{subCategory}</p>
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
      <div className="breadcrumbs mb-4 text-xs font-bold uppercase text-blue-500 opacity-50 transition-opacity duration-75 hover:opacity-100">
        /{" "}
        <Link
          href="/cv"
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
          className=" m-auto flex w-1/2 items-center justify-center gap-2 self-end rounded border border-black bg-white p-2 text-sm opacity-75 transition-opacity duration-75 hocus:opacity-100 md:m-0 md:w-auto md:py-2"
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
        <p className="mb-3 font-bold italic">Professional Experience</p>
        {professionalExperience.map((experience, index) => (
          <div key={index} className="mb-8">
            <h2 className="mb-2 flex items-end gap-2 font-bold">
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
                  <ul className="list-disc pl-5">
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
                <h3 className="mb-2  underline">
                  {experience.title} ({experience.startDate} -{" "}
                  {experience.endDate || "Present"})
                </h3>
                <ul className="list-disc pl-5">
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
        <p className="font-bold italic">Education</p>
        {education.map((edu, index) => (
          <div key={index}>
            <h2 className="mb-2 flex items-end gap-2 font-bold">
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
        <p className="font-bold italic">Certifications</p>
        <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <li
              key={index}
              className="rounded-md border bg-white p-2 shadow-sm"
            >
              {cert}
            </li>
          ))}
        </ul>
      </div>

      {/* Software and Tools */}
      <div className="mt-4 flex flex-col gap-2 rounded-lg border border-slate-200 bg-[rgba(255,255,255,0.8)] p-6 shadow">
        <p className="font-bold italic">Software & Tools</p>
        <ul>
          <SoftwareList software={additionalInformation.software} />
        </ul>
      </div>
    </Layout>
  );
};

export default CV;
