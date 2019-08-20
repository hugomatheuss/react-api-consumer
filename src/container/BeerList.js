import React, { Component } from 'react'
import axios from 'axios'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AppHeader from '../component/AppHeader/AppHeader'
import MainTemplate  from '../template/MainTemplate'

const API_URL = 'https://api.punkapi.com/v2/beers'

class BeerList extends Component {

  constructor(props){
    super(props)
    this.state = {
      listBeerGrid : []
    }
  }

  componentDidMount() {
    const url = `${API_URL}`;
    axios.get(url).then(response => response.data)
      .then((data) => {
        this.setState({ listBeerGrid: data })
        console.log(this.state.blistBeerGrideers)
      })
  }

  render() {
    return(
      <MainTemplate>        
        <AppHeader title="Lista de Cervejas" />
              <ul>
                  {this.state.listBeerGrid.map((beer, index) =>
                    <li key={beer}>
                      <ExpansionPanel>
                        <ExpansionPanelSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header">
                          <Typography>{index + 1} - {beer.name}</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                          <Typography>
                            Tagline: {beer.tagline} -                             
                          </Typography>
                          <Typography>
                            Descrição: {beer.description}
                          </Typography>
                          <CardMedia> 
                            <img className="media" src={beer.image_url} alt="cerveja"/>
                          </CardMedia>
                      </ExpansionPanelDetails>
                    </ExpansionPanel>                      
                    </li>                    
                  )}
              </ul>
      </MainTemplate>
    )
  }
}

export default BeerList