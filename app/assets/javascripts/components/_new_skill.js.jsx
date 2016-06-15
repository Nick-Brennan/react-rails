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
			<div>
				<input ref='name' placeholder='Name of Skill' />
				<input type="textarea" ref='details' placeholder="Details" />
				<button onClick={this.handleClick}>Submit</button>
			</div>
		)
		var name    = this.refs.name.value;
		var details = this.refs.details.value;
		console.log(name, details);
	}
});