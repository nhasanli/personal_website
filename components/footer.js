import Container from './container'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";


export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href={`https://github.com/nhasanli`}
              className="mx-3 font-bold hover:underline"
            >
              <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
