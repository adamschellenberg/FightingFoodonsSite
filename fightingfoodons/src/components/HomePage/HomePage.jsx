import React from 'react';
import './HomePage.css';
import Container from 'react-bootstrap/Container';

export const HomePage = () => {
    return (
        <div>
            <div className="homeBackground"></div>
            <Container>
                <div className="main">
                    <div><h1 className='text-center'>Welcome, chefs!</h1></div>
                    <hr />
                    <div>Fighting Foodons is a fan-made site dedicated to the late-90's/early-00's manga and anime Kakuto Ryori Densetsu Bistro Recipe - known in English as Fighting Foodons.
                    </div>
                    <br />
                    <div>
                        Because this website is fully developed and maintained by a single fan with a probably-unhealthy, I-can-stop-talking-about-Fighting-Foodons-anytime-I-want obsession, things here are always changing and being updated.
                        If there is any incorrect or missing information, please email him (well, me) at biscuitpages@gmail.com and let him know! All help and feedback is appreciated!
                    </div>
                    <br />
                    <div>
                        Check back often to see the new updates and indulge in what can only be described as a masterpiece of the highest calibur!
                        And please, if you like the site and want to see more content being added, consider donating at <a href="https://ko-fi.com/biscuitpages" target="_blank" rel="noreferrer">Ko-Fi</a>. 
                        All donations will be strictly used to pay for hosting and more Fighting Foodons material for preservation. 
                        <br />
                        <span className="smallText">(strategy guide scans/translations, high-res images of toys, promotional material, and high-quality rips of the official Fighting Foodons soundtrack, anyone??)</span>
                    </div>
                </div>
            </Container>
        </div>
    )
}