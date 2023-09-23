import { FaGithub } from "react-icons/fa";

function About() {
  return (
    <div className="container mx-auto">
      <div className="flex inline">
        <FaGithub className="inline pr-2 text-6xl" />
        <h1 className="text-6xl mb-4">Github Finder</h1>
      </div>
      <p className='mb-4 text-2xl font-light'>
        A React app to search GitHub users, their profiles, and their repositories. This
        project was created following the
        <a href='https://www.udemy.com/course/modern-react-front-to-back/'>
          {' '}
          React Front To Back
        </a>{' '}
        Udemy course by
        <strong>
          <a href='https://traversymedia.com' target='_blank' rel='noreferrer'> Brad Traversy</a>
        </strong>
        .
      </p>
      <p className='text-lg text-gray-400'>
        Version: <span className='text-white'> 1.1.0</span>
      </p>
      <p className='text-lg text-gray-400'>
        Initial Layout By:
        <a className='text-white' href='https://twitter.com/hassibmoddasser' target='_blank' rel='noreferrer'>
          <span> </span>Hassib Moddasser
        </a>
      </p>
      <p className='text-lg text-gray-400'>
        Modified By:
        <a className='text-white' href='https://github.com/LayneHansen' target='_blank' rel='noreferrer'>
          <span> </span>Layne D. Hansen
        </a>
      </p>
    </div>
  )
}

export default About