import {
  faNodeJs,
  faCss3,
  faEthereum,
  faJsSquare,
  faReact,
  faPython,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              index={15}
            />
          </h1>
          <p>
            I'm a very ambitious fullstack developer looking for a role as a
            entry level software engineering in an established company with the
            opportunity to display my skills and grow as a programmer
          </p>
          <p>
            {' '}
            My experience in previous programming based research projects,
            Managerial positions, as well as my time on my college swimming and
            diving team, have helped shape me into a hardworking, goal driven
            team player. I am constantly working on ways to improve my skills
            one problem at a time.
          </p>
          <p></p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#ff6123" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faEthereum} color="#468CFF" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faNodeJs} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
