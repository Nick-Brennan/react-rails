var Skill = React.createClass({

	getInitialState: function(){
		return {editable: false} 
	},

	handleEdit: function(){

		if(this.state.editable){
			var name = this.refs.name.value;
			var details = this.refs.details.value;
			var skill = {name: name, details: details, id: this.props.skill.id};
			console.log('editing', this.state.editable, name, details, this.props.skill.id);
			this.props.handleUpdate(skill);
		}	

		this.setState({editable: !this.state.editable});
	},

	// onUpdate: function(){
	// 	if(this.state.editable){

	// 	}
	// },

	render: function(){

		var name = this.state.editable ? <input defaultValue={this.props.skill.name} ref="name" className="form-control"/>
									   : <h3>{this.props.skill.name}</h3>

		var details = this.state.editable ? <textarea defaultValue={this.props.skill.details} ref="details" className="form-control"></textarea>
										  : <p>{this.props.skill.details}</p>

		return (
					<div className="form-group">		
						{name}
						<p><strong>Level:</strong> {this.props.skill.level}</p>
						{details}
						<button onClick={this.handleEdit} className="btn btn-primary">{this.state.editable ? 'Submit' : 'Edit'}</button>
						<button onClick={this.props.handleDelete} className=" btn btn-danger">Delete</button>
						<hr/>
					</div>
		)
	}
});