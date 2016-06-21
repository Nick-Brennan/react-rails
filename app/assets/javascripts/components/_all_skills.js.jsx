var AllSkills = React.createClass({

	handleDelete: function(id){
		this.props.handleDelete(id);
	},

	handleUpdate: function(skill){
		this.props.handleEdit(skill);
	},

	render: function(){

		var skills = this.props.skills.map((skill) => {
			return (
				<div key={skill.id}>
					<Skill skill={skill} handleDelete={this.handleDelete.bind(this, skill.id)} handleUpdate={this.handleUpdate} />
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