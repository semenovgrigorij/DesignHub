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


			<main>
			<div className="container container-flex">
				<aside style={{marginTop:'22px'}}>
					<Filter />
				</aside>

				<section style={{marginTop:'22px'}}>
					<div className="section-top">
					<div className="tags">
						<button className="tag"># Landscapes</button>
						<button className="tag"># Foto</button>
						<button className="tag"># Landscapes</button>
						<button className="tag"># Architecture</button>
        </div>
						<button className="action-button">Sort Images</button>
					</div>


						<h2>New projects</h2>
          <ProjectList projects={projects} />
						<h2 style={{marginTop: '56px'}}>Top projects</h2>
          <ProjectList projects={projects} />
        </section>
			</div>
			</main>


		</div>
	)
}

export default HomePage