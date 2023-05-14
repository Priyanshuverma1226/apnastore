import Image from 'next/image'
import aquarium from '../public/aquarium.svg';

const Jumbotron = () => {
    return (< >
        <div className="background-image">
            <Image src={aquarium} alt={aquarium}/>
        </div>
        <div className="promotional-message">
            <h3>REDISCOVER</h3>
            <h2>Learning Experience</h2>
            <p>An <strong>exclusive collection of Apple product</strong> available for everyone.</p>
        </div>
    </>)
}
export default Jumbotron;