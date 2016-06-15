var Body = React.createClass({

	getInitialState: function(){
		return { skills: [] };
	},

	componentDidMount: function(){
		console.log("component mounted");
		$.getJSON('/api/v1/skills.json', (response) => { this.setState({ skills: response }) });
	},

	handleSubmit: function(skill){
		console.log("handle submit: ", skill);
		var newState = this.state.skills.concat(skill);
		this.setState({ skills: newState })
	},

	render: function(){
		return(
			<div>
				<NewSkill handleSubmit={this.handleSubmit} />
				<AllSkills skills={this.state.skills.reverse()} />
			</div>
		)
	}
});