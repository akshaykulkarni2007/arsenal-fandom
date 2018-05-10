import React, { Component } from 'react';

import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class SquadList extends Component {

  state = {
    squad: [
      {'name': 'Arsene Wenger', 'role': 'manager', 'image': 'Arsene Wenger.jpg', 'status': 'active'},
      {'number': 6, 'name': 'Laurent Koscielny', 'role': 'defender', 'image': 'Laurent Koscielny.png', 'status': 'active'},
      {'number': 11, 'name': 'Mesut Ozil', 'role': 'midfielder', 'image': 'Mesut Ozil.png', 'status': 'active'},
      {'number': 14, 'name': 'Pierre-Emerick Aubameyang', 'role': 'forward', 'image': 'Pierre-Emerick Aubameyang.png', 'status': 'active'}
    ],
    dialogOpen: false,
    currentImg: ''
  }

  handleOpen = img => {
    this.setState({ dialogOpen: true, currentImg: img });
    console.log(this.state.dialogOpen)
  };

  handleClose = () => {
    this.setState({ dialogOpen: false });
  };

  render() {
    const styles = {
      gridList: {
        margin: 0,
      },
      title: {
        fontSize: 30
      },
      role: {
        textTransform: 'capitalize'
      }
    }

    let squad = (
      <GridList cols={3} cellHeight={350} style={styles.gridList}>
        {this.state.squad.map(member => (
          <GridTile 
            key = {member.number}
            title = {<span style={styles.title}>{member.number} {member.name}</span>}
            subtitle = {
              <span>
                <strong style={styles.role}>{member.role}</strong>
              </span>
            }
            actionIcon={
              <IconButton onClick={() => this.handleOpen('images/' + member.image)}>
                <ZoomIn color="white" />
              </IconButton>
            }
          >
          <img src={'images/' + member.image}  alt={member.name}/>
          </GridTile>
        ))}
      </GridList>
    );

    const actions = [
      <FlatButton label="Close" primary={true} onClick={this.handleClose} />
    ];

    return (
        <div id="squadlist">

          {squad}

          <Dialog
            actions={actions}
            modal={false}
            open={this.state.dialogOpen}
            autoScrollBodyContent={true}
            onRequestClose={this.handleClose}>

            <img src={this.state.currentImg} alt="" style={{ width: '100%' }}/>

          </Dialog>
        </div>
    );

  }
}

export default SquadList;
