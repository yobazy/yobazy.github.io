import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.jpg'



export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting]  = useState(false);
    const toRotate = ['Full-stack Developer', 'Civil Engineer'];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random()*100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() =>  {
            tick();
        }, delta)
        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText);

        if(isDeleting)  {
            setDelta(prevDelta => prevDelta/2)
        }

        if(!isDeleting && updatedText === fullText) {
            isDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500)
        }
    }
    <div class="banner-image"></div>

    return (
        <section className='banner' id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline'>Welcome to my Web Porfolio</span>
                        <h1>{`Hi, I'm Bazil!`}</h1>
                        <h2><span>Full-Stack Developer</span></h2>
                        <h2><span>Civil Engineer (EIT)</span></h2>
                        <div>
                        <p>Here you can find information on my skills, projects I've worked on and where to contact me.</p>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <a href="https://www.linkedin.com/in/bazilkhan" target="_blank" rel="noopener noreferrer">
                            <button>Let's connect<ArrowRightCircle size={25}/></button>
                        </a>
                        </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt='header img' className='header-img'/>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}