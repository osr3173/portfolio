import React from "react";

const History: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#E6F0FA] text-[#333333] py-12 px-6 md:px-8 lg:pl-[250px] flex justify-center">
      {/* 상단 History 제목 */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-[#1E40AF] text-3xl md:text-4xl font-bold ml-2">
        History
      </div>

      <div className="space-y-16 max-w-screen-lg w-full pt-24">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1E40AF] mb-4">
          Education & Certificate
        </h2>

        {/* Education Section */}
        <div className="mb-8">
          <div className="text-[#1E40AF] text-xl md:text-2xl mb-2 font-semibold">
            Education
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#FFFFFF] p-6 rounded-lg shadow-md h-full">
              <p className="text-sm text-gray-400 mb-2">
                2018 / 03 - 2024 / 08
              </p>
              <h3 className="text-xl md:text-2xl font-semibold text-[#3B82F6]">
                청주대학교
              </h3>
              <ul className="list-disc ml-4 pt-2">
                <li>데이터사이언스 전공</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Certification Section */}
        <div className="mb-12">
          <div className="text-[#1E40AF] text-xl md:text-2xl mb-2 font-semibold">
            Certificate
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#FFFFFF] p-6 rounded-lg shadow-md h-full">
              <p className="text-sm text-gray-400 mb-2">2023 / 11</p>
              <h3 className="text-xl md:text-2xl font-semibold text-[#3B82F6]">
                ADsP
              </h3>
              <ul className="list-disc ml-4 pt-2">
                <li>데이터분석 준전문가 자격증 취득</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#1E40AF] mb-6">
          Experience
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#FFFFFF] p-6 rounded-lg shadow-md h-full">
            <p className="text-sm text-gray-400 mb-2">2024 / 07 - 2024 / 08</p>
            <h3 className="text-xl md:text-2xl font-semibold text-[#3B82F6]">
              코칭스터디 Data Science 2024
            </h3>
            <ul className="list-disc ml-4 pt-2">
              <li>부스트코스 주관 데이터 분석 프로젝트</li>
              <li>
                Python, Slack 등을 활용한 데이터 분석 학습 및 프로젝트 수행
              </li>
            </ul>
          </div>

          <div className="bg-[#FFFFFF] p-6 rounded-lg shadow-md h-full">
            <p className="text-sm text-gray-400 mb-2">2024 / 04 - 2024 / 08</p>
            <h3 className="text-xl md:text-2xl font-semibold text-[#3B82F6]">
              코리아IT 아카데미 인천점
            </h3>
            <ul className="list-disc ml-4 pt-2">
              <li>React, Spring 등을 이용한 웹 개발 교육</li>
              <li>웹 개발 프로젝트</li>
              <li>오픈소스 프로젝트</li>
            </ul>
          </div>

          <div className="bg-[#FFFFFF] p-6 rounded-lg shadow-md h-full">
            <p className="text-sm text-gray-400 mb-2">2024 / 01 - 2024 / 02</p>
            <h3 className="text-2xl font-semibold text-[#3B82F6]">
              Data Science Project 2024
            </h3>
            <ul className="list-disc ml-4 pt-2">
              <li>부스트코스 주관 데이터 분석 프로젝트</li>
              <li>
                Python, Slack, github 등을 활용한 데이터 분석 학습 및 프로젝트
                수행
              </li>
            </ul>
          </div>

          <div className="bg-[#FFFFFF] p-6 rounded-lg shadow-md h-full">
            <p className="text-sm text-gray-400 mb-2">2023 / 04 - 2023 / 05</p>
            <h3 className="text-2xl font-semibold text-[#3B82F6]">
              2023 상반기 CIPC 특허 빅데이터 교육
            </h3>
            <ul className="list-disc ml-4 pt-2">
              <li>
                특허 데이터를 분석을 바탕으로 인사이트 도출하는 과정 교육{" "}
              </li>
              <li>특허식 작성 및 시각화툴 등 사용법 교육</li>
            </ul>
          </div>

          <div className="bg-[#FFFFFF] p-6 rounded-lg shadow-md h-full">
            <p className="text-sm text-gray-400 mb-2">2022 / 03 - 2022 / 06</p>
            <h3 className="text-2xl font-semibold text-[#3B82F6]">
              2022 상반기 CIPC 특허 빅데이터 교육
            </h3>
            <ul className="list-disc ml-4 pt-2">
              <li>
                특허 데이터를 분석을 바탕으로 인사이트 도출하는 과정 교육{" "}
              </li>
              <li>특허식 작성 및 시각화툴 등 사용법 교육</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
