var Skill = React.createClass({

	getInitialState: function(){
		return {editable: false} 
	},

	handleEdit: function(){

		if(this.state.editable){
			var name = this.refs.name.value;
			var details = this.refs.details.value;
			var skill = {name: name, details: details};
			console.log('editing', this.state.editable, name, details);
			this.props.handleUpdate(skill);
		}	

		this.setState({editable: !this.state.editable});
	},

	// onUpdate: function(){
	// 	if(this.state.editable){

	// 	}
	// },

	render: function(){

		var name = this.state.editable ? <input defaultValue={this.props.skill.name} ref="name"/>
									   : <h3>{this.props.skill.name}</h3>

		var details = this.state.editable ? <textarea defaultValue={this.props.skill.details} ref="details"></textarea>
										  : <p>{this.props.skill.details}</p>

		return (
					<div>			
						{name}
						<p><strong>Level:</strong> {this.props.skill.level}</p>
						{details}
						<button onClick={this.handleEdit}>{this.state.editable ? 'Submit' : 'Edit'}</button>
						<button onClick={this.props.handleDelete}>Delete</button>
					</div>
		)
	}
});