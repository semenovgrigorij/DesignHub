import { useState } from "react"
import Banner from "../../сomponents/banner/Banner"
import Filter from "../../сomponents/filter/Filter"
import Header from "../../сomponents/header/Header"
import ProjectList from "../../сomponents/projectList/ProjectsList"
import Sort from "../../сomponents/sort/Sort"

import projectImgOne from '../../img/project_one.jpg'
import projectImgTwo from '../../img/project_two.jpg'
import './homePage.css'

const HomePage = () => {

	const [isSortVisible, setIsSortVisible] = useState(false);

	const handleSortButtonClick = () => {
		setIsSortVisible(!isSortVisible);
	}
	
	const projects = [
		{
			id: 1,
			title: "Vibrant Abstract Symphony",
			author: "Inova Ilnazuo",
			views: 660,
			likes: 142,
			daysAgo: 3,
			image: projectImgOne
		},
		{
			id: 2,
			title: "Vibrant Abstract Symphony",
			author: "Inova Ilnazuo",
			views: 660,
			likes: 142,
			daysAgo: 3,
			image: projectImgTwo
		},
		{
			id: 3,
			title: "Vibrant Abstract Symphony",
			author: "Inova Ilnazuo",
			views: 660,
			likes: 142,
			daysAgo: 3,
			image: projectImgOne
		},
		{
			id: 4,
			title: "Vibrant Abstract Symphony",
			author: "Inova Ilnazuo",
			views: 660,
			likes: 142,
			daysAgo: 3,
			image: projectImgOne
		},
		{
			id: 5,
			title: "Vibrant Abstract Symphony",
			author: "Inova Ilnazuo",
			views: 660,
			likes: 142,
			daysAgo: 3,
			image: projectImgOne
		},
		{
			id: 6,
			title: "Vibrant Abstract Symphony",
			author: "Inova Ilnazuo",
			views: 660,
			likes: 142,
			daysAgo: 3,
			image: projectImgTwo
		},
		
	]
		
	return (
    <div className="home-page">
      <Header />
      <Banner />

      <main className="home-page__main">
        <div className="container home-page__container--flex">
          <aside className="home-page__aside">
            <Filter />
          </aside>

          <section className="home-page__section">
            <div className="home-page__section-top">
              <div className="tags">
                <button className="tags__tag"># Landscapes</button>
                <button className="tags__tag"># Foto</button>
                <button className="tags__tag"># Landscapes</button>
                <button className="tags__tag"># Architecture</button>
              </div>
              <div className="sort-controls">
                <button
                  className="sort-controls__button"
                  onClick={handleSortButtonClick}
                >
                  Sort Images
                </button>
                <Sort isVisible={isSortVisible} />
              </div>
            </div>

            <h2 className="home-page__title">New projects</h2>
            <ProjectList projects={projects} />
            <h2 className="home-page__title" style={{ marginTop: "56px" }}>
              Top projects
            </h2>
            <ProjectList projects={projects} />
          </section>
        </div>
      </main>
    </div>
  )
}

export default HomePage