var Body = React.createClass({

	handleDelete: function(id){
		console.log("deleting");
		$.ajax({
			url: `/api/v1/skills/${id}`,
			type: 'DELETE',
			success: (response) => {
				console.log("successfully removed: ", response);
				this.removeSkillFromDOM(id);
			}
		});
	},

	handleEdit: function(skill){
		console.log("passing the edited skill to body: ", skill);
	},

	removeSkillFromDOM: function(id){
		var newSkills = this.state.skills.filter((skill) => {
			return skill.id != id;
		});

		this.setState({skills: newSkills.reverse()});
	},

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
				<AllSkills skills={this.state.skills.reverse()} handleDelete={this.handleDelete} handleEdit={this.handleEdit} />
			</div>
		)
	}
});