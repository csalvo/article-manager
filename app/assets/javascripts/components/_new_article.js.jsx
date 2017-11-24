var NewArticle = React.createClass({
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
            }
        });
    },
    render() {
        return (
                <div>
                    <input ref='title' placeholder='Enter the title of the article' />
                    <input ref='description' placeholder='Enter the article text' />
                    <input ref='author' placeholder='Enter the name of the author' />
                    <input ref='tags' placeholder='Enter tags for the article' />
                    <button onClick={this.handleClick}>Submit</button>
                </div>

        )
    }
});