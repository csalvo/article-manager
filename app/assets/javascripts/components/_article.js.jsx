var Article = React.createClass({
    getInitialState() {
        return {editable: false}
    },
    handleEdit() {
        if(this.state.editable) {
            var title = this.refs.title.value;
            var id = this.props.article.id;
            var description = this.refs.description.value;
            var author = this.refs.author.value;
            var tags = this.refs.tags.value;
            var article = {id: id , title: title , description: description, author: author, tags: tags};
            this.props.handleUpdate(article);
        }
        this.setState({ editable: !this.state.editable })
    },
    handleCancel(){
        this.setState({ editable: !this.state.editable })
    },

    render() {
        var name = this.state.editable ? 
                    <input type='text' ref='title' defaultValue={this.props.article.title} /> : 
                    <h3>{this.props.article.title}</h3>;

        var author = this.state.editable ? 
                    <input type='text' ref='author' defaultValue={this.props.article.author} /> : 
                    <p><b>Author:</b> {this.props.article.author}</p>;

        var tags = this.state.editable ? 
                    <input type='text' ref='tags' defaultValue={this.props.article.tags} /> : 
                    <p><b>Tags:</b> {this.props.article.tags}</p>;

        var description = this.state.editable ? 
                    <input type='text' ref='description' defaultValue={this.props.article.description} /> : 
                    <p>{this.props.article.description}</p>;
        
        var deleteOrCancel = this.state.editable ?
                    <button className='cancel' onClick={this.handleCancel}>Cancel</button> :
                    <button className='delete' onClick={this.props.handleDelete}>Delete</button>

        return (
            <div className='singleArticle'>
                {name}
                {author}
                {description}
                {tags}
                <p><b>Created at:</b> {this.props.article.created_at.substring(0,10)}</p>
                <p><b>Updated at:</b> {this.props.article.updated_at.substring(0,10)}</p>
                <button className='saveChanges' onClick={this.handleEdit}> {this.state.editable ? 'Save' : 'Edit' } </button>
                {deleteOrCancel}
            </div>
        )
    }
});