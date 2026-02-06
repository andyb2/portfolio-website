// import { imageList } from "../data/asset-list";
// import Nav from "../components/nav";
import Login from "../components/login";
import Video from "../components/video";

export default function Home() {
  return (
    <>
      {/* <Nav /> */}
      <div className='home-page'>
        <div className='wrapper'>
          <div className='starting-window'>
            <div className='content-container'>
              <h1>
                Sabrina & Andrews
                <br />
                Wedding
              </h1>
              <p>June 27th, 2026</p>
              <a href='#rsvp'>RSVP</a>
            </div>
          </div>
          <Video />
          <div className='rsvp-form-container'>
            <Login />
          </div>
        </div>
      </div>
    </>
  );
}
