import React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { styled } from '@material-ui/styles';



const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
  
});

const MyCard = styled(Card)(
  {
    backgroundColor: 'rgba(247,247,247,.45)',
    positions: 'relative',
    padding:'10px 5px'

  }
)


const QuoteMachine = ({ assignNewQuoteIndex, selectedQuote }) => (
  <MyCard >
    <CardContent>
      <Typography id="text">
        {selectedQuote.quote} - <span id="author">{selectedQuote.author}</span>
      </Typography>
    </CardContent>
    <CardActions>
      <MyButton id="new-quote" size="small" onClick={assignNewQuoteIndex}>Next Quote</MyButton>
      <IconButton
        id="tweet-quote"
        target="_blank"
        href={encodeURI(`https://twitter.com/intent/tweet?text=${selectedQuote.quote}&hashtags=thewebdevcoach`)}
      >
        <FontAwesomeIcon icon={faTwitter} />
      </IconButton>
      <IconButton
      id="facebook-quote"
      target="_blank"
      href={encodeURI(`https://www.facebook.com/intent/sharer.php?text=${selectedQuote.quote}&hashtags=thewebdevcoach`)}
      >
        <FontAwesomeIcon icon = {faFacebook} />
      </IconButton>
    </CardActions>
  </MyCard>
);

export default QuoteMachine 