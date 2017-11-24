var NewArticle = React.createClass({
    getInitialState() {
        return {validData: true}
    },
    handleClick() {
            var title = this.refs.title.value;
            var description = this.refs.description.value;
            var author = this.refs.author.value;
            var tags = this.refs.tags.value;

        $.ajax({
            url: '/api/articles',
            type: 'POST',
            data: { article: { title: title , description: description, author: author, tags: tags} },
            success: (article) => {
                this.props.handleSubmit(article);
                this.refs.title.value = "";
                this.refs.author.value = "";
                this.refs.description.value = "";
                this.refs.tags.value = "";
                this.setState({validData: true});
            },
            error: () => {this.setState({validData: false})}
        });
    },
    render() { 

        var isDataValid = !this.state.validData ? 
                    <p>Please fill out all fields before submitting.</p> :
                    <p></p>
        return (
        <div className = "newArticleContainer">
                <div className="addArticle">
                    <h3>Add an Article</h3>
                    <input ref='title' placeholder='Enter the title of the article' />
                    <br/>
                    <textArea className='desc' ref='description' placeholder='Enter the article text' />
                    <br/>
                    <input ref='author' placeholder='Enter the name of the author' />
                    <br/>
                    <input ref='tags' placeholder='Enter tags for the article' />
                    <br/>
                    <button className='submitArticle' onClick={this.handleClick}>Submit</button>
                    {isDataValid}
                </div>
            </div>
        )
    }
});
