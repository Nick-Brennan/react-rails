var NewSkill = React.createClass({

	handleClick: function(){
		console.log('Handle click');
		var name    = this.refs.name.value;
		var details = this.refs.details.value;
		$.ajax({
		    url: '/api/v1/skills',
		    type: 'POST',
		    data: { skill: { name: name, details: details } },
		    success: (response) => {
		     this.props.handleSubmit(response);
		    }
		});
	},

	render: function(){
		return(
			<div className="form-group">
				<input ref='name' placeholder='Name of Skill' className="form-control"/>
				<textarea ref='details' placeholder="Details" className="form-control"></textarea>
				<button onClick={this.handleClick} className="btn btn-success">Submit</button>
			</div>
		)
		var name    = this.refs.name.value;
		var details = this.refs.details.value;
		console.log(name, details);
	}
});