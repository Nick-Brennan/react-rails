var AllSkills = React.createClass({

	getInitialState: function(){
		return { skills: [] };
	},

	componentDidMount: function(){
		console.log("component mounted");
		$.getJSON('/api/v1/skills.json', (response) => { this.setState({ skills: response }) });
	},

	render: function(){

		console.log(this.state);
		var skills = this.state.skills.map((skill) => {
			return (
				<div key={skill.id}>
					<h3>{skill.name}</h3>
					<p><strong>Level:</strong> {skill.level}</p>
					<p>{skill.details}</p>
				</div>
			)
		});

		return(
			<div>
				{skills}
			</div>
		)
	}
});