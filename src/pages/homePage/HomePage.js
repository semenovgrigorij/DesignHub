import Banner from "../../сomponents/banner/Banner"
import Filter from "../../сomponents/filter/Filter"
import Header from "../../сomponents/header/Header"
import ProjectList from "../../сomponents/projectList/ProjectsList"

import projectImgOne from '../../img/project_one.jpg'
import projectImgTwo from '../../img/project_two.jpg'
import filterIcon from '../../img/icon/filter_alt.svg'
import './homePage.css'

const HomePage = () => {
	
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
		<div>
			<Header/>
			<Banner/>
			<div className="container">
			<div className="actions" >
					<button className="action-button">Filter Images</button>
					<button className="action-button">Sort Images</button>
        </div>

			<main>
				<aside>
					<Filter />
				</aside>

				<section>
				<div className="tags">
          <button className="tag"># Landscapes</button>
          <button className="tag"># Landscapes</button>
          <button className="tag"># Foto</button>
          <button className="tag"># Landscapes</button>
          <button className="tag"># Architecture</button>
          <button className="tag"># Portraits</button>
          <button className="tag"># Architecture</button>
          <button className="tag"># Animals</button>
          <button className="tag"># Animals</button>
          <button className="tag"># Animals</button>
        </div>

					<div className="projects-top">
						<h2>New projects</h2>
						<img src={filterIcon} alt="filter icon" />
					</div>
          
          <ProjectList projects={projects} />
					<div className="projects-top" style={{marginTop: "56px"}}> 
						<h2>Top projects</h2>
						<img src={filterIcon} alt="filter icon" />
					</div>
          <ProjectList projects={projects} />
        </section>
			</main>

			</div>

		</div>
	)
}

export default HomePage