import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../../styles/portfolio.css';
import homeImage from '../../images/HI_home.png';
import carImage from '../../images/modelo-screenshot.jpg';
import animeImage from '../../images/grand-line-anime.jpg';
import weatherImage from '../../images/Weather_Dashboard.png';
import ultimateImage from '../../images/Ultimate_Tech_Blog.png';
import quizImage from '../../images/Code-Quiz.png';

export default function Portfolio() {
    return (
      <div class="portfolio-container">
        <div class="project-cards">
          <Card sx={{ maxWidth: 500 }}>
            <CardMedia
              component="img"
              width= "100%"
              image= {homeImage}
              alt="Login page for Home Improvement App"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Home Improvement
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Home Improvement is an app created for small businesses. Businesses will have the option to add employees and customers into the database
                 and be able to assign their employees to customers in order to complete a home improvement project. Once assigned, the project will have 
                 information such as the customer’s address, the project’s scope of work, time, date, price, and any other information.
              </Typography>
            </CardContent>
            <CardActions>
              <Button href="https://github.com/EthanP94/Home-Improvement" target="_blank" size="small">Github</Button>
              <Button href="https://cryptic-coast-15012.herokuapp.com" target="_blank" size="small">Deployed</Button>
            </CardActions>
          </Card>
        </div>
        <div class="project-cards">
          <Card sx={{ maxWidth: 500 }}>
            <CardMedia
              component="img"
              width= "100%"
              image= {carImage}
              alt="Homepage for car selling/searching website"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                El Caro Modelo
              </Typography>
              <Typography variant="body2" color="text.secondary">
              El Caro Modelo is a web application that allows users to add an used car to the marketplace to 
              sell as well as look for second hand cars to purchase. Users are able to browse through the car 
              listings but will need to login in order to post any listings. The used car API inlcudes the following details: 
              car make, model, year, price, mileage, color, salvage title, transmission, and image.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Github</Button>
              <Button size="small">Deployed</Button>
            </CardActions>
          </Card>
        </div>
        <div class="project-cards">
          <Card sx={{ maxWidth: 500 }}>
            <CardMedia
              component="img"
              width= "100%"
              image= {animeImage}
              alt="Homepage for anime searching website"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                The Grand Line Anime
              </Typography>
              <Typography variant="body2" color="text.secondary">
              The Grand Line Anime is a web application built for anime lovers to search for animes by name, genre, 
              or top 10. These features will bring the user to a new webpage filled with information on that anime, 
              including a title, image, rating, genres, status, synopsis, and two buttons. The merchandise button will redirect 
              the user to a merch link and the watch button will redirect to a streaming link of that anime. 
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Github</Button>
              <Button size="small">Deployed</Button>
            </CardActions>
          </Card>
        </div>
        <div class="project-cards">
          <Card sx={{ maxWidth: 500 }}>
            <CardMedia
              component="img"
              width= "100%"
              image= {ultimateImage}
              alt="Homepage for tech-related blogs"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Ultimate Tech Blog
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Ultimate Tech Blog is a web application that allows users to make posts and comments on technology related topics. User can 
              view the posts and choose to add post or comment by logging into their account. Users are also given the option to update or 
              delete their posts through the dashboard. Once the user is logged in, the session will be saved and makes it more convenient 
              to come back to the site within a certain period of time. When the session ends, the website will ask the user to login again.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Github</Button>
              <Button size="small">Deployed</Button>
            </CardActions>
          </Card>
        </div>
        <div class="project-cards">
          <Card sx={{ maxWidth: 500 }}>
            <CardMedia
              component="img"
              width= "100%"
              image= {weatherImage}
              alt="Homepage for anime searching website"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Forecaster
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Forecaster is a simplified web application designed to generate weather information based on the city 
              searched. The webpage will provide the daily weather as well as a five day forecast, which includes information 
              like date, weather condition, humidity, wind speed, and UV index. The user is also able to save information through 
              the search history, once the button for that search is generated, the user is able to easily access the information 
              again by clicking the buttons.  
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Github</Button>
              <Button size="small">Deployed</Button>
            </CardActions>
          </Card>
        </div>
        <div class="project-cards">
          <Card sx={{ maxWidth: 500 }}>
            <CardMedia
              component="img"
              width= "100%"
              image= {quizImage}
              alt="Homepage for anime searching website"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Code Quiz
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Code Quiz is a simple web game that is built with HTML, CSS, and Javascript. The game begins with 
              60 seconds and will count down by seconds once the player clicks the Start button. The quiz consists 
              of five simple coding questions and score is generated based on how fast and accurate the player answers. 
              The player will then submit initial with the score to be added to the highscore board.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Github</Button>
              <Button size="small">Deployed</Button>
            </CardActions>
          </Card>
        </div>
      </div>
    );
  }
