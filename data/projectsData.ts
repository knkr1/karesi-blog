interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Open Deprem',
    description: `One of my projects that I made for fun. It's a interactive map that updates itself regularly and shows the lastest eartquakes inside and near Turkiye.`,
    imgSrc: '/static/images/opendeprem.png',
    href: 'https://github.com/knkr1/OpenDeprem',
  },
 
]

export default projectsData
