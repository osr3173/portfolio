import React from "react";

const Introduce: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#E6F0FA] text-[#333333] flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 relative lg:pl-[250px]">
      {/* 상단 중앙 제목 */}
      <h1 className="absolute top-2 left-1/2 transform -translate-x-1/2 text-4xl md:text-5xl font-bold text-[#1E40AF] mb-8 mt-4">
        Introduce
      </h1>

      <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-20">
        {/* 좌측 사진 */}
        <div className="w-40 md:w-60 lg:w-80">
          <img
            src={`${process.env.PUBLIC_URL}/profile.jpg`}
            alt="Profile"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* 우측 텍스트 */}
        <div className="max-w-2xl text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1E40AF] mb-4">
            About Me
          </h1>
          <p className="text-lg md:text-xl text-[#333333] mb-4">Data Scientist · Analyst</p>
          <p className="mb-4">
            끊임없이 배움을 향해 나아가는{" "}
            <span className="text-[#1E40AF] font-semibold">Passionate Person</span> 입니다.
          </p>

          <div className="mb-4">
            <p>
              Github:{" "}
              <a href="https://github.com/osr3173" className="text-[#3B82F6]">
                Link
              </a>
            </p>
            <p>
              Email:{" "}
              <a href="mailto:osr3173@gmail.com" className="text-[#3B82F6]">
                osr3173@gmail.com
              </a>
            </p>
          </div>

          <h2 className="text-lg md:text-xl font-semibold text-[#1E40AF] mt-6 mb-2">기술 스택</h2>

          <h3 className="text-base md:text-lg font-semibold text-[#1E40AF]">Data Science</h3>
          <ul className="list-disc ml-6 mb-4">
            <li>데이터 기반 의사결정 (Statistical hypothesis test)</li>
            <li>Regression, Machine Learning, Deep learning 등의 적용</li>
          </ul>

          <h3 className="text-base md:text-lg font-semibold text-[#1E40AF]">Web</h3>
          <ul className="list-disc ml-6 mb-4">
            <li>Html, CSS, TailWind 활용</li>
            <li>React, TypeScript를 활용한 웹프론트 구현</li>
            <li>Azure를 이용한 배포</li>
          </ul>

          <h3 className="text-base md:text-lg font-semibold text-[#1E40AF]">Programming Languages</h3>
          <ul className="list-disc ml-6">
            <li>Skilled: Python, R, SQL</li>
            <li>Low Level: JAVA, React, MySQL, SPSS</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
