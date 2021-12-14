import { Link } from "react-router-dom";


const Home = () => {
  
  return (
    <div className="container">
      <div className="row">

        <div className="col-9">
          <h1>
            <p>Hi,</p>
            <p>I am Khuong</p>
            <p>Software developer</p>
          </h1>
          <Link to="works">
            <button>More Info</button>
          </Link>
        </div>
        
        <div class="col">
          <img src="https://scontent-atl3-2.xx.fbcdn.net/v/t31.18172-8/15272147_10154692663549854_3781164025113271182_o.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_ohc=lOX3td911mEAX8ZFrtw&_nc_ht=scontent-atl3-2.xx&oh=00_AT9h83ZK8QqmAipQYaud35dZqadkE7GMCvu-xYiBEvvtUQ&oe=61DDCB87" 
          class="img-thumbnail" alt="https://drive.google.com/file/d/1KjfiYzqAut8EkNBEEY8sQ_1qCvFDNvXz/view?usp=sharing"/>
        </div>
          
      </div>
      
    </div>
  );
}

export default Home;
