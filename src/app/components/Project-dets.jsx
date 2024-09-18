"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../components/ui/tracing-beam";
import { SiReact, SiNodedotjs, SiMongodb, SiExpress, SiPython, SiDjango, SiNextdotjs, SiSolidity, SiEthereum, SiTailwindcss, SiAlchemy, SiOpenzeppelin, SiIpfs, SiLangchain, SiGooglegemini, SiHuggingface, SiStreamlit, SiBootstrap, SiJavascript, SiJquery, SiPandas, SiJsonwebtokens } from "react-icons/si";

export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-12">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className="text-xl mb-6 font-semibold">{item.title}</p>

            {item.techStackIcons && (
              <div className="flex gap-4 mb-6 text-4xl">
                {item.techStackIcons.map((Icon, iconIndex) => (
                  <Icon key={iconIndex}  />
                ))}
              </div>
            )}

            <div className="text-base lg:text-lg leading-relaxed prose dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              <div className="text-slate-200">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "MetaBazaar NFT Marketplace",
    techStackIcons: [SiSolidity, SiNextdotjs, SiIpfs, SiEthereum, SiAlchemy, SiOpenzeppelin, SiMongodb, SiTailwindcss],
    description: (
      <>
        <p>
          Sit duis est minim proident non nisi velit non consectetur. Esse
          adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt
          Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat incididunt
          incididunt enim magna id est qui sunt fugiat. Laboris do duis pariatur
          fugiat Lorem aute sit ullamco. Qui deserunt non reprehenderit dolore
          nisi velit exercitation Lorem qui do enim culpa. Aliqua eiusmod in
          occaecat reprehenderit laborum nostrud fugiat voluptate do Lorem culpa
          officia sint labore. Tempor consectetur excepteur ut fugiat veniam
          commodo et labore dolore commodo pariatur.
        </p>
        <p>
          Dolor minim irure ut Lorem proident. Ipsum do pariatur est ad ad
          veniam in commodo id reprehenderit adipisicing. Proident duis
          exercitation ad quis ex cupidatat cupidatat occaecat adipisicing.
        </p>
        <p>
          Tempor quis dolor veniam quis dolor. Sit reprehenderit eiusmod
          reprehenderit deserunt amet laborum consequat adipisicing officia qui
          irure id sint adipisicing. Adipisicing fugiat aliqua nulla nostrud.
          Amet culpa officia aliquip deserunt veniam deserunt officia
          adipisicing aliquip proident officia sunt.
        </p>
      </>
    ),
    badge: "BlockChain",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy_SgCb8ZzaFXbKaXvP7LGOFAcsREqzjE4Gw&s",
  },
  {
    title: "RAG: AI-Powered CSE Subject Bot",
    techStackIcons: [SiPython, SiLangchain, SiGooglegemini, SiHuggingface, SiStreamlit],
    description: (
      <>
        <p>
          The AI-Powered CSE Subject Bot is an advanced project designed to
          provide intelligent responses to queries related to theoretical
          Computer Science subjects. The chatbot leverages artificial
          intelligence to deliver accurate and relevant answers based on content
          extracted from pre-fed PDFs. It supports both a graphical user
          interface (UI) built with Streamlit and a command-line interface (CLI)
          for flexible user interactions.
        </p>
        <br />
        <p>
          <b>Features: </b>
          <br />
          Pre-fed PDFs: The bot is equipped with knowledge derived
          from a collection of PDFs covering crucial theoretical Computer
          Science topics including Database Management Systems (DBMS), Computer
          Networks (CN), Operating Systems (OS), Blockchain, and Object-Oriented
          Programming (OOP). These documents are processed to create a
          comprehensive knowledge base for the chatbot. 
          <br />
          LangChain Integration:
          LangChain is utilized to generate contextually relevant prompts and
          responses, enhancing the chatbot’s ability to understand and answer
          user queries effectively. It helps in translating user questions into
          actionable prompts for the AI. 
          <br />
          Gemini AI: Powered by Google Gemini AI,
          the bot generates sophisticated and context-aware answers. Gemini AI’s
          capabilities ensure that the responses are not only accurate but also
          relevant to the specific questions asked by users.
          <br />
          ChromaDB: ChromaDB
          is employed as a vector store for storing and retrieving document
          embeddings. It enables the bot to access and interpret the embedded
          data efficiently, facilitating precise and contextually appropriate
          responses to user queries. 
          <br />
          Two Interfaces: 
          <br />
          Streamlit UI: The
          Streamlit-based interface (app.py) offers a user-friendly environment
          where users can interact with the chatbot through a web-based
          graphical interface. It is designed for ease of use, allowing users to
          ask questions and receive responses in real-time. 
          <br />
          CLI Version: The
          command-line interface (rag.py) provides an alternative way to
          interact with the chatbot via the terminal. This version is ideal for
          users who prefer or require a text-based interface.
        </p>
      </>
    ),
    badge: "AI/ML",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy_SgCb8ZzaFXbKaXvP7LGOFAcsREqzjE4Gw&s",
  },
  {
    title: "ERP: Schedule Management System",
    techStackIcons: [SiDjango, SiPython, SiBootstrap, SiJavascript, SiJquery, SiPandas],
    description: (
      <>
        <p>
          The Schedule Management System is a comprehensive ERP solution
          designed to streamline administrative tasks across an entire
          university. Built using Django, SQL, AJAX, HTML, CSS, JavaScript,
          jQuery, and Bootstrap, this system provides a robust and user-friendly
          interface for managing various aspects of university operations.
        </p>
        <br />
        <p>
          <b>Key Features: </b>
          <br />
          SweetAlerts Integration: Enhanced user interaction by integrating
          SweetAlerts, improving notifications and prompts for a more engaging
          user experience.
          <br />
          Student Attendance and Reports: Developed features for tracking
          student attendance and generating detailed reports using AJAX,
          enabling real-time updates and a seamless user experience.
          <br />
          Pandas Integration: Utilized the Pandas library for efficient data
          handling and processing in attendance reports, facilitating robust
          data analysis and reporting capabilities.
          <br />
          Marks Entry Functionality: Implemented functionality for entering and
          managing student marks, allowing for easy updates and retrieval of
          academic performance data.
        </p>
        <br />
        <p>
          Contributions: As part of the group project, I was responsible for
          integrating SweetAlerts, developing the student attendance tracking
          and reporting features using AJAX, handling data processing with
          Pandas, and implementing the marks entry functionality.
        </p>
      </>
    ),
    badge: "ERP",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy_SgCb8ZzaFXbKaXvP7LGOFAcsREqzjE4Gw&s",
  },
  {
    title: "Get Me A Job",
    techStackIcons: [SiExpress, SiNodedotjs, SiReact, SiMongodb, SiJsonwebtokens, SiTailwindcss],
    description: (
      <>
        <p>
          Get Me a Job is a comprehensive web application designed to facilitate
          job search and recruitment processes. The platform allows users to
          sign up either as job seekers or employers, providing a seamless
          interface for job posting, application, and management.
        </p>
        <br />
        <p>
          <b>Key Features:</b>
          <br />
          Role Selection and Authentication: Implemented functionality for users
          to select their role (employer or job seeker) and sign up, ensuring
          secure and appropriate access to the platform’s features.
          <br />
          Job Posting and Application: Developed features that enable employers
          to post jobs, while job seekers can easily apply to relevant
          positions. Applications can be managed directly through the platform,
          streamlining the recruitment process.
          <br />
          Job Expiry Feature: Integrated a functionality for employers to mark
          jobs as expired.
        </p>
      </>
    ),
    badge: "Web Dev",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy_SgCb8ZzaFXbKaXvP7LGOFAcsREqzjE4Gw&s",
  },
];
