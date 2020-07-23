import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default class DataSelector extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
	return (
		<FormGroup row>
	      <FormControlLabel
	        control={<Checkbox checked={this.props.infectedOn} onChange={this.props.toggleInfectedData} className="checkedA" style={{color:'rgba(255, 99, 132, 1)'}}/>}
	        label="Confirmed"
	      />
	      <FormControlLabel
	        control={<Checkbox checked={this.props.recoveredOn} onChange={this.props.toggleRecoveredData} className="checkedB" style={{color:'rgba(75, 192, 192, 1)'}}/>}
	        label="Recovered"
	      />
	      <FormControlLabel
	        control={<Checkbox checked={this.props.deathOn} onChange={this.props.toggleDeathData} name="checkedC" style={{color:'#616161'}}/>}
	        label="Deceased"
	      />
	    </FormGroup>
    )
  }
}
