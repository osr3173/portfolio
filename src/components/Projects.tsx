import React, { useState } from "react";

// 모달 컴포넌트
const Modal: React.FC<{ projectTitle: string; onClose: () => void }> = ({
  projectTitle,
  onClose,
}) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-10 rounded-lg w-full max-w-lg sm:max-w-xl md:max-w-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-3xl"
        >
          &times;
        </button>

        {/* 밀키트 판매 매장 검색 사이트 */}
        {projectTitle === "밀키트 판매 매장 검색 사이트" && (
          <>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              밀키트 판매 매장 검색 사이트
            </h2>

            <p className="mb-4">
              <strong className="text-gray-800">사이트 :</strong>{" "}
              <a
                href="https://mango-sand-0aec9c100.5.azurestaticapps.net"
                className="text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Link
              </a>
            </p>

            <p className="mb-4">
              <strong className="text-gray-800">코드 :</strong>{" "}
              <a
                href="https://github.com/osr3173/Bechef_Front"
                className="text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Link
              </a>
            </p>

            <p className="mb-6">
              <strong className="text-black">개요 :</strong>{" "}
              <p className="flex text-black">
                밀키트 판매 매장을 검색 사이트 구현
              </p>
            </p>

            <div className="mb-6">
              <strong className="text-black">메인 기능 :</strong>
              <ul className="list-disc ml-6 mt-2 text-black">
                <li>매장 검색 및 매장 정보 확인</li>
                <li>매장의 위치 확인 및 실시간 재고 확인</li>
                <li>로그인 및 평점, 리뷰 작성</li>
                <li>관리자 로그인을 통한 회원 및 매장 관리</li>
              </ul>
            </div>

            <div>
              <strong className="text-black">개발 환경 :</strong>
              <ul className="list-disc ml-6 mt-2 text-black">
                <li>Front : React, HTML, tailwindCSS</li>
                <li>Back : Java, SpringBoot, JWT, SpringSecurity</li>
                <li>DataBase : MySQL, Dbeaver</li>
                <li>배포 환경 : Azure</li>
              </ul>
            </div>
          </>
        )}

        {/* 외국인 여행 트렌드 동향 분석 */}
        {projectTitle === "외국인 여행 트렌트 동향 분석" && (
          <>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              외국인 여행 트렌트 동향 분석
            </h2>

            <p className="mb-4">
              <strong className="text-gray-800">사이트 :</strong>{" "}
              <a
                href="https://www.canva.com/design/DAGKEdtsnhw/oF3LO9t5pOpl4IGfJ7Uu1A/view?utm_content=DAGKEdtsnhw&utm_campaign=designshare&utm_medium=link&utm_source=editor"
                className="text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Link
              </a>
            </p>

            <p className="mb-6">
              <strong className="text-black">개요 :</strong>
              <p className="flex text-black">
                <ul className="list-disc ml-6 mt-2 text-black">
                  <li>외국인의 국내 여행 트렌드 분석</li>
                  <li>여행 및 관광 데이터 분석</li>
                  <li>
                    가설 검증을 통한 여행 동향 분석 및 관광 활성화 정책 제안
                  </li>
                </ul>
              </p>
            </p>

            <div className="mb-6"></div>

            <div>
              <strong className="text-black">개발 환경 :</strong>
              <ul className="list-disc ml-6 mt-2 text-black">
                <li>언어 : Python</li>
                <li>라이브러리 : numpy, matplotlib</li>
                <li>도구 : VScode, Canva</li>
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  // 직접 입력된 프로젝트 데이터에 기반한 필터링 로직
  const filteredProjects = [
    {
      title: "밀키트 판매 매장 검색 사이트",
      category: "Web",
      imageUrl: `${process.env.PUBLIC_URL}/mealkit.jpg`,
      description: "WeB",
    },
    {
      title: "외국인 여행 트렌트 동향 분석",
      category: "Data-Analysis",
      imageUrl: `${process.env.PUBLIC_URL}/shop.jpg`,
      description: "Data-Analysis",
    },
  ].filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <div className="relative min-h-screen bg-gray-900 text-gray-300 py-12 px-6 md:px-8 lg:pl-[250px] flex justify-center">
      {/* 상단 Projects 제목 */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white text-5xl font-bold">
        Featured Projects
      </div>

      <div className="space-y-16 max-w-screen-lg w-full pt-24">
        {/* 카테고리 필터 */}
        <div className="flex justify-center mb-8 mr-52">
          {["All", "Data-Analysis", "Web", "Others"].map((category) => (
            <button
              key={category}
              className={`mx-2 px-4 py-2 ${
                activeCategory === category ? "text-green-400" : "text-white"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* 직접 입력된 프로젝트 카드 */}
        <div className="grid md:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 p-6 rounded-lg shadow-md h-full cursor-pointer"
              onClick={() => setSelectedProject(project.title)} // 프로젝트 클릭 시 모달 오픈
            >
              <img
                src={project.imageUrl} // 이미지 URL
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-center text-2xl font-bold mb-2">
                {project.title}
              </h2>
              <p className="text-center text-green-400 mb-2">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 모달 창 */}
      {selectedProject && (
        <Modal
          projectTitle={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default Projects;
