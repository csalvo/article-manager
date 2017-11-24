var Body = React.createClass({

getInitialState() {
    return {articles: []}
  },

  componentDidMount(){
        $.ajax({
            url: `/api/articles`,
            type: 'GET',
            success:(response) => {
               this.setState({articles: response});
            }
        });
  },
    
    handleSubmit(article) {
        var newState = this.state.articles.concat(article);
        this.setState({ articles: newState })
    },


    handleDelete(id) {
        $.ajax({
            url: `/api/articles/${id}`,
            type: 'DELETE',
            success:() => {
               this.removeArticleClient(id);
            }
        });
    },

    removeArticleClient(id) {
        var newArticles = this.state.articles.filter((article) => {
            return article.id != id;
        });

        this.setState({ articles: newArticles });
    },



    handleUpdate(article) {
        $.ajax({
                url: `/api/articles/${article.id}`,
                type: 'PUT',
                data: { article: article },
                success: () => {
                    this.updateArticles(article);

                }
            }
        )},

    updateArticles(article) {
        var articles = this.state.articles.filter((i) => { return i.id != article.id });
        articles.push(article);

        this.setState({articles: articles });
    },


  
    render() {
        return (
            <div>
                <NewArticle handleSubmit={this.handleSubmit}/>
                <AllArticles  articles={this.state.articles}  handleDelete={this.handleDelete} onUpdate={this.handleUpdate}/>
            </div>
        )
    }

});